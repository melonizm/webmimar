import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/home/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | WebMimar",
  description: "Web tasarımı, hizmetlerimiz ve çalışma şeklimiz hakkında en çok merak edilen sorular ve cevapları.",
};

export default function SSSPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
