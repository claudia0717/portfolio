import localFont from "next/font/local";

export const chabFont = localFont({
  src: [{ path: "./Notable-Regular.ttf", weight: "400", style: "normal" }], // 파일명 그대로
  display: "swap",
  variable: "--font-chab",
});
