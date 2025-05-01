"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-marasca">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-marasca-dark">
          Hoạt Động Kinh Doanh
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Công ty cổ phần thuốc lá Cao Bằng (CBT) chuyên cung cấp các sản phẩm thuốc lá lá nguyên liệu, thuốc lá tách cọng chất lượng cao
        </p>

        <div className="mb-16">
          <p className="text-gray-700 mb-6">
            Công ty cổ phần thuốc lá Cao Bằng chuyên trồng cây thuốc lá, thuốc lào tại các huyện Nguyên Bình, Quảng Hòa tỉnh Cao Bằng. Chuyên cung cấp các sản phẩm nguyên liệu thuốc lá lá, nguyên liệu thuốc lá tách cọng cho các khách hàng, đồng thời là đại lý phân phối cấp một cho các loại sản phẩm thuốc lá điếu Thăng Long tại tỉnh Cao Bằng.
          </p>
          <p className="text-gray-700 mb-8">
            Với đội ngũ cán bộ kỹ thuật có trình độ chuyên môn cao, có nhiều năm kinh nghiệm cùng chất lượng sản phẩm đầu ra đảm bảo đáp ứng được các tiêu chuẩn kỹ thuật của các doanh nghiệp thuốc lá lớn như Ngân Sơn, Thăng Long.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-marasca-orange">
          Ngành Nghề Kinh Doanh:
        </h3>

        <Tabs defaultValue="growing" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 p-1 mb-8">
            <TabsTrigger
              value="growing"
              className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
            >
              TRỒNG TRỌT
            </TabsTrigger>
            <TabsTrigger
              value="processing"
              className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
            >
              CHẾ BIẾN
            </TabsTrigger>
            <TabsTrigger
              value="trading"
              className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
            >
              THƯƠNG MẠI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="growing" className="space-y-6">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/products-image.png"
                alt="Vùng trồng thuốc lá"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-marasca-orange">Trồng cây thuốc lá, thuốc lào</h3>
              <p className="text-gray-700">
                Hiện nay vùng trồng nguyên liệu của công ty ngày một trải rộng ra nhiều huyện của tỉnh Cao Bằng. Địa điểm đầu tư trồng thuốc lá tại Huyện Quảng Hòa gồm các xã: Độc Lập, Cai Bộ, Hồng Quang, Quảng Hưng và Huyện Nguyên Bình gồm các xã: Thành Công.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="processing" className="space-y-6">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/products-image.png"
                alt="Chế biến thuốc lá"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-marasca-orange">Chế biến sản phẩm thuốc lá</h3>
              <p className="text-gray-700">
                Với mục tiêu trở thành Công ty hàng đầu về chế biến tách cọng và kinh doanh nguyên liệu thuốc lá, chúng tôi đầu tư cơ sở vật chất, máy móc, kho tàng bến bãi ngày càng bài bản, rộng lớn. Đội ngũ cán bộ, người lao động lành nghề, có kỹ thuật nông nghiệp không ngừng nâng cao trình độ chuyên môn nghiệp vụ.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="trading" className="space-y-6">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/products-image.png"
                alt="Thương mại thuốc lá"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-marasca-orange">Thương mại xuất, nhập khẩu</h3>
              <p className="text-gray-700">
                Thực hiện thương mại xuất, nhập khẩu mặt hàng nguyên liệu thuốc lá nên có nhiều đối tác trong và ngoài nước quan tâm, là nơi làm việc hấp dẫn, cùng đóng góp công sức – cùng chia sẻ thành công. Công ty có nhiều lợi thế trong việc nhập khẩu nguyên liệu thuốc lá và là thành viên của Hiệp hội thuốc lá Việt Nam.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Link href="/atividades-e-produtos">
            <Button className="bg-marasca-orange hover:bg-marasca-orange/90">
              TÌM HIỂU THÊM
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
