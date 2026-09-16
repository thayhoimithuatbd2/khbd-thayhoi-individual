import React, { useState } from 'react';
import { BookOpen, X, ChevronRight, CheckCircle2, Search } from 'lucide-react';
import { getMasterContent, getMasterFileName } from '../data/masterContentIndex';

interface MasterContentLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWeekAndGrade: (week: number, grade: number) => void;
}

export const MasterContentLibraryModal: React.FC<MasterContentLibraryModalProps> = ({
  isOpen,
  onClose,
  onSelectWeekAndGrade,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<number>(1);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const content = getMasterContent(selectedGrade, selectedWeek);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold">Kho Dữ Liệu MASTER CONTENT (Khối 1 – 5)</h2>
              <p className="text-xs text-slate-300">
                5 tệp nguồn độc lập theo chương trình Kết nối tri thức với cuộc sống (35 Tuần)
              </p>
            </div>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-md transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grade Tabs */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map(g => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
                  selectedGrade === g
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                <span>Khối {g}</span>
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-mono">
            Tệp: <strong>{getMasterFileName(selectedGrade)}</strong>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Week Selector Sidebar */}
          <div className="w-full md:w-56 border-r border-slate-200 bg-slate-50 overflow-y-auto p-2 divide-y divide-slate-200">
            {Array.from({ length: 35 }, (_, i) => i + 1).map(w => {
              const weekContent = getMasterContent(selectedGrade, w);
              const isSelected = selectedWeek === w;
              return (
                <button
                  key={w}
                  onClick={() => setSelectedWeek(w)}
                  className={`w-full text-left p-2 rounded-md transition text-xs flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-100 text-purple-900 font-bold'
                      : 'hover:bg-slate-200/70 text-slate-700'
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className="font-bold">Tuần {w}:</span>{' '}
                    <span className="text-slate-600 font-normal">
                      {weekContent?.chuDeName || ''}
                    </span>
                  </div>
                  {isSelected && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-purple-700" />}
                </button>
              );
            })}
          </div>

          {/* Detailed Content View */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {content ? (
              <div className="space-y-4">
                {/* Title Card */}
                <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100 flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-purple-200 text-purple-900 mb-1">
                      MĨ THUẬT {selectedGrade} • TUẦN {selectedWeek}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {typeof content.chuDeNumber === 'number'
                        ? `Chủ đề ${content.chuDeNumber}: ${content.chuDeName}`
                        : content.chuDeName}{' '}
                      <span className="text-purple-700 font-normal italic">{content.tietText}</span>
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      onSelectWeekAndGrade(selectedWeek, selectedGrade);
                      onClose();
                    }}
                    className="px-3 py-1.5 text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
                  >
                    Xem & Xuất Tuần {selectedWeek}
                  </button>
                </div>

                {/* Yêu cầu cần đạt */}
                <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    I. Yêu Cầu Cần Đạt
                  </h4>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                    {content.yeuCauCanDat.map((y, idx) => (
                      <li key={idx}>{y}</li>
                    ))}
                  </ul>

                  {/* Tích hợp */}
                  {content.tichHop && content.tichHop.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {content.tichHop.map((th, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg border text-xs" style={{ borderColor: th.color + '40', backgroundColor: th.color + '10' }}>
                          <span className="font-bold" style={{ color: th.color }}>
                            {th.title}{th.code ? ` ${th.code}` : ''}
                          </span>
                          <ul className="list-disc list-inside mt-1 space-y-0.5" style={{ color: th.color }}>
                            {th.content.map((c, cIdx) => (
                              <li key={cIdx}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Đồ dùng dạy học */}
                <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    II. Đồ Dùng Dạy - Học
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <p className="font-bold text-slate-900 mb-1">1. Giáo viên:</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        {content.doDungDayHoc.giaoVien.map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <p className="font-bold text-slate-900 mb-1">2. Học sinh:</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        {content.doDungDayHoc.hocSinh.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hoạt động dạy học */}
                <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    III. Các Hoạt Động Dạy Học Chủ Yếu
                  </h4>
                  <div className="space-y-2">
                    {content.hoatDongDayHoc.map((group, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs">
                        <p className="font-bold text-slate-900 mb-1">{group.name}</p>
                        {group.items && (
                          <p className="text-slate-600 line-clamp-2 italic">
                            GV: {group.items[0]?.teacher.replace(/\n/g, ' ')}
                          </p>
                        )}
                        {group.subSections && (
                          <div className="pl-3 mt-1 space-y-1">
                            {group.subSections.map((sub, sIdx) => (
                              <div key={sIdx} className="text-slate-700">
                                <span className="font-semibold">{sub.title}:</span>{' '}
                                <span className="text-slate-600 italic">
                                  {sub.items[0]?.teacher.replace(/\n/g, ' ')}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400 text-xs">
                Chưa tìm thấy dữ liệu cho Tuần {selectedWeek} của Khối {selectedGrade}.
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Nội dung được bảo toàn nguyên bản 100% từ 5 bộ tài liệu Master Content
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
