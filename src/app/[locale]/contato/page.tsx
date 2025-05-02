"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contato() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg" // Keep a relevant background
            alt="Liên hệ Cao Bang Tobacco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-marasca relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Liên Hệ
          </h1>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-marasca-dark">
                Thông tin liên hệ
              </h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  <Link href="mailto:ctythuoclacb@gmail.com" className="hover:text-primary">
                    Email: ctythuoclacb@gmail.com
                  </Link>
                </p>
                <p>
                  <Link href="tel:02066286286" className="hover:text-primary">
                    Điện thoại: 02066 286 286
                  </Link>
                </p>
                <p>
                  <Link href="tel:0944188198" className="hover:text-primary">
                    Hotline: 0944 188 198
                  </Link>
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-marasca-dark">
                Địa chỉ
              </h3>
              <address className="not-italic text-gray-700 mb-4 space-y-1">
                <p>Trụ sở chính: Tổ 12, phường Đề Thám</p>
                <p>Thành phố Cao Bằng, tỉnh Cao Bằng</p>
              </address>

              <h3 className="text-xl font-bold mb-4 text-marasca-dark">
                Thông tin khác
              </h3>
              <div className="text-gray-700 space-y-1 mb-8">
                 <p>Mã số thuế: 4800 651 833</p>
                 <p>Tài khoản: 116000062757 (Vietinbank CN Cao Bằng)</p>
                 <p>Tài khoản: 8600003899 (BIDV CN Cao Bằng)</p>
              </div>

              {/* Map (placeholder - would be an iframe in real implementation) */}
              <div className="relative h-[300px] w-full bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual map embed code if available */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.83780160196!2d106.25830167606102!3d22.66738302854614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36b1d1281109b70f%3A0x41b80b571e93767d!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gdGh14buRYyBsYSBDYW8gQuG6sW5n!5e0!3m2!1sen!2s!4v1721381517707!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-marasca-dark">
                Gửi thông tin liên hệ cho chúng tôi
              </h2>

              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Chủ đề"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Nội dung tin nhắn"
                    className="w-full p-3 rounded-md min-h-[150px]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="consent" className="w-4 h-4" />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    Tôi đồng ý chia sẻ thông tin trong biểu mẫu này với Công ty cổ phần thuốc lá Cao Bằng.
                  </label>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-marasca-orange hover:bg-marasca-orange/90 py-3"
                  >
                    Gửi
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Address Banner - Updated */}
      <section className="py-6 bg-marasca-orange text-white">
        <div className="container-marasca text-center">
          <p>
             Trụ sở chính: Tổ 12, phường Đề Thám, Thành phố Cao Bằng, tỉnh Cao Bằng
          </p>
        </div>
      </section>
    </div>
  );
}