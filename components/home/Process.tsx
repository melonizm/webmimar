import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/lib/data/site-data";

const stepIcons = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.334 1.85.558 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.854z" /></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="4" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
];

export function Process() {
  return (
    <Section id="process">
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">Nasıl Çalışır</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Web Sitesi Yaptırmak <span className="text-gradient">Çok Kolay</span>
          </h2>
        </SectionLabel>
        <SectionLabel delay={0.2}>
          <p className="text-muted text-lg max-w-2xl mx-auto">4 basit adımda profesyonel web siteniz hazır.</p>
        </SectionLabel>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {processSteps.map((step, i) => (
          <StaggerItem key={step.number} className="relative group">
            <div className="card p-5 sm:p-6 md:p-8 text-center h-full">
              <div className="text-4xl sm:text-5xl font-bold text-accent/10 mb-4 font-heading">{step.number}</div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent-light flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {stepIcons[i]}
              </div>
              <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">{step.description}</p>
            </div>
            {i < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-border z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
