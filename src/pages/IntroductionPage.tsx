import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Placeholder images
const escapeForSVGText = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const createPlaceholderSVG = (text: string, bgColor: string) => {
  const safeText = escapeForSVGText(text);
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="${bgColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-family="Arial, sans-serif" font-size="32" fill="white">
        ${safeText}
      </text>
    </svg>
  `)}`;
};

const familyHero = createPlaceholderSVG('👨‍👩‍👧‍👦 Gia đình Việt Nam', '#0c4a6e');
const familyTradition = createPlaceholderSVG('🏛️ Gia đình truyền thống', '#0284c7');
const policyLaw = createPlaceholderSVG('⚖️ Chính sách & Pháp luật', '#0c4a6e');
const cultureFamily = createPlaceholderSVG('🎭 Văn hóa gia đình', '#0284c7');

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
      <section className="py-16 px-4 bg-white">
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

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-l-4 border-primary-700 mt-8">
                <h3 className="font-semibold text-lg text-primary-900 mb-3">🎯 Mục tiêu của trang web này:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Cung cấp kiến thức toàn diện về gia đình trong thời kỳ quá độ lên CNXH</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Phân tích các biến đổi của gia đình Việt Nam qua các thời kỳ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Đưa ra định hướng phát triển gia đình trong tương lai</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Hỗ trợ học tập môn MLN131 thông qua trò chơi tương tác</span>
                  </li>
                </ul>
              </div>
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
    </div>
  );
}
