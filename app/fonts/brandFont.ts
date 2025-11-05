// app/fonts/brandFont.ts
import localFont from "next/font/local";

export const brandFont = localFont({
  // ✅ brandFont.ts와 같은 폴더에 ttf가 있으므로 상대경로로!
  src: "./ChangwonDangamAsac-Bold.ttf",
  weight: "700",
  display: "swap",
  variable: "--font-brand",
});
