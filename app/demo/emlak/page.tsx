import { DemoShell } from "@/components/demo/DemoShell";
import { SITE } from "@/lib/constants";

const listings = [
  { title: "3+1 Balkonlu Daire", location: "Çankaya, Ankara", size: "145 m²", rooms: "3+1", floor: "5/8", price: "₺4.500.000", type: "Satılık", badge: "✨ Yeni", gradient: "from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-950" },
  { title: "Deniz Manzaralı 2+1", location: "Karşıyaka, İzmir", size: "95 m²", rooms: "2+1", floor: "7/12", price: "₺18.000/ay", type: "Kiralık", badge: "🔥 Fırsat", gradient: "from-teal-50 to-emerald-100 dark:from-teal-950 dark:to-emerald-950" },
  { title: "Müstakil Villa", location: "Beşiktaş, İstanbul", size: "320 m²", rooms: "5+2", floor: "Müstakil", price: "₺12.000.000", type: "Satılık", badge: "⭐ VIP", gradient: "from-green-50 to-teal-100 dark:from-green-950 dark:to-teal-950" },
  { title: "Merkezi Konum 1+1", location: "Bornova, İzmir", size: "55 m²", rooms: "1+1", floor: "3/5", price: "₺9.500/ay", type: "Kiralık", badge: "", gradient: "from-emerald-100 to-green-200 dark:from-emerald-900/50 dark:to-green-900/50" },
];

const stats = [
  { icon: "🔑", value: "500+", label: "Aktif İlan" },
  { icon: "🤝", value: "1.200+", label: "Başarılı Satış" },
  { icon: "📋", value: "Güvenli", label: "Tapu Süreci" },
  { icon: "💬", value: "7/24", label: "Danışman Desteği" },
];

export default function EmlakDemoPage() {
  return (
    <DemoShell
      emoji="🏠"
      name="Prestij Gayrimenkul"
      tagline="GAYRİMENKUL DANIŞMANLIĞI"
      nav={[
        { href: "#ilanlar", label: "İlanlar" },
        { href: "#neden", label: "Neden Biz" },
        { href: "#iletisim", label: "İletişim" },
      ]}
      ctaLabel="Danışman ile Görüş"
      ctaClassName="bg-emerald-600 text-white hover:bg-emerald-700"
    >
      <section className="relative overflow-hidden py-24 md:py-36 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-transparent to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/20" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            🔑 Güvenilir Gayrimenkul Danışmanlığı
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
            Hayalinizdeki Evi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
              Birlikte Bulalım
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-light mb-10 max-w-xl mx-auto leading-relaxed">
            500+ aktif ilan, uzman danışmanlar ve güvenli tapu süreciyle doğru mülkü bulun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-emerald-600 text-white font-semibold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
              📞 Danışman ile Görüş
            </a>
            <a href="#ilanlar" className="inline-flex items-center justify-center py-4 px-8 rounded-2xl border border-border text-foreground-light hover:bg-surface-alt transition-all text-lg font-medium">
              İlanları Gör ↓
            </a>
          </div>
        </div>
      </section>

      <section id="ilanlar" className="py-20 bg-background-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Öne Çıkan İlanlar</h2>
            <p className="text-muted">Tüm ilanlar güncel ve doğrulanmıştır.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listings.map((l) => (
              <div key={l.title} className="bg-surface rounded-3xl border border-border overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all group cursor-pointer">
                <div className={`h-44 bg-gradient-to-br ${l.gradient} flex items-center justify-center relative`}>
                  <span className="text-5xl">🏠</span>
                  {l.badge && (
                    <span className="absolute top-3 left-3 text-xs bg-white/90 dark:bg-black/70 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full font-bold shadow">{l.badge}</span>
                  )}
                  <span className="absolute top-3 right-3 text-xs font-extrabold text-white bg-emerald-600 dark:bg-emerald-500 px-2.5 py-1 rounded-full">{l.type}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{l.title}</h3>
                  <p className="text-muted text-sm mb-3">📍 {l.location}</p>
                  <div className="flex items-center gap-3 mb-4 text-xs text-foreground-light">
                    <span>📐 {l.size}</span>
                    <span>🛏️ {l.rooms}</span>
                    <span>🏢 Kat: {l.floor}</span>
                  </div>
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">{l.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="neden" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Neden Bizi Seçmelisiniz?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface rounded-2xl border border-border p-5 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-extrabold text-lg text-emerald-600 dark:text-emerald-400">{s.value}</div>
                <div className="text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-20 bg-background-alt">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ücretsiz Değerleme</h2>
            <p className="text-emerald-100 mb-8 text-lg">Mülkünüzün piyasa değerini öğrenin.</p>
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-emerald-50 transition-all shadow-lg">
              📞 {SITE.phone}
            </a>
            <div className="mt-6 text-emerald-200 text-sm">Kızılay · Alsancak · Mecidiyeköy</div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center text-muted text-sm">© 2026 Prestij Gayrimenkul. DASK ve SPK Lisanslı.</footer>
    </DemoShell>
  );
}
