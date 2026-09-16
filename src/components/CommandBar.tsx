import React, { useState } from 'react';
import { Send, Sparkles, RefreshCw, ChevronRight, ChevronLeft, Filter, AlertCircle, Calendar } from 'lucide-react';

interface CommandBarProps {
  currentWeek: number;
  gradeFilter?: number;
  onSetWeek: (week: number) => void;
  onNextWeek: () => void;
  onPrevWeek: () => void;
  onSetGradeFilter: (grade?: number) => void;
  onOpenBatchRange: (start: number, end: number) => void;
  onTriggerRegenerate: (week: number) => void;
  onOpenTimetable?: () => void;
}

export const CommandBar: React.FC<CommandBarProps> = ({
  currentWeek,
  gradeFilter,
  onSetWeek,
  onNextWeek,
  onPrevWeek,
  onSetGradeFilter,
  onOpenBatchRange,
  onTriggerRegenerate,
  onOpenTimetable,
}) => {
  const [commandText, setCommandText] = useState('');
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const executeCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    // Pattern: Tạo tuần 2 đến tuần 10 OR Tuần 2 đến 10
    const rangeMatch = cmd.match(/(?:tạo\s+)?tuần\s+(\d+)\s+(?:đến|-)\s+(?:tuần\s+)?(\d+)/i);
    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10);
      const end = parseInt(rangeMatch[2], 10);
      if (start >= 1 && end <= 35 && start <= end) {
        setFeedback({ message: `Mở công cụ xuất tự động từ Tuần ${start} đến Tuần ${end}`, type: 'success' });
        onOpenBatchRange(start, end);
        setCommandText('');
        return;
      }
    }

    // Pattern: Báo bài tuần [X] / Tạo báo bài [X]
    const baoBaiMatch = cmd.match(/(?:tạo\s+)?báo\s+bài(?:\s+tuần)?\s+(\d+)/i);
    if (baoBaiMatch) {
      const w = parseInt(baoBaiMatch[1], 10);
      if (w >= 1 && w <= 35) {
        onSetWeek(w);
        setFeedback({ message: `Đã tạo bảng Báo bài dạy Tuần ${w} chuẩn kẻ bảng 7 cột như file mẫu Tuần 1!`, type: 'success' });
        setCommandText('');
        return;
      }
    }

    if (cmd.includes('báo bài') || cmd.includes('kẻ bảng')) {
      setFeedback({ message: `Bảng Báo bài dạy (kẻ bảng 7 cột) đã được tạo chuẩn mẫu Tuần 01 cho Tuần ${currentWeek}! Bạn có thể xem ngay trên màn hình hoặc tải file .docx.`, type: 'success' });
      setCommandText('');
      return;
    }

    // Pattern: Cập nhật báo bài / Sửa thời khóa biểu / Sửa báo bài / Cập nhật TKB
    if (cmd.includes('cập nhật báo bài') || cmd.includes('sửa báo bài') || cmd.includes('thời khóa biểu') || cmd.includes('sửa tkb') || cmd.includes('đổi tkb')) {
      if (onOpenTimetable) {
        onOpenTimetable();
        setFeedback({ message: 'Đã mở bảng điều chỉnh Báo bài dạy & Thời khóa biểu. Mọi cập nhật sẽ tự động lưu lại cho các lần sử dụng tiếp theo!', type: 'success' });
      } else {
        setFeedback({ message: 'Hãy bấm nút "Báo bài (TKB)" trên thanh công cụ để chỉnh sửa và tự động lưu lại.', type: 'info' });
      }
      setCommandText('');
      return;
    }

    // Pattern: Tạo lại tuần 5
    const recreateMatch = cmd.match(/tạo\s+lại\s+tuần\s+(\d+)/i);
    if (recreateMatch) {
      const w = parseInt(recreateMatch[1], 10);
      if (w >= 1 && w <= 35) {
        onTriggerRegenerate(w);
        setFeedback({ message: `Đã làm mới và tạo lại hoàn toàn Tuần ${w} từ Master Template Tuần 01!`, type: 'success' });
        setCommandText('');
        return;
      }
    }

    // Pattern: Tạo tuần [X]
    const singleWeekMatch = cmd.match(/tạo\s+tuần\s+(\d+)/i) || cmd.match(/^tuần\s+(\d+)$/i);
    if (singleWeekMatch) {
      const w = parseInt(singleWeekMatch[1], 10);
      if (w >= 1 && w <= 35) {
        onSetWeek(w);
        setFeedback({ message: `Đã chuyển sang xây dựng KHBD cho Tuần ${w}!`, type: 'success' });
        setCommandText('');
        return;
      }
    }

    // Pattern: Tạo tuần tiếp theo / Làm tiếp
    if (cmd.includes('tiếp theo') || cmd.includes('làm tiếp') || cmd === 'tiếp') {
      if (currentWeek < 35) {
        onNextWeek();
        setFeedback({ message: `Đã tự động chuyển sang Tuần ${currentWeek + 1}!`, type: 'success' });
      } else {
        setFeedback({ message: 'Đã đạt Tuần 35 (tuần cuối cùng của năm học).', type: 'info' });
      }
      setCommandText('');
      return;
    }

    // Pattern: Tạo khối X
    const gradeMatch = cmd.match(/(?:tạo\s+)?khối\s+([1-5])/i);
    if (gradeMatch) {
      const g = parseInt(gradeMatch[1], 10);
      onSetGradeFilter(g);
      setFeedback({ message: `Đã kích hoạt bộ lọc: Chỉ lấy nội dung MASTER CONTENT Khối ${g}`, type: 'success' });
      setCommandText('');
      return;
    }

    if (cmd.includes('tất cả') || cmd.includes('toàn bộ')) {
      onSetGradeFilter(undefined);
      setFeedback({ message: 'Hiển thị toàn bộ các khối theo lịch Báo bài.', type: 'success' });
      setCommandText('');
      return;
    }

    setFeedback({
      message: `Chưa nhận diện lệnh "${cmdRaw}". Bạn có thể gõ: "Tạo tuần 2", "Làm tiếp", "Tạo lại tuần 5", "Tạo tuần 2 đến 10", "Tạo khối 1",...`,
      type: 'error'
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(commandText);
  };

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
        {/* Row 1: Command Input + Navigation */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Natural Language Command Bar */}
          <form onSubmit={handleFormSubmit} className="flex-1 relative flex items-center">
            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            <input
              type="text"
              value={commandText}
              onChange={e => setCommandText(e.target.value)}
              placeholder='Nhập lệnh điều khiển: "Tạo tuần 2", "Làm tiếp", "Tạo tuần 2 đến 10", "Tạo khối 1"...'
              className="w-full pl-10 pr-24 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
            <button
              type="submit"
              className="absolute right-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md transition flex items-center space-x-1"
            >
              <span>Thực thi</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

          {/* Week Selector Stepper */}
          <div className="flex items-center space-x-2 shrink-0 self-center">
            <button
              onClick={onPrevWeek}
              disabled={currentWeek <= 1}
              className="p-1.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition text-slate-700"
              title="Tuần trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-1 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-md">
              <span className="text-xs text-emerald-800 font-medium">Tuần</span>
              <select
                value={currentWeek}
                onChange={e => onSetWeek(parseInt(e.target.value, 10))}
                className="bg-transparent font-bold text-sm text-emerald-900 focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 35 }, (_, i) => i + 1).map(w => (
                  <option key={w} value={w}>
                    {String(w).padStart(2, '0')}
                  </option>
                ))}
              </select>
              <span className="text-xs text-emerald-700">/ 35</span>
            </div>

            <button
              onClick={onNextWeek}
              disabled={currentWeek >= 35}
              className="p-1.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition text-slate-700"
              title="Tuần kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Row 2: Quick Command Pills & Grade Filters */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 text-xs">
          {/* Quick buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-medium mr-1 hidden sm:inline">Lệnh nhanh:</span>
            <button
              onClick={() => executeCommand('Làm tiếp')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
            >
              ⏩ Làm tiếp
            </button>
            <button
              onClick={() => executeCommand(`Tạo tuần ${currentWeek < 35 ? currentWeek + 1 : 1}`)}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
            >
              📅 Tuần {currentWeek < 35 ? currentWeek + 1 : 1}
            </button>
            <button
              onClick={() => executeCommand(`Tạo lại tuần ${currentWeek}`)}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition inline-flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3 text-slate-500" />
              <span>Tạo lại tuần {currentWeek}</span>
            </button>
            <button
              onClick={() => onOpenBatchRange(2, 10)}
              className="px-2.5 py-1 rounded bg-amber-50 hover:bg-amber-100 text-amber-800 font-medium border border-amber-200 transition"
            >
              ⚡ Tạo Tuần 2 – 10
            </button>
            {onOpenTimetable && (
              <button
                onClick={onOpenTimetable}
                className="px-2.5 py-1 rounded bg-sky-50 hover:bg-sky-100 text-sky-800 font-medium border border-sky-200 transition inline-flex items-center space-x-1"
                title="Chỉnh sửa và lưu lại Báo bài cho các lần sau"
              >
                <Calendar className="w-3 h-3 text-sky-600" />
                <span>Sửa Báo bài</span>
              </button>
            )}
          </div>

          {/* Grade selection pills */}
          <div className="flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
            <span className="text-slate-400 font-medium mr-1">Khối:</span>
            <button
              onClick={() => onSetGradeFilter(undefined)}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition ${
                gradeFilter === undefined
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả
            </button>
            {[1, 2, 3, 4, 5].map(g => (
              <button
                key={g}
                onClick={() => onSetGradeFilter(gradeFilter === g ? undefined : g)}
                className={`px-2 py-0.5 rounded text-xs font-semibold transition ${
                  gradeFilter === g
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Khối {g}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback message banner */}
        {feedback && (
          <div
            className={`text-xs px-3 py-1.5 rounded-md flex items-center justify-between transition ${
              feedback.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : feedback.type === 'error'
                ? 'bg-rose-50 text-rose-800 border border-rose-200'
                : 'bg-sky-50 text-sky-800 border border-sky-200'
            }`}
          >
            <div className="flex items-center space-x-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{feedback.message}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="text-slate-400 hover:text-slate-700 ml-2"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
