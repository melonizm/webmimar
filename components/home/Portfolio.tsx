import { BrowserMockupCard } from "@/components/ui/BrowserMockupCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { externalProjects } from "@/lib/data/site-data";

export function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">Portfolyo</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            <span className="text-gradient">Yaptığımız Siteler</span>
          </h2>
        </SectionLabel>
        <SectionLabel delay={0.2}>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Farklı sektörlerden müşterilerimiz için tasarladığımız profesyonel web siteleri.
          </p>
        </SectionLabel>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {externalProjects.map((project) => (
          <StaggerItem key={project.externalUrl}>
            <BrowserMockupCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
