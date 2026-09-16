import React from 'react';
import { BookOpen, Calendar, Award, CheckCircle2, FileText, Download, Layers } from 'lucide-react';
import { TeacherInfo } from '../types';

interface HeaderNavbarProps {
  teacher: TeacherInfo;
  currentWeek: number;
  gradeFilter?: number;
  onOpenTimetable: () => void;
  onOpenValidation: () => void;
  onOpenBatch: () => void;
  onOpenLibrary: () => void;
  onExportDocx: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  teacher,
  currentWeek,
  gradeFilter,
  onOpenTimetable,
  onOpenValidation,
  onOpenBatch,
  onOpenLibrary,
  onExportDocx,
}) => {
  return (
    <header className="bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white">
                  KHBD MĨ THUẬT TIỂU HỌC
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  PROMPT V4
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {teacher.school} • {teacher.schoolYear} • GV: <span className="text-slate-200 font-medium">{teacher.name}</span>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenTimetable}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Xem Báo bài dạy & Thời khóa biểu"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              <span className="hidden md:inline">Báo bài (TKB)</span>
            </button>

            <button
              onClick={onOpenLibrary}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Tra cứu Master Content 5 Khối"
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="hidden md:inline">Kho Master Content</span>
            </button>

            <button
              onClick={onOpenValidation}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Kiểm định 30 điểm chuẩn QA"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline">Checklist 30 Điểm</span>
            </button>

            <button
              onClick={onOpenBatch}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition"
              title="Tạo nhiều tuần liên tục (vd: Tuần 2 - 10)"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Tạo nhiều tuần</span>
            </button>

            <button
              onClick={onExportDocx}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Xuất DOCX</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
