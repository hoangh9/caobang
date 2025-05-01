"use client";

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Cao Bang Tobacco"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="container-marasca relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Trách nhiệm và cam kết với sự phát triển bền vững
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          Công ty cổ phần thuốc lá Cao Bằng (CBT) chuyên cung cấp sản phẩm thuốc lá lá nguyên liệu, thuốc lá tách cọng chất lượng cao
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/quem-somos"
            className="primary-button"
          >
            Tìm hiểu thêm về chúng tôi
          </Link>
          <Link
            href="/contato"
            className="bg-white text-primary px-6 py-2 rounded-md font-medium transition-colors hover:bg-white/90"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
