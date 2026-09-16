import { BaoBaiGroupedDay, BaoBaiGroupedSession, BaoBaiRow, BaoBaiWeekData, TeacherInfo, TimetableEntry } from '../types';
import { getMasterContent } from '../data/masterContentIndex';
import { getGradeFromClassName } from '../data/scheduleData';
import { getWeekDateRange } from './dateCalculator';

const DAY_ORDER: Record<string, number> = {
  Hai: 1,
  Ba: 2,
  Tư: 3,
  Năm: 4,
  Sáu: 5,
};

const BUOI_ORDER: Record<string, number> = {
  Sáng: 1,
  Chiều: 2,
};

export function groupBaoBaiRows(rows: BaoBaiRow[]): BaoBaiGroupedDay[] {
  const days: BaoBaiGroupedDay[] = [];

  rows.forEach(row => {
    let day = days.find(d => d.thu === row.thu && d.ngay === row.ngay);
    if (!day) {
      day = {
        thu: row.thu,
        thuText: row.thuText,
        ngay: row.ngay,
        totalDayRows: 0,
        sessions: [],
      };
      days.push(day);
    }
    day.totalDayRows++;

    let session = day.sessions.find(s => s.buoi === row.buoi);
    if (!session) {
      session = {
        buoi: row.buoi,
        totalSessionRows: 0,
        rows: [],
      };
      day.sessions.push(session);
    }
    session.totalSessionRows++;
    session.rows.push(row);
  });

  return days;
}

export function generateBaoBaiForWeek(
  weekNumber: number,
  timetable: TimetableEntry[],
  teacher: TeacherInfo,
  gradeFilter?: number
): BaoBaiWeekData {
  const { startFormatted, endFormatted, dayMap } = getWeekDateRange(weekNumber);

  // Filter by grade if gradeFilter is specified
  const filteredTimetable = gradeFilter
    ? timetable.filter(entry => getGradeFromClassName(entry.lop) === gradeFilter)
    : timetable;

  // Sort entries chronologically: Day -> Session -> Period
  const sortedEntries = [...filteredTimetable].sort((a, b) => {
    const dayDiff = (DAY_ORDER[a.thu] || 0) - (DAY_ORDER[b.thu] || 0);
    if (dayDiff !== 0) return dayDiff;

    const buoiDiff = (BUOI_ORDER[a.buoi] || 0) - (BUOI_ORDER[b.buoi] || 0);
    if (buoiDiff !== 0) return buoiDiff;

    return a.tiet - b.tiet;
  });

  const rows: BaoBaiRow[] = sortedEntries.map(entry => {
    const grade = getGradeFromClassName(entry.lop);
    const content = getMasterContent(grade, weekNumber);

    let tenBai = entry.tenBai;
    if (content) {
      if (typeof content.chuDeNumber === 'number') {
        tenBai = `Chủ đề ${content.chuDeNumber}: ${content.chuDeName} ${content.tietText}`;
      } else {
        tenBai = `${content.chuDeName} ${content.tietText}`;
      }
    }

    const dayInfo = dayMap[entry.thu];
    const ngayStr = dayInfo ? dayInfo.formatted : '';

    return {
      id: entry.id,
      thu: entry.thu,
      thuText: `Thứ ${entry.thu}`,
      ngay: ngayStr,
      buoi: entry.buoi,
      tiet: entry.tiet,
      mon: entry.mon || 'Mĩ thuật',
      lop: entry.lop,
      grade,
      tenBai,
      thietBi: entry.thietBi || 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II',
    };
  });

  const groupedDays = groupBaoBaiRows(rows);

  return {
    weekNumber,
    startDateStr: startFormatted,
    endDateStr: endFormatted,
    teacher,
    rows,
    groupedDays,
    totalTiet: rows.length,
  };
}
