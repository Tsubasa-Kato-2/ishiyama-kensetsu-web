"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/concept", label: "私たちの想い" },
  { href: "/works", label: "施工事例" },
  { href: "/furniture", label: "大工造作" },
  { href: "/process", label: "家づくりの進め方" },
  { href: "/events", label: "イベント・ブログ" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const headerBg = isMenuOpen
    ? "bg-primary"
    : isHome
      ? isScrolled
        ? "bg-primary/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
      : "bg-primary/95 backdrop-blur-md shadow-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="石山建設"
              className="h-10 lg:h-12 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] tracking-wide font-sans transition-colors relative group ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-[0.78rem] font-sans font-medium px-4 py-2 transition-all duration-200 tracking-wide"
            >
              無料相談
            </Link>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-primary z-40 overflow-y-auto transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-4 text-base font-sans border-b border-white/10 transition-colors ${
                pathname === link.href ? "text-accent" : "text-white/85 hover:text-white"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 bg-accent text-white text-center py-4 font-medium tracking-wide"
          >
            無料相談・お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
