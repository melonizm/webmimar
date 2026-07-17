import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ödeme Başarılı | WebMimar",
  description: "Ödemeniz başarıyla tamamlandı. Teşekkür ederiz!",
};

export default function OdemeBasariliPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-lg mx-auto">
            {/* Başarı animasyonu */}
            <div className="relative w-28 h-28 mx-auto mb-8">
              <div className="absolute inset-0 bg-green-wp/20 rounded-full animate-ping" />
              <div className="relative w-28 h-28 bg-green-wp/10 rounded-full flex items-center justify-center border-2 border-green-wp/30">
                <svg
                  className="w-14 h-14 text-green-wp"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ödeme <span className="text-gradient">Başarılı!</span>
            </h1>

            <p className="text-muted text-lg mb-3">
              Siparişiniz başarıyla oluşturuldu. Teşekkür ederiz! 🎉
            </p>
            <p className="text-muted text-sm mb-8">
              Kısa süre içinde size e-posta ve WhatsApp üzerinden ulaşacağız.
              Proje süreciniz hakkında sizi bilgilendireceğiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-block bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
              >
                Ana Sayfaya Dön
              </a>
              <a
                href="https://wa.me/905309924160?text=Merhaba%2C%20ödeme%20yaptım%2C%20proje%20sürecim%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-green-wp text-green-wp px-8 py-3.5 rounded-full font-semibold hover:bg-green-wp hover:text-white transition-colors"
              >
                WhatsApp ile Ulaşın
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
