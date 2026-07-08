import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import PhotoGallery from "@/components/works/PhotoGallery";

type Props = { params: Promise<{ slug: string }> };

const worksData: Record<string, {
  tag: string;
  title: string;
  meta: string;
  client: string;
  period: string;
  overview: string;
  mainPhoto?: string;
  photos?: string[];
  before: { heading: string; body: string; photos?: string[] };
  proposal: { heading: string; body: string; points: string[] };
  after: { heading: string; body: string; photos?: string[] };
  quote?: string;
  instagramUrl?: string;
}> = {
  "shirokane-new-build": {
    tag: "新築",
    title: "青空に映えるほたて漆喰の外壁と、回遊動線でつながるキッチンの家",
    meta: "網走市 / 4LDK / 延床面積 103.50㎡",
    client: "30代・共働き夫婦 + お子様2人",
    period: "設計〜完成 約8ヶ月",
    overview: "青空に映えるほたて漆喰の外壁と象徴的なファザードがアイコンのお家。お料理上手な奥様のこだわりのキッチンと回遊動線が日々の家事ラクを実現させています。\n\n石山建設らしい無垢フロアや職人の手仕事が光る洗面台やカップボードなどがお家の雰囲気づくりのアクセントになっており心地よい空間に。家づくり中には上棟式や手形式も行い、一生モノの思い出にご一緒させていただきました。",
    mainPhoto: "/images/works/shirokane-01-exterior.jpg",
    photos: [
      "/images/works/shirokane-02-living-kitchen.jpg",
      "/images/works/shirokane-03-washroom.jpg",
      "/images/works/shirokane-04-toilet.jpg",
      "/images/works/shirokane-05-entrance.jpg",
      "/images/works/shirokane-06-closet.jpg",
      "/images/works/shirokane-07-living-room.jpg",
      "/images/works/shirokane-08-kitchen-island.jpg",
    ],
    before: {
      heading: "ビフォー：毎日のストレスの正体",
      body: "共働きで忙しい毎日。帰宅後、玄関に荷物が山積みになり、上着・バッグ・子どもの荷物が散乱。キッチンまでの動線も遠く、夕食の準備に取り掛かるまでの「片付けタイム」が毎日のストレスでした。\n\n「家事の時間を減らして、家族と過ごす時間を増やしたい」——そんな切実な願いからご相談いただきました。",
    },
    proposal: {
      heading: "石山建設の提案：動線を設計する",
      body: "収納は「後から考える」のではなく、「動線から設計する」のが私たちの考え方です。",
      points: [
        "玄関から直結するシューズクローク（SIC）を設置。帰宅したらすぐに荷物を置ける",
        "SICからパントリー・キッチンへと続く「帰宅動線」を一直線に設計",
        "造作の棚で家族それぞれのスペースをカスタマイズ",
        "子どもの成長に合わせて棚板の高さを変えられる可動棚を採用",
      ],
    },
    after: {
      heading: "アフター：「帰るのが楽しみ」になった家",
      body: "「帰宅してから夕食を食べるまでの時間が半分以下になった」とご夫婦に言っていただけました。\n\n玄関で靴を脱ぎ、そのままSICへ。バッグを所定の位置に置き、上着を掛けて、パントリーを通ってキッチンへ。この流れが習慣になり、「散らかる前に片付く」暮らしが実現しました。",
    },
    quote: "石山建設さんで、家を建てました🏠\nこの家には、たくさんの“やりたい”がぎゅっと詰まっています！\n\nいちばんのお気に入りは、造作の洗面所♡\n好みや使い勝手を丁寧に聞いてくださって、細かい部分まで一緒に考えながら、世界に一つだけの洗面台が完成しました🥰\n\nカップボードなどもオーダーで作っていただき、収納や動線もスッキリ！\nそして無垢の床の温かみに包まれた、ほっとできる空間に仕上がりました♡\n\nこの家は、みんなが集まってくれる場所🧡\n\nそしておうちでお料理教室をしたいという私の想いも、しっかり形にしてくれました🍳\n動線や空間の使い方など、たくさんの工夫を一緒に考えてくれて、本当に感謝しています🙏\n\n家を建てるというのは、ただの“家づくり”ではなく、“思い出づくり”\n打ち合わせから完成まで、とても親身になってくださいました♡\n\n自分たちらしい暮らしを大切にしたい方に、心からおすすめしたい工務店さんです☺️",
  },
  "winter-renovation": {
    tag: "フルリフォーム",
    title: "抜け感のあるネイビー外観と業務用キッチンのある住まい",
    meta: "小清水町 / 築27年 / 延床面積 147.56㎡",
    client: "アウトドアがお好きなご夫婦",
    period: "設計〜完成 約6ヶ月",
    overview: "アウトドアがお好きなご夫婦。少し抜け感のあるネイビーの外観と、料理人の奥様こだわりの業務用キッチンが特徴的です。玄関から続くホビースペースは収納の他にスノーボードにワックスをかけたり、DIYに使用するようです。\n\n家づくりでは家族が心地よく楽しく暮らせるように予算内でたくさん工夫を凝らす奥様の姿と、それを見守るご主人の姿が印象に残っています。",
    mainPhoto: "/images/works/winter-renovation-01-exterior.jpg",
    before: {
      heading: "ビフォー：築30年、性能と暮らしやすさの限界",
      body: "築30年の住宅で、断熱性能や使い勝手に課題を抱えていました。アウトドアが好きなご夫婦の暮らしに合わせて、収納や水回りも含めた間取りの見直しが必要でした。",
      photos: [
        "/images/works/winter-renovation-before-01-exterior.jpg",
        "/images/works/winter-renovation-before-02-entrance.jpg",
      ],
    },
    proposal: {
      heading: "石山建設の提案：暮らしに寄り添う間取りと性能改善",
      body: "奥様こだわりの業務用キッチンを中心に、ご夫婦のアウトドアライフに合わせたホビースペースを設計しました。",
      points: [
        "料理人の奥様こだわりのオールステンレス業務用キッチンを採用",
        "玄関から続くホビースペースに収納とDIY・ワックスがけができるスペースを確保",
        "断熱改修で築30年の住宅の快適性を向上",
        "抜け感のあるネイビーの外観に一新",
      ],
    },
    after: {
      heading: "アフター：家族らしさが詰まった住まいに",
      body: "予算内でたくさんの工夫を凝らした奥様と、それを見守るご主人。アウトドアも料理も楽しめる、家族らしさが詰まった住まいに仕上がりました。",
      photos: [
        "/images/works/winter-renovation-02-kitchen.jpg",
        "/images/works/winter-renovation-03-toilet.jpg",
        "/images/works/winter-renovation-04-entrance-shelf.jpg",
        "/images/works/winter-renovation-05-hobby-desk.jpg",
        "/images/works/winter-renovation-06-diy-counter.jpg",
        "/images/works/winter-renovation-07-living.jpg",
        "/images/works/winter-renovation-08-washroom.jpg",
      ],
    },
  },
  "custom-kitchen": {
    tag: "新築",
    title: "オホーツク海と呼応する、サックスブルーの外壁とステンレスキッチンの家",
    meta: "網走市 / 3LDK / 延床面積 110.55㎡",
    client: "30代・4人家族",
    period: "設計〜完成 約9ヶ月",
    overview: "目にも鮮やかなサックスブルーの漆喰がアイコンのお家。窓から覗くオホーツク海に染められたようにリンクしています。\n\n室内に使用されている無垢材はクリア塗装で木本来の経年変化の色味を楽しめるようにしました。水回りの選定では帯広のショールームへ足を運び、悩んだ末にオールステンレスのキッチンを採用。",
    mainPhoto: "/images/works/custom-kitchen-01-exterior.jpg",
    photos: [
      "/images/works/custom-kitchen-02-entrance.jpg",
      "/images/works/custom-kitchen-03-entrance-detail.jpg",
      "/images/works/custom-kitchen-04-living.jpg",
      "/images/works/custom-kitchen-05-living-kitchen.jpg",
      "/images/works/custom-kitchen-06-exterior-detail.jpg",
      "/images/works/custom-kitchen-07-living-couple.jpg",
      "/images/works/custom-kitchen-08-deck-view.jpg",
    ],
    before: {
      heading: "ビフォー：「このキッチンじゃテンションが上がらない」",
      body: "賃貸アパートのキッチンは既製品の白いシステムキッチン。機能的ではあるけれど、毎日使うたびに「これじゃない感」があったそうです。\n\n「新築を建てるなら、絶対に自分だけのこだわりのキッチンを作りたい」——強い想いを持ってご相談いただきました。",
    },
    proposal: {
      heading: "石山建設の提案：職人が作るオリジナルキッチン",
      body: "既製品ではなく、自社職人がゼロから作る造作キッチン。素材・色・サイズすべてをオーダーできます。",
      points: [
        "手触りが心地よいモルタル調タイルのカウンタートップ",
        "真鍮のグースネック水栓で「ホテルライク」な印象に",
        "見せる収納と隠す収納を組み合わせた造作吊り棚",
        "ご家族の身長に合わせたカウンター高さで、毎日の料理が楽に",
      ],
    },
    after: {
      heading: "アフター：「毎日ここに立つのが楽しみ」",
      body: "完成後、「毎朝コーヒーを入れながら料理の準備をするのが一日の楽しみになった」とお聞きしました。\n\n子どもたちもキッチンに近づいてきて、一緒に料理するようになったとのこと。「家族が自然とキッチン周りに集まるようになった」——そんな暮らしの変化が、私たちにとっても一番の喜びです。",
    },
  },
  "study-corner": {
    tag: "フルリフォーム",
    title: "昭和の面影を残す住まいから、黒を基調としたモダンでスタイリッシュな空間へフルリノベーション",
    meta: "網走市 / 築48年 / 延床面積 88.29㎡",
    client: "ご家族",
    period: "設計〜完成 約3ヶ月",
    overview: "昔ながらの木目調の壁や和室、レンガ造りのストーブ置き場があった味わい深いお住まいを、現代のライフスタイルに合わせてフルリノベーションしました。\n\n外観はスタイリッシュなブラックの金属サイディングに一新。内装はホワイトの壁にダークブラウンの床や建具を合わせ、シックで落ち着きのある大人モダンな空間へと生まれ変わっています。見た目の美しさだけでなく、大容量のシューズクロークや壁一面の造作本棚など、暮らしを豊かにする収納の工夫もたっぷり詰め込んだこだわりのお家です。",
    mainPhoto: "/images/works/study-corner-00-exterior.jpg",
    before: {
      heading: "ビフォー：昭和の面影を残す住まい",
      body: "木目調の壁や和室、レンガ造りのストーブ置き場——味わい深い住まいでしたが、現代のライフスタイルには合わなくなってきていました。",
      photos: [
        "/images/works/study-corner-before-01-exterior.jpg",
        "/images/works/study-corner-before-02-living.jpg",
      ],
    },
    proposal: {
      heading: "石山建設の提案：黒を基調としたモダンな空間へ",
      body: "外観・内装ともに大きく印象を変え、収納の工夫もたっぷり詰め込んだフルリノベーションを行いました。",
      points: [
        "外観をスタイリッシュなブラックの金属サイディングに一新",
        "ホワイトの壁にダークブラウンの床・建具を合わせたシックな配色",
        "大容量のシューズクロークで玄関をすっきりと",
        "壁一面の造作本棚で趣味のものもたっぷり収納",
      ],
    },
    after: {
      heading: "アフター：大人モダンな空間に生まれ変わった住まい",
      body: "見た目の美しさだけでなく、暮らしを豊かにする収納の工夫もたっぷり詰め込んだ、こだわりのお家に仕上がりました。",
      photos: [
        "/images/works/study-corner-01-entrance.jpg",
        "/images/works/study-corner-02-shoe-closet.jpg",
        "/images/works/study-corner-03-living-tv.jpg",
        "/images/works/study-corner-04-bookshelf.jpg",
        "/images/works/study-corner-05-kitchen.jpg",
        "/images/works/study-corner-06-washroom.jpg",
      ],
    },
  },
  "washroom-custom": {
    tag: "新築",
    title: "朝の時間が変わった、ホテルライクな造作洗面台",
    meta: "網走市 / 2LDK / 洗面スペース",
    client: "30代・夫婦2人",
    period: "設計〜完成 約7ヶ月",
    overview: "「毎朝の支度が楽しくなる洗面台を」という夢を実現した造作洗面空間。",
    before: {
      heading: "ビフォー：市販品では「置く場所がない」",
      body: "毎朝の洗面台周り。化粧品・ドライヤー・スキンケア用品が溢れ、カウンターはいつも散らかった状態。\n\n「毎朝片付けてから使い始める」という無駄な時間がストレスでした。",
    },
    proposal: {
      heading: "石山建設の提案：しまう場所を設計する",
      body: "「収納が足りないのではなく、使いやすい収納がないのが問題」と考え、使い方から逆算した造作洗面台を設計しました。",
      points: [
        "鏡裏に大容量の収納スペース（奥行15cm）を確保",
        "カウンター下にオープン棚と引き出しを組み合わせ",
        "天然木のカウンタートップで毎朝触れる心地よさを大切に",
        "コンセントを鏡裏に隠してスッキリとした見た目を実現",
      ],
    },
    after: {
      heading: "アフター：出社前の気分が上がる朝に",
      body: "「朝、洗面台の前に立つのが楽しみになった」とお聞きしました。\n\n必要なものがすぐ手の届く場所にあり、使い終わったらすぐしまえる。カウンターに何も出ていない洗面台で朝の支度をすると、それだけで一日の始まりが気持ちよくなるそうです。",
    },
    quote: "「毎朝ホテルに泊まっているみたいな気分。こんなに洗面台にこだわってよかったって、毎日思っています」",
  },
  "open-ldk": {
    tag: "フルリフォーム",
    title: "スマートなブラック外観に一新した、断熱フルリフォーム",
    meta: "北見市 / 築32年 / 延床面積 90.72㎡",
    client: "50代・夫婦＋お子様",
    period: "設計〜完成 約5ヶ月",
    overview: "スマートなブラックで仕上げた外観のこのお家は、築年数約30年の古家をフルリフォームし内外共にデザイン、間取りを一新。もちろん寒暖差の激しい気候にも快適に過ごせるよう断熱改修も実施しました。ご主人こだわりの造作家具がお家の雰囲気にぴったりです。",
    mainPhoto: "/images/works/open-ldk-01-exterior.jpg",
    before: {
      heading: "ビフォー：築30年、性能と暮らしやすさの限界",
      body: "築約30年の古家。間取りも外観も時代に合わなくなり、寒暖差の激しい網走の気候の中で断熱性能にも不安がありました。\n\n「このまま住み続けるか、建て替えるか」悩まれた末、フルリフォームでの再生をご提案しました。",
      photos: [
        "/images/works/open-ldk-before-01-exterior.jpg",
        "/images/works/open-ldk-before-02-living.jpg",
        "/images/works/open-ldk-before-03-kitchen.jpg",
      ],
    },
    proposal: {
      heading: "石山建設の提案：内外装と性能を一新する",
      body: "間取り・デザインを一新するだけでなく、断熱改修もあわせて行うことで、見た目と快適さの両方を実現しました。",
      points: [
        "外観をスマートなブラックの外壁に一新",
        "壁・床・天井の断熱改修で寒暖差の激しい気候にも対応",
        "ご主人こだわりの造作家具・造作収納を各所に配置",
        "ライフスタイルに合わせた間取りに変更",
      ],
    },
    after: {
      heading: "アフター：内外共に生まれ変わった住まい",
      body: "外観・内装ともに大きく印象を変え、断熱性能も向上。古家とは思えないほど快適で、デザイン性の高い住まいに仕上がりました。",
      photos: [
        "/images/works/open-ldk-02-living-kitchen.jpg",
        "/images/works/open-ldk-03-living-tv.jpg",
        "/images/works/open-ldk-04-pantry.jpg",
        "/images/works/open-ldk-05-tv-wall.jpg",
        "/images/works/open-ldk-06-kitchen.jpg",
        "/images/works/open-ldk-07-washroom.jpg",
        "/images/works/open-ldk-08-staircase.jpg",
      ],
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = worksData[slug];
  if (!work) return { title: "施工事例" };
  return {
    title: work.title,
    description: work.overview,
  };
}

export async function generateStaticParams() {
  return Object.keys(worksData).map((slug) => ({ slug }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = worksData[slug];

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-muted mb-4">施工事例が見つかりませんでした。</p>
          <Link href="/works" className="text-accent hover:underline text-sm">
            施工事例一覧へ →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/works" className="text-muted text-xs hover:text-primary transition-colors font-sans">
              施工事例
            </Link>
            <span className="text-muted/50 text-xs">/</span>
            <span className="text-accent text-xs font-sans">{work.tag}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted font-sans">
            <span>{work.meta}</span>
            <span>｜</span>
            <span>{work.client}</span>
            <span>｜</span>
            <span>{work.period}</span>
          </div>
        </div>
      </section>

      {/* Main image */}
      <div className="aspect-[4/3] sm:aspect-[16/7] bg-beige-dark relative overflow-hidden">
        {work.mainPhoto ? (
          <>
            <Image
              src={work.mainPhoto}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              quality={50}
              className="object-cover scale-110 blur-2xl opacity-60"
            />
            <Image
              src={work.mainPhoto}
              alt={work.title}
              fill
              sizes="100vw"
              quality={80}
              priority
              className="object-contain"
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-wood/30 to-primary/40 flex items-center justify-center">
            <span className="text-white/10 text-8xl font-serif">石山建設</span>
          </div>
        )}
        {work.instagramUrl && (
          <a
            href={work.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-primary text-xs px-4 py-2 flex items-center gap-2 transition-colors font-sans"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            このルームツアーをInstagramで見る →
          </a>
        )}
      </div>

      {/* Story content */}
      <article className="py-16 px-4 bg-cream">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Overview */}
          <div>
            <p className="text-accent text-sm font-sans tracking-widest uppercase mb-2">Overview</p>
            <div className="space-y-4">
              {work.overview.split("\n\n").map((para, i) => (
                <p key={i} className="font-serif text-primary text-lg leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {work.tag === "新築" ? (
            <>
              <hr className="border-border" />

              {/* 完成写真 */}
              <div>
                <FadeIn>
                <p className="section-label mb-6">Photo Gallery</p>
                </FadeIn>
                <PhotoGallery photos={work.photos ?? [1, 2, 3, 4, 5, 6].map(() => undefined)} placeholderLabel="写真" />
              </div>

              {/* Customer voice */}
              {work.quote && (
                <div className="bg-accent-pale border-l-4 border-accent p-8">
                  <p className="text-accent text-xs font-sans tracking-widest uppercase mb-4">
                    お施主様の声
                  </p>
                  <blockquote className="font-sans text-primary text-sm leading-relaxed space-y-3 whitespace-pre-line">
                    {work.quote.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </blockquote>
                </div>
              )}
            </>
          ) : (
            <>
              <hr className="border-border" />

              {/* Before */}
              <div>
                <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-primary text-white text-xs px-3 py-1 font-sans tracking-wide">
                    BEFORE
                  </span>
                  <h2 className="font-serif text-primary text-xl font-bold">
                    {work.before.heading}
                  </h2>
                </div>
                </FadeIn>
                <div className="bg-beige border-l-2 border-muted/30 p-6">
                  {work.before.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted text-sm leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Before photos */}
              <PhotoGallery photos={work.before.photos ?? [undefined, undefined]} placeholderLabel="Before" />

              {/* After */}
              <div>
                <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-wood text-white text-xs px-3 py-1 font-sans tracking-wide">
                    AFTER
                  </span>
                  <h2 className="font-serif text-primary text-xl font-bold">
                    {work.after.heading}
                  </h2>
                </div>
                </FadeIn>
                <div className="space-y-4">
                  {work.after.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* After photos */}
              <PhotoGallery photos={work.after.photos ?? [undefined, undefined, undefined, undefined]} placeholderLabel="After" />

              {/* Customer voice */}
              {work.quote && (
                <div className="bg-accent-pale border-l-4 border-accent p-8">
                  <p className="text-accent text-xs font-sans tracking-widest uppercase mb-4">
                    お施主様の声
                  </p>
                  <blockquote className="font-sans text-primary text-sm leading-relaxed space-y-3 whitespace-pre-line">
                    {work.quote.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </blockquote>
                </div>
              )}
            </>
          )}
        </div>
      </article>

      {/* Navigation */}
      <section className="py-12 px-4 bg-beige border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/works" className="text-muted hover:text-primary text-sm transition-colors flex items-center gap-2">
            ← 施工事例一覧に戻る
          </Link>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white text-sm px-6 py-3 font-medium transition-colors tracking-wide"
          >
            この事例について相談する →
          </Link>
        </div>
      </section>
    </>
  );
}
