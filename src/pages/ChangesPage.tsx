import { motion } from 'framer-motion';
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
import ModernFamilyTrends from '../components/ModernFamilyTrends';

// Dữ liệu biểu đồ
const familySizeData = [
  { year: '1979', '1-2 người': 8, '3-4 người': 32, '5-6 người': 38, '7+ người': 22 },
  { year: '1989', '1-2 người': 12, '3-4 người': 35, '5-6 người': 35, '7+ người': 18 },
  { year: '1999', '1-2 người': 16, '3-4 người': 42, '5-6 người': 30, '7+ người': 12 },
  { year: '2009', '1-2 người': 22, '3-4 người': 48, '5-6 người': 23, '7+ người': 7 },
  { year: '2019', '1-2 người': 28, '3-4 người': 52, '5-6 người': 16, '7+ người': 4 },
];

const femaleLaborData = [
  { year: '1990', tỉLệ: 48.5, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2000', tỉLệ: 49.2, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2010', tỉLệ: 48.8, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2015', tỉLệ: 48.4, name: 'Tỉ lệ lao động nữ (%)' },
  { year: '2020', tỉLệ: 47.9, name: 'Tỉ lệ lao động nữ (%)' },
];

const marriagesDivorcesData = [
  { year: '2000', ketHon: 980, lyHon: 120 },
  { year: '2005', ketHon: 960, lyHon: 150 },
  { year: '2010', ketHon: 940, lyHon: 190 },
  { year: '2015', ketHon: 910, lyHon: 230 },
  { year: '2020', ketHon: 880, lyHon: 260 },
];

const birthRateData = [
  { year: '1990', tfr: 3.6 },
  { year: '2000', tfr: 2.3 },
  { year: '2010', tfr: 2.0 },
  { year: '2015', tfr: 2.1 },
  { year: '2020', tfr: 2.05 },
  // Cập nhật theo Thông cáo DSGK 2024 (NSO)
  { year: '2023', tfr: 1.96 },
  { year: '2024', tfr: 1.91 },
];

const womenEducationData = [
  { name: 'Tiểu học trở xuống', value: 18 },
  { name: 'THCS', value: 32 },
  { name: 'THPT', value: 28 },
  { name: 'TC/CĐ/ĐH+', value: 22 },
];
const eduColors = ['#7dd3fc', '#0284c7', '#0c4a6e', '#fde047'];

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

export default function ChangesPage() {
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
              Biến đổi qua các thời kỳ
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Dữ liệu thống kê về sự chuyển biến của gia đình Việt Nam
            </p>
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

            {/* <figure className="mb-10">
              <img 
                src={comparisonChart} 
                alt="So sánh gia đình truyền thống và hiện đại" 
                className="w-full h-auto rounded-xl shadow-2xl border border-gray-200"
                loading="lazy"
              />
              <figcaption className="mt-4 text-center text-sm text-gray-600">
                Biểu đồ so sánh: Gia đình truyền thống vs Gia đình hiện đại Việt Nam
              </figcaption>
            </figure> */}

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

      {/* Biểu đồ minh họa */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">
              Dữ liệu thống kê
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Số liệu minh chứng cho sự biến đổi của gia đình Việt Nam
            </p>

            {/* Key facts 2024 – Nguồn chính thức NSO */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-10">
              <h3 className="text-xl font-semibold text-primary-900 mb-4 text-center">
                Kết quả Điều tra Dân số và Nhà ở giữa kỳ 2024 – Các chỉ số chính
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                  <div className="text-2xl font-bold text-primary-900">101.112.656</div>
                  <div className="text-gray-700">Dân số Việt Nam (01/4/2024)</div>
                  <div className="text-gray-500 mt-1">Nam 49,8% • Nữ 50,2%</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                  <div className="text-2xl font-bold text-primary-900">38,2% / 61,8%</div>
                  <div className="text-gray-700">Tỷ trọng thành thị / nông thôn</div>
                  <div className="text-gray-500 mt-1">Tăng dân số đô thị 3,06%/năm (2019–2024)</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                  <div className="text-2xl font-bold text-primary-900">28.146.939</div>
                  <div className="text-gray-700">Số hộ dân cư</div>
                  <div className="text-gray-500 mt-1">Ước tính quy mô hộ ≈ 3,59 người/hộ</div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4 border border-accent-100">
                  <div className="text-2xl font-bold text-primary-900">1,91</div>
                  <div className="text-gray-700">TFR – con/phụ nữ (2024)</div>
                  <div className="text-gray-500 mt-1">2023: 1,96 → 2024: 1,91</div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4 border border-accent-100">
                  <div className="text-2xl font-bold text-primary-900">74,7</div>
                  <div className="text-gray-700">Tuổi thọ bình quân (năm 2024)</div>
                  <div className="text-gray-500 mt-1">Nam 72,3 • Nữ 77,3</div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4 border border-accent-100">
                  <div className="text-2xl font-bold text-primary-900">60,2%</div>
                  <div className="text-gray-700">Chỉ số già hóa (2024)</div>
                  <div className="text-gray-500 mt-1">Người 60+ 14,2 triệu</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="text-2xl font-bold text-primary-900">111,4</div>
                  <div className="text-gray-700">Bé trai/100 bé gái khi sinh (SRB)</div>
                  <div className="text-gray-500 mt-1">Mất cân bằng giới tính khi sinh còn cao</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="text-2xl font-bold text-primary-900">13,5‰ / 5,6‰</div>
                  <div className="text-gray-700">CBR / CDR (2024)</div>
                  <div className="text-gray-500 mt-1">Trẻ sinh sống / Người chết trên 1000 dân</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="text-2xl font-bold text-primary-900">305</div>
                  <div className="text-gray-700">Mật độ dân số (người/km²)</div>
                  <div className="text-gray-500 mt-1">Đồng bằng sông Hồng: 1.126; Đông Nam Bộ: 814</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Nguồn: Cơ quan Thống kê Quốc gia – Thông cáo báo chí Kết quả Điều tra Dân số và Nhà ở giữa kỳ 2024 (06/01/2025). 
                <a className="underline text-primary-800" href="https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/01/thong-cao-bao-chi-ket-qua-dieu-tra-dan-so-va-nha-o-giua-ky-nam-2024/" target="_blank" rel="noreferrer">Xem chi tiết</a>.
                <br />Ghi chú: Quy mô hộ ≈ 3,59 người/hộ được suy ra từ dân số và số hộ trong thông cáo.
              </p>
            </div>

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
            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
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
            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
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
            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Tỉ suất sinh toàn phần – TFR (1990 - 2024)
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
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                Trình độ học vấn của phụ nữ (cơ cấu %)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={womenEducationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} label>
                      {womenEducationData.map((_entry, index) => (
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

      {/* Gallery hình ảnh */}
      {/* <section className="py-16 px-4 bg-white dark:bg-gray-900">
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
      </section> */}

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
    </div>
  );
}
