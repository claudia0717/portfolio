// app/fonts/brandFont.ts
import localFont from "next/font/local";

export const brandFont = localFont({
  src: [{ path: "./Notable-Regular.ttf", weight: "400", style: "normal" }],
  display: "swap",
});
