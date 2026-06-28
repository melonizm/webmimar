import { DemoShell } from "@/components/demo/DemoShell";
import { SITE } from "@/lib/constants";

const services = [
  { icon: "🔧", name: "Periyodik Bakım", desc: "Yağ, filtre, bouji değişimi.", price: "₺850", time: "1-2 saat" },
  { icon: "🖥️", name: "Motor Arıza Tespiti", desc: "Bilgisayarlı arıza okuma ve motor revizyonu.", price: "₺250", time: "30 dk" },
  { icon: "🛑", name: "Fren Bakımı", desc: "Fren balatası, diski ve hidrolik yağı kontrolü.", price: "₺600'den", time: "1 saat" },
  { icon: "⚖️", name: "Rot & Balans", desc: "Direksiyon hizası ve lastik balansı.", price: "₺450", time: "45 dk" },
  { icon: "❄️", name: "Klima Bakımı", desc: "Gaz dolumu ve filtre temizliği.", price: "₺350", time: "45 dk" },
  { icon: "🔋", name: "Akü & Elektrik", desc: "Akü değişimi ve elektrik arıza tespiti.", price: "₺200'den", time: "30 dk" },
];

const whyUs = [
  { icon: "⚡", title: "Aynı Gün Teslim", desc: "Çoğu bakım işlemi aynı gün tamamlanır." },
  { icon: "🛡️", title: "Garantili İşçilik", desc: "Tüm işlemler 6 ay işçilik garantisi kapsamında." },
  { icon: "✅", title: "Orijinal Yedek Parça", desc: "Yalnızca üretici onaylı parça kullanılır." },
  { icon: "🚗", title: "7/24 Yol Yardım", desc: "Arıza durumunda 7/24 çekici ve yol yardım." },
];

export default function OtoServisDemoPage() {
  return (
    <DemoShell
      emoji="🔧"
      name="Güven Oto Servis"
      tagline="PROFESYONEL OTOMOTİV"
      nav={[
        { href: "#hizmetler", label: "Hizmetler" },
        { href: "#neden-biz", label: "Neden Biz" },
        { href: "#iletisim", label: "İletişim" },
      ]}
      ctaLabel="Randevu Al"
      ctaClassName="bg-slate-700 text-white hover:bg-slate-800"
    >
      <section className="relative overflow-hidden py-24 md:py-36 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-transparent to-gray-50/60 dark:from-slate-900/30 dark:to-gray-900/20" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            🛡️ Sigortalı Servis · Aynı Gün Teslim
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
            Aracınız İçin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-gray-500 dark:from-slate-300 dark:to-gray-400">
              Güvenilir Adres
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-light mb-10 max-w-xl mx-auto leading-relaxed">
            Bilgisayarlı arıza tespit ve uzman teknisyenlerle aracınız en iyi ellerde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-slate-700 text-white font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl">
              📞 Hemen Ara
            </a>
            <a href="#hizmetler" className="inline-flex items-center justify-center py-4 px-8 rounded-2xl border border-border text-foreground-light hover:bg-surface-alt transition-all text-lg font-medium">
              Hizmet ve Fiyatlar ↓
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
            {[["5.000+", "Servis Kaydı"], ["12+", "Yıl Deneyim"], ["30 dk", "Arıza Tespiti"]].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-extrabold text-slate-600 dark:text-slate-300">{v}</div>
                <div className="text-xs text-muted mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="py-20 bg-background-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Hizmetlerimiz & Fiyatlar</h2>
            <p className="text-muted">Tüm işlemler faturalı, parça garantili.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.name} className="bg-surface rounded-2xl border border-border p-5 hover:border-slate-400 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl shrink-0">{s.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold">{s.name}</div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">{s.desc}</div>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-slate-600 dark:text-slate-300 font-bold">{s.price}</span>
                      <span className="text-xs text-muted border border-border rounded-full px-2 py-0.5">{s.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="neden-biz" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Neden Bizi Tercih Etmelisiniz?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="flex items-start gap-4 bg-surface rounded-2xl border border-border p-5 hover:shadow-xl hover:border-slate-400 transition-all">
                <div className="text-3xl shrink-0">{w.icon}</div>
                <div>
                  <div className="font-bold mb-1">{w.title}</div>
                  <div className="text-sm text-foreground-light">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-20 bg-background-alt">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-slate-700 to-gray-900 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Servis Randevusu</h2>
            <p className="text-slate-300 mb-8 text-lg">Aracınızın km&apos;sini ve yaptırmak istediğiniz işlemi söyleyin.</p>
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 bg-white text-slate-800 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-slate-50 transition-all shadow-lg">
              📞 {SITE.phone}
            </a>
            <div className="mt-6 text-slate-400 text-sm">Pazartesi – Cumartesi · 08:00 – 19:00</div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center text-muted text-sm">© 2026 Güven Oto Servis. Tüm hakları saklıdır.</footer>
    </DemoShell>
  );
}
