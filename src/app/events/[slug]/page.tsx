import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { blogs } from "@/lib/blogs";
import { upcomingEvents } from "@/lib/events";
import GoogleCalendarEmbed from "@/components/events/GoogleCalendarEmbed";
import ReservationForm from "@/components/events/ReservationForm";

type Props = { params: Promise<{ slug: string }> };

const categoryColors: Record<string, string> = {
  "家づくりコラム": "bg-accent-pale text-accent",
  "大工造作": "bg-beige-dark text-wood",
  "現場レポート": "bg-primary/10 text-primary",
  "お知らせ": "bg-beige text-muted",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (blog) return { title: blog.title, description: blog.desc };
  const event = upcomingEvents.find((e) => e.slug === slug);
  if (event) return { title: event.title, description: event.desc };
  return { title: "イベント・ブログ" };
}

export async function generateStaticParams() {
  return [
    ...blogs.map((b) => ({ slug: b.slug })),
    ...upcomingEvents.map((e) => ({ slug: e.slug })),
  ];
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  const event = !blog ? upcomingEvents.find((e) => e.slug === slug) : undefined;

  if (!blog && !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-muted mb-4">記事が見つかりませんでした。</p>
          <Link href="/events" className="text-accent hover:underline text-sm">
            イベント・ブログ一覧へ →
          </Link>
        </div>
      </div>
    );
  }

  if (event) {
    return (
      <>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 bg-beige">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/events" className="text-muted text-xs hover:text-primary transition-colors font-sans">
                イベント・ブログ
              </Link>
              <span className="text-muted/50 text-xs">/</span>
              <span className="text-xs px-2 py-0.5 font-sans font-medium bg-accent text-white">
                {event.type}
              </span>
            </div>
            <h1 className="font-serif text-primary text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-6">
              {event.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted font-sans">
              <div>{event.date}</div>
              <div>{event.time}</div>
              <div>{event.place}</div>
              <div>{event.capacity}</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {event.tags.map((tag) => (
                <span key={tag} className="bg-white text-muted text-xs px-2 py-0.5 font-sans border border-border">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Main photo */}
        {event.mainPhoto && (
          <div className="max-w-3xl mx-auto px-4 pt-12 bg-cream">
            <Image
              src={event.mainPhoto}
              alt={event.title}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 768px"
              quality={85}
              priority
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Body */}
        <article className="py-16 px-4 bg-cream">
          <div className="max-w-3xl mx-auto">
            {event.body && (
              <FadeIn>
                <div className="space-y-4">
                  {event.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted text-sm leading-relaxed whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* Additional photos */}
            {event.photos && event.photos.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {event.photos.map((photo, i) => (
                  <div key={i} className="aspect-[4/3] bg-beige-dark relative overflow-hidden">
                    <Image
                      src={photo}
                      alt={`${event.title} 写真${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      quality={75}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Reservation Calendar + Form */}
        <section className="py-20 px-4 bg-beige" id="reservation">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="section-label mb-3">Reservation</p>
                <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">来場予約</h2>
                <div className="divider mx-auto" />
                <p className="text-muted text-sm leading-relaxed">
                  見学会への来場はご予約制となっております。
                  <br />
                  ご希望の日時をフォームよりお申し込みください。
                </p>
              </div>
            </FadeIn>

            <FadeIn className="mb-12">
              <p className="text-sm font-medium text-primary text-center mb-4">開催日程カレンダー</p>
              <GoogleCalendarEmbed />
            </FadeIn>

            <FadeIn>
              <p className="text-sm font-medium text-primary mb-6 border-b border-border pb-3">
                予約申込フォーム
              </p>
              <ReservationForm />
            </FadeIn>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-4 bg-cream border-t border-border">
          <div className="max-w-3xl mx-auto">
            <Link href="/events" className="text-muted hover:text-primary text-sm transition-colors flex items-center gap-2">
              ← イベント・ブログ一覧に戻る
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/events" className="text-muted text-xs hover:text-primary transition-colors font-sans">
              イベント・ブログ
            </Link>
            <span className="text-muted/50 text-xs">/</span>
            <span className={`text-xs px-2 py-0.5 font-sans font-medium ${categoryColors[blog!.category] || "bg-beige text-muted"}`}>
              {blog!.category}
            </span>
          </div>
          <h1 className="font-serif text-primary text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            {blog!.title}
          </h1>
          <div className="flex gap-3 text-sm text-muted font-sans">
            <span>{blog!.date}</span>
            <span>｜</span>
            <span>読了 {blog!.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main photo */}
      {blog!.mainPhoto && (
        <div className="max-w-3xl mx-auto px-4 pt-12 bg-cream">
          <Image
            src={blog!.mainPhoto}
            alt={blog!.title}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 768px"
            quality={85}
            priority
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Body */}
      <article className="py-16 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-4">
              {blog!.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-muted text-sm leading-relaxed whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Additional photos */}
          {blog!.photos && blog!.photos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {blog!.photos.map((photo, i) => (
                <div key={i} className="aspect-[4/3] bg-beige-dark relative overflow-hidden">
                  <Image
                    src={photo}
                    alt={`${blog!.title} 写真${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={75}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Navigation */}
      <section className="py-12 px-4 bg-beige border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/events" className="text-muted hover:text-primary text-sm transition-colors flex items-center gap-2">
            ← イベント・ブログ一覧に戻る
          </Link>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white text-sm px-6 py-3 font-medium transition-colors tracking-wide"
          >
            お問い合わせ →
          </Link>
        </div>
      </section>
    </>
  );
}
