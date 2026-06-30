import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import FurnitureFilter from "@/components/furniture/FurnitureFilter";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "大工造作ギャラリー",
  description:
    "石山建設の自社職人が作り上げるオリジナル大工造作のギャラリー。キッチン・洗面台・壁面収納・スタディスペースなど。",
};

const categories = [
  { id: "kitchen", label: "造作キッチン" },
  { id: "washroom", label: "造作洗面台" },
  { id: "storage", label: "壁面収納" },
  { id: "counter", label: "カウンター・棚" },
  { id: "other", label: "その他" },
];

const galleryItems = [
  { id: 1,  category: "counter",  title: "DIYカウンターと上棚",    tag: "カウンター・棚", photo: "/images/furniture/01-study-desk.jpg" },
  { id: 2,  category: "storage",  title: "ウォークスルークロゼット", tag: "壁面収納",       photo: "/images/furniture/02-utility-storage.jpg" },
  { id: 3,  category: "counter",  title: "シューズラック",           tag: "カウンター・棚", photo: "/images/furniture/03-entrance-rack.jpg" },
  { id: 4,  category: "storage",  title: "シューズクロゼット",      tag: "壁面収納",       photo: "/images/furniture/04-shoe-closet.jpg" },
  { id: 5,  category: "other",    title: "トイレ収納",             tag: "その他",         photo: "/images/furniture/05-toilet-cabinet.jpg" },
  { id: 6,  category: "storage",  title: "パントリー",             tag: "壁面収納",       photo: "/images/furniture/06-pantry.jpg" },
  { id: 7,  category: "storage",  title: "造作カップボード",        tag: "壁面収納",       photo: "/images/furniture/07-walkin-storage.jpg" },
  { id: 8,  category: "counter",  title: "造作カップボード",        tag: "カウンター・棚", photo: "/images/furniture/08-kitchen-sideboard.jpg" },
  { id: 9,  category: "kitchen",  title: "造作テーブル",           tag: "造作キッチン",   photo: "/images/furniture/09-kitchen-counter.jpg" },
  { id: 11, category: "storage",  title: "造作テレビボード",        tag: "壁面収納",       photo: "/images/furniture/11-tv-board-01.jpg" },
  { id: 13, category: "washroom", title: "造作洗面台と造作鏡",      tag: "造作洗面台",     photo: "/images/furniture/13-washroom-01.jpg" },
  { id: 14, category: "washroom", title: "造作洗面台と造作鏡",      tag: "造作洗面台",     photo: "/images/furniture/14-washroom-02.jpg" },
  { id: 15, category: "washroom", title: "造作洗面台と造作鏡",      tag: "造作洗面台",     photo: "/images/furniture/15-washroom-03.jpg" },
];

export default function FurniturePage() {
  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">Custom Furniture</p>
        <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
          石山建設の大工造作
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          自社職人がミリ単位で作り上げる、
          <br />
          世界にひとつだけのオリジナル家具のギャラリー。
        </p>
      </PageHero>

      {/* Philosophy */}
      <section className="relative py-16 px-4 bg-cream overflow-hidden">
        {/* スマホのみ：写真を背景に */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="/images/furniture/craftsman-work.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/78" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
              <p className="section-label mb-3">Our Craft</p>
              <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold mb-4">
                職人の手が生み出す
                <br />
                「ちょうどいい」空間
              </h2>
              </FadeIn>
              <div className="divider" />
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-primary/75">
                  大工造作の最大の魅力は「サイズ」「素材」「デザイン」をすべてお客様に合わせられること。
                </p>
                <p className="text-primary/75">
                  天井までぴったりの収納棚、家族の身長に合わせたカウンター高さ、
                  暮らし方に合わせた引き出しの配置——既製品では叶えられない「ちょうどいい」を実現します。
                </p>
                <p className="text-primary/75">
                  石山建設の職人は、木の特性を熟知したこだわりの職人です。
                  木目の向きから素材の選定まで、一つひとつに目を向けながら丁寧に作り上げます。
                </p>
              </div>
            </div>
            {/* PC用画像 */}
            <div className="hidden lg:block relative w-full">
              <Image
                src="/images/furniture/craftsman-work.jpg"
                alt="職人の手仕事"
                width={1120}
                height={1280}
                sizes="50vw"
                quality={80}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <FurnitureFilter categories={categories} galleryItems={galleryItems} />

      {/* Process */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
          <div className="text-center mb-12">
            <p className="section-label mb-3">Process</p>
            <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">
              大工造作ができるまで
            </h2>
            <div className="divider mx-auto" />
          </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "ヒアリング", body: "どんな使い方をしたいか、好みのスタイルを丁寧にお聞きします" },
              { step: "02", title: "デザイン提案", body: "素材・色・サイズの提案とラフスケッチをご提示します" },
              { step: "03", title: "製作・施工", body: "自社職人が工場で製作し、現場で取り付けます" },
              { step: "04", title: "完成・確認", body: "仕上がりを確認し、使い方をご説明します" },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-accent text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 font-sans">
                  {p.step}
                </div>
                <h3 className="font-serif text-primary text-base font-bold mb-2">{p.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
