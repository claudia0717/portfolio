// app/components/UXUIClient.tsx
"use client";

import dynamic from "next/dynamic";

const UXUICarousel = dynamic(() => import("./UXUICarousel"), {
  ssr: false,
  loading: () => <div className="text-center py-10">Loading…</div>,
});

export default function UXUIClient() {
  return <UXUICarousel />;
}
