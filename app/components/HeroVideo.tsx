"use client";
import { useEffect, useRef } from "react";

type Props = {
  webm?: string;
  mp4?: string;
  className?: string;
  fit?: "contain" | "cover"; // ← 옵션으로도 제어 가능
};

export default function HeroVideo({
  webm = "/videos/hero.webm",
  mp4 = "/videos/hero.mp4",
  className = "",
  fit = "contain", // ← 기본값을 contain으로
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => { try { await v.play(); } catch {} };
    v.addEventListener("loadedmetadata", tryPlay);
    tryPlay();
    return () => v.removeEventListener("loadedmetadata", tryPlay);
  }, []);

  return (
    // 레터박스 배경을 새 파란색으로 지정
    <section className={`relative min-h-[92vh] bg-[#15377e] overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full ${
          fit === "contain" ? "object-contain" : "object-cover"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {webm && <source src={webm} type="video/webm" />}
        {mp4  && <source src={mp4}  type="video/mp4"  />}
        당신의 브라우저는 HTML5 비디오를 지원하지 않습니다.
      </video>
    </section>
  );
}
