import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社石山建設のプライバシーポリシー（個人情報保護方針）。",
};

const sections = [
  {
    heading: "1. 基本方針",
    body: "株式会社石山建設（以下「当社」）は、お客様の個人情報を適切に取り扱うことが社会的責務であると認識し、個人情報の保護に関する法律その他関連法令を遵守し、お客様の個人情報を適切に取得、利用、管理いたします。",
  },
  {
    heading: "2. 個人情報の取得",
    body: "当社は、お問い合わせ・お見積もり・資料請求・見学会のご予約等にあたり、お名前、電話番号、メールアドレス、住所などの個人情報を適正かつ公正な手段によって取得いたします。",
  },
  {
    heading: "3. 個人情報の利用目的",
    body: "取得した個人情報は、以下の目的のために利用いたします。\n\n・お問い合わせ・ご相談への対応\n・お見積もり・ご提案のご連絡\n・見学会・イベントのご案内\n・工事に関するご連絡\n・アフターサービスのご案内",
  },
  {
    heading: "4. 個人情報の第三者提供",
    body: "当社は、お客様の同意がある場合、または法令に基づく場合を除き、取得した個人情報を第三者に提供いたしません。",
  },
  {
    heading: "5. 個人情報の管理",
    body: "当社は、お客様の個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。",
  },
  {
    heading: "6. 個人情報の開示・訂正・削除",
    body: "お客様は、当社が保有する自己の個人情報について、開示、訂正、削除等を求めることができます。ご希望の場合は、下記お問い合わせ先までご連絡ください。",
  },
  {
    heading: "7. お問い合わせ窓口",
    body: "個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n\n株式会社石山建設\n北海道網走市北3条西4丁目13番地3\n電話：0152-44-2832\nメール：ishiyama@ishimail.com",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-beige overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4 text-accent">Privacy Policy</p>
          <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <h2 className="font-serif text-primary text-lg font-bold mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
