// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

export const metadata = { title: "Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
