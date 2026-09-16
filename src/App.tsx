import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { HeaderNavbar } from './components/HeaderNavbar';
import { CommandBar } from './components/CommandBar';
import { DocumentPreview } from './components/DocumentPreview';
import { ValidationModal } from './components/ValidationModal';
import { TimetableEditor } from './components/TimetableEditor';
import { BatchGeneratorModal } from './components/BatchGeneratorModal';
import { MasterContentLibraryModal } from './components/MasterContentLibraryModal';

import { DEFAULT_TEACHER_INFO, DEFAULT_TIMETABLE, getSavedTimetable, saveTimetableToStorage } from './data/scheduleData';
import { TeacherInfo, TimetableEntry } from './types';
import { buildWeekPlan } from './utils/planBuilder';
import { exportWeekPlanToDocx } from './utils/docxGenerator';
import { runFormatFingerprint } from './utils/formatFingerprint';
import { run30PointValidation } from './utils/validationRules';

export default function App() {
  const [currentWeek, setCurrentWeek] = useState<number>(2);
  const [gradeFilter, setGradeFilter] = useState<number | undefined>(undefined);
  const [teacher, setTeacher] = useState<TeacherInfo>(DEFAULT_TEACHER_INFO);
  const [timetable, setTimetable] = useState<TimetableEntry[]>(() => getSavedTimetable());

  // Modal open states
  const [isValidationOpen, setIsValidationOpen] = useState(false);
  const [isTimetableOpen, setIsTimetableOpen] = useState(false);
  const [isBatchOpen, setIsBatchOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  // Batch Range prefill
  const [batchStart, setBatchStart] = useState<number>(2);
  const [batchEnd, setBatchEnd] = useState<number>(10);

  // Status message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Build the live plan
  const currentPlan = useMemo(() => {
    try {
      return buildWeekPlan(currentWeek, timetable, teacher, gradeFilter);
    } catch (err: any) {
      console.error(err);
      return null;
    }
  }, [currentWeek, timetable, teacher, gradeFilter]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleExportDocx = async () => {
    if (!currentPlan) return;
    try {
      // 1. Chạy Format Fingerprint và Validation trước khi xuất file
      const fingerprint = runFormatFingerprint(currentPlan, teacher);
      const valResults = run30PointValidation(currentPlan);

      const hasFingerprintIssue = !fingerprint.passed;
      const hasValidationIssue = valResults.some(r => !r.passed);

      if (hasFingerprintIssue || hasValidationIssue) {
        // Tự động kiểm tra và báo lỗi, không xuất file nếu chưa đạt 100%
        const issuesSummary = [
          ...fingerprint.issues.map(i => `[${i.category}] ${i.description}`),
          ...valResults.filter(r => !r.passed).map(r => `[QA] ${r.name}: ${r.details}`),
        ].join('\n');

        alert(`Chưa thể xuất file: Phát hiện sai lệch cấu trúc/định dạng/nội dung so với Master Template!\n\n${issuesSummary}`);
        return;
      }

      // 2. Xuất file DOCX khi đã khớp 100%
      const { filename } = await exportWeekPlanToDocx(currentPlan, teacher, {
        singleGrade: gradeFilter,
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });

      showToast(`Đã xuất thành công ${filename}! 100% Khớp Master Template.`);
    } catch (error: any) {
      alert(`Lỗi khi xuất DOCX: ${error.message}`);
    }
  };

  const handleOpenBatchRange = (start: number, end: number) => {
    setBatchStart(start);
    setBatchEnd(end);
    setIsBatchOpen(true);
  };

  const handleNextWeek = () => {
    if (currentWeek < 35) {
      setCurrentWeek(prev => prev + 1);
      showToast(`Đã chuyển sang Tuần ${currentWeek + 1}!`);
    }
  };

  const handlePrevWeek = () => {
    if (currentWeek > 1) {
      setCurrentWeek(prev => prev - 1);
      showToast(`Đã chuyển sang Tuần ${currentWeek - 1}!`);
    }
  };

  const handleTriggerRegenerate = (week: number) => {
    setCurrentWeek(week);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
    showToast(`Đã tái tạo toàn bộ nội dung Tuần ${week} từ Master Template Tuần 01!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
      {/* Top App Bar */}
      <HeaderNavbar
        teacher={teacher}
        currentWeek={currentWeek}
        gradeFilter={gradeFilter}
        onOpenTimetable={() => setIsTimetableOpen(true)}
        onOpenValidation={() => setIsValidationOpen(true)}
        onOpenBatch={() => {
          setBatchStart(currentWeek < 35 ? currentWeek : 1);
          setBatchEnd(Math.min(35, currentWeek + 8));
          setIsBatchOpen(true);
        }}
        onOpenLibrary={() => setIsLibraryOpen(true)}
        onExportDocx={handleExportDocx}
      />

      {/* Natural Command & Navigation Bar */}
      <CommandBar
        currentWeek={currentWeek}
        gradeFilter={gradeFilter}
        onSetWeek={w => setCurrentWeek(w)}
        onNextWeek={handleNextWeek}
        onPrevWeek={handlePrevWeek}
        onSetGradeFilter={g => setGradeFilter(g)}
        onOpenBatchRange={handleOpenBatchRange}
        onTriggerRegenerate={handleTriggerRegenerate}
        onOpenTimetable={() => setIsTimetableOpen(true)}
      />

      {/* Main Document Preview Window */}
      <main className="flex-1 flex flex-col">
        {currentPlan ? (
          <DocumentPreview
            plan={currentPlan}
            teacher={teacher}
            onExportDocx={handleExportDocx}
            onOpenValidation={() => setIsValidationOpen(true)}
            onOpenTimetable={() => setIsTimetableOpen(true)}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center p-8 text-center text-slate-500">
            <div>
              <p className="text-base font-semibold text-slate-800">
                Không thể tải nội dung KHBD cho Tuần {currentWeek}
              </p>
              <p className="text-xs mt-1">
                Vui lòng kiểm tra lại cấu hình Báo bài hoặc chọn tuần hợp lệ (1 - 35).
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center space-x-2 animate-bounce">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* QA 30-point Checklist & Format Fingerprint Modal */}
      {currentPlan && (
        <ValidationModal
          isOpen={isValidationOpen}
          onClose={() => setIsValidationOpen(false)}
          results={currentPlan.validationResults}
          weekNumber={currentWeek}
          plan={currentPlan}
          teacher={teacher}
        />
      )}

      {/* Timetable / Báo Bài Editor Modal */}
      <TimetableEditor
        isOpen={isTimetableOpen}
        onClose={() => setIsTimetableOpen(false)}
        timetable={timetable}
        onSaveTimetable={newTkb => {
          setTimetable(newTkb);
          saveTimetableToStorage(newTkb);
          showToast('Đã cập nhật và tự động lưu Báo bài dạy cho các lần sử dụng tiếp theo!');
        }}
      />

      {/* Batch Generator Modal */}
      <BatchGeneratorModal
        isOpen={isBatchOpen}
        onClose={() => setIsBatchOpen(false)}
        initialStartWeek={batchStart}
        initialEndWeek={batchEnd}
        timetable={timetable}
        teacher={teacher}
        gradeFilter={gradeFilter}
      />

      {/* 5-Grade Master Content Library Modal */}
      <MasterContentLibraryModal
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
        onSelectWeekAndGrade={(week, grade) => {
          setCurrentWeek(week);
          setGradeFilter(grade);
          showToast(`Đã chuyển tới Tuần ${week} - Khối ${grade}!`);
        }}
      />
    </div>
  );
}
