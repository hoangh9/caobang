"use client";

// Use ONLY next-intl navigation imports here
import { Link, usePathname } from 'next-intl/navigation'; 
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl'; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // usePathname from next-intl/navigation gets the path *without* locale
  const pathname = usePathname(); 
  const t = useTranslations('Header'); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative z-10">
      {/* Top bar */}
      <div className="marasca-orange py-2">
        <div className="container-marasca flex justify-between items-center">
          {/* Use regular <a> for external/non-localized links or next-intl Link if it's internal */}
          <a 
            href="#" // Replace with actual sustainability report link if available
            className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
          >
             {t('sustainabilityReport')}
          </a>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm md:text-base">
               {t('languageLabel')}
            </span>
            {/* Language Switcher Links - usePathname from next-intl works directly */}
            <Link href={pathname} locale="vi" className="block">
              <Image
                src="/images/vietnam-flag.png"
                alt={t('nav.home')} 
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href={pathname} locale="en" className="block">
              <Image
                src="/images/us-flag.png"
                alt="English"
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href={pathname} locale="zh" className="block">
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
          {/* Logo link - points to root of current locale */}
          <Link href="/" className="block"> 
            <Image
              src="/images/logo.png"
              alt="Cao Bang Tobacco"
              width={100} 
              height={43}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation - Use next-intl Link */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos" // Will be prefixed with locale automatically
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/atividades-e-produtos"
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-label={t('nav.home')} 
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
                   {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/atividades-e-produtos"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.products')}
                </Link>
              </li>
               <li>
                <Link
                  href="/noticias"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.contact')}
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
