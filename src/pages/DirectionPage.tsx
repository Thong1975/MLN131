import { motion } from 'framer-motion';

// Timeline: Các mốc phát triển chính sách gia đình
const timelineData = [
  {
    year: '1945',
    title: 'Tuyên ngôn độc lập',
    description: 'Khẳng định quyền bình đẳng nam nữ trong xã hội mới. Đặt nền tảng cho nhân quyền con người trong Việt Nam độc lập.',
    highlight: 'Tuyên ngôn độc lập của Hồ Chí Minh: "Tất cả mọi người sinh ra đều có quyền bình đẳng"'
  },
  {
    year: '1950',
    title: 'Luật Hôn nhân và Gia đình đầu tiên',
    description: 'Cấm hôn nhân cưỡng bức, chế độ đa thê, bảo vệ quyền lợi phụ nữ và trẻ em. Đánh dấu bước ngoặt trong lịch sử pháp luật gia đình.',
    highlight: 'Lần đầu tiên pháp luật xã hội chủ nghĩa quy định hôn nhân phải tự nguyện, một vợ một chồng'
  },
  {
    year: '1959',
    title: 'Luật Hôn nhân và Gia đình (sửa đổi)',
    description: 'Hoàn thiện khung pháp lý về hôn nhân tự do, bình đẳng giữa vợ chồng. Cải thiện quyền lợi của phụ nữ và trẻ em.',
    highlight: 'Khẳng định bình đẳng giữa nam và nữ trong mọi lĩnh vực của gia đình'
  },
  {
    year: '1986',
    title: 'Đổi mới kinh tế',
    description: 'Chuyển sang cơ chế thị trường định hướng xã hội chủ nghĩa, tác động sâu sắc đến cơ cấu, chức năng của gia đình Việt Nam.',
    highlight: 'Sự chuyển biến từ gia đình đa thế hệ sang gia đình hạt nhân'
  },
  {
    year: '2000',
    title: 'Luật Hôn nhân và Gia đình 2000',
    description: 'Bổ sung quy định về quan hệ tài sản vợ chồng, quyền nuôi con sau ly hôn. Bảo vệ quyền lợi trẻ em toàn diện.',
    highlight: 'Coi trọng quyền tài sản của phụ nữ và bảo vệ trẻ em trong trường hợp ly hôn'
  },
  {
    year: '2014',
    title: 'Luật Hôn nhân và Gia đình 2014',
    description: 'Nâng cao vai trò bảo vệ quyền lợi trẻ em, phòng chống bạo lực gia đình. Quy định chi tiết hơn về nuôi con sau ly hôn.',
    highlight: 'Lần đầu tiên quy định cụ thể về phòng chống bạo lực gia đình, bảo vệ phụ nữ và trẻ em'
  },
  {
    year: '2015',
    title: 'Nghị quyết 33-NQ/TW về Gia đình',
    description: 'Đảng Cộng sản Việt Nam ban hành Nghị quyết toàn diện về gia đình, xác định gia đình là "tế bào cơ bản của xã hội".',
    highlight: 'Xác định mục tiêu xây dựng gia đình Việt Nam ấm no, bình đẳng, tiến bộ, hạnh phúc'
  },
  {
    year: '2022',
    title: 'Chiến lược Gia đình đến 2030',
    description: 'Định hướng xây dựng gia đình ấm no, tiến bộ, hạnh phúc, văn minh trong thời kỳ mới và hội nhập quốc tế.',
    highlight: 'Hướng tới Gia đình 4.0, kết hợp truyền thống và công nghệ'
  },
];

export default function DirectionPage() {
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
              Phương hướng phát triển
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Các mốc lịch sử quan trọng trong chính sách gia đình Việt Nam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
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

      {/* Định hướng tương lai */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Định hướng phát triển gia đình Việt Nam đến 2030
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Tầm nhìn và mục tiêu xây dựng gia đình trong thời kỳ mới
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-200">
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Mục tiêu tổng quát
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Xây dựng gia đình Việt Nam ấm no, bình đẳng, tiến bộ, hạnh phúc và văn minh, 
                  là nền tảng vững chắc cho sự phát triển bền vững của đất nước.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Gia đình là tế bào khỏe mạnh của xã hội</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Thực hiện đầy đủ các chức năng cơ bản</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>Gìn giữ và phát huy giá trị văn hóa truyền thống</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-accent-200">
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  Chỉ tiêu cụ thể
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>Tỉ lệ gia đình ấm no:</span>
                    <span className="font-semibold text-primary-700">≥ 85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tỉ lệ gia đình văn hóa:</span>
                    <span className="font-semibold text-primary-700">≥ 90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tỉ lệ bạo lực gia đình:</span>
                    <span className="font-semibold text-red-600">≤ 5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tỉ lệ ly hôn:</span>
                    <span className="font-semibold text-yellow-600">Kiểm soát ≤ 3%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Các nhiệm vụ trọng tâm */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Hoàn thiện thể chế, chính sách
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Xây dựng hệ thống pháp luật đồng bộ, toàn diện về gia đình. 
                  Hoàn thiện các chính sách hỗ trợ gia đình trong các lĩnh vực 
                  nhà ở, giáo dục, y tế, an sinh xã hội.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-white to-accent-50 border border-accent-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Nâng cao đời sống kinh tế
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tạo điều kiện cho gia đình tham gia phát triển kinh tế. 
                  Hỗ trợ gia đình khởi nghiệp, phát triển kinh tế gia đình. 
                  Đảm bảo an sinh xã hội cho các gia đình khó khăn.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Giáo dục và văn hóa gia đình
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tăng cường giáo dục về hôn nhân, gia đình. Xây dựng văn hóa 
                  gia đình lành mạnh, tiến bộ. Phòng chống các tệ nạn xã hội 
                  trong gia đình.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Bình đẳng giới trong gia đình
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Thúc đẩy bình đẳng giới trong mọi hoạt động gia đình. 
                  Nâng cao vai trò, vị thế của phụ nữ. Phòng chống bạo lực 
                  trên cơ sở giới trong gia đình.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Chăm sóc và bảo vệ trẻ em
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Đảm bảo quyền lợi tốt nhất cho trẻ em trong gia đình. 
                  Phòng chống bạo lực, xâm hại trẻ em. Hỗ trợ gia đình 
                  trong nuôi dưỡng, giáo dục con cái.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">👴</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Chăm sóc người cao tuổi
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Phát huy truyền thống hiếu thảo, tôn kính người già. 
                  Hỗ trợ gia đình chăm sóc người cao tuổi. Phát triển 
                  dịch vụ chăm sóc người già tại cộng đồng.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Giải pháp thực hiện */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Giải pháp thực hiện
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Các biện pháp cụ thể để đạt được mục tiêu phát triển gia đình
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-l-4 border-primary-700">
                <h3 className="font-semibold text-lg text-primary-900 mb-3">
                  🏛️ Vai trò của Nhà nước
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Hoàn thiện hệ thống pháp luật về gia đình, bảo đảm tính đồng bộ, thống nhất</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Đầu tư ngân sách cho các chương trình, dự án hỗ trợ gia đình</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Tăng cường thanh tra, kiểm tra việc thực hiện chính sách gia đình</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 border-l-4 border-accent-600">
                <h3 className="font-semibold text-lg text-primary-900 mb-3">
                  🤝 Vai trò của xã hội
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Các tổ chức chính trị - xã hội tham gia tuyên truyền, vận động</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Doanh nghiệp thực hiện trách nhiệm xã hội với gia đình người lao động</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Cộng đồng xây dựng môi trường sống lành mạnh, an toàn cho gia đình</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="font-semibold text-lg text-primary-900 mb-3">
                  👨‍👩‍👧‍👦 Vai trò của gia đình
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Tự giác thực hiện pháp luật, quy định về hôn nhân và gia đình</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Không ngừng học tập, nâng cao kiến thức về xây dựng gia đình</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Xây dựng gia đình dân chủ, bình đẳng, ấm no, hạnh phúc</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}