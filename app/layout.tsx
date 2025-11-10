// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import { brandFont } from "./fonts/brandFont"; // Notable-Regular.ttf 을 로드하는 폰트

export const metadata = {
  title: "Portfolio",
  description: "클라우디아 포트폴리오",
};

// (선택) Next.js 메타데이터 방식의 뷰포트 설정
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* 구형 브라우저 호환용: 뷰포트 메타를 한 번 더 명시 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={[
          brandFont.className,          // === Notable-Regular.ttf 전역 적용 ===
          "min-h-screen flex flex-col",
          "bg-[#15377e] text-white",    // 사이트 전역 배경/텍스트
          "overflow-x-hidden antialiased",
        ].join(" ")}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
