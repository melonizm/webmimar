"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/data/site-data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < count ? "text-orange" : "text-muted/40"}`}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-surface border border-border-light rounded-2xl p-5 sm:p-6 shadow-sm mx-2 sm:mx-3 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1">
      <Stars count={testimonial.stars} />
      <p className="text-foreground-light text-sm leading-relaxed mt-3 mb-4 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-xs text-muted">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <Section id="testimonials" alt className="!px-0 overflow-hidden">
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">Müşteri Yorumları</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Müşterilerimiz <span className="text-gradient">Ne Diyor?</span>
          </h2>
        </SectionLabel>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background-alt to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background-alt to-transparent md:w-32" />
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
