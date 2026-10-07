<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 株式会社石山建設 コーポレートサイト — 作業時の前提

北海道網走市の工務店のコーポレートサイト。コンセプトは「家づくりで、物語をつくる」。
本番: https://www.ishiyama-kensetsu.jp （`main` へのpushでVercelが自動デプロイ）

人間向けの詳しい手順は `README.md` にある。このファイルはAIアシスタントが
**事故を起こさないためのルール**に絞って記述する。

## 言語

ユーザーとのやり取り、コミットメッセージ、コード内の日本語テキストはすべて日本語。

---

## 1. 画像を追加するときは必ず縮小する（最重要）

**元データをそのままコミットしてはいけない。** 過去に `public/` が414MBまで
膨らんだ（最大18MB/枚）。現在は全画像を以下に統一している。

| 項目 | 基準 |
|---|---|
| 長辺 | 1920px |
| JPEG品質 | 82 |
| 目安サイズ | 200〜500KB |

Next.jsの `<Image>` はVercel側で自動圧縮されるが、**施工事例の写真拡大
（`PhotoGallery` のライトボックス）は生の `<img>` で元画像を直接読む**ため、
元データが重いとそこで直撃する。

Windows環境ではImageMagick等が入っていないため、PowerShellの `System.Drawing` で縮小する。

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

ユーザーがチャットに貼った画像は一時フォルダに実体がある。そこから
`Copy-Item` ではなく**上記で縮小しながら** `public/images/` へ配置すること。

---

## 2. 施工事例は2ファイル構成（片方だけ直すと壊れる）

`src/lib/works.ts` は**存在しない**。データは2箇所に分かれている。

| ファイル | 役割 |
|---|---|
| `src/app/works/page.tsx` の `works` 配列 | 一覧カード |
| `src/app/works/[slug]/page.tsx` の `worksData` | 詳細ページ |

`slug` で紐付く。**1件の追加・修正では必ず両方を確認する。**
過去に `meta`（所在地・築年数・延床面積）が一覧と詳細でズレた不具合が発生している。

### 詳細ページは `tag` で表示構成が分岐する

```
tag === "新築"  → 概要 → photos（トップレベル）→ quote
それ以外        → 概要 → before → before.photos → after → after.photos → quote
```

`before` / `proposal` / `after` は**新築でも型上必須**。表示されなくても省略できない。

### 非公開にする方法

**一覧側の配列から該当ブロックを削除する。** 詳細側のデータは残す。
これで一覧から消えるが、URL直打ちでは確認できる。公開前の事例を仕込む際の
確立された運用。「まだ公開しないで」と言われたらこの方法を使う。

---

## 3. コンテンツの置き場所

CMSはない。すべてソース直編集。

| 内容 | ファイル |
|---|---|
| トップのお知らせ | `src/lib/news.ts` |
| イベント・見学会 | `src/lib/events.ts` |
| ブログ記事 | `src/lib/blogs.ts` |
| 大工造作 | `src/app/furniture/page.tsx` |
| MVV | `src/lib/mvv.ts` |
| Instagram | `src/lib/instagram-manual.ts`（手動運用） |

- `news.ts` の `body` は**バッククォート**、`worksData` の各 `body` は
  **ダブルクォート + `\n\n`**。混同しやすい
- 終了したイベントはタイトル先頭に `【終了】` を付ける運用
- `slug` は必ず半角英小文字・数字・ハイフン

---

## 4. スタイル

Tailwind **v4**。色やフォントの定義は `tailwind.config.js` ではなく
**`src/app/globals.css` の `@theme {}` ブロック**にある。v3の設定ファイルを探しても無い。

---

## 5. ビルド確認

```bash
npm run build -- --webpack
```

ローカル確認時は `--webpack` を付ける。Vercel側は `npm run build` のままで正常。

---

## 6. 既知の事情

| 項目 | 内容 |
|---|---|
| `HeroSlider` の `unoptimized` | Vercelの画像最適化をバイパスしている。元画像3.9MBで最適化が失敗したための対処。現在289KBまで縮小済みなので外せばWebP変換が効くが、再発リスクを考えて保留中 |
| Formspree | 無料プランのため**自動返信なし**。フォームIDは問い合わせ・来場予約で共用（`xbdvjjrv`） |
| Googleカレンダー | 見学会の予約状況。埋め込みURLは `GoogleCalendarEmbed.tsx` に直書き |
| `.env.local` | `INSTAGRAM_ACCESS_TOKEN` のみ。Instagramは手動運用中のため**無くてもサイトは動く**。Git管理外 |
| お施主様の声 | 一部事例が未掲載。`quote` フィールドに追記すると表示される |

---

## 7. 作業の進め方

- 変更は小さくコミットし、`main` へpushすれば自動デプロイされる
- 本番サイトへの公開にあたる操作（非公開事例を一覧に出す等）は、
  **実行前にユーザーへ確認する**
- 画像の一括処理など広範囲の変更前は `git status` でクリーンな状態を確認する
  （問題があれば戻せるようにするため）
