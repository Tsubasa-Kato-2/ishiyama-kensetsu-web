import type { MetadataRoute } from "next";
import { upcomingEvents } from "@/lib/events";
import { blogs } from "@/lib/blogs";
import { newsList } from "@/lib/news";

const BASE_URL = "https://www.ishiyama-kensetsu.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/concept`, priority: 0.9 },
    { url: `${BASE_URL}/works`, priority: 0.9 },
    { url: `${BASE_URL}/furniture`, priority: 0.8 },
    { url: `${BASE_URL}/process`, priority: 0.8 },
    { url: `${BASE_URL}/events`, priority: 0.8 },
    { url: `${BASE_URL}/company`, priority: 0.7 },
    { url: `${BASE_URL}/contact`, priority: 0.7 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  const eventPages = upcomingEvents.map((e) => ({
    url: `${BASE_URL}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogPages = blogs.map((b) => ({
    url: `${BASE_URL}/events/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsPages = newsList.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...eventPages, ...blogPages, ...newsPages];
}
