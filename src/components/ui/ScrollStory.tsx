"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

// 各ステップの開始スクロール位置（vh単位の累積）
const stepOffsets = services.map((_, i) =>
  services.slice(0, i).reduce((sum, s) => sum + s.scrollVh, 0)
);
const totalVh = services.reduce((sum, s) => sum + s.scrollVh, 0);

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrolledVh = (-el.getBoundingClientRect().top / window.innerHeight) * 100;
      const idx = stepOffsets.findLastIndex((offset) => scrolledVh >= offset);
      setActiveIndex(Math.min(Math.max(idx, 0), services.length - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = services[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{ height: `${totalVh}vh` }}
      className="relative hidden lg:block"
    >
      {/* 固定表示パネル */}
      <div className="sticky top-0 h-screen bg-cream overflow-hidden flex">

        {/* 写真（左・全高さ） */}
        <div className="w-1/2 lg:w-[58%] h-full relative overflow-hidden shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`photo-${activeIndex}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0 bg-beige-dark"
            >
              {!imgFailed[activeIndex] && (
                <Image
                  src={active.photo}
                  alt={active.tag}
                  fill
                  sizes="(max-width: 1024px) 50vw, 58vw"
                  quality={75}
                  className="object-contain"
                  onError={() => setImgFailed((prev) => ({ ...prev, [activeIndex]: true }))}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/10 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
          {/* 番号バッジ */}
          <div className="absolute bottom-8 left-8 font-sans text-[8rem] font-bold text-white/10 leading-none select-none pointer-events-none">
            {active.number}
          </div>
        </div>

        {/* テキスト（右） */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 relative">

          {/* セクションラベル */}
          <p className="section-label mb-8">Our Services</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
            >
              <span className="text-accent text-xs font-sans tracking-[0.25em] uppercase block mb-3">
                {active.number} — {active.tag}
              </span>
              <h2 className="font-serif text-primary text-3xl sm:text-4xl font-bold leading-snug mb-5 whitespace-pre-line">
                {active.heading}
              </h2>
              <div className="divider" />
              <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
                {active.body}
              </p>
              <Link
                href={active.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent hover:bg-accent hover:text-white px-6 py-3 transition-all duration-200 tracking-wide"
              >
                {active.label} →
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* ステップインジケーター */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 items-center">
            {services.map((_, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "h-10 bg-accent" : "h-2 bg-border"
                }`}
              />
            ))}
          </div>

          {/* スクロールヒント */}
          {activeIndex === 0 && (
            <motion.div
              className="absolute bottom-8 left-10 lg:left-16 flex flex-col items-start gap-1 text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-[0.6rem] tracking-[0.2em] font-sans uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent scroll-line" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
