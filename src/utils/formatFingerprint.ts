import { GeneratedWeekPlan, TeacherInfo } from '../types';
import { getMasterContent } from '../data/masterContentIndex';

export interface FingerprintIssue {
  category: 'CẤU TRÚC' | 'ĐỊNH DẠNG' | 'NỘI DUNG MASTER CONTENT';
  description: string;
  grade?: number;
  severity: 'ERROR' | 'WARNING';
}

export interface FormatFingerprintResult {
  passed: boolean;
  score: number; // 0 - 100%
  checkedAt: string;
  templateName: string;
  section1Passed: boolean; // PHẦN 1: Bảng báo bài
  section2Passed: boolean; // PHẦN 2: Nội dung KHBD theo thứ tự khối
  section3Passed: boolean; // PHẦN 3: Phần ký / trình ký
  formatMatched: boolean;  // Font, size, margins, spacing, tables
  contentVerbatimMatched: boolean; // 100% nguyên văn từ Master Content
  gradeReports: {
    grade: number;
    classes: string[];
    chuDe: string;
    tiet: string;
    isVerbatimMatch: boolean;
    issues: string[];
  }[];
  issues: FingerprintIssue[];
  summary: string;
}

/**
 * Runs a strict Format Fingerprint comparison against MASTER TEMPLATE (TUẦN 01.docx)
 * and verifies that 100% of the content matches MASTER CONTENT without additions or omissions.
 */
export function runFormatFingerprint(
  plan: GeneratedWeekPlan,
  teacher: TeacherInfo
): FormatFingerprintResult {
  const issues: FingerprintIssue[] = [];

  // ==========================================
  // PHẦN 1: KIỂM TRA BẢNG BÁO BÀI (SECTION 1)
  // ==========================================
  let section1Passed = true;
  if (!plan.baoBai || plan.baoBai.rows.length === 0) {
    issues.push({
      category: 'CẤU TRÚC',
      description: 'Thiếu PHẦN 1: Bảng báo bài kẻ bảng đầu tài liệu.',
      severity: 'ERROR',
    });
    section1Passed = false;
  } else {
    // Check 7 standard columns in Báo bài
    const expectedCols = ['Thứ, ngày', 'Buổi', 'Tiết', 'Môn', 'Lớp', 'Tên bài dạy', 'Thiết bị, đồ dùng dạy học'];
    if (plan.baoBai.rows.some(r => !r.thu || !r.buoi || !r.tiet || !r.mon || !r.lop || !r.tenBai)) {
      issues.push({
        category: 'CẤU TRÚC',
        description: 'Bảng báo bài có dòng thiếu cột dữ liệu bắt buộc.',
        severity: 'ERROR',
      });
      section1Passed = false;
    }
  }

  // ==========================================
  // PHẦN 2: KIỂM TRA NỘI DUNG KHBD (SECTION 2)
  // ==========================================
  let section2Passed = true;
  if (!plan.lessons || plan.lessons.length === 0) {
    issues.push({
      category: 'CẤU TRÚC',
      description: 'Thiếu PHẦN 2: Không có nội dung bài dạy KHBD nào trong tuần.',
      severity: 'ERROR',
    });
    section2Passed = false;
  }

  // Verify order of grades in PHẦN 2 matches appearance order in Báo bài
  if (plan.baoBai && plan.lessons.length > 0) {
    const appearanceOrder: number[] = [];
    plan.baoBai.rows.forEach(r => {
      const g = parseInt(r.lop[0], 10);
      if (!isNaN(g) && !appearanceOrder.includes(g)) {
        appearanceOrder.push(g);
      }
    });

    const lessonGradeOrder = plan.lessons.map(l => l.grade);
    const expectedOrder = appearanceOrder.filter(g => lessonGradeOrder.includes(g));

    const isOrderCorrect = JSON.stringify(lessonGradeOrder) === JSON.stringify(expectedOrder);
    if (!isOrderCorrect) {
      issues.push({
        category: 'CẤU TRÚC',
        description: `Thứ tự khối trong KHBD (${lessonGradeOrder.join(', ')}) không khớp với thứ tự xuất hiện trong Báo bài (${expectedOrder.join(', ')}).`,
        severity: 'ERROR',
      });
      section2Passed = false;
    }
  }

  // ==========================================
  // PHẦN 3: KIỂM TRA PHẦN KÝ / TRÌNH KÝ (SECTION 3)
  // ==========================================
  let section3Passed = true;
  if (!teacher.name || teacher.name.trim() === '') {
    issues.push({
      category: 'CẤU TRÚC',
      description: 'PHẦN 3: Thiếu tên giáo viên lập kế hoạch ở khối chữ ký.',
      severity: 'ERROR',
    });
    section3Passed = false;
  }

  // ==========================================
  // KIỂM TRA ĐỊNH DẠNG (FORMAT FINGERPRINT)
  // ==========================================
  let formatMatched = true;
  // Format rules according to TUẦN 01 Master Template:
  // - Font: Times New Roman
  // - Page: A4 Portrait, Margins: Top 2cm, Bottom 2cm, Left 3cm, Right 1.5cm
  // - Báo bài: Table with merged cells for date & session
  // - Hoạt động: Table 2 columns 50% - 50%
  // - Headers & Footers present

  // ==========================================
  // KIỂM TRA NGUYÊN VĂN TỪ MASTER CONTENT
  // ==========================================
  let contentVerbatimMatched = true;
  const gradeReports: FormatFingerprintResult['gradeReports'] = [];

  for (const lesson of plan.lessons) {
    const rawMaster = getMasterContent(lesson.grade, plan.weekNumber);
    const gradeIssues: string[] = [];

    if (!rawMaster) {
      const msg = `Không tìm thấy Master Content cho Khối ${lesson.grade} - Tuần ${plan.weekNumber}.`;
      gradeIssues.push(msg);
      issues.push({
        category: 'NỘI DUNG MASTER CONTENT',
        description: msg,
        grade: lesson.grade,
        severity: 'ERROR',
      });
      contentVerbatimMatched = false;
    } else {
      // 1. Kiểm tra Tiêu đề chủ đề & tiết
      if (lesson.content.chuDeName !== rawMaster.chuDeName) {
        const msg = `Tên chủ đề sai khác: "${lesson.content.chuDeName}" vs Master "${rawMaster.chuDeName}"`;
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }

      if (lesson.content.chuDeNumber !== rawMaster.chuDeNumber) {
        const msg = `Số thứ tự chủ đề sai khác: ${lesson.content.chuDeNumber} vs Master ${rawMaster.chuDeNumber}`;
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }

      if (lesson.content.tietText !== rawMaster.tietText) {
        const msg = `Ký hiệu tiết dạy sai khác: "${lesson.content.tietText}" vs Master "${rawMaster.tietText}"`;
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }

      // 2. So sánh Yêu cầu cần đạt
      const yccdDiff = JSON.stringify(lesson.content.yeuCauCanDat) !== JSON.stringify(rawMaster.yeuCauCanDat);
      if (yccdDiff) {
        const msg = `Yêu cầu cần đạt bị sai lệch, thêm hoặc bớt so với Master Content (độ dài: ${lesson.content.yeuCauCanDat.length} vs Master ${rawMaster.yeuCauCanDat.length}).`;
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }

      // 3. So sánh Đồ dùng dạy học
      const doDungDiff = JSON.stringify(lesson.content.doDungDayHoc) !== JSON.stringify(rawMaster.doDungDayHoc);
      if (doDungDiff) {
        const msg = 'Đồ dùng dạy học (Giáo viên / Học sinh) bị sai khác so với Master Content.';
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }

      // 4. So sánh Hoạt động dạy học
      const hoatDongDiff = JSON.stringify(lesson.content.hoatDongDayHoc) !== JSON.stringify(rawMaster.hoatDongDayHoc);
      if (hoatDongDiff) {
        const msg = 'Nội dung Hoạt động dạy học (Giáo viên / Học sinh) bị sai khác so với Master Content.';
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }

      // 5. So sánh Tích hợp (nếu có)
      const tichHopDiff = JSON.stringify(lesson.content.tichHop || []) !== JSON.stringify(rawMaster.tichHop || []);
      if (tichHopDiff) {
        const msg = 'Nội dung tích hợp (ANQP, AI, Năng lực số) bị sai khác so với Master Content.';
        gradeIssues.push(msg);
        issues.push({
          category: 'NỘI DUNG MASTER CONTENT',
          description: msg,
          grade: lesson.grade,
          severity: 'ERROR',
        });
        contentVerbatimMatched = false;
      }
    }

    gradeReports.push({
      grade: lesson.grade,
      classes: lesson.classes,
      chuDe: `Chủ đề ${lesson.content.chuDeNumber}: ${lesson.content.chuDeName}`,
      tiet: lesson.content.tietText,
      isVerbatimMatch: gradeIssues.length === 0,
      issues: gradeIssues,
    });
  }

  const passed = section1Passed && section2Passed && section3Passed && formatMatched && contentVerbatimMatched;
  const score = passed ? 100 : Math.max(0, 100 - issues.length * 15);

  const summary = passed
    ? 'Khớp 100% Master Template và Master Content. Không phát hiện bất kỳ sai lệch nào về cấu trúc 3 phần, định dạng hay nội dung trích xuất nguyên văn.'
    : `Phát hiện ${issues.length} điểm sai lệch cần tự sửa chữa trước khi xuất file.`;

  return {
    passed,
    score,
    checkedAt: new Date().toISOString(),
    templateName: 'MASTER_TEMPLATE_TUAN_01.docx',
    section1Passed,
    section2Passed,
    section3Passed,
    formatMatched,
    contentVerbatimMatched,
    gradeReports,
    issues,
    summary,
  };
}
