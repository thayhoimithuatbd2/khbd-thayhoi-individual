import { GeneratedWeekPlan, LessonContent, TeacherInfo, TimetableEntry } from '../types';
import { getMasterContent } from '../data/masterContentIndex';
import { getGradeFromClassName, getGradeScheduleByDay } from '../data/scheduleData';
import { getWeekDateRange } from './dateCalculator';
import { run30PointValidation } from './validationRules';
import { generateBaoBaiForWeek } from './baoBaiGenerator';

export function buildWeekPlan(
  weekNumber: number,
  timetable: TimetableEntry[],
  teacher: TeacherInfo,
  gradeFilter?: number
): GeneratedWeekPlan {
  const { startFormatted, endFormatted, dayMap } = getWeekDateRange(weekNumber);
  const baoBai = generateBaoBaiForWeek(weekNumber, timetable, teacher, gradeFilter);

  // Determine which grades are in the timetable
  // Determine which grades are in the timetable in order of appearance in Báo bài
  const gradesInBaoBaiOrder: number[] = [];
  timetable.forEach(entry => {
    const g = getGradeFromClassName(entry.lop);
    if (!gradesInBaoBaiOrder.includes(g)) {
      gradesInBaoBaiOrder.push(g);
    }
  });

  const targetGrades = gradeFilter
    ? gradesInBaoBaiOrder.filter(g => g === gradeFilter)
    : gradesInBaoBaiOrder;

  const lessons: {
    grade: number;
    classes: string[];
    content: LessonContent;
    dateLines: string[];
  }[] = [];

  const dayDatesList: {
    thu: string;
    dateFormatted: string;
    classes: string[];
  }[] = (['Hai', 'Ba', 'Tư', 'Năm', 'Sáu'] as const).map(day => ({
    thu: day,
    dateFormatted: dayMap[day].formatted,
    classes: timetable.filter(e => e.thu === day).map(e => e.lop),
  }));

  for (const grade of targetGrades) {
    const gradeSchedule = getGradeScheduleByDay(timetable, grade);
    const classesForGrade = Array.from(
      new Set(gradeSchedule.flatMap(s => s.classes))
    );

    // Build dateLines exactly like TUAN 01:
    // Thứ Hai, ngày 07 tháng 09 năm 2026 - Lớp 1B6;
    // Thứ Ba, ngày 08 tháng 09 năm 2026 - Lớp 1B1, 1B2, 1B5;
    const dateLines = gradeSchedule.map((s, idx) => {
      const isLast = idx === gradeSchedule.length - 1;
      const dayInfo = dayMap[s.thu];
      const classListStr = s.classes.join(', ');
      return `${dayInfo.fullVietnamese} - Lớp ${classListStr}${isLast ? '' : ';'}`;
    });

    const rawContent = getMasterContent(grade, weekNumber);
    if (!rawContent) {
      throw new Error(`Chưa tìm thấy MASTER CONTENT của Khối ${grade} cho Tuần ${weekNumber}.`);
    }

    // Clone content deeply so Master Content is strictly intact and immutable
    const content: LessonContent = JSON.parse(JSON.stringify(rawContent));

    lessons.push({
      grade,
      classes: classesForGrade,
      content,
      dateLines,
    });
  }

  const planSkeleton: GeneratedWeekPlan = {
    weekNumber,
    startDateStr: startFormatted,
    endDateStr: endFormatted,
    dayDates: dayDatesList,
    gradesIncluded: targetGrades,
    baoBai,
    lessons,
    validationResults: [],
    allPassed: true,
  };

  const validationResults = run30PointValidation(planSkeleton);
  const allPassed = validationResults.every(r => r.passed);

  return {
    ...planSkeleton,
    validationResults,
    allPassed,
  };
}
