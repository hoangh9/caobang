"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AtividadesEProdutos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg" // Keep a relevant background
            alt="Sản phẩm & Dịch vụ Cao Bang Tobacco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-marasca relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Sản phẩm & Dịch vụ
          </h1>
        </div>
      </section>

      {/* Main Business Activities Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <h2 className="section-title text-marasca-dark">
            Lĩnh vực hoạt động chính
          </h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-center">
            <p>
              Công ty cổ phần thuốc lá Cao Bằng (CBT) là một trong những doanh nghiệp hàng đầu tỉnh Cao Bằng, tập trung vào các lĩnh vực sản xuất kinh doanh cốt lõi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left inline-block">
              <li>Chuyên trồng cây thuốc lá tại các huyện Nguyên Bình, Quảng Hòa tỉnh Cao Bằng.</li>
              <li>Chuyên cung cấp các sản phẩm nguyên liệu thuốc lá lá, nguyên liệu thuốc lá tách cọng chất lượng cao cho các đối tác trong và ngoài nước.</li>
              <li>Bán buôn, bán lẻ sản phẩm thuốc lá điếu tại thị trường tỉnh Cao Bằng và phục vụ xuất khẩu.</li>
            </ul>
            <p>
              Với nhiều năm kinh nghiệm, CBT đã khẳng định uy tín qua việc cung cấp sản phẩm đảm bảo chất lượng, phong cách phục vụ chuyên nghiệp và giá cả hợp lý, được nhiều khách hàng tin tưởng lựa chọn.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-16 bg-marasca-light">
        <div className="container-marasca">
          <h2 className="section-title text-marasca-dark">
            Sản phẩm chính
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Công ty cổ phần thuốc lá Cao Bằng (CBT) cung cấp đa dạng các sản phẩm chất lượng cao cho thị trường trong nước và xuất khẩu
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="tobacco-leaf" className="w-full">
              <TabsList className="grid grid-cols-5 bg-gray-100 p-1 mb-8 rounded-md">
                <TabsTrigger
                  value="tobacco-leaf"
                  className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white rounded-sm py-2 text-xs md:text-sm"
                >
                  THUỐC LÁ LÁ
                </TabsTrigger>
                <TabsTrigger
                  value="tobacco-strips"
                  className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white rounded-sm py-2 text-xs md:text-sm"
                >
                  THUỐC LÁ TÁCH CỌNG
                </TabsTrigger>
                <TabsTrigger
                  value="cigarettes"
                  className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white rounded-sm py-2 text-xs md:text-sm"
                >
                  THUỐC LÁ ĐIẾU
                </TabsTrigger>
                <TabsTrigger
                  value="pipe-tobacco"
                  className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white rounded-sm py-2 text-xs md:text-sm"
                >
                  THUỐC LÀO
                </TabsTrigger>
                <TabsTrigger
                  value="cigars"
                  className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white rounded-sm py-2 text-xs md:text-sm"
                >
                  XÌ GÀ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tobacco-leaf" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-[300px] md:h-[350px] bg-white p-4 rounded-lg shadow-sm">
                    <Image
                      src="/images/products-image.png"
                      alt="Thuốc lá lá nguyên liệu"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-gray-700 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-marasca-orange">Thuốc lá lá nguyên liệu</h3>
                    <p>
                      Thuốc lá lá nguyên liệu của Cao Bằng Tobacco được trồng và thu hoạch tại các vùng nguyên liệu chuyên canh của công ty tại tỉnh Cao Bằng.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Chất lượng đỉnh cao:</strong> Đáp ứng tiêu chuẩn chất lượng của các doanh nghiệp sản xuất thuốc lá hàng đầu.</li>
                      <li><strong>Đa dạng chủng loại:</strong> Nhiều giống thuốc lá khác nhau phù hợp với nhiều nhu cầu sản xuất.</li>
                      <li><strong>Quy trình nghiêm ngặt:</strong> Được trồng và thu hoạch theo quy trình kỹ thuật tiên tiến, đảm bảo chất lượng và an toàn.</li>
                    </ul>
                    <p>
                      Với nhiều năm kinh nghiệm, chúng tôi tự hào cung cấp nguyên liệu thuốc lá chất lượng cao, đáp ứng nhu cầu của thị trường trong và ngoài nước.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tobacco-strips" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-[300px] md:h-[350px] bg-white p-4 rounded-lg shadow-sm">
                    <Image
                      src="/images/products-image.png"
                      alt="Thuốc lá tách cọng"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-gray-700 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-marasca-orange">Thuốc lá tách cọng (Láminas)</h3>
                    <p>
                      Thuốc lá tách cọng là nguyên liệu thuốc lá lá sau khi được xử lý loại bỏ cọng, đạt tiêu chuẩn cho sản xuất thuốc lá điếu và các sản phẩm khác.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Công nghệ hiện đại:</strong> Quá trình tách cọng được thực hiện trên dây chuyền công nghệ tiên tiến.</li>
                      <li><strong>Chất lượng đồng đều:</strong> Sản phẩm có độ đồng đều cao, đáp ứng tiêu chuẩn kỹ thuật nghiêm ngặt.</li>
                      <li><strong>Đa dạng phân loại:</strong> Nhiều loại thuốc lá tách cọng khác nhau phù hợp với từng mục đích sử dụng.</li>
                    </ul>
                    <p>
                      Thuốc lá tách cọng của Cao Bằng Tobacco được các doanh nghiệp sản xuất thuốc lá trong nước như Ngân Sơn, Thăng Long và nhiều đối tác khác đánh giá cao về chất lượng.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cigarettes" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-[300px] md:h-[350px] bg-white p-4 rounded-lg shadow-sm">
                    <Image
                      src="/images/products-image.png"
                      alt="Thuốc lá điếu"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-gray-700 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-marasca-orange">Thuốc lá điếu</h3>
                    <p>
                      Công ty thực hiện bán buôn và bán lẻ các sản phẩm thuốc lá điếu thành phẩm, phục vụ thị trường nội địa tại Cao Bằng và thị trường xuất khẩu.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Đại lý cấp một:</strong> Là đại lý phân phối cấp một cho các loại sản phẩm thuốc lá điếu Thăng Long tại tỉnh Cao Bằng.</li>
                      <li><strong>Đa dạng sản phẩm:</strong> Cung cấp nhiều nhãn hiệu thuốc lá điếu uy tín, đáp ứng đa dạng nhu cầu người tiêu dùng.</li>
                      <li><strong>Chất lượng đảm bảo:</strong> Tất cả sản phẩm đều được kiểm soát chất lượng nghiêm ngặt, đảm bảo đúng tiêu chuẩn.</li>
                    </ul>
                    <p>
                      Với mạng lưới phân phối rộng khắp và đội ngũ bán hàng chuyên nghiệp, chúng tôi luôn đảm bảo cung cấp các sản phẩm thuốc lá điếu đến tay người tiêu dùng một cách nhanh chóng và hiệu quả.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pipe-tobacco" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-[300px] md:h-[350px] bg-white p-4 rounded-lg shadow-sm">
                    <Image
                      src="/images/products-image.png"
                      alt="Thuốc lào"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-gray-700 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-marasca-orange">Thuốc lào</h3>
                    <p>
                      Thuốc lào là một trong những sản phẩm truyền thống của công ty, được trồng tại các huyện Nguyên Bình và Quảng Hòa tỉnh Cao Bằng.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Hương vị đặc trưng:</strong> Sản phẩm thuốc lào của chúng tôi được chế biến theo quy trình kỹ thuật đặc biệt, bảo đảm giữ nguyên hương vị đặc trưng.</li>
                      <li><strong>Chất lượng cao:</strong> Đạt tiêu chuẩn chất lượng cao, được nhiều khách hàng ưa chuộng.</li>
                      <li><strong>Đóng gói đa dạng:</strong> Nhiều loại đóng gói khác nhau phù hợp với nhu cầu sử dụng và phân phối.</li>
                    </ul>
                    <p>
                      Với bề dày kinh nghiệm trong việc trồng và chế biến thuốc lào, Cao Bằng Tobacco tự hào mang đến cho khách hàng những sản phẩm thuốc lào chất lượng nhất, giữ trọn vẹn hương vị truyền thống.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cigars" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-[300px] md:h-[350px] bg-white p-4 rounded-lg shadow-sm">
                    <Image
                      src="/images/products-image.png"
                      alt="Xì gà"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-gray-700 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-marasca-orange">Xì gà</h3>
                    <p>
                      Công ty cung cấp các sản phẩm xì gà chất lượng cao phục vụ thị trường trong nước và xuất khẩu.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Nguyên liệu thượng hạng:</strong> Sản phẩm xì gà của chúng tôi được sản xuất từ những lá thuốc lá thượng hạng.</li>
                      <li><strong>Cuốn thủ công:</strong> Được cuốn thủ công theo quy trình cẩn thận, đảm bảo sản phẩm có hương vị đặc biệt.</li>
                      <li><strong>Trải nghiệm tuyệt vời:</strong> Mang đến trải nghiệm hút thuốc tuyệt vời cho người sử dụng.</li>
                      <li><strong>Đa dạng phân khúc:</strong> Nhiều mẫu mã và kích cỡ khác nhau, phù hợp với nhiều phân khúc khách hàng.</li>
                    </ul>
                    <p>
                      Xì gà của Cao Bằng Tobacco là sự kết hợp hoàn hảo giữa kỹ thuật sản xuất hiện đại và phương pháp thủ công truyền thống, mang đến sản phẩm chất lượng hàng đầu.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

       {/* Registered Business Lines Summary Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <h2 className="section-title text-marasca-dark">
            Ngành nghề kinh doanh
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Ngoài lĩnh vực cốt lõi là thuốc lá, Công ty cổ phần thuốc lá Cao Bằng còn đăng ký hoạt động trong nhiều ngành nghề đa dạng khác:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Item 1 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Trồng trọt', 
                    image: '/images/products-image.png',
                    description: `Công ty cổ phần thuốc lá Cao Bằng chuyên trồng cây thuốc lá tại các huyện Nguyên Bình, Quảng Hòa tỉnh Cao Bằng. 
                    
                    Với vùng trồng nguyên liệu ngày một mở rộng, chúng tôi đang áp dụng những kỹ thuật canh tác tiên tiến nhất để đảm bảo năng suất và chất lượng. Các địa điểm đầu tư trồng thuốc lá tại Huyện Quảng Hòa gồm các xã: Độc Lập, Cai Bộ, Hồng Quang, Quảng Hưng và Huyện Nguyên Bình gồm các xã: Thành Công.
                    
                    Với đội ngũ kỹ thuật viên có trình độ cao và nhiều năm kinh nghiệm, công ty đã tạo dựng được vùng nguyên liệu ổn định với sản lượng và chất lượng đáp ứng được các tiêu chuẩn khắt khe của các đối tác lớn trong ngành.`
                  }
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Trồng trọt"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Trồng trọt</h3>
              </button>

              {/* Item 2 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Chế biến', 
                    image: '/images/products-image.png',
                    description: `Chế biến sản phẩm thuốc lá là một trong những lĩnh vực chính của Công ty cổ phần thuốc lá Cao Bằng. 
                    
                    Với mục tiêu trở thành Công ty hàng đầu về chế biến tách cọng và kinh doanh nguyên liệu thuốc lá, chúng tôi đầu tư cơ sở vật chất, máy móc, kho tàng bến bãi ngày càng bài bản, rộng lớn. Đội ngũ cán bộ, người lao động lành nghề, có kỹ thuật nông nghiệp không ngừng nâng cao trình độ chuyên môn nghiệp vụ.
                    
                    Quy trình chế biến thuốc lá của chúng tôi được thực hiện theo đúng tiêu chuẩn quốc tế, đảm bảo chất lượng đầu ra theo yêu cầu của các đối tác lớn như Ngân Sơn, Thăng Long và các doanh nghiệp khác trong ngành thuốc lá.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Chế biến"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Chế biến</h3>
              </button>

              {/* Item 3 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Thương mại', 
                    image: '/images/products-image.png',
                    description: `Hoạt động thương mại là một trong những thế mạnh của Công ty cổ phần thuốc lá Cao Bằng, tập trung vào phân phối các sản phẩm thuốc lá điếu thành phẩm. 
                    
                    Công ty là đại lý phân phối cấp một cho các loại sản phẩm thuốc lá điếu Thăng Long tại tỉnh Cao Bằng. Với mạng lưới phân phối rộng khắp và đội ngũ bán hàng chuyên nghiệp, chúng tôi đã xây dựng được mối quan hệ bền vững với các đối tác và khách hàng trên toàn tỉnh.
                    
                    Ngoài ra, công ty còn phát triển thị trường phía Bắc và hướng tới mở rộng hoạt động thương mại sang các tỉnh lân cận trong tương lai.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Thương mại"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Thương mại</h3>
              </button>

              {/* Item 4 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Khoáng sản', 
                    image: '/images/products-image.png',
                    description: `Công ty cổ phần thuốc lá Cao Bằng cũng hoạt động trong lĩnh vực khai thác và chế biến khoáng sản được phép theo quy định của pháp luật. 
                    
                    Với lợi thế về vị trí địa lý tại tỉnh Cao Bằng - một địa phương giàu tài nguyên khoáng sản, công ty đã phát triển và đa dạng hóa hoạt động sản xuất kinh doanh sang lĩnh vực này.
                    
                    Việc khai thác khoáng sản được thực hiện theo đúng quy định của pháp luật hiện hành, đảm bảo yêu cầu về bảo vệ môi trường và phát triển bền vững. Đây là một hướng phát triển tiềm năng giúp công ty đa dạng hóa nguồn thu và tạo thêm việc làm cho người lao động địa phương.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Khoáng sản"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Khoáng sản</h3>
              </button>

              {/* Item 5 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Vận tải & Kho bãi', 
                    image: '/images/products-image.png',
                    description: `Dịch vụ vận tải và kho bãi là một trong những lĩnh vực hỗ trợ quan trọng trong chuỗi giá trị của Công ty cổ phần thuốc lá Cao Bằng. 
                    
                    Với hệ thống kho bãi hiện đại và đội xe vận chuyển chuyên nghiệp, công ty cung cấp dịch vụ lưu giữ và vận chuyển hàng hóa an toàn, đáp ứng nhu cầu của cả hoạt động sản xuất kinh doanh nội bộ và các đối tác bên ngoài.
                    
                    Kho bãi của công ty được thiết kế và xây dựng theo tiêu chuẩn, đảm bảo điều kiện bảo quản tối ưu cho nguyên liệu và thành phẩm thuốc lá, cũng như các hàng hóa khác. Đội ngũ nhân viên vận chuyển được đào tạo bài bản, có kinh nghiệm và tinh thần trách nhiệm cao trong công việc.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Vận tải"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Vận tải & Kho bãi</h3>
              </button>

              {/* Item 6 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Xuất nhập khẩu', 
                    image: '/images/products-image.png',
                    description: `Hoạt động xuất nhập khẩu là một trong những thế mạnh của Công ty cổ phần thuốc lá Cao Bằng, với vị trí địa lý thuận lợi gần biên giới Việt-Trung. 
                    
                    Công ty thực hiện thương mại xuất, nhập khẩu mặt hàng nguyên liệu thuốc lá và có nhiều đối tác trong và ngoài nước quan tâm, là nơi làm việc hấp dẫn, cùng đóng góp công sức – cùng chia sẻ thành công.
                    
                    Với tư cách là thành viên của Hiệp hội thuốc lá Việt Nam, công ty có nhiều lợi thế trong việc nhập khẩu nguyên liệu thuốc lá và mở rộng thị trường xuất khẩu. Đồng thời, công ty cũng tích cực tham gia các hoạt động xúc tiến thương mại, tìm kiếm đối tác và cơ hội kinh doanh mới trên thị trường quốc tế.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Xuất nhập khẩu"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Xuất nhập khẩu</h3>
              </button>

              {/* Item 7 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Vật liệu xây dựng', 
                    image: '/images/products-image.png',
                    description: `Công ty cổ phần thuốc lá Cao Bằng có hoạt động bán buôn vật liệu xây dựng và nhiên liệu, góp phần đa dạng hóa ngành nghề kinh doanh. 
                    
                    Với mạng lưới đối tác rộng khắp và kinh nghiệm trong lĩnh vực thương mại, công ty cung cấp các loại vật liệu xây dựng chất lượng cao như xi măng, sắt thép, gạch, đá, cát, sỏi... và các loại nhiên liệu phục vụ nhu cầu của thị trường địa phương và khu vực lân cận.
                    
                    Hoạt động kinh doanh vật liệu xây dựng không chỉ mang lại nguồn doanh thu bổ sung cho công ty mà còn góp phần thúc đẩy phát triển cơ sở hạ tầng và xây dựng tại địa phương, tạo động lực cho sự phát triển kinh tế-xã hội của tỉnh Cao Bằng.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Vật liệu xây dựng"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Vật liệu xây dựng</h3>
              </button>

              {/* Item 8 */}
              <button 
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                onClick={() => window.dispatchEvent(new CustomEvent('openBusinessModal', { 
                  detail: { 
                    title: 'Dịch vụ nhân sự', 
                    image: '/images/products-image.png',
                    description: `Công ty cổ phần thuốc lá Cao Bằng cung cấp dịch vụ tư vấn, giới thiệu việc làm và cung ứng lao động cho các đối tác trong và ngoài tỉnh. 
                    
                    Với đội ngũ nhân viên chuyên nghiệp và am hiểu thị trường lao động địa phương, công ty cung cấp các dịch vụ tư vấn nghề nghiệp, đào tạo kỹ năng, giới thiệu việc làm và cung ứng lao động theo yêu cầu của các doanh nghiệp.
                    
                    Dịch vụ nhân sự của công ty đã góp phần giải quyết việc làm cho nhiều lao động địa phương, đồng thời đáp ứng nhu cầu nhân lực cho các doanh nghiệp, đóng góp vào sự phát triển kinh tế-xã hội của tỉnh Cao Bằng. Công ty luôn đề cao trách nhiệm xã hội trong hoạt động cung ứng lao động, đảm bảo quyền lợi chính đáng cho người lao động và tuân thủ quy định pháp luật.`
                  } 
                }))}
              >
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-marasca-light p-1.5 mb-5 relative overflow-hidden group-hover:ring-4 ring-marasca-orange transition-all shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/products-image.png"
                      alt="Dịch vụ nhân sự"
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-marasca-orange">Dịch vụ nhân sự</h3>
              </button>

              {/* Modal Component */}
              <div id="businessModal" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
                <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto mx-4">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 id="modalTitle" className="text-2xl font-bold text-marasca-orange"></h3>
                      <button 
                        className="text-gray-500 hover:text-marasca-orange focus:outline-none"
                        onClick={() => {
                          document.getElementById('businessModal').classList.add('hidden');
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="relative h-64 md:h-80 bg-marasca-light rounded-lg mb-6">
                      <Image 
                        id="modalImage"
                        src="/images/products-image.png" 
                        alt="Business activity" 
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div id="modalDescription" className="text-gray-700 whitespace-pre-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal JavaScript */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              window.addEventListener('openBusinessModal', function(e) {
                const modal = document.getElementById('businessModal');
                const modalTitle = document.getElementById('modalTitle');
                const modalImage = document.getElementById('modalImage');
                const modalDescription = document.getElementById('modalDescription');
                
                if (modal && modalTitle && modalImage && modalDescription) {
                  modalTitle.textContent = e.detail.title;
                  modalImage.src = e.detail.image;
                  modalImage.alt = e.detail.title;
                  modalDescription.textContent = e.detail.description;
                  
                  modal.classList.remove('hidden');
                  
                  // Close modal when clicking outside
                  modal.addEventListener('click', function(event) {
                    if (event.target === modal) {
                      modal.classList.add('hidden');
                    }
                  });
                }
              });
            });
          `
        }} />
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-16 bg-marasca-light">
        <div className="container-marasca">
          <h2 className="section-title text-marasca-dark">
            Lợi thế cạnh tranh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
             <div className="text-gray-700 space-y-4">
               <ul className="list-disc list-inside space-y-2">
                <li>Hoạt động chuyên nghiệp trong lĩnh vực chế biến nguyên liệu, vùng trồng ổn định, chất lượng thuốc lá lá cao tại Nguyên Bình và Quảng Hòa.</li>
                <li>Đội ngũ nhân viên kỹ thuật chuyên ngành lâu năm, trình độ cao (đại học và trên đại học).</li>
                <li>Nhiều lợi thế trong việc nhập khẩu nguyên liệu thuốc lá.</li>
                <li>Nguồn nguyên vật liệu đa dạng để sản xuất thuốc lá với chi phí tối ưu.</li>
                <li>Kinh nghiệm trong tiêu thụ thuốc lá điếu, có khả năng mở rộng thị trường phía Bắc.</li>
                <li>Nguồn lực tại chỗ và cam kết hợp tác lâu dài từ các đối tác kinh nghiệm.</li>
                <li>Là thành viên của Hiệp hội thuốc lá Việt Nam.</li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/about-image.jpg" // Use relevant image
                alt="Lợi thế cạnh tranh Cao Bang Tobacco"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}