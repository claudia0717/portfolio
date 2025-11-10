// app/components/GraphicCard.tsx
import Image from "next/image";
import Link from "next/link";
import { brandFont } from "../fonts/brandFont";

type Props = {
  title: string;
  image: string;   // 예: "/images/gd/poster.jpg"
  href?: string;
};

export default function GraphicCard({ title, image, href = "#" }: Props) {
  return (
    <Link href={href} className="group block">
      <div
        className="
          relative aspect-square rounded-full overflow-hidden
          ring-1 ring-white/25 bg-white/5
        "
      >
        {/* 이미지 (항상 보이도록 레이어 고정) */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />

        {/* 중앙 라벨 (확대되지 않게 고정) */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <span
            className={`
              ${brandFont.className}
              !text-[#15377e]
              text-white text-sm md:text-base font-extrabold tracking-wide
              [transform:none]
            `}
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
