"use client";

import Image from 'next/image';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/products-image.png" // Use relevant product image
                alt="Sản phẩm thuốc lá Cao Bang Tobacco"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-2xl font-semibold text-marasca-orange">Nguyên liệu thuốc lá</h3>
              <p>Chúng tôi cung cấp đa dạng nguyên liệu thuốc lá chất lượng cao, bao gồm:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Thuốc lá lá nguyên liệu:</strong> Được trồng và thu hoạch tại các vùng nguyên liệu chuyên canh của công ty tại Cao Bằng, đảm bảo chất lượng đầu vào.</li>
                <li><strong>Thuốc lá tách cọng (Láminas):</strong> Nguyên liệu thuốc lá lá sau khi được xử lý loại bỏ cọng, đạt tiêu chuẩn cho sản xuất thuốc lá điếu và các sản phẩm khác.</li>
              </ul>
              <h3 className="text-2xl font-semibold text-marasca-orange mt-6">Thuốc lá điếu</h3>
              <p>
                Công ty thực hiện bán buôn và bán lẻ các sản phẩm thuốc lá điếu thành phẩm, phục vụ thị trường nội địa tại Cao Bằng và thị trường xuất khẩu.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Registered Business Lines Summary Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <h2 className="section-title text-marasca-dark">
            Ngành nghề kinh doanh
          </h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-center">
             <p>
              Ngoài lĩnh vực cốt lõi là thuốc lá, Công ty cổ phần thuốc lá Cao Bằng còn đăng ký hoạt động trong nhiều ngành nghề đa dạng khác nhằm hỗ trợ và mở rộng hoạt động kinh doanh, bao gồm:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left inline-block">
                <li>Trồng trọt và chế biến nông, lâm sản (chủ yếu là cây thuốc lá).</li>
                <li>Sản xuất và kinh doanh sản phẩm thuốc lá.</li>
                <li>Bán buôn nhiên liệu, vật liệu xây dựng, máy móc thiết bị, nông sản, thực phẩm, đồ uống.</li>
                <li>Khai thác khoáng sản (trừ loại nhà nước cấm).</li>
                <li>Dịch vụ kho bãi, lưu giữ hàng hóa, vận tải hàng hóa.</li>
                <li>Cho thuê máy móc, thiết bị.</li>
                <li>Tư vấn, giới thiệu việc làm, cung ứng lao động.</li>
                <li>Xuất nhập khẩu các mặt hàng công ty kinh doanh.</li>
            </ul>
          </div>
        </div>
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
