"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { pricingPlans } from "@/lib/data/site-data";

function CheckoutForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("paket");

  // Seçilen paketi bul
  const selectedPlan = pricingPlans.find(
    (p) =>
      p.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ü/g, "u")
        .replace(/ı/g, "i")
        .replace(/ç/g, "c")
        .replace(/ğ/g, "g") === planParam
  );

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_address: "",
  });

  const [iframeToken, setIframeToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedPlan) return;

      setLoading(true);
      setError(null);

      try {
        // Fiyatı kuruş'a çevir (nokta ve virgülleri temizle)
        const priceNumeric = parseInt(
          selectedPlan.price.replace(/[^0-9]/g, ""),
          10
        );
        const paymentAmountKurus = priceNumeric * 100;

        const response = await fetch("/api/paytr/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            plan_name: selectedPlan.name,
            payment_amount: paymentAmountKurus,
          }),
        });

        const data = await response.json();

        if (data.status === "success" && data.token) {
          setIframeToken(data.token);
        } else {
          setError(data.error || "Ödeme başlatılamadı. Lütfen tekrar deneyin.");
        }
      } catch {
        setError("Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.");
      } finally {
        setLoading(false);
      }
    },
    [formData, selectedPlan]
  );

  // Geçersiz plan kontrolü
  if (!selectedPlan || selectedPlan.price === "Proje Bazlı") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-surface-alt flex items-center justify-center">
            <svg
              className="w-10 h-10 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Paket Bulunamadı
          </h2>
          <p className="text-muted mb-6">
            Lütfen fiyatlandırma sayfasından bir paket seçerek devam edin.
          </p>
          <a
            href="/#pricing"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-hover transition-colors"
          >
            Paketleri İncele
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Güvenli</span> Ödeme
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Ödeme bilgileriniz 256-bit SSL şifreleme ile korunmaktadır.
          </p>
        </div>

        {!iframeToken ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sol: Sipariş Özeti */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-surface border border-border-light rounded-2xl p-6 lg:p-8 sticky top-28">
                <h3 className="font-heading text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Sipariş Özeti
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">
                        {selectedPlan.name}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {selectedPlan.subtitle}
                      </p>
                    </div>
                    <span className="text-foreground font-bold whitespace-nowrap">
                      ₺{selectedPlan.price}
                    </span>
                  </div>

                  <div className="border-t border-border-light pt-4 space-y-2">
                    {selectedPlan.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-xs text-foreground-light"
                      >
                        <span className="text-accent mt-0.5 shrink-0">✓</span>
                        {f}
                      </div>
                    ))}
                    {selectedPlan.features.length > 4 && (
                      <p className="text-xs text-muted">
                        +{selectedPlan.features.length - 4} özellik daha
                      </p>
                    )}
                  </div>

                  <div className="border-t border-border-light pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted text-sm">Toplam</span>
                      <span className="text-2xl font-extrabold text-foreground">
                        ₺{selectedPlan.price}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1">
                      Yıllık yenileme: ₺{selectedPlan.renewalPrice}
                    </p>
                  </div>
                </div>

                {/* Güvenlik rozeti */}
                <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                  <svg
                    className="w-4 h-4 text-green-wp shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <span>256-bit SSL ile güvenli ödeme</span>
                </div>
              </div>
            </div>

            {/* Sağ: Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <form
                onSubmit={handleSubmit}
                className="bg-surface border border-border-light rounded-2xl p-6 lg:p-8"
              >
                <h3 className="font-heading text-lg font-bold text-foreground mb-6">
                  Bilgileriniz
                </h3>

                <div className="space-y-5">
                  {/* Ad Soyad */}
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-foreground-light mb-2"
                    >
                      Ad Soyad <span className="text-danger">*</span>
                    </label>
                    <input
                      id="user_name"
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız Soyadınız"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>

                  {/* E-Posta */}
                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-sm font-medium text-foreground-light mb-2"
                    >
                      E-Posta <span className="text-danger">*</span>
                    </label>
                    <input
                      id="user_email"
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      placeholder="ornek@email.com"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label
                      htmlFor="user_phone"
                      className="block text-sm font-medium text-foreground-light mb-2"
                    >
                      Telefon <span className="text-danger">*</span>
                    </label>
                    <input
                      id="user_phone"
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      required
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>

                  {/* Adres */}
                  <div>
                    <label
                      htmlFor="user_address"
                      className="block text-sm font-medium text-foreground-light mb-2"
                    >
                      Adres{" "}
                      <span className="text-muted text-xs">(Opsiyonel)</span>
                    </label>
                    <textarea
                      id="user_address"
                      name="user_address"
                      value={formData.user_address}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Adresiniz (opsiyonel)"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Hata mesajı */}
                {error && (
                  <div className="mt-4 p-4 rounded-xl bg-danger-light border border-danger/20">
                    <p className="text-danger text-sm flex items-center gap-2">
                      <svg
                        className="w-4 h-4 shrink-0"
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
                      {error}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full bg-accent text-white py-4 rounded-xl font-semibold text-lg hover:bg-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-accent/20"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>İşleniyor...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                      <span>Ödemeye Geç</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* PayTR iFrame */
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface border border-border-light rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border-light flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <span className="font-semibold text-foreground text-sm">
                  Kart Bilgilerini Girin
                </span>
                <div className="ml-auto flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="w-3.5 h-3.5 text-green-wp"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                  SSL Korumalı
                </div>
              </div>
              <iframe
                src={`https://www.paytr.com/odeme/guvenli/${iframeToken}`}
                id="paytriframe"
                frameBorder="0"
                scrolling="yes"
                style={{ width: "100%", height: "600px" }}
                title="PayTR Güvenli Ödeme"
              />
            </div>
            <p className="text-center text-xs text-muted mt-4">
              Ödeme altyapısı PayTR tarafından sağlanmaktadır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OdemePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full" />
            </div>
          }
        >
          <CheckoutForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
