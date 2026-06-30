"use client";

import { useState } from "react";
import Image from "next/image";
import SlideIn from "@/components/ui/SlideIn";

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  tag: string;
  photo?: string;
};

type Category = {
  id: string;
  label: string;
};

export default function FurnitureFilter({
  categories,
  galleryItems,
}: {
  categories: Category[];
  galleryItems: GalleryItem[];
}) {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  // 各カテゴリーの代表写真（カテゴリー内の最初の写真）
  const categoryCover = (catId: string) =>
    galleryItems.find((item) => item.category === catId && item.photo)?.photo;

  return (
    <>
      {/* カテゴリーカード */}
      {active === "all" && (
        <section className="py-16 px-4 bg-beige border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {categories.map((cat) => {
                const cover = categoryCover(cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className="group relative aspect-[4/3] overflow-hidden bg-beige-dark text-left"
                  >
                    {cover ? (
                      <Image
                        src={cover}
                        alt={cat.label}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        quality={70}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-wood/20 to-accent/10" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-white font-serif text-sm sm:text-base font-bold">
                      {cat.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 絞り込み中はカテゴリーバーを表示 */}
      {active !== "all" && (
        <section className="py-6 px-4 bg-beige border-y border-border">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <p className="font-serif text-primary text-lg font-bold">
              {categories.find((c) => c.id === active)?.label}
            </p>
            <button
              onClick={() => setActive("all")}
              className="text-accent text-sm font-sans hover:underline flex items-center gap-1"
            >
              ← すべての分類を見る
            </button>
          </div>
        </section>
      )}

      {/* ギャラリー（マソンリーレイアウト） */}
      {active !== "all" && (
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-[1600px] mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
            {filtered.map((item, i) => (
              <SlideIn key={item.id} direction="up" delay={i * 0.05}>
                <div
                  className="group bg-white border border-border hover:border-accent-light hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer mb-5 break-inside-avoid"
                  onClick={() => setLightbox(item)}
                >
                  <div className="bg-beige-dark relative overflow-hidden">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt={item.title}
                        width={1000}
                        height={750}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        quality={75}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="aspect-[4/3] bg-gradient-to-br from-wood/20 to-accent/10" />
                    )}
                    <span className="absolute top-3 left-3 bg-accent text-white text-[0.65rem] px-2 py-0.5 tracking-wide font-sans">
                      {item.tag}
                    </span>
                    {/* 拡大アイコン */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-primary text-sm font-bold leading-snug group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ライトボックス */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="閉じる"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.photo}
              alt={lightbox.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <span className="text-accent text-xs font-sans tracking-wide">{lightbox.tag}</span>
              <p className="text-white font-serif text-base mt-1">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
