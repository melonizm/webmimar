import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Demos } from "@/components/home/Demos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demolar | WebMimar",
  description: "WebMimar'ın sunduğu farklı sektörler için hazırlanmış demo web sitelerini inceleyin.",
};

export default function DemolarPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Demos />
      </main>
      <Footer />
    </>
  );
}
