/**
 * Date calculation utils for KHBD Mĩ thuật
 * Tuần 1 bắt đầu từ Thứ Hai, 07/09/2026 đến Thứ Sáu, 11/09/2026
 * Công thức: Ngày bắt đầu tuần N = 07/09/2026 + (N-1) * 7 ngày
 * Ngày kết thúc = Ngày bắt đầu + 4 ngày
 */

export function getWeekDateRange(weekNumber: number): {
  start: Date;
  end: Date;
  startFormatted: string; // DD/MM/YYYY
  endFormatted: string; // DD/MM/YYYY
  dayMap: Record<'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu', { date: Date; formatted: string; fullVietnamese: string }>;
} {
  // 2026-09-07 is Monday
  const baseDate = new Date(2026, 8, 7); // Month is 0-indexed: 8 is September
  const daysToAdd = (weekNumber - 1) * 7;

  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() + daysToAdd);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4); // Friday

  const formatDate = (d: Date): string => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const dayOffsets: Record<'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu', number> = {
    'Hai': 0,
    'Ba': 1,
    'Tư': 2,
    'Năm': 3,
    'Sáu': 4
  };

  const dayNames: Record<'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu', string> = {
    'Hai': 'Thứ Hai',
    'Ba': 'Thứ Ba',
    'Tư': 'Thứ Tư',
    'Năm': 'Thứ Năm',
    'Sáu': 'Thứ Sáu'
  };

  const dayMap = {} as Record<'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu', { date: Date; formatted: string; fullVietnamese: string }>;

  for (const [key, offset] of Object.entries(dayOffsets) as ['Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu', number][]) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + offset);
    const dayStr = String(d.getDate()).padStart(2, '0');
    const monthStr = String(d.getMonth() + 1).padStart(2, '0');
    const yearStr = d.getFullYear();
    dayMap[key] = {
      date: d,
      formatted: `${dayStr}/${monthStr}/${yearStr}`,
      fullVietnamese: `${dayNames[key]}, ngày ${dayStr} tháng ${monthStr} năm ${yearStr}`
    };
  }

  return {
    start: startDate,
    end: endDate,
    startFormatted: formatDate(startDate),
    endFormatted: formatDate(endDate),
    dayMap
  };
}
