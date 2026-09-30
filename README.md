# 株式会社石山建設 コーポレートサイト

北海道網走市の工務店・株式会社石山建設のコーポレートサイトです。
コンセプトは「家づくりで、物語をつくる」。

- **公開URL**: https://www.ishiyama-kensetsu.jp
- **リポジトリ**: https://github.com/Tsubasa-Kato-2/ishiyama-kensetsu-web
- **ホスティング**: Vercel（`main` ブランチへのpushで自動デプロイ）

---

## 1. 開発環境の立ち上げ

Node.js 20以上が必要です。

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

### ビルド確認

```bash
npm run build -- --webpack
```

> **注意**: ローカルでビルド確認するときは `--webpack` を付けてください。
> Next.js 16はデフォルトでTurbopackを使いますが、日本語フォントの扱いで
> 差異が出ることがあります。Vercel側のビルドは `npm run build` のまま
> 正常に動作しています。

---

## 2. 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 16.2.7（App Router） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS v4 |
| アニメーション | Framer Motion |
| フォーム | Formspree（`@formspree/react`） |
| ホスティング | Vercel |

Tailwind v4を使っているため、**カラーやフォントの定義は
`tailwind.config.js` ではなく `src/app/globals.css` の `@theme {}` ブロック**にあります。
v3の設定ファイルを探しても存在しません。

---

## 3. ディレクトリ構成

```
src/
├── app/                    ページ（App Router）
│   ├── page.tsx            トップページ
│   ├── layout.tsx          全ページ共通のメタ情報・ヘッダー・フッター
│   ├── sitemap.ts          サイトマップ（/sitemap.xml として自動生成）
│   ├── icon.png            ファビコン（このファイルを差し替えるだけで変わる）
│   ├── globals.css         Tailwindのテーマ定義（色・フォント）
│   ├── works/              施工事例（一覧 + 詳細）
│   ├── events/             イベント・ブログ（一覧 + 詳細）
│   ├── news/[slug]/        お知らせ詳細
│   ├── concept/            私たちの想い
│   ├── process/            家づくりの進め方
│   ├── furniture/          大工造作
│   ├── company/            会社概要
│   ├── contact/            お問い合わせ
│   └── privacy/            プライバシーポリシー
├── components/             UIコンポーネント
└── lib/                    コンテンツのデータ（下記参照）

public/images/              画像（用途ごとにフォルダ分け）
```

---

## 4. コンテンツの編集方法

**このサイトにCMSはありません。** 内容の更新はソースコードを直接編集して
pushする方式です。どこを触ればいいかを用途別にまとめます。

### 施工事例

2つのファイルを**両方**編集する必要があります。

| ファイル | 役割 |
|---|---|
| `src/app/works/page.tsx` | 一覧のカード（サムネイル・タイトル・概要） |
| `src/app/works/[slug]/page.tsx` | 詳細ページ（ストーリー・写真ギャラリー） |

`slug` で紐付いています。**一覧の配列から消すと非公開**になり、
詳細ページのデータは残ったままになります（URLを直接叩けば見られる状態）。
公開前の事例を仕込んでおくときにこの方法を使っています。

一覧側と詳細側で `meta`（所在地・築年数・延床面積）の記述が
**ずれやすい**ので、編集時は必ず両方を確認してください。

### イベント・ブログ・お知らせ

| 内容 | ファイル |
|---|---|
| 見学会などのイベント | `src/lib/events.ts` |
| ブログ記事 | `src/lib/blogs.ts` |
| トップページのお知らせ | `src/lib/news.ts` |
| 大工造作の施工例 | `src/app/furniture/page.tsx` |
| ミッション・ビジョン・バリュー | `src/lib/mvv.ts` |

イベントの `eventDates` は、詳細ページのカレンダー表示に使う日付の配列です。
終了したイベントはタイトルの先頭に `【終了】` を付けて運用しています。

### Instagram

`src/lib/instagram-manual.ts` に投稿URLと画像を手動で登録しています。
API連携（`src/lib/instagram.ts`）のコードも残っていますが、
アクセストークンの期限管理が必要なため現在は手動運用です。

---

## 5. 画像の扱い（重要）

**画像は必ず縮小してからコミットしてください。**

一度、元データをそのまま入れた結果、`public/` が414MBまで膨らんだことが
あります（最大18MB/枚）。現在は全画像を以下の基準に統一しています。

| 項目 | 基準 |
|---|---|
| 長辺 | 1920px |
| JPEG品質 | 82 |
| 目安のファイルサイズ | 200〜500KB |

Next.jsの `<Image>` がVercel側で自動圧縮・WebP変換しますが、
**施工事例の写真拡大表示（ライトボックス）は元画像をそのまま読み込む**ため、
元データが重いとそこで直撃します。

### 縮小の手順

Windowsなら PowerShell で完結します（`scripts/` に置いていないため、
必要に応じて下記を使ってください）。

```powershell
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("入力.jpg")
$scale = [Math]::Min(1.0, 1920 / [Math]::Max($img.Width, $img.Height))
$bmp = New-Object System.Drawing.Bitmap([int]($img.Width*$scale), [int]($img.Height*$scale))
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $bmp.Width, $bmp.Height); $g.Dispose()
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | ? { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]82)
$bmp.Save("出力.jpg", $codec, $ep); $bmp.Dispose(); $img.Dispose()
```

Squoosh（https://squoosh.app/）などのWebツールでも構いません。

### 命名規則

```
public/images/works/<slug>-01-exterior.jpg    メイン写真
public/images/works/<slug>-02.jpg 〜          アフター写真（連番）
public/images/works/<slug>-before-01.jpg 〜   ビフォー写真（連番）
```

---

## 6. デプロイ

`main` ブランチにpushすると Vercel が自動でビルド・デプロイします。
数分で本番に反映されます。手動の操作は不要です。

```bash
git add <ファイル>
git commit -m "変更内容"
git push origin main
```

---

## 7. 引き継ぎが必要な外部サービス

以下のアカウントは**別途、権限の移管または認証情報の共有が必要**です。
このリポジトリには認証情報を一切含めていません。

| サービス | 用途 | 引き継ぎ時の作業 |
|---|---|---|
| **GitHub** | ソースコード管理 | リポジトリへのコラボレーター追加、または所有権移譲 |
| **Vercel** | ホスティング | プロジェクトへのメンバー追加、またはTransfer |
| **お名前.com** | ドメイン（ishiyama-kensetsu.jp）| アカウント情報の共有。ネームサーバーはVercel（`ns1.vercel-dns.com` / `ns2.vercel-dns.com`）を指定済み |
| **Formspree** | 問い合わせ・来場予約フォーム | アカウント共有（フォームID: `xbdvjjrv`、お問い合わせと来場予約で共用） |
| **Googleカレンダー** | 見学会の予約状況表示 | 対象カレンダーの編集権限を付与。埋め込みIDは `src/components/events/GoogleCalendarEmbed.tsx` に直書き |
| **Google Search Console** | 検索流入の確認 | プロパティへのユーザー追加。認証コードは `src/app/layout.tsx` の `verification.google` |
| **Instagram** | 投稿の掲載 | アカウント情報の共有 |

### 環境変数

`.env.local`（Git管理外）に以下を設定しています。

```
INSTAGRAM_ACCESS_TOKEN=...
```

現在Instagramは手動運用のため、**このトークンがなくてもサイトは正常に動作します**。
API連携を再開する場合のみ必要です。新しい担当者には別途安全な方法で共有してください。

---

## 8. 引き継ぎ時のチェックリスト

- [ ] GitHubリポジトリへのアクセス権を付与
- [ ] リポジトリの公開/非公開設定を確認（公開の場合、内容を見直す）
- [ ] Vercelプロジェクトへのアクセス権を付与
- [ ] お名前.comのアカウント情報を共有
- [ ] Formspreeのアカウント情報を共有
- [ ] Googleカレンダーの編集権限を付与
- [ ] Google Search Consoleにユーザー追加
- [ ] Instagramアカウント情報を共有
- [ ] `.env.local` の内容を安全な方法で共有（必要な場合のみ）

---

## 9. 既知の課題・申し送り

| 項目 | 内容 |
|---|---|
| **Instagramリンクの不一致** | `src/components/layout/Footer.tsx` は `ishiyama_construction`、`src/app/page.tsx` と `src/app/contact/page.tsx` は `ishiyama_kensetsu` を参照しています。正しい方に統一が必要です |
| **フォームの自動返信なし** | Formspreeの無料プランは自動返信に非対応です。有料プランへの変更、またはWeb3Forms等への移行が必要 |
| **ヒーロー画像の `unoptimized`** | `src/components/ui/HeroSlider.tsx` でVercelの画像最適化をバイパスしています。元画像が3.9MBで最適化に失敗したための対処でしたが、現在は289KBまで縮小済みのため、この指定を外せばWebP変換が効いてさらに軽くなります |
| **お施主様の声** | 一部の施工事例（winter-renovation / open-ldk / custom-kitchen / inherited-home）は未掲載です。`quote` フィールドに追記すると表示されます |
| **スタッフ写真** | 会社概要のスタッフ写真が未設定です |
| **LINE連携** | 未対応。URLが決まり次第の対応を想定しています |
