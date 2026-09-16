import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  Header,
  Footer,
  PageNumber,
  BorderStyle,
  convertInchesToTwip,
  HeadingLevel,
  UnderlineType,
  PageOrientation,
  VerticalAlign,
  PageBreak,
} from 'docx';
import { saveAs } from 'file-saver';
import { GeneratedWeekPlan, TeacherInfo, BaoBaiWeekData, BaoBaiGroupedDay } from '../types';
import { groupBaoBaiRows } from './baoBaiGenerator';

export function createDocxBaoBaiTable(baoBai: BaoBaiWeekData): Table {
  const FONT_FAMILY = 'Times New Roman';

  const tableBorders = {
    top: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
    bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
    left: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
    right: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
    insideVertical: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
  };

  const rows: TableRow[] = [];

  // 1. Header row - Kẻ bảng chuẩn như mẫu tuần 1
  rows.push(
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 15, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 60, right: 60 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Thứ, ngày', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 60, right: 60 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Buổi', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 6, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 40, right: 40 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Tiết', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 10, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 60, right: 60 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Môn', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 60, right: 60 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Lớp', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 35, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 80, right: 80 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Tên bài dạy', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 18, type: WidthType.PERCENTAGE },
          shading: { fill: 'F2F2F2' },
          margins: { top: 100, bottom: 100, left: 60, right: 60 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Thiết bị dạy học', font: FONT_FAMILY, bold: true, size: 24 }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  // 2. Data rows with cell merging (Gộp ô)
  const groupedDays: BaoBaiGroupedDay[] =
    baoBai.groupedDays && baoBai.groupedDays.length > 0
      ? baoBai.groupedDays
      : groupBaoBaiRows(baoBai.rows);

  groupedDays.forEach(day => {
    day.sessions.forEach((session, sIdx) => {
      session.rows.forEach((row, rIdx) => {
        const isFirstDayRow = sIdx === 0 && rIdx === 0;
        const isFirstSessionRow = rIdx === 0;
        const cells: TableCell[] = [];

        // Cột 1: Thứ, ngày (Gộp ô theo cả ngày)
        if (isFirstDayRow) {
          cells.push(
            new TableCell({
              rowSpan: day.totalDayRows,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { top: 80, bottom: 80, left: 60, right: 60 },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 20, after: 20 },
                  children: [
                    new TextRun({ text: day.thuText, font: FONT_FAMILY, bold: true, size: 24 }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 0, after: 20 },
                  children: [
                    new TextRun({ text: `(${day.ngay})`, font: FONT_FAMILY, size: 22 }),
                  ],
                }),
              ],
            })
          );
        }

        // Cột 2: Buổi (Gộp ô theo buổi Sáng / Chiều)
        if (isFirstSessionRow) {
          cells.push(
            new TableCell({
              rowSpan: session.totalSessionRows,
              width: { size: 8, type: WidthType.PERCENTAGE },
              margins: { top: 80, bottom: 80, left: 60, right: 60 },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: session.buoi, font: FONT_FAMILY, bold: true, size: 24 }),
                  ],
                }),
              ],
            })
          );
        }

        // Cột 3: Tiết (Không gộp ô)
        cells.push(
          new TableCell({
            width: { size: 6, type: WidthType.PERCENTAGE },
            margins: { top: 80, bottom: 80, left: 40, right: 40 },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: String(row.tiet), font: FONT_FAMILY, size: 24 })],
              }),
            ],
          })
        );

        // Cột 4: Môn (Gộp ô theo buổi: Mĩ thuật)
        if (isFirstSessionRow) {
          cells.push(
            new TableCell({
              rowSpan: session.totalSessionRows,
              width: { size: 10, type: WidthType.PERCENTAGE },
              margins: { top: 80, bottom: 80, left: 60, right: 60 },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: row.mon, font: FONT_FAMILY, size: 24 })],
                }),
              ],
            })
          );
        }

        // Cột 5: Lớp (Không gộp ô)
        cells.push(
          new TableCell({
            width: { size: 8, type: WidthType.PERCENTAGE },
            margins: { top: 80, bottom: 80, left: 60, right: 60 },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: row.lop, font: FONT_FAMILY, bold: true, size: 24 }),
                ],
              }),
            ],
          })
        );

        // Cột 6: Tên bài dạy (Không gộp ô)
        cells.push(
          new TableCell({
            width: { size: 35, type: WidthType.PERCENTAGE },
            margins: { top: 80, bottom: 80, left: 80, right: 80 },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [new TextRun({ text: row.tenBai, font: FONT_FAMILY, size: 24 })],
              }),
            ],
          })
        );

        // Cột 7: Thiết bị dạy học (Không gộp ô)
        cells.push(
          new TableCell({
            width: { size: 18, type: WidthType.PERCENTAGE },
            margins: { top: 80, bottom: 80, left: 60, right: 60 },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [new TextRun({ text: row.thietBi, font: FONT_FAMILY, size: 22 })],
              }),
            ],
          })
        );

        rows.push(new TableRow({ children: cells }));
      });
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows,
  });
}

export function createSignatureTable(teacher: TeacherInfo): Table {
  const FONT_FAMILY = 'Times New Roman';
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'auto' },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: 'auto' },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 80, after: 40 },
                children: [
                  new TextRun({
                    text: 'NGƯỜI XÂY DỰNG KHBD',
                    font: FONT_FAMILY,
                    bold: true,
                    size: 26,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 800 },
                children: [
                  new TextRun({
                    text: teacher.name,
                    font: FONT_FAMILY,
                    bold: true,
                    size: 26,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 80, after: 20 },
                children: [
                  new TextRun({
                    text: 'CHUYÊN MÔN NHÀ TRƯỜNG',
                    font: FONT_FAMILY,
                    bold: true,
                    size: 26,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 0, after: 20 },
                children: [
                  new TextRun({
                    text: 'TỔ TRƯỞNG ( TỔ PHÓ )',
                    font: FONT_FAMILY,
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 0, after: 40 },
                children: [
                  new TextRun({
                    text: '(Ký và ghi rõ họ tên)',
                    font: FONT_FAMILY,
                    italics: true,
                    size: 22,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 800 },
                children: [
                  new TextRun({
                    text: '',
                    font: FONT_FAMILY,
                    size: 26,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export async function saveDocxFile(
  docChildren: (Paragraph | Table)[],
  teacher: TeacherInfo,
  filename: string
) {
  const FONT_FAMILY = 'Times New Roman';
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.79), // 2.0 cm
              bottom: convertInchesToTwip(0.79), // 2.0 cm
              left: convertInchesToTwip(1.18), // 3.0 cm
              right: convertInchesToTwip(0.59), // 1.5 cm
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `Kế hoạch bài dạy môn Mĩ thuật                    `,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                  new TextRun({
                    text: `                    GV: ${teacher.name}`,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `${teacher.school}                                                          Năm học: ${teacher.schoolYear}`,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                ],
              }),
            ],
          }),
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, filename);
  return { blob, filename };
}

export async function exportBaoBaiOnlyToDocx(
  baoBai: BaoBaiWeekData,
  teacher: TeacherInfo
) {
  const FONT_FAMILY = 'Times New Roman';
  const docChildren: (Paragraph | Table)[] = [];

  // TUẦN X
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({
          text: `TUẦN ${baoBai.weekNumber}`,
          font: FONT_FAMILY,
          bold: true,
          size: 28, // 14pt
          underline: { type: UnderlineType.SINGLE },
        }),
      ],
    })
  );

  // Tiêu đề KẾ HOẠCH BÁO BÀI
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: `KẾ HOẠCH BÁO BÀI TUẦN ${baoBai.weekNumber}`,
          font: FONT_FAMILY,
          bold: true,
          size: 28, // 14pt
        }),
      ],
    })
  );

  // Thời gian
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: `(Từ ngày ${baoBai.startDateStr} đến ngày ${baoBai.endDateStr})`,
          font: FONT_FAMILY,
          italics: true,
          size: 24, // 12pt
        }),
      ],
    })
  );

  // Môn và GV
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 120 },
      children: [
        new TextRun({
          text: `Môn: Mĩ thuật - Giáo viên: ${teacher.name} - ${teacher.school}`,
          font: FONT_FAMILY,
          bold: true,
          size: 24, // 12pt
        }),
      ],
    })
  );

  // Bảng Báo bài kẻ bảng hoàn chỉnh kèm gộp ô
  docChildren.push(createDocxBaoBaiTable(baoBai));

  docChildren.push(
    new Paragraph({
      spacing: { before: 200, after: 60 },
      children: [],
    })
  );

  // Chữ ký duyệt Báo bài
  docChildren.push(createSignatureTable(teacher));

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.PORTRAIT,
              width: convertInchesToTwip(8.27),
              height: convertInchesToTwip(11.69),
            },
            margin: {
              top: convertInchesToTwip(0.79), // 2.0 cm
              bottom: convertInchesToTwip(0.79), // 2.0 cm
              left: convertInchesToTwip(1.18), // 3.0 cm
              right: convertInchesToTwip(0.59), // 1.5 cm
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `Kế hoạch bài dạy môn Mĩ thuật                    `,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                  new TextRun({
                    text: `                    GV: ${teacher.name}`,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `${teacher.school}                                                          Năm học: ${teacher.schoolYear}`,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                ],
              }),
            ],
          }),
        },
        children: docChildren,
      },
    ],
  });

  const filename = `BAO_BAI_TUAN_${String(baoBai.weekNumber).padStart(2, '0')}.docx`;
  const blob = await Packer.toBlob(doc);
  saveAs(blob, filename);
  return { blob, filename };
}

export async function exportWeekPlanToDocx(
  plan: GeneratedWeekPlan,
  teacher: TeacherInfo,
  options?: { singleGrade?: number; includeBaoBaiOnly?: boolean }
) {
  if (options?.includeBaoBaiOnly && plan.baoBai) {
    return exportBaoBaiOnlyToDocx(plan.baoBai, teacher);
  }

  const FONT_FAMILY = 'Times New Roman';
  const PRIMARY_COLOR = '000000';

  const docChildren: (Paragraph | Table)[] = [];

  // Filter lessons if singleGrade is specified
  const lessonsToInclude = options?.singleGrade
    ? plan.lessons.filter(l => l.grade === options.singleGrade)
    : plan.lessons;

  // 1. TUẦN X ở đầu Trang 1 (giống tuyệt đối file mẫu tuần 1)
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({
          text: `TUẦN ${plan.weekNumber}`,
          font: FONT_FAMILY,
          bold: true,
          size: 28, // 14pt
          underline: { type: UnderlineType.SINGLE },
        }),
      ],
    })
  );

  // 2. KẾ HOẠCH BÁO BÀI (KẺ BẢNG GỘP Ô) - NẰM TRỌN VẸN Ở TRANG 1
  const hasBaoBai = Boolean(plan.baoBai && plan.baoBai.rows.length > 0 && !options?.singleGrade);

  if (hasBaoBai && plan.baoBai) {
    // Tiêu đề KẾ HOẠCH BÁO BÀI
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({
            text: `KẾ HOẠCH BÁO BÀI TUẦN ${plan.weekNumber}`,
            font: FONT_FAMILY,
            bold: true,
            size: 28, // 14pt
          }),
        ],
      })
    );

    // Thời gian
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 60 },
        children: [
          new TextRun({
            text: `(Từ ngày ${plan.startDateStr} đến ngày ${plan.endDateStr})`,
            font: FONT_FAMILY,
            italics: true,
            size: 24, // 12pt
          }),
        ],
      })
    );

    // Môn và GV
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 120 },
        children: [
          new TextRun({
            text: `Môn: Mĩ thuật - Giáo viên: ${teacher.name} - ${teacher.school}`,
            font: FONT_FAMILY,
            bold: true,
            size: 24, // 12pt
          }),
        ],
      })
    );

    // Bảng Báo bài kẻ bảng hoàn chỉnh kèm gộp ô
    docChildren.push(createDocxBaoBaiTable(plan.baoBai));

    // Ngắt trang sau Báo bài để toàn bộ bài dạy KHBD (Khối 1...) bắt đầu chuẩn xác từ Trang 2
    docChildren.push(
      new Paragraph({
        children: [new PageBreak()],
      })
    );
  }

  // Render each lesson for the week
  lessonsToInclude.forEach((lesson, index) => {
    // 1. Day / Class lines for this lesson
    lesson.dateLines.forEach(line => {
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({
              text: line,
              font: FONT_FAMILY,
              bold: true,
              size: 26, // 13pt
            }),
          ],
        })
      );
    });

    // 2. Grade Title
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 100, after: 60 },
        children: [
          new TextRun({
            text: `MĨ THUẬT ${lesson.grade}`,
            font: FONT_FAMILY,
            bold: true,
            size: 28, // 14pt
          }),
        ],
      })
    );

    // 3. Topic Name
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 60 },
        children: [
          new TextRun({
            text:
              typeof lesson.content.chuDeNumber === 'number'
                ? `Chủ đề ${lesson.content.chuDeNumber}: ${lesson.content.chuDeName}`
                : lesson.content.chuDeName,
            font: FONT_FAMILY,
            bold: true,
            size: 26, // 13pt
          }),
        ],
      })
    );

    // 4. Period text (e.g. "(1 Tiết)" or "(Tiết 1)")
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 140 },
        children: [
          new TextRun({
            text: lesson.content.tietText,
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );

    // I. YÊU CẦU CẦN ĐẠT
    docChildren.push(
      new Paragraph({
        spacing: { before: 100, after: 80 },
        children: [
          new TextRun({
            text: 'I. YÊU CẦU CẦN ĐẠT',
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );

    lesson.content.yeuCauCanDat.forEach(yccd => {
      docChildren.push(
        new Paragraph({
          spacing: { before: 30, after: 30 },
          indent: { left: convertInchesToTwip(0.15) },
          children: [
            new TextRun({
              text: yccd,
              font: FONT_FAMILY,
              size: 26,
            }),
          ],
        })
      );
    });

    // Integrated content (ANQP, AI, etc.) with specific run colors!
    if (lesson.content.tichHop && lesson.content.tichHop.length > 0) {
      lesson.content.tichHop.forEach(th => {
        const hexColor = th.color.replace('#', '');
        const titleText = th.code ? `${th.title} ${th.code}` : th.title;
        docChildren.push(
          new Paragraph({
            spacing: { before: 60, after: 30 },
            indent: { left: convertInchesToTwip(0.15) },
            children: [
              new TextRun({
                text: titleText,
                font: FONT_FAMILY,
                bold: true,
                size: 26,
                color: hexColor,
              }),
            ],
          })
        );
        th.content.forEach(line => {
          docChildren.push(
            new Paragraph({
              spacing: { before: 20, after: 20 },
              indent: { left: convertInchesToTwip(0.3) },
              children: [
                new TextRun({
                  text: line,
                  font: FONT_FAMILY,
                  size: 26,
                  color: hexColor,
                }),
              ],
            })
          );
        });
      });
    }

    // II. ĐỒ DÙNG DẠY - HỌC
    docChildren.push(
      new Paragraph({
        spacing: { before: 140, after: 80 },
        children: [
          new TextRun({
            text: 'II. ĐỒ DÙNG DẠY - HỌC VÀ HỌC LIỆU',
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { before: 40, after: 30 },
        indent: { left: convertInchesToTwip(0.15) },
        children: [
          new TextRun({
            text: '1. Giáo viên:',
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );
    lesson.content.doDungDayHoc.giaoVien.forEach(gv => {
      docChildren.push(
        new Paragraph({
          spacing: { before: 20, after: 20 },
          indent: { left: convertInchesToTwip(0.3) },
          children: [
            new TextRun({
              text: gv,
              font: FONT_FAMILY,
              size: 26,
            }),
          ],
        })
      );
    });

    docChildren.push(
      new Paragraph({
        spacing: { before: 40, after: 30 },
        indent: { left: convertInchesToTwip(0.15) },
        children: [
          new TextRun({
            text: '2. Học sinh:',
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );
    lesson.content.doDungDayHoc.hocSinh.forEach(hs => {
      docChildren.push(
        new Paragraph({
          spacing: { before: 20, after: 20 },
          indent: { left: convertInchesToTwip(0.3) },
          children: [
            new TextRun({
              text: hs,
              font: FONT_FAMILY,
              size: 26,
            }),
          ],
        })
      );
    });

    // III. CÁC HOẠT ĐỘNG DẠY-HỌC CHỦ YẾU (Bảng 2 cột)
    docChildren.push(
      new Paragraph({
        spacing: { before: 140, after: 80 },
        children: [
          new TextRun({
            text: 'III. CÁC HOẠT ĐỘNG DẠY - HỌC CHỦ YẾU',
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );

    // Build Table Rows
    const tableRows: TableRow[] = [];

    // Header row
    tableRows.push(
      new TableRow({
        tableHeader: true,
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            margins: { top: 120, bottom: 120, left: 140, right: 140 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: 'Hoạt động của GV',
                    font: FONT_FAMILY,
                    bold: true,
                    size: 26,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            margins: { top: 120, bottom: 120, left: 140, right: 140 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: 'Hoạt động của HS',
                    font: FONT_FAMILY,
                    bold: true,
                    size: 26,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );

    // Data rows
    lesson.content.hoatDongDayHoc.forEach(group => {
      // Group header row spanning both columns
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 2,
              width: { size: 100, type: WidthType.PERCENTAGE },
              shading: { fill: 'F2F2F2' },
              margins: { top: 80, bottom: 80, left: 140, right: 140 },
              children: [
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  children: [
                    new TextRun({
                      text: group.name,
                      font: FONT_FAMILY,
                      bold: true,
                      size: 26,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );

      // If group has direct items
      if (group.items && group.items.length > 0) {
        group.items.forEach(item => {
          const gvParas: Paragraph[] = [];
          const hsParas: Paragraph[] = [];

          item.teacher.split('\n').forEach(line => {
            gvParas.push(
              new Paragraph({
                spacing: { before: 20, after: 20 },
                children: [new TextRun({ text: line, font: FONT_FAMILY, size: 26 })],
              })
            );
          });

          item.student.split('\n').forEach(line => {
            hsParas.push(
              new Paragraph({
                spacing: { before: 20, after: 20 },
                children: [new TextRun({ text: line, font: FONT_FAMILY, size: 26 })],
              })
            );
          });

          tableRows.push(
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  margins: { top: 100, bottom: 100, left: 140, right: 140 },
                  children: gvParas,
                }),
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  margins: { top: 100, bottom: 100, left: 140, right: 140 },
                  children: hsParas,
                }),
              ],
            })
          );
        });
      }

      // If group has subSections (like 2.1, 2.2, 2.3, 2.4)
      if (group.subSections && group.subSections.length > 0) {
        group.subSections.forEach(sub => {
          // SubSection title row spanning both columns
          tableRows.push(
            new TableRow({
              children: [
                new TableCell({
                  columnSpan: 2,
                  width: { size: 100, type: WidthType.PERCENTAGE },
                  shading: { fill: 'FAFAFA' },
                  margins: { top: 60, bottom: 60, left: 140, right: 140 },
                  children: [
                    new Paragraph({
                      spacing: { before: 20, after: 20 },
                      children: [
                        new TextRun({
                          text: sub.title,
                          font: FONT_FAMILY,
                          bold: true,
                          italics: true,
                          size: 26,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );

          sub.items.forEach(item => {
            const gvParas: Paragraph[] = [];
            const hsParas: Paragraph[] = [];

            item.teacher.split('\n').forEach(line => {
              gvParas.push(
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  children: [new TextRun({ text: line, font: FONT_FAMILY, size: 26 })],
                })
              );
            });

            item.student.split('\n').forEach(line => {
              hsParas.push(
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  children: [new TextRun({ text: line, font: FONT_FAMILY, size: 26 })],
                })
              );
            });

            tableRows.push(
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    margins: { top: 100, bottom: 100, left: 140, right: 140 },
                    children: gvParas,
                  }),
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    margins: { top: 100, bottom: 100, left: 140, right: 140 },
                    children: hsParas,
                  }),
                ],
              })
            );
          });
        });
      }
    });

    const activityTableBorders = {
      top: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
      left: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
      right: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
    };

    const activityTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: activityTableBorders,
      rows: tableRows,
    });
    docChildren.push(activityTable);

    // IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)
    docChildren.push(
      new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [
          new TextRun({
            text: 'IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)',
            font: FONT_FAMILY,
            bold: true,
            size: 26,
          }),
        ],
      })
    );

    const dottedLines = lesson.content.dieuChinhSauBaiDay || [
      '………………………………………………………………………………………………',
      '………………………………………………………………………………………………',
      '……………………………………………………………………………………………….'
    ];

    dottedLines.forEach(dot => {
      docChildren.push(
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [new TextRun({ text: dot, font: FONT_FAMILY, size: 24 })],
        })
      );
    });

    // Spacing between lessons
    if (index < lessonsToInclude.length - 1) {
      docChildren.push(
        new Paragraph({
          spacing: { before: 120, after: 120 },
          children: [
            new TextRun({
              text: '--------------------------------------------------------------------------',
              font: FONT_FAMILY,
              size: 20,
              color: '888888',
            }),
          ],
          alignment: AlignmentType.CENTER,
        })
      );
    }
  });

  // End of document signature block
  docChildren.push(
    new Paragraph({
      spacing: { before: 240, after: 80 },
      children: [],
    })
  );

  docChildren.push(createSignatureTable(teacher));

  // TOÀN BỘ TÀI LIỆU CHUẨN MỰC GIỮ NGUYÊN HEADER, FOOTER, TRANG 1 TUYỆT ĐỐI THEO FILE MẪU TUẦN 1
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.PORTRAIT,
              width: convertInchesToTwip(8.27),
              height: convertInchesToTwip(11.69),
            },
            margin: {
              top: convertInchesToTwip(0.79), // 2.0 cm
              bottom: convertInchesToTwip(0.79), // 2.0 cm
              left: convertInchesToTwip(1.18), // 3.0 cm
              right: convertInchesToTwip(0.59), // 1.5 cm
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `Kế hoạch bài dạy môn Mĩ thuật                    `,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                  new TextRun({
                    text: `                    GV: ${teacher.name}`,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `${teacher.school}                                                          Năm học: ${teacher.schoolYear}`,
                    font: FONT_FAMILY,
                    size: 22,
                  }),
                ],
              }),
            ],
          }),
        },
        children: docChildren,
      },
    ],
  });

  const weekNumStr = String(plan.weekNumber).padStart(2, '0');
  const filename = options?.singleGrade
    ? `TUAN ${weekNumStr}_KHOI_${options.singleGrade}.docx`
    : `TUAN ${weekNumStr}.docx`;

  const blob = await Packer.toBlob(doc);
  saveAs(blob, filename);
  return { blob, filename };
}
