import { DemoShell } from "@/components/demo/DemoShell";
import { SITE } from "@/lib/constants";

const menuCategories = [
  {
    name: "🍕 Pizzalar",
    items: [
      { name: "Margherita", price: "₺180" },
      { name: "Pepperoni", price: "₺220" },
      { name: "Karışık", price: "₺250" },
    ],
  },
  {
    name: "🥩 Et Yemekleri",
    items: [
      { name: "Izgara Köfte", price: "₺320" },
      { name: "Bonfile", price: "₺580" },
      { name: "Tavuk Şiş", price: "₺280" },
    ],
  },
  {
    name: "🥗 Salatalar",
    items: [
      { name: "Sezar Salata", price: "₺190" },
      { name: "Akdeniz", price: "₺170" },
    ],
  },
  {
    name: "🍰 Tatlılar",
    items: [
      { name: "Sufle", price: "₺150" },
      { name: "Cheesecake", price: "₺140" },
    ],
  },
];

export default function RestoranDemoPage() {
  return (
    <DemoShell
      emoji="🍽️"
      name="Lezzet Durağı"
      tagline="RESTAURANT & CAFE"
      nav={[
        { href: "#menu", label: "Menü" },
        { href: "#galeri", label: "Galeri" },
        { href: "#hakkimizda", label: "Hakkımızda" },
        { href: "#rezervasyon", label: "Rezervasyon" },
      ]}
      ctaLabel="Rezervasyon"
      ctaClassName="bg-red-600 text-white hover:bg-red-700"
    >
      <section className="relative overflow-hidden py-24 md:py-36 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-transparent to-rose-50/60 dark:from-red-950/30 dark:to-rose-950/20" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            🔥 Her Gün Taze Malzemelerle Hazırlanıyor
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
            Eşsiz Lezzetler,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400">
              Unutulmaz Anlar
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-light mb-10 max-w-xl mx-auto leading-relaxed">
            Usta şeflerimizin dünya mutfaklarından seçkilerle hazırladığı menümüzü keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-red-600 text-white font-semibold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
              📞 Masa Ayırt
            </a>
            <a href="#menu" className="inline-flex items-center justify-center py-4 px-8 rounded-2xl border border-border text-foreground-light hover:bg-surface-alt transition-all text-lg font-medium">
              Menüyü Gör ↓
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">📱 Dijital Menümüz</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Menümüzü İnceleyin</h2>
          </div>
          <div className="space-y-6">
            {menuCategories.map((cat) => (
              <div key={cat.name} className="bg-surface rounded-3xl border border-border overflow-hidden">
                <div className="px-6 py-4 bg-red-50 dark:bg-red-950/30 font-bold text-lg">{cat.name}</div>
                <div className="divide-y divide-border-light">
                  {cat.items.map((item) => (
                    <div key={item.name} className="px-6 py-4 flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-bold text-red-600 dark:text-red-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeri" className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14">Mekan Fotoğrafları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["İç Mekan", "Dış Mekan", "Mutfak", "Özel Etkinlik"].map((label, i) => (
              <div key={label} className={`rounded-2xl aspect-square flex items-center justify-center hover:shadow-xl transition-all ${
                ["from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-950",
                 "from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-950",
                 "from-rose-50 to-red-100 dark:from-rose-950 dark:to-red-950",
                 "from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950"][i]
              } bg-gradient-to-br`}>
                <span className="text-xs font-semibold text-red-700 dark:text-red-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="py-20 bg-background-alt">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Hikayemiz</h2>
          <p className="text-foreground-light text-lg leading-relaxed mb-8">
            2015 yılından bu yana misafirlerimize en taze malzemelerle, usta şeflerimizin elinden dünya lezzetleri sunuyoruz.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {[["500+", "Günlük Müşteri"], ["15+", "Usta Şef"], ["4.8★", "Yemeksepeti"]].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-extrabold text-red-600 dark:text-red-400">{v}</div>
                <div className="text-xs text-muted mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rezervasyon" className="py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Masa Ayırtın</h2>
            <p className="text-red-100 mb-8 text-lg">Özel gün veya iş yemeği için rezervasyon yaptırın.</p>
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-red-50 transition-all shadow-lg">
              📞 {SITE.phone}
            </a>
            <div className="mt-6 text-red-200 text-sm">Haftanın 7 Günü Açık · 11:00 – 23:00</div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center text-muted text-sm">© 2026 Lezzet Durağı. Tüm hakları saklıdır.</footer>
    </DemoShell>
  );
}
