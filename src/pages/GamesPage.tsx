import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import QuizGame from '../components/QuizGame';
import FlashcardGame from '../components/FlashcardGame';

export default function GamesPage() {
  const [gameMode, setGameMode] = useState<'quiz' | 'flashcard'>('quiz');

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 relative overflow-hidden pt-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 py-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4"
            >
              <Gamepad2 className="w-12 h-12 text-accent-300" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trò chơi học tập
            </h1>
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

          {/* Game Statistics */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Thống kê trò chơi
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-accent-300 mb-2">25+</div>
                  <p className="text-primary-100 text-sm">Câu hỏi trắc nghiệm</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-accent-300 mb-2">20+</div>
                  <p className="text-primary-100 text-sm">Thẻ ghi nhớ</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-accent-300 mb-2">5</div>
                  <p className="text-primary-100 text-sm">Chủ đề chính</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-accent-300 mb-2">∞</div>
                  <p className="text-primary-100 text-sm">Lần chơi không giới hạn</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Game Tips */}
          <section className="pb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Mẹo chơi hiệu quả
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="font-bold text-white text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Trắc nghiệm
                  </h3>
                  <ul className="space-y-2 text-primary-100 text-sm">
                    <li>• Đọc kỹ câu hỏi trước khi chọn đáp án</li>
                    <li>• Loại trừ các đáp án sai trước</li>
                    <li>• Chú ý từ khóa trong câu hỏi</li>
                    <li>• Không vội vàng, suy nghĩ cẩn thận</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="font-bold text-white text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">📇</span>
                    Thẻ ghi nhớ
                  </h3>
                  <ul className="space-y-2 text-primary-100 text-sm">
                    <li>• Đọc thuật ngữ và suy nghĩ định nghĩa</li>
                    <li>• Click để xem đáp án và so sánh</li>
                    <li>• Lặp lại nhiều lần để ghi nhớ</li>
                    <li>• Tập trung vào những thẻ khó nhớ</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
