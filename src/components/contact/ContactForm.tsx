"use client";

import { useForm, ValidationError } from "@formspree/react";

const inquiryTypes = [
  "新築住宅の相談",
  "フルリフォームの相談",
  "部分リフォーム・修繕の依頼",
  "大工造作について",
  "見学会・イベントの予約",
  "お見積もりのご依頼",
  "その他",
];

const FORM_ID = "xbdvjjrv";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="bg-accent-pale border-l-4 border-accent p-8 text-center">
        <p className="font-serif text-primary text-lg font-bold mb-2">
          送信が完了しました
        </p>
        <p className="text-muted text-sm leading-relaxed">
          お問い合わせいただきありがとうございます。
          <br />
          通常2〜3営業日以内に担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-primary text-xs font-medium mb-1.5 font-sans tracking-wide">
            お名前 <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="山田 太郎"
            className="w-full bg-white border border-border focus:border-accent focus:outline-none px-4 py-3 text-sm text-primary font-sans placeholder:text-muted/50 transition-colors"
          />
          <ValidationError prefix="お名前" field="name" errors={state.errors} className="text-accent text-xs mt-1 font-sans" />
        </div>
        <div>
          <label className="block text-primary text-xs font-medium mb-1.5 font-sans tracking-wide">
            電話番号 <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="090-0000-0000"
            className="w-full bg-white border border-border focus:border-accent focus:outline-none px-4 py-3 text-sm text-primary font-sans placeholder:text-muted/50 transition-colors"
          />
          <ValidationError prefix="電話番号" field="phone" errors={state.errors} className="text-accent text-xs mt-1 font-sans" />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-primary text-xs font-medium mb-1.5 font-sans tracking-wide">
          メールアドレス <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="example@email.com"
          className="w-full bg-white border border-border focus:border-accent focus:outline-none px-4 py-3 text-sm text-primary font-sans placeholder:text-muted/50 transition-colors"
        />
        <ValidationError prefix="メールアドレス" field="email" errors={state.errors} className="text-accent text-xs mt-1 font-sans" />
      </div>

      {/* Address */}
      <div>
        <label className="block text-primary text-xs font-medium mb-1.5 font-sans tracking-wide">
          住所 <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          name="address"
          required
          placeholder="北海道網走市〇〇町1丁目2-3"
          className="w-full bg-white border border-border focus:border-accent focus:outline-none px-4 py-3 text-sm text-primary font-sans placeholder:text-muted/50 transition-colors"
        />
        <ValidationError prefix="住所" field="address" errors={state.errors} className="text-accent text-xs mt-1 font-sans" />
      </div>

      {/* Type */}
      <div>
        <label className="block text-primary text-xs font-medium mb-1.5 font-sans tracking-wide">
          お問い合わせ種別 <span className="text-accent">*</span>
        </label>
        <select
          name="type"
          required
          className="w-full bg-white border border-border focus:border-accent focus:outline-none px-4 py-3 text-sm text-primary font-sans transition-colors appearance-none"
        >
          <option value="">選択してください</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-primary text-xs font-medium mb-1.5 font-sans tracking-wide">
          ご要望・詳細
        </label>
        <textarea
          name="message"
          rows={6}
          placeholder="お気軽にご記入ください。&#10;例：「3人家族で、網走市内に新築を検討しています。予算は〇〇万円ほどで、造作キッチンに興味があります。」"
          className="w-full bg-white border border-border focus:border-accent focus:outline-none px-4 py-3 text-sm text-primary font-sans placeholder:text-muted/50 transition-colors resize-y"
        />
        <ValidationError prefix="ご要望・詳細" field="message" errors={state.errors} className="text-accent text-xs mt-1 font-sans" />
      </div>

      {/* Privacy */}
      <div className="flex gap-3 items-start">
        <input
          type="checkbox"
          id="privacy"
          required
          className="mt-1 shrink-0 accent-accent"
        />
        <label htmlFor="privacy" className="text-muted text-xs leading-relaxed font-sans">
          <a href="/privacy" className="text-accent hover:underline">プライバシーポリシー</a>
          に同意の上、送信します。
        </label>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-4 tracking-widest text-sm transition-colors font-sans"
      >
        {state.submitting ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
