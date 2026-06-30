import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import BlogFilter from "@/components/events/BlogFilter";
import { upcomingEvents } from "@/lib/events";
import { blogs } from "@/lib/blogs";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "イベント・ブログ",
  description:
    "石山建設の完成見学会・相談会・住まいに関するブログ記事。網走市開催のイベント情報も随時更新。",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">Events & Blog</p>
        <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
          イベント・ブログ
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          完成見学会・相談会の情報と、
          <br />
          住まいに関するコラム・現場レポートをお届けします。
        </p>
      </PageHero>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
          <div className="mb-10">
            <p className="section-label mb-3">Upcoming Events</p>
            <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">開催予定のイベント</h2>
            <div className="divider" />
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <SlideIn key={event.id} direction="up" delay={i * 0.1}>
              <Link href={`/events/${event.slug}`} className="block h-full">
                <article className="bg-white border border-border hover:border-accent-light hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <div className="aspect-[16/9] bg-beige-dark relative overflow-hidden">
                    {event.mainPhoto ? (
                      <Image
                        src={event.mainPhoto}
                        alt={event.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={70}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-wood/15 to-primary/20" />
                    )}
                    <span className="absolute top-3 left-3 bg-accent text-white text-xs px-2 py-0.5 font-sans tracking-wide">
                      {event.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-primary text-base font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed mb-3">{event.date}</p>
                    <p className="text-muted text-xs leading-relaxed line-clamp-2">{event.desc}</p>
                    <div className="mt-4 text-accent text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      詳細を見る →
                    </div>
                  </div>
                </article>
              </Link>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 px-4 bg-beige">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-8">
            <p className="section-label mb-3">Blog</p>
            <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">ブログ・コラム</h2>
            <div className="divider" />
          </FadeIn>
          <BlogFilter blogs={blogs} />
        </div>
      </section>

    </>
  );
}
