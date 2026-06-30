"use client";

import { useState } from "react";

const shinchikuSteps = [
  {
    number: "01",
    phase: "ファーストコンタクト",
    title: "まずはお気軽に相談を",
    duration: "随時",
    body: "お電話やメールからお気軽にご連絡ください。「どこから始めればいい？」という段階でも大歓迎です。家づくりへの不安や疑問を、まずは気軽にお話しください。",
    detail: "初回相談は完全無料。土地のこと、予算のこと、どんな家が建てられるか——何でも聞いてください。",
  },
  {
    number: "02",
    phase: "ヒアリング・資金計画",
    title: "あなたの「暮らし方」を聞かせてください",
    duration: "1〜2回",
    body: "「朝、どんな動作でスタートしますか？」「家族がいちばん集まる時間は？」——こんな質問から始まります。ご家族の暮らし方をじっくり聞かせてもらい、理想の家のイメージを一緒に整理します。",
    detail: "資金計画もこの段階でご相談。建築費用だけでなく、ローン・諸経費・将来のメンテナンスも含めて一緒に考えます。",
  },
  {
    number: "03",
    phase: "土地探し（必要な場合）",
    title: "オホーツクエリアで豊かに暮らす為の土地選び",
    duration: "1〜3ヶ月",
    body: "土地をお持ちでない方は、土地探しのサポートも行います。日当たり・周辺環境・通学路・防災リスク——地元工務店として、土地選びの重要なポイントをアドバイスします。",
    detail: "不動産業者との連携もスムーズ。希望の条件を整理して、最適な土地をご提案します。",
  },
  {
    number: "04",
    phase: "設計申込",
    title: "正式に設計をスタートする",
    duration: "",
    body: "土地・資金計画・家のイメージがおおよそ固まった段階で、正式な設計申込の手続きを行います。ここから本格的な設計フェーズに入ります。",
    detail: "申込後は専任の担当者がついて、より具体的なプランニングを進めていきます。",
  },
  {
    number: "05",
    phase: "プラン作成・提案",
    title: "あなたの家のプランを描く",
    duration: "2〜4週間",
    body: "ヒアリングの内容をもとに、設計プランを作成します。間取り図・外観イメージ・大工造作の提案などを含めて、「あなたの家」のビジョンをご提示します。",
    detail: "プランは修正可能。「ここをこうしたい」という要望を出し合いながら、納得のいくプランに仕上げていきます。",
  },
  {
    number: "06",
    phase: "お見積もり・契約",
    title: "費用の内訳を一つひとつ確認する",
    duration: "2〜3週間",
    body: "詳細な見積書をご提示します。「なぜこの費用がかかるのか」を丁寧に説明します。追加費用が発生しやすい箇所も事前にお伝えし、安心してご契約いただけます。",
    detail: "ご納得いただけた段階で工事請負契約を締結。ここから正式に「あなたの家づくり」がスタートします。",
  },
  {
    number: "07",
    phase: "着工・施工",
    title: "見えない部分まで、誠実に",
    duration: "4〜8ヶ月",
    body: "基礎工事から上棟、内装工事まで、工程と品質を写真で記録・管理します。現場の進捗レポートをお客様と共有し、いつでも確認できる「見える化」を実現します。",
    detail: "現場見学も随時OK。建てている途中の家を見て、わからないことは何でも聞いてください。",
  },
  {
    number: "08",
    phase: "完成・引き渡し",
    title: "あなたの物語の始まりの日",
    duration: "",
    body: "完成した家を一緒に確認します。設備の使い方から日常のメンテナンスまで、丁寧にご説明します。引き渡しは終わりではなく、新しい物語の始まりです。",
    detail: "引き渡し後も安心のアフターフォロー体制。何かあればすぐにご連絡ください。",
  },
];

const reformSteps = [
  {
    number: "01",
    phase: "ファーストコンタクト",
    title: "まずはご相談を",
    duration: "随時",
    body: "「築年数が経ってきた」「水まわりが古くなってきた」「断熱を良くしたい」——どんなきっかけでも大丈夫です。お電話やメールでお気軽にご連絡ください。",
    detail: "初回相談は完全無料。「どこまでやればいいか分からない」という段階でも歓迎です。まずはお話しするだけでも。",
  },
  {
    number: "02",
    phase: "現地確認・ヒアリング",
    title: "今の家の状態と、ご要望を聞かせてください",
    duration: "1〜2回",
    body: "実際にお宅に伺い、現在の状況を確認します。どこが気になっているか、どんな暮らしにしたいか——お客様の言葉をじっくり聞きながら、現地をくまなく確認します。",
    detail: "「見えない部分」の劣化や問題点も、プロの目でチェックします。隠れた問題を早期に発見することで、後から追加費用が発生するリスクを減らします。",
  },
  {
    number: "03",
    phase: "建築申込",
    title: "正式に工事を申し込む",
    duration: "",
    body: "現地確認・ヒアリングの内容をもとに、正式な建築申込の手続きを行います。ここから改修プランの本格的な作成に入ります。",
    detail: "申込後は担当者が改修内容を詳しく整理し、最適なプランをご提案する準備を進めます。",
  },
  {
    number: "04",
    phase: "現状診断・改修プラン作成",
    title: "何をどこまでやるか、一緒に整理する",
    duration: "2〜3週間",
    body: "現地確認の結果をもとに、「今すぐ対応すべき箇所」と「将来的に検討する箇所」を整理します。ご予算や優先順位を踏まえた改修プランをご提案します。",
    detail: "「全部やりたいけど予算が心配」という方にも、段階的なリフォーム計画をご提案できます。無理のない進め方を一緒に考えましょう。",
  },
  {
    number: "05",
    phase: "お見積もり・ご提案",
    title: "費用の内訳を一つひとつ確認する",
    duration: "1〜2週間",
    body: "改修プランをもとに、詳細な見積書をご提示します。「なぜこの工事が必要か」「この費用は何か」を丁寧にご説明します。追加費用が出やすい箇所も事前にお伝えします。",
    detail: "「この部分だけ」「この予算の中で最大限」といったご要望にも柔軟に対応します。ご納得いただけるまで何度でも調整します。",
  },
  {
    number: "06",
    phase: "契約",
    title: "工事の内容と費用を確認してご契約",
    duration: "",
    body: "プランと見積もりにご納得いただけた段階で工事請負契約を締結します。工事範囲・費用・工期を書面で明確にします。",
    detail: "契約後の追加変更も対応可能ですが、追加費用が発生する場合は事前にご確認いただきます。透明性を大切にしています。",
  },
  {
    number: "07",
    phase: "着工・施工",
    title: "暮らしながら、丁寧に進める",
    duration: "1〜4ヶ月 ※規模による",
    body: "工事中はできる限りお客様の生活への影響を最小限にします。進捗・施工写真をリアルタイムで共有し、「今どうなっているか」をいつでも確認できます。",
    detail: "部分リフォームで生活しながら工事を進める場合も、養生や工程を工夫して対応します。不安なことは何でも聞いてください。",
  },
  {
    number: "08",
    phase: "完成・引き渡し",
    title: "新しくなった家で、新しい暮らしを",
    duration: "",
    body: "完成後は一緒に確認します。新しい設備の使い方・メンテナンスのポイントを丁寧にご説明します。工事内容の記録も残しますので、将来のメンテナンス時にも役立ちます。",
    detail: "引き渡し後もお気軽にご連絡ください。地元の工務店として、長くお付き合いさせていただきます。",
  },
];

type Tab = "shinchiku" | "fullreform";

export default function ProcessTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("shinchiku");
  const steps = activeTab === "shinchiku" ? shinchikuSteps : reformSteps;

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Process</p>
          <h2 className="font-serif text-primary text-2xl sm:text-3xl font-bold">
            家づくりの流れ
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-border bg-white">
            <button
              onClick={() => setActiveTab("shinchiku")}
              className={`px-8 py-3 text-sm font-medium font-sans tracking-wide transition-all duration-200 ${
                activeTab === "shinchiku"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-primary hover:bg-beige"
              }`}
            >
              新築・注文住宅
            </button>
            <button
              onClick={() => setActiveTab("fullreform")}
              className={`px-8 py-3 text-sm font-medium font-sans tracking-wide transition-all duration-200 ${
                activeTab === "fullreform"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-primary hover:bg-beige"
              }`}
            >
              フルリフォーム
            </button>
          </div>
        </div>

        {/* Difference note for reform */}
        {activeTab === "fullreform" && (
          <div className="mb-10 bg-accent-pale border-l-4 border-accent px-6 py-4 text-sm text-primary/80 leading-relaxed">
            <span className="font-medium text-accent">フルリフォームの特徴：</span>{" "}
            新築と異なり、現在の住まいの状態を診断してから進めます。現地確認・現状診断を経て、お客様に最適な全面改修プランをご提案します。
          </div>
        )}

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] sm:left-[47px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={`${activeTab}-${step.number}`} className="flex gap-6 sm:gap-8">
                {/* Number */}
                <div className="shrink-0 w-20 flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent text-white flex items-center justify-center font-bold text-sm font-sans z-10 relative">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 w-px bg-border mt-2 hidden sm:block"
                      style={{ minHeight: "40px" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-white border border-border p-6 hover:border-accent-light hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap gap-3 items-center mb-3">
                      <span className="text-accent text-xs font-sans tracking-widest uppercase">
                        {step.phase}
                      </span>
                      {step.duration && (
                        <span className="bg-beige text-muted text-xs px-2 py-0.5 font-sans">
                          目安：{step.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-primary text-lg font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-3">{step.body}</p>
                    <p className="text-primary/70 text-xs leading-relaxed border-l-2 border-accent-pale pl-3">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
