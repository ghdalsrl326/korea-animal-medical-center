import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/Pretendard-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "고려동물메디컬센터",
  description: "고려동물메디컬센터 | 건강검진 프로그램",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
