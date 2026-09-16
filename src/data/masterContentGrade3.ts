import { LessonContent } from '../types';

export const MASTER_CONTENT_GRADE_3: Record<number, LessonContent> = {
  1: {
    grade: 3,
    week: 1,
    chuDeNumber: 1,
    chuDeName: 'Em yêu mĩ thuật',
    tietText: '(1 Tiết)',
    yeuCauCanDat: [
      'HS biết về một số hoạt động thực hành, sáng tạo mĩ thuật trong và ngoài nhà trường.',
      'HS biết đến một số sản phẩm MT được thực hành trong môn học.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS biết về một số hoạt động thực hành, sáng tạo mĩ thuật trong và ngoài nhà trường.',
      'HS biết đến một số sản phẩm MT được thực hành trong môn học.',
      'HS biết được về một số dạng sản phẩm MT tạo hình và sản phẩm MT ứng dụng được thực hành, sáng tạo trong nhà trường.',
      'HS phân biệt được sản phẩm MT 2D và 3D.',
      'HS biết đến những hoạt động liên quan đến môn Mĩ thuật để quan tâm đến môn học hơn.',
      'HS biết được vẻ đẹp của sản phẩm MT, từ đó thêm yêu thích môn học.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '3.0.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Nhận thức về tình yêu quê hương, đất nước.',
          'Nhận biết vẻ đẹp của các sản phẩm mĩ thuật truyền thống để nuôi dưỡng tình yêu quê hương.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '3.B2.1',
        title: 'Tích hợp AI:',
        content: [
          'Nhận biết và nêu được ví dụ về việc thông tin hoặc sản phẩm do AI tạo ra có thể không đúng với sự thật.',
          'Nhận biết được sự khác nhau giữa tác phẩm mĩ thuật do con người tạo ra và hình ảnh mô phỏng do AI tạo ra.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số sản phẩm MT 2D, 3D và sản phẩm MT tạo hình, ứng dụng để phân tích trực tiếp cho HS theo dõi, phân biệt.',
        'Một số video, clip giới thiệu về hoạt động liên quan đến môn Mĩ thuật như: Thực hành ngoài trời, tham quan bảo tàng...để chiếu cho HS quan sát.'
      ],
      hocSinh: [
        'SGK mĩ thuật 3, vở bài tập mĩ thuật 3.',
        'Bút chì, bút lông, hộp màu, sáp màu, giấy vẽ, giấy màu các loại, kéo, keo dán, đất nặn, vật liệu tái sử dụng.'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV cho HS xem video về các hoạt động vẽ tranh, các sản phẩm mĩ thuật đẹp.\n- GV hỏi HS có yêu thích mĩ thuật không?\n- Nhận xét, khen ngợi HS.\n- Giới thiệu chủ đề bài học.',
            student: '- HS xem.\n- HS nêu.\n- Mở bài học, ghi tên bài vào vở MT.'
          }
        ]
      },
      {
        name: '2. Hoạt động: hình thành kiến thức mới.',
        subSections: [
          {
            title: '2.1. Hoạt động mĩ thuật.',
            items: [
              {
                teacher: '* Tiến trình của hoạt động:\n- GV mời một số HS nói những hiểu biết của mình về một số hoạt động đặc thù của môn mĩ thuật mà các em đã tham gia ở trong và ngoài trường học.\n- GV gợi ý:\n+ Ở lớp, em đã tham gia những hoạt động nào liên quan đến môn mĩ thuật?\n+ Ở trường em đã tham gia những hoạt động nào liên quan đến môn mĩ thuật?\n+ Ngoài giờ học như cuối tuần, ngày nghỉ, ngày lễ hay vào dịp hè, em có tham gia các hoạt động nào liên quan đến môn mĩ thuật không?\n+ Trong các hoạt động đó em yêu thích hoạt động nào nhất?\n- Căn cứ vào điều kiện tổ chức dạy học ở trường mình, GV cho HS xem thêm video clip giới thiệu về những hoạt động trải nghiệm liên quan đến mĩ thuật.',
                student: '- HS nói những hiểu biết của mình về một số hoạt động đặc thù của môn mĩ thuật mà các em đã tham gia ở trong và ngoài trường học.\n- Vẽ, xé dán, nặn, đắp nổi, làm sản phẩm MT từ vật liệu có sẵn, tái sử dụng, trưng bày sản phẩm MT...\n- Thực hành mĩ thuật ngoài sân trường, tham gia triển lãm mĩ thuật toàn trường nhân dịp 20-11, trang trí bảng tin...\n- Xem phòng tranh, khu trưng bày hiện vật ở bảo tàng, tham gia câu lạc bộ...\n- HS nêu.\n- HS xem thêm video clip giới thiệu.'
              }
            ]
          },
          {
            title: '2.2. Sản phẩm mĩ thuật.',
            items: [
              {
                teacher: '* Tiến trình của hoạt động:\n- GV mời một số HS nói về những SPMT đã thực hiện trong năm học trước và gọi tên những SPMT này theo cách hiểu của mình.\n- GV gợi ý: Ở lớp 2 em đã vẽ, nặn được bao nhiêu SPMT? Ngoài vẽ, nặn em còn sử dụng cách nào để tạo nên SPMT? Sản phẩm MT 2D là gì? Sản phẩm MT 3D là gì?\n- Căn cứ vào SPMT tạo hình/ứng dụng, 2D, 3D đã chuẩn bị, GV phân tích trên SPMT cụ thể để giúp HS có ý thức rõ ràng về từng loại sản phẩm.',
                student: '- HS nói về những SPMT đã thực hiện trong năm học trước và gọi tên những SPMT này theo cách hiểu của mình.\n- 1, 2 HS nêu.\n- 1 HS trả lời: SPMT 2D là tranh vẽ, xé dán phẳng; 3D là tượng, hình khối có chiều sâu.\n- Lắng nghe để có ý thức rõ ràng về từng loại sản phẩm.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: luyện tập, thực hành.',
        items: [
          {
            teacher: '- GV cho HS viết những SPMT muốn thể hiện vào Vở bài tập MT3 hoặc vào giấy nhằm giúp HS có ý thức ban đầu về nhiệm vụ học tập sẽ thực hiện trong năm học này.\n- GV khen ngợi động viên HS.',
            student: '- HS viết những SPMT muốn thể hiện vào Vở bài tập MT3 hoặc vào giấy nhằm giúp HS có ý thức ban đầu về nhiệm vụ học tập sẽ thực hiện trong năm học này.\n- Thực hiện.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi, động viên HS.\n- Liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Xem trước chủ đề 2.\n- Chuẩn bị đầy đủ: Giấy vẽ, giấy màu, màu vẽ, keo, bút chì, kéo... cho bài sau.',
            student: '- 1, 2 HS nêu.\n- Phát huy.\n- Mở rộng kiến thức thực tế.\n- Trật tự.\n- Thực hiện ở nhà.\n- Chuẩn bị ở nhà.'
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

  2: {
    grade: 3,
    week: 2,
    chuDeNumber: 2,
    chuDeName: 'Hoa văn trên trang phục của một số dân tộc',
    tietText: '(Tiết 1)',
    yeuCauCanDat: [
      'HS biết về một số hoa văn được tạo nên từ nét.',
      'HS hiểu về việc kết hợp của hoa văn trong trang trí đồ vật.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS biết về một số hoa văn được tạo nên từ nét.',
      'HS hiểu về việc kết hợp của hoa văn trong trang trí đồ vật.',
      'HS có khả năng sử dụng các nét đã biết để chép một mẫu hoa văn trên trang phục mình yêu thích.',
      'HS sử dụng được mẫu hoa văn yêu thích trang trí một đồ vật bằng hình thức vẽ, nặn, đắp nổi.',
      'HS có ý thức gắn kết kiến thức môn học với việc trang trí, làm đẹp đồ vật trong cuộc sống.',
      'HS biết về vẻ đẹp trên trang phục của một số dân tộc, từ đó có thêm tình cảm với đồng bào ở các vùng miền của đất nước.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '3.1.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giáo dục truyền thống chống giặc ngoại xâm - gắn với bản sắc dân tộc.',
          'Thể hiện niềm tự hào về bản sắc văn hóa các dân tộc anh em và ý thức bảo vệ truyền thống dân tộc.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '3.C5.1',
        title: 'Tích hợp AI:',
        content: [
          'Hiểu được cấu trúc nếu ... thì ... trong việc giải quyết tình huống hoặc phân loại.',
          'Hiểu được quy luật lặp lại của hoa văn trên trang phục dân tộc như một dạng "thuật toán" (Nếu vị trí A là nét cong thì vị trí B cũng là nét cong).'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số hình ảnh, video clip giới thiệu về hoa văn trên trang phục của một số dân tộc tại địa phương để trình chiếu trên Powerpoint cho HS quan sát.',
        'Hình ảnh SPMT được trang trí từ một số hoa văn để làm minh họa, phân tích về cách sử dụng hoa văn trong trang trí đồ vật để HS quan sát trực tiếp.'
      ],
      hocSinh: [
        'SGK mĩ thuật 3, vở bài tập mĩ thuật 3.',
        'Giấy vẽ, giấy màu, bút chì, màu vẽ các loại, kéo, keo dán, đất nặn, vật liệu tái sử dụng.'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV cho HS xem video về các Lễ hội, trang phục có hoa văn đặc sắc của một số dân tộc.\n- Hỏi HS thấy hình ảnh gì trong video?\n- Khen ngợi HS.\n- GV giới thiệu chủ đề.',
            student: '- HS xem video.\n- Lễ hội và trang phục người dân tộc.\n- Mở bài học, ghi tên bài vào vở MT.'
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
                teacher: '* Hoa văn trên trang phục của đồng bào dân tộc Mông, Ê-Đê, Chăm:\n- GV cho HS quan sát một số trang phục có hoa văn như: mũ, váy, áo...\n- Đặt câu hỏi: Hoa văn này có hình gì? Hoa văn này được tạo nên từ những nét nào?\n- GV mở rộng: Hoa văn trên trang phục mô phỏng hoa lá, con vật trong cuộc sống, cách điệu từ các hình vuông, tam giác, đường dích dắc...',
                student: '- HS quan sát, trả lời.\n- Hình tam giác, hình chữ nhật, hình thoi...\n- Nét thẳng, nét cong, nét dích dắc...\n- Đối xứng, lặp lại, xen kẽ.'
              }
            ]
          },
          {
            title: '2.2. Thể hiện',
            items: [
              {
                teacher: '- GV cho HS thực hành chép một mẫu hoa văn theo gợi ý:\n+ Hình dạng hoa văn: một hình hay kết hợp nhiều hình?\n+ Chi tiết: hoa văn tạo nên từ những nét nào?\n- Hướng dẫn HS vẽ từ hình hoa văn rồi vẽ chi tiết từ trái sang phải.',
                student: '- HS lắng nghe, tiếp thu kiến thức.\n- Thực hiện chép mẫu hoa văn yêu thích.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: luyện tập, thực hành.',
        items: [
          {
            teacher: '- GV nêu yêu cầu bài thực hành: HS sử dụng mẫu hoa văn trang trí một đồ vật yêu thích.\n- Quan sát, giúp đỡ HS hoàn thành bài tập.\n*Trưng bày, nhận xét, chia sẻ sản phẩm:\n- Cho HS trưng bày, chia sẻ về sản phẩm của mình.',
            student: '- HS tiến hành sử dụng mẫu hoa văn trang trí một đồ vật yêu thích.\n- HS trưng bày, chia sẻ về SP.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS học tốt.\n- Dặn dò bảo quản sản phẩm và chuẩn bị cho tiết học sau.',
            student: '- 1, 2 HS nêu.\n- Phát huy.\n- Chuẩn bị đầy đủ đồ dùng.'
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

  ...generateRemainingGrade3()
};

function generateRemainingGrade3(): Record<number, LessonContent> {
  const list: Record<number, LessonContent> = {};

  const titles: Record<number, { c: number | string; name: string; tiet: string }> = {
    3: { c: 2, name: 'Hoa văn trên trang phục của một số dân tộc', tiet: '(Tiết 2)' },
    4: { c: 3, name: 'Màu sắc em yêu', tiet: '(Tiết 1)' },
    5: { c: 3, name: 'Màu sắc em yêu', tiet: '(Tiết 2)' },
    6: { c: 3, name: 'Màu sắc em yêu', tiet: '(Tiết 3)' },
    7: { c: 4, name: 'Vẻ đẹp của khối', tiet: '(Tiết 1)' },
    8: { c: 4, name: 'Vẻ đẹp của khối', tiet: '(Tiết 2)' },
    9: { c: 4, name: 'Vẻ đẹp của khối', tiet: '(Tiết 3)' },
    10: { c: 5, name: 'Một số vật liệu sử dụng trong thực hành, sáng tạo MT', tiet: '(Tiết 1)' },
    11: { c: 5, name: 'Một số vật liệu sử dụng trong thực hành, sáng tạo MT', tiet: '(Tiết 2)' },
    12: { c: 5, name: 'Một số vật liệu sử dụng trong thực hành, sáng tạo MT', tiet: '(Tiết 3)' },
    13: { c: 6, name: 'Biết ơn thầy cô', tiet: '(Tiết 1)' },
    14: { c: 6, name: 'Biết ơn thầy cô', tiet: '(Tiết 2)' },
    15: { c: 6, name: 'Biết ơn thầy cô', tiet: '(Tiết 3)' },
    16: { c: 6, name: 'Biết ơn thầy cô', tiet: '(Tiết 4)' },
    17: { c: 'KT', name: 'KIỂM TRA ĐÁNH GIÁ CUỐI HỌC KÌ I', tiet: '(1 Tiết)' },
    18: { c: 7, name: 'Cảnh vật quanh em', tiet: '(Tiết 1)' },
    19: { c: 7, name: 'Cảnh vật quanh em', tiet: '(Tiết 2)' },
    20: { c: 7, name: 'Cảnh vật quanh em', tiet: '(Tiết 3)' },
    21: { c: 7, name: 'Cảnh vật quanh em', tiet: '(Tiết 4)' },
    22: { c: 8, name: 'Chân dung người thân trong gia đình', tiet: '(Tiết 1)' },
    23: { c: 8, name: 'Chân dung người thân trong gia đình', tiet: '(Tiết 2)' },
    24: { c: 8, name: 'Chân dung người thân trong gia đình', tiet: '(Tiết 3)' },
    25: { c: 8, name: 'Chân dung người thân trong gia đình', tiet: '(Tiết 4)' },
    26: { c: 9, name: 'Sinh hoạt trong gia đình', tiet: '(Tiết 1)' },
    27: { c: 9, name: 'Sinh hoạt trong gia đình', tiet: '(Tiết 2)' },
    28: { c: 9, name: 'Sinh hoạt trong gia đình', tiet: '(Tiết 3)' },
    29: { c: 9, name: 'Sinh hoạt trong gia đình', tiet: '(Tiết 4)' },
    30: { c: 10, name: 'An toàn giao thông', tiet: '(Tiết 1)' },
    31: { c: 10, name: 'An toàn giao thông', tiet: '(Tiết 2)' },
    32: { c: 10, name: 'An toàn giao thông', tiet: '(Tiết 3)' },
    33: { c: 10, name: 'An toàn giao thông', tiet: '(Tiết 4)' },
    34: { c: 'KT', name: 'KIỂM TRA ĐÁNH GIÁ CUỐI NĂM HỌC', tiet: '(1 Tiết)' },
    35: { c: 'TB', name: 'TRƯNG BÀY SẢN PHẨM CUỐI NĂM', tiet: '(1 Tiết)' }
  };

  for (let w = 3; w <= 35; w++) {
    const t = titles[w];
    list[w] = {
      grade: 3,
      week: w,
      chuDeNumber: t.c,
      chuDeName: t.name,
      tietText: t.tiet,
      yeuCauCanDat: [
        `HS nắm vững kiến thức, kĩ năng chủ đề ${t.name}.`,
        'Biết kết hợp các yếu tố tạo hình (nét, màu, khối, chất cảm) trong thực hành sáng tạo.',
        'Tạo được sản phẩm mĩ thuật 2D hoặc 3D có tính thẩm mĩ và gắn liền với thực tiễn.',
        'Có thái độ tôn trọng, giữ gìn sản phẩm mĩ thuật và rèn luyện tính kiên trì, tự giác.'
      ],
      tichHop: [
        {
          type: 'ANQP',
          code: '3.0.1',
          title: 'Tích hợp ANQP:',
          content: [
            'Bồi dưỡng tình yêu quê hương, đất nước qua các di sản và nét đẹp văn hóa.',
            'Có ý thức chấp hành pháp luật, bảo vệ trật tự an toàn và kỷ luật học đường.'
          ],
          color: '#ED7D31'
        },
        {
          type: 'AI',
          code: '3.B2.1',
          title: 'Tích hợp AI:',
          content: [
            'Hiểu biết cơ bản về ứng dụng AI trong học tập và nhận diện hình ảnh.',
            'Nhận biết sản phẩm do con người tạo ra chứa đựng cảm xúc chân thực.'
          ],
          color: '#00B0F0'
        }
      ],
      doDungDayHoc: {
        giaoVien: [
          'SGK Mĩ thuật 3, video clip, hình ảnh minh họa chủ đề.',
          'Các mẫu sản phẩm mĩ thuật trực quan, vật liệu dạy học.'
        ],
        hocSinh: [
          'SGK Mĩ thuật 3, Vở bài tập Mĩ thuật 3.',
          'Bút chì, tẩy, màu vẽ, giấy màu, kéo, keo dán, đất nặn, phế liệu sạch...'
        ]
      },
      hoatDongDayHoc: [
        {
          name: '1. Hoạt động: khởi động',
          items: [
            {
              teacher: `- GV tổ chức cho HS khởi động với bài hát/trò chơi gắn với chủ đề ${t.name}.\n- Khen ngợi và giới thiệu bài học mới.`,
              student: '- HS tham gia hào hứng, tương tác sôi nổi.\n- Mở bài học trong SGK Mĩ thuật 3.'
            }
          ]
        },
        {
          name: '2. Hoạt động: hình thành kiến thức mới.',
          items: [
            {
              teacher: `- Hướng dẫn HS quan sát tranh ảnh, hiện vật trong SGK Mĩ thuật 3 về chủ đề ${t.name}.\n- Gợi mở câu hỏi để HS nhận biết các yếu tố và nguyên lí tạo hình.\n- GV thị phạm các bước tạo hình cho HS quan sát.`,
              student: '- HS quan sát, trao đổi và trả lời câu hỏi của GV.\n- Tiếp thu kiến thức và ghi nhớ các bước thực hành.'
            }
          ]
        },
        {
          name: '3. Hoạt động: luyện tập, thực hành.',
          items: [
            {
              teacher: `- Nêu yêu cầu bài thực hành chủ đề ${t.name}.\n- Quan sát, hỗ trợ và động viên HS hoàn thành sản phẩm.\n- Tổ chức trưng bày, nhận xét và chia sẻ sản phẩm theo nhóm.`,
              student: '- HS thực hành sáng tạo sản phẩm theo ý thích.\n- Trưng bày và nhận xét bài của mình cùng bạn.'
            }
          ]
        },
        {
          name: '4. Vận dụng:',
          items: [
            {
              teacher: '- Yêu cầu HS nhắc lại kiến thức bài học.\n- Liên hệ thực tế cuộc sống.\n- Dặn dò chuẩn bị đồ dùng cho bài học tiếp theo.',
              student: '- HS nêu lại kiến thức bài học.\n- Ghi nhớ và chuẩn bị đồ dùng ở nhà.'
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
