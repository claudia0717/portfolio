// app/sections/UXUISection.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { brandFont } from "../fonts/brandFont";

/** 여기서 네 실제 이미지 경로/파일명으로 바꿔줘! */
const ITEMS = [
  {
    title: "WEB REDESIGN",
    image: "/images/uxui/web-redesign.jpg",
    href: "#",
    shape: "mask-shape-a", // 좌상단이 둥글게 깎인 느낌
  },
  {
    title: "DASHBOARD",
    image: "/images/uxui/dashboard.jpg",
    href: "#",
    shape: "mask-shape-b", // 우상단이 둥글게
  },
  {
    title: "E-COMMERCE",
    image: "/images/uxui/ecommerce.jpg",
    href: "#",
    shape: "mask-shape-c", // 좌하단이 둥글게
  },
  {
    title: "LANDING PAGE",
    image: "/images/uxui/landing.jpg",
    href: "#",
    shape: "mask-shape-d", // 우하단이 둥글게
  },
];

export default function UXUISection() {
  return (
    <section id="uxui" className="relative bg-[#15377e] text-white px-4 py-12">
      <div className="mx-auto max-w-screen-2xl">
        {/* 모바일 오른쪽 상단 라벨 유지 */}
        <div className="md:hidden absolute right-4 top-4">
          <span className={`${brandFont.className} text-[#ffd400] text-3xl leading-none`}>
            UX / UI
          </span>
        </div>

        <div className="flex items-start gap-8">
          {/* 카드 그리드 (모바일 2×2, md 이상 4열) */}
          <div className="flex-1">
            <h2 className="sr-only">UX / UI</h2>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
              {ITEMS.map((it, i) => (
                <Link key={i} href={it.href} className="group block">
                  <div
                    className={[
                      "relative w-full overflow-hidden bg-white",
                      "aspect-[4/5] md:aspect-[4/5]",      // 각자 모양 유지하기 위한 기본 비율
                      "ring-1 ring-white/20",
                      it.shape,                              // ★ 마스킹으로 모양 유지
                    ].join(" ")}
                  >
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* 하단 타이틀 */}
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <span
                        className={`${brandFont.className} text-white text-sm md:text-base font-extrabold tracking-wide`}
                      >
                        {it.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 데스크탑 오른쪽 노란 텍스트 유지 */}
          <aside className="hidden md:block shrink-0">
            <div className="sticky top-24">
              <span
                className={`${brandFont.className} text-[#ffd400] block text-right text-5xl lg:text-6xl leading-none`}
              >
                UX / UI
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
