"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative z-10">
      {/* Top bar with Sustainability Report and Language Selector */}
      <div className="marasca-orange py-2">
        <div className="container-marasca flex justify-between items-center">
          <Link
            href="#"
            className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
          >
            Báo cáo phát triển bền vững
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm md:text-base">Ngôn ngữ / Languages:</span>
            <Link href="#" className="block">
              <Image
                src="/images/vietnam-flag.png"
                alt="Tiếng Việt"
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href="#" className="block">
              <Image
                src="/images/us-flag.png"
                alt="English"
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href="#" className="block">
              <Image
                src="/images/china-flag.png"
                alt="中文"
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-marasca-dark py-4">
        <div className="container-marasca flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Cao Bang Tobacco"
              width={140}
              height={60}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-primary transition-colors"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-white hover:text-primary transition-colors"
                >
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/atividades-e-produtos"
                  className="text-white hover:text-primary transition-colors"
                >
                  Sản Phẩm & Dịch Vụ
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-white hover:text-primary transition-colors"
                >
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white hover:text-primary transition-colors"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-marasca-dark shadow-lg z-50">
          <div className="container-marasca py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/atividades-e-produtos"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sản Phẩm & Dịch Vụ
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
