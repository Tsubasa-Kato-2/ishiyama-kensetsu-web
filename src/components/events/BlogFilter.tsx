"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SlideIn from "@/components/ui/SlideIn";

type Blog = {
  id: number;
  slug: string;
  date: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  mainPhoto?: string;
};

const categoryColors: Record<string, string> = {
  "家づくりコラム": "bg-accent-pale text-accent",
  "大工造作": "bg-beige-dark text-wood",
  "現場レポート": "bg-primary/10 text-primary",
  "お知らせ": "bg-beige text-muted",
};

const CATEGORIES = ["すべて", "家づくりコラム", "大工造作", "現場レポート", "お知らせ"];

export default function BlogFilter({ blogs }: { blogs: Blog[] }) {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて"
    ? blogs
    : blogs.filter((b) => b.category === active);

  return (
    <>
      {/* フィルターボタン */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs px-3 py-1.5 font-sans transition-colors ${
              cat === active
                ? "bg-accent text-white"
                : "bg-white border border-border text-muted hover:border-accent-light"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ブロググリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((blog, i) => (
          <SlideIn key={blog.id} direction="up" delay={i * 0.08}>
            <Link href={`/events/${blog.slug}`} className="block h-full">
              <article className="bg-white border border-border hover:border-accent-light hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                <div className="aspect-[16/9] bg-beige-dark relative overflow-hidden">
                  {blog.mainPhoto ? (
                    <Image
                      src={blog.mainPhoto}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-wood/15 to-primary/20 group-hover:opacity-80 transition-all" />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2 py-0.5 font-sans font-medium ${categoryColors[blog.category] || "bg-beige text-muted"}`}>
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-muted text-xs font-sans">{blog.date}</span>
                    <span className="text-border">•</span>
                    <span className="text-muted text-xs font-sans">読了 {blog.readTime}</span>
                  </div>
                  <h3 className="font-serif text-primary text-sm font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed line-clamp-2">{blog.desc}</p>
                  <div className="mt-4 text-accent text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    続きを読む →
                  </div>
                </div>
              </article>
            </Link>
          </SlideIn>
        ))}
      </div>
    </>
  );
}
