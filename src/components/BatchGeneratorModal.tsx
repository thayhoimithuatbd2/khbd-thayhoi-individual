import React, { useState } from 'react';
import { Layers, Download, CheckCircle2, AlertCircle, X, Play, Loader2 } from 'lucide-react';
import { TeacherInfo, TimetableEntry } from '../types';
import { buildWeekPlan } from '../utils/planBuilder';
import { exportWeekPlanToDocx } from '../utils/docxGenerator';
import { getWeekDateRange } from '../utils/dateCalculator';

interface BatchGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStartWeek?: number;
  initialEndWeek?: number;
  timetable: TimetableEntry[];
  teacher: TeacherInfo;
  gradeFilter?: number;
}

export const BatchGeneratorModal: React.FC<BatchGeneratorModalProps> = ({
  isOpen,
  onClose,
  initialStartWeek = 2,
  initialEndWeek = 10,
  timetable,
  teacher,
  gradeFilter,
}) => {
  const [startWeek, setStartWeek] = useState<number>(initialStartWeek);
  const [endWeek, setEndWeek] = useState<number>(initialEndWeek);
  const [exportType, setExportType] = useState<'full' | 'baobai'>('full');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<{ current: number; total: number; currentWeekName: string }>({
    current: 0,
    total: 0,
    currentWeekName: '',
  });
  const [completedList, setCompletedList] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleStartBatch = async () => {
    if (startWeek > endWeek) {
      alert('Tuần bắt đầu phải nhỏ hơn hoặc bằng tuần kết thúc!');
      return;
    }

    setIsProcessing(true);
    setCompletedList([]);
    const total = endWeek - startWeek + 1;
    const completed: string[] = [];

    try {
      for (let w = startWeek; w <= endWeek; w++) {
        setProgress({
          current: w - startWeek + 1,
          total,
          currentWeekName: `Tuần ${w}`,
        });

        // 1. Build week plan
        const plan = buildWeekPlan(w, timetable, teacher, gradeFilter);

        // 2. Export DOCX with slight delay to prevent browser download throttling
        const { filename } = await exportWeekPlanToDocx(plan, teacher, {
          singleGrade: gradeFilter,
          includeBaoBaiOnly: exportType === 'baobai',
        });

        completed.push(filename);
        setCompletedList([...completed]);

        // Wait 350ms between downloads so browser doesn't block multi-download
        await new Promise(r => setTimeout(r, 350));
      }
    } catch (err: any) {
      alert(`Đã xảy ra lỗi khi tạo: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold">Tạo Hàng Loạt Nhiều Tuần</h2>
              <p className="text-xs text-slate-300">
                Tự động nhân bản cấu trúc TUẦN 01 cho dải tuần yêu cầu
              </p>
            </div>
          </div>

          {!isProcessing && (
            <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-md transition">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Configuration Body */}
        <div className="p-6 space-y-5">
          {/* Range selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Từ Tuần:
              </label>
              <select
                disabled={isProcessing}
                value={startWeek}
                onChange={e => setStartWeek(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {Array.from({ length: 35 }, (_, i) => i + 1).map(w => (
                  <option key={w} value={w}>
                    Tuần {String(w).padStart(2, '0')} ({getWeekDateRange(w).startFormatted})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Đến Tuần:
              </label>
              <select
                disabled={isProcessing}
                value={endWeek}
                onChange={e => setEndWeek(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {Array.from({ length: 35 }, (_, i) => i + 1).map(w => (
                  <option key={w} value={w}>
                    Tuần {String(w).padStart(2, '0')} ({getWeekDateRange(w).endFormatted})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Export Type Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Định dạng nội dung xuất:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-start p-3 rounded-lg border cursor-pointer transition text-xs ${
                  exportType === 'full'
                    ? 'border-amber-600 bg-amber-50/70 text-amber-950 font-medium'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="batch-export-type"
                  checked={exportType === 'full'}
                  onChange={() => setExportType('full')}
                  disabled={isProcessing}
                  className="mt-0.5 mr-2 text-amber-600 focus:ring-amber-500"
                />
                <div>
                  <span className="font-bold block">Toàn bộ KHBD + Báo bài</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Kèm bảng Báo bài kẻ bảng chuẩn và tiến trình dạy học
                  </span>
                </div>
              </label>

              <label
                className={`flex items-start p-3 rounded-lg border cursor-pointer transition text-xs ${
                  exportType === 'baobai'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-medium'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="batch-export-type"
                  checked={exportType === 'baobai'}
                  onChange={() => setExportType('baobai')}
                  disabled={isProcessing}
                  className="mt-0.5 mr-2 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <span className="font-bold block">Chỉ Báo bài (kẻ bảng)</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Tạo nhanh danh sách bảng báo bài 7 cột cho từng tuần
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Target Grade Filter Info */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
            <p className="font-semibold text-slate-800">
              Cấu hình xuất tài liệu:
            </p>
            <p className="text-slate-600">
              • Tổng số tuần cần tạo: <strong className="text-amber-700">{Math.max(0, endWeek - startWeek + 1)} tuần</strong>
            </p>
            <p className="text-slate-600">
              • Khối áp dụng: <strong>{gradeFilter ? `Chỉ Khối ${gradeFilter}` : 'Tất cả các khối trong Báo bài'}</strong>
            </p>
            <p className="text-slate-600">
              • Tự động tính ngày Thứ Hai và Thứ Sáu theo chuẩn năm học 2026-2027.
            </p>
          </div>

          {/* Processing Progress */}
          {isProcessing && (
            <div className="space-y-2 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between text-xs font-semibold text-amber-900">
                <span className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                  <span>Đang xử lý: {progress.currentWeekName}...</span>
                </span>
                <span>
                  {progress.current} / {progress.total}
                </span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-amber-600 h-2 transition-all duration-300 rounded-full"
                  style={{ width: `${(progress.current / progress.total) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Finished results list */}
          {completedList.length > 0 && !isProcessing && (
            <div className="space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã tạo thành công {completedList.length} tệp DOCX:</span>
              </div>
              <div className="max-h-36 overflow-y-auto p-2.5 bg-slate-50 rounded border border-slate-200 space-y-1 text-xs font-mono text-slate-700">
                {completedList.map((f, i) => (
                  <div key={i} className="flex items-center space-x-1">
                    <span className="text-emerald-500">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {isProcessing ? 'Vui lòng giữ cửa sổ mở trong khi xuất file...' : 'Tự động kiểm định 30 điểm cho từng file'}
          </span>

          <div className="flex items-center space-x-2">
            {!isProcessing && (
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition"
              >
                Đóng
              </button>
            )}

            <button
              disabled={isProcessing || startWeek > endWeek}
              onClick={handleStartBatch}
              className="px-4 py-1.5 text-xs font-semibold bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded-md shadow-xs flex items-center space-x-1.5 transition active:scale-95"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang tạo...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Bắt đầu tạo {Math.max(0, endWeek - startWeek + 1)} tuần</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
