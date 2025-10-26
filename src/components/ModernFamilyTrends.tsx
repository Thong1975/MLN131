/**
 * Modern Family Trends - Xu hướng gia đình hiện đại Gen Z & Millennials
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Users, Heart, Briefcase, Home, TrendingUp } from 'lucide-react';

const modernTrends = [
  {
    icon: Smartphone,
    title: 'Kết nối số',
    description: 'Gen Z sử dụng công nghệ để duy trì mối quan hệ gia đình, video call, nhóm chat gia đình',
    stat: '85%',
    label: 'dùng mạng xã hội kết nối gia đình'
  },
  {
    icon: Users,
    title: 'Gia đình đa dạng',
    description: 'Chấp nhận nhiều mô hình: đơn thân, LGBTQ+, đa văn hóa, sống thử trước hôn nhân',
    stat: '68%',
    label: 'Gen Z ủng hộ hôn nhân bình đẳng'
  },
  {
    icon: Heart,
    title: 'Sức khỏe tâm lý',
    description: 'Ưu tiên mental health, tìm kiếm tư vấn tâm lý cho quan hệ gia đình, therapy không còn kỳ thị',
    stat: '73%',
    label: 'coi trọng sức khỏe tinh thần'
  },
  {
    icon: Briefcase,
    title: 'Cân bằng công việc',
    description: 'Work-life balance, làm việc từ xa, flexible hours để dành thời gian cho gia đình',
    stat: '79%',
    label: 'muốn làm việc linh hoạt'
  },
  {
    icon: Home,
    title: 'Sống độc lập muộn',
    description: 'Millennials & Gen Z sống với bố mẹ lâu hơn do chi phí nhà ở cao, không còn bị kỳ thị',
    stat: '52%',
    label: 'sống với bố mẹ đến 25 tuổi'
  },
  {
    icon: TrendingUp,
    title: 'Kết hôn muộn',
    description: 'Ưu tiên sự nghiệp, học vấn trước. Tuổi kết hôn trung bình: nam 30+, nữ 28+',
    stat: '30.2',
    label: 'tuổi kết hôn trung bình (nam)'
  }
];

const genZValues = [
  {
    emoji: '🌱',
    title: 'Bền vững',
    description: 'Quan tâm môi trường, sống xanh, tiêu dùng có trách nhiệm cho thế hệ tương lai'
  },
  {
    emoji: '⚖️',
    title: 'Bình đẳng tuyệt đối',
    description: 'Chia sẻ việc nhà 50/50, cùng nuôi con, không phân biệt "việc nam/nữ"'
  },
  {
    emoji: '💰',
    title: 'Độc lập tài chính',
    description: 'Cả 2 vợ chồng đều có sự nghiệp, tài khoản riêng, quyết định chung về tài chính'
  },
  {
    emoji: '🎓',
    title: 'Giáo dục tiến bộ',
    description: 'Nuôi dạy con theo phương pháp mới: tôn trọng, không bạo lực, khuyến khích sáng tạo'
  },
  {
    emoji: '🌍',
    title: 'Toàn cầu hóa',
    description: 'Mở cửa với văn hóa quốc tế, con học ngoại ngữ sớm, du lịch trải nghiệm'
  },
  {
    emoji: '🤝',
    title: 'Cộng đồng',
    description: 'Tham gia hoạt động xã hội, volunteer, dạy con giá trị nhân văn và từ thiện'
  }
];

export default function ModernFamilyTrends() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
            🔥 TRENDING 2024-2025
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Gia đình thế hệ mới
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gen Z & Millennials đang định hình lại khái niệm gia đình với những giá trị và cách sống hoàn toàn mới
          </p>
        </motion.div>
      </div>

      {/* Modern Trends Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modernTrends.map((trend, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <trend.icon className="text-white" size={24} />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {trend.stat}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {trend.label}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {trend.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {trend.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Gen Z Values */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            6 Giá trị cốt lõi của gia đình Gen Z
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genZValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-3">{value.emoji}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Statistics Comparison */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white"
        >
          <div className="text-5xl font-bold mb-2">2.1</div>
          <div className="text-xl font-semibold mb-2">con/gia đình</div>
          <div className="text-sm opacity-90">Trung bình Gen Z (giảm từ 3.6 của bố mẹ)</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
        >
          <div className="text-5xl font-bold mb-2">45%</div>
          <div className="text-xl font-semibold mb-2">chọn không con</div>
          <div className="text-sm opacity-90">Millennials/Gen Z cân nhắc childfree</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white"
        >
          <div className="text-5xl font-bold mb-2">92%</div>
          <div className="text-xl font-semibold mb-2">dùng mạng xã hội</div>
          <div className="text-sm opacity-90">Gen Z chia sẻ cuộc sống gia đình online</div>
        </motion.div>
      </div>

      {/* Challenges của Gen Z */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          ⚠️ Thách thức thế hệ mới
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
              <span className="text-2xl">💸</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Khủng hoảng kinh tế
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Giá nhà cao, lương thấp, không đủ tiền kết hôn/sinh con
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
              <span className="text-2xl">😰</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Áp lực xã hội
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Social media, so sánh, FOMO, burnout, anxiety về tương lai
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏡</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Khủng hoảng nhà ở
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Không thể mua nhà, phải thuê hoặc sống với bố mẹ lâu dài
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Thiếu thời gian
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Làm việc nhiều, side hustle, không có thời gian cho gia đình
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


