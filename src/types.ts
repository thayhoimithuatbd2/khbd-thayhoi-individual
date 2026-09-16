export interface TimetableEntry {
  id: string;
  thu: 'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu';
  buoi: 'Sáng' | 'Chiều';
  tiet: number;
  mon: string;
  lop: string;
  tenBai: string;
  thietBi: string;
}

export interface TeacherInfo {
  name: string; // "Nguyễn Văn Hợi"
  school: string; // "Trường Tiểu học Bảo Đài số 2"
  schoolYear: string; // "2026 - 2027"
  subject: string; // "Mĩ thuật"
  startDateWeek1: string; // "2026-09-07"
}

export interface ActivityStep {
  teacher: string;
  student: string;
}

export interface ActivityGroup {
  name: string; // e.g., "1. Hoạt động: khởi động", "2. Hoạt động: hình thành kiến thức mới.", "3. Hoạt động: luyện tập, thực hành.", "4. Vận dụng:"
  subSections?: {
    title: string;
    items: ActivityStep[];
  }[];
  items?: ActivityStep[];
}

export interface LessonContent {
  grade: number; // 1 to 5
  week: number;
  chuDeNumber: number | string;
  chuDeName: string;
  tietText: string; // e.g., "(1 Tiết)", "(Tiết 1)", "(Tiết 2)", "(Tiết 3)", "(Tiết 4)"
  yeuCauCanDat: string[];
  tichHop?: {
    type: 'ANQP' | 'AI' | 'NangLucSo' | 'STEM' | 'GDDP' | 'QuyenConNguoi' | 'ATGT';
    code?: string;
    title: string;
    content: string[];
    color: string; // hex
  }[];
  doDungDayHoc: {
    giaoVien: string[];
    hocSinh: string[];
  };
  hoatDongDayHoc: ActivityGroup[];
  dieuChinhSauBaiDay?: string[];
}

export interface BaoBaiRow {
  id: string;
  thu: 'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu';
  thuText: string;
  ngay: string;
  buoi: 'Sáng' | 'Chiều';
  tiet: number;
  mon: string;
  lop: string;
  grade: number;
  tenBai: string;
  thietBi: string;
}

export interface BaoBaiGroupedSession {
  buoi: 'Sáng' | 'Chiều';
  totalSessionRows: number;
  rows: BaoBaiRow[];
}

export interface BaoBaiGroupedDay {
  thu: 'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu';
  thuText: string;
  ngay: string;
  totalDayRows: number;
  sessions: BaoBaiGroupedSession[];
}

export interface BaoBaiWeekData {
  weekNumber: number;
  startDateStr: string;
  endDateStr: string;
  teacher: TeacherInfo;
  rows: BaoBaiRow[];
  groupedDays: BaoBaiGroupedDay[];
  totalTiet: number;
}

export interface GeneratedWeekPlan {
  weekNumber: number;
  startDateStr: string;
  endDateStr: string;
  dayDates: {
    thu: string;
    dateFormatted: string;
    classes: string[];
  }[];
  gradesIncluded: number[];
  baoBai: BaoBaiWeekData;
  lessons: {
    grade: number;
    classes: string[];
    content: LessonContent;
    dateLines: string[];
  }[];
  validationResults: ValidationCheckResult[];
  allPassed: boolean;
}

export interface ValidationCheckResult {
  id: number;
  name: string;
  passed: boolean;
  details: string;
}
