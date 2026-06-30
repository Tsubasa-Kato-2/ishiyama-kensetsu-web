"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  src: string;
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  overlay?: string;
};

export default function ParallaxSection({
  src,
  children,
  className = "",
  speed = 0.25,
  overlay = "bg-primary/55",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setTranslateY((rect.top + rect.height / 2 - window.innerHeight / 2) * speed);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* パララックス背景 */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${translateY}px) scale(1.2)`,
          willChange: "transform",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="w-full h-full object-cover" />
        {/* 写真未設定時のフォールバック */}
        <div className="absolute inset-0 bg-gradient-to-br from-wood to-primary -z-10" />
      </div>
      {/* オーバーレイ */}
      <div className={`absolute inset-0 ${overlay}`} />
      {/* コンテンツ */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
