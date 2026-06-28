import { BrowserMockupCard } from "@/components/ui/BrowserMockupCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { whatsappUrl } from "@/lib/constants";
import { demoProjects } from "@/lib/data/site-data";

export function Demos() {
  return (
    <Section id="demos" alt>
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">Sektörel Demolar</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Sektörünüze Özel <span className="text-gradient">Demo Siteler</span>
          </h2>
        </SectionLabel>
        <SectionLabel delay={0.2}>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Bu tarz bir site sizin işletmeniz için hazırlanabilir. Şablonlarımızı inceleyerek karar verin.
          </p>
        </SectionLabel>
      </div>

      <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {demoProjects.map((project) => (
          <StaggerItem key={project.link} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <BrowserMockupCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="text-center mt-12">
        <a
          href={whatsappUrl("Merhaba, demo şablonlarınızdan birini beğendim. Benzer bir site yaptırmak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
        >
          Benzer bir site yaptırmak istiyorum →
        </a>
      </div>
    </Section>
  );
}
