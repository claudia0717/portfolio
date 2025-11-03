"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { chabFont } from "../fonts/chabFont";

const MENUS = [
  { label: "GRAPHIC", href: "#graphic" },
  { label: "PUBLISHER", href: "#publisher" },
  { label: "UX/UI", href: "#uxui" },
  { label: "RESUME", href: "#resume" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // 풀폭 파란 바탕
    <header className="sticky top-0 z-50 bg-[#143f8b]">
      {/* ★ max-w 제거: 화면 너비 100% */}
      <div className="w-full">
        {/* 데스크톱: 로고 왼쪽 끝 / 메뉴 중앙 / 오른쪽 빈칸 */}
        <div className="hidden md:flex items-center justify-between">
          {/* 높이/여백: 상단 여백과 좌측 여백을 같게(예: 24px) */}
          <div className="pt-6 pl-6 -mt-10">
            <Link href="/" className="block ml-4 md:ml-6">
              {/* 로고 크게 (약 5배) + 왼쪽 끝에 붙임 */}
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-[200px] h-[200px] object-contain"
                priority
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>

          {/* 가운데 메뉴: 큰 로고의 세로 중앙에 정렬 */}
          <nav className="flex-1">
            <ul
               className={`${chabFont.className} flex items-center justify-center gap-10 text-sm font-normal text-[#f3c530] uppercase tracking-wide`}
            >
              {MENUS.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="hover:opacity-80 transition-opacity">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          {/* 오른쪽 공간(균형용) */}
          <div className="pt-6 pr-6 w-[200px]" />
        </div>

        {/* 모바일: 간결 */}
        <div className="md:hidden flex items-center justify-between h-14 px-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
              priority
            />
            <span className="sr-only">Home</span>
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-white/10 text-white"
          >
            ☰
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-3 px-3">
            <ul className="grid gap-2 text-[#f3c530] font-semibold uppercase tracking-wide">
              {MENUS.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="block py-2" onClick={() => setOpen(false)}>
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
