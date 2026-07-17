import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/components/home/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolyo | WebMimar",
  description: "WebMimar olarak tamamladığımız başarılı web tasarım ve geliştirme projeleri.",
};

export default function PortfolyoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
