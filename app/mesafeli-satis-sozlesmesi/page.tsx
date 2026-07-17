import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi | WebMimar",
  description: "WebMimar Mesafeli Satış Sözleşmesi",
};

export default function MesafeliSatisPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold mb-6 text-foreground">Mesafeli Satış Sözleşmesi</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted space-y-4">
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">Madde 1 - Taraflar</h2>
          <p>
            <strong>Satıcı:</strong> Melih Kurtgöz (WebMimar)<br />
            <strong>Adres:</strong> KOCAELİ/GEBZE YAVUZ SELİM MAHALLESİ ANKARA CADDESİ NO 138 DAİRE 2<br />
            <strong>Alıcı:</strong> Web sitesinden hizmet satın alan kişi veya kurum.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">Madde 2 - Konu</h2>
          <p>
            İşbu sözleşmenin konusu, Alıcı'nın Satıcı'ya ait internet sitesinden elektronik ortamda siparişini
            yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen hizmetin satışı ve teslimi ile ilgili olarak
            6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri
            gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">Madde 3 - Hizmetin Teslimi</h2>
          <p>
            Satın alınan web tasarım ve yazılım hizmetleri, niteliği gereği fiziki bir kargo ile değil,
            dijital ortamda (sunucu kurulumu, e-posta ile dosya teslimi vb.) teslim edilmektedir. Hizmetin
            teslim süresi, seçilen pakete göre sitede belirtilen süre zarfında gerçekleştirilir.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">Madde 4 - Cayma Hakkı</h2>
          <p>
            Alıcı, hizmetin ifasına başlanmamış olması şartıyla, sözleşmenin kurulduğu tarihten itibaren
            14 (on dört) gün içinde hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden
            cayma hakkına sahiptir. Ancak, alıcının onayı ile ifasına başlanan web tasarım veya yazılım
            geliştirme hizmetlerinde cayma hakkı kullanılamaz (Mesafeli Sözleşmeler Yönetmeliği Madde 15/1-h).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
