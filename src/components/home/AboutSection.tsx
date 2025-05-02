"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="bg-marasca-light py-16 md:py-24">
      <div className="container-marasca">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-marasca-dark">
              Công ty cổ phần thuốc lá Cao Bằng
            </h2>
            <p className="text-gray-700 mb-6">
              Công ty cổ phần thuốc lá Cao Bằng được thành lập ngày 16 tháng 9 năm 2010 là một trong những doanh nghiệp hàng đầu của tỉnh Cao Bằng với lĩnh vực sản xuất kinh doanh chính như: trồng cây thuốc lá, thuốc lào tại các huyện Nguyên Bình, Quảng Hòa tỉnh Cao Bằng.
            </p>
            <p className="text-gray-700 mb-6">
              Chuyên cung cấp các sản phẩm nguyên liệu thuốc lá lá, nguyên liệu thuốc lá tách cọng cho các khách hàng. Bán buôn, bán lẻ sản phẩm thuốc lá điếu tại thị trường tỉnh Cao Bằng và xuất khẩu.
            </p>
            <div className="mt-8">
              <Link href="/vi/quem-somos">
                <Button className="bg-marasca-orange hover:bg-marasca-orange/90">
                  XEM THÊM VỀ CHÚNG TÔI
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative md:h-[500px] h-[300px]">
            <Image
              src="/images/about-image.jpg"
              alt="Lãnh đạo Công ty thuốc lá Cao Bằng"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
