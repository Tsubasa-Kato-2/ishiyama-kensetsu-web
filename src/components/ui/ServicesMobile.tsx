import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesMobile() {
  return (
    <section className="lg:hidden bg-cream py-16 px-4">
      <FadeIn className="text-center mb-10">
        <p className="section-label mb-3">Our Services</p>
        <h2 className="font-serif text-2xl text-primary font-bold">石山建設の3つの仕事</h2>
        <div className="divider mx-auto" />
      </FadeIn>

      <div className="space-y-10">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08}>
            <div className="bg-white border border-border overflow-hidden">
              <div className="aspect-[4/3] bg-beige-dark relative overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.tag}
                  fill
                  sizes="100vw"
                  quality={70}
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-4 font-sans text-5xl font-bold text-white/20 leading-none select-none pointer-events-none">
                  {service.number}
                </span>
              </div>
              <div className="p-6">
                <span className="text-accent text-xs font-sans tracking-[0.2em] uppercase block mb-2">
                  {service.tag}
                </span>
                <h3 className="font-serif text-primary text-xl font-bold leading-snug mb-3 whitespace-pre-line">
                  {service.heading}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {service.body}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent px-5 py-2.5 transition-all duration-200 tracking-wide"
                >
                  {service.label} →
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
