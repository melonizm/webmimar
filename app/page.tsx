import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/home/Benefits";
import { CTA } from "@/components/home/CTA";
import { Demos } from "@/components/home/Demos";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Portfolio } from "@/components/home/Portfolio";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { Risks } from "@/components/home/Risks";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Risks />
        <Benefits />
        <Portfolio />
        <Demos />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
