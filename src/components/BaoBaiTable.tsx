import React from 'react';
import { BaoBaiWeekData, TeacherInfo } from '../types';
import { Download, Check, Copy, Edit3, Calendar } from 'lucide-react';
import { exportBaoBaiOnlyToDocx } from '../utils/docxGenerator';
import { groupBaoBaiRows } from '../utils/baoBaiGenerator';

interface BaoBaiTableProps {
  baoBai: BaoBaiWeekData;
  teacher: TeacherInfo;
  onOpenTimetable?: () => void;
}

export const BaoBaiTable: React.FC<BaoBaiTableProps> = ({ baoBai, teacher, onOpenTimetable }) => {
  const [copied, setCopied] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);

  const groupedDays = baoBai.groupedDays && baoBai.groupedDays.length > 0
    ? baoBai.groupedDays
    : groupBaoBaiRows(baoBai.rows);

  const handleDownloadDocx = async () => {
    try {
      setDownloading(true);
      await exportBaoBaiOnlyToDocx(baoBai, teacher);
    } catch (err) {
      console.error(err);
      alert('Không thể xuất tệp Word cho Báo bài. Vui lòng thử lại.');
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyText = () => {
    const header = `KẾ HOẠCH BÁO BÀI TUẦN ${baoBai.weekNumber}\n(Từ ngày ${baoBai.startDateStr} đến ngày ${baoBai.endDateStr})\nGV: ${teacher.name}\n\n`;
    const rowsText = baoBai.rows
      .map(
        r =>
          `${r.thuText} (${r.ngay})\t${r.buoi}\tTiết ${r.tiet}\t${r.mon}\t${r.lop}\t${r.tenBai}\t${r.thietBi}`
      )
      .join('\n');
    navigator.clipboard.writeText(header + rowsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="bao-bai-table-container" className="my-6 border-2 border-stone-800 bg-white p-6 shadow-md rounded-none">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-300 print:hidden">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            KẺ BẢNG &amp; GỘP Ô CHUẨN TUẦN 01
          </span>
          <span className="text-xs text-stone-600 font-serif">
            Tổng số: <strong>{baoBai.totalTiet} tiết dạy</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          {onOpenTimetable && (
            <button
              type="button"
              id="edit-bao-bai-btn"
              onClick={onOpenTimetable}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-300 transition-colors"
              title="Chỉnh sửa tiết, lớp, thứ và tự động lưu lại cho các lần sau"
            >
              <Edit3 className="w-3.5 h-3.5 text-sky-600" />
              <span>Chỉnh sửa Báo bài</span>
            </button>
          )}
          <button
            type="button"
            id="copy-bao-bai-btn"
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors"
            title="Sao chép nội dung bảng Báo bài"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
          </button>
          <button
            type="button"
            id="download-bao-bai-docx-btn"
            onClick={handleDownloadDocx}
            disabled={downloading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors disabled:opacity-50"
            title="Tải riêng tệp Báo bài kẻ bảng (.docx)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloading ? 'Đang xuất...' : 'Tải riêng Báo bài (.docx)'}</span>
          </button>
        </div>
      </div>

      {/* Official Header */}
      <div className="text-center mb-5 font-serif text-stone-900">
        <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
          KẾ HOẠCH BÁO BÀI TUẦN {baoBai.weekNumber}
        </h3>
        <p className="text-xs italic text-stone-600 mt-0.5">
          (Từ ngày {baoBai.startDateStr} đến ngày {baoBai.endDateStr})
        </p>
        <p className="text-xs font-semibold mt-1">
          Môn: {teacher.subject} — Giáo viên: {teacher.name} — {teacher.school}
        </p>
      </div>

      {/* The Bordered Table (Kẻ bảng kèm gộp ô theo mẫu tuần 1) */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-stone-900 font-serif text-xs md:text-sm text-stone-900">
          <thead>
            <tr className="bg-stone-100 text-center font-bold">
              <th className="border border-stone-900 px-2 py-2 w-[15%]">Thứ, ngày</th>
              <th className="border border-stone-900 px-2 py-2 w-[8%]">Buổi</th>
              <th className="border border-stone-900 px-1 py-2 w-[6%]">Tiết</th>
              <th className="border border-stone-900 px-2 py-2 w-[10%]">Môn</th>
              <th className="border border-stone-900 px-2 py-2 w-[8%]">Lớp</th>
              <th className="border border-stone-900 px-3 py-2 text-center w-[35%]">Tên bài dạy</th>
              <th className="border border-stone-900 px-2 py-2 text-center w-[18%]">Thiết bị dạy học</th>
            </tr>
          </thead>
          <tbody>
            {groupedDays.map(day =>
              day.sessions.map((session, sIdx) =>
                session.rows.map((row, rIdx) => {
                  const isFirstDayRow = sIdx === 0 && rIdx === 0;
                  const isFirstSessionRow = rIdx === 0;

                  return (
                    <tr key={row.id || `${day.thuText}-${session.buoi}-${row.tiet}`} className="hover:bg-amber-50/60 transition-colors bg-white">
                      {isFirstDayRow && (
                        <td
                          rowSpan={day.totalDayRows}
                          className="border border-stone-900 px-2 py-2 text-center align-middle bg-stone-50/70"
                        >
                          <span className="font-bold block text-sm">{day.thuText}</span>
                          <span className="text-xs text-stone-600 block">({day.ngay})</span>
                        </td>
                      )}
                      {isFirstSessionRow && (
                        <td
                          rowSpan={session.totalSessionRows}
                          className="border border-stone-900 px-2 py-2 text-center align-middle font-semibold bg-stone-50/40"
                        >
                          {session.buoi}
                        </td>
                      )}
                      <td className="border border-stone-900 px-1 py-2 text-center align-middle font-semibold">
                        {row.tiet}
                      </td>
                      {isFirstSessionRow && (
                        <td
                          rowSpan={session.totalSessionRows}
                          className="border border-stone-900 px-2 py-2 text-center align-middle bg-stone-50/40"
                        >
                          {row.mon}
                        </td>
                      )}
                      <td className="border border-stone-900 px-2 py-2 text-center align-middle font-bold text-stone-900">
                        <span className="inline-block px-1.5 py-0.5 rounded bg-stone-200/70 border border-stone-300 font-mono text-xs">
                          {row.lop}
                        </span>
                      </td>
                      <td className="border border-stone-900 px-3 py-2 text-left align-middle leading-snug">
                        <span className="font-medium text-stone-900">{row.tenBai}</span>
                      </td>
                      <td className="border border-stone-900 px-2 py-2 text-left align-middle text-xs text-stone-700 leading-snug">
                        {row.thietBi}
                      </td>
                    </tr>
                  );
                })
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Signatures Block for Báo Bài */}
      <div className="grid grid-cols-2 gap-4 mt-8 pt-4 font-serif text-center text-xs md:text-sm text-stone-900">
        <div>
          <p className="font-bold uppercase">NGƯỜI XÂY DỰNG KHBD</p>
          <div className="h-16 flex items-end justify-center">
            <p className="font-bold">{teacher.name}</p>
          </div>
        </div>
        <div>
          <p className="font-bold uppercase">CHUYÊN MÔN NHÀ TRƯỜNG</p>
          <p className="text-xs font-semibold text-stone-700">TỔ TRƯỞNG ( TỔ PHÓ )</p>
          <p className="text-[11px] italic text-stone-500">(Ký và ghi rõ họ tên)</p>
          <div className="h-14 flex items-end justify-center">
            <p className="italic text-stone-400 font-normal"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
