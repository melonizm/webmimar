import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Process } from "@/components/home/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışma Sürecimiz | WebMimar",
  description: "Web sitenizi nasıl hazırlıyoruz? Tasarımdan yayına kadar olan profesyonel çalışma sürecimiz.",
};

export default function SurecPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Process />
      </main>
      <Footer />
    </>
  );
}
