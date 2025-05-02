import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cao Bang Tobacco",
  description: "Chất lượng và sự phát triển bền vững",
  openGraph: {
    title: "Cao Bang Tobacco",
    description: "Chất lượng và sự phát triển bền vững",
    url: "https://www.tabacosmarasca.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}