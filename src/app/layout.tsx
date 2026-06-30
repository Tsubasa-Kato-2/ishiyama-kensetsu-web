import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "株式会社石山建設 | 家づくりで、物語をつくる",
    template: "%s | 株式会社石山建設",
  },
  description:
    "北海道網走市の工務店・株式会社石山建設。新築・フルリフォームから大工造作まで、お客様の暮らしに合わせた「物語のある家づくり」をご提案します。",
  keywords: [
    "石山建設",
    "網走",
    "工務店",
    "新築",
    "リフォーム",
    "大工造作",
    "北海道",
    "注文住宅",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社石山建設",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
