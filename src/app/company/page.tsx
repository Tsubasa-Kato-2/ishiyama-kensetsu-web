import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社石山建設の会社概要。1979年創業、北海道網走市を拠点に新築・リフォーム・大工造作を手がける工務店です。",
};

const companyInfo = [
  ["会社名", "株式会社石山建設"],
  ["設立", "1979年9月1日"],
  ["代表者", "石山 善輝（代表取締役）"],
  ["所在地", "北海道網走市北3条西4丁目13番地3"],
  ["電話", "0152-44-2832"],
  ["フリーダイヤル", "0800-222-1480"],
  ["FAX", "0152-45-3510"],
  ["メール", "ishiyama@ishimail.com"],
  ["資本金", "300万円"],
  ["事業内容", "建築工事業・大工工事業・とび・土工工事業・管工事業"],
  ["建設業許可", "北海道知事許可（般－29）オ第02051号"],
];

const history = [
  { date: "1979年9月1日", body: "石山 盤夫 石山建設を設立" },
  { date: "1996年6月28日", body: "有限会社石山建設へ組織変更" },
  { date: "2007年3月23日", body: "株式会社石山建設へ組織変更　石山善輝 代表取締役に就任" },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">Company</p>
        <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-4">
          会社概要
        </h1>
      </PageHero>

      {/* Company info */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <table className="w-full text-sm">
              <tbody>
                {companyInfo.map(([label, value], i) => (
                  <tr key={i} className="border-b border-border">
                    <th className="text-left py-5 pr-6 text-muted font-normal w-1/3 font-sans">{label}</th>
                    <td className="py-5 text-primary">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      {/* History */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="section-label mb-3">History</p>
            <h2 className="font-serif text-primary text-2xl font-bold mb-8">
              沿革
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-8">
              {history.map((item, i) => (
                <li key={i} className="flex gap-6 sm:gap-10 border-l-2 border-accent pl-6">
                  <p className="text-accent text-sm font-sans font-medium shrink-0 w-32 sm:w-40">
                    {item.date}
                  </p>
                  <p className="text-primary text-sm leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="bg-beige pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.8739341883697!2d144.26134812764738!3d44.02399957376493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f6d33a04ede4b47%3A0x1098356513802396!2z55-z5bGx5bu66Kit!5e0!3m2!1sja!2sjp!4v1780560298567!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社石山建設 地図"
            />
          </FadeIn>
        </div>
      </section>

    </>
  );
}
