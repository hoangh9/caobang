"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Mock news data for Cao Bang Tobacco
const newsItems = [
  {
    id: 1,
    title: 'Công ty mở rộng vùng trồng thuốc lá',
    excerpt: 'Công ty cổ phần thuốc lá Cao Bằng vừa hoàn tất việc mở rộng vùng trồng thuốc lá tại huyện Quảng Hòa, đưa tổng diện tích vùng trồng lên hơn 500 hecta...',
    date: '25 tháng 4 năm 2025',
    image: '/images/news1.jpeg',
    slug: '/noticias/mo-rong-vung-trong'
  },
  {
    id: 2,
    title: 'Nâng cao chất lượng nguyên liệu thuốc lá',
    excerpt: 'Để đáp ứng nhu cầu thị trường và yêu cầu kỹ thuật của các đối tác, Công ty cổ phần thuốc lá Cao Bằng đã triển khai nhiều biện pháp nhằm nâng cao chất lượng nguyên liệu thuốc lá...',
    date: '20 tháng 4 năm 2025',
    image: '/images/news2.jpeg',
    slug: '/noticias/nang-cao-chat-luong'
  },
  {
    id: 3,
    title: 'Hợp tác với các đối tác quốc tế',
    excerpt: 'Công ty cổ phần thuốc lá Cao Bằng đã ký kết thỏa thuận hợp tác với các đối tác quốc tế để mở rộng thị trường xuất khẩu và nâng cao năng lực sản xuất...',
    date: '15 tháng 4 năm 2025',
    image: '/images/news1.jpeg',
    slug: '/noticias/hop-tac-quoc-te'
  }
];

const NewsSection = () => {
  return (
    <section className="bg-marasca-light py-16 md:py-24">
      <div className="container-marasca">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-marasca-dark">
          Tin Tức & Sự Kiện
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-md">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-marasca-orange text-white py-1 px-3">
                    {item.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-marasca-dark">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={item.slug}
                  className="text-marasca-orange font-medium flex items-center hover:underline"
                >
                  Đọc thêm <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/noticias">
            <Button className="bg-marasca-orange hover:bg-marasca-orange/90">
              XEM TẤT CẢ TIN TỨC
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
