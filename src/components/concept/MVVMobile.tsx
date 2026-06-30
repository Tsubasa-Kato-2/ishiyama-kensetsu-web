import Image from "next/image";
import { mvvSlides } from "@/lib/mvv";
import FadeIn from "@/components/ui/FadeIn";

export default function MVVMobile() {
  return (
    <section className="lg:hidden">
      {mvvSlides.map((slide, i) => (
        <div key={slide.number} className="relative py-20 px-6 overflow-hidden">
          <Image
            src={slide.photo}
            alt=""
            fill
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
          {/* 上部は暗め、下部はやや明るくして写真を見せるグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40" />

          <FadeIn className="relative z-10">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-sans text-4xl font-bold text-white/15 leading-none [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                {slide.number}
              </span>
              <div>
                <span className="text-accent text-xs font-sans tracking-[0.3em] uppercase block">
                  {slide.en}
                </span>
                <span className="text-white/60 text-xs font-sans">{slide.ja}</span>
              </div>
            </div>

            <h2 className="font-serif text-white text-2xl font-bold leading-snug mb-3 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
              {slide.heading}
            </h2>
            {slide.sub && (
              <p className="text-accent text-sm font-sans mb-5 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">{slide.sub}</p>
            )}
            <div className="w-10 h-0.5 bg-accent mb-6" />

            {"body" in slide && slide.body && (
              <div className="space-y-4">
                {slide.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-white/90 text-sm leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {"values" in slide && slide.values && (
              <div className="space-y-6">
                {slide.values.map((v) => (
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
          </FadeIn>
        </div>
      ))}
    </section>
  );
}
