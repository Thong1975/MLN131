import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

const familyNuclear = createPlaceholderSVG('👨‍👩‍👧 Gia đình hạt nhân', '#0c4a6e');
const familyExtended = createPlaceholderSVG('👨‍👩‍👧‍👦‍👴‍👵 Gia đình mở rộng', '#0284c7');
const familySingleParent = createPlaceholderSVG('👨‍👧 Gia đình đơn thân', '#7c3aed');
const infographicValues = createPlaceholderSVG('💎 Giá trị cốt lõi', '#0c4a6e');

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Lý thuyết chính
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nền tảng lý luận về gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lý thuyết chính */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
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

              <AccordionItem title="IV. Vai trò của gia đình Việt Nam trong xây dựng chủ nghĩa xã hội">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">1. Gia đình là tế bào cơ bản của xã hội xã hội chủ nghĩa</h4>
                    <p>
                      Gia đình không chỉ là đơn vị nhỏ nhất của xã hội mà còn là nền tảng vững chắc để xây dựng 
                      xã hội chủ nghĩa. Một xã hội chủ nghĩa vững mạnh phải được xây dựng từ những gia đình ấm no, 
                      bình đẳng, tiến bộ, hạnh phúc. Gia đình khỏe mạnh tạo ra những công dân tốt, góp phần xây dựng 
                      xã hội văn minh, tiến bộ.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">2. Đóng góp của gia đình trong xây dựng xã hội chủ nghĩa</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Về kinh tế:</strong> Gia đình là đơn vị sản xuất, tiêu dùng quan trọng, góp phần phát triển 
                        kinh tế xã hội chủ nghĩa. Các gia đình tham gia vào các hoạt động sản xuất, kinh doanh, tạo ra của cải 
                        vật chất cho xã hội, đồng thời là thị trường tiêu thụ quan trọng, thúc đẩy sản xuất phát triển.
                      </li>
                      <li>
                        <strong>Về văn hóa – xã hội:</strong> Gia đình là nơi gìn giữ, phát huy giá trị văn hóa dân tộc, 
                        truyền thống tốt đẹp của dân tộc Việt Nam. Thông qua giáo dục gia đình, các giá trị đạo đức, lối sống 
                        văn minh được hình thành và lan tỏa ra xã hội, góp phần xây dựng nền văn hóa xã hội chủ nghĩa tiên tiến, 
                        đậm đà bản sắc dân tộc.
                      </li>
                      <li>
                        <strong>Về giáo dục – đào tạo:</strong> Gia đình là môi trường giáo dục đầu tiên và quan trọng nhất, 
                        hình thành nhân cách, đạo đức, tư tưởng cho thế hệ trẻ. Gia đình giáo dục con cái trở thành những công dân 
                        có đức, có tài, có trách nhiệm với xã hội, góp phần xây dựng đội ngũ lao động chất lượng cao cho đất nước.
                      </li>
                      <li>
                        <strong>Về an sinh xã hội:</strong> Gia đình thực hiện chức năng chăm sóc, bảo vệ các thành viên, đặc biệt 
                        là trẻ em, người già, người khuyết tật. Điều này góp phần giảm gánh nặng cho xã hội, tạo nền tảng cho hệ thống 
                        an sinh xã hội toàn diện, nhân văn.
                      </li>
                      <li>
                        <strong>Về ổn định xã hội:</strong> Gia đình ấm no, hạnh phúc là yếu tố quan trọng đảm bảo ổn định chính trị, 
                        trật tự an toàn xã hội. Những gia đình vững mạnh tạo ra môi trường sống lành mạnh, giảm thiểu các tệ nạn xã hội, 
                        góp phần xây dựng xã hội hòa bình, ổn định, phát triển.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">3. Gia đình và mối quan hệ với xây dựng xã hội chủ nghĩa</h4>
                    <p className="mb-2">
                      Xây dựng xã hội chủ nghĩa và xây dựng gia đình có mối quan hệ biện chứng, tác động qua lại lẫn nhau:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        <strong>Xã hội chủ nghĩa tạo điều kiện cho gia đình phát triển:</strong> Chế độ xã hội chủ nghĩa với 
                        hệ thống pháp luật tiến bộ, chính sách hỗ trợ toàn diện tạo môi trường thuận lợi để gia đình phát triển 
                        về mọi mặt.
                      </li>
                      <li>
                        <strong>Gia đình góp phần xây dựng xã hội chủ nghĩa:</strong> Mỗi gia đình ấm no, hạnh phúc, văn minh 
                        là một viên gạch vững chắc trong công cuộc xây dựng xã hội chủ nghĩa. Gia đình càng phát triển, xã hội 
                        chủ nghĩa càng vững mạnh.
                      </li>
                      <li>
                        <strong>Mối quan hệ tương hỗ:</strong> Xã hội chủ nghĩa càng phát triển, điều kiện sống của gia đình càng 
                        được cải thiện. Ngược lại, gia đình càng ổn định, phát triển, đóng góp cho xã hội càng lớn, thúc đẩy xã hội 
                        chủ nghĩa phát triển nhanh và bền vững.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">4. Trách nhiệm của gia đình trong xây dựng xã hội chủ nghĩa</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Thực hiện đầy đủ các chức năng của gia đình: sinh đẻ, kinh tế, giáo dục, chăm sóc, văn hóa</li>
                      <li>Giáo dục con cái trở thành công dân tốt, có đức, có tài, có trách nhiệm với xã hội</li>
                      <li>Tham gia tích cực vào các phong trào xây dựng xã hội: xây dựng nông thôn mới, đô thị văn minh, gia đình văn hóa</li>
                      <li>Gìn giữ và phát huy giá trị văn hóa truyền thống, tiếp thu tinh hoa văn hóa nhân loại</li>
                      <li>Thực hiện tốt chính sách dân số, kế hoạch hóa gia đình, bảo vệ môi trường</li>
                      <li>Đoàn kết, tương thân tương ái, giúp đỡ các gia đình khó khăn, góp phần xây dựng xã hội công bằng, nhân ái</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 border-l-4 border-primary-700 mt-4">
                    <p className="text-sm text-gray-800 italic">
                      <strong>Kết luận:</strong> Gia đình Việt Nam không chỉ là đối tượng được xây dựng trong thời kỳ quá độ lên 
                      chủ nghĩa xã hội mà còn là chủ thể tích cực, đóng vai trò quan trọng trong việc xây dựng xã hội chủ nghĩa. 
                      Xây dựng gia đình ấm no, bình đẳng, tiến bộ, hạnh phúc, văn minh vừa là mục tiêu, vừa là động lực, vừa là 
                      điều kiện để xây dựng thành công xã hội chủ nghĩa ở Việt Nam.
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
    </div>
  );
}
