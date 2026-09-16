import { TeacherInfo, TimetableEntry } from '../types';

export const DEFAULT_TEACHER_INFO: TeacherInfo = {
  name: 'Nguyễn Văn Hợi',
  school: 'Trường Tiểu học Bảo Đài số 2',
  schoolYear: '2026 - 2027',
  subject: 'Mĩ thuật',
  startDateWeek1: '2026-09-07',
};

export const DEFAULT_TIMETABLE: TimetableEntry[] = [
  // Thứ Hai Chiều
  {
    id: 'mon-pm-1',
    thu: 'Hai',
    buoi: 'Chiều',
    tiet: 1,
    mon: 'Mĩ thuật',
    lop: '1B6',
    tenBai: 'Mĩ thuật trong nhà trường',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'mon-pm-2',
    thu: 'Hai',
    buoi: 'Chiều',
    tiet: 2,
    mon: 'Mĩ thuật',
    lop: '2B6',
    tenBai: 'Mĩ thuật trong cuộc sống',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'mon-pm-3',
    thu: 'Hai',
    buoi: 'Chiều',
    tiet: 3,
    mon: 'Mĩ thuật',
    lop: '3B6',
    tenBai: 'Em yêu mĩ thuật',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },

  // Thứ Ba Sáng
  {
    id: 'tue-am-1',
    thu: 'Ba',
    buoi: 'Sáng',
    tiet: 1,
    mon: 'Mĩ thuật',
    lop: '1B1',
    tenBai: 'Mĩ thuật trong nhà trường',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'tue-am-2',
    thu: 'Ba',
    buoi: 'Sáng',
    tiet: 2,
    mon: 'Mĩ thuật',
    lop: '2B1',
    tenBai: 'Mĩ thuật trong cuộc sống',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'tue-am-3',
    thu: 'Ba',
    buoi: 'Sáng',
    tiet: 3,
    mon: 'Mĩ thuật',
    lop: '3B1',
    tenBai: 'Em yêu mĩ thuật',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'tue-am-4',
    thu: 'Ba',
    buoi: 'Sáng',
    tiet: 4,
    mon: 'Mĩ thuật',
    lop: '3B2',
    tenBai: 'Em yêu mĩ thuật',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },

  // Thứ Ba Chiều
  {
    id: 'tue-pm-1',
    thu: 'Ba',
    buoi: 'Chiều',
    tiet: 1,
    mon: 'Mĩ thuật',
    lop: '1B2',
    tenBai: 'Mĩ thuật trong nhà trường',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'tue-pm-2',
    thu: 'Ba',
    buoi: 'Chiều',
    tiet: 2,
    mon: 'Mĩ thuật',
    lop: '2B2',
    tenBai: 'Mĩ thuật trong cuộc sống',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'tue-pm-3',
    thu: 'Ba',
    buoi: 'Chiều',
    tiet: 3,
    mon: 'Mĩ thuật',
    lop: '1B5',
    tenBai: 'Mĩ thuật trong nhà trường',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },

  // Thứ Tư Sáng
  {
    id: 'wed-am-1',
    thu: 'Tư',
    buoi: 'Sáng',
    tiet: 1,
    mon: 'Mĩ thuật',
    lop: '1B3',
    tenBai: 'Mĩ thuật trong nhà trường',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'wed-am-2',
    thu: 'Tư',
    buoi: 'Sáng',
    tiet: 2,
    mon: 'Mĩ thuật',
    lop: '3B3',
    tenBai: 'Em yêu mĩ thuật',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'wed-am-3',
    thu: 'Tư',
    buoi: 'Sáng',
    tiet: 3,
    mon: 'Mĩ thuật',
    lop: '2B5',
    tenBai: 'Mĩ thuật trong cuộc sống',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'wed-am-4',
    thu: 'Tư',
    buoi: 'Sáng',
    tiet: 4,
    mon: 'Mĩ thuật',
    lop: '3B4',
    tenBai: 'Em yêu mĩ thuật',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },

  // Thứ Sáu Sáng
  {
    id: 'fri-am-1',
    thu: 'Sáu',
    buoi: 'Sáng',
    tiet: 1,
    mon: 'Mĩ thuật',
    lop: '2B4',
    tenBai: 'Mĩ thuật trong cuộc sống',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'fri-am-2',
    thu: 'Sáu',
    buoi: 'Sáng',
    tiet: 2,
    mon: 'Mĩ thuật',
    lop: '1B4',
    tenBai: 'Mĩ thuật trong nhà trường',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'fri-am-3',
    thu: 'Sáu',
    buoi: 'Sáng',
    tiet: 3,
    mon: 'Mĩ thuật',
    lop: '3B5',
    tenBai: 'Em yêu mĩ thuật',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  },
  {
    id: 'fri-am-4',
    thu: 'Sáu',
    buoi: 'Sáng',
    tiet: 4,
    mon: 'Mĩ thuật',
    lop: '2B3',
    tenBai: 'Mĩ thuật trong cuộc sống',
    thietBi: 'SGK, VBT Mĩ thuật; đồ dùng học tập theo mục II'
  }
];

/**
 * Extract Grade from class name:
 * 1B6 -> 1
 * 2B1 -> 2
 * 3B2 -> 3
 * 4C1 -> 4
 * 5A1 -> 5
 */
export function getGradeFromClassName(className: string): number {
  const match = className.trim().match(/^([1-5])/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 1;
}

/**
 * Group classes by day for a given grade from the timetable:
 * e.g. For Grade 1 in Tuần 1:
 * Thứ Hai: 1B6
 * Thứ Ba: 1B1, 1B2, 1B5
 * Thứ Tư: 1B3
 * Thứ Sáu: 1B4
 */
export function getGradeScheduleByDay(timetable: TimetableEntry[], grade: number): {
  thu: 'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu';
  classes: string[];
}[] {
  const days: ('Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu')[] = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu'];
  const result: { thu: 'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu'; classes: string[] }[] = [];

  for (const day of days) {
    const matchedEntries = timetable.filter(
      entry => entry.thu === day && getGradeFromClassName(entry.lop) === grade
    );

    if (matchedEntries.length > 0) {
      // deduplicate class names in order
      const uniqueClasses: string[] = [];
      for (const entry of matchedEntries) {
        if (!uniqueClasses.includes(entry.lop)) {
          uniqueClasses.push(entry.lop);
        }
      }
      result.push({ thu: day, classes: uniqueClasses });
    }
  }

  return result;
}

/**
 * Storage helpers for persisting Timetable/Báo bài
 */
export const TIMETABLE_STORAGE_KEY = 'khbd_mithuat_baobai_timetable_v1';

export function getSavedTimetable(): TimetableEntry[] {
  try {
    const saved = localStorage.getItem(TIMETABLE_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Lỗi đọc thời khóa biểu từ localStorage:', err);
  }
  return DEFAULT_TIMETABLE;
}

export function saveTimetableToStorage(timetable: TimetableEntry[]): void {
  try {
    localStorage.setItem(TIMETABLE_STORAGE_KEY, JSON.stringify(timetable));
  } catch (err) {
    console.error('Lỗi lưu thời khóa biểu vào localStorage:', err);
  }
}

export function resetTimetableStorage(): TimetableEntry[] {
  try {
    localStorage.removeItem(TIMETABLE_STORAGE_KEY);
  } catch (err) {
    console.error('Lỗi xóa thời khóa biểu trong localStorage:', err);
  }
  return DEFAULT_TIMETABLE;
}
