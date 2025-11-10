import { motion } from 'framer-motion';

export default function SourcesPage() {

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
              Nguồn tài liệu & Tham khảo
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tài liệu tham khảo và nguồn thông tin cho nghiên cứu về gia đình Việt Nam
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Tài liệu PDF gốc
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Xem trực tiếp tài liệu MLN131 – Slot 10 bên dưới hoặc bấm nút "Tải PDF tài liệu".
            </p>
            
            <div className="text-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadPDF}
                className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-3 rounded-lg inline-flex items-center space-x-2 shadow-lg transition-colors"
              >
                <Download size={20} />
                <span>Tải PDF tài liệu</span>
              </motion.button>
            </div>

            <div className="w-full h-[70vh] border border-gray-200 rounded-lg overflow-hidden shadow">
              <iframe 
                src={pdfPath} 
                title="MLN131 - Slot 10 PDF" 
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section> */}


      {/* Nguồn tài liệu tham khảo */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
              Tài liệu tham khảo
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">📚 Tài liệu chính</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-primary-600">
                    <h4 className="font-semibold text-primary-800">
                      <a 
                        href="https://www.canva.com/design/DAGNyVEAP5M/9ewLCix8B5KEusftCq9ysA/edit" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-amber-700 underline"
                      >Tài liệu giảng dạy MLN131 – Slot 10</a>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">Nguồn chính thức từ chương trình giảng dạy</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent-50 to-transparent p-4 rounded-lg border-l-4 border-accent-600">
                    <h4 className="font-semibold text-primary-800">
                       <a 
                        href="https://thuvienphapluat.vn/van-ban/Quyen-dan-su/Luat-Hon-nhan-va-gia-dinh-2014-238640.aspx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-amber-700 underline"
                      >Luật Hôn nhân và Gia đình Việt Nam</a>
                      </h4>
                    <p className="text-sm text-gray-600 mt-1">Khung pháp lý về gia đình (2014, sửa đổi 2020)</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-primary-600">
                    <h4 className="font-semibold text-primary-800">
                       <a 
                        href="https://thuvienphapluat.vn/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-amber-700 underline"
                      >Chiến lược phát triển Gia đình Việt Nam đến 2030</a>
                      </h4>
                    <p className="text-sm text-gray-600 mt-1">Định hướng chính sách gia đình trong thời kỳ mới</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">📊 Nguồn dữ liệu</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-primary-800">
                      <a 
                        href="https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/01/thong-cao-bao-chi-ket-qua-dieu-tra-dan-so-va-nha-o-giua-ky-nam-2024/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 underline"
                      >
                        Tổng cục Thống kê Việt Nam
                      </a>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">Dữ liệu điều tra dân số và nhà ở giữa kỳ năm 2024</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-primary-800">
                      <a 
                        href="https://ihfgs.vass.gov.vn/Pages/TrangChu.aspx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-green-700 underline"
                      >
                        Viện Xã hội học
                      </a>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">Các nghiên cứu về gia đình Việt Nam</p>
                  </div>
                  
                  {/* <div className="bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-primary-800">Bộ Lao động - Thương binh và Xã hội</h4>
                    <p className="text-sm text-gray-600 mt-1">Báo cáo về tình hình gia đình Việt Nam</p>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tài liệu mở rộng */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
              Tài liệu mở rộng
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Các nguồn tham khảo bổ sung để tìm hiểu sâu hơn về chủ đề
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md border border-primary-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Sách giáo khoa
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chủ nghĩa Mác-Lênin về gia đình</li>
                  <li>• Xã hội học gia đình</li>
                  <li>• Lịch sử gia đình Việt Nam</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-accent-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Nghiên cứu khoa học
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tạp chí Xã hội học</li>
                  <li>• Tạp chí Gia đình và Phát triển</li>
                  <li>• Kỷ yếu hội thảo khoa học</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md border border-purple-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Nguồn trực tuyến
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Portal Thông tin điện tử Chính phủ</li>
                  <li>• Cổng thông tin Bộ LĐ-TB&XH</li>
                  <li>• Website Tổng cục Thống kê</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
