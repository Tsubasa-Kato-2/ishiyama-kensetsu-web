"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { mvvSlides as slides } from "@/lib/mvv";

const stepOffsets = slides.map((_, i) =>
  slides.slice(0, i).reduce((sum, s) => sum + s.scrollVh, 0)
);
const totalVh = slides.reduce((sum, s) => sum + s.scrollVh, 0);

export default function MVVScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrolledVh = (-el.getBoundingClientRect().top / window.innerHeight) * 100;
      const idx = stepOffsets.findLastIndex((offset) => scrolledVh >= offset);
      setActiveIndex(Math.min(Math.max(idx, 0), slides.length - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = slides[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{ height: `${totalVh}vh` }}
      className="relative hidden lg:block"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* 背景写真 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={active.photo}
              alt=""
              fill
              sizes="100vw"
              quality={75}
              className="object-cover"
            />
            {/* 左側（テキスト）は暗く、右側は写真が明るく見えるグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/15" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 lg:px-12">

          {/* ステップインジケーター */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "h-10 bg-accent" : "h-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* ラベル */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-sans text-5xl font-bold text-white/15 leading-none [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
                  {active.number}
                </span>
                <div>
                  <span className="text-accent text-xs font-sans tracking-[0.3em] uppercase block">
                    {active.en}
                  </span>
                  <span className="text-white/60 text-xs font-sans">{active.ja}</span>
                </div>
              </div>

              {/* 見出し */}
              <h2 className="font-serif text-white text-3xl sm:text-4xl font-bold leading-snug mb-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">
                {active.heading}
              </h2>
              {active.sub && (
                <p className="text-accent text-sm font-sans mb-6 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">{active.sub}</p>
              )}
              <div className="w-12 h-0.5 bg-accent mb-8" />

              {/* Mission / Vision: 本文 */}
              {"body" in active && active.body && (
                <div className="space-y-4 max-w-2xl">
                  {active.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-white/90 text-sm leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Value: 3列 */}
              {"values" in active && active.values && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                  {active.values.map((v) => (
                    <div key={v.word} className="border-l-2 border-accent/60 pl-4">
                      <p className="font-serif text-white text-lg font-bold mb-3 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
                        「{v.word}」
                      </p>
                      <ul className="space-y-2">
                        {v.items.map((item, j) => (
                          <li key={j} className="text-white/85 text-xs leading-relaxed flex gap-2 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                            <span className="text-accent shrink-0">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
