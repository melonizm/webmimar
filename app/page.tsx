import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/home/Benefits";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
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
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
