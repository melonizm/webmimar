import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teslimat Politikası | WebMimar",
  description: "WebMimar Teslimat Politikası",
};

export default function TeslimatPolitikasiPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold mb-6 text-foreground">Teslimat Politikası</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted space-y-4">
          <p>
            WebMimar olarak sunduğumuz hizmetler tamamen dijital ürün ve servisleri (web tasarımı, 
            yazılım geliştirme, dijital danışmanlık vb.) kapsamaktadır. Bu sebeple fiziki bir ürün 
            gönderimi (kargo ile teslimat) yapılmamaktadır.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">1. Dijital Teslimat Yöntemleri</h2>
          <p>
            Satın alınan paketlerin veya özel yazılım hizmetlerinin teslimatı şu yöntemlerle sağlanır:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Hazırlanan web sitesinin müşterinin sağladığı veya bizim temin ettiğimiz sunucuya (hosting) kurularak yayına alınması.</li>
            <li>Kaynak kodların veya gerekli dijital materyallerin müşteri e-posta adresine güvenli bir şekilde iletilmesi.</li>
            <li>Gerekli yönetim paneli şifreleri ve kullanım kılavuzlarının e-posta veya iletişim kanalları (WhatsApp) üzerinden gönderilmesi.</li>
          </ul>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">2. Teslimat Süresi</h2>
          <p>
            Hizmetin teslimat süresi, seçilen paketin içeriğine ve projenin kapsamına bağlı olarak 
            sipariş öncesinde belirlenir ve müşteriyle yazılı olarak (e-posta veya sözleşme aracılığıyla) paylaşılır. 
            Müşteriden kaynaklanan içerik veya onay gecikmeleri teslimat süresini uzatabilir.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
