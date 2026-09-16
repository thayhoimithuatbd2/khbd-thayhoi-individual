import React, { useState } from 'react';
import { Download, CheckCircle, AlertTriangle, FileText, Table as TableIcon } from 'lucide-react';
import { GeneratedWeekPlan, TeacherInfo } from '../types';
import { BaoBaiTable } from './BaoBaiTable';
import { exportBaoBaiOnlyToDocx } from '../utils/docxGenerator';

interface DocumentPreviewProps {
  plan: GeneratedWeekPlan;
  teacher: TeacherInfo;
  onExportDocx: () => void;
  onOpenValidation: () => void;
  onOpenTimetable?: () => void;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({
  plan,
  teacher,
  onExportDocx,
  onOpenValidation,
  onOpenTimetable,
}) => {
  const [viewMode, setViewMode] = useState<'full' | 'baobai'>('full');
  const [exportingBaoBai, setExportingBaoBai] = useState(false);

  const handleExportBaoBaiOnly = async () => {
    try {
      setExportingBaoBai(true);
      await exportBaoBaiOnlyToDocx(plan.baoBai, teacher);
    } catch (err) {
      console.error(err);
      alert('Không thể xuất Báo bài. Vui lòng thử lại.');
    } finally {
      setExportingBaoBai(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-200/70 p-4 sm:p-6 lg:p-8">
      {/* Top Banner with Document Info & Quick Controls */}
      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow-sm border border-slate-300/80 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              TUẦN {plan.weekNumber}
            </span>
            <span className="text-sm font-semibold text-slate-900">
              {plan.startDateStr} – {plan.endDateStr}
            </span>
            <span className="text-xs text-slate-500">• {plan.baoBai?.totalTiet || 19} tiết báo bài</span>
            <span className="text-xs text-slate-500">• {plan.lessons.length} Khối giảng dạy</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Mẫu chuẩn: <strong className="text-slate-700">TUAN 01.docx (Kẻ bảng Báo bài + KHBD)</strong> • GV: {teacher.name}
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 mt-3">
            <button
              type="button"
              id="view-mode-full-btn"
              onClick={() => setViewMode('full')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition ${
                viewMode === 'full'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Toàn bộ KHBD (Kèm Báo bài)</span>
            </button>
            <button
              type="button"
              id="view-mode-baobai-btn"
              onClick={() => setViewMode('baobai')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition ${
                viewMode === 'baobai'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Chỉ Báo bài (kẻ bảng)</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={onOpenValidation}
            className={`inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition ${
              plan.allPassed
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100'
                : 'bg-amber-50 text-amber-700 border border-amber-300 hover:bg-amber-100'
            }`}
          >
            {plan.allPassed ? (
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            )}
            <span>QA 30 Điểm ({plan.validationResults.filter(r => r.passed).length}/30 Đạt)</span>
          </button>

          <button
            onClick={handleExportBaoBaiOnly}
            disabled={exportingBaoBai}
            className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-blue-700 hover:bg-blue-600 text-white shadow transition active:scale-95 disabled:opacity-50"
            title="Xuất riêng file Báo bài kẻ bảng tuần này"
          >
            <Download className="w-4 h-4" />
            <span>{exportingBaoBai ? 'Đang xuất...' : 'Tải riêng Báo bài (.docx)'}</span>
          </button>

          <button
            onClick={onExportDocx}
            className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 text-white shadow transition active:scale-95"
            title="Xuất toàn bộ file KHBD tuần này (bao gồm Báo bài kẻ bảng)"
          >
            <Download className="w-4 h-4" />
            <span>Tải TUAN {String(plan.weekNumber).padStart(2, '0')}.docx</span>
          </button>
        </div>
      </div>

      {/* Simulated Microsoft Word Document Canvas */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-slate-300 rounded-sm font-['Times_New_Roman',_Times,_serif] text-black">
        {/* A4 Page Simulation */}
        <div className="px-8 sm:px-14 py-10 sm:py-14 text-[13pt] leading-[1.45] text-justify space-y-6">
          {/* Running Header */}
          <div className="border-b border-slate-300 pb-2 text-[11pt] flex items-center justify-between text-slate-700 select-none">
            <span>Kế hoạch bài dạy môn Mĩ thuật</span>
            <span className="font-semibold">Trang 1</span>
            <span>GV: {teacher.name}</span>
          </div>

          {/* Week Title */}
          <div className="pt-2">
            <h1 className="text-[14pt] font-bold underline text-left tracking-wide uppercase">
              TUẦN {plan.weekNumber}
            </h1>
          </div>

          {/* KẾ HOẠCH BÁO BÀI (KẺ BẢNG) - Identical to TUAN 01 */}
          {plan.baoBai && (
            <BaoBaiTable
              baoBai={plan.baoBai}
              teacher={teacher}
              onOpenTimetable={onOpenTimetable}
            />
          )}

          {/* If viewMode is 'baobai', only show Báo bài above; if 'full', show detailed lessons */}
          {viewMode === 'full' && plan.lessons.map((lesson, idx) => {
            return (
              <div key={lesson.grade} className="space-y-4 pt-4">
                {/* Schedule lines for this grade */}
                <div className="text-center font-bold text-[13pt] space-y-1">
                  {lesson.dateLines.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>

                {/* Grade Heading */}
                <div className="text-center pt-2">
                  <h2 className="text-[14pt] font-bold uppercase tracking-wide">
                    MĨ THUẬT {lesson.grade}
                  </h2>
                  <h3 className="text-[13pt] font-bold mt-1">
                    {typeof lesson.content.chuDeNumber === 'number'
                      ? `Chủ đề ${lesson.content.chuDeNumber}: ${lesson.content.chuDeName}`
                      : lesson.content.chuDeName}
                  </h3>
                  <p className="text-[13pt] font-bold italic mt-0.5">
                    {lesson.content.tietText}
                  </p>
                </div>

                {/* I. YÊU CẦU CẦN ĐẠT */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[13pt] font-bold">I. YÊU CẦU CẦN ĐẠT</h4>
                  <div className="space-y-1 pl-4">
                    {lesson.content.yeuCauCanDat.map((req, rIdx) => (
                      <p key={rIdx} className="text-justify">
                        {req}
                      </p>
                    ))}
                  </div>

                  {/* Integrated Objectives (Color Coded Run-Level) */}
                  {lesson.content.tichHop && lesson.content.tichHop.length > 0 && (
                    <div className="space-y-1.5 pl-4 pt-1">
                      {lesson.content.tichHop.map((th, thIdx) => (
                        <div key={thIdx} style={{ color: th.color }}>
                          <p className="font-bold">
                            {th.title}{th.code ? ` ${th.code}` : ''}
                          </p>
                          <div className="pl-4 space-y-0.5">
                            {th.content.map((c, cIdx) => (
                              <p key={cIdx}>
                                {c}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* II. ĐỒ DÙNG DẠY - HỌC */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[13pt] font-bold">II. ĐỒ DÙNG DẠY - HỌC VÀ HỌC LIỆU</h4>
                  <div className="pl-4 space-y-2">
                    <div>
                      <p className="font-bold">1. Giáo viên:</p>
                      <div className="pl-4 space-y-0.5">
                        {lesson.content.doDungDayHoc.giaoVien.map((item, gIdx) => (
                          <p key={gIdx}>{item}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">2. Học sinh:</p>
                      <div className="pl-4 space-y-0.5">
                        {lesson.content.doDungDayHoc.hocSinh.map((item, hIdx) => (
                          <p key={hIdx}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* III. CÁC HOẠT ĐỘNG DẠY - HỌC CHỦ YẾU (Bảng Word 2 Cột) */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[13pt] font-bold">III. CÁC HOẠT ĐỘNG DẠY - HỌC CHỦ YẾU</h4>
                  
                  <div className="border border-black overflow-hidden">
                    <table className="w-full border-collapse text-[12pt]">
                      <thead>
                        <tr className="border-b border-black bg-slate-50/50">
                          <th className="w-1/2 p-2.5 text-center font-bold border-r border-black">
                            HĐ của GV
                          </th>
                          <th className="w-1/2 p-2.5 text-center font-bold">
                            HĐ của HS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {lesson.content.hoatDongDayHoc.map((group, gIdx) => (
                          <React.Fragment key={gIdx}>
                            {/* Group Title Row */}
                            <tr className="border-b border-black">
                              <td
                                colSpan={2}
                                className="p-2 font-bold bg-slate-100/60 border-black"
                              >
                                {group.name}
                              </td>
                            </tr>

                            {/* Direct items */}
                            {group.items && group.items.map((item, iIdx) => (
                              <tr key={iIdx} className="border-b border-black">
                                <td className="w-1/2 p-2.5 align-top border-r border-black whitespace-pre-line text-justify">
                                  {item.teacher}
                                </td>
                                <td className="w-1/2 p-2.5 align-top whitespace-pre-line text-justify">
                                  {item.student}
                                </td>
                              </tr>
                            ))}

                            {/* SubSections (like 2.1, 2.2, 2.3...) */}
                            {group.subSections && group.subSections.map((sub, sIdx) => (
                              <React.Fragment key={sIdx}>
                                <tr className="border-b border-black">
                                  <td colSpan={2} className="p-2 font-bold italic bg-slate-50/80">
                                    {sub.title}
                                  </td>
                                </tr>
                                {sub.items.map((item, subItemIdx) => (
                                  <tr key={subItemIdx} className="border-b border-black">
                                    <td className="w-1/2 p-2.5 align-top border-r border-black whitespace-pre-line text-justify">
                                      {item.teacher}
                                    </td>
                                    <td className="w-1/2 p-2.5 align-top whitespace-pre-line text-justify">
                                      {item.student}
                                    </td>
                                  </tr>
                                ))}
                              </React.Fragment>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* IV. ĐIỀU CHỈNH SAU BÀI DẠY */}
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-[13pt] font-bold">IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)</h4>
                  <div className="space-y-1 text-slate-500 font-mono text-[11pt]">
                    {(lesson.content.dieuChinhSauBaiDay || [
                      '………………………………………………………………………………………………',
                      '………………………………………………………………………………………………',
                      '……………………………………………………………………………………………….'
                    ]).map((line, dIdx) => (
                      <p key={dIdx}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* Divider between grades */}
                {idx < plan.lessons.length - 1 && (
                  <div className="py-6 border-b-2 border-dashed border-slate-300 text-center text-xs text-slate-400 font-sans">
                    ✦✦✦
                  </div>
                )}
              </div>
            );
          })}

          {/* Signature Block */}
          <div className="pt-8 pb-4">
            <div className="grid grid-cols-2 text-center text-[13pt]">
              <div>
                <p className="font-bold">NGƯỜI XÂY DỰNG KHBD</p>
                <div className="h-20 flex items-end justify-center">
                  <p className="font-bold">{teacher.name}</p>
                </div>
              </div>
              <div>
                <p className="font-bold">
                  CHUYÊN MÔN NHÀ TRƯỜNG<br />TỔ TRƯỞNG ( TỔ PHÓ )
                </p>
                <div className="h-20 flex items-end justify-center">
                  <p className="italic text-slate-400 text-[11pt]">(Ký và ghi rõ họ tên)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Running Footer */}
          <div className="border-t border-slate-300 pt-2 text-[11pt] flex items-center justify-between text-slate-700 select-none">
            <span>{teacher.school}</span>
            <span>Năm học: {teacher.schoolYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
