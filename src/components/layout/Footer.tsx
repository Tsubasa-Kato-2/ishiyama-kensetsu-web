import Link from "next/link";

const footerLinks = {
  家づくり: [
    { href: "/works", label: "施工事例" },
    { href: "/furniture", label: "大工造作ギャラリー" },
    { href: "/process", label: "家づくりの進め方" },
  ],
  会社情報: [
    { href: "/concept", label: "私たちの想い" },
    { href: "/company", label: "会社概要" },
    { href: "/events", label: "イベント・ブログ" },
    { href: "/contact", label: "お問い合わせ" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      {/* CTA Strip */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-serif text-xl font-bold">
              まずは、お気軽にご相談ください
            </p>
            <p className="text-white/80 text-sm mt-1">
              お電話・メールでもお気軽にどうぞ
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-accent font-medium text-sm px-6 py-3 hover:bg-beige transition-colors tracking-wide"
            >
              無料相談・お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-white font-serif text-lg font-bold tracking-wider">
                株式会社石山建設
              </span>
              <br />
              <span className="text-accent text-xs tracking-[0.2em] uppercase">
                Ishiyama Construction
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              「家づくりで、物語をつくる」—— 北海道網走市を拠点に、
              新築からフルリフォーム、大工造作まで。
              お客様の暮らしに寄り添った家づくりをご提案します。
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/55">
              <p>北海道網走市北3条西4丁目13番地3</p>
              <p>
                <a href="tel:0152-44-2832" className="hover:text-accent transition-colors">
                  0152-44-2832
                </a>
              </p>
              <p className="text-white/40 text-xs">平日 8:00〜18:00</p>
            </div>
            {/* SNS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/ishiyama_construction/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-medium mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <p>© 2024 株式会社石山建設. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
