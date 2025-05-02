"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductsSection = () => {
  return (
    <section className="bg-marasca-light py-16 md:py-24">
      <div className="container-marasca">
        <h2 className="section-title text-marasca-dark">
          Hoạt Động Kinh Doanh
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Công ty cổ phần thuốc lá Cao Bằng (CBT) chuyên cung cấp các sản phẩm thuốc lá lá nguyên liệu, thuốc lá tách cọng chất lượng cao
        </p>

        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-gray-700 mb-4 text-center">
            Công ty cổ phần thuốc lá Cao Bằng chuyên trồng cây thuốc lá, thuốc lào tại các huyện Nguyên Bình, Quảng Hòa tỉnh Cao Bằng. Chuyên cung cấp các sản phẩm nguyên liệu thuốc lá lá, nguyên liệu thuốc lá tách cọng cho các khách hàng, đồng thời là đại lý phân phối cấp một cho các loại sản phẩm thuốc lá điếu Thăng Long tại tỉnh Cao Bằng.
          </p>
          <p className="text-gray-700 text-center">
            Với đội ngũ cán bộ kỹ thuật có trình độ chuyên môn cao, có nhiều năm kinh nghiệm cùng chất lượng sản phẩm đầu ra đảm bảo đáp ứng được các tiêu chuẩn kỹ thuật của các doanh nghiệp thuốc lá lớn như Ngân Sơn, Thăng Long.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-marasca-orange">
          Sản Phẩm Chính
        </h3>

        <Tabs defaultValue="tobacco-leaf" className="max-w-4xl mx-auto">
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
              <div className="relative h-[300px]">
                <Image
                  src="/images/products-image.png"
                  alt="Thuốc lá lá nguyên liệu"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Thuốc lá lá nguyên liệu</h3>
                <p className="text-gray-700">
                  Thuốc lá lá nguyên liệu của Cao Bằng Tobacco được trồng và thu hoạch tại các vùng nguyên liệu chuyên canh của công ty tại tỉnh Cao Bằng, đảm bảo chất lượng đầu vào. Sản phẩm của chúng tôi đáp ứng các tiêu chuẩn chất lượng cao của các doanh nghiệp sản xuất thuốc lá hàng đầu trong nước.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tobacco-strips" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-[300px]">
                <Image
                  src="/images/products-image.png"
                  alt="Thuốc lá tách cọng"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Thuốc lá tách cọng (Láminas)</h3>
                <p className="text-gray-700">
                  Thuốc lá tách cọng là nguyên liệu thuốc lá lá sau khi được xử lý loại bỏ cọng, đạt tiêu chuẩn cho sản xuất thuốc lá điếu và các sản phẩm khác. Quá trình tách cọng được thực hiện trên dây chuyền công nghệ hiện đại, đảm bảo chất lượng và độ đồng đều cao của sản phẩm.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cigarettes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-[300px]">
                <Image
                  src="/images/products-image.png"
                  alt="Thuốc lá điếu"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Thuốc lá điếu</h3>
                <p className="text-gray-700">
                  Công ty thực hiện bán buôn và bán lẻ các sản phẩm thuốc lá điếu thành phẩm, phục vụ thị trường nội địa tại Cao Bằng và thị trường xuất khẩu. Chúng tôi là đại lý phân phối cấp một cho các loại sản phẩm thuốc lá điếu Thăng Long tại tỉnh Cao Bằng, cung cấp các sản phẩm uy tín và chất lượng.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pipe-tobacco" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-[300px]">
                <Image
                  src="/images/products-image.png"
                  alt="Thuốc lào"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Thuốc lào</h3>
                <p className="text-gray-700">
                  Thuốc lào là một trong những sản phẩm truyền thống của công ty, được trồng tại các huyện Nguyên Bình và Quảng Hòa tỉnh Cao Bằng. Sản phẩm thuốc lào của chúng tôi được chế biến theo quy trình kỹ thuật đặc biệt, bảo đảm giữ nguyên hương vị đặc trưng và chất lượng cao, được nhiều khách hàng ưa chuộng.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cigars" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-[300px]">
                <Image
                  src="/images/products-image.png"
                  alt="Xì gà"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Xì gà</h3>
                <p className="text-gray-700">
                  Công ty cung cấp các sản phẩm xì gà chất lượng cao phục vụ thị trường trong nước và xuất khẩu. Sản phẩm xì gà của chúng tôi được sản xuất từ những lá thuốc lá thượng hạng, được cuốn thủ công theo quy trình cẩn thận, đảm bảo sản phẩm có hương vị đặc biệt và trải nghiệm hút thuốc tuyệt vời.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Link href="/vi/atividades-e-produtos">
            <Button className="bg-marasca-orange hover:bg-marasca-orange/90 text-white font-medium px-6 py-2">
              TÌM HIỂU THÊM
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
