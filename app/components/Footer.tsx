import Image from "next/image";
import { chabFont } from "../fonts/chabFont";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#15377e] border-t">
      {/* 바깥 여백은 제거 → 밑 여백 과다 방지 */}
      <div className="w-full px-6 md:px-10">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* 왼쪽: 로고 (위/아래 여백 동일) */}
          <div className="col-span-12 md:col-span-6">
            <div className="py-12 md:py-16 flex md:block justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={1600}
                height={1600}
                className="w-[56vw] max-w-[900px] md:w-[42vw] md:max-w-[1100px] h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* 오른쪽: 텍스트 (로고와 같은 위/아래 여백) */}
          <div className="col-span-12 md:col-span-6">
            <div className="py-12 md:py-16">
              <div className={`${chabFont.className} text-center md:text-right`}>
                <p className="leading-none text-2xl md:text-6xl font-extrabold tracking-wide">
                  THANK YOU FOR WATCHING
                </p>
                <p className="leading-none text-2xl md:text-6xl font-extrabold tracking-wide mt-3 md:mt-5">
                  CONTACT ME
                </p>
              </div>

              {/* SNS: 모바일 중앙, 데스크톱 오른쪽 */}
              <nav className="mt-8 md:mt-10 flex justify-center md:justify-end gap-3">
                <a
                  href="mailto:you@example.com"
                  aria-label="email"
                  className="p-2 rounded-md bg-[#15377e]/5 hover:bg-[#15377e]/10"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" fill="none" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                  className="p-2 rounded-md bg-[#15377e]/5 hover:bg-[#15377e]/10"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
