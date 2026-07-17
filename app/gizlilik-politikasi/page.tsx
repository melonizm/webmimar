import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | WebMimar",
  description: "WebMimar Gizlilik Politikası",
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold mb-6 text-foreground">Gizlilik Politikası</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted space-y-4">
          <p>Son güncellenme tarihi: {new Date().toLocaleDateString("tr-TR")}</p>
          <p>
            WebMimar olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.
            Bu bilinçle, ürün ve hizmetlerimizden faydalanan kişiler dahil, WebMimar ile ilişkili tüm
            şahıslara ait her türlü kişisel verinin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'na
            uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">1. Toplanan Veriler</h2>
          <p>
            Hizmetlerimizden yararlanmanız sırasında ad, soyad, e-posta adresi, telefon numarası ve
            adres bilgileri gibi temel iletişim ve fatura bilgileriniz toplanmaktadır.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">2. Verilerin Kullanımı</h2>
          <p>
            Toplanan verileriniz, size sunduğumuz web tasarım ve yazılım hizmetlerinin ifası, müşteri
            iletişiminin sağlanması, faturalandırma işlemleri ve yasal yükümlülüklerimizin yerine
            getirilmesi amacıyla kullanılmaktadır.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">3. Verilerin Paylaşımı</h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar haricinde hiçbir 3. şahıs veya kurumla paylaşılmamaktadır.
            Ödeme işlemleri sırasında girilen kredi kartı bilgileri altyapı sağlayıcımız (PayTR) tarafından
            şifrelenerek işlenir ve sunucularımızda kesinlikle saklanmaz.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
