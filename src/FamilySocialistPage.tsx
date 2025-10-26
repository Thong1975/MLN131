/**
 * Nguồn nội dung: Tài liệu MLN131 – Slot 10 | Gia đình trong thời kỳ quá độ lên CNXH
 * 
 * Trang web học thuật về chủ đề "Gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội"
 * Được xây dựng với React + TypeScript + Tailwind CSS + Framer Motion + Recharts
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  TrendingUp, 
  Target, 
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
  Menu,
  X,
  Quote,
  Gamepad2
} from 'lucide-react';
import QuizGame from './components/QuizGame';
import FlashcardGame from './components/FlashcardGame';
import ParticleBackground from './components/ParticleBackground';
import DarkModeToggle from './components/DarkModeToggle';
import ImageGallery from './components/ImageGallery';
import ModernFamilyTrends from './components/ModernFamilyTrends';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Placeholder images - using data URIs for SVG placeholders
const createPlaceholderSVG = (text: string, bgColor: string) => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="${bgColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-family="Arial, sans-serif" font-size="32" fill="white">
        ${text}
      </text>
    </svg>
  `)}`;
};

const familyHero = createPlaceholderSVG('👨‍👩‍👧‍👦 Gia đình Việt Nam', '#0c4a6e');
const familyTradition = createPlaceholderSVG('🏛️ Gia đình truyền thống', '#0284c7');
const policyLaw = createPlaceholderSVG('⚖️ Chính sách & Pháp luật', '#0c4a6e');
const cultureFamily = createPlaceholderSVG('🎭 Văn hóa gia đình', '#0284c7');
const familyNuclear = createPlaceholderSVG('👨‍👩‍👧 Gia đình hạt nhân', '#0c4a6e');
const familyExtended = createPlaceholderSVG('👨‍👩‍👧‍👦‍👴‍👵 Gia đình mở rộng', '#0284c7');
const familySingleParent = createPlaceholderSVG('👨‍👧 Gia đình đơn thân', '#7c3aed');
const infographicValues = createPlaceholderSVG('💎 Giá trị cốt lõi', '#0c4a6e');
const comparisonChart = createPlaceholderSVG('📊 So sánh truyền thống - hiện đại', '#0284c7');

// Dữ liệu biểu đồ: Cơ cấu quy mô hộ gia đình
const familySizeData = [
  { year: '1979', '1-2 người': 8, '3-4 người': 32, '5-6 người': 38, '7+ người': 22 },
  { year: '1989', '1-2 người': 12, '3-4 người': 35, '5-6 người': 35, '7+ người': 18 },
  { year: '1999', '1-2 người': 16, '3-4 người': 42, '5-6 người': 30, '7+ người': 12 },
  { year: '2009', '1-2 người': 22, '3-4 người': 48, '5-6 người': 23, '7+ người': 7 },
  { year: '2019', '1-2 người': 28, '3-4 người': 52, '5-6 người': 16, '7+ người': 4 },
];

// Dữ liệu: Tỉ lệ lao động nữ
const femaleLaborData = [
  { year: '1990', tỉLệ: 48.5, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2000', tỉLệ: 49.2, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2010', tỉLệ: 48.8, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2015', tỉLệ: 48.4, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2020', tỉLệ: 47.9, name: 'Tỉ lệ lao động nữ (%)' },
];

// Dữ liệu bổ sung: Kết hôn - Ly hôn (minh họa)
const marriagesDivorcesData = [
  { year: '2000', ketHon: 980, lyHon: 120 },
  { year: '2005', ketHon: 960, lyHon: 150 },
  { year: '2010', ketHon: 940, lyHon: 190 },
  { year: '2015', ketHon: 910, lyHon: 230 },
  { year: '2020', ketHon: 880, lyHon: 260 },
];

// Dữ liệu bổ sung: Tỉ lệ sinh (số con/phụ nữ) – minh họa TFR
const birthRateData = [
  { year: '1990', tfr: 3.6 },
  { year: '2000', tfr: 2.3 },
  { year: '2010', tfr: 2.0 },
  { year: '2015', tfr: 2.1 },
  { year: '2020', tfr: 2.05 },
];

// Dữ liệu bổ sung: Trình độ học vấn của phụ nữ – minh họa
const womenEducationData = [
  { name: 'Tiểu học trở xuống', value: 18 },
  { name: 'THCS', value: 32 },
  { name: 'THPT', value: 28 },
  { name: 'TC/CĐ/ĐH+', value: 22 },
];
const eduColors = ['#7dd3fc', '#0284c7', '#0c4a6e', '#fde047'];

// Dữ liệu gallery hình ảnh
const galleryImages = [
  {
    id: 1,
    src: familyNuclear,
    title: 'Gia đình hạt nhân hiện đại',
    description: 'Mô hình phổ biến nhất với 3-4 thành viên, chiếm 52% hộ gia đình',
    category: 'Mô hình gia đình'
  },
  {
    id: 2,
    src: familyExtended,
    title: 'Gia đình đa thế hệ',
    description: 'Ông bà, bố mẹ, con cháu sống chung, giữ gìn giá trị truyền thống',
    category: 'Mô hình gia đình'
  },
  {
    id: 3,
    src: familySingleParent,
    title: 'Gia đình đơn thân',
    description: 'Xu hướng gia tăng, cần chính sách hỗ trợ đặc biệt',
    category: 'Mô hình gia đình'
  },
  {
    id: 4,
    src: infographicValues,
    title: '7 Giá trị cốt lõi',
    description: 'Kết hợp giá trị truyền thống và hiện đại của gia đình Việt Nam',
    category: 'Giá trị gia đình'
  },
  {
    id: 5,
    src: comparisonChart,
    title: 'So sánh truyền thống - hiện đại',
    description: 'Sự biến đổi từ gia đình truyền thống sang gia đình hiện đại',
    category: 'Biến đổi'
  },
  {
    id: 6,
    src: familyTradition,
    title: 'Gia đình truyền thống',
    description: 'Giá trị hiếu thảo, tương thân tương ái trong gia đình Việt Nam',
    category: 'Truyền thống'
  },
  {
    id: 7,
    src: policyLaw,
    title: 'Luật Hôn nhân và Gia đình',
    description: 'Khung pháp lý bảo vệ quyền lợi các thành viên gia đình',
    category: 'Chính sách'
  },
  {
    id: 8,
    src: cultureFamily,
    title: 'Văn hóa gia đình',
    description: 'Giữ gìn và phát huy giá trị văn hóa trong thời kỳ hội nhập',
    category: 'Văn hóa'
  }
];

// Timeline: Các mốc phát triển chính sách gia đình
const timelineData = [
  {
    year: '1945',
    title: 'Tuyên ngôn độc lập',
    description: 'Khẳng định quyền bình đẳng nam nữ trong xã hội mới.'
  },
  {
    year: '1950',
    title: 'Luật Hôn nhân và Gia đình đầu tiên',
    description: 'Cấm hôn nhân cưỡng bức, chế độ đa thê, bảo vệ quyền lợi phụ nữ và trẻ em.'
  },
  {
    year: '1959',
    title: 'Luật Hôn nhân và Gia đình (sửa đổi)',
    description: 'Hoàn thiện khung pháp lý về hôn nhân tự do, bình đẳng giữa vợ chồng.'
  },
  {
    year: '1986',
    title: 'Đổi mới kinh tế',
    description: 'Chuyển sang cơ chế thị trường định hướng xã hội chủ nghĩa, tác động đến cơ cấu gia đình.'
  },
  {
    year: '2000',
    title: 'Luật Hôn nhân và Gia đình 2000',
    description: 'Bổ sung quy định về quan hệ tài sản vợ chồng, quyền nuôi con sau ly hôn.'
  },
  {
    year: '2014',
    title: 'Luật Hôn nhân và Gia đình 2014',
    description: 'Nâng cao vai trò bảo vệ quyền lợi trẻ em, phòng chống bạo lực gia đình.'
  },
  {
    year: '2022',
    title: 'Chiến lược Gia đình đến 2030',
    description: 'Định hướng xây dựng gia đình ấm no, tiến bộ, hạnh phúc, văn minh trong thời kỳ mới.'
  },
];

// Thách thức hiện nay
const challenges = [
  {
    title: 'Áp lực kinh tế',
    description: 'Thu nhập chưa ổn định, chi phí sinh hoạt và nuôi dạy con cao, gây căng thẳng tài chính.',
    icon: '💰'
  },
  {
    title: 'Biến đổi cơ cấu gia đình',
    description: 'Gia đình nhỏ, gia đình 1-2 thế hệ tăng, gia đình đa thế hệ giảm dần.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Bất bình đẳng giới',
    description: 'Phụ nữ vẫn gánh vác phần lớn công việc nội trợ, chưa được tham gia quyết định gia đình đầy đủ.',
    icon: '⚖️'
  },
  {
    title: 'Di cư lao động',
    description: 'Lao động rời quê hương làm việc xa, dẫn đến gia đình xa cách, thiếu chăm sóc con cái.',
    icon: '✈️'
  },
  {
    title: 'Ảnh hưởng văn hóa ngoại lai',
    description: 'Lối sống tiêu dùng, giá trị cá nhân chủ nghĩa xâm nhập, làm giảm gắn kết gia đình truyền thống.',
    icon: '🌐'
  },
  {
    title: 'Già hóa dân số và chăm sóc người cao tuổi',
    description: 'Dân số già tăng nhanh, gánh nặng chăm sóc người già trong gia đình gia tăng.',
    icon: '👴'
  },
];

// Component Accordion
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary-200 rounded-lg mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 transition-colors"
      >
        <h3 className="text-lg font-semibold text-primary-900 text-left">{title}</h3>
        {isOpen ? (
          <ChevronUp className="text-primary-700 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-primary-700 flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// Component chính
export default function FamilySocialistPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gameMode, setGameMode] = useState<'quiz' | 'flashcard'>('quiz');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadPDF = () => {
    alert('Chức năng tải PDF đang được phát triển. Đây là phiên bản demo.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative transition-colors duration-300">
      <ParticleBackground />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-900">MLN131</h1>
              <p className="text-xs text-gray-600">Gia đình & CNXH</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('intro')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 transition-colors"
            >
              <Home size={18} />
              <span>Giới thiệu</span>
            </button>
            <button
              onClick={() => scrollToSection('theory')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 transition-colors"
            >
              <BookOpen size={18} />
              <span>Lý thuyết</span>
            </button>
            <button
              onClick={() => scrollToSection('changes')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 transition-colors"
            >
              <TrendingUp size={18} />
              <span>Biến đổi</span>
            </button>
            <button
              onClick={() => scrollToSection('direction')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 transition-colors"
            >
              <Target size={18} />
              <span>Phương hướng</span>
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 transition-colors"
            >
              <Gamepad2 size={18} />
              <span>Trò chơi</span>
            </button>
            <button
              onClick={() => scrollToSection('sources')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 transition-colors"
            >
              <FileText size={18} />
              <span>Nguồn</span>
            </button>
          </nav>

          {/* Dark Mode Toggle */}
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary-900 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            <nav className="container mx-auto px-4 flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('intro')}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 py-2"
              >
                <Home size={18} />
                <span>Giới thiệu</span>
              </button>
              <button
                onClick={() => scrollToSection('theory')}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 py-2"
              >
                <BookOpen size={18} />
                <span>Lý thuyết</span>
              </button>
              <button
                onClick={() => scrollToSection('changes')}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 py-2"
              >
                <TrendingUp size={18} />
                <span>Biến đổi</span>
              </button>
              <button
                onClick={() => scrollToSection('direction')}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 py-2"
              >
                <Target size={18} />
                <span>Phương hướng</span>
              </button>
              <button
                onClick={() => scrollToSection('games')}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 py-2"
              >
                <Gamepad2 size={18} />
                <span>Trò chơi</span>
              </button>
              <button
                onClick={() => scrollToSection('sources')}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 py-2"
              >
                <FileText size={18} />
                <span>Nguồn</span>
              </button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight">
              Gia đình trong thời kỳ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-accent-600">
                quá độ lên Chủ nghĩa Xã hội
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Tìm hiểu về vai trò, vị trí và định hướng phát triển của gia đình Việt Nam 
              trong tiến trình xây dựng chủ nghĩa xã hội – Tài liệu học thuật MLN131
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('intro')}
              className="bg-gradient-to-r from-primary-700 to-primary-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2 mx-auto"
            >
              <span>Tìm hiểu ngay</span>
              <ChevronDown size={20} />
            </motion.button>
            <figure className="mt-10">
              <img
                src={familyHero}
                alt="Minh họa gia đình Việt Nam trong thời kỳ quá độ"
                className="mx-auto w-full max-w-4xl rounded-xl shadow-md"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-600">
                Minh họa: Gia đình Việt Nam trong bối cảnh công nghiệp hóa, hiện đại hóa
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section id="intro" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
              Giới thiệu
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Gia đình là tế bào cơ bản của xã hội, đóng vai trò nền tảng trong việc 
                duy trì và phát triển cộng đồng. Trong bối cảnh Việt Nam đang trong thời kỳ 
                quá độ lên chủ nghĩa xã hội, gia đình không chỉ chịu tác động sâu sắc từ những 
                biến đổi kinh tế - xã hội mà còn là động lực quan trọng thúc đẩy sự tiến bộ 
                và phát triển bền vững của đất nước.
              </p>

              <p className="mb-6">
                Quá trình công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế đã mang 
                lại nhiều cơ hội nhưng cũng đặt ra không ít thách thức đối với gia đình Việt Nam. 
                Từ cơ cấu gia đình, quan hệ vợ chồng, cha mẹ – con cái cho đến chức năng và vai trò 
                của gia đình đều có những chuyển biến rõ rệt.
              </p>

              {/* Trích dẫn Hồ Chí Minh */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="my-10 border-l-4 border-accent-500 bg-gradient-to-r from-accent-50 to-transparent p-6 rounded-r-lg"
              >
                <div className="flex items-start space-x-4">
                  <Quote className="text-accent-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <p className="text-xl italic text-gray-800 font-medium mb-3">
                      "Nếu không giải phóng phụ nữ thì không xây dựng được chủ nghĩa xã hội"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">— Chủ tịch Hồ Chí Minh</p>
                  </div>
                </div>
              </motion.div>

              <p className="mb-6">
                Lời dạy của Bác Hồ khẳng định vai trò thiết yếu của bình đẳng giới trong gia đình 
                và xã hội, là tiền đề để xây dựng một xã hội xã hội chủ nghĩa tiên tiến và nhân văn. 
                Giải phóng phụ nữ không chỉ là vấn đề nhân quyền mà còn là yêu cầu tất yếu cho 
                sự phát triển toàn diện của đất nước.
              </p>
            </div>
            {/* Bộ sưu tập minh họa */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <figure className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-lg overflow-hidden shadow-sm">
                <img src={familyTradition} alt="Gia đình truyền thống" className="w-full h-44 object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm text-gray-700">
                  Gia đình truyền thống đa thế hệ – nền tảng văn hóa, đạo đức Việt Nam
                </figcaption>
              </figure>
              <figure className="bg-gradient-to-br from-white to-accent-50 border border-accent-200 rounded-lg overflow-hidden shadow-sm">
                <img src={policyLaw} alt="Chính sách và pháp luật về gia đình" className="w-full h-44 object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm text-gray-700">
                  Chính sách, pháp luật bảo vệ gia đình – bình đẳng giới, quyền trẻ em
                </figcaption>
              </figure>
              <figure className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-lg overflow-hidden shadow-sm">
                <img src={cultureFamily} alt="Văn hóa gia đình Việt Nam" className="w-full h-44 object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm text-gray-700">
                  Văn hóa gia đình: hiếu nghĩa, tương thân tương ái, lối sống văn minh
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lý thuyết chính */}
      <section id="theory" className="py-16 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Lý thuyết chính
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Nền tảng lý luận về gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội
            </p>

            <div className="space-y-4">
              <AccordionItem title="I. Khái niệm, vị trí và chức năng của gia đình">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">1. Khái niệm gia đình</h4>
                    <p>
                      Gia đình là tổ chức xã hội cơ bản nhất, được hình thành trên cơ sở quan hệ 
                      hôn nhân, huyết thống hoặc nuôi dưỡng. Các thành viên trong gia đình có mối 
                      quan hệ mật thiết về kinh tế, tinh thần, pháp lý và đạo đức, cùng sống chung 
                      trong một không gian sinh hoạt.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">2. Vị trí của gia đình</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Là tế bào đầu tiên của xã hội, nơi hình thành nhân cách con người</li>
                      <li>Môi trường sống quan trọng nhất đối với mỗi cá nhân</li>
                      <li>Nơi truyền đạt giá trị văn hóa, đạo đức, truyền thống dân tộc</li>
                      <li>Đơn vị kinh tế cơ bản trong tổ chức xã hội</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">3. Chức năng của gia đình</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Chức năng sinh đẻ:</strong> Duy trì nòi giống, tái sản xuất dân số</li>
                      <li><strong>Chức năng kinh tế:</strong> Sản xuất, tiêu dùng, tích lũy tài sản</li>
                      <li><strong>Chức năng giáo dục:</strong> Giáo dục đạo đức, kỹ năng sống, hình thành nhân cách</li>
                      <li><strong>Chức năng chăm sóc:</strong> Chăm sóc sức khỏe, tinh thần các thành viên</li>
                      <li><strong>Chức năng văn hóa – tinh thần:</strong> Gìn giữ, phát huy giá trị văn hóa truyền thống</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="II. Cơ sở xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">1. Cơ sở kinh tế</h4>
                    <p>
                      Trong thời kỳ quá độ, chế độ sở hữu về tư liệu sản xuất bao gồm nhiều hình thức: 
                      sở hữu toàn dân, sở hữu tập thể, sở hữu tư nhân và sở hữu hỗn hợp. Gia đình 
                      tham gia vào các hoạt động kinh tế đa dạng, từ nông nghiệp, tiểu thủ công nghiệp 
                      đến dịch vụ, thương mại. Điều này tạo điều kiện cho gia đình có thu nhập ổn định, 
                      nâng cao đời sống vật chất, đồng thời là động lực để phát triển kinh tế xã hội.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">2. Cơ sở chính trị – pháp lý</h4>
                    <p>
                      Nhà nước xã hội chủ nghĩa ban hành hệ thống pháp luật bảo vệ quyền lợi và lợi ích 
                      hợp pháp của gia đình, đặc biệt là phụ nữ và trẻ em. Luật Hôn nhân và Gia đình 
                      quy định rõ nguyên tắc tự nguyện, tiến bộ, bình đẳng giữa vợ và chồng, bảo vệ 
                      quyền nuôi dưỡng, giáo dục con cái. Nhà nước cũng có các chính sách hỗ trợ về 
                      nhà ở, giáo dục, y tế, an sinh xã hội cho gia đình.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">3. Cơ sở văn hóa – đạo đức</h4>
                    <p>
                      Gia đình Việt Nam được xây dựng trên nền tảng văn hóa truyền thống tốt đẹp: 
                      hiếu thảo, tôn trọng người già, yêu thương trẻ nhỏ, tương thân tương ái. 
                      Trong thời kỳ mới, các giá trị này được kế thừa và phát huy, đồng thời 
                      tiếp thu những giá trị văn hóa tiến bộ của nhân loại, như bình đẳng giới, 
                      dân chủ trong gia đình, tôn trọng quyền cá nhân.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">4. Cơ sở khoa học – giáo dục</h4>
                    <p>
                      Nâng cao trình độ học vấn, kiến thức khoa học của các thành viên gia đình 
                      là yếu tố quan trọng để xây dựng gia đình văn minh, tiến bộ. Giáo dục giúp 
                      mọi người có nhận thức đúng đắn về hôn nhân, gia đình, nuôi dạy con, 
                      chăm sóc sức khỏe sinh sản, phòng tránh các tệ nạn xã hội.
                    </p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="III. Xây dựng gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">1. Mục tiêu xây dựng gia đình</h4>
                    <p>
                      Xây dựng gia đình Việt Nam ấm no, bình đẳng, tiến bộ, hạnh phúc và văn minh. 
                      Gia đình là nơi thực hiện đầy đủ các chức năng sinh đẻ, kinh tế, giáo dục, 
                      chăm sóc sức khỏe và giữ gìn bản sắc văn hóa dân tộc. Các thành viên gia đình 
                      có trách nhiệm đối với nhau, với cộng đồng và xã hội.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">2. Nguyên tắc xây dựng gia đình</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Hôn nhân tự nguyện, tiến bộ:</strong> Vợ chồng tự do lựa chọn, không ép buộc</li>
                      <li><strong>Bình đẳng giữa vợ và chồng:</strong> Cùng quyền và nghĩa vụ trong mọi mặt đời sống</li>
                      <li><strong>Một vợ một chồng:</strong> Xây dựng gia đình trên cơ sở chung thủy, bền vững</li>
                      <li><strong>Tôn trọng, yêu thương:</strong> Quan tâm, chia sẻ, đồng hành cùng nhau</li>
                      <li><strong>Trách nhiệm nuôi dạy con:</strong> Giáo dục con toàn diện cả đạo đức, trí tuệ, thể chất, thẩm mỹ</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">3. Nội dung xây dựng gia đình</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Nâng cao đời sống vật chất: thu nhập ổn định, nhà ở đầy đủ tiện nghi</li>
                      <li>Phát triển đời sống tinh thần: văn hóa gia đình lành mạnh, không mê tín dị đoan</li>
                      <li>Xây dựng lối sống văn minh: tiết kiệm, vệ sinh, bảo vệ môi trường</li>
                      <li>Giáo dục con cái toàn diện, rèn luyện đạo đức, kỹ năng sống</li>
                      <li>Chăm sóc sức khỏe toàn diện cho mọi thành viên, đặc biệt trẻ em và người già</li>
                      <li>Thực hiện dân số và kế hoạch hóa gia đình, sinh con có kế hoạch</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">4. Vai trò của Nhà nước, xã hội và gia đình</h4>
                    <p className="mb-2">
                      <strong>Nhà nước:</strong> Ban hành và thực thi chính sách, pháp luật về gia đình; 
                      tạo điều kiện về kinh tế, văn hóa, giáo dục, y tế; hỗ trợ các gia đình khó khăn.
                    </p>
                    <p className="mb-2">
                      <strong>Xã hội:</strong> Tổ chức các phong trào, hoạt động vì gia đình; tuyên truyền, 
                      giáo dục ý thức trách nhiệm; ngăn chặn các hành vi tiêu cực, tệ nạn xã hội.
                    </p>
                    <p>
                      <strong>Gia đình:</strong> Tự giác thực hiện pháp luật, các quy ước xã hội; 
                      không ngừng học tập, nâng cao kiến thức; xây dựng gia đình ấm no, hạnh phúc.
                    </p>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Các mô hình gia đình */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Các mô hình gia đình Việt Nam
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Sự đa dạng trong cơ cấu và quy mô gia đình hiện nay
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img src={familyNuclear} alt="Gia đình hạt nhân" className="w-full h-auto" loading="lazy" />
                <figcaption className="p-5 text-center">
                  <h3 className="font-bold text-lg text-primary-900 mb-2">Gia đình hạt nhân</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Mô hình phổ biến nhất hiện nay, gồm bố mẹ và con cái (3-4 người). 
                    Chiếm khoảng <strong>52%</strong> tổng số hộ gia đình.
                  </p>
                </figcaption>
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-white to-accent-50 border-2 border-accent-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img src={familyExtended} alt="Gia đình mở rộng" className="w-full h-auto" loading="lazy" />
                <figcaption className="p-5 text-center">
                  <h3 className="font-bold text-lg text-primary-900 mb-2">Gia đình mở rộng</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Gia đình đa thế hệ (ông bà, bố mẹ, con cháu). Vẫn còn phổ biến ở 
                    nông thôn, chiếm khoảng <strong>20%</strong> tổng số hộ.
                  </p>
                </figcaption>
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img src={familySingleParent} alt="Gia đình đơn thân" className="w-full h-auto" loading="lazy" />
                <figcaption className="p-5 text-center">
                  <h3 className="font-bold text-lg text-primary-900 mb-2">Gia đình đơn thân</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Một bố/mẹ nuôi con. Xu hướng gia tăng do ly hôn, góa bụa hoặc 
                    lựa chọn cá nhân. Chiếm khoảng <strong>10-12%</strong>.
                  </p>
                </figcaption>
              </motion.figure>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-l-4 border-primary-700">
              <h3 className="font-semibold text-lg text-primary-900 mb-3">📊 Xu hướng biến đổi cơ cấu gia đình:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Gia đình hạt nhân ngày càng phổ biến do công nghiệp hóa, đô thị hóa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Gia đình đa thế hệ giảm dần, nhưng vẫn giữ vai trò quan trọng ở nông thôn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Gia đình đơn thân gia tăng, cần chính sách hỗ trợ đặc biệt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Quy mô gia đình thu nhỏ: từ trung bình 5.1 người (1999) xuống 3.6 người (2019)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Giá trị cốt lõi của Gia đình Việt Nam
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Những giá trị truyền thống được kế thừa và phát huy trong thời kỳ mới
            </p>

            <figure className="mb-10">
              <img 
                src={infographicValues} 
                alt="Giá trị cốt lõi của gia đình Việt Nam" 
                className="w-full h-auto rounded-xl shadow-xl"
                loading="lazy"
              />
              <figcaption className="mt-4 text-center text-sm text-gray-600">
                Infographic: 7 giá trị cốt lõi của gia đình Việt Nam trong thời kỳ quá độ lên CNXH
              </figcaption>
            </figure>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-primary-200">
                <h3 className="font-bold text-lg text-primary-900 mb-3">🏛️ Giá trị truyền thống</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Hiếu thảo:</strong> Tôn kính ông bà, cha mẹ; thờ cúng tổ tiên</li>
                  <li><strong>Tương thân tương ái:</strong> Yêu thương, đoàn kết trong gia đình</li>
                  <li><strong>Ơn nghĩa:</strong> Đền đáp công ơn sinh thành, dưỡng dục</li>
                  <li><strong>Nhân nghĩa:</strong> Sống có đạo đức, trách nhiệm với xã hội</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-accent-200">
                <h3 className="font-bold text-lg text-primary-900 mb-3">✨ Giá trị mới, tiến bộ</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Bình đẳng giới:</strong> Nam nữ ngang quyền trong gia đình và xã hội</li>
                  <li><strong>Dân chủ gia đình:</strong> Thảo luận, quyết định cùng nhau</li>
                  <li><strong>Văn minh, tiến bộ:</strong> Lối sống lành mạnh, khoa học</li>
                  <li><strong>Trách nhiệm xã hội:</strong> Đóng góp cho cộng đồng, đất nước</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* So sánh gia đình truyền thống vs hiện đại */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Sự biến đổi của Gia đình Việt Nam
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Từ gia đình truyền thống đến gia đình hiện đại trong bối cảnh công nghiệp hóa
            </p>

            <figure className="mb-10">
              <img 
                src={comparisonChart} 
                alt="So sánh gia đình truyền thống và hiện đại" 
                className="w-full h-auto rounded-xl shadow-2xl border border-gray-200"
                loading="lazy"
              />
              <figcaption className="mt-4 text-center text-sm text-gray-600">
                Biểu đồ so sánh: Gia đình truyền thống vs Gia đình hiện đại Việt Nam
              </figcaption>
            </figure>

            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 border-l-4 border-accent-600">
              <h3 className="font-semibold text-lg text-primary-900 mb-3">🔄 Những thay đổi chính:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">Về quy mô và cơ cấu:</h4>
                  <ul className="space-y-1 text-sm ml-4 list-disc">
                    <li>Từ gia đình đa thế hệ sang gia đình hạt nhân</li>
                    <li>Số thành viên giảm từ 7-8 người xuống 3-4 người</li>
                    <li>Cấu trúc quyền lực từ gia trưởng sang dân chủ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">Về quan hệ và vai trò:</h4>
                  <ul className="space-y-1 text-sm ml-4 list-disc">
                    <li>Bình đẳng giới được coi trọng hơn</li>
                    <li>Phụ nữ tham gia lao động, kinh tế nhiều hơn</li>
                    <li>Con cái có tiếng nói trong quyết định gia đình</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">Về kinh tế và đời sống:</h4>
                  <ul className="space-y-1 text-sm ml-4 list-disc">
                    <li>Từ tự cung tự cấp sang kinh tế hàng hóa</li>
                    <li>Thu nhập đa dạng, không phụ thuộc nông nghiệp</li>
                    <li>Mức sống được nâng cao đáng kể</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">Về giáo dục và văn hóa:</h4>
                  <ul className="space-y-1 text-sm ml-4 list-disc">
                    <li>Giáo dục chính quy thay thế truyền miệng</li>
                    <li>Tiếp cận khoa học, công nghệ hiện đại</li>
                    <li>Kết hợp truyền thống và hiện đại hòa hợp</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery hình ảnh */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4 text-center">
              📸 Thư viện hình ảnh
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
              Khám phá các mô hình và giá trị gia đình qua hình ảnh trực quan
            </p>

            <ImageGallery images={galleryImages} />

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                💡 <strong>Mẹo:</strong> Click vào hình để xem full size và điều hướng bằng mũi tên
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Xu hướng gia đình hiện đại - Gen Z & Millennials */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <ModernFamilyTrends />
        </div>
      </section>

      {/* Thách thức hiện nay */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-primary-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Thách thức hiện nay
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Những vấn đề đặt ra đối với gia đình Việt Nam trong bối cảnh mới
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biểu đồ minh họa */}
      <section id="changes" className="py-16 px-4 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Biến đổi qua các thời kỳ
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Dữ liệu thống kê về sự chuyển biến của gia đình Việt Nam
            </p>

            {/* Biểu đồ 1: Cơ cấu quy mô hộ gia đình */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Cơ cấu quy mô hộ gia đình (1979 - 2019)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={familySizeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Tỉ lệ (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="1-2 người" stackId="a" fill="#0c4a6e" />
                    <Bar dataKey="3-4 người" stackId="a" fill="#0284c7" />
                    <Bar dataKey="5-6 người" stackId="a" fill="#7dd3fc" />
                    <Bar dataKey="7+ người" stackId="a" fill="#fde047" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <em>Nguồn: Tổng cục Thống kê Việt Nam (dữ liệu minh họa)</em>
              </p>
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Nhận xét:</strong> Quy mô hộ gia đình có xu hướng thu nhỏ qua các thời kỳ. 
                  Tỉ lệ hộ 1-2 người và 3-4 người tăng đáng kể, trong khi hộ đông thành viên (7+ người) 
                  giảm mạnh, phản ánh sự chuyển đổi từ gia đình đa thế hệ sang gia đình hạt nhân.
                </p>
              </div>
            </div>

            {/* Biểu đồ 2: Tỉ lệ lao động nữ */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Tỉ lệ lao động nữ (1990 - 2020)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={femaleLaborData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[45, 50]} label={{ value: 'Tỉ lệ (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="tỉLệ" 
                      stroke="#0c4a6e" 
                      strokeWidth={3}
                      dot={{ fill: '#0284c7', r: 6 }}
                      activeDot={{ r: 8 }}
                      name="Tỉ lệ lao động nữ (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <em>Nguồn: Tổng cục Thống kê Việt Nam (dữ liệu minh họa)</em>
              </p>
              <div className="mt-4 p-4 bg-accent-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Nhận xét:</strong> Tỉ lệ lao động nữ tại Việt Nam duy trì ở mức cao (gần 48-49%), 
                  cho thấy vai trò quan trọng của phụ nữ trong nền kinh tế. Tuy nhiên, vẫn còn khoảng cách 
                  về chất lượng việc làm, thu nhập và cơ hội thăng tiến so với nam giới.
                </p>
              </div>
            </div>

            {/* Biểu đồ 3: Kết hôn và Ly hôn */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Xu hướng kết hôn và ly hôn (2000 - 2020)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marriagesDivorcesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Đơn vị (nghìn vụ)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ketHon" fill="#0284c7" name="Kết hôn" />
                    <Bar dataKey="lyHon" fill="#facc15" name="Ly hôn" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <em>Nguồn: Tổng cục Thống kê (minh họa)</em>
              </p>
            </div>

            {/* Biểu đồ 4: Tỉ suất sinh (TFR) */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Tỉ suất sinh toàn phần – TFR (1990 - 2020)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={birthRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[1.8, 4]} label={{ value: 'Con/phụ nữ', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="tfr" stroke="#0c4a6e" strokeWidth={3} dot={{ r: 6, fill: '#0c4a6e' }} name="TFR" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <em>Nguồn: Tổng cục Thống kê (minh họa)</em>
              </p>
            </div>

            {/* Biểu đồ 5: Học vấn phụ nữ */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Trình độ học vấn của phụ nữ (cơ cấu %)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={womenEducationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} label>
                      {womenEducationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={eduColors[index % eduColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <em>Nguồn: Điều tra dân số và nhà ở (minh họa)</em>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section id="direction" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Phương hướng phát triển
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Các mốc lịch sử quan trọng trong chính sách gia đình Việt Nam
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-700 via-primary-500 to-accent-500"></div>

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-10 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-primary-700 rounded-full border-4 border-white shadow-lg transform -translate-x-3 md:-translate-x-3"></div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-accent-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trò chơi học tập */}
      <section id="games" className="py-16 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
                className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4"
              >
                <Gamepad2 className="w-12 h-12 text-accent-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trò chơi học tập
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                Kiểm tra và củng cố kiến thức của bạn thông qua các trò chơi tương tác thú vị
              </p>
            </div>

            {/* Game Mode Tabs */}
            <div className="flex justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGameMode('quiz')}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg ${
                  gameMode === 'quiz'
                    ? 'bg-white text-primary-900'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                🎯 Trắc nghiệm
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGameMode('flashcard')}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg ${
                  gameMode === 'flashcard'
                    ? 'bg-white text-primary-900'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                📇 Thẻ ghi nhớ
              </motion.button>
            </div>

            {/* Game Content */}
            <motion.div
              key={gameMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {gameMode === 'quiz' ? <QuizGame /> : <FlashcardGame />}
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold text-white text-lg mb-2">Học qua chơi</h3>
                <p className="text-primary-100 text-sm">
                  Phương pháp học tập hiệu quả, giúp ghi nhớ kiến thức lâu hơn
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-white text-lg mb-2">Tương tác cao</h3>
                <p className="text-primary-100 text-sm">
                  Trải nghiệm học tập chủ động, không nhàm chán
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-white text-lg mb-2">Kiểm tra ngay</h3>
                <p className="text-primary-100 text-sm">
                  Đánh giá mức độ hiểu biết và phát hiện điểm cần cải thiện
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="sources" className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Thông tin dự án</h3>
              <p className="text-primary-100 mb-2">
                <strong>Môn học:</strong> MLN131 – Những nguyên lý cơ bản của Chủ nghĩa Mác-Lênin
              </p>
              <p className="text-primary-100 mb-2">
                <strong>Chủ đề:</strong> Slot 10 – Gia đình trong thời kỳ quá độ lên CNXH
              </p>
              <p className="text-primary-100 mb-2">
                <strong>Năm học:</strong> 2025
              </p>
              <p className="text-primary-100">
                <strong>Định dạng:</strong> Trang web học thuật single-page
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Nguồn tài liệu</h3>
              <ul className="text-primary-100 space-y-2">
                <li>• Tài liệu giảng dạy MLN131 – Slot 10</li>
                <li>• Luật Hôn nhân và Gia đình Việt Nam</li>
                <li>• Tổng cục Thống kê Việt Nam</li>
                <li>• Chiến lược phát triển Gia đình Việt Nam đến 2030</li>
                <li>• Các công trình nghiên cứu khoa học về gia đình</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-600 pt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadPDF}
              className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-3 rounded-lg inline-flex items-center space-x-2 shadow-lg transition-colors mb-4"
            >
              <Download size={20} />
              <span>Tải PDF tài liệu</span>
            </motion.button>
            <p className="text-primary-200 text-sm">
              © 2025 MLN131 Project. Được phát triển với React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

