"use client";

import { useRef } from "react";

type Variant = "archTop" | "diagTLBR" | "archBottom" | "allButBR";

const ITEMS: { id: number; title: string; v: Variant }[] = [
  { id: 1, title: "APP DESIGN",   v: "archTop"    }, // 창 모양 (윗 반원)
  { id: 2, title: "WEB REDESIGN", v: "diagTLBR"   }, // 좌상/우하만 둥글림
  { id: 3, title: "DASHBOARD",    v: "archBottom" }, // 창 뒤집은 모양 (아랫 반원)
  { id: 4, title: "E-COMMERCE",   v: "allButBR"   }, // 우하만 각짐(나머지 둥글)
];

function shapeClass(v: Variant) {
  // 9999px(=full pill) 반경을 필요한 코너에만 적용
  switch (v) {
    case "archTop":
      return "rounded-t-[9999px]"; // 윗모서리 둘만 엄청 둥글게 → 창(∩)
    case "diagTLBR":
      return "rounded-tl-[120px] md:rounded-tl-[180px] rounded-br-[120px] md:rounded-br-[180px]";
    case "archBottom":
      return "rounded-b-[9999px]"; // 아랫모서리 둘만 둥글 → 뒤집은 창(∪)
    case "allButBR":
      return "rounded-tl-[9999px] rounded-tr-[9999px] rounded-bl-[9999px]"; // 우하만 각짐
  }
}

export default function UXUICarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // 4장 고정이지만, 구조 유지해두면 이후 슬라이드로 확장 쉬움
  const scrollByCard = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardW = card ? card.offsetWidth : 360;
    el.scrollBy({ left: (dir === "next" ? 1 : -1) * (cardW + 24), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* 필요하면 좌우 버튼 노출 */}
      <button
        aria-label="Previous"
        onClick={() => scrollByCard("prev")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition"
      >
        ◀
      </button>

      {/* 트랙 */}
      <div ref={trackRef} className="no-scrollbar overflow-x-auto scroll-smooth">
        {/* 가운데 정렬 4칸 */}
        <div className="flex gap-6 md:gap-8 px-6 md:px-0 justify-center">
          {ITEMS.map((it) => (
            <div key={it.id} data-card className="shrink-0 w-[260px] md:w-[360px]">
              {/* 파란 카드 안에 흰 모양을 border-radius로 구현 */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#15377e]">
                <div className={`absolute inset-0 m-0 bg-white ${shapeClass(it.v)}`} />
              </div>
              <div className="mt-3 text-center text-white/80">{it.title}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Next"
        onClick={() => scrollByCard("next")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition"
      >
        ▶
      </button>
    </div>
  );
}
