"use client";

import { useState } from "react";
import Image from "next/image";
import SlideIn from "@/components/ui/SlideIn";

export default function PhotoGallery({
  photos,
  columns = "grid-cols-2 sm:grid-cols-3",
  aspect = "aspect-[4/3]",
  placeholderLabel,
}: {
  photos: (string | undefined)[];
  columns?: string;
  aspect?: string;
  placeholderLabel?: string;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className={`grid ${columns} gap-3`}>
        {photos.map((photo, i) => (
          <SlideIn key={i} direction="up" delay={i * 0.07}>
          <div
            className={`${aspect} bg-beige-dark relative overflow-hidden ${photo ? "cursor-pointer group" : ""}`}
            onClick={() => photo && setLightbox(photo)}
          >
            {photo ? (
              <>
                <Image
                  src={photo}
                  alt={`${placeholderLabel ?? "写真"} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  quality={70}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-wood/20 to-primary/25 flex items-center justify-center">
                <span className="text-white/10 text-2xl font-sans">{placeholderLabel ?? "写真"} {i + 1}</span>
              </div>
            )}
          </div>
          </SlideIn>
        ))}
      </div>

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
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
