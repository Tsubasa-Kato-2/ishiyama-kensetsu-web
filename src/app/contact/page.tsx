import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "石山建設へのお問い合わせ・ご相談はこちら。お電話・メールにてお気軽にどうぞ。網走市の工務店・石山建設。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">Contact</p>
        <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
          お問い合わせ
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          どんな小さなご相談でも、お気軽にどうぞ。
          <br />
          お電話・メールでもお気軽にご連絡ください。
        </p>
      </PageHero>

      {/* Contact form + info */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <SlideIn direction="left" className="lg:col-span-2">
              <p className="section-label mb-3">Contact Info</p>
              <h2 className="font-serif text-primary text-2xl font-bold mb-4">
                お問い合わせ先
              </h2>
              <div className="divider" />
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-medium text-sm mb-1">電話</p>
                  <a href="tel:0152-44-2832" className="text-primary text-xl font-bold hover:text-accent transition-colors font-sans">
                    0152-44-2832
                  </a>
                  <p className="text-muted text-xs mt-1 font-sans">平日 9:00〜17:30（土日も対応可）</p>
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-1">フリーダイヤル</p>
                  <a href="tel:0800-222-1480" className="text-primary text-xl font-bold hover:text-accent transition-colors font-sans">
                    0800-222-1480
                  </a>
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-1">FAX</p>
                  <p className="text-muted text-sm font-sans">0152-45-3510</p>
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-1">メール</p>
                  <a href="mailto:ishiyama@ishimail.com" className="text-primary text-sm hover:text-accent transition-colors break-all">
                    ishiyama@ishimail.com
                  </a>
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-1">所在地</p>
                  <p className="text-muted text-sm leading-relaxed">
                    北海道網走市北3条西4丁目13番地3
                  </p>
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/ishiyama_kensetsu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    @ishiyama_kensetsu
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.8739341883697!2d144.26134812764738!3d44.02399957376493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f6d33a04ede4b47%3A0x1098356513802396!2z55-z5bGx5bu66Kit!5e0!3m2!1sja!2sjp!4v1780560298567!5m2!1sja!2sjp"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社石山建設 地図"
                />
              </div>
            </SlideIn>

            {/* Form */}
            <SlideIn direction="right" delay={0.1} className="lg:col-span-3">
              <p className="section-label mb-3">Inquiry Form</p>
              <h2 className="font-serif text-primary text-2xl font-bold mb-4">
                相談・見積もりフォーム
              </h2>
              <div className="divider" />
              <p className="text-muted text-xs mb-6 font-sans">
                ※ 通常2〜3営業日以内にご返信します。お急ぎの場合はお電話ください。
              </p>

              <ContactForm />
            </SlideIn>
          </div>
        </div>
      </section>
    </>
  );
}
