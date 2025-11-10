'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { brandFont } from "../fonts/brandFont";

const MENU = [
  { href: "#graphic",  label: "GRAPHIC DESIGN" },
  { href: "#publisher", label: "PUBLISHER" },
  { href: "#uxui",     label: "UX / UI" },
  { href: "#resume",   label: "RESUME" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 라우트/해시가 바뀌면 자동으로 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC 로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 오버레이 열릴 때 바디 스크롤 잠금(모바일 UX)
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#15377e] text-white">
      <div className="mx-auto max-w-screen-2xl h-16 md:h-20 px-4 md:px-6 flex items-center justify-between">
        {/* LEFT: 로고 */}
        <Link href="/" aria-label="Home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={200} height={48} priority />
        </Link>

        <div aria-hidden className="flex-1" />

        {/* RIGHT: 메뉴 아이콘 + 오버레이 */}
        <div className="relative flex items-center justify-center">
          {/* Trigger: 햄버거 아이콘 (모바일: 클릭으로 토글, 데스크탑: 호버도 유지) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="header-menu-overlay"
            onClick={() => setOpen((v) => !v)}
            className="
              peer
              w-10 h-10 md:w-12 md:h-12 rounded-full
              text-[#f3c530] hover:text-[#15377e] focus:text-[#15377e]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              transition relative z-[60]
            "
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
            </svg>
          </button>

          {/* Overlay: 노란 메뉴창 
              - 모바일/접근성: open 상태로 표시
              - 데스크탑: 아이콘/오버레이 호버 시에도 표시(기존 UX 유지)
          */}
          <div
            id="header-menu-overlay"
            className={`
              fixed inset-0 z-50 bg-[#ffd400]
              transition-opacity duration-200
              ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              peer-hover:opacity-100 peer-hover:pointer-events-auto
              peer-focus:opacity-100 peer-focus:pointer-events-auto
              hover:opacity-100 hover:pointer-events-auto
            `}
            // 오버레이 바깥(노란 영역) 클릭 시 닫히게 하려면 아래 onClick 해제 주석을 켜세요.
            // onClick={() => setOpen(false)}
          >
            <nav className={`w-full h-full overflow-y-auto ${brandFont.className}`} onClick={(e) => e.stopPropagation()}>
              <ul className="w-full py-12 md:py-16">
                {MENU.map((m, i) => (
                  <li
                    key={m.href}
                    className={`
                      group/item relative
                      border-t border-[#15377e]/60
                      ${i === MENU.length - 1 ? "border-b" : ""}
                      hover:bg-[#15377e] transition-colors
                    `}
                  >
                    {/* 호버 시 중앙 마퀴 */}
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

                    {/* 기본 텍스트 */}
                    <Link
                      href={m.href}
                      onClick={() => setOpen(false)}
                      className="
                        relative block w-full text-center
                        leading-none font-extrabold tracking-tight
                        py-8 md:py-10 lg:py-12
                        text-[#15377e]
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
