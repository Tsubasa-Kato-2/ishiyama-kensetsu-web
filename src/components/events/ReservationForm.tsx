"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const FORM_ID = "xbdvjjrv";

const MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1}月`);
const DAYS = Array.from({ length: 31 }, (_, i) => `${i + 1}日`);
const TIMES = ["10:00〜", "11:00〜", "12:00〜", "13:00〜", "14:00〜", "15:00〜"];

async function fetchAddressByZip(zip: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip.replace(/-/g, "")}`
    );
    const data = await res.json();
    if (data.results) {
      const r = data.results[0];
      return `${r.address1}${r.address2}${r.address3}`;
    }
  } catch {
    // ネットワークエラー等
  }
  return null;
}

function RequiredBadge() {
  return (
    <span className="inline-flex items-center bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 leading-none shrink-0">
      必須
    </span>
  );
}

function FieldRow({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b border-gray-200 py-4 gap-3 sm:gap-6 items-start">
      <div className="flex items-center gap-2 pt-1">
        <span className="text-sm text-primary font-medium">{label}</span>
        {required && <RequiredBadge />}
      </div>
      <div>{children}</div>
    </div>
  );
}

const inputClass =
  "w-full border border-gray-300 px-3 py-2 text-sm text-primary focus:outline-none focus:border-accent transition-colors";
const selectClass =
  "border border-gray-300 px-2 py-2 text-sm text-primary focus:outline-none focus:border-accent transition-colors bg-white";

export default function ReservationForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [zipLoading, setZipLoading] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleZipAutoFill = async () => {
    setZipLoading(true);
    setZipError(false);
    const result = await fetchAddressByZip(zipcode);
    setZipLoading(false);
    if (result) {
      setAddress(result);
    } else {
      setZipError(true);
    }
  };

  if (state.succeeded) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl text-accent mb-4">✓</div>
        <h3 className="font-serif text-primary text-xl font-bold mb-3">
          予約申し込みを受け付けました
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          担当者より改めてご連絡いたします。
          <br />
          お急ぎの場合はお電話（0152-44-2832）へどうぞ。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input type="hidden" name="_subject" value="【来場予約】石山建設 見学会予約申込" />

      <div className="border-t border-gray-200">
        {/* お名前 */}
        <FieldRow label="お名前" required>
          <input
            type="text"
            name="name"
            required
            placeholder="石山 太郎"
            className={inputClass}
          />
          <ValidationError prefix="お名前" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </FieldRow>

        {/* フリガナ */}
        <FieldRow label="フリガナ" required>
          <input
            type="text"
            name="furigana"
            required
            placeholder="イシヤマ タロウ"
            className={inputClass}
          />
        </FieldRow>

        {/* メールアドレス */}
        <FieldRow label="メールアドレス" required>
          <input
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            className={inputClass}
          />
          <ValidationError prefix="メールアドレス" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </FieldRow>

        {/* 郵便番号 */}
        <FieldRow label="郵便番号" required>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
              placeholder="093-0042"
              maxLength={8}
              className={`${inputClass} max-w-[160px]`}
            />
            <button
              type="button"
              onClick={handleZipAutoFill}
              disabled={zipLoading || zipcode.length < 7}
              className="text-xs border border-accent text-accent px-3 py-2 hover:bg-accent hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              {zipLoading ? "検索中..." : "住所自動入力"}
            </button>
          </div>
          {zipError && (
            <p className="text-red-500 text-xs mt-1">住所が見つかりませんでした。郵便番号をご確認ください。</p>
          )}
        </FieldRow>

        {/* 住所 */}
        <FieldRow label="住所" required>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="北海道網走市〇〇"
            className={inputClass}
          />
        </FieldRow>

        {/* 来場希望日時1 */}
        <FieldRow label="来場希望日時1" required>
          <div className="flex gap-2 flex-wrap">
            <select name="visit_date1_month" required className={selectClass}>
              {MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select name="visit_date1_day" required className={selectClass}>
              {DAYS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select name="visit_date1_time" required className={selectClass}>
              {TIMES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </FieldRow>

        {/* 来場希望日時2 */}
        <FieldRow label="来場希望日時2" required>
          <div className="flex gap-2 flex-wrap">
            <select name="visit_date2_month" required className={selectClass}>
              {MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select name="visit_date2_day" required className={selectClass}>
              {DAYS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select name="visit_date2_time" required className={selectClass}>
              {TIMES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </FieldRow>

        {/* 電話番号 */}
        <FieldRow label="電話番号" required>
          <input
            type="tel"
            name="phone"
            required
            placeholder="0152-44-0000"
            className={inputClass}
          />
        </FieldRow>

        {/* お問い合わせ内容 */}
        <FieldRow label={"お問い合わせ内容\nご意見・ご要望"}>
          <textarea
            name="message"
            rows={6}
            placeholder="ご質問・ご要望などがあればお気軽にどうぞ。"
            className={`${inputClass} resize-y`}
          />
        </FieldRow>
      </div>

      {/* プライバシーポリシー */}
      <div className="mt-8 flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy-reservation"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          required
          className="mt-0.5 accent-accent w-4 h-4 shrink-0"
        />
        <label htmlFor="privacy-reservation" className="text-xs text-muted leading-relaxed cursor-pointer">
          <a href="/privacy" className="text-accent underline hover:no-underline" target="_blank">
            プライバシーポリシー
          </a>
          に同意の上、送信してください。
        </label>
      </div>

      {/* 送信ボタン */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          disabled={state.submitting || !privacy}
          className="inline-flex items-center gap-2 bg-accent text-white font-sans font-bold text-sm tracking-widest px-12 py-4 hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "送信中..." : "予約を申し込む"}
        </button>
      </div>
    </form>
  );
}
