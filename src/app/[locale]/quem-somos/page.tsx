"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function QuemSomos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Cao Bang Tobacco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-marasca relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Giới Thiệu
          </h1>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-marasca-dark">
                Lịch sử hình thành và phát triển
              </h2>
              <p className="text-gray-700 mb-4">
                Công ty cổ phần thuốc lá Cao Bằng (CBT) xin gửi lời chúc sức khỏe và lời cảm ơn sâu sắc tới tất cả Quý khách hàng đã, đang và sẽ cho phép chúng tôi trở thành người bạn đồng hành cũng như đã dành sự tín nhiệm cho sản phẩm, dịch vụ mà công ty chúng tôi cung cấp.
              </p>
              <p className="text-gray-700">
                Công ty cổ phần thuốc lá Cao Bằng là Công ty chuyên cung cấp các sản phẩm thuốc lá lá nguyên liệu, thuốc lá tách cọng phục vụ các doanh nghiệp chế biến thuốc lá điếu, là đại lý phân phối cấp một cho các loại sản phẩm thuốc lá điếu Thăng long tại tỉnh Cao Bằng.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Công ty cổ phần thuốc lá Cao Bằng được thành lập ngày 16 tháng 9 năm 2010 là một trong những doanh nghiệp hàng đầu của tỉnh Cao Bằng với lĩnh vực sản xuất kinh doanh chính như: trồng cây thuốc lá, thuốc lào tại các huyện Nguyên Bình, Quảng Hòa tỉnh Cao Bằng.
              </p>
              <p className="text-gray-700">
                Trong những năm qua với đội ngũ cán bộ kỹ thuật có trình độ chuyên môn cao, có nhiều năm kinh nghiệm… cùng chất lượng sản phẩm đầu ra đảm bảo đáp ứng được các tiêu chuẩn kỹ thuật của các doanh nghiệp thuốc lá lớn như Ngân Sơn, Thăng Long.... đáp ứng mọi yêu cầu kỹ thuật, với các dịch vụ phục vụ tận tâm, chu đáo, chúng tôi mong muốn khách hàng sẽ hài lòng với chế độ chăm sóc khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Simplified Version */}
      <section className="py-16 bg-marasca-light">
        <div className="container-marasca">
          <h2 className="text-3xl font-bold mb-12 text-center text-marasca-dark">
            Quá Trình Phát Triển
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2010</div>
                <p className="font-medium">Thành lập Công ty cổ phần thuốc lá Cao Bằng vào ngày 16 tháng 9 năm 2010</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2011</div>
                <p className="font-medium">Mở rộng vùng trồng nguyên liệu tại huyện Nguyên Bình</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2015</div>
                <p className="font-medium">Trở thành đại lý phân phối cấp một cho các sản phẩm thuốc lá điếu Thăng Long tại tỉnh Cao Bằng</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2018</div>
                <p className="font-medium">Mở rộng vùng trồng thuốc lá tại huyện Quảng Hòa</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2020</div>
                <p className="font-medium">Đầu tư hệ thống máy móc, thiết bị chế biến thuốc lá hiện đại</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2022</div>
                <p className="font-medium">Mở rộng thị trường xuất khẩu sang các nước trong khu vực</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2023</div>
                <p className="font-medium">Trở thành thành viên Hiệp hội thuốc lá Việt Nam</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-marasca-orange font-bold text-xl mb-2">2025</div>
                <p className="font-medium">Tiếp tục mở rộng hợp tác với các đối tác trong và ngoài nước</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <h2 className="text-3xl font-bold mb-12 text-center text-marasca-dark">
            Cơ Sở Vật Chất
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80">
              <Image
                src="/images/about-image.jpg"
                alt="Cơ sở vật chất Công ty thuốc lá Cao Bằng"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-80">
              <Image
                src="/images/hero-background.jpg"
                alt="Cơ sở vật chất Công ty thuốc lá Cao Bằng"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-80">
              <Image
                src="/images/products-image.png"
                alt="Cơ sở vật chất Công ty thuốc lá Cao Bằng"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-80">
              <Image
                src="/images/about-image.jpg"
                alt="Cơ sở vật chất Công ty thuốc lá Cao Bằng"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-16 bg-marasca-light">
        <div className="container-marasca">
          <h2 className="text-3xl font-bold mb-12 text-center text-marasca-dark">
            Thông Tin Công Ty
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-6 text-marasca-orange">CÔNG TY CỔ PHẦN THUỐC LÁ CAO BẰNG</h3>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Tên viết tắt:</strong> CAO BANG TOBACCO JOINT STOCK COMPANY</li>
                <li><strong>Địa chỉ:</strong> Tổ 12, phường Đề Thám, thành phố Cao Bằng, tỉnh Cao Bằng</li>
                <li><strong>Điện thoại:</strong> 02066 286 286 - 0944 188 198</li>
                <li><strong>Mã số thuế:</strong> 4800 651 833</li>
                <li><strong>Vốn điều lệ:</strong> 40.000.000.000 (Bốn mươi tỷ đồng)</li>
                <li><strong>Tài khoản Ngân hàng 1:</strong> 116000062757 tại Vietinbank CN Cao Bằng</li>
                <li><strong>Tài khoản Ngân hàng 2:</strong> 8600003899 tại BIDV chi nhánh Cao Bằng</li>
                <li><strong>Email:</strong> ctythuoclacb@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}