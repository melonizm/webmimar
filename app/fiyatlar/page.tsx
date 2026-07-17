import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/home/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyatlar | WebMimar",
  description: "İhtiyacınıza uygun profesyonel web tasarım paketleri ve fiyat seçeneklerimiz.",
};

export default function FiyatlarPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
