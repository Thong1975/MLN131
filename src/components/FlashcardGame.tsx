/**
 * Flashcard Game Component - Thẻ ghi nhớ kiến thức về Gia đình
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from 'lucide-react';

interface Flashcard {
  id: number;
  front: string;
  back: string;
  category: string;
}

const flashcards: Flashcard[] = [
  {
    id: 1,
    front: 'Gia đình là gì?',
    back: 'Tổ chức xã hội cơ bản nhất, được hình thành trên cơ sở quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng.',
    category: 'Khái niệm'
  },
  {
    id: 2,
    front: '5 chức năng cơ bản của gia đình',
    back: '1. Sinh đẻ\n2. Kinh tế\n3. Giáo dục\n4. Chăm sóc\n5. Văn hóa - tinh thần',
    category: 'Chức năng'
  },
  {
    id: 3,
    front: 'Gia đình hạt nhân',
    back: 'Mô hình gia đình gồm bố, mẹ và con cái (3-4 người). Chiếm 52% hộ gia đình Việt Nam, phổ biến nhất hiện nay.',
    category: 'Mô hình'
  },
  {
    id: 4,
    front: 'Gia đình mở rộng',
    back: 'Gia đình đa thế hệ gồm ông bà, bố mẹ, con cháu (7+ người). Chiếm 20%, còn phổ biến ở nông thôn.',
    category: 'Mô hình'
  },
  {
    id: 5,
    front: 'Giá trị truyền thống của gia đình VN',
    back: 'Hiếu thảo, Tương thân tương ái, Ơn nghĩa, Nhân nghĩa - gìn giữ và phát huy trong thời kỳ mới.',
    category: 'Giá trị'
  },
  {
    id: 6,
    front: 'Giá trị mới, tiến bộ',
    back: 'Bình đẳng giới, Dân chủ gia đình, Văn minh tiến bộ, Trách nhiệm xã hội - kết hợp với truyền thống.',
    category: 'Giá trị'
  },
  {
    id: 7,
    front: 'Nguyên tắc xây dựng gia đình',
    back: 'Hôn nhân tự nguyện, Bình đẳng vợ chồng, Một vợ một chồng, Tôn trọng yêu thương, Trách nhiệm nuôi con.',
    category: 'Nguyên tắc'
  },
  {
    id: 8,
    front: 'Thách thức chính hiện nay',
    back: 'Áp lực kinh tế, Biến đổi cơ cấu, Bất bình đẳng giới, Di cư lao động, Văn hóa ngoại lai, Già hóa dân số.',
    category: 'Thách thức'
  },
  {
    id: 9,
    front: 'Luật Hôn nhân và Gia đình 2014',
    back: 'Nâng cao vai trò bảo vệ quyền lợi trẻ em, phòng chống bạo lực gia đình, quy định rõ quyền và nghĩa vụ.',
    category: 'Pháp luật'
  },
  {
    id: 10,
    front: 'Xu hướng biến đổi gia đình',
    back: 'Quy mô giảm (5.1→3.6 người), Hạt nhân hóa tăng, Đa thế hệ giảm, Đơn thân tăng, Dân chủ hơn.',
    category: 'Xu hướng'
  }
];

export default function FlashcardGame() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(flashcards);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const card = cards[currentCard];
  const progress = ((currentCard + 1) / cards.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Thẻ {currentCard + 1}/{cards.length}</span>
          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
            {card.category}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective-1000 mb-6">
        <motion.div
          className="relative h-80 cursor-pointer"
          onClick={handleFlip}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl p-8 flex items-center justify-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-4">
                  {card.front}
                </p>
                <p className="text-primary-200 text-sm">
                  Nhấn để xem câu trả lời
                </p>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 backface-hidden bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl shadow-2xl p-8 flex items-center justify-center"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-center">
                <p className="text-xl text-white whitespace-pre-line leading-relaxed">
                  {card.back}
                </p>
                <p className="text-accent-100 text-sm mt-4">
                  Nhấn để lật ngược lại
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          disabled={currentCard === 0}
          className={`p-3 rounded-full shadow-lg transition-all ${
            currentCard === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-primary-700 hover:bg-primary-50'
          }`}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShuffle}
            className="px-6 py-3 bg-white text-primary-700 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
          >
            <Shuffle size={18} />
            <span className="font-semibold">Xáo trộn</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="px-6 py-3 bg-white text-primary-700 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
          >
            <RotateCcw size={18} />
            <span className="font-semibold">Bắt đầu lại</span>
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          disabled={currentCard === cards.length - 1}
          className={`p-3 rounded-full shadow-lg transition-all ${
            currentCard === cards.length - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-primary-700 hover:bg-primary-50'
          }`}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Tips */}
      <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <p className="text-sm text-blue-900">
          <strong>💡 Mẹo:</strong> Sử dụng thẻ ghi nhớ để ôn tập kiến thức một cách hiệu quả. 
          Hãy cố gắng nhớ câu trả lời trước khi lật thẻ!
        </p>
      </div>
    </div>
  );
}
