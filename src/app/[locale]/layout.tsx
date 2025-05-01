import "./globals.css";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {NextIntlClientProvider, useMessages} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cao Bang Tobacco", 
  description: "Chất lượng và sự phát triển bền vững",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ 
  children,
  params: { locale } 
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  // Validate messages - if they are missing, something is wrong upstream
  if (!messages) {
    console.error("Messages not loaded for locale:", locale);
    // Handle error appropriately, maybe render a fallback or throw
  }

  return (
    <html lang={locale}> 
      <body className={inter.className}>
        {/* Provider wraps Header, Footer, and the main content area */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {/* ClientBody now only wraps the page content if necessary */}
              <ClientBody>
                {children}
              </ClientBody>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
