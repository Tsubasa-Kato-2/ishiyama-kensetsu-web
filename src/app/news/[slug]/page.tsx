import type { Metadata } from "next";
import Link from "next/link";
import { newsList } from "@/lib/news";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = newsList.find((n) => n.slug === slug);
  if (!news) return { title: "お知らせ" };
  return { title: news.title };
}

export async function generateStaticParams() {
  return newsList.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = newsList.find((n) => n.slug === slug);
  if (!news) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-muted text-xs hover:text-primary transition-colors font-sans">
              トップ
            </Link>
            <span className="text-muted/50 text-xs">/</span>
            <span className="text-muted text-xs font-sans">新着情報</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-muted text-xs font-sans">{news.date}</span>
            <span className="bg-accent-pale text-accent text-[0.68rem] px-2 py-0.5 font-medium tracking-wide">
              {news.tag}
            </span>
          </div>
          <h1 className="font-serif text-primary text-2xl sm:text-3xl font-bold leading-snug">
            {news.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {news.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted text-sm leading-relaxed whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-muted hover:text-primary text-sm transition-colors flex items-center gap-2"
            >
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
