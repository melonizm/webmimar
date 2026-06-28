"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxBlob } from "@/components/ui/ParallaxBlob";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TypewriterWords } from "@/components/ui/TypewriterWords";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const stats = [
  { value: "150+", label: "Mutlu Müşteri" },
  { value: "200+", label: "Tamamlanan Proje" },
  { value: "5+", label: "Yıl Deneyim" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxBlob speed="slow" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]">
          <div className="w-full h-full bg-gradient-to-b from-accent/[0.04] via-orange/[0.03] to-transparent rounded-full blur-3xl" />
        </ParallaxBlob>
        <ParallaxBlob speed="fast" className="absolute bottom-0 right-0 w-[500px] h-[400px]">
          <div className="w-full h-full bg-gradient-to-tl from-orange/[0.03] to-transparent rounded-full blur-3xl" />
        </ParallaxBlob>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <SectionLabel delay={0.2} className="py-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-foreground-light text-sm shadow-sm hover:shadow-md transition-shadow">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Profesyonel Web Tasarım Ajansı
            </div>
          </SectionLabel>
        </div>

        <FadeIn delay={0.1}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground mb-6 min-h-[100px] md:min-h-[140px] flex flex-col items-center justify-center">
            Kreatif Projelerle
            <br className="hidden md:block" />
            <span className="text-gradient">
              <TypewriterWords words={["İşletmenizi Büyütün", "Satışlarınızı Artırın", "Markanızı Güçlendirin"]} />
            </span>
          </h1>
        </FadeIn>

        <SectionLabel delay={0.2} className="mb-10 pb-2">
          <p className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            WebMimar olarak işletmelerin dijital dünyada görünür olmasını sağlıyoruz. Modern, hızlı ve dönüşüm odaklı web siteleri tasarlıyoruz.
          </p>
        </SectionLabel>

        <FadeIn delay={0.3} direction="up">
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-12">
            <Image
              src="/logo.png"
              alt="WebMimar Logo"
              width={88}
              height={88}
              priority
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-xl shadow-[0_0_30px_rgba(129,140,248,0.25)] hover:scale-105 transition-transform duration-500"
            />
            <div className="flex flex-col text-left">
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gradient leading-none tracking-tight">
                WebMimar
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-muted tracking-[0.25em] uppercase mt-1 font-semibold">
                Architects of the Digital World
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-0">
            <div className="group relative inline-flex w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange opacity-40 blur rounded-full group-hover:opacity-70 transition duration-300" />
              <WhatsAppCTA text="Teklif Al" className="!px-8 !py-4 !text-base shadow-2xl relative z-10 w-full sm:w-auto hover:scale-105 transition-transform duration-300" />
            </div>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground hover:bg-surface-alt transition-all duration-300 text-base font-semibold hover:scale-105 w-full sm:w-auto"
            >
              Çalışmalarımız
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up" className="mt-12 sm:mt-14 md:mt-20 grid grid-cols-3 gap-2 sm:gap-4 md:gap-12 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group border border-transparent hover:border-border p-2 sm:p-4 rounded-2xl hover:bg-surface transition-all duration-300"
            >
              <div className="text-base sm:text-xl md:text-3xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] md:text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
