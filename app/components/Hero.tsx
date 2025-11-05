'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * AIM 사이트 인트로 느낌:
 * 1) 중앙 노란 사각형이 빠르게 확대 → 화면을 덮음 (fill 전환)
 * 2) 사각형이 페이드아웃되며 뒤의 거대한 "PORTFOLIO"가 등장
 * - 커서/스크롤 반응 없음
 * - 접근성: reduce-motion이면 즉시 정적 상태로 표시
 */

const WORD = 'PORTFOLIO';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  // 타이밍(초)
  const T_RECT_IN = 0.8;    // 사각형 확장
  const T_FILL_HOLD = 0.25; // 덮은 상태로 잠깐 유지
  const T_RECT_FADE = 0.35; // 사각형 페이드 아웃
  const T_TEXT_IN = 0.7;    // 텍스트 등장
  const STAGGER = 0.035;    // 텍스트 자간-압축/확장 스태거

  return (
    <section
      className="relative bg-[#143f8b] text-white min-h-screen w-full overflow-hidden grid place-items-center"
      aria-label="Hero"
    >
      {/* 배경 은은한 라디얼 글로우 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 40%, rgba(255,215,64,0.07), rgba(20,63,139,0) 60%)',
        }}
      />

      {/* === 1) 로딩 사각형(인트로) === */}
      <IntroBlock
        prefersReduced={prefersReduced}
        tRectIn={T_RECT_IN}
        tHold={T_FILL_HOLD}
        tRectFade={T_RECT_FADE}
      />

      {/* === 2) 중앙 거대한 타이포 === */}
      <MainWord
        text={WORD}
        prefersReduced={prefersReduced}
        delay={prefersReduced ? 0 : T_RECT_IN + T_FILL_HOLD * 0.8}
        dur={T_TEXT_IN}
        stagger={STAGGER}
      />

      {/* 상단 보조 라벨 */}
      <div className="absolute top-10 md:top-14 left-1/2 -translate-x-1/2 text-[#f3c623] text-[11px] md:text-xs tracking-[0.35em] font-extrabold/relaxed opacity-80">
        SELECTED • WORKS
      </div>

      {/* 하단 보조 텍스트 */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-[12px] md:text-sm tracking-[0.18em]">
        2025 PORTFOLIO
      </div>
    </section>
  );
}

/* =========================
   IntroBlock: 중앙 노란 사각형 → 화면 덮기 → 페이드아웃
   ========================= */
function IntroBlock({
  prefersReduced,
  tRectIn,
  tHold,
  tRectFade,
}: {
  prefersReduced: boolean;
  tRectIn: number;
  tHold: number;
  tRectFade: number;
}) {
  if (prefersReduced) return null;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20"
      initial={{
        x: '-50%',
        y: '-50%',
        width: 140,
        height: 96,
        borderRadius: 10,
        opacity: 1,
        backgroundColor: '#f3c623',
        boxShadow: '0 18px 120px rgba(0,0,0,0.35)',
      }}
      animate={{
        // 1단계: 사각형이 커지며 화면을 덮도록 스케일 업
        width: ['140px', '160vw'],
        height: ['96px', '160vh'],
        borderRadius: ['10px', '0px'],
        transition: { duration: tRectIn, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* 덮은 뒤 잠깐 유지 & 페이드아웃을 위해 별도 오버레이 자식 */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 1, 0],
        }}
        transition={{
          times: [0, 0.999, 1],
          duration: tHold + tRectFade,
          delay: tRectIn,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}

/* =========================
   MainWord: 가로 꽉 차는 초대형 타이포
   - 인트로 후에 서서히 나타나며 약간의 자간/스케일 변화
   - 커서/스크롤 반응 없음
   ========================= */
function MainWord({
  text,
  prefersReduced,
  delay,
  dur,
  stagger,
}: {
  text: string;
  prefersReduced: boolean;
  delay: number;
  dur: number;
  stagger: number;
}) {
  // 가로 꽉차게 보이도록 큰 폰트
  const fontSize = 'clamp(56px, 17.5vw, 300px)';

  return (
    <motion.div
      className="relative text-center leading-[0.85] select-none z-10"
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: prefersReduced ? 0 : dur, delay }}
      style={{
        fontWeight: 900,
        fontSize,
        letterSpacing: prefersReduced ? '0em' : '0.02em',
      }}
    >
      {/* 스트로크 → 필 전환 효과 */}
      <motion.div
        initial={
          prefersReduced
            ? { color: 'rgba(255,255,255,1)', WebkitTextStroke: '0px transparent' }
            : { color: 'transparent', WebkitTextStroke: '1.6px rgba(255,255,255,0.9)' }
        }
        animate={
          prefersReduced
            ? { color: 'rgba(255,255,255,1)' }
            : {
                color: 'rgba(255,255,255,1)',
                WebkitTextStroke: '0.6px rgba(255,255,255,0.55)',
              }
        }
        transition={{ duration: prefersReduced ? 0 : dur, delay }}
        className="inline-block will-change-transform"
      >
        {/* 글자별 가벼운 트래킹/살짝 위로 리빌 */}
        {Array.from(text).map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            className="inline-block"
            initial={
              prefersReduced
                ? {}
                : { y: '0.35em', letterSpacing: '0.18em', opacity: 0 }
            }
            animate={
              prefersReduced
                ? {}
                : { y: '0em', letterSpacing: '0.02em', opacity: 1 }
            }
            transition={{
              duration: prefersReduced ? 0 : dur * 0.9,
              delay: prefersReduced ? 0 : delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {ch}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
