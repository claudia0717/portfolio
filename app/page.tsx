import Footer from "./components/Footer";
import { chabFont } from "./fonts/chabFont";
import UXUICarousel from "./components/UXUICarousel";
import Image from "next/image";

const publisherProjects = [
  { title: "Illy",  src: "/images/publisher/illy.png"  },
  { title: "Forma", src: "/images/publisher/forma.png" },
  { title: "Forma", src: "/images/publisher/forma.png" },
  { title: "Illy",  src: "/images/publisher/illy.png"  },
];


export default function Home() {
  return (
    <>
      <main className="flex-1">
      {/* === HERO (내용 제거, 높이만 유지) === */}
<section className="relative bg-[#143f8b] text-white min-h-screen w-full overflow-hidden"></section>






        {/* GRAPHIC */}
        <section
           id="graphic"
           className="w-full bg-[#143f8b] text-white pt-28 md:pt-40 pb-56 md:pb-72 scroll-mt-40 md:scroll-mt-[260px]"
        >
        {/* 풀폭 유지 + 가운데 정렬 */}
          <div className="px-6">
            <h2
              className={`${chabFont.className} text-5xl md:text-7xl font-black mb-14 md:mb-20 text-center`}
            >
              GRAPHIC DESIGN
            </h2>

          {/* 원들: 가운데 정렬 */}
            <div className="overflow-hidden py-8">
              <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                {["Poster", "Editorial", "Branding", "Packaging"].map((t) => (
                  <button
                    key={t}
                    className="
                      w-64 h-64            /* 모바일: 256px */
                      md:w-80 md:h-80      /* 데스크탑: 320px (더 크려면 md:w-96 md:h-96 = 384px) */
                      rounded-full bg-white text-[#143f8b]
                      font-bold uppercase shadow-sm
                      hover:scale-[1.05] transition-transform
                      text-lg md:text-2xl  /* 안의 글자도 비례 확대 */
                      "
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 3) PUBLISHER: 왼쪽 제목 sticky + 오른쪽 2xN */}



<section id="publisher" className="w-full bg-white text-[#143f8b] py-0">
  <div className="px-0">
    {/* ✅ items-stretch 로 컬럼 높이 동일화 + 파란 분리선 유지 */}
    <div className="grid grid-cols-12 bg-[#143f8b] gap-[2px] items-stretch">
      {/* 왼쪽: sticky 제목 (배경이 전체 높이를 칠하도록 h-full) */}
      <div className="col-span-12 md:col-span-4 bg-white h-full relative">
        <div className="md:sticky md:top-0">
          <h2
            className={`${chabFont.className} text-5xl md:text-7xl font-black tracking-wide pl-0 leading-none py-6 md:py-10`}
          >
            PUBLISHER<span className="text-[#f3c530]">.</span>
          </h2>
        </div>
      </div>

      {/* 오른쪽: 2열 카드 그리드 (살짝 굵은 파란 라인) */}
      <div className="col-span-12 md:col-span-8 bg-white">
        <div className="grid grid-cols-2 gap-[2px] bg-[#143f8b]">
          {publisherProjects.map((p, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-white">
              {/* 이미지: 호버 시 40% 투명 */}
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 50vw, 50vw"
                className="object-cover transition-all duration-300 group-hover:opacity-40"
                priority={i === 0}
              />
              {/* 좌하단 타이틀: 검정, 크게, 호버 시 나타남 */}
              <div className="absolute left-0 bottom-0 p-4 md:p-5 text-black uppercase opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-lg md:text-2xl font-extrabold tracking-wide">
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



        {/* 4) UX/UI: 좌우 버튼 자리(슬라이드 효과 나중에) */}
        <section id="uxui" className="w-full bg-[#143f8b] text-white pt-48 md:pt-72 pb-28 overflow-x-clip">
  {/* 타이틀: 왼쪽 상단 노란색 */}
  <div className="px-6 md:px-10 flex justify-end">
    <h2 className={`${chabFont.className} text-[#f3c530] text-5xl md:text-7xl font-black text-right`}>
      UXUI
    </h2>
  </div>

  {/* 캐러셀: 가운데 정렬 + 좌우 버튼 */}
  <div className="mt-8 md:mt-10">
    <UXUICarousel />
  </div>
</section>

        {/* ===================== RESUME ===================== */}
{/* ===================== RESUME ===================== */}
<section id="resume" className="w-full bg-[#143f8b] text-[#f3c530]">
  {/* 100dvh: 모바일 주소창 변화에도 정확히 한 화면을 채움 */}
  <div className="min-h-[100dvh] flex items-center justify-center px-6">
    <div className="w-fit text-center">
      <h2 className={`${chabFont.className} text-5xl md:text-7xl font-black`}>
        RESUME
      </h2>

      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-10 inline-block
    px-10 md:px-14 py-4
    rounded-full           /* 긴 캡슐형 */
    bg-[#f3c530]           /* 기본: 노란 배경 */
    text-[#143f8b]         /* 기본: 파란 글자 */
    font-semibold tracking-wide uppercase
    transition
    hover:bg-white         /* 호버: 흰 배경 */
    hover:text-[#143f8b]   /* 호버: 파란 글자 유지 */
    focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30
  "
>
  OPEN RESUME
</a>
    </div>
  </div>
</section>
{/* =================================================== */}


      </main>

      <Footer />
    </>
  );
}
