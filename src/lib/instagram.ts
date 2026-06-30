export type InstagramPost = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
};

export async function fetchInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media` +
        `?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp` +
        `&limit=${limit}` +
        `&access_token=${token}`,
      { next: { revalidate: 3600 } } // 1時間キャッシュ
    );
    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return [];
    }
    const json = await res.json();
    return (json.data ?? []) as InstagramPost[];
  } catch (err) {
    console.error("Instagram fetch failed:", err);
    return [];
  }
}
