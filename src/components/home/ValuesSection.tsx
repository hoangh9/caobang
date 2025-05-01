"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, CheckCircle, Award, Users } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      icon: <Leaf className="h-12 w-12 text-marasca-orange mb-4" />,
      title: "Phát triển bền vững",
      description: "Cam kết với việc phát triển bền vững trong sản xuất thuốc lá thông qua các chương trình trồng trọt hiệu quả và thân thiện với môi trường."
    },
    {
      id: 2,
      icon: <CheckCircle className="h-12 w-12 text-marasca-orange mb-4" />,
      title: "Chất lượng",
      description: "Duy trì tiêu chuẩn chất lượng cao trong toàn bộ chuỗi sản xuất, từ khâu gieo trồng đến sản phẩm cuối cùng."
    },
    {
      id: 3,
      icon: <Award className="h-12 w-12 text-marasca-orange mb-4" />,
      title: "Uy tín",
      description: "Uy tín ngày càng được nâng cao, thị trường được mở rộng, hiện đã có mối quan hệ với nhiều đối tác trong và ngoài nước."
    },
    {
      id: 4,
      icon: <Users className="h-12 w-12 text-marasca-orange mb-4" />,
      title: "Trách nhiệm xã hội",
      description: "Phát triển các dự án xã hội tập trung vào giáo dục và cải thiện điều kiện sống của cộng đồng địa phương."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-marasca">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-marasca-dark">
          Giá Trị Và Trách Nhiệm
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Công ty cổ phần thuốc lá Cao Bằng luôn đem đến cho khách hàng những sản phẩm chất lượng, phong cách phục vụ chuyên nghiệp, giá cả cạnh tranh.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-marasca-dark">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-marasca-orange text-white p-8 rounded-lg text-center">
          <p className="text-lg md:text-xl italic">
            "Với mục tiêu, trở thành Công ty hàng đầu về chế biến tách cọng và kinh doanh nguyên liệu thuốc lá. Thực hiện thương mại xuất, nhập khẩu mặt hàng nguyên liệu thuốc lá nên có nhiều đối tác trong và ngoài nước quan tâm, là nơi làm việc hấp dẫn, cùng đóng góp công sức – cùng chia sẻ thành công."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
