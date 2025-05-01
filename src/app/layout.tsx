import "./globals.css";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cao Bang Tobacco",
  description: "O processamento de tabaco com a qualidade que você conhece.",
  openGraph: {
    title: "Cao Bang Tobacco",
    description: "O processamento de tabaco com a qualidade que você conhece.",
    url: "https://www.tabacosmarasca.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ClientBody>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
