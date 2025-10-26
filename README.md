# Gia đình trong thời kỳ quá độ lên Chủ nghĩa Xã hội

Trang web học thuật single-page về chủ đề "Gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội" - Tài liệu MLN131 Slot 10.

## 🎓 Giới thiệu

Dự án này là một trang web giáo dục được xây dựng bằng **React**, **TypeScript**, và **Tailwind CSS**, trình bày nội dung học thuật về vai trò, vị trí và định hướng phát triển của gia đình Việt Nam trong tiến trình xây dựng chủ nghĩa xã hội.

## ✨ Tính năng

### 📄 Nội dung học thuật
- **Header**: Menu điều hướng với smooth scroll
- **Hero Section**: Tiêu đề ấn tượng, hình minh họa và CTA button
- **Giới thiệu**: Bối cảnh, trích dẫn Chủ tịch Hồ Chí Minh + Gallery 3 hình
- **Lý thuyết chính**: Accordion với 3 phần nội dung chi tiết
- **Các mô hình gia đình** ⭐ MỚI: 3 loại hình (hạt nhân, mở rộng, đơn thân)
- **Giá trị cốt lõi** ⭐ MỚI: Infographic 7 giá trị + phân tích
- **Sự biến đổi** ⭐ MỚI: So sánh gia đình truyền thống vs hiện đại
- **Thách thức**: 6 thách thức hiện nay với cards
- **Timeline**: Các mốc phát triển chính sách gia đình từ 1945
- **Footer**: Thông tin dự án và nguồn tài liệu

### 📊 Biểu đồ và hình ảnh
- **9 hình minh họa SVG**: Các mô hình gia đình, giá trị, so sánh
- **5 biểu đồ dữ liệu** với Recharts:
  1. Cơ cấu quy mô hộ gia đình (1979-2019) - Bar Chart
  2. Tỉ lệ lao động nữ (1990-2020) - Line Chart
  3. Xu hướng kết hôn và ly hôn (2000-2020) - Bar Chart ⭐ MỚI
  4. Tỉ suất sinh toàn phần TFR (1990-2020) - Line Chart ⭐ MỚI
  5. Trình độ học vấn phụ nữ - Pie Chart ⭐ MỚI

### 🎮 Trò chơi học tập ⭐ MỚI
- **Quiz Game - Trắc nghiệm**:
  - 8 câu hỏi với 4 đáp án
  - Giải thích chi tiết sau mỗi câu
  - Scoring system với phản hồi
  - Visual feedback (màu xanh/đỏ)
- **Flashcard Game - Thẻ ghi nhớ**:
  - 10 thẻ với hiệu ứng 3D flip
  - Phân loại theo danh mục
  - Shuffle và reset
  - Navigation mượt mà

### ✨ Hiệu ứng nâng cao ⭐ MỚI
- **Particle Background**: Hiệu ứng hạt động với 50 particles kết nối
- **3D Animations**: Flip cards với perspective transform
- **Advanced Framer Motion**: Scroll-triggered, stagger, spring animations
- **Glass-morphism**: Backdrop blur effects
- **Gradient overlays**: Dynamic decorative elements

## 🛠️ Công nghệ sử dụng

- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Vite** - Build tool

## 🚀 Cài đặt và chạy

### Yêu cầu

- Node.js 16+ 
- npm hoặc yarn

### Các bước thực hiện

1. **Cài đặt dependencies**:
```bash
npm install
```

2. **Chạy development server**:
```bash
npm run dev
```

3. **Mở trình duyệt**:
   - Truy cập: `http://localhost:5173`

4. **Build cho production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## 📁 Cấu trúc dự án

```
MLN131/
├── src/
│   ├── FamilySocialistPage.tsx  # Component chính
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

## 🎨 Thiết kế

- **Màu chủ đạo**: Xanh đậm (#0c4a6e) + Vàng nhạt (#fde047)
- **Typography**: Font system mặc định với hierarchy rõ ràng
- **Responsive**: Tối ưu cho mobile, tablet, desktop
- **Animations**: Smooth transitions với Framer Motion
- **Accessibility**: Semantic HTML và ARIA labels

## 📚 Nội dung học thuật

### I. Khái niệm, vị trí, chức năng của gia đình
- Khái niệm gia đình
- Vị trí của gia đình trong xã hội
- 5 chức năng chính

### II. Cơ sở xây dựng gia đình
- Cơ sở kinh tế
- Cơ sở chính trị - pháp lý
- Cơ sở văn hóa - đạo đức
- Cơ sở khoa học - giáo dục

### III. Xây dựng gia đình Việt Nam
- Mục tiêu và nguyên tắc
- Nội dung xây dựng
- Vai trò của Nhà nước, xã hội, gia đình

## 📊 Dữ liệu

Tất cả dữ liệu biểu đồ và timeline được hardcode trong component để dễ dàng demo. Trong môi trường thực tế, có thể tích hợp với API backend.

## 🎯 Học tập

Dự án này phù hợp cho:
- Sinh viên học môn MLN131
- Người quan tâm đến chính sách gia đình Việt Nam
- Lập trình viên học React + TypeScript + Tailwind

## 📝 License

Dự án học tập - MLN131 © 2025

## 👨‍💻 Phát triển

Dự án được phát triển với mục đích học tập, trình bày nội dung học thuật một cách trực quan và dễ hiểu.

## 🆕 Cập nhật mới nhất (26/10/2025)

### Version 3.0 - Gen Z & Modern Features:
- 🌓 **Dark Mode** chuyên nghiệp với toggle mượt mà
- 📸 **Image Gallery** với lightbox và navigator
- 🔥 **Xu hướng gia đình Gen Z & Millennials** với statistics 2024-2025
- 💡 6 xu hướng chính + 6 giá trị cốt lõi thế hệ mới
- ⚡ UI/UX cải thiện với animations và transitions
- 📱 Responsive tối ưu cho mobile

### Version 2.0 - Trò chơi & Hiệu ứng:
- 🎮 **2 trò chơi học tập** tương tác (Quiz + Flashcard)
- ✨ **Particle Background** với 50 particles động
- 🎨 **Hiệu ứng 3D flip** cho flashcard
- 🌟 **Advanced animations** với Framer Motion
- 🎯 **Scoring system** và feedback chi tiết
- 📊 **Progress tracking** cho cả 2 game

### Nội dung bổ sung trước đó:
- ✅ **9 hình minh họa SVG** chuyên nghiệp về các mô hình gia đình
- ✅ **3 biểu đồ dữ liệu mới**: Kết hôn/Ly hôn, TFR, Học vấn phụ nữ
- ✅ **3 sections mới**: Mô hình gia đình, Giá trị cốt lõi, So sánh truyền thống-hiện đại
- ✅ **Gallery hình ảnh** trong phần giới thiệu
- ✅ **Phân tích chi tiết** về xu hướng biến đổi gia đình

### Tính năng kỹ thuật:
- ✅ Lazy loading cho hình ảnh
- ✅ Canvas animation với requestAnimationFrame
- ✅ 3D CSS transforms với backface-visibility
- ✅ Responsive design hoàn chỉnh
- ✅ Figcaption và alt text cho accessibility
- ✅ TypeScript strict mode
- ✅ No linter errors

📄 **Xem chi tiết**: `GAME_VA_HIEU_UNG.md`

---

**Nguồn nội dung**: Tài liệu MLN131 – Slot 10 | Gia đình trong thời kỳ quá độ lên CNXH

