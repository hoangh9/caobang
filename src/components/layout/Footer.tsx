"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      {/* Footer Quote */}
      <div className="marasca-orange py-3 text-center">
        <div className="container-marasca">
          <p className="text-white italic">
            "Chúng tôi đánh giá cao sự quan tâm của quý khách và mong muốn nhận được sự phản hồi tích cực."
          </p>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="bg-marasca-dark text-white py-12">
        <div className="container-marasca">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and statement */}
            <div className="md:col-span-1">
              <Link href="/" className="block mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Cao Bang Tobacco"
                  width={200}
                  height={86}
                  className="h-auto"
                />
              </Link>
              <p className="text-sm italic mt-4">
                "Chúng tôi luôn tìm kiếm những triển vọng tốt hơn cho sự hợp tác với các thị trường. Mục tiêu của công ty là không ngừng mang lại sự hài lòng cho khách hàng thông qua các tiêu chí đề ra như chất lượng, giá cả cạnh tranh...."
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-medium mb-6">Liên kết hữu ích</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary transition-colors"
                  >
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary transition-colors"
                  >
                    Điều khoản sử dụng
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary transition-colors"
                  >
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:ctythuoclacb@gmail.com"
                    className="text-white hover:text-primary transition-colors"
                  >
                    Email: ctythuoclacb@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:02066286286"
                    className="text-white hover:text-primary transition-colors"
                  >
                    Điện thoại: 02066 286 286
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:0944188198"
                    className="text-white hover:text-primary transition-colors"
                  >
                    Hotline: 0944 188 198
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-medium mb-6">Địa chỉ</h3>
              <address className="not-italic space-y-1">
                <p>Trụ sở chính: Tổ 12, phường Đề Thám</p>
                <p>Thành phố Cao Bằng, tỉnh Cao Bằng</p>
                <p>Mã số thuế: 4800 651 833</p>
                <p>Tài khoản: 116000062757 (Vietinbank CN Cao Bằng)</p>
                <p>Tài khoản: 8600003899 (BIDV CN Cao Bằng)</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="marasca-orange py-4">
        <div className="container-marasca flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© 2024 Công ty cổ phần thuốc lá Cao Bằng – Tất cả các quyền được bảo lưu.</p>
          <div className="mt-2 md:mt-0">
            <p>CAO BANG TOBACCO JOINT STOCK COMPANY</p>
          </div>
        </div>
      </div>

      {/* Cookie Consent (Simple Version) */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50">
        <p className="mb-4 md:mb-0">
          Chúng tôi sử dụng cookie để đảm bảo trải nghiệm tốt nhất trên trang web của chúng tôi. Khi tiếp tục sử dụng trang web này, bạn đồng ý với việc sử dụng cookie.
        </p>
        <div className="flex gap-2">
          <button className="bg-marasca-orange text-white px-4 py-2 rounded">
            Đồng ý
          </button>
          <Link
            href="#"
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            Chính sách bảo mật
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
