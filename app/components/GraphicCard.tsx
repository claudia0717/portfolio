"use client";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

type ImageCard = {
  type: "image";
  label: string;
  imageSrc: string;
  alt?: string;
};

type ArrowCard = {
  type: "arrow";
  direction?: "left" | "right" | "up" | "down";
  bgClass?: string;
  arrowClass?: string;
  hoverLabel?: string;
};

type Props = (ImageCard | ArrowCard) & { className?: string };

export default function GraphicCard(props: Props) {
  const base =
    "group relative aspect-square rounded-full grid place-items-center overflow-hidden select-none transition-transform duration-300 hover:scale-[1.03]";

  // === 이미지 카드 ===
  if (props.type === "image") {
    const { label, imageSrc, alt, className } = props;
    return (
      <div className={cn(base, "bg-white shadow-sm ring-1 ring-black/10", className)}>
        <img
          src={imageSrc}
          alt={alt ?? label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 grid place-items-center z-10">
          <span className="text-[#15377e] text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
            {label}
          </span>
        </div>
      </div>
    );
  }

  // === 화살표 카드 (MORE를 화살표 '아래'에 표시) ===
  const {
    direction = "right",
    bgClass = "bg-[#ffd400]",
    arrowClass = "text-[#15377e]",
    hoverLabel = "MORE",
    className,
  } = props;

  const rotate =
    direction === "left" ? "rotate-180"
    : direction === "right" ? "rotate-0"
    : direction === "up" ? "-rotate-90"
    : "rotate-90";

  return (
    <div className={cn(base, bgClass, "shadow-sm ring-1 ring-black/10", className)}>
      {/* 화살표: 중앙 */}
      <svg
        className={cn("w-16 h-16 md:w-20 md:h-20", arrowClass, rotate, "transition-transform duration-300 z-10")}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M14.7 5.3a1 1 0 0 1 1.4 1.4L10.83 12l5.27 5.3a1 1 0 1 1-1.42 1.4l-6-6a1 1 0 0 1 0-1.4l6-6Z" />
      </svg>

      {/* MORE: 화살표 '아래'로 배치 (top%로 미세 조정 가능) */}
      <span
        className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          text-[#15377e] text-base md:text-2xl font-extrabold tracking-wide
          top-[62%]               /* ← 화살표 바로 아래. 필요시 58~66%로 조절 */
        "
      >
        {hoverLabel}
      </span>
    </div>
  );
}