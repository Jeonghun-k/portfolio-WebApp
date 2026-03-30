// Design Ref: §2 — 공통 레이아웃: Navbar + Footer + 다크 배경
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Web Developer",
  description: "개발자 포트폴리오 — 직접 만든 웹 프로젝트 모음",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-[#0d1117] text-[#e6edf3]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
