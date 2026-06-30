import type { Metadata } from "next";
import ProcessTabs from "@/components/process/ProcessTabs";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "家づくりの進め方",
  description:
    "石山建設の家づくりの流れ。新築・リフォームともに初回相談から引き渡しまで丁寧にご説明。網走の断熱・気密技術と現場写真による施工管理体制も紹介します。",
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">How We Build</p>
        <TextReveal
          as="h1"
          text="家づくりの進め方"
          className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4"
        />
        <p className="text-muted text-sm leading-relaxed">
          初めてのご相談から、引き渡しまでの流れをご紹介します。
          <br />
          「何もわからない」状態でも安心してお任せください。
        </p>
      </PageHero>

      <ProcessTabs />

      {/* FAQ */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
          <div className="text-center mb-12">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">よくあるご質問</h2>
            <div className="divider mx-auto" />
          </div>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: "土地がなくても相談できますか？", a: "はい、大歓迎です。土地探しのサポートも行っていますので、まずはご相談ください。網走エリアの土地情報についても、ご案内できます。" },
              { q: "予算はどのくらいかかりますか？", a: "ご要望やプランによって異なります。初回相談で概算をお伝えすることも可能です。「予算○○万円で何ができるか」という相談も歓迎しています。" },
              { q: "完成後のアフターフォローはありますか？", a: "もちろんです。引き渡し後もいつでもご連絡ください。定期点検も実施しています。地元の工務店として、長くお付き合いさせていただきます。" },
              { q: "どんな内容でも相談できますか？", a: "はい、どんな小さなことでも大歓迎です。「まだ漠然としている」「何から始めればいいかわからない」という段階でもお気軽にお問い合わせください。" },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-white border border-border p-6">
                <h3 className="font-serif text-primary font-bold mb-3 flex gap-3">
                  <span className="text-accent shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted text-sm leading-relaxed pl-6">
                  <span className="text-wood font-medium">A. </span>
                  {faq.a}
                </p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
