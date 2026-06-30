"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { EventItem } from "@/lib/events";

const INTERVAL = 4000;

function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative block aspect-[16/9] overflow-hidden bg-primary"
    >
      {event.mainPhoto ? (
        <Image
          src={event.mainPhoto}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={70}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-wood/20 to-primary/40" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
      <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 tracking-wide font-sans">
        {event.type}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-serif text-sm sm:text-base font-bold leading-snug mb-1">
          {event.title}
        </p>
        <p className="text-white/70 text-xs font-sans">{event.date}</p>
      </div>
    </Link>
  );
}

export default function EventsBanner({ events }: { events: EventItem[] }) {
  const [current, setCurrent] = useState(0);
  const isSliding = events.length >= 4;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % events.length);
  }, [events.length]);

  useEffect(() => {
    if (!isSliding) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [isSliding, next]);

  if (events.length === 0) return null;

  if (!isSliding) {
    // 3件以下：固定表示
    return (
      <section className="bg-beige py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="section-label">Upcoming Events</p>
            <Link href="/events" className="text-accent text-xs font-sans hover:underline">
              一覧を見る →
            </Link>
          </div>
          <div className={`grid gap-5 ${events.length === 1 ? "grid-cols-1 max-w-md" : events.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 4件以上：スライド表示
  return (
    <section className="bg-beige py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <p className="section-label">Upcoming Events</p>
          <Link href="/events" className="text-accent text-xs font-sans hover:underline">
            一覧を見る →
          </Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="w-full shrink-0 px-1">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
          {/* インジケーター */}
          <div className="flex gap-2 justify-center mt-4">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`イベント ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-8" : "bg-border w-1.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
