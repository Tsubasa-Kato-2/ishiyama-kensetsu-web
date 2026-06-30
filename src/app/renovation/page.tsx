import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";

export const metadata: Metadata = {
  title: "お困りごと解決（部分リフォーム・修繕）",
  description:
    "キッチン交換・浴室リフォーム・窓の断熱改修など、地域の皆さまの住まいのお困りごとを解決します。石山建設・網走市。",
};

const menus = [
  {
    category: "水まわり",
    icon: "🚿",
    items: [
      { title: "キッチンリフォーム", desc: "古くなったキッチンの交換・使い勝手の改善。造作カウンターとの組み合わせも対応。", price: "50万円〜" },
      { title: "浴室（ユニットバス）交換", desc: "古い在来工法浴室からシステムバスへのリフォーム。断熱浴槽で冬も快適に。", price: "100万円〜" },
      { title: "トイレリフォーム", desc: "和式から洋式へ、または最新機種への交換。バリアフリー対応も承ります。", price: "20万円〜" },
      { title: "洗面台交換", desc: "既製品交換から造作洗面台まで。収納量と使いやすさをご提案します。", price: "15万円〜" },
    ],
  },
  {
    category: "断熱・窓",
    icon: "🌡️",
    items: [
      { title: "内窓（二重窓）設置", desc: "今ある窓の内側にもう一枚窓を設置。断熱・防露・防音効果が一度に得られます。", price: "3万円〜/枚" },
      { title: "サッシ・窓交換", desc: "古いアルミサッシを樹脂サッシに交換。北海道の厳しい冬の結露・熱損失を軽減。", price: "15万円〜/か所" },
      { title: "断熱材追加工事", desc: "床下・天井裏・壁の断熱材を追加・交換。光熱費削減と住み心地の改善。", price: "要お見積もり" },
    ],
  },
  {
    category: "内装",
    icon: "🏠",
    items: [
      { title: "フローリング張り替え", desc: "傷や劣化した床材の交換。無垢材・フロアタイルなどご予算に合わせてご提案。", price: "10万円〜/室" },
      { title: "クロス（壁紙）張り替え", desc: "汚れや剥がれたクロスの全面・部分張り替え。アクセントウォールも対応。", price: "5万円〜/室" },
      { title: "造作収納追加", desc: "「収納が足りない」という悩みを解消。自社職人がお客様に合った収納を製作。", price: "10万円〜" },
    ],
  },
  {
    category: "外装・修繕",
    icon: "🔧",
    items: [
      { title: "屋根・外壁塗装", desc: "色褪せ・傷みが出てきた外壁・屋根の塗装工事。防水性能の回復と美観の改善。", price: "50万円〜" },
      { title: "雪止め・除雪ガード工事", desc: "北海道ならではの雪対策工事。落雪による事故・被害を防ぎます。", price: "要お見積もり" },
      { title: "シロアリ・腐朽対策", desc: "床下の点検・防蟻処理・腐朽部材の補修。見えない部分から住宅を守ります。", price: "要お見積もり" },
    ],
  },
  {
    category: "バリアフリー",
    icon: "♿",
    items: [
      { title: "手すり設置", desc: "廊下・トイレ・浴室への手すり設置。転倒防止で安心の暮らしをサポート。", price: "3万円〜/か所" },
      { title: "段差解消・スロープ設置", desc: "玄関・室内の段差解消。車椅子対応スロープの設置も承ります。", price: "要お見積もり" },
      { title: "ドア・開口部の拡張", desc: "車椅子が通れるよう開口部を広げる工事。引き戸への変更も対応。", price: "要お見積もり" },
    ],
  },
];

export default function RenovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-beige overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4 text-accent">Renovation</p>
          <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
            お困りごと解決
          </h1>
          <p className="text-muted text-sm leading-relaxed">
            「ちょっとここだけ直したい」
            <br />
            地域の皆さまの住まいのお困りごとに、気軽に相談できる工務店でありたい。
          </p>
        </div>
      </section>

      {/* Lead */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
          <p className="section-label mb-3">Our Promise</p>
          <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold mb-4">
            「ちょっと石山建設さんに相談しよう」
          </h2>
          </FadeIn>
          <div className="divider mx-auto" />
          <p className="text-muted text-sm leading-relaxed max-w-2xl mx-auto">
            大きなリフォームでなくても、まずはお気軽にご相談ください。
            どんな小さな工事でも、地域に根ざした工務店として、丁寧にお応えします。
            現地を見てから正確なお見積もりをご提示しますので、お電話・メールからお気軽に。
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
          <div className="text-center mb-12">
            <p className="section-label mb-3">Menu</p>
            <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">
              リフォームメニュー
            </h2>
            <div className="divider mx-auto" />
            <p className="text-muted text-xs font-sans">※ 価格はあくまで目安です。詳細は現地確認・お見積もりにてご案内します。</p>
          </div>
          </FadeIn>

          <div className="space-y-12">
            {menus.map((menu) => (
              <div key={menu.category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{menu.icon}</span>
                  <h3 className="font-serif text-primary text-xl font-bold">{menu.category}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {menu.items.map((item, i) => (
                    <SlideIn key={i} direction="up" delay={i * 0.1}>
                    <div
                      className="bg-white border border-border hover:border-accent-light hover:shadow-md transition-all duration-300 p-5"
                    >
                      <h4 className="font-serif text-primary text-base font-bold mb-2">{item.title}</h4>
                      <p className="text-muted text-xs leading-relaxed mb-3">{item.desc}</p>
                      <p className="text-accent text-sm font-medium font-sans">{item.price}</p>
                    </div>
                    </SlideIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
          <div className="text-center mb-12">
            <p className="section-label mb-3">Flow</p>
            <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">
              ご相談からリフォームまでの流れ
            </h2>
            <div className="divider mx-auto" />
          </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "ご相談", body: "お電話・メールでお気軽にご連絡ください" },
              { step: "02", title: "現地確認", body: "実際に現場を拝見し、状況を確認します" },
              { step: "03", title: "お見積もり", body: "詳細な見積書を提示。内容をご確認ください" },
              { step: "04", title: "施工・完成", body: "丁寧に施工し、完成後に確認していただきます" },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-wood text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 font-sans">
                  {step.step}
                </div>
                <h3 className="font-serif text-primary text-base font-bold mb-2">{step.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-white text-2xl sm:text-3xl font-bold mb-4">
            まずはお気軽に
            <br />
            ご連絡ください
          </h2>
          <p className="text-white/60 text-sm mb-8">
            「こんな小さなことで相談していいの？」大歓迎です。
            <br />
            地元の工務店として、気軽に声をかけてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0152-44-2832"
              className="flex items-center justify-center bg-white text-primary hover:bg-beige py-4 px-8 font-medium transition-colors tracking-wide text-sm"
            >
              0152-44-2832
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center border border-white/30 hover:border-white text-white py-4 px-8 font-medium transition-all tracking-wide text-sm"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
