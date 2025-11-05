import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 개발 중 이미지 최적화 우회 → /_next/image 대기 때문에 생기는 무한로딩 차단
    unoptimized: true,
  },
};

export default nextConfig;