/**
 * Quiz Game Component - Trò chơi kiểm tra kiến thức về Gia đình trong CNXH
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Gia đình là gì theo quan điểm xã hội học?',
    options: [
      'Nhóm người sống chung trong một nhà',
      'Tổ chức xã hội cơ bản được hình thành trên cơ sở hôn nhân, huyết thống hoặc nuôi dưỡng',
      'Những người có quan hệ họ hàng',
      'Đơn vị kinh tế sản xuất'
    ],
    correctAnswer: 1,
    explanation: 'Gia đình là tổ chức xã hội cơ bản nhất, được hình thành trên cơ sở quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng.'
  },
  {
    id: 2,
    question: 'Theo Chủ tịch Hồ Chí Minh, điều kiện để xây dựng CNXH là gì?',
    options: [
      'Phát triển kinh tế',
      'Giải phóng phụ nữ',
      'Xóa bỏ giai cấp',
      'Công nghiệp hóa'
    ],
    correctAnswer: 1,
    explanation: '"Nếu không giải phóng phụ nữ thì không xây dựng được chủ nghĩa xã hội" - Chủ tịch Hồ Chí Minh'
  },
  {
    id: 3,
    question: 'Mô hình gia đình nào chiếm tỷ lệ cao nhất ở Việt Nam hiện nay?',
    options: [
      'Gia đình mở rộng (đa thế hệ)',
      'Gia đình hạt nhân (3-4 người)',
      'Gia đình đơn thân',
      'Gia đình không có con'
    ],
    correctAnswer: 1,
    explanation: 'Gia đình hạt nhân chiếm khoảng 52% tổng số hộ gia đình Việt Nam, là mô hình phổ biến nhất hiện nay.'
  },
  {
    id: 4,
    question: 'Quy mô trung bình hộ gia đình Việt Nam năm 2019 là bao nhiêu?',
    options: [
      '5.1 người',
      '4.2 người',
      '3.6 người',
      '2.8 người'
    ],
    correctAnswer: 2,
    explanation: 'Quy mô hộ gia đình đã giảm từ 5.1 người (1999) xuống 3.6 người (2019), phản ánh xu hướng gia đình hạt nhân hóa.'
  },
  {
    id: 5,
    question: 'Chức năng nào KHÔNG phải là chức năng cơ bản của gia đình?',
    options: [
      'Chức năng sinh đẻ',
      'Chức năng giáo dục',
      'Chức năng sản xuất công nghiệp',
      'Chức năng kinh tế'
    ],
    correctAnswer: 2,
    explanation: 'Gia đình có 5 chức năng cơ bản: sinh đẻ, kinh tế, giáo dục, chăm sóc và văn hóa-tinh thần. Sản xuất công nghiệp không phải chức năng cơ bản của gia đình.'
  },
  {
    id: 6,
    question: 'Luật Hôn nhân và Gia đình hiện hành của Việt Nam được ban hành năm nào?',
    options: [
      '2000',
      '2010',
      '2014',
      '2020'
    ],
    correctAnswer: 2,
    explanation: 'Luật Hôn nhân và Gia đình 2014 là luật hiện hành, nâng cao vai trò bảo vệ quyền lợi trẻ em và phòng chống bạo lực gia đình.'
  },
  {
    id: 7,
    question: 'Giá trị nào là giá trị truyền thống của gia đình Việt Nam?',
    options: [
      'Bình đẳng giới',
      'Hiếu thảo',
      'Dân chủ gia đình',
      'Tư duy hiện đại'
    ],
    correctAnswer: 1,
    explanation: 'Hiếu thảo là giá trị truyền thống cốt lõi của gia đình Việt Nam, thể hiện sự tôn kính ông bà, cha mẹ và thờ cúng tổ tiên.'
  },
  {
    id: 8,
    question: 'Xu hướng ly hôn ở Việt Nam trong 20 năm qua (2000-2020) như thế nào?',
    options: [
      'Giảm mạnh',
      'Không đổi',
      'Tăng dần',
      'Dao động không ổn định'
    ],
    correctAnswer: 2,
    explanation: 'Số vụ ly hôn tăng từ khoảng 120 nghìn vụ (2000) lên 260 nghìn vụ (2020), phản ánh thay đổi trong quan niệm hôn nhân.'
  }
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Đã chọn rồi

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameFinished(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return { title: 'Xuất sắc! 🏆', message: 'Bạn đã nắm vững kiến thức về gia đình trong thời kỳ quá độ lên CNXH!' };
    if (percentage >= 75) return { title: 'Rất tốt! 🌟', message: 'Bạn có hiểu biết tốt về chủ đề này. Tiếp tục phát huy!' };
    if (percentage >= 50) return { title: 'Khá! 👍', message: 'Bạn đã nắm được một số kiến thức cơ bản. Hãy học thêm nhé!' };
    return { title: 'Cần cố gắng hơn! 📚', message: 'Hãy đọc lại tài liệu để hiểu rõ hơn về chủ đề này.' };
  };

  if (gameFinished) {
    const scoreMsg = getScoreMessage();
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <Trophy className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-primary-900 mb-2">{scoreMsg.title}</h2>
          <p className="text-xl text-gray-700 mb-6">{scoreMsg.message}</p>
          
          <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-2">Điểm số của bạn:</p>
            <p className="text-5xl font-bold text-primary-900">
              {score}/{quizQuestions.length}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              ({((score / quizQuestions.length) * 100).toFixed(0)}%)
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRestart}
            className="bg-gradient-to-r from-primary-700 to-primary-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center space-x-2"
          >
            <RotateCcw size={20} />
            <span>Chơi lại</span>
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Câu hỏi {currentQuestion + 1}/{quizQuestions.length}</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-6"
        >
          <h3 className="text-2xl font-bold text-primary-900 mb-6">
            {question.question}
          </h3>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                    showCorrect
                      ? 'bg-green-100 border-2 border-green-500 text-green-900'
                      : showWrong
                      ? 'bg-red-100 border-2 border-red-500 text-red-900'
                      : isSelected
                      ? 'bg-primary-100 border-2 border-primary-500'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                  } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle className="text-green-600" size={24} />}
                    {showWrong && <XCircle className="text-red-600" size={24} />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
              >
                <p className="text-sm font-semibold text-blue-900 mb-1">Giải thích:</p>
                <p className="text-sm text-blue-800">{question.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Next Button */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="bg-gradient-to-r from-primary-700 to-primary-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center space-x-2"
          >
            <span>{currentQuestion < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}


