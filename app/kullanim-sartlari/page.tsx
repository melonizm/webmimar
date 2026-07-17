import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları | WebMimar",
  description: "WebMimar Kullanım Şartları",
};

export default function KullanimSartlariPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold mb-6 text-foreground">Kullanım Şartları</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted space-y-4">
          <p>Son güncellenme tarihi: {new Date().toLocaleDateString("tr-TR")}</p>
          <p>
            Lütfen sitemizi kullanmadan önce bu 'kullanım şartları' sözleşmesini dikkatlice okuyunuz.
            Web sitemizi kullanan ve hizmetlerimizden yararlanan müşterilerimiz aşağıdaki şartları
            kabul etmiş varsayılmaktadır.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">1. Hizmet Kapsamı</h2>
          <p>
            WebMimar, müşterilerine web tasarım, yazılım geliştirme ve dijital danışmanlık hizmetleri
            sunar. Sunulan hizmetlerin kapsamı, taraflar arasında varılan mutabakat ile belirlenir.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">2. Telif Hakları</h2>
          <p>
            WebMimar tarafından üretilen tüm yazılım, tasarım ve kodlamaların telif hakkı aksi
            belirtilmedikçe WebMimar'a aittir. Müşteri, projeyi sadece kullanım hakkı satın alır,
            kodları izinsiz çoğaltamaz veya üçüncü şahıslara satamaz.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">3. Sorumluluklar</h2>
          <p>
            WebMimar, sunduğu web sitelerinin veya yazılımların kesintisiz çalışacağını garanti
            etmekle birlikte, sunucu taraflı veya üçüncü parti yazılımlardan kaynaklanabilecek
            kesintilerden sorumlu tutulamaz.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
