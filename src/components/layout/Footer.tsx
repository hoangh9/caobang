"use client";

// Use Link from next-intl/navigation
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl'; 

const Footer = () => {
  const t = useTranslations('Footer'); 

  return (
    <footer>
      {/* Footer Quote */}
      <div className="marasca-orange py-3 text-center">
        <div className="container-marasca">
          <p className="text-white italic">
             {t('quote')}
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
                {t('statement')}
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-medium mb-6">{t('linksTitle')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#" // Add actual link for Privacy Policy
                    className="text-white hover:text-primary transition-colors"
                  >
                    {t('privacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#" // Add actual link for Terms of Use
                    className="text-white hover:text-primary transition-colors"
                  >
                    {t('termsOfUse')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#" // Add actual link for Careers
                    className="text-white hover:text-primary transition-colors"
                  >
                    {t('careers')}
                  </Link>
                </li>
                <li>
                  {/* Mailto and Tel links don't need localization */}
                  <a 
                    href="mailto:ctythuoclacb@gmail.com"
                    className="text-white hover:text-primary transition-colors"
                  >
                    {t('emailLink')}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:02066286286"
                    className="text-white hover:text-primary transition-colors"
                  >
                    {t('phoneLink')}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0944188198"
                    className="text-white hover:text-primary transition-colors"
                  >
                    {t('hotlineLink')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-medium mb-6">{t('addressTitle')}</h3>
              <address className="not-italic space-y-1">
                <p>{t('addressLine1')}</p>
                <p>{t('addressLine2')}</p>
                <p>{t('taxCode')}</p>
                <p>{t('account1')}</p>
                <p>{t('account2')}</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="marasca-orange py-4">
        <div className="container-marasca flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>{t('copyright')}</p>
          <div className="mt-2 md:mt-0">
            <p>{t('companyNameEn')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
