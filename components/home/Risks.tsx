import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { RiskIcons } from "@/components/ui/icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { risks } from "@/lib/data/site-data";

const icons = RiskIcons();

export function Risks() {
  return (
    <Section id="risks" alt>
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-flex items-center gap-2 text-danger text-sm font-semibold tracking-wider uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            Dikkat
          </span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Web Sitesi Olmayan İşletmeler{" "}
            <span className="text-danger">Müşteri Kaybediyor</span>
          </h2>
        </SectionLabel>
        <SectionLabel delay={0.2}>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Dijital çağda online varlığı olmayan işletmeler her gün fırsat kaçırıyor.
          </p>
        </SectionLabel>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {risks.map((item, i) => (
          <StaggerItem
            key={item.title}
            className="bg-surface p-5 sm:p-6 md:p-8 rounded-2xl border border-danger/15 group hover:border-danger/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)] transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-danger-light flex items-center justify-center text-danger mb-4 sm:mb-5 group-hover:scale-110 group-hover:bg-danger group-hover:text-white transition-all duration-300">
              {icons[i]}
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground group-hover:text-danger transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">{item.description}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
