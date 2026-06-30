"use client";

import { useState } from "react";
import { upcomingEvents } from "@/lib/events";

const allEventDates = new Set(
  upcomingEvents.flatMap((e) => e.eventDates ?? [])
);

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function getInitialMonth() {
  const dates = [...allEventDates].sort();
  if (dates.length > 0) {
    const d = new Date(dates[0]);
    return { year: d.getFullYear(), month: d.getMonth() };
  }
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

export default function ReservationCalendar() {
  const initial = getInitialMonth();
  const [year, setYear] = useState(initial.year);
  const [month, setMonth] = useState(initial.month);

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const prevMonth = () => {
    if (month === 0) { setYear((y) => y - 1); setMonth(11); }
    else setMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear((y) => y + 1); setMonth(0); }
    else setMonth((m) => m + 1);
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const isEvent = (day: number) => {
    const str = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return allEventDates.has(str);
  };
  const isToday = (day: number) => {
    const str = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return str === todayStr;
  };

  return (
    <div className="bg-white border border-border max-w-sm w-full mx-auto p-6 shadow-sm">
      {/* 月ナビゲーション */}
      <div className="flex items-center justify-between mb-5">
        <button
          type="button"
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center text-xl text-muted hover:text-accent transition-colors"
          aria-label="前の月"
        >
          ‹
        </button>
        <p className="font-sans font-bold text-primary text-sm tracking-wide">
          {year}年{month + 1}月
        </p>
        <button
          type="button"
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center text-xl text-muted hover:text-accent transition-colors"
          aria-label="次の月"
        >
          ›
        </button>
      </div>

      {/* 曜日ヘッダー */}
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map((d, i) => (
          <div
            key={d}
            className={`text-center text-[11px] font-sans font-medium pb-2 ${
              i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-muted"
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* 日付グリッド */}
      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dow = (firstDay + i) % 7;
          const event = isEvent(day);
          const todayMark = isToday(day);
          return (
            <div key={day} className="flex items-center justify-center py-0.5">
              <span
                className={[
                  "text-xs font-sans w-7 h-7 flex items-center justify-center rounded-full transition-colors",
                  event
                    ? "bg-accent text-white font-bold"
                    : todayMark
                    ? "ring-2 ring-accent text-accent font-bold"
                    : dow === 0
                    ? "text-red-400"
                    : dow === 6
                    ? "text-blue-400"
                    : "text-primary",
                ].join(" ")}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>

      {/* 凡例 */}
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-[11px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded-full bg-accent inline-block shrink-0" />
          見学会開催日
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded-full ring-2 ring-accent inline-block shrink-0" />
          本日
        </span>
      </div>
    </div>
  );
}
