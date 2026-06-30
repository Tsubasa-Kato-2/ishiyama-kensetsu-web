import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import MVVScroll from "@/components/concept/MVVScroll";
import MVVMobile from "@/components/concept/MVVMobile";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "私たちの想い",
  description:
    "「家づくりで、物語をつくる」に込めた石山建設の想いとスタッフ・職人をご紹介します。",
};

const staffMembers = [
  {
    name: "石山 盤夫",
    role: "取締役会長",
    photo: "/images/staff/ishiyama-banfu.jpg",
    hobby: "若年技能者育成",
    food: "甘いもの",
  },
  {
    name: "石山 善輝",
    role: "代表取締役",
    photo: "/images/staff/president.jpg",
    hobby: "BBQ",
    food: "すいか",
  },
  {
    name: "新谷 正樹",
    role: "取締役副社長",
    photo: "/images/staff/shintani.jpg",
    hobby: "ランニング",
    food: "親子丼",
  },
  {
    name: "木村 哲司",
    role: "配管工・大工",
    photo: "/images/staff/kimura.jpg",
    hobby: "犬の散歩・釣り",
    food: "唐揚げとハイボール",
  },
  {
    name: "近田 ゆきえ",
    role: "現場担当",
    photo: "/images/staff/chikada.jpg",
    hobby: "スポーツ観戦",
    food: "貝類",
  },
  {
    name: "佐藤 真里江",
    role: "営業・広報・コーディネート",
    photo: "/images/staff/sato.jpg",
    hobby: "キャンプ・マラソン",
    food: "餃子とハイボール",
  },
  {
    name: "加藤 翼",
    role: "営業",
    photo: "/images/staff/kato.jpg",
    hobby: "キャンプ・釣り",
    food: "肉とハイボール",
  },
];

const values = [
  {
    title: "対話を大切にする",
    body: "家づくりは、お客様との対話から始まります。「こんな暮らしがしたい」という曖昧な夢でも、じっくり話し合いながら形にしていきます。",
  },
  {
    title: "見えない部分まで誠実に",
    body: "壁の中、床の下——お客様が見えない場所こそ、私たちのプロとしての誠実さが問われる場所です。手を抜かない施工が、長く安心して暮らせる家をつくります。",
  },
  {
    title: "地域と共に歩む",
    body: "網走の厳しい冬も、豊かな自然も、私たちは地元を知り尽くしています。この土地で暮らし続けるお客様のために、地域に根ざした工務店であり続けます。",
  },
];

export default function ConceptPage() {
  return (
    <>
      {/* Hero */}
      <PageHero>
        <p className="section-label mb-4 text-accent">Our Story</p>
        <h1 className="font-serif text-primary text-4xl sm:text-5xl font-bold leading-tight mb-6">
          家づくりで、
          <br />
          <span className="text-accent">物語</span>をつくる
        </h1>
        <p className="text-muted text-base leading-relaxed">
          私たちが大切にしている想いと、家づくりへの姿勢をご紹介します。
        </p>
      </PageHero>

      {/* Message from representative */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <FadeIn direction="right">
            <div className="relative max-w-[270px] mx-auto lg:max-w-[320px]">
              <div className="aspect-[3/4] bg-beige-dark rounded-none relative overflow-hidden">
                <Image
                  src="/images/staff/president.jpg"
                  alt="代表取締役 石山善輝"
                  fill
                  sizes="(max-width: 1024px) 320px, 384px"
                  quality={75}
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 text-center">
                <p className="font-serif text-xl font-bold">1979</p>
                <p className="text-xs tracking-widest mt-1">年創業</p>
              </div>
            </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="left" delay={0.1}>
            <div>
              <p className="section-label mb-4">Representative Message</p>
              <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                「物語」を築き上げる
              </h2>
              <div className="divider" />
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p>
                  16歳から大工一筋、生粋の職人である父・石山盤夫が1979年に創業したのが、石山建設の原点です。
                </p>
                <p>
                  幼稚園のころ、大抵のご家庭では鉛筆削りで鉛筆を削ると思います。しかし我が家では、いきなりナイフで削ることを教えられました。そんな職人魂をもった父を傍らで見て育ち、大工という職業に憧れ、父の会社で修行を積みました。
                </p>
                <p>
                  家をつくることを通じて、ご家族の新たな「物語」「思い出」をつくりたい——そんな思いから、2007年に代表取締役として父の会社を受け継ぎ、現在に至ります。
                </p>
                <p>
                  高校を卒業し都会へ出た方、転勤で町を離れた方、お引っ越しをされた方はよくご存知だと思います。家には「思い出」と「物語」がくっついています。北海道網走市を拠点に、スタッフ一同が親身になってお客様の理想の空間をつくり出します。お客様のあらゆる「思い」をカタチにし、たくさんの「思い出」と「物語」をつくっていきます。
                </p>
              </div>
              <p className="mt-6 font-serif text-primary text-sm">
                代表取締役　石山 善輝
              </p>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Value */}
      <MVVScroll />
      <MVVMobile />

      {/* Staff */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="section-label mb-3">Our Team</p>
            <h2 className="font-serif text-3xl text-primary font-bold">
              一緒に物語をつくるメンバー
            </h2>
            <div className="divider mx-auto" />
            <p className="text-muted text-sm max-w-lg mx-auto">
              住宅・リフォームは「誰が作るか」が大切です。安心してお任せいただけるよう、チームをご紹介します。
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {staffMembers.map((staff, i) => (
              <FadeIn key={i} delay={i * 0.07}>
              <div className="bg-white border border-border hover:border-accent-light transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-square bg-beige-dark relative overflow-hidden">
                  <Image
                    src={staff.photo}
                    alt={staff.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    quality={70}
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <p className="text-accent text-[0.65rem] font-sans tracking-wide mb-1 leading-snug">{staff.role}</p>
                  <h3 className="font-serif text-primary text-base font-bold mb-3">{staff.name}</h3>
                  <div className="space-y-1">
                    <p className="text-muted text-xs font-sans">
                      <span className="text-primary/50 mr-1">趣味</span>{staff.hobby}
                    </p>
                    <p className="text-muted text-xs font-sans">
                      <span className="text-primary/50 mr-1">好物</span>{staff.food}
                    </p>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
