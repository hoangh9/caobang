"use client";

// Import required modules
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getLocaleFromPathname } from '@/utils/i18n';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [translations, setTranslations] = useState<any>({});
  // Get the current pathname and locale
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  
  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const { default: messages } = await import(`@/app/messages/${locale}.json`);
        setTranslations(messages.Header || {});
      } catch (error) {
        console.error('Failed to load translations', error);
      }
    };
    
    loadTranslations();
  }, [locale]);

  const t = (key: string) => {
    // Handle nested keys like 'nav.home'
    if (key.includes('.')) {
      const [parent, child] = key.split('.');
      return translations[parent]?.[child] || key;
    }
    return translations[key] || key;
  };

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

          </a>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm md:text-base">
               {t('languageLabel')}
            </span>
            {/* Language Switcher Links with locale handling */}
            <Link 
              href={pathname.replace(`/${locale}`, "/vi")} 
              className="block"
            >
              <Image
                src="/images/vietnam-flag.png"
                alt={t('nav.home')} 
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, "/en")}
              className="block"
            >
              <Image
                src="/images/us-flag.png"
                alt="English"
                width={24}
                height={16}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, "/zh")}
              className="block"
            >
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
          <Link href={`/${locale}`} className="block"> 
            <Image
              src="/images/logo.png"
              alt="Cao Bang Tobacco"
              width={100} 
              height={43}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation with explicit locale paths */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-white hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/quem-somos`}
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/atividades-e-produtos`}
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/noticias`}
                  className="text-white hover:text-primary transition-colors"
                >
                   {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contato`}
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
                  href={`/${locale}`}
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/quem-somos`}
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/atividades-e-produtos`}
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.products')}
                </Link>
              </li>
               <li>
                <Link
                  href={`/${locale}/noticias`}
                  className="text-white block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contato`}
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
