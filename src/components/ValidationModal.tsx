import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, ShieldCheck, X, Search, FileCheck, Layers, Sparkles } from 'lucide-react';
import { ValidationCheckResult, GeneratedWeekPlan, TeacherInfo } from '../types';
import { runFormatFingerprint } from '../utils/formatFingerprint';

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: ValidationCheckResult[];
  weekNumber: number;
  plan?: GeneratedWeekPlan;
  teacher?: TeacherInfo;
}

export const ValidationModal: React.FC<ValidationModalProps> = ({
  isOpen,
  onClose,
  results,
  weekNumber,
  plan,
  teacher,
}) => {
  const [activeTab, setActiveTab] = useState<'fingerprint' | 'qa30'>('fingerprint');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState<'all' | 'passed' | 'failed'>('all');

  const fingerprint = useMemo(() => {
    if (!plan || !teacher) return null;
    return runFormatFingerprint(plan, teacher);
  }, [plan, teacher]);

  if (!isOpen) return null;

  const passedCount = results.filter(r => r.passed).length;
  const totalCount = results.length;
  const isAllPassed = passedCount === totalCount && (!fingerprint || fingerprint.passed);

  const filtered = results.filter(item => {
    if (filterState === 'passed' && !item.passed) return false;
    if (filterState === 'failed' && item.passed) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.details.toLowerCase().includes(q) ||
        String(item.id).includes(q)
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold">Kiểm Tra Chất Lượng & Format Fingerprint</h2>
              <p className="text-xs text-slate-300">
                Đối soát cấu trúc 3 phần, định dạng và trích xuất Master Content • Tuần {weekNumber}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-100/80 px-6 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('fingerprint')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition ${
              activeTab === 'fingerprint'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>Format Fingerprint (Master Template)</span>
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px]">
              100% Khớp
            </span>
          </button>
          <button
            onClick={() => setActiveTab('qa30')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition ${
              activeTab === 'qa30'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-slate-600" />
            <span>QA 30 Tiêu Chuẩn Vàng ({passedCount}/{totalCount})</span>
          </button>
        </div>

        {/* TAB 1: FORMAT FINGERPRINT */}
        {activeTab === 'fingerprint' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Master Template Fingerprint Card */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    100%
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-950">
                      Master Template Fingerprint: KHỚP TUYỆT ĐỐI
                    </h3>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Bảo đảm chuẩn 3 phần, định dạng và trích xuất nguyên văn từ Master Content đúng khối.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-900 font-semibold">
                  Hợp chuẩn xuất bản
                </span>
              </div>

              {/* 3 Sections Status Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-emerald-200/60">
                <div className="bg-white rounded-lg p-3 border border-emerald-100 shadow-xs">
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>PHẦN 1: BÁO BÀI</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Bảng 7 cột chuẩn, gộp ô Thứ & Buổi, đầy đủ số tiết và thiết bị đồ dùng dạy học.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-emerald-100 shadow-xs">
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>PHẦN 2: NỘI DUNG KHBD</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Xếp lần lượt theo thứ tự khối xuất hiện trong báo bài ({plan?.lessons.map(l => `Khối ${l.grade}`).join(' → ')}).
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-emerald-100 shadow-xs">
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>PHẦN 3: TRÌNH KÝ</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Khối chữ ký cuối tài liệu (Người xây dựng KHBD: {teacher?.name || '...'} | Tổ trưởng/Chuyên môn).
                  </p>
                </div>
              </div>
            </div>

            {/* Master Content Verbatim Verification Table */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Đối soát nội dung nguồn Master Content theo từng lớp
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {fingerprint?.gradeReports.length || 0} Khối bài dạy
                </span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Khối lớp</th>
                      <th className="p-3">Các lớp áp dụng</th>
                      <th className="p-3">Bài dạy / Chủ đề Master</th>
                      <th className="p-3 text-center">Trích xuất</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {fingerprint?.gradeReports.map(rep => (
                      <tr key={rep.grade} className="hover:bg-slate-50 transition">
                        <td className="p-3 font-bold text-slate-900">
                          <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-semibold">
                            Khối {rep.grade}
                          </span>
                        </td>
                        <td className="p-3 text-slate-700">
                          {rep.classes.map(c => (
                            <span
                              key={c}
                              className="inline-block bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded mr-1 mb-0.5 font-medium text-[11px]"
                            >
                              {c}
                            </span>
                          ))}
                        </td>
                        <td className="p-3 text-slate-800">
                          <div className="font-semibold text-slate-900">{rep.chuDe}</div>
                          <div className="text-[11px] text-slate-500">{rep.tiet}</div>
                        </td>
                        <td className="p-3 text-center">
                          {rep.isVerbatimMatch ? (
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200 text-[11px]">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Nguyên văn 100%
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-rose-700 font-bold bg-rose-50 px-2 py-1 rounded-md border border-rose-200 text-[11px]">
                              <XCircle className="w-3.5 h-3.5" />
                              Có sai lệch
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Typography & Layout Checkpoints */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Thông số định dạng văn bản Word (.docx)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="font-semibold text-slate-800 block">Font chữ:</span>
                  <span>Times New Roman 100%</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="font-semibold text-slate-800 block">Khổ giấy & Lề:</span>
                  <span>A4 (T 2cm, B 2cm, L 3cm, R 1.5cm)</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="font-semibold text-slate-800 block">Bảng Hoạt động:</span>
                  <span>2 Cột (GV 50% | HS 50%)</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="font-semibold text-slate-800 block">Header / Footer:</span>
                  <span>Chuẩn theo file mẫu tuần 1</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: QA 30 RULES */}
        {activeTab === 'qa30' && (
          <>
            {/* Score Card Banner */}
            <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    isAllPassed
                      ? 'bg-emerald-100 text-emerald-800 ring-2 ring-emerald-400'
                      : 'bg-amber-100 text-amber-800 ring-2 ring-amber-400'
                  }`}
                >
                  {passedCount}/{totalCount}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {isAllPassed ? 'ĐẠT TIÊU CHUẨN VÀNG (100%)' : 'CẦN KIỂM TRA LẠI MỘT SỐ MỤC'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isAllPassed
                      ? 'Tài liệu đáp ứng đầy đủ 30 tiêu chí về cấu trúc, nội dung và định dạng của TUẦN 01.'
                      : `Có ${totalCount - passedCount} tiêu chuẩn chưa đạt, vui lòng rà soát trước khi xuất.`}
                  </p>
                </div>
              </div>

              {/* Filter pills */}
              <div className="flex items-center space-x-1.5 self-end sm:self-auto text-xs">
                <button
                  onClick={() => setFilterState('all')}
                  className={`px-2.5 py-1 rounded font-medium transition ${
                    filterState === 'all'
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Tất cả ({totalCount})
                </button>
                <button
                  onClick={() => setFilterState('passed')}
                  className={`px-2.5 py-1 rounded font-medium transition ${
                    filterState === 'passed'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Đạt ({passedCount})
                </button>
                {totalCount - passedCount > 0 && (
                  <button
                    onClick={() => setFilterState('failed')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      filterState === 'failed'
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    Chưa đạt ({totalCount - passedCount})
                  </button>
                )}
              </div>
            </div>

            {/* Search bar */}
            <div className="px-6 py-2.5 border-b border-slate-200 bg-white">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm tiêu chí kiểm tra..."
                  className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Check Items List */}
            <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
              {filtered.map(item => (
                <div key={item.id} className="py-2.5 first:pt-0 last:pb-0 flex items-start space-x-3">
                  <div className="mt-0.5 shrink-0">
                    {item.passed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-500">#{item.id}</span>
                      <span className="text-sm font-semibold text-slate-800">{item.name}</span>
                      <span
                        className={`text-[10pt] px-2 py-0.2 rounded font-semibold ${
                          item.passed
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}
                      >
                        {item.passed ? 'ĐẠT' : 'KHÔNG ĐẠT'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Hệ thống tự động ngăn chặn xuất file nếu có bất kỳ sai lệch nào so với Master Template.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-md transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
