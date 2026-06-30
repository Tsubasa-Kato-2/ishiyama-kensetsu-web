import Image from "next/image";

interface PageHeroProps {
  children: React.ReactNode;
}

export default function PageHero({ children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <Image
        src="/images/page-hero.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="object-cover object-[60%_center]"
        priority
      />
      {/* 明るい白いグラデーションで写真を活かしながらテキストを読みやすく */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-white/50" />
      {/* [&_.text-muted]: で子要素のtext-mutedを上書きして読みやすくする */}
      <div className="relative z-10 max-w-3xl mx-auto text-center [&_.text-muted]:text-primary/70 [&_.text-muted]:font-medium">
        {children}
      </div>
    </section>
  );
}
