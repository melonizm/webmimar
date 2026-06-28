import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { BenefitIcons } from "@/components/ui/icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { benefits } from "@/lib/data/site-data";

const icons = BenefitIcons();

export function Benefits() {
  return (
    <Section id="benefits">
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">Avantajlar</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Web Sitenizle <span className="text-gradient">Neler Kazanırsınız?</span>
          </h2>
        </SectionLabel>
        <SectionLabel delay={0.2}>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Profesyonel bir web sitesi, işletmenizin dijital dünyadaki en güçlü aracıdır.
          </p>
        </SectionLabel>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((item, i) => (
          <StaggerItem
            key={item.title}
            className="card p-5 sm:p-6 md:p-8 group hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(59,125,221,0.12)] transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-4 sm:mb-5 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
              {icons[i]}
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">{item.description}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
