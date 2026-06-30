import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import HeroSlider from "@/components/ui/HeroSlider";
import { fetchInstagramPosts } from "@/lib/instagram";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import TextReveal from "@/components/ui/TextReveal";
import ScrollStory from "@/components/ui/ScrollStory";
import ServicesMobile from "@/components/ui/ServicesMobile";
import EventsBanner from "@/components/ui/EventsBanner";
import { upcomingEvents } from "@/lib/events";
import { manualInstagramPhotos } from "@/lib/instagram-manual";

export const metadata: Metadata = {
  title: "株式会社石山建設 | 家づくりで、物語をつくる",
  description:
    "北海道網走市の工務店・株式会社石山建設。新築・フルリフォームから大工造作まで、お客様の暮らしに合わせた「物語のある家づくり」をご提案します。",
};


const strengths = [
  {
    number: "01",
    title: "対話から生まれる\n理想の空間",
    body: "お客様の「好き」や「暮らし方」を丁寧にヒアリング。ライフスタイルに合った家づくりを一緒に考えます。",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "職人によるオリジナル大工造作",
    body: "キッチン・洗面台・収納棚まで、職人がミリ単位で作り上げる大工造作。世界にひとつだけの空間をお届けします。",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "網走の冬を知り尽くした\n確かな施工技術",
    body: "北海道の厳しい寒さに対応した断熱・気密設計。現場写真で進捗を共有し、見えない部分まで誠実に施工します。",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const worksPreview = [
  {
    slug: "shirokane-new-build",
    tag: "新築",
    title: "青空に映えるほたて漆喰の外壁と、\n回遊動線でつながるキッチンの家",
    meta: "網走市 / 4LDK / 延床面積 130㎡",
    desc: "青空に映えるほたて漆喰の外壁と象徴的なファザードがアイコンのお家。お料理上手な奥様のこだわりのキッチンと回遊動線が日々の家事ラクを実現させています。",
    photo: "/images/works/shirokane-01-exterior.jpg",
  },
  {
    slug: "winter-renovation",
    tag: "フルリフォーム",
    title: "抜け感のあるネイビー外観と\n業務用キッチンのある住まい",
    meta: "網走市 / 築30年 / 延床面積 100㎡",
    desc: "アウトドアがお好きなご夫婦。少し抜け感のあるネイビーの外観と、料理人の奥様こだわりの業務用キッチンが特徴的です。",
    photo: "/images/works/winter-renovation-01-exterior.jpg",
  },
  {
    slug: "custom-kitchen",
    tag: "新築",
    title: "オホーツク海と呼応する、\nサックスブルーの外壁とステンレスキッチンの家",
    meta: "網走市 / 3LDK / 延床面積 110㎡",
    desc: "目にも鮮やかなサックスブルーの漆喰がアイコンのお家。窓から覗くオホーツク海に染められたようにリンクしています。",
    photo: "/images/works/custom-kitchen-01-exterior.jpg",
  },
];

const INSTAGRAM_HANDLE = "ishiyama_kensetsu";

export default async function HomePage() {
  const igPosts = await fetchInstagramPosts(6);
  return (
    <>
      {/* ── Hero（写真 or グラデーション背景）── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* 背景スライダー：public/images/hero-1.jpg 〜 hero-3.jpg を配置すると表示 */}
        <HeroSlider />
        {/* 暗めのオーバーレイ（写真の上に重ねてテキストを読みやすくする） */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/45" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <TextReveal text="Ishiyama Construction" className="section-label mb-6 text-accent block" delay={0.2} />
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
            <TextReveal text="家づくりで、" delay={0.3} />
            <br />
            <TextReveal text="物語をつくる" className="text-accent" delay={0.5} />
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-loose font-sans text-center">
            <TextReveal text="家づくりを通じて" as="span" delay={0.7} /><br />
            <TextReveal text="お客様と一緒にたくさんの「物語」や「思い出」をつくる" as="span" delay={0.85} /><br />
            <TextReveal text="網走市の工務店" as="span" delay={1.0} />
          </p>

          {/* 2つの入り口 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 mt-6 sm:mt-0">
            <Link
              href="/works?type=new"
              className="group flex-1 sm:flex-none bg-accent hover:bg-accent-light text-white px-4 sm:px-8 py-2 sm:py-5 font-medium tracking-wide transition-all duration-300 text-center"
            >
              <span className="text-[0.65rem] sm:text-xs font-sans text-white/70 block mb-0.5 sm:mb-1 tracking-widest uppercase">New Build</span>
              <span className="font-serif text-sm sm:text-lg">【新築】 ゼロから紡ぐ、<br />新しい物語</span>
            </Link>
            <Link
              href="/works?type=renovation"
              className="group flex-1 sm:flex-none border border-white/40 hover:border-accent hover:bg-white/5 text-white hover:text-accent px-4 sm:px-8 py-2 sm:py-5 font-medium tracking-wide transition-all duration-300 text-center"
            >
              <span className="text-[0.65rem] sm:text-xs font-sans text-white/50 block mb-0.5 sm:mb-1 tracking-widest uppercase">Full Renovation</span>
              <span className="font-serif text-sm sm:text-lg">【フルリフォーム】 受け継いだ住まいに、<br />次の物語を</span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase font-sans">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-accent/70 to-transparent scroll-line" />
          </div>
        </div>
      </section>

      {/* ── 見学会バナー（イベント・ブログページ src/lib/events.ts と連動）── */}
      <EventsBanner events={upcomingEvents} />

      {/* ── Works Preview ── */}
      <section className="py-32 px-4 bg-beige">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label mb-3">Works</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold">物語がつづく家</h2>
              <div className="divider" />
              <p className="text-muted text-sm max-w-md">
                お施主様のリアルな悩みと、石山建設の提案をストーリーとしてお届けします。
              </p>
            </div>
            <Link
              href="/works"
              className="text-accent hover:text-accent-light text-sm font-medium tracking-wide transition-colors flex items-center gap-1 shrink-0"
            >
              施工事例をすべて見る →
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {worksPreview.map((work, i) => (
              <SlideIn
                key={work.slug}
                direction={i === 0 ? "left" : i === 1 ? "up" : "right"}
                delay={i * 0.1}
              >
              <Link
                href={`/works/${work.slug}`}
                className="group bg-white hover:shadow-xl transition-all duration-300 overflow-hidden block"
              >
                <div className="aspect-[4/3] bg-beige-dark relative overflow-hidden">
                  {work.photo ? (
                    <Image
                      src={work.photo}
                      alt={work.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
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
                <div className="p-6">
                  <p className="text-muted text-xs mb-2 font-sans">{work.meta}</p>
                  <h3 className="font-serif text-primary text-base font-bold leading-snug mb-3 group-hover:text-accent transition-colors whitespace-pre-line">
                    {work.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed line-clamp-3">{work.desc}</p>
                  <div className="mt-4 text-accent text-xs font-medium group-hover:translate-x-1 transition-transform inline-flex">
                    物語を読む →
                  </div>
                </div>
              </Link>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services（スクロールストーリー）── */}
      <ScrollStory />
      <ServicesMobile />

      {/* ── Instagram ── */}
      <section className="py-20 px-4 bg-beige">
        <div className="max-w-7xl mx-auto">
          {/* ヘッダー */}
          <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
                <svg className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="text-primary font-semibold text-base font-sans leading-tight">北の匠　石山建設</p>
              </div>
            </div>
            <a
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:text-white border border-accent hover:bg-accent px-5 py-2 transition-all duration-200 tracking-wide"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              フォローする
            </a>
          </FadeIn>

          {/* 写真グリッド（6枚）*/}
          <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {igPosts.length > 0
              ? igPosts.map((post) => {
                  const imgSrc =
                    post.media_type === "VIDEO"
                      ? (post.thumbnail_url ?? "")
                      : post.media_url;
                  return (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group aspect-square bg-beige-dark relative overflow-hidden block"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={post.caption?.slice(0, 40) ?? "Instagram投稿"}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-200" />
                    </a>
                  );
                })
              : /* トークン未設定時：手動設定した写真があれば表示、なければアイコンのプレースホルダー */
                manualInstagramPhotos.length > 0
                ? manualInstagramPhotos.map((item, i) => (
                    <a
                      key={i}
                      href={item.link ?? `https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group aspect-square bg-beige-dark relative overflow-hidden block"
                    >
                      <Image
                        src={item.photo}
                        alt="Instagram投稿"
                        fill
                        sizes="(max-width: 640px) 33vw, 16vw"
                        quality={70}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-200" />
                    </a>
                  ))
                : Array.from({ length: 6 }).map((_, i) => (
                  <a
                    key={i}
                    href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group aspect-square bg-beige-dark relative overflow-hidden block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-wood/20 to-primary/40 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-200" />
                  </a>
                ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── News ── */}
      <section className="py-28 px-4 bg-beige">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="section-label mb-2">News</p>
              <h2 className="font-serif text-2xl text-primary font-bold">新着情報</h2>
            </div>
            <Link
              href="/events"
              className="text-accent hover:text-accent-light text-sm font-medium tracking-wide transition-colors"
            >
              一覧を見る →
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
          <div className="space-y-0">
            {[
              { date: "2024.06.01", tag: "見学会", text: "【完成見学会】7月13日(土)〜14日(日) 網走市にて開催決定！" },
              { date: "2024.05.15", tag: "施工事例", text: "新しい施工事例「断熱リノベの工夫」を公開しました。" },
              { date: "2024.05.01", tag: "お知らせ", text: "ホームページをリニューアルしました。" },
            ].map((news, i) => (
              <Link
                key={i}
                href="/events"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 border-b border-border last:border-0 group"
              >
                <span className="text-muted text-xs font-sans shrink-0">{news.date}</span>
                <span className={`text-[0.68rem] px-2 py-0.5 font-medium tracking-wide shrink-0 ${
                  news.tag === "見学会" ? "bg-accent text-white" : "bg-accent-pale text-accent"
                }`}>
                  {news.tag}
                </span>
                <span className="text-primary text-sm group-hover:text-accent transition-colors">
                  {news.text}
                </span>
              </Link>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
