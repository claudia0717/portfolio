// app/sections/GraphicSection.tsx
'use client';

import GraphicCard from "../components/GraphicCard";
import { brandFont } from "../fonts/brandFont";

export default function GraphicSection() {
  return (
    <section id="graphic" className="relative bg-[#15377e] text-white px-4 py-10">
      {/* 1) 제목 가운데 정렬 */}
      <h2 className={`${brandFont.className} text-3xl md:text-4xl font-extrabold mb-6 text-center`}>
        GRAPHIC DESIGN
      </h2>

      {/* 2x2 그리드 (모바일), md↑는 기존 순서 복구 */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {/* 포스터 : 모바일 1, 데스크탑 2 */}
        <div className="order-1 md:order-2">
          <GraphicCard
            title="POSTER"
            image="/images/gd/poster.png"  // 파일명/확장자 프로젝트에 맞게!
          />
        </div>

        {/* 드로잉 : 모바일 2, 데스크탑 3 */}
        <div className="order-2 md:order-3">
          <GraphicCard
            title="DRAWING"
            image="/images/gd/drawing.png"
          />
        </div>

        {/* PPT : 모바일 3, 데스크탑 4 */}
        <div className="order-3 md:order-4">
          <GraphicCard
            title="PPT"
            image="/images/gd/ppt.png"
          />
        </div>

        {/* 3) 방향버튼 원 : 모바일 4, 데스크탑 1  (노란 원 + 오른쪽 화살표) */}
        <div className="order-4 md:order-1">
          <button
            type="button"
            aria-label="Next"
            className="
              relative aspect-square w-full rounded-full
              bg-[#ffd400] text-[#15377e]
              grid place-items-center
              ring-1 ring-white/25 hover:scale-105 transition
            "
            // onClick={() => ... } // 필요 시 동작 연결
          >
            {/* 오른쪽 화살표 아이콘 */}
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
