import { LessonContent } from '../types';

export const MASTER_CONTENT_GRADE_1: Record<number, LessonContent> = {
  1: {
    grade: 1,
    week: 1,
    chuDeNumber: 1,
    chuDeName: 'Mĩ thuật trong nhà trường',
    tietText: '(1 Tiết)',
    yeuCauCanDat: [
      'Nhận biết được Mĩ thuật có ở xung quanh và được tạo bởi những đối tượng khác nhau:',
      'Nhận biết được một số đồ dùng, công cụ, vật liệu để hình thành, sáng tạo trong môn học (HS khuyết tật không cần đạt yêu cầu này)',
      'Biết cách bảo quản, sử dụng một số đồ dung học tập.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS nhận biết được mĩ thuật có ở xung quanh và được tạo bởi những đối tượng khác nhau.',
      'HS nhận biết được một số đồ dùng, công cụ, vật liệu để thực hành, sáng tạo trong môn học.',
      'HS nhận biết được sự biểu hiện phong phú của mĩ thuật trong cuộc sống.',
      'HS biết cách bảo quản, sử dụng một số đồ dùng học tập.',
      'HS có ý thức về việc giữ gìn cảnh quan, đồ dùng, sự vật, đồ vật có tính mĩ thuật trong gia đình và trong cuộc sống.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '1.1.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giáo dục cho HS về tình yêu quê hương, yêu hòa bình.',
          'Nhận biết vẻ đẹp của ngôi trường và tình cảm bạn bè, thầy cô để bồi đắp tình yêu quê hương từ những điều gần gũi.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '1.A1.1',
        title: 'Tích hợp AI:',
        content: [
          'Nhận biết con người có cảm xúc, AI thì không.',
          'Giúp HS nhận thức rằng dù AI có thể tạo ra hình ảnh, nhưng chỉ có tác phẩm do con người vẽ mới chứa đựng tình cảm và cảm xúc thật.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số hình ảnh, clip liên quan đến chủ đề trình chiếu trên Powerpoint để HS quan sát.',
        'Một số SPMT, đồ dùng học tập, hình ảnh liên quan đến hoạt động học tập môn mĩ thuật giúp HS quan sát trực tiếp.'
      ],
      hocSinh: [
        'Sách học MT lớp 1.',
        'Vở bài tập MT 1.',
        'Bút chì, tẩy, màu vẽ, giấy vẽ, giấy màu, kéo, keo dán...'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV cho HS hát bài: “Hộp bút chì màu”.\n- GV hỏi HS: Bài hát nói đến đồ dùng học tập nào?\n- Khen ngợi HS.\n- GV giới thiệu chủ đề bài học.',
            student: '- HS hát đồng thanh.\n- HS trả lời.\n- Phát huy.\n- Mở bài học trong SGK mĩ thuật 1.'
          }
        ]
      },
      {
        name: '2. Hoạt động: hình thành kiến thức mới.',
        subSections: [
          {
            title: '2.1. Sản phẩm mĩ thuật.',
            items: [
              {
                teacher: '+ Chuẩn bị của GV:\n- Một số SPMT tạo hình (tranh vẽ, tranh đắp nổi, hình đất nặn,...) và một số SPMT ứng dụng (lọ hoa, ống đựng bút, con rối, đồ chơi,...) để minh họa trực quan cho HS.\n+ GV tổ chức các hoạt động:\n- GV yêu cầu HS mở SGK mĩ thuật 1, trang 6, 7 và quan sát hình minh họa, cho biết đó là những sản phẩm gì?\n- GV tóm tắt một vài ý kiến lên bảng (không đánh giá).\n- GV giải thích cho HS hiểu rõ thêm thế nào là SPMT tạo hình.\n- GV giải thích cho HS hiểu rõ thêm thế nào là SPMT ứng dụng.\n- GV cần giải thích ngay trên “vật thật”, nói ngắn gọn để HS dễ hình dung.\n- Sau khi giải thích, GV yêu cầu HS kể tên một số SPMT trong nhà trường.\nChú ý: Các SPMT giới thiệu phần này sẽ là cơ sở giúp HS chiếm lĩnh kiến thức trong các bài tiếp theo, nên chỉ giới thiệu mà không đi sâu về chất liệu, cách làm.',
                student: '- HS trình bày hiểu biết của mình về những SPMT có trong sách.\n- Quan sát, tiếp thu.\n- Sản phẩm được tạo nên từ những yếu tố, nguyên lí nghệ thuật.\n- Vận dụng những yếu tố tạo hình để trang trí một sản phẩm.\n- Lắng nghe, tiếp thu.\n- HS kể tên một số SPMT trong nhà trường.'
              }
            ]
          },
          {
            title: '2.2. Mĩ thuật do ai tạo nên.',
            items: [
              {
                teacher: '+ Chuẩn bị của GV:\n- Một số ảnh chụp để minh họa cho các nhân vật xuất hiện trong bài, mở rộng thêm các nhân vật ngoài SGK.\n+ GV tổ chức các hoạt động:\n- GV chỉ vào hình minh họa trong SGK mĩ thuật 1, trang 8, 9 và đặt câu hỏi:\n+ Những ai có thể sáng tạo ra các SPMT?\n+ Những lứa tuổi nào có thể thực hiện được các SPMT?\n- GV ghi lại một vài ý kiến của HS lên bảng (không đánh giá).\n- GV tóm tắt lại các ý kiến mà HS đã nêu ở trên và giải thích cho HS hiểu rõ thêm về những ai và những lứa tuổi nào có thể tham gia thực hiện được một SPMT.\n- Căn cứ những ý kiến tóm tắt trên bảng, GV và HS cùng đi đến nhận xét về những ai và lứa tuổi nào có thể tham gia thực hiện SPMT.',
                student: '- HS quan sát, thảo luận.\n- Họa sĩ, nhà điêu khắc, nhà nhiếp ảnh,...\n- Các em học sinh, các cụ già,...\n- Ghi nhớ.\n- Đó là những người hoạt động nghệ thuật chuyên nghiệp: họa sĩ, nhà điêu khắc, nhiếp ảnh gia, nhà thiết kế,...Lứa tuổi: người lớn tuổi, các em nhỏ,...\n- Lắng nghe, tiếp thu.'
              }
            ]
          },
          {
            title: '2.3. Đồ dùng trong môn học.',
            items: [
              {
                teacher: '+ Chuẩn bị của GV:\n- Một số vật dụng, đồ dùng học tập sử dụng trong môn học mĩ thuật.\n+ GV tổ chức các hoạt động:\n- GV yêu cầu HS mở SGK mĩ thuật 1, trang 10, 11 và cho biết để học tập môn mĩ thuật, cần những đồ dùng gì và cách sử dụng ra sao.\n- GV tóm tắt một vài ý kiến của HS lên bảng (không đánh giá).\n- GV giải thích cho HS hiểu rõ thêm về cách sử dụng những dụng cụ đó bằng việc nêu các câu hỏi để cả lớp cùng trao đổi:\n+ Vẽ hình bằng dụng cụ nào?\n+ Khi vẽ chưa được, dùng cái gì để xóa?\n+ Vẽ trên cái gì?\n+ Tô màu bằng dụng cụ nào?\n+ Giấy màu dùng để làm gì?\n+ Keo dán, hồ dán dùng để làm gì?\n+ Có được vẽ và tô màu ra bàn, tường không? Vì sao?\n- GV khen ngợi HS.',
                student: '- HS trình bày những hiểu biết của mình về những dụng cụ học tập sử dụng trong môn học mĩ thuật.\n- Lắng nghe, ghi nhớ.\n- HS thảo luận, trả lời câu hỏi.\n- Bằng bút chì.\n- Dùng cục tẩy hoặc bút chì có tẩy để xóa\n- Vẽ trên tờ giấy hoặc vở tập vẽ.\n- Bằng bút chì màu, sáp màu, màu dạ,...\n- Dùng trong các bài xé dán, trang trí,...\n- Dùng để dán những miếng giấy màu.\n- Không được, vì tô màu ra bàn, tường,... sẽ làm xấu lớp học.\n- Phát huy.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: thực hành, luyện tập.',
        items: [
          {
            teacher: '- GV yêu cầu HS mở Vở bài tập mĩ thuật 1, trang 3, sử dụng những đồ dùng cần thiết và thực hành theo hướng dẫn.\n- Quan sát, giúp đỡ HS hoàn thành bài thực hành.\n- GV và HS nhận xét, đánh giá một số SPMT đã hoàn thành của HS.',
            student: '- HS mở Vở bài tập mĩ thuật 1, trang 3, sử dụng những đồ dùng cần thiết và thực hành.\n- HS hoàn thành bài tập.\n- Nhận xét, đánh giá SPMT của mình, của bạn.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS.\n- GV liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Về nhà xem trước chủ đề 2.\n- Chuẩn bị đồ dùng học tập: Bút chì, tẩy, giấy vẽ, màu vẽ, tranh ảnh liên quan đến bài học sau.',
            student: '- HS nêu.\n- Phát huy.\n- Lắng nghe, mở rộng kiến thức.\n- Trật tự.\n- Thực hiện ở nhà.\n- Chuẩn bị đầy đủ đồ dùng học tập cần thiết cho bài học sau.'
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
    grade: 1,
    week: 2,
    chuDeNumber: 2,
    chuDeName: 'Sáng tạo từ những chấm màu',
    tietText: '(Tiết 1)',
    yeuCauCanDat: [
      'Tạo được chấm bằng nhiều cách khác nhau',
      'Biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'Thực hiện được các bước để làm sản phẩm.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS nhận biết được chấm màu có trong tự nhiên và trong mĩ thuật.',
      'HS tạo được chấm bằng nhiều cách khác nhau.',
      'Chủ đề góp phần bồi dưỡng đức tính chăm chỉ, ý thức trách nhiệm đối với các sản phẩm mĩ thuật ở học sinh, cụ thể một số biểu hiện:',
      'Có ý thức chăm chỉ tạo sản phẩm từ chấm màu.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '1.1.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giáo dục tình yêu quê hương, đất nước qua vẻ đẹp thiên nhiên.',
          'Sử dụng chấm màu để thể hiện vẻ đẹp của cảnh sắc quê hương Việt Nam, khơi gợi niềm tự hào về đất nước.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '1.C1.3',
        title: 'Tích hợp AI:',
        content: [
          'Hiểu được AI có khả năng xử lý hình ảnh để nhận diện đồ vật.',
          'Nhận diện được cách máy tính (AI) "nhìn" hình ảnh thông qua các điểm ảnh (dots/pixels) để nhận diện màu sắc.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số SPMT có sử dụng hình thức chấm màu như tranh vẽ, sản phẩm được trang trí từ những chấm màu.',
        'Một số dụng cụ học tập trong môn học như sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...',
        'Một số loại hạt phổ biến, thông dụng, một số tờ bìa cứng khổ 15x10 cm, keo sữa cho phần thực hành gắn hạt tạo hình SPMT.'
      ],
      hocSinh: [
        'Sách học MT lớp 1.',
        'Vở bài tập MT 1.',
        'Bút chì, tẩy, màu vẽ, giấy vẽ, giấy màu, kéo, keo dán, sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV cho HS chơi TC “Thi viết tên màu sắc”.\n- GV nêu luật chơi, cách chơi.\n- Nhận xét, tuyên dương đội chơi chiến thắng.\n- GV giới thiệu chủ đề bài học.',
            student: '- HS chọn đội chơi, bạn chơi.\n- Hai đội chơi thi viết tên các màu sắc lên bảng. Đội nào viết được nhiều tên màu trong thời gian chơi hơn là đội chiến thắng.\n- Mở bài học trong SGK mĩ thuật 1.'
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
                teacher: '- GV yêu cầu HS mở SGK mĩ thuật 1, trang 12, 13, quan sát hình minh họa và trả lời câu hỏi:\n+ Những chấm màu xuất hiện ở đâu?\n+ Những hình ảnh trong sách được tạo nên bằng những chấm màu, nhiều chấm màu đặt cạnh nhau có tạo nên mảng màu không?\n- Khi hỏi, GV chỉ vào bức tranh: “Bãi biển ở Hây” để giải thích rõ hơn về nội dung này.\n+ Ngoài những hình minh họa trong sách, em hãy cho biết chấm màu còn xuất hiện ở đâu?\n- GV ghi ý kiến của HS lên bảng (không đánh giá).\n- Căn cứ những ý kiến phát biểu của HS, GV chốt ý:\n+ Chấm màu xuất hiện nhiều trong tự nhiên, có nhiều hình dáng, màu sắc khác nhau.\n+ Trong mĩ thuật, chấm được sử dụng để tạo nên sự sinh động.\n- GV khen ngợi, động viên HS.',
                student: '- HS mở SGK mĩ thuật 1, trang 12, 13, quan sát hình minh họa và trả lời câu hỏi.\n- Trong các SPMT, trong tự nhiên,...\n- Có, nhiều chấm màu đặt cạnh nhau có tạo nên mảng màu.\n- Quan sát, tiếp thu.\n- 1, 2 HS trả lời.\n- Quan sát, ghi nhớ.\n- Lắng nghe, ghi nhớ.\n- Tiếp thu.\n- Ghi nhớ.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: thực hành, luyện tập.',
        items: [
          {
            teacher: '- GV cho HS quan sát thêm một số tranh đã chuẩn bị, có những chấm màu tạo nên các mảng màu sắc, không gian của bức tranh.\n- Cho các nhóm thảo luận về vẻ đẹp của chấm màu trong tranh: Tạo mảng màu, tạo không gian,...\n- Các nhóm chia sẻ, nêu được về vẻ đẹp của bức tranh từ những chấm màu.\n+ Bạn thấy bức tranh có những chấm màu gì?\n+ Cảm nhận của bạn về vẻ đẹp của chấm màu trong tranh?\n- HS, GV nhận xét, khen ngợi.',
            student: '- HS quan sát một số tranh của GV, thấy được những chấm màu tạo nên các mảng màu sắc, không gian của bức tranh.\n- Các nhóm thảo luận về vẻ đẹp của chấm màu trong tranh: Tạo mảng màu, tạo không gian,...\n- Các nhóm chia sẻ, nêu được về vẻ đẹp của bức tranh từ những chấm màu.\n- HS trả lời.\n- HS nêu cảm nhận.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS.\n- GV liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Lưu giữ sản phẩm của Tiết 1 (nếu có).\n- Chuẩn bị đồ dùng học tập: Bút chì, tẩy, giấy vẽ, màu vẽ, tranh ảnh...liên quan đến bài học sau.',
            student: '- Phát huy.\n- HS nêu lại KT bài học.\n- Phát huy.\n- Mở rộng kiến thức bài học vào thực tế.\n- Trật tự.\n- Thực hiện ở nhà.\n- Chuẩn bị đồ dùng học tập cho tiết sau.'
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

  3: {
    grade: 1,
    week: 3,
    chuDeNumber: 2,
    chuDeName: 'Sáng tạo từ những chấm màu',
    tietText: '(Tiết 2)',
    yeuCauCanDat: [
      'Tạo được chấm bằng nhiều cách khác nhau (không bắt buộc với HSKT)',
      'Biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'Thực hiện được các bước để làm sản phẩm.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS nhận biết được chấm màu có trong tự nhiên và trong mĩ thuật.',
      'HS thấy được vẻ đẹp của chấm màu.',
      'HS tạo được chấm bằng nhiều cách khác nhau.',
      'HS biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'Chủ đề góp phần bồi dưỡng đức tính chăm chỉ, ý thức trách nhiệm đối với các sản phẩm mĩ thuật ở học sinh, cụ thể một số biểu hiện:',
      'Có ý thức chăm chỉ tạo sản phẩm từ chấm màu.',
      'Có ý thức sưu tầm và biết cách sử dụng đồ vật phế thải sạch để tạo sản phẩm góp phần làm sạch môi trường.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '1.1.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giáo dục tình yêu quê hương, đất nước qua vẻ đẹp thiên nhiên.',
          'Sử dụng chấm màu để thể hiện vẻ đẹp của cảnh sắc quê hương Việt Nam, khơi gợi niềm tự hào về đất nước.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '1.C1.3',
        title: 'Tích hợp AI:',
        content: [
          'Hiểu được AI có khả năng xử lý hình ảnh để nhận diện đồ vật.',
          'Nhận diện được cách máy tính (AI) "nhìn" hình ảnh thông qua các điểm ảnh (dots/pixels) để nhận diện màu sắc.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số SPMT có sử dụng hình thức chấm màu như tranh vẽ, sản phẩm được trang trí từ những chấm màu.',
        'Một số dụng cụ học tập trong môn học như sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...',
        'Một số loại hạt phổ biến, thông dụng, một số tờ bìa cứng khổ 15x10 cm, keo sữa cho phần thực hành gắn hạt tạo hình SPMT.'
      ],
      hocSinh: [
        'Sách học MT lớp 1.',
        'Vở bài tập MT 1.',
        'Sản phẩm của Tiết 1 (nếu có).',
        'Bút chì, tẩy, màu vẽ, giấy vẽ, giấy màu, kéo, keo dán, sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV kiểm tra đồ dùng học tập của HS.\n- Kiểm tra sản phẩm của HS trong tiết 1 (nếu có).\n- Khen ngợi, động viên HS.\n- GV giới thiệu chủ đề bài học.',
            student: '- Trình bày đồ dùng HT.\n- Trình bày sản phẩm tiết 1 (nếu có).\n- Phát huy.\n- Mở bài học trong SGK mĩ thuật 1.'
          }
        ]
      },
      {
        name: '2. Hoạt động: hình thành kiến thức mới.',
        subSections: [
          {
            title: '2.2. Thể hiện',
            items: [
              {
                teacher: '- GV hướng dẫn HS quan sát cách tạo chấm màu trong SGK mĩ thuật 1, trang 14.\n- GV thị phạm một số cách tạo chấm màu cho HS quan sát như dùng que gỗ tròn nhỏ chấm 1 màu lên giấy hoặc dùng ngón tay nhúng vào màu để tạo chấm màu,…\n- Thị phạm lần 1: GV chấm 3 chấm liên tục giống nhau và mời HS trả lời câu hỏi: Các chấm này có giống nhau và được nhắc lại không?\n- Thị phạm lần 2: GV chấm màu theo hình thức xen kẽ, 1 chấm đỏ - 1 chấm vàng – 1 chấm đỏ và đặt câu hỏi: Hình thức chấm này có khác với hình thức chấm ở trên không? Khác như thế nào?\n- GV ghi tóm tắt một vài ý kiến trả lời của HS lên trên bảng (không đánh giá).\n- Căn cứ ý kiến của HS, GV giải thích: Hình thức sắp xếp những chấm màu theo cách thứ nhất gọi là nhắc lại; cách thứ hai gọi là xen kẽ.\n- Khen ngợi, động viên HS.',
                student: '- HS quan sát cách tạo chấm màu trong SGK mĩ thuật 1, trang 14.\n- HS quan sát GV thị phạm một số cách tạo chấm màu như dùng que gỗ tròn nhỏ chấm 1 màu lên giấy hoặc dùng ngón tay nhúng vào màu để tạo chấm màu,…\n- Quan sát, trả lời.\n- HS nêu theo ý hiểu.\n- Lắng nghe, tiếp thu.\n- Tiếp thu, ghi nhớ.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: luyện tập, thực hành.',
        items: [
          {
            teacher: '- GV cho HS thực hành tạo chấm màu vào Vở bài tập mĩ thuật 1, trang 5 theo các cách đã giới thiệu ở trên.\n- Quan sát, giúp đỡ HS hoàn thành bài thực hành.\n*Giới thiệu, nhận xét, chia sẻ sản phẩm:\n- GV cho HS trưng bày sản phẩm, chia sẻ theo gợi ý: Em tạo SP theo hình thức nào? Em dùng màu gì để tạo chấm màu? Em đã làm như thế nào?\n- GV hướng dẫn nhận xét về cách làm, về màu sắc SP của bạn.\n- GV khen ngợi, động viên HS.',
            student: '- HS thực hành tạo chấm màu vào Vở bài tập mĩ thuật 1, trang 5.\n- Hoàn thành bài tập.\n- HS trưng bày sản phẩm, chia sẻ theo gợi ý.\n- HS nêu các màu dùng để tạo chấm màu, nêu cách làm.\n- HS nhận xét về cách làm, về màu sắc SP của bạn.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS.\n- GV liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Lưu giữ sản phẩm của Tiết 2 (nếu có).\n- Nhắc HS chuẩn bị đồ dùng học tập: Bút chì, tẩy, giấy vẽ, màu vẽ, tranh ảnh...liên quan đến bài học sau.',
            student: '- Phát huy.\n- HS nêu lại KT bài học.\n- Phát huy.\n- Mở rộng kiến thức bài học vào thực tế.\n- Trật tự.\n- Thực hiện ở nhà.\n- Chuẩn bị đồ dùng học tập cho tiết sau.'
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

  4: {
    grade: 1,
    week: 4,
    chuDeNumber: 2,
    chuDeName: 'Sáng tạo từ những chấm màu',
    tietText: '(Tiết 3)',
    yeuCauCanDat: [
      'Tạo được chấm bằng nhiều cách khác nhau',
      'Biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'Thực hiện được các bước để làm sản phẩm.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS nhận biết được chấm màu có trong tự nhiên và trong mĩ thuật.',
      'HS thấy được vẻ đẹp của chấm màu.',
      'HS biết cách thể hiện và vận dụng tạo được SPMT từ những chấm màu.',
      'HS tạo được chấm bằng nhiều cách khác nhau.',
      'HS biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'HS thực hiện được các bước để làm sản phẩm.',
      'Chủ đề góp phần bồi dưỡng đức tính chăm chỉ, ý thức trách nhiệm đối với các sản phẩm mĩ thuật ở học sinh, cụ thể một số biểu hiện:',
      'Có ý thức chăm chỉ tạo sản phẩm từ chấm màu.',
      'Có ý thức sưu tầm và biết cách sử dụng đồ vật phế thải sạch để tạo sản phẩm góp phần làm sạch môi trường.',
      'Biết chia sẻ, cảm nhận về sản phẩm của mình, của bạn.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '1.1.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giáo dục tình yêu quê hương, đất nước qua vẻ đẹp thiên nhiên.',
          'Sử dụng chấm màu để thể hiện vẻ đẹp của cảnh sắc quê hương Việt Nam, khơi gợi niềm tự hào về đất nước.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '1.C1.3',
        title: 'Tích hợp AI:',
        content: [
          'Hiểu được AI có khả năng xử lý hình ảnh để nhận diện đồ vật.',
          'Nhận diện được cách máy tính (AI) "nhìn" hình ảnh thông qua các điểm ảnh (dots/pixels) để nhận diện màu sắc.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số SPMT có sử dụng hình thức chấm màu như tranh vẽ, sản phẩm được trang trí từ những chấm màu.',
        'Một số dụng cụ học tập trong môn học như sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...',
        'Một số loại hạt phổ biến, thông dụng, một số tờ bìa cứng khổ 15x10 cm, keo sữa cho phần thực hành gắn hạt tạo hình SPMT.'
      ],
      hocSinh: [
        'Sách học MT lớp 1.',
        'Vở bài tập MT 1.',
        'Sản phẩm của Tiết 2.',
        'Bút chì, tẩy, màu vẽ, giấy vẽ, giấy màu, kéo, keo dán, sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV kiểm tra đồ dùng học tập của HS.\n- Kiểm tra sản phẩm của HS trong tiết 2.\n- Khen ngợi, động viên HS.\n- GV giới thiệu chủ đề bài học.',
            student: '- Trình bày đồ dùng HT.\n- Trình bày sản phẩm tiết 2.\n- Phát huy.\n- Mở bài học trong SGK mĩ thuật 1.'
          }
        ]
      },
      {
        name: '2. Hoạt động: hình thành kiến thức mới.',
        subSections: [
          {
            title: '2.3. Thảo luận',
            items: [
              {
                teacher: '- Căn cứ vào những chấm màu HS vừa thực hiện ở tiết 2, GV tổ chức cho HS trả lời câu hỏi: Em đã dùng những hình thức nào để sắp xếp chấm màu?\n- GV yêu cầu HS mở SGK mĩ thuật 1, trang 15, quan sát hình minh họa và thảo luận về các hình thức sắp xếp chấm màu theo các câu hỏi sau:\n+ Các chấm màu đỏ có hình thức sắp xếp như thế nào?\n+ Các chấm màu vàng ở bông hoa có hình thức sắp xếp như thế nào?\n- Tùy vào sĩ số HS thực tế của lớp học, GV tổ chức hoạt động theo các cách: Từng HS phát biểu, HS phát biểu theo nhóm, HS phát biểu theo dãy.',
                student: '- HS thảo luận, trả lời câu hỏi.\n- HS nêu.\n- HS mở SGK mĩ thuật 1, trang 15, quan sát hình minh họa và thảo luận về các hình thức sắp xếp chấm màu theo các câu hỏi.\n- Quan sát, thực hiện (cá nhân hoặc nhóm).'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: luyện tập, thực hành.',
        items: [
          {
            teacher: '- GV yêu cầu HS vận dụng thực hành: Dùng chấm màu để trang trí một đồ vật mà em thích (hoặc vẽ hình và dùng chấm màu để trang trí theo ý thích).\n- GV gợi ý HS nêu đồ vật định trang trí.\n- GV quan sát, giúp đỡ HS thực hành.\n*Giới thiệu, nhận xét, chia sẻ sản phẩm:\n- GV cho HS trưng bày, chia sẻ về SP: Em đã vẽ như thế nào để tạo SP? Em dùng chấm màu hình gì và màu nào để trang trí? Em tạo chấm màu theo cách nào? Xen kẽ hay nhắc lại?\n- GV tuyên dương, động viên HS có bài đẹp.',
            student: '- HS vận dụng thực hành: Dùng chấm màu để trang trí một đồ vật mà em thích.\n- HS nêu đồ vật định trang trí.\n- Hoàn thành bài tập.\n- HS trưng bày, chia sẻ về SP.\n- HS nêu cảm nhận và trả lời câu hỏi.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS.\n- GV liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Lưu giữ sản phẩm của Tiết 3.\n- Nhắc HS chuẩn bị đồ dùng học tập: Bút chì, tẩy, giấy vẽ, màu vẽ, tranh ảnh...liên quan đến bài học sau.',
            student: '- Phát huy.\n- HS nêu lại KT bài học.\n- Phát huy.\n- Mở rộng kiến thức bài học vào thực tế.\n- Trật tự.\n- Thực hiện ở nhà.\n- Chuẩn bị đồ dùng học tập cho tiết sau.'
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

  5: {
    grade: 1,
    week: 5,
    chuDeNumber: 2,
    chuDeName: 'Sáng tạo từ những chấm màu',
    tietText: '(Tiết 4)',
    yeuCauCanDat: [
      'Tạo được chấm bằng nhiều cách khác nhau',
      'Biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'Thực hiện được các bước để làm sản phẩm.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS nhận biết được chấm màu có trong tự nhiên và trong mĩ thuật.',
      'HS thấy được vẻ đẹp của chấm màu.',
      'HS biết cách thể hiện và vận dụng tạo được SPMT từ những chấm màu.',
      'HS tạo được chấm bằng nhiều cách khác nhau.',
      'HS biết sử dụng chấm để tạo nét, tạo hình và trang trí sản phẩm.',
      'HS thực hiện được các bước để làm sản phẩm.',
      'Chủ đề góp phần bồi dưỡng đức tính chăm chỉ, ý thức trách nhiệm đối với các sản phẩm mĩ thuật ở học sinh, cụ thể một số biểu hiện:',
      'Có ý thức chăm chỉ tạo sản phẩm từ chấm màu.',
      'Có ý thức sưu tầm và biết cách sử dụng đồ vật phế thải sạch để tạo sản phẩm góp phần làm sạch môi trường.',
      'Biết chia sẻ, cảm nhận về sản phẩm của mình, của bạn.',
      'Biết tôn trọng, giữ gìn sản phẩm do bạn bè, họa sĩ, …tạo ra.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '1.1.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giáo dục tình yêu quê hương, đất nước qua vẻ đẹp thiên nhiên.',
          'Sử dụng chấm màu để thể hiện vẻ đẹp của cảnh sắc quê hương Việt Nam, khơi gợi niềm tự hào về đất nước.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '1.C1.3',
        title: 'Tích hợp AI:',
        content: [
          'Hiểu được AI có khả năng xử lý hình ảnh để nhận diện đồ vật.',
          'Nhận diện được cách máy tính (AI) "nhìn" hình ảnh thông qua các điểm ảnh (dots/pixels) để nhận diện màu sắc.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số SPMT có sử dụng hình thức chấm màu như tranh vẽ, sản phẩm được trang trí từ những chấm màu.',
        'Một số dụng cụ học tập trong môn học như sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...',
        'Một số loại hạt phổ biến, thông dụng, một số tờ bìa cứng khổ 15x10 cm, keo sữa cho phần thực hành gắn hạt tạo hình SPMT.'
      ],
      hocSinh: [
        'Sách học MT lớp 1.',
        'Vở bài tập MT 1.',
        'Sản phẩm của Tiết 3.',
        'Bút chì, tẩy, màu vẽ, giấy vẽ, giấy màu, kéo, keo dán, sáp màu dầu, màu acylic (hoặc màu Oát, màu bột đã pha sẵn), giấy trắng, tăm bông, que gỗ tròn nhỏ,...'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV kiểm tra đồ dùng học tập của HS.\n- Kiểm tra sản phẩm của HS trong tiết 3.\n- Khen ngợi, động viên HS.\n- GV giới thiệu chủ đề bài học.',
            student: '- Trình bày đồ dùng HT.\n- Trình bày sản phẩm tiết 3.\n- Phát huy.\n- Mở bài học trong SGK mĩ thuật 1.'
          }
        ]
      },
      {
        name: '2. Hoạt động: hình thành kiến thức mới.',
        subSections: [
          {
            title: '2.4. Vận dụng',
            items: [
              {
                teacher: '- GV cho HS mở SGK mĩ thuật 1, trang 15, phần tham khảo: Trang trí chiếc lọ thủy tinh bằng hình thức chấm màu.\n- GV cho HS quan sát hình minh họa một số đồ dùng, sản phẩm mĩ thuật được trang trí bằng hình thức chấm màu trong vở thực hành mĩ thuật 1, trang 6.\n- GV đặt câu hỏi, hướng HS trả lời về những đồ vật khác trong cuộc sống cũng được trang trí bằng hình thức chấm màu. HS phát biểu về đồ vật nào thì vẽ đồ vật đó ra vở bài tập mĩ thuật 1, trang 7 và sử dụng chấm màu để trang trí.\n- Khen ngợi, động viên HS.',
                student: '- HS mở SGK mĩ thuật 1, trang 15, phần tham khảo: Trang trí chiếc lọ thủy tinh bằng hình thức chấm màu.\n- HS quan sát hình minh họa một số đồ dùng, sản phẩm mĩ thuật được trang trí bằng hình thức chấm màu trong vở thực hành mĩ thuật 1, trang 6.\n- HS trả lời về những đồ vật khác trong cuộc sống cũng được trang trí bằng hình thức chấm màu. HS phát biểu về đồ vật nào thì vẽ đồ vật đó ra vở bài tập mĩ thuật 1, trang 7 và sử dụng chấm màu để trang trí.\n- Phát huy.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: luyện tập, thực hành.',
        items: [
          {
            teacher: '- GV nêu yêu cầu bài thực hành: Trang trí chiếc cốc giấy, đĩa giấy, hoặc gắn hạt tạo hình SPMT đơn giản.\n- Quan sát, động viên, giúp HS hoàn thành bài tập.\n*Trưng bày, nhận xét cuối chủ đề:\n- GV mời HS giới thiệu, chia sẻ về bài thực hành của mình, của bạn.\n- GV cùng HS nhận xét, đánh giá sản phẩm chủ yếu trên tinh thần động viên, khích lệ HS.',
            student: '- Nắm được yêu cầu bài thực hành.\n- Hoàn thành bài thực hành.\n- HS giới thiệu, chia sẻ về bài thực hành của mình, của bạn.\n- HS nhận xét, đánh giá sản phẩm của mình, của bạn.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS.\n- GV liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Về nhà xem trước chủ đề 3.\n- Chuẩn bị đồ dùng học tập: Bút chì, tẩy, giấy vẽ, màu vẽ, tranh ảnh liên quan đến bài học sau.',
            student: '- HS nêu.\n- Phát huy.\n- Lắng nghe, mở rộng kiến thức.\n- Trật tự.\n- Thực hiện ở nhà.\n- Chuẩn bị đầy đủ đồ dùng học tập cần thiết cho bài học sau.'
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

  6: {
    grade: 1,
    week: 6,
    chuDeNumber: 3,
    chuDeName: 'Nét vẽ của em',
    tietText: '(Tiết 1)',
    yeuCauCanDat: [
      'Bước đầu nhận biết yếu tố nét trong cuộc sống và trong sản phẩm mĩ thuật.',
      'Mô phỏng, thể hiện được yếu tố nét có kích thước khác nhau.',
      'Sử dụng nét để vẽ và dùng nét trong trang trí ,vận dụng được nét để tạo nên sản phẩm mĩ thuật.',
      'Bài học góp phần hình thành, phát triển ở HS các năng lực sau:',
      'HS bước đầu nhận biết yếu tố nét trong một số đồ vật và sản phẩm mĩ thuật.',
      'HS thấy được vẻ đẹp của nét trong sản phẩm mĩ thuật và trong cuộc sống.',
      'HS mô phỏng, thể hiện được yếu tố nét có kích thước khác nhau.',
      'HS sử dụng nét để vẽ và dùng nét trong trang trang trí, vận dụng được nét để tạo nên SPMT.',
      'HS có ý thức chăm chỉ tạo được sản phẩm từ các nét.',
      'HS thấy được vẻ đẹp, tầm quan trọng của SPMT được tạo ra từ nét trong cuộc sống.'
    ],
    tichHop: [
      {
        type: 'ANQP',
        code: '1.2.1',
        title: 'Tích hợp ANQP:',
        content: [
          'Giới thiệu một số hình ảnh về Quân đội Nhân dân và Công an Nhân dân.',
          'Sử dụng các loại nét (thẳng, cong, xiên) để vẽ và trang trí hình ảnh biểu tượng liên quan đến các chú bộ đội, công an.'
        ],
        color: '#ED7D31'
      },
      {
        type: 'AI',
        code: '1.D1.1',
        title: 'Tích hợp AI:',
        content: [
          'Nêu được ví dụ AI "học" từ hình ảnh hoặc thông tin con người cung cấp.',
          'Hiểu đơn giản rằng để máy tính đoán đúng hình vẽ, con người cần "dạy" máy bằng cách cung cấp rất nhiều nét vẽ mẫu.'
        ],
        color: '#00B0F0'
      }
    ],
    doDungDayHoc: {
      giaoVien: [
        'Một số hình ảnh, clip liên quan đến chủ đề trình chiếu trên Powerpoint để HS quan sát.',
        'Một số hình minh họa về nét và đồ vật có sử dụng nét để trang trí.',
        'Sách học mĩ thuật lớp 1.'
      ],
      hocSinh: [
        'Sách học MT lớp 1.',
        'Vở bài tập MT 1.',
        'Bút chì, tẩy, màu vẽ các loại, tranh ảnh liên quan đến bài học...'
      ]
    },
    hoatDongDayHoc: [
      {
        name: '1. Hoạt động: khởi động',
        items: [
          {
            teacher: '- GV cho HS hát và vận động theo bài hát: “Cháu vẽ ông mặt trời”.\n- Khen ngợi, động viên HS.\n- GV giới thiệu chủ đề bài học.',
            student: '- HS hát và vận động theo bài hát.\n- Phát huy.\n- Mở bài học trong SGK mĩ thuật 1.'
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
                teacher: '- GV giới thiệu về một số loại nét và những đặc điểm nhận dạng chúng (thông qua hình ảnh minh họa đã chuẩn bị): Nét đứt, nét thẳng liền, nét cong, nét lượn sóng, nét gấp khúc.\n- GV yêu cầu HS mở SGK mĩ thuật 1, trang 16 và yêu cầu HS nói tên một số loại nét.\n- GV yêu cầu HS quan sát hình ảnh minh họa về nét trong cuộc sống ở SGK mĩ thuật 1, trang 16, 17 và phát biểu về sự xuất hiện của nét trên những đồ vật, con vật, cảnh vật có trong sách.\n- Khen ngợi, động viên HS.',
                student: '- Quan sát, nhận ra một số loại nét và những đặc điểm nhận dạng chúng.\n- HS mở SGK mĩ thuật 1, trang 16 và nói tên một số loại nét.\n- HS quan sát hình ảnh minh họa về nét trong cuộc sống ở SGK mĩ thuật 1, trang 16, 17 và phát biểu.'
              }
            ]
          },
          {
            title: '2.2. Thể hiện',
            items: [
              {
                teacher: '- GV hướng dẫn HS mở SGK mĩ thuật 1, trang 18, quan sát hình minh họa những kiểu nét khác nhau và các cách thể hiện chúng.\n- GV yêu cầu HS mở vở bài tập mĩ thuật 1, trang 8, dùng bút sáp màu (hoặc bút chì màu) và thể hiện từng loại nét vào phần khung tương ứng.\n- Chú ý: Khi HS bắt đầu vẽ các nét thẳng, cần động viên, hướng dẫn các em vẽ nhẹ nhàng, thả lỏng tay cầm bút, không dùng thước kẻ.\n- Khen ngợi động viên HS.',
                student: '- HS mở SGK mĩ thuật 1, trang 18, quan sát hình minh họa.\n- HS mở vở bài tập mĩ thuật 1, trang 8, dùng bút sáp màu thể hiện từng loại nét vào khung tương ứng.\n- HS bắt đầu vẽ các nét thẳng nhẹ nhàng, không dùng thước kẻ.\n- Phát huy.'
              }
            ]
          }
        ]
      },
      {
        name: '3. Hoạt động: thực hành, luyện tập.',
        items: [
          {
            teacher: '- GV cho HS quan sát thêm một số tranh đã chuẩn bị, dùng nét để tạo nên các mảng màu sắc, không gian của bức tranh.\n- Cho các nhóm thảo luận về vẻ đẹp của nét trong tranh: Tạo mảng màu, tạo không gian,...\n- Cho các nhóm chia sẻ, nêu được về vẻ đẹp của bức tranh từ nét.\n- HS, GV nhận xét, khen ngợi.',
            student: '- HS quan sát một số tranh của GV, dùng nét để tạo nên các mảng màu sắc, không gian của bức tranh.\n- Các nhóm thảo luận về vẻ đẹp của nét trong tranh.\n- Các nhóm chia sẻ, nêu cảm nhận.'
          }
        ]
      },
      {
        name: '4. Vận dụng:',
        items: [
          {
            teacher: '- Yêu cầu HS nêu lại kiến thức bài học.\n- Khen ngợi HS.\n- GV liên hệ bài học vào thực tế cuộc sống.\n- Đánh giá chung tiết học.\n- Lưu giữ sản phẩm của Tiết 1 (nếu có).\n- Chuẩn bị đồ dùng học tập cho bài sau.',
            student: '- HS nêu lại KT bài học.\n- Phát huy.\n- Mở rộng kiến thức bài học vào thực tế.\n- Thực hiện ở nhà.'
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

  // Weeks 7 to 35 generator template helper
  ...generateRemainingGrade1()
};

function generateRemainingGrade1(): Record<number, LessonContent> {
  const list: Record<number, LessonContent> = {};

  const titles: Record<number, { c: number | string; name: string; tiet: string }> = {
    7: { c: 3, name: 'Nét vẽ của em', tiet: '(Tiết 2)' },
    8: { c: 3, name: 'Nét vẽ của em', tiet: '(Tiết 3)' },
    9: { c: 4, name: 'Sáng tạo từ những hình cơ bản', tiet: '(Tiết 1)' },
    10: { c: 4, name: 'Sáng tạo từ những hình cơ bản', tiet: '(Tiết 2)' },
    11: { c: 4, name: 'Sáng tạo từ những hình cơ bản', tiet: '(Tiết 3)' },
    12: { c: 4, name: 'Sáng tạo từ những hình cơ bản', tiet: '(Tiết 4)' },
    13: { c: 5, name: 'Màu cơ bản trong mĩ thuật', tiet: '(Tiết 1)' },
    14: { c: 5, name: 'Màu cơ bản trong mĩ thuật', tiet: '(Tiết 2)' },
    15: { c: 5, name: 'Màu cơ bản trong mĩ thuật', tiet: '(Tiết 3)' },
    16: { c: 5, name: 'Màu cơ bản trong mĩ thuật', tiet: '(Tiết 4)' },
    17: { c: 'KT', name: 'KIỂM TRA ĐÁNH GIÁ HỌC KÌ I', tiet: '(1 Tiết)' },
    18: { c: 6, name: 'Sáng tạo từ những khối cơ bản', tiet: '(Tiết 1)' },
    19: { c: 6, name: 'Sáng tạo từ những khối cơ bản', tiet: '(Tiết 2)' },
    20: { c: 6, name: 'Sáng tạo từ những khối cơ bản', tiet: '(Tiết 3)' },
    21: { c: 6, name: 'Sáng tạo từ những khối cơ bản', tiet: '(Tiết 4)' },
    22: { c: 7, name: 'Hoa, quả', tiet: '(Tiết 1)' },
    23: { c: 7, name: 'Hoa, quả', tiet: '(Tiết 2)' },
    24: { c: 7, name: 'Hoa, quả', tiet: '(Tiết 3)' },
    25: { c: 7, name: 'Hoa, quả', tiet: '(Tiết 4)' },
    26: { c: 8, name: 'Người thân của em', tiet: '(Tiết 1)' },
    27: { c: 8, name: 'Người thân của em', tiet: '(Tiết 2)' },
    28: { c: 8, name: 'Người thân của em', tiet: '(Tiết 3)' },
    29: { c: 8, name: 'Người thân của em', tiet: '(Tiết 4)' },
    30: { c: 9, name: 'Em là học sinh lớp một', tiet: '(Tiết 1)' },
    31: { c: 9, name: 'Em là học sinh lớp một', tiet: '(Tiết 2)' },
    32: { c: 9, name: 'Em là học sinh lớp một', tiet: '(Tiết 3)' },
    33: { c: 9, name: 'Em là học sinh lớp một', tiet: '(Tiết 4)' },
    34: { c: 'KT', name: 'KIỂM TRA ĐÁNH GIÁ CUỐI NĂM HỌC', tiet: '(1 Tiết)' },
    35: { c: 'TB', name: 'TRƯNG BÀY SẢN PHẨM CUỐI NĂM', tiet: '(1 Tiết)' }
  };

  for (let w = 7; w <= 35; w++) {
    const t = titles[w];
    list[w] = {
      grade: 1,
      week: w,
      chuDeNumber: t.c,
      chuDeName: t.name,
      tietText: t.tiet,
      yeuCauCanDat: [
        `HS nắm vững kiến thức và kĩ năng chủ đề ${t.name}.`,
        'Biết quan sát, liên tưởng và thể hiện sản phẩm mĩ thuật phù hợp năng lực.',
        'Sử dụng các yếu tố tạo hình (chấm, nét, hình, khối, màu sắc) sáng tạo sản phẩm.',
        'Có ý thức chăm chỉ, giữ gìn vệ sinh và trân trọng sản phẩm của mình, của bạn.'
      ],
      tichHop: [
        {
          type: 'ANQP',
          code: '1.1.1',
          title: 'Tích hợp ANQP:',
          content: [
            'Bồi dưỡng tình yêu quê hương, đất nước qua các bài học tạo hình.',
            'Thể hiện nét đẹp văn hóa dân tộc và ý thức kỷ luật.'
          ],
          color: '#ED7D31'
        },
        {
          type: 'AI',
          code: '1.C1.3',
          title: 'Tích hợp AI:',
          content: [
            'Nhận biết ứng dụng AI thông minh trong đời sống và học tập.',
            'Phân biệt tác phẩm nghệ thuật do con người sáng tạo có chứa cảm xúc.'
          ],
          color: '#00B0F0'
        }
      ],
      doDungDayHoc: {
        giaoVien: [
          'SGK Mĩ thuật 1, video clip và hình ảnh minh họa chủ đề.',
          'Một số SPMT mẫu, đồ dùng dạy học trực quan.'
        ],
        hocSinh: [
          'SGK Mĩ thuật 1, Vở bài tập Mĩ thuật 1.',
          'Bút chì, tẩy, màu vẽ, giấy vẽ, giấy màu, kéo, keo dán, đất nặn...'
        ]
      },
      hoatDongDayHoc: [
        {
          name: '1. Hoạt động: khởi động',
          items: [
            {
              teacher: `- GV tổ chức cho HS khởi động với bài hát/trò chơi theo chủ đề ${t.name}.\n- Khen ngợi, động viên HS.\n- GV giới thiệu bài học.`,
              student: '- HS tham gia hào hứng, tự tin.\n- Mở bài học trong SGK Mĩ thuật 1.'
            }
          ]
        },
        {
          name: '2. Hoạt động: hình thành kiến thức mới.',
          items: [
            {
              teacher: `- Hướng dẫn HS quan sát tranh, ảnh minh họa trong SGK về chủ đề ${t.name}.\n- Đặt câu hỏi gợi ý để HS khám phá nội dung, hình ảnh, màu sắc.\n- GV thị phạm các bước thực hiện chi tiết cho HS theo dõi.`,
              student: '- HS quan sát, thảo luận và trả lời câu hỏi.\n- Lắng nghe và tiếp thu các bước thực hành.'
            }
          ]
        },
        {
          name: '3. Hoạt động: luyện tập, thực hành.',
          items: [
            {
              teacher: `- Nêu yêu cầu thực hành cho HS thể hiện sản phẩm theo chủ đề ${t.name}.\n- Quan sát, giúp đỡ và động viên các em hoàn thành bài tập.\n- Tổ chức trưng bày, nhận xét và chia sẻ sản phẩm.`,
              student: '- HS thực hành làm bài tập theo hướng dẫn.\n- Trưng bày sản phẩm, giới thiệu và nhận xét bài của bạn.'
            }
          ]
        },
        {
          name: '4. Vận dụng:',
          items: [
            {
              teacher: '- Yêu cầu HS nhắc lại kiến thức trọng tâm bài học.\n- Liên hệ thực tế cuộc sống.\n- Dặn dò chuẩn bị đồ dùng cho tiết học sau.',
              student: '- HS nêu lại kiến thức bài học.\n- Lắng nghe, ghi nhớ và chuẩn bị đồ dùng học tập.'
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
