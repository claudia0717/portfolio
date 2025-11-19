// app/components/UXUICarousel.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Variant = "archTop" | "diagTLBR" | "archBottom" | "allButBR";

type Item = {
  id: number;
  title: string;
  v: Variant;
  image: string; // 이미지 경로
};

const ITEMS: Item[] = [
  {
    id: 1,
    title: "리바트 듀 소파",
    v: "archTop",
    image: "/images/pagelayout/livart-dew.png",
  },
  {
    id: 2,
    title: "교체예정",
    v: "diagTLBR",
    image: "/images/pagelayout/livart-dew.png",
  },
  {
    id: 3,
    title: "교체예정",
    v: "archBottom",
    image: "/images/pagelayout/livart-dew.png",
  },
  {
    id: 4,
    title: "교체예정",
    v: "allButBR",
    image: "/images/pagelayout/livart-dew.png",
  },
];

function shapeClass(v: Variant) {
  switch (v) {
    case "archTop":
      return "rounded-t-[9999px]";
    case "diagTLBR":
      return "rounded-tl-[120px] md:rounded-tl-[180px] rounded-br-[120px] md:rounded-br-[180px]";
    case "archBottom":
      return "rounded-b-[9999px]";
    case "allButBR":
      return "rounded-tl-[9999px] rounded-tr-[9999px] rounded-bl-[9999px]";
  }
}

export default function UXUICarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Item | null>(null); // 클릭된 카드

  const scrollByCard = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardW = card ? card.offsetWidth : 360;
    el.scrollBy({
      left: (dir === "next" ? 1 : -1) * (cardW + 24),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* 좌측 화살표 (데스크탑) */}
      <button
        aria-label="Previous"
        onClick={() => scrollByCard("prev")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition"
      >
        ◀
      </button>

      {/* 카드 트랙 */}
      <div ref={trackRef} className="no-scrollbar overflow-x-auto scroll-smooth">
        <div className="flex gap-6 md:gap-8 px-6 md:px-0 justify-center">
          {ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              data-card
              onClick={() => setActive(it)} // 카드 클릭 시 모달 열기
              className="group shrink-0 w-[260px] md:w-[360px] cursor-pointer focus:outline-none"
            >
              {/* 파란 카드 + 흰 모양틀 */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#15377e]">
                <div
                  className={`absolute inset-0 m-0 bg-white overflow-hidden ${shapeClass(
                    it.v
                  )}`}
                >
                  {/* 호버 시 살짝 확대 */}
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 260px, 360px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center text-white/80 text-sm md:text-base">
                {it.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 우측 화살표 (데스크탑) */}
      <button
        aria-label="Next"
        onClick={() => scrollByCard("next")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg:white/15 hover:bg-white/25 text-white backdrop-blur-sm transition bg-white/15"
      >
        ▶
      </button>

      {/* 모달: 원본 크기(가로 기준) + 세로 스크롤 */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 md:px-4"
          onClick={() => setActive(null)} // 배경 클릭 시 닫기
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} // 안쪽 클릭은 유지
          >
            {/* 닫기 버튼 */}
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 text-white text-sm px-3 py-1 hover:bg-black/80"
            >
              닫기
            </button>

            {/* 이미지 영역: 가로 꽉, 세로는 길어지면 스크롤 */}
            <div className="flex-1 overflow-auto p-2 md:p-4">
              <Image
                src={active.image}
                alt={active.title}
                // 대략적인 원본 비율용 사이즈 (가로 기준)
                width={1400}
                height={4000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
