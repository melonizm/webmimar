import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ödeme Başarısız | WebMimar",
  description: "Ödeme işlemi tamamlanamadı. Lütfen tekrar deneyin.",
};

export default function OdemeHataPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-lg mx-auto">
            {/* Hata ikonu */}
            <div className="w-28 h-28 mx-auto mb-8 bg-danger-light rounded-full flex items-center justify-center border-2 border-danger/20">
              <svg
                className="w-14 h-14 text-danger"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ödeme <span className="text-danger">Başarısız</span>
            </h1>

            <p className="text-muted text-lg mb-3">
              Ödeme işleminiz tamamlanamadı.
            </p>
            <p className="text-muted text-sm mb-8">
              Kart bilgilerinizi kontrol edip tekrar deneyebilir veya farklı bir
              kart ile ödeme yapabilirsiniz. Sorun devam ederse bize ulaşın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#pricing"
                className="inline-block bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
              >
                Tekrar Dene
              </a>
              <a
                href="https://wa.me/905309924160?text=Merhaba%2C%20ödeme%20yaparken%20bir%20hata%20aldım%2C%20yardımcı%20olabilir%20misiniz%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-surface-alt transition-colors"
              >
                Destek Al
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
