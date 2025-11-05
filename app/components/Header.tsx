// app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { brandFont } from "../fonts/brandFont"; // app/fonts/brandFont.ts 에서 export 한 폰트

const MENU = [
  { href: "#graphic",  label: "GRAPHIC DESIGN" },
  { href: "#publisher", label: "PUBLISHER" },
  { href: "#uxui",     label: "UX / UI" },
  { href: "#resume",   label: "RESUME" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#143f8b] text-white">
      <div className="mx-auto max-w-screen-2xl h-16 md:h-20 px-4 md:px-6 flex items-center justify-between">
        {/* LEFT: 로고 (public 바로 아래라면 /logo.png 식으로) */}
        <Link href="/" aria-label="Home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={200} height={48} priority />
        </Link>

        <div aria-hidden className="flex-1" />

        {/* RIGHT: 메뉴 아이콘 + 풀스크린 오버레이
            - 아이콘(peer) 위에 있으면 열림
            - 노란 오버레이(hover) 위에 있으면 유지
            - 아이콘 근처/헤더 배경으로 돌아오면 닫힘 */}
        <div className="relative flex items-center justify-center">
          {/* Trigger: 햄버거 아이콘 */}
          <button
            type="button"
            aria-label="Open menu"
            className="
              peer
              w-10 h-10 md:w-12 md:h-12 rounded-full
              text-[#f3c530] hover:text-[#143f8b] focus:text-[#143f8b]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              transition relative z-[60]
            "
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
            </svg>
          </button>

          {/* Overlay: 풀스크린 노란 메뉴창 (아이콘 hover/포커스 or 자신 hover 때만 표시) */}
          <div
            className="
              fixed inset-0 z-50 bg-[#ffd400]
              opacity-0 pointer-events-none
              peer-hover:opacity-100 peer-hover:pointer-events-auto
              peer-focus:opacity-100 peer-focus:pointer-events-auto
              hover:opacity-100 hover:pointer-events-auto
              transition-opacity duration-200
            "
          >
            <nav className={`w-full h-full overflow-y-auto ${brandFont.className}`}>
              <ul className="w-full py-12 md:py-16">
                {MENU.map((m, i) => (
                  <li
                    key={m.href}
                    className={`
                      group/item relative
                      border-t border-[#143f8b]/60
                      ${i === MENU.length - 1 ? "border-b" : ""}
                      hover:bg-[#143f8b] transition-colors
                    `}
                  >
                    {/* 호버 시: 원래 텍스트는 숨기고(투명), 흰색 반복 텍스트(마퀴)만 중앙에 표시 */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        flex items-center justify-center overflow-hidden
                        opacity-0 group-hover/item:opacity-100
                        transition-opacity duration-200
                      "
                      aria-hidden
                    >
                      <div className="menu-marquee whitespace-nowrap">
                        <span className="text-white font-extrabold tracking-widest text-[9.5vw] md:text-[8vw] lg:text-[6.2vw]">
                          {m.label}&nbsp;•&nbsp;{m.label}&nbsp;•&nbsp;{m.label}&nbsp;•&nbsp;{m.label}&nbsp;•&nbsp;{m.label}
                        </span>
                      </div>
                    </div>

                    {/* 기본 텍스트: 중앙 정렬, 파란색. 항목 호버 시 투명 처리(사라짐) */}
                    <Link
                      href={m.href}
                      className="
                        relative block w-full text-center
                        leading-none font-extrabold tracking-tight
                        py-8 md:py-10 lg:py-12
                        text-[#143f8b]
                        text-[12vw] md:text-[9vw] lg:text-[7.2vw]
                        transition-colors
                        group-hover/item:text-transparent
                        select-none
                      "
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
