// app/page.tsx
import Footer from "./components/Footer";
import { chabFont } from "./fonts/chabFont";
import GraphicSection from "./sections/GraphicSection";
import UXUIClient from "./components/UXUIClient";
import Hero from './components/Hero';

// ⚠️ /images 경로가 충돌했던 경우가 있었으니,
//    필요하면 아래 BASE_PUBLISHER_SRC 를 "/assets/publisher" 로 바꿔 쓰세요.
const BASE_PUBLISHER_SRC = "/images/publisher";

const publisherProjects = [
  { title: "Illy",  src: `${BASE_PUBLISHER_SRC}/illy.png`  },
  { title: "Forma", src: `${BASE_PUBLISHER_SRC}/forma.png` },
  { title: "Forma", src: `${BASE_PUBLISHER_SRC}/forma.png` },
  { title: "Illy",  src: `${BASE_PUBLISHER_SRC}/illy.png`  },
];


export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* === HERO === */}
        <section
          className="relative bg-[#143f8b] text-white min-h-screen w-full overflow-hidden"
          aria-label="Hero"
        />

        {/* === GRAPHIC === */}
        <GraphicSection />

        {/* === PUBLISHER === */}
        <section id="publisher" className="w-full bg-white text-[#143f8b] py-0">
  <div className="px-0">
    <div className="grid grid-cols-12 bg-[#143f8b] gap-[2px] items-stretch">
      {/* 왼쪽 타이틀 */}
      <div className="col-span-12 md:col-span-4 bg-white h-full relative">
        <div className="md:sticky md:top-0">
          <h2
            className={`${chabFont.className} text-5xl md:text-7xl font-black tracking-wide pl-0 leading-none py-6 md:py-10`}
          >
            PUBLISHER<span className="text-[#f3c530]">.</span>
          </h2>
        </div>
      </div>

      {/* 오른쪽: 2열 카드 그리드 */}
      <div className="col-span-12 md:col-span-8 bg-white">
        <div className="grid grid-cols-2 gap-[2px] bg-[#143f8b]">
          {publisherProjects.map((p, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-white">
              {/* 이미지: 호버 시 더 흐리게 → 텍스트 대비 확보 */}
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-30"
                loading="lazy"
                decoding="async"
              />

              {/* 오버레이 타이틀: 배경 없음 + 파란색 텍스트 */}
              <div className="absolute left-0 bottom-0 p-4 md:p-5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span
                  className="
                    inline-block
                    text-[#143f8b]                 /* ← 파란색으로 복구 */
                    text-3xl md:text-5xl lg:text-6xl
                    font-extrabold tracking-wide
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] /* 가독성용 은은한 그림자 */
                    transition-transform group-hover:scale-[1.02]
                  "
                >
                  {p.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>



        {/* === UX/UI === */}
        <section
          id="uxui"
          className="w-full bg-[#143f8b] text-white pt-48 md:pt-72 pb-28 overflow-x-clip"
        >
          <div className="px-6 md:px-10 flex justify-end">
            <h2
              className={`${chabFont.className} text-[#f3c530] text-5xl md:text-7xl font-black text-right`}
            >
              UXUI
            </h2>
          </div>
          <div className="mt-8 md:mt-10">
            <UXUIClient />
          </div>
        </section>

        {/* === RESUME === */}
        <section id="resume" className="w-full bg-[#143f8b] text-[#f3c530]">
          <div className="min-h-[100dvh] flex items-center justify-center px-6">
            <div className="w-fit text-center">
              <h2 className={`${chabFont.className} text-5xl md:text-7xl font-black`}>
                RESUME
              </h2>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block px-10 md:px-14 py-4 rounded-full bg-[#f3c530] text-[#143f8b] font-semibold tracking-wide uppercase transition hover:bg-white hover:text-[#143f8b] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                OPEN RESUME
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
