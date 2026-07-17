import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { whatsappUrl } from "@/lib/constants";
import { pricingPlans } from "@/lib/data/site-data";

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">Fiyatlandırma</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            <span className="text-gradient">Size Uygun Paketi</span> Seçin
          </h2>
        </SectionLabel>
        <SectionLabel delay={0.2}>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına göre en uygun paketi seçin. Tüm paketlerde domain ve hosting ilk yıl dahildir.
          </p>
        </SectionLabel>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <StaggerItem
            key={plan.name}
            className={`relative flex flex-col transition-all duration-500 group ${
              plan.popular
                ? "bg-surface rounded-2xl shadow-2xl shadow-accent/10 border-2 border-accent z-10 lg:-my-4 lg:py-4 hover:-translate-y-2"
                : "bg-surface border border-border-light rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:z-20"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-accent text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md shadow-accent/25 whitespace-nowrap">
                  ⭐ En Popüler
                </span>
              </div>
            )}

            <div className={`flex flex-col flex-1 p-5 sm:p-6 md:p-7 lg:p-8 ${plan.popular ? "pt-10" : ""}`}>
              <div className="mb-3 sm:mb-4">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-muted mt-1">{plan.subtitle}</p>
              </div>

              <div className="mb-1">
                <span className="text-muted line-through text-xs sm:text-sm">₺{plan.oldPrice}</span>
              </div>
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">₺{plan.price}</span>
                <span className="text-xs sm:text-sm text-muted font-normal"> + yıllık ücret</span>
              </div>
              <div className="mb-4">
                <span className="text-xs sm:text-sm text-accent font-semibold">Yıllık Yenileme: ₺{plan.renewalPrice}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted mb-4 sm:mb-6">{plan.tagline}</p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-foreground-light">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.price === "Proje Bazlı" ? (
                <a
                  href={whatsappUrl(`Merhaba, ${plan.name} paketi hakkında bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base border border-border text-foreground hover:bg-surface-alt`}
                >
                  Teklif Al
                </a>
              ) : (
                <a
                  href={`/odeme?paket=${plan.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/ş/g, "s")
                    .replace(/ö/g, "o")
                    .replace(/ü/g, "u")
                    .replace(/ı/g, "i")
                    .replace(/ç/g, "c")
                    .replace(/ğ/g, "g")}`}
                  className={`block text-center py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    plan.popular
                      ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20"
                      : "border border-border text-foreground hover:bg-surface-alt"
                  }`}
                >
                  Satın Al
                </a>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
