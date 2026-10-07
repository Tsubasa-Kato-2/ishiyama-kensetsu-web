// 施工事例のデータ。一覧ページと詳細ページの両方がこのファイルを読みます。
// 追加・修正はこのファイルだけで完結します。
//
// published: false にすると一覧に表示されなくなります（公開前の下書き用）。
// 配列の上から順に一覧へ並びます。新しい事例は先頭に追加してください。

export type Work = {
  /** URLになる文字列。半角英小文字・数字・ハイフンのみ。重複不可 */
  slug: string;
  /** false にすると一覧に出ない（URL直打ちでは見られる） */
  published: boolean;
  /** "new" = 新築、"renovation" = フルリフォーム。ラベルは自動で決まります */
  category: "new" | "renovation";
  title: string;
  /** 所在地 / 築年数または間取り / 延床面積 */
  meta: string;
  /** 一覧カードの説明文 */
  desc: string;
  /** 一覧のサムネイルと詳細のメイン写真を兼ねます */
  mainPhoto?: string;
  client: string;
  period: string;
  /** 概要。\n\n で段落が分かれます */
  overview: string;
  /** 新築の完成写真。フルリフォームでは使いません */
  photos?: string[];
  before?: { heading: string; body: string; photos?: string[] };
  proposal?: { heading: string; body: string; points: string[] };
  after?: { heading: string; body: string; photos?: string[] };
  /** お施主様の声。書かない場合はセクションごと非表示 */
  quote?: string;
  instagramUrl?: string;
};

/** category からタグの表示名を決めます */
export const CATEGORY_LABEL: Record<Work["category"], string> = {
  new: "新築",
  renovation: "フルリフォーム",
};

export const works: Work[] = [
  {
    slug: "inherited-home",
    published: true,
    category: "renovation",
    title: "受け継いだ家が、ふたりらしい暮らしへ",
    meta: "網走市潮見 / 築30年 / 延床面積 158.76㎡",
    desc: "ご両親から受け継いだ築30年の住まいをフルリフォーム。ダークグレーの外観に一新し、念願だったサウナと水風呂のある、ふたりらしい暮らしの場所へ生まれ変わりました。",
    mainPhoto: "/images/works/inherited-home-01-exterior.jpg",
    client: "20代",
    period: "設計〜お引渡し 約4ヶ月",
    overview: "親から受け継いだ築30年の住まいを、20代のライフスタイルに合わせてフルリフォーム。ダークグレーの外観が象徴的なこのお家は、内外ともに一新し、ふたりらしい暮らしの場所へ生まれ変わりました。\n\n最大の特徴は、住まいの中に設けた本格的なサウナと水風呂。やわらかな間接照明に包まれたサウナ室と、石張りの落ち着いた水風呂スペースが、日々の疲れをリセットする特別な時間をつくります。造作の洗面台やウォークインクローゼットなど、暮らしやすさを支える工夫も各所に取り入れました。",
    before: {
      heading: "ビフォー：思い出のある家。けれど、このままでは暮らせない",
      body: "ご両親から受け継いだ、築30年の住まい。家族の時間が積み重なった大切な家でしたが、あらためて自分たちが暮らすとなると、いくつもの課題がありました。\n\n洗面脱衣室は洗濯機を置くと身動きが取りづらく、天井には点検口が開いたまま。キッチンは壁で仕切られ、リビングにいる人の気配が届きません。外観も年月とともに色あせ、通りから見た印象は少し寂しいものでした。\n\n建て替えるという選択肢もありました。それでも「この家を残したい」——その想いから、フルリフォームという道を選ばれました。",
      photos: [
        "/images/works/inherited-home-before-01.jpg",
        "/images/works/inherited-home-before-02.jpg",
        "/images/works/inherited-home-before-03.jpg",
        "/images/works/inherited-home-before-04.jpg",
      ],
    },
    proposal: {
      heading: "石山建設の提案：残すところと、変えるところを決める",
      body: "受け継いだ家をリフォームするとき、いちばん大切なのは「何を残すか」を決めることだと私たちは考えています。お話を伺いながら、思い出が宿る場所は活かし、これからの暮らしの中心になる場所は思い切って一新する——そんな方針を立てました。",
      points: [
        "外観はダークグレーの外壁に一新。黒の屋根とサッシを合わせ、通りから見た印象を大きく変える",
        "1階は水回りとLDKを全面刷新。キッチンとリビングをつなげ、ふたりの気配が近い間取りに",
        "2階は、ご両親の代から続く木の腰壁や階段をそのまま活かし、家の記憶を残す",
        "念願だったサウナと水風呂を新設。外に出かけなくても「ととのう」時間が過ごせる空間に",
        "石目調カウンターの造作洗面台やウォークインクローゼットで、ふたりの暮らしに合わせた収納を用意",
      ],
    },
    after: {
      heading: "アフター：受け継いだ家が、ふたりの居場所に",
      body: "ダークグレーの外壁に生まれ変わった外観は、以前とはまるで別の表情に。玄関を入ると、無垢の床と白い壁に包まれた明るいLDKが広がります。キッチンからリビングまで視線が抜け、どこにいてもお互いの気配が感じられる住まいになりました。\n\nそしてこの家のいちばんの特別が、奥にしつらえたサウナと水風呂です。やわらかな間接照明に照らされたサウナ室でじっくり汗を流し、木桶の水風呂へ。休日をどこかへ出かけなくても、家で心をほどく時間が過ごせます。\n\n階段を上がると、ご両親の代から変わらない木の腰壁が出迎えてくれます。新しく生まれ変わった1階と、記憶をそのまま残した2階。受け継いだ家は、これからのふたりの暮らしの舞台になりました。",
      photos: [
        "/images/works/inherited-home-02.jpg",
        "/images/works/inherited-home-03.jpg",
        "/images/works/inherited-home-04.jpg",
        "/images/works/inherited-home-05.jpg",
        "/images/works/inherited-home-06.jpg",
        "/images/works/inherited-home-07.jpg",
        "/images/works/inherited-home-08.jpg",
        "/images/works/inherited-home-09.jpg",
        "/images/works/inherited-home-10.jpg",
        "/images/works/inherited-home-11.jpg",
        "/images/works/inherited-home-12.jpg",
        "/images/works/inherited-home-13.jpg",
        "/images/works/inherited-home-14.jpg",
      ],
    },
  },
  {
    slug: "winter-renovation",
    published: true,
    category: "renovation",
    title: "抜け感のあるネイビー外観と業務用キッチンのある住まい",
    meta: "小清水町 / 築27年 / 延床面積 147.56㎡",
    desc: "アウトドアがお好きなご夫婦。少し抜け感のあるネイビーの外観と、料理人の奥様こだわりの業務用キッチンが特徴的です。",
    mainPhoto: "/images/works/winter-renovation-01-exterior.jpg",
    client: "アウトドアがお好きなご夫婦",
    period: "設計〜完成 約6ヶ月",
    overview: "アウトドアがお好きなご夫婦。少し抜け感のあるネイビーの外観と、料理人の奥様こだわりの業務用キッチンが特徴的です。玄関から続くホビースペースは収納の他にスノーボードにワックスをかけたり、DIYに使用するようです。\n\n家づくりでは家族が心地よく楽しく暮らせるように予算内でたくさん工夫を凝らす奥様の姿と、それを見守るご主人の姿が印象に残っています。",
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
  {
    slug: "study-corner",
    published: true,
    category: "renovation",
    title: "昭和の面影を残す住まいから、黒を基調としたモダンでスタイリッシュな空間へ",
    meta: "網走市 / 築48年 / 延床面積 88.29㎡",
    desc: "木目調の壁や和室があった味わい深い住まいを、ブラックの外観とダークブラウンの内装で大人モダンな空間にフルリノベーション。",
    mainPhoto: "/images/works/study-corner-00-exterior.jpg",
    client: "ご家族",
    period: "設計〜完成 約3ヶ月",
    overview: "昔ながらの木目調の壁や和室、レンガ造りのストーブ置き場があった味わい深いお住まいを、現代のライフスタイルに合わせてフルリノベーションしました。\n\n外観はスタイリッシュなブラックの金属サイディングに一新。内装はホワイトの壁にダークブラウンの床や建具を合わせ、シックで落ち着きのある大人モダンな空間へと生まれ変わっています。見た目の美しさだけでなく、大容量のシューズクロークや壁一面の造作本棚など、暮らしを豊かにする収納の工夫もたっぷり詰め込んだこだわりのお家です。",
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
  {
    slug: "open-ldk",
    published: true,
    category: "renovation",
    title: "スマートなブラック外観に一新した、断熱フルリフォーム",
    meta: "北見市 / 築32年 / 延床面積 90.72㎡",
    desc: "スマートなブラックで仕上げた外観のこのお家は、内外共にデザイン・間取りを一新。断熱改修も実施し、ご主人こだわりの造作家具が雰囲気にぴったりです。",
    mainPhoto: "/images/works/open-ldk-01-exterior.jpg",
    client: "50代・夫婦＋お子様",
    period: "設計〜完成 約5ヶ月",
    overview: "スマートなブラックで仕上げた外観のこのお家は、築年数約30年の古家をフルリフォームし内外共にデザイン、間取りを一新。もちろん寒暖差の激しい気候にも快適に過ごせるよう断熱改修も実施しました。ご主人こだわりの造作家具がお家の雰囲気にぴったりです。",
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
  {
    slug: "shirokane-new-build",
    published: true,
    category: "new",
    title: "青空に映えるほたて漆喰の外壁と、回遊動線でつながるキッチンの家",
    meta: "網走市 / 4LDK / 延床面積 103.50㎡",
    desc: "青空に映えるほたて漆喰の外壁と象徴的なファザードがアイコンのお家。お料理上手な奥様のこだわりのキッチンと回遊動線が日々の家事ラクを実現させています。",
    mainPhoto: "/images/works/shirokane-01-exterior.jpg",
    client: "30代・共働き夫婦 + お子様2人",
    period: "設計〜完成 約8ヶ月",
    overview: "青空に映えるほたて漆喰の外壁と象徴的なファザードがアイコンのお家。お料理上手な奥様のこだわりのキッチンと回遊動線が日々の家事ラクを実現させています。\n\n石山建設らしい無垢フロアや職人の手仕事が光る洗面台やカップボードなどがお家の雰囲気づくりのアクセントになっており心地よい空間に。家づくり中には上棟式や手形式も行い、一生モノの思い出にご一緒させていただきました。",
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
  {
    slug: "custom-kitchen",
    published: true,
    category: "new",
    title: "オホーツク海と呼応する、サックスブルーの外壁とステンレスキッチンの家",
    meta: "網走市 / 3LDK / 延床面積 110.55㎡",
    desc: "目にも鮮やかなサックスブルーの漆喰がアイコンのお家。窓から覗くオホーツク海に染められたようにリンクしています。",
    mainPhoto: "/images/works/custom-kitchen-01-exterior.jpg",
    client: "30代・4人家族",
    period: "設計〜完成 約9ヶ月",
    overview: "目にも鮮やかなサックスブルーの漆喰がアイコンのお家。窓から覗くオホーツク海に染められたようにリンクしています。\n\n室内に使用されている無垢材はクリア塗装で木本来の経年変化の色味を楽しめるようにしました。水回りの選定では帯広のショールームへ足を運び、悩んだ末にオールステンレスのキッチンを採用。",
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
  {
    // 一覧には出していない事例（published: false）
    slug: "washroom-custom",
    published: false,
    category: "new",
    title: "朝の時間が変わった、ホテルライクな造作洗面台",
    meta: "網走市 / 2LDK / 洗面スペース",
    desc: "「毎朝の支度が楽しくなる洗面台を」という夢を実現した造作洗面空間。",
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
];

/** 一覧に表示する事例だけを取り出します */
export const publishedWorks = works.filter((w) => w.published);

/** slug から1件取り出します */
export function findWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
