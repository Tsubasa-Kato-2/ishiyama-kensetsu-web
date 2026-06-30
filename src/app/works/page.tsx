import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "施工事例",
  description:
    "石山建設の施工事例一覧。お施主様のビフォーの悩みから完成後の暮らしまで、ストーリーとしてご紹介します。",
};

const works = [
  {
    slug: "winter-renovation",
    type: "renovation",
    tag: "フルリフォーム",
    title: "抜け感のあるネイビー外観と業務用キッチンのある住まい",
    meta: "網走市 / 築30年 / 延床面積 100㎡",
    desc: "アウトドアがお好きなご夫婦。少し抜け感のあるネイビーの外観と、料理人の奥様こだわりの業務用キッチンが特徴的です。",
    photo: "/images/works/winter-renovation-01-exterior.jpg",
  },
  {
    slug: "study-corner",
    type: "renovation",
    tag: "フルリフォーム",
    title: "昭和の面影を残す住まいから、黒を基調としたモダンでスタイリッシュな空間へ",
    meta: "網走市 / 築20年 / フルリフォーム",
    desc: "木目調の壁や和室があった味わい深い住まいを、ブラックの外観とダークブラウンの内装で大人モダンな空間にフルリノベーション。",
    photo: "/images/works/study-corner-00-exterior.jpg",
  },
  {
    slug: "open-ldk",
    type: "renovation",
    tag: "フルリフォーム",
    title: "スマートなブラック外観に一新した、断熱フルリフォーム",
    meta: "網走市 / 築30年 / 延床面積 90㎡",
    desc: "スマートなブラックで仕上げた外観のこのお家は、内外共にデザイン・間取りを一新。断熱改修も実施し、ご主人こだわりの造作家具が雰囲気にぴったりです。",
    photo: "/images/works/open-ldk-01-exterior.jpg",
  },
  {
    slug: "shirokane-new-build",
    type: "new",
    tag: "新築",
    title: "青空に映えるほたて漆喰の外壁と、回遊動線でつながるキッチンの家",
    meta: "網走市 / 4LDK / 延床面積 130㎡",
    desc: "青空に映えるほたて漆喰の外壁と象徴的なファザードがアイコンのお家。お料理上手な奥様のこだわりのキッチンと回遊動線が日々の家事ラクを実現させています。",
    photo: "/images/works/shirokane-01-exterior.jpg",
  },
  {
    slug: "custom-kitchen",
    type: "new",
    tag: "新築",
    title: "オホーツク海と呼応する、サックスブルーの外壁とステンレスキッチンの家",
    meta: "網走市 / 3LDK / 延床面積 110㎡",
    desc: "目にも鮮やかなサックスブルーの漆喰がアイコンのお家。窓から覗くオホーツク海に染められたようにリンクしています。",
    photo: "/images/works/custom-kitchen-01-exterior.jpg",
  },
];

export default async function WorksPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const filtered = type ? works.filter((w) => w.type === type) : works;

  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">Works</p>
        <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
          物語がつづく家
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          お施主様の「ビフォーの悩み」から「アフターの暮らし」まで、
          <br />
          リアルなストーリーとしてご紹介します。
        </p>
      </PageHero>

      {/* Tab navigation */}
      <section className="bg-beige sticky top-16 lg:top-20 z-40 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex">
            {[
              { label: "すべて", value: "" },
              { label: "新築", value: "new" },
              { label: "フルリフォーム", value: "renovation" },
            ].map((tab) => {
              const isActive = (tab.value === "" && !type) || tab.value === type;
              return (
                <Link
                  key={tab.value}
                  href={tab.value ? `/works?type=${tab.value}` : "/works"}
                  className={`px-6 py-4 text-sm font-sans font-medium transition-colors border-b-2 ${
                    isActive
                      ? "text-primary border-accent"
                      : "text-muted border-transparent hover:text-primary hover:border-accent/50"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Works grid */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((work, i) => (
              <SlideIn key={work.slug} direction="up" delay={i * 0.1}>
              <Link
                href={`/works/${work.slug}`}
                className="group bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-beige-dark relative overflow-hidden">
                  {work.photo ? (
                    <Image
                      src={work.photo}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-wood/20 to-primary/30 group-hover:opacity-80 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-wood/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                    </>
                  )}
                  <span className="absolute top-4 left-4 bg-accent text-white text-xs px-3 py-1 tracking-wide font-sans">
                    {work.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted text-xs mb-3 font-sans">{work.meta}</p>
                  <h2 className="font-serif text-primary text-base font-bold leading-snug mb-3 group-hover:text-accent transition-colors">
                    {work.title}
                  </h2>
                  <p className="text-muted text-xs leading-relaxed line-clamp-3">{work.desc}</p>
                  <div className="mt-4 text-accent text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    物語を読む →
                  </div>
                </div>
              </Link>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-white text-2xl font-bold mb-4">
            あなたの家づくりの物語を、一緒に始めませんか？
          </p>
          <p className="text-white/60 text-sm mb-8">
            見学会への参加や、無料相談も受け付けています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-accent hover:bg-accent-light text-white py-4 px-8 font-medium transition-colors tracking-wide text-sm"
            >
              見学会・イベント情報
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-accent text-white hover:text-accent py-4 px-8 font-medium transition-all tracking-wide text-sm"
            >
              無料相談フォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
