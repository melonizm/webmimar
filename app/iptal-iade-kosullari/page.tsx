import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İptal ve İade Koşulları | WebMimar",
  description: "WebMimar İptal ve İade Koşulları",
};

export default function IptalIadePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold mb-6 text-foreground">İptal ve İade Koşulları</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted space-y-4">
          <p>
            WebMimar olarak müşteri memnuniyetini en ön planda tutmaktayız. Dijital hizmet (web tasarım,
            yazılım vb.) alımlarında geçerli olan iptal ve iade koşullarımız aşağıdaki gibidir:
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">1. Hizmet İptali</h2>
          <p>
            Satın aldığınız web tasarım veya yazılım hizmetleri için sipariş onayından sonraki
            <strong> 24 saat içinde </strong> projenin henüz teknik geliştirme aşamasına (kodlama/tasarım)
            başlanmamışsa hiçbir kesinti olmaksızın iptal ve tam iade talep edebilirsiniz.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">2. İade Edilemeyen Durumlar</h2>
          <p>
            İlgili kanunlar gereği dijital ortamda anında ifa edilen hizmetler (alan adı tescili,
            sunucu (hosting) kiralama, SSL sertifikası alımları, özel yazılım kodlamasına başlanmış
            projeler) <strong>cayma hakkı kapsamı dışındadır</strong> ve bu kalemlerin iadesi yapılamaz.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">3. İade Süreci</h2>
          <p>
            Geçerli iptal taleplerinde, iade tutarı onaylandıktan sonra 7-14 iş günü içerisinde
            ödemeyi yapmış olduğunuz kredi kartınıza/banka hesabınıza iade edilir. İadenin
            ekstrenize yansıması bankanızın işlem sürelerine bağlı olarak değişiklik gösterebilir.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
