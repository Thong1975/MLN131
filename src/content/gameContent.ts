/**
 * Dữ liệu cho các trò chơi học tập
 * Includes: Quiz questions và Flashcards về Gia đình Việt Nam
 */

// ============================================
// QUIZ QUESTIONS
// ============================================
export const quizQuestions = [
  {
    id: 1,
    question: "Theo quan điểm chủ nghĩa Mác-Lênin, gia đình là gì?",
    options: [
      "A) Chỉ là một tập hợp tự nhiên của con người",
      "B) Một thiết chế xã hội có ý nghĩa quan trọng, phát triển theo giai đoạn lịch sử",
      "C) Chỉ là nơi sản xuất con cái",
      "D) Một tổ chức không có ý nghĩa trong xã hội chủ nghĩa"
    ],
    correctAnswer: 1,
    explanation: "Gia đình là một thiết chế xã hội có ý nghĩa quan trọng, phát triển và biến đổi theo từng giai đoạn lịch sử. Đây là quan điểm của Friedrich Engels trong tác phẩm 'Căn nguyên gia đình, sở hữu tư nhân và nhà nước'."
  },
  {
    id: 2,
    question: "Đặc trưng nào là KHÔNG phải của gia đình xã hội chủ nghĩa?",
    options: [
      "A) Hôn nhân tự nguyện, tiến bộ",
      "B) Bình đẳng giữa vợ và chồng",
      "C) Chế độ đa thê được khuyến khích",
      "D) Bảo vệ quyền lợi của phụ nữ và trẻ em"
    ],
    correctAnswer: 2,
    explanation: "Xã hội chủ nghĩa quy định nguyên tắc 'một vợ một chồng', cấm chế độ đa thê. Chế độ đa thê là đặc trưng của gia đình bóc lột trong chế độ phong kiến và tư bản."
  },
  {
    id: 3,
    question: "Luật Hôn nhân và Gia đình năm nào lần đầu tiên được ban hành ở Việt Nam?",
    options: [
      "A) 1945",
      "B) 1950",
      "C) 1959",
      "D) 1986"
    ],
    correctAnswer: 1,
    explanation: "Năm 1950, Luật Hôn nhân và Gia đình đầu tiên được ban hành, cấm hôn nhân cưỡng bức, chế độ đa thê, bảo vệ quyền lợi phụ nữ và trẻ em."
  },
  {
    id: 4,
    question: "Nguyên tắc nào là KHÔNG phải nguyên tắc xây dựng gia đình XHCN?",
    options: [
      "A) Hôn nhân tự nguyện, tiến bộ",
      "B) Bình đẳng giữa vợ và chồng",
      "C) Nam giới có quyền cao hơn nữ giới",
      "D) Tôn trọng, yêu thương"
    ],
    correctAnswer: 2,
    explanation: "Nguyên tắc xây dựng gia đình XHCN là bình đẳng giữa vợ và chồng, không phân biệt giới tính. Nam giới không có quyền cao hơn nữ giới trong gia đình XHCN."
  },
  {
    id: 5,
    question: "Xu hướng nào của gia đình Việt Nam do ảnh hưởng của công nghiệp hóa, đô thị hóa?",
    options: [
      "A) Gia đình đa thế hệ ngày càng tăng",
      "B) Quy mô gia đình ngày càng lớn",
      "C) Gia đình hạt nhân (3-4 người) ngày càng phổ biến",
      "D) Số thành viên gia đình tăng gấp đôi"
    ],
    correctAnswer: 2,
    explanation: "Do công nghiệp hóa, đô thị hóa, gia đình Việt Nam chuyển biến từ gia đình đa thế hệ (7-8 người) sang gia đình hạt nhân (3-4 người). Gia đình hạt nhân chiếm khoảng 52% năm 2019."
  },
  {
    id: 6,
    question: "Chức năng nào là chức năng CỐT LÕI của gia đình xã hội chủ nghĩa?",
    options: [
      "A) Chỉ sinh đẻ con cái",
      "B) Chỉ tích lũy tài sản",
      "C) Sinh đẻ, kinh tế, giáo dục, chăm sóc, văn hóa",
      "D) Kiếm tiền cho Nhà nước"
    ],
    correctAnswer: 2,
    explanation: "Gia đình thực hiện năm chức năng cơ bản: (1) sinh đẻ - tái sản xuất dân số, (2) kinh tế - sản xuất, tiêu dùng, (3) giáo dục - nuôi dạy con, (4) chăm sóc - sức khỏe tinh thần, (5) văn hóa - gìn giữ truyền thống."
  },
  {
    id: 7,
    question: "Tỉ lệ lao động nữ ở Việt Nam hiện nay xấp xỉ bao nhiêu %?",
    options: [
      "A) 20-25%",
      "B) 35-40%",
      "C) 48-49%",
      "D) 60-65%"
    ],
    correctAnswer: 2,
    explanation: "Tỉ lệ lao động nữ ở Việt Nam duy trì ở mức cao, khoảng 48-49%, cho thấy vai trò quan trọng của phụ nữ trong nền kinh tế."
  },
  {
    id: 8,
    question: "Để xây dựng gia đình XHCN, vai trò nào của Nhà nước là quan trọng nhất?",
    options: [
      "A) Chỉ kiểm soát lương thực",
      "B) Hoàn thiện chính sách, pháp luật, hỗ trợ an sinh xã hội",
      "C) Cấm các hoạt động kinh tế gia đình",
      "D) Chiếm đoạt tài sản gia đình"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước xã hội chủ nghĩa cần hoàn thiện chính sách, pháp luật, tạo điều kiện về kinh tế, văn hóa, giáo dục, y tế, hỗ trợ an sinh xã hội cho gia đình."
  },
  {
    id: 9,
    question: "Tác phẩm nào của Friedrich Engels liên quan đến lý thuyết gia đình?",
    options: [
      "A) Khuyên dạo gia đình",
      "B) Căn nguyên gia đình, sở hữu tư nhân và nhà nước",
      "C) Lịch sử gia đình Châu Âu",
      "D) Những nơn đất thần thoại"
    ],
    correctAnswer: 1,
    explanation: "Friedrich Engels viết tác phẩm 'Căn nguyên gia đình, sở hữu tư nhân và nhà nước' để giải thích lý thuyết Mác về sự phát triển gia đình qua các giai đoạn lịch sử."
  },
  {
    id: 10,
    question: "Chiến lược nào được ban hành năm 2015 để định hướng xây dựng gia đình Việt Nam?",
    options: [
      "A) Kế hoạch xây dựng xã hội",
      "B) Nghị quyết 33-NQ/TW về Gia đình",
      "C) Luật phòng chống bạo lực",
      "D) Chương trình phát triển nhân lực"
    ],
    correctAnswer: 1,
    explanation: "Năm 2015, Đảng Cộng sản Việt Nam ban hành Nghị quyết 33-NQ/TW về gia đình, xác định gia đình là 'tế bào cốt lõi' của xã hội và đặt mục tiêu xây dựng gia đình ấm no, bình đẳng, tiến bộ, hạnh phúc."
  }
];

// ============================================
// FLASHCARDS
// ============================================
export const flashcards = [
  {
    id: 1,
    front: "Gia đình là gì?",
    back: "Gia đình là tổ chức xã hội cơ bản nhất, được hình thành trên cơ sở quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng, trong đó các thành viên có mối quan hệ mật thiết về kinh tế, tinh thần, pháp lý và đạo đức."
  },
  {
    id: 2,
    front: "Năm chức năng cơ bản của gia đình là gì?",
    back: "1. Sinh đẻ/tái sản xuất dân số\n2. Kinh tế - sản xuất, tiêu dùng\n3. Giáo dục - nuôi dạy con\n4. Chăm sóc - sức khỏe tinh thần\n5. Văn hóa - gìn giữ truyền thống"
  },
  {
    id: 3,
    front: "Gia đình hạt nhân là gì?",
    back: "Gia đình hạt nhân (nuclear family) là gia đình gồm bố, mẹ và con cái, thường 3-4 người, là mô hình phổ biến nhất hiện nay ở Việt Nam (chiếm khoảng 52% tổng số hộ)."
  },
  {
    id: 4,
    front: "Gia đình mở rộng là gì?",
    back: "Gia đình mở rộng (extended family) là gia đình đa thế hệ gồm ông bà, bố mẹ, con cháu sống chung. Vẫn còn phổ biến ở nông thôn, chiếm khoảng 20% tổng số hộ."
  },
  {
    id: 5,
    front: "Nguyên tắc xây dựng gia đình XHCN là gì?",
    back: "Nguyên tắc xây dựng gia đình XHCN:\n1. Hôn nhân tự nguyện, tiến bộ\n2. Bình đẳng giữa vợ và chồng\n3. Một vợ một chồng\n4. Tôn trọng, yêu thương\n5. Trách nhiệm nuôi dạy con"
  },
  {
    id: 6,
    front: "Luật Hôn nhân và Gia đình 2014 có những quy định mới nào?",
    back: "Luật 2014 nâng cao vai trò bảo vệ:\n• Quyền lợi trẻ em trong gia đình\n• Phòng chống bạo lực gia đình\n• Quyền nuôi con sau ly hôn\n• Bảo vệ tài sản của vợ chồng"
  },
  {
    id: 7,
    front: "Vai trò của gia đình trong xây dựng XHCN là gì?",
    back: "Gia đình có vai trò:\n1. Kinh tế - sản xuất, tiêu dùng\n2. Văn hóa - gìn giữ truyền thống\n3. Giáo dục - hình thành nhân cách thế hệ trẻ\n4. An sinh - chăm sóc các thành viên\n5. Ổn định - đảm bảo ổn định xã hội"
  },
  {
    id: 8,
    front: "Thách thức nào của gia đình Việt Nam hiện nay?",
    back: "Những thách thức:\n1. Áp lực tài chính do kinh tế thị trường\n2. Xung đột giữa truyền thống và hiện đại\n3. Cá nhân hóa, giảm gắn kết gia đình\n4. Gia tăng tệ nạn, bạo lực gia đình\n5. Tỉ lệ ly hôn tăng (260 per 1000 kết hôn năm 2020)\n6. Người già cô đơn gia tăng"
  },
  {
    id: 9,
    front: "Giải pháp xây dựng gia đình hạnh phúc là gì?",
    back: "Giải pháp:\n• Nhà nước: hoàn thiện chính sách, pháp luật, hỗ trợ an sinh\n• Cộng đồng: tuyên truyền, giáo dục, phòng chống tệ nạn\n• Gia đình: xây dựng tình yêu thương, trách nhiệm, văn hóa\n• Cá nhân: phát triển năng lực, học tập, tiếp nhận giá trị mới"
  },
  {
    id: 10,
    front: "Gia đình 4.0 là gì?",
    back: "Gia đình 4.0 là gia đình thích ứng với thời đại công nghệ số, kết hợp:\n• Công nghệ với gắn kết tình cảm\n• Giáo dục số với kỹ năng sống\n• Kinh tế số với giá trị truyền thống\n• Tiếp cận văn hóa thế giới nhưng gìn giữ bản sắc dân tộc"
  }
];

// ============================================
// QUIZ TIPS & STRATEGIES
// ============================================
export const quizTips = [
  "Đọc kỹ câu hỏi trước khi chọn đáp án",
  "Loại trừ các đáp án rõ ràng sai",
  "Chú ý đến từ 'NOT' (không phải) hoặc 'EXCEPT' (ngoại trừ)",
  "Nếu không chắc, hãy suy luận từ kiến thức liên quan",
  "Xem giải thích sau khi trả lời để học thêm"
];
