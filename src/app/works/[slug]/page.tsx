import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import PhotoGallery from "@/components/works/PhotoGallery";
import { works, findWork, CATEGORY_LABEL } from "@/lib/works";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) return { title: "施工事例" };
  return {
    title: work.title,
    description: work.overview,
  };
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = findWork(slug);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-muted mb-4">施工事例が見つかりませんでした。</p>
          <Link href="/works" className="text-accent hover:underline text-sm">
            施工事例一覧へ →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/works" className="text-muted text-xs hover:text-primary transition-colors font-sans">
              施工事例
            </Link>
            <span className="text-muted/50 text-xs">/</span>
            <span className="text-accent text-xs font-sans">{CATEGORY_LABEL[work.category]}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted font-sans">
            <span>{work.meta}</span>
            <span>｜</span>
            <span>{work.client}</span>
            <span>｜</span>
            <span>{work.period}</span>
          </div>
        </div>
      </section>

      {/* Main image */}
      <div className="aspect-[4/3] sm:aspect-[16/7] bg-beige-dark relative overflow-hidden">
        {work.mainPhoto ? (
          <>
            <Image
              src={work.mainPhoto}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              quality={50}
              className="object-cover scale-110 blur-2xl opacity-60"
            />
            <Image
              src={work.mainPhoto}
              alt={work.title}
              fill
              sizes="100vw"
              quality={80}
              priority
              className="object-contain"
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-wood/30 to-primary/40 flex items-center justify-center">
            <span className="text-white/10 text-8xl font-serif">石山建設</span>
          </div>
        )}
        {work.instagramUrl && (
          <a
            href={work.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-primary text-xs px-4 py-2 flex items-center gap-2 transition-colors font-sans"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            このルームツアーをInstagramで見る →
          </a>
        )}
      </div>

      {/* Story content */}
      <article className="py-16 px-4 bg-cream">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Overview */}
          <div>
            <p className="text-accent text-sm font-sans tracking-widest uppercase mb-2">Overview</p>
            <div className="space-y-4">
              {work.overview.split("\n\n").map((para, i) => (
                <p key={i} className="font-serif text-primary text-lg leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {work.category === "new" ? (
            <>
              <hr className="border-border" />

              {/* 完成写真 */}
              <div>
                <FadeIn>
                <p className="section-label mb-6">Photo Gallery</p>
                </FadeIn>
                <PhotoGallery photos={work.photos ?? [1, 2, 3, 4, 5, 6].map(() => undefined)} placeholderLabel="写真" />
              </div>

              {/* Customer voice */}
              {work.quote && (
                <div className="bg-accent-pale border-l-4 border-accent p-8">
                  <p className="text-accent text-xs font-sans tracking-widest uppercase mb-4">
                    お施主様の声
                  </p>
                  <blockquote className="font-sans text-primary text-sm leading-relaxed space-y-3 whitespace-pre-line">
                    {work.quote.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </blockquote>
                </div>
              )}
            </>
          ) : (
            <>
              <hr className="border-border" />

              {/* Before */}
              <div>
                <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-primary text-white text-xs px-3 py-1 font-sans tracking-wide">
                    BEFORE
                  </span>
                  <h2 className="font-serif text-primary text-xl font-bold">
                    {work.before?.heading}
                  </h2>
                </div>
                </FadeIn>
                <div className="bg-beige border-l-2 border-muted/30 p-6">
                  {(work.before?.body ?? "").split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted text-sm leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Before photos */}
              <PhotoGallery photos={work.before?.photos ?? [undefined, undefined]} placeholderLabel="Before" />

              {/* After */}
              <div>
                <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-wood text-white text-xs px-3 py-1 font-sans tracking-wide">
                    AFTER
                  </span>
                  <h2 className="font-serif text-primary text-xl font-bold">
                    {work.after?.heading}
                  </h2>
                </div>
                </FadeIn>
                <div className="space-y-4">
                  {(work.after?.body ?? "").split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* After photos */}
              <PhotoGallery photos={work.after?.photos ?? [undefined, undefined, undefined, undefined]} placeholderLabel="After" />

              {/* Customer voice */}
              {work.quote && (
                <div className="bg-accent-pale border-l-4 border-accent p-8">
                  <p className="text-accent text-xs font-sans tracking-widest uppercase mb-4">
                    お施主様の声
                  </p>
                  <blockquote className="font-sans text-primary text-sm leading-relaxed space-y-3 whitespace-pre-line">
                    {work.quote.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </blockquote>
                </div>
              )}
            </>
          )}
        </div>
      </article>

      {/* Navigation */}
      <section className="py-12 px-4 bg-beige border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/works" className="text-muted hover:text-primary text-sm transition-colors flex items-center gap-2">
            ← 施工事例一覧に戻る
          </Link>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white text-sm px-6 py-3 font-medium transition-colors tracking-wide"
          >
            この事例について相談する →
          </Link>
        </div>
      </section>
    </>
  );
}
