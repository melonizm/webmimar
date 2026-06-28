import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-orange/[0.03] to-background" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Hemen <span className="text-gradient">Başlayalım</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            İşletmenizi dijital dünyaya taşımak için ilk adımı atın. WhatsApp üzerinden hemen iletişime geçin, size özel teklif hazırlayalım.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <WhatsAppCTA text="WhatsApp'tan Teklif Al" className="!px-8 sm:!px-10 !py-3.5 sm:!py-4 !text-base sm:!text-lg" />
          <p className="text-muted text-xs sm:text-sm mt-4 sm:mt-6">🕐 Genellikle 30 dakika içinde yanıt veriyoruz</p>
        </FadeIn>
      </div>
    </section>
  );
}
