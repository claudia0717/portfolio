import GraphicCard from "../components/GraphicCard";
import { chabFont } from "../fonts/chabFont";

export default function GraphicSection() {
  // 필요에 따라 "/images/gd" 로 바꿔도 됩니다.
  const BASE = "/assets/gd";

  const items = [
    { type: "arrow" as const, direction: "right" as const, bgClass: "bg-[#ffd400]", arrowClass: "text-[#15377e]", hoverLabel: "MORE" },
    { type: "image" as const, label: "POSTER",  imageSrc: `${BASE}/poster.png`,  alt: "Poster" },
    { type: "image" as const, label: "DRAWING", imageSrc: `${BASE}/drawing.png`, alt: "Drawing" },
    { type: "image" as const, label: "PPT",     imageSrc: `${BASE}/ppt.png`,     alt: "PPT" },
  ];

  return (
    <section
      id="graphic"
      className="relative bg-[#15377e] px-6 md:px-10 py-16 md:py-24"  // ← 배경 파란색
    >
      {/* 타이틀: 가운데 정렬 + H1/H2 폰트 + 크림화이트 색상 */}
      <header className="mb-10 md:mb-14 text-center">
        <h2 className={`${chabFont.className} text-[#fff9f0] text-4xl md:text-6xl font-black tracking-tight`}>
          Graphic Design
        </h2>
      </header>

      {/* 4개 원형 카드 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, i) => (
          <GraphicCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}