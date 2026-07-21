"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  // mobilePosition: スマホ表示時のobject-position。人物が見切れる場合はここを調整
  { src: "/images/hero-1.jpg", alt: "石山建設の施工事例", mobilePosition: "object-[50%_80%]" },
  { src: "/images/hero-2.jpg", alt: "石山建設の施工事例", mobilePosition: "object-[40%_center]" },
  { src: "/images/hero-3.jpg", alt: "石山建設の施工事例", mobilePosition: "object-[40%_90%]" },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set());

  const visibleSlides = SLIDES.filter((_, i) => !failed.has(i));

  const next = useCallback(() => {
    setCurrent((prev) => {
      let nextIdx = (prev + 1) % SLIDES.length;
      let count = 0;
      while (failed.has(nextIdx) && count < SLIDES.length) {
        nextIdx = (nextIdx + 1) % SLIDES.length;
        count++;
      }
      return nextIdx;
    });
  }, [failed]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  // 現在表示中のスライドが失敗したら次へ
  useEffect(() => {
    if (failed.has(current)) {
      next();
    }
  }, [failed, current, next]);

  return (
    <div className="absolute inset-0">
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          quality={75}
          className={`object-cover ${slide.mobilePosition} sm:object-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          onError={() => setFailed((prev) => new Set(prev).add(i))}
        />
      ))}

      {/* インジケータードット（画像が2枚以上あるときだけ表示） */}
      {visibleSlides.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, i) =>
            failed.has(i) ? null : (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`スライド ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-8" : "bg-white/40 w-1.5"
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
