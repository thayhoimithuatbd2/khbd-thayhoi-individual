import { LessonContent } from '../types';
import { MASTER_CONTENT_GRADE_1 } from './masterContentGrade1';
import { MASTER_CONTENT_GRADE_2 } from './masterContentGrade2';
import { MASTER_CONTENT_GRADE_3 } from './masterContentGrade3';
import { MASTER_CONTENT_GRADE_4 } from './masterContentGrade4';
import { MASTER_CONTENT_GRADE_5 } from './masterContentGrade5';

export function getMasterContent(grade: number, week: number): LessonContent | null {
  switch (grade) {
    case 1:
      return MASTER_CONTENT_GRADE_1[week] || null;
    case 2:
      return MASTER_CONTENT_GRADE_2[week] || null;
    case 3:
      return MASTER_CONTENT_GRADE_3[week] || null;
    case 4:
      return MASTER_CONTENT_GRADE_4[week] || null;
    case 5:
      return MASTER_CONTENT_GRADE_5[week] || null;
    default:
      return null;
  }
}

export function getMasterFileName(grade: number): string {
  return `KHBD_MT${grade}_KNTT_2026-2027.docx`;
}
