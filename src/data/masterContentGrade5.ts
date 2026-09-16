import { LessonContent } from '../types';

export const MASTER_CONTENT_GRADE_5: Record<number, LessonContent> = {
  1: {
    grade: 5,
    week: 1,
    chuDeNumber: 1,
    chuDeName: 'Yếu tố tạo hình trong thực hành, sáng tạo theo chủ đề',
    tietText: '(Tiết 1)',
    yeuCauCanDat: [
      'HS nhận biết được một số yếu tố và nguyên lí tạo hình ở SPMT, TPMT.',
      'HS nhận định được một số hình thức biểu hiện của yếu tố tạo hình trong thực hành, sáng tạo theo chủ đề.',
      'HS biết sử dụng yếu tố tạo hình làm trọng tâm ở sản phẩm mĩ thuật.',
      'HS yêu thích và sử dụng đa dạng các yếu tố mĩ thuật trong tạo hình, thiết kế SPMT.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '5.1.3',
        title: 'Tích hợp ANQP:',
        content: [
          'Những tấm gương dũng cảm của cán bộ, chiến sĩ Quân đội nhân dân và Công an nhân dân.',
          'Sử dụng các yếu tố tạo hình để thể hiện hình ảnh, tác phong nghiêm túc, kỉ luật của người chiến sĩ Quân đội nhân dân Việt Nam.'
        ],
        color: '#ED7D31'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'SGV, SGK Mĩ thuật 5.',
        'Một số hình ảnh, video clip giới thiệu về TPMT, SPMT để trình chiếu trên PowerPoint cho HS quan sát.',
        'Hình ảnh SPMT sử dụng yếu tố tạo hình làm trọng tâm ở sản phẩm với nhiều vật liệu và hình thức khác nhau để minh hoạ trực tiếp.'
      ],
      hocSinh: [
        'SGK mĩ thuật 5, vở bài tập mĩ thuật 5.',
        'Giấy vẽ, giấy màu, bút chì, màu vẽ các loại, kéo, keo dán, đất nặn, vật liệu tái sử dụng.'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- Tổ chức cho HS tham gia khởi động tuỳ điều kiện thực tế (theo nhóm hoặc cá nhân).\n- Gợi ý: Trò chơi trắc nghiệm chọn đáp án đúng; giải ô chữ tìm những yếu tố tạo hình đã học.\n- Nhận xét, khen ngợi HS.\n- GV giới thiệu chủ đề.',
            student: '- HS lắng nghe, quan sát và khởi động theo hướng dẫn của GV.\n- HS chơi TC theo gợi ý của GV.\n- Phát huy.\n- Mở bài học, ghi tên bài vào vở MT.'
          }
        ]
      },
      {
        name: '2. Hoạt động: hình thành kiến thức mới.',
        subSections: [
          {
            title: '2.1. Quan sát',
            items: [
              {
                teacher: '- GV tổ chức cho HS quan sát hình minh hoạ trong SGK Mĩ thuật 5, trang 5 và 6.\n- Đặt câu hỏi khai thác sâu hơn về nội dung:\n+ Yếu tố tạo hình nào ấn tượng với em? Vì sao?\n+ Em sẽ sử dụng yếu tố, nguyên lí tạo hình nào trong phần thực hành của mình?\n- GV tóm tắt và chốt ý theo nội dung ở phần “Em có biết”, SGK Mĩ thuật 5, trang 6.',
                student: '- HS thực hiện quan sát, thảo luận trả lời câu hỏi để tìm hiểu về chủ đề “Yếu tố tạo hình trong thực hành sáng tạo”.\n- HS trả lời theo cảm nhận: đường nét, màu sắc tương phản, mảng khối...\n- Lắng nghe và ghi nhớ.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: luyện tập, thực hành.',
        items: [
          {
            teacher: '- GV nêu yêu cầu bài thực hành: HS vận dụng yếu tố, nguyên lí tạo hình trong thực hành, sáng tạo SPMT theo chủ đề tạo một sản phẩm yêu thích bằng hình thức vẽ, tô màu, xé dán,...\n- Quan sát, hỗ trợ HS hoàn thành sản phẩm.\n*Giới thiệu, nhận xét, chia sẻ sản phẩm:\n- Tổ chức trưng bày và chia sẻ sản phẩm.',
            student: '- HS tiến hành vận dụng yếu tố, nguyên lí tạo hình trong thực hành, sáng tạo SPMT.\n- HS trưng bày, chia sẻ về SP.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS học tốt.\n- Liên hệ thực tế cuộc sống.\n- Dặn dò chuẩn bị đồ dùng cho tiết sau.',
            student: '- 1, 2 HS nêu.\n- Phát huy.\n- Chuẩn bị đầy đủ đồ dùng HT cho tiết sau.'
          }
        ]
      }
    ],
    dieuChinhSauBaiDay: [
      '………………………………………………………………………………………………',
      '………………………………………………………………………………………………',
      '……………………………………………………………………………………………….'
    ]
  },

  ...generateRemainingGrade5()
};

function generateRemainingGrade5(): Record<number, LessonContent> {
  const list: Record<number, LessonContent> = {};

  const titles: Record<number, { c: number | string; name: string; tiet: string }> = {
    2: { c: 1, name: 'Yếu tố tạo hình trong thực hành, sáng tạo theo chủ đề', tiet: '(Tiết 2)' },
    3: { c: 1, name: 'Yếu tố tạo hình trong thực hành, sáng tạo theo chủ đề', tiet: '(Tiết 3)' },
    4: { c: 1, name: 'Yếu tố tạo hình trong thực hành, sáng tạo theo chủ đề', tiet: '(Tiết 4)' },
    5: { c: 2, name: 'Hình tượng anh hùng dân tộc trong mĩ thuật tạo hình Việt Nam', tiet: '(Tiết 1)' },
    6: { c: 2, name: 'Hình tượng anh hùng dân tộc trong mĩ thuật tạo hình Việt Nam', tiet: '(Tiết 2)' },
    7: { c: 2, name: 'Hình tượng anh hùng dân tộc trong mĩ thuật tạo hình Việt Nam', tiet: '(Tiết 3)' },
    8: { c: 2, name: 'Hình tượng anh hùng dân tộc trong mĩ thuật tạo hình Việt Nam', tiet: '(Tiết 4)' },
    9: { c: 3, name: 'Gia đình', tiet: '(Tiết 1)' },
    10: { c: 3, name: 'Gia đình', tiet: '(Tiết 2)' },
    11: { c: 3, name: 'Gia đình', tiet: '(Tiết 3)' },
    12: { c: 3, name: 'Gia đình', tiet: '(Tiết 4)' },
    13: { c: 4, name: 'Những hoạt động yêu thích ở trường em', tiet: '(Tiết 1)' },
    14: { c: 4, name: 'Những hoạt động yêu thích ở trường em', tiet: '(Tiết 2)' },
    15: { c: 4, name: 'Những hoạt động yêu thích ở trường em', tiet: '(Tiết 3)' },
    16: { c: 4, name: 'Những hoạt động yêu thích ở trường em', tiet: '(Tiết 4)' },
    17: { c: 'KT', name: 'ĐÁNH GIÁ CUỐI HỌC KÌ I', tiet: '(1 Tiết)' },
    18: { c: 5, name: 'Những việc làm bình dị mà cao quý trong cuộc sống', tiet: '(Tiết 1)' },
    19: { c: 5, name: 'Những việc làm bình dị mà cao quý trong cuộc sống', tiet: '(Tiết 2)' },
    20: { c: 5, name: 'Những việc làm bình dị mà cao quý trong cuộc sống', tiet: '(Tiết 3)' },
    21: { c: 5, name: 'Những việc làm bình dị mà cao quý trong cuộc sống', tiet: '(Tiết 4)' },
    22: { c: 6, name: 'Cảnh sắc quê hương', tiet: '(Tiết 1)' },
    23: { c: 6, name: 'Cảnh sắc quê hương', tiet: '(Tiết 2)' },
    24: { c: 6, name: 'Cảnh sắc quê hương', tiet: '(Tiết 3)' },
    25: { c: 6, name: 'Cảnh sắc quê hương', tiet: '(Tiết 4)' },
    26: { c: 7, name: 'Việt Nam đất nước, con người', tiet: '(Tiết 1)' },
    27: { c: 7, name: 'Việt Nam đất nước, con người', tiet: '(Tiết 2)' },
    28: { c: 7, name: 'Việt Nam đất nước, con người', tiet: '(Tiết 3)' },
    29: { c: 7, name: 'Việt Nam đất nước, con người', tiet: '(Tiết 4)' },
    30: { c: 8, name: 'Vì một thế giới hoà bình', tiet: '(Tiết 1)' },
    31: { c: 8, name: 'Vì một thế giới hoà bình', tiet: '(Tiết 2)' },
    32: { c: 8, name: 'Vì một thế giới hoà bình', tiet: '(Tiết 3)' },
    33: { c: 8, name: 'Vì một thế giới hoà bình', tiet: '(Tiết 4)' },
    34: { c: 'KT', name: 'KIỂM TRA/ ĐÁNH GIÁ CUỐI NĂM HỌC', tiet: '(1 Tiết)' },
    35: { c: 'TB', name: 'TRƯNG BÀY SẢN PHẨM CUỐI NĂM', tiet: '(1 Tiết)' }
  };

  for (let w = 2; w <= 35; w++) {
    const t = titles[w];
    list[w] = {
      grade: 5,
      week: w,
      chuDeNumber: t.c,
      chuDeName: t.name,
      tietText: t.tiet,
      yeuCauCanDat: [
        `HS củng cố và nâng cao kiến thức, kĩ năng theo chủ đề ${t.name}.`,
        'Biết vận dụng sáng tạo các yếu tố và nguyên lí tạo hình (cân bằng, tương phản, lặp lại, nhấn mạnh).',
        'Tạo được sản phẩm mĩ thuật 2D, 3D phong phú từ các chất liệu đa dạng, thân thiện môi trường.',
        'Có thái độ tôn trọng di sản văn hóa, lòng yêu hòa bình và tình yêu quê hương đất nước.'
      ],
      tichHop: [
        {
          type: 'ANQP',
          code: '5.1.3',
          title: 'Tích hợp ANQP:',
          content: [
            'Bồi dưỡng lòng yêu nước, niềm tự hào dân tộc và ý thức bảo vệ chủ quyền biên giới, biển đảo.',
            'Thể hiện hình ảnh đẹp về người chiến sĩ lực lượng vũ trang nhân dân Việt Nam.'
          ],
          color: '#ED7D31'
        },
        {
          type: 'AI',
          code: '5.A2.1',
          title: 'Tích hợp AI:',
          content: [
            'Nhận biết ứng dụng AI trong đời sống và hỗ trợ sáng tạo mĩ thuật.',
            'Hiểu rằng AI là công cụ hỗ trợ, con người đóng vai trò sáng tạo và truyền tải cảm xúc thực sự.'
          ],
          color: '#00B0F0'
        }
      ],
      doDungDayHoc: {
        giaoVien: [
          'SGK Mĩ thuật 5, PowerPoint hình ảnh, video clip minh họa.',
          'Các mẫu SPMT tiêu biểu, vật liệu trực quan phục vụ bài dạy.'
        ],
        hocSinh: [
          'SGK Mĩ thuật 5, Vở bài tập Mĩ thuật 5.',
          'Bút chì, tẩy, màu vẽ, giấy màu, kéo, hồ dán, đất nặn, vật liệu sẵn có...'
        ]
      },
      hoatDongDayHoc: [
        {
          name: '1. Hoạt động: khởi động',
          items: [
            {
              teacher: `- GV tổ chức trò chơi hoặc bài hát khởi động theo chủ đề ${t.name}.\n- Khen ngợi và giới thiệu bài học mới.`,
              student: '- HS tham gia hào hứng, tự tin.\n- Mở SGK Mĩ thuật 5 theo bài học.'
            }
          ]
        },
        {
          name: '2. Hoạt động: hình thành kiến thức mới.',
          items: [
            {
              teacher: `- Cho HS quan sát tranh, ảnh, hiện vật trong SGK về chủ đề ${t.name}.\n- Đặt câu hỏi phân tích các yếu tố tạo hình, nguyên lí bố cục và màu sắc.\n- GV thị phạm hoặc phân tích các bước tạo hình cho HS.`,
              student: '- HS quan sát, trao đổi nhóm và trả lời các câu hỏi gợi ý.\n- Nắm vững các bước thực hiện sản phẩm.'
            }
          ]
        },
        {
          name: '3. Hoạt động: luyện tập, thực hành.',
          items: [
            {
              teacher: `- Nêu yêu cầu bài thực hành chủ đề ${t.name}.\n- Quan sát, gợi ý và hỗ trợ các em trong quá trình thực hiện.\n- Tổ chức trưng bày, nhận xét và chia sẻ sản phẩm.`,
              student: '- HS thực hành sáng tạo sản phẩm theo sở thích và năng lực.\n- Trưng bày, nhận xét và chia sẻ sản phẩm cùng bạn.'
            }
          ]
        },
        {
          name: '4. Vận dụng:',
          items: [
            {
              teacher: '- Củng cố kiến thức trọng tâm của bài học.\n- Liên hệ thực tế đời sống.\n- Dặn dò chuẩn bị đồ dùng cho bài học tiếp theo.',
              student: '- HS nhắc lại nội dung bài học.\n- Lắng nghe, ghi nhớ và chuẩn bị đồ dùng ở nhà.'
            }
          ]
        }
      ],
      dieuChinhSauBaiDay: [
        '………………………………………………………………………………………………',
        '………………………………………………………………………………………………',
        '……………………………………………………………………………………………….'
      ]
    };
  }

  return list;
}
