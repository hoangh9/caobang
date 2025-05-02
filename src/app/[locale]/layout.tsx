import "../globals.css";
import { Inter } from "next/font/google";
import { ClientBody } from "../ClientBody"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isValidLocale, defaultLocale } from '@/utils/i18n';

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  return {
    title: "Cao Bang Tobacco",
    description: "Chất lượng và sự phát triển bền vững",
  };
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return [
    { locale: 'vi' },
    { locale: 'en' },
    { locale: 'zh' }
  ];
}

export default function RootLayout({ 
  children,
  params: { locale } 
}: Readonly<RootLayoutProps>) {
  // Verify the locale is valid, otherwise use the default
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;

  return (
    <html lang={validLocale}> 
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <ClientBody>
              {children}
            </ClientBody>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
