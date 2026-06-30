// Instagram APIトークンを設定しない間、手動で写真を表示するための設定。
// 写真を public/images/instagram/ に保存し、ファイル名とリンク先（投稿URL）を入力してください。
// link を省略すると、Instagramのプロフィールページにリンクします。
export const manualInstagramPhotos: { photo: string; link?: string }[] = [
  { photo: "/images/instagram/post-1.jpg", link: "https://www.instagram.com/p/DUuse2pEYth/" },
  { photo: "/images/instagram/post-2.jpg", link: "https://www.instagram.com/p/DNz_rNJYtHk/" },
  { photo: "/images/instagram/post-3.jpg", link: "https://www.instagram.com/p/DCJOjbUJktF/" },
];
