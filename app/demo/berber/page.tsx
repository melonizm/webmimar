import { DemoShell } from "@/components/demo/DemoShell";
import { SITE } from "@/lib/constants";

const services = [
  { icon: "✂️", name: "Saç Kesimi", duration: "30 dk", price: "₺150" },
  { icon: "🪒", name: "Sakal Tasarımı", duration: "20 dk", price: "₺100" },
  { icon: "💈", name: "Saç + Sakal", duration: "45 dk", price: "₺220" },
  { icon: "✨", name: "Cilt Bakımı", duration: "40 dk", price: "₺200" },
  { icon: "🎨", name: "Saç Boyama", duration: "60+ dk", price: "₺350+" },
  { icon: "💧", name: "Saç Yıkama", duration: "15 dk", price: "₺80" },
];

const gallery = ["Klasik Pompadour", "Fade Kesim", "Deri Ense", "Sakal Şekillendirme", "Çocuk Kesimi", "Modern Saç Stili"];

const team = [
  { name: "Mehmet Usta", role: "Baş Kuaför", exp: "15 yıl deneyim", gradient: "from-orange-400 to-amber-500" },
  { name: "Ahmet Bey", role: "Sakal Uzmanı", exp: "10 yıl deneyim", gradient: "from-amber-400 to-yellow-500" },
  { name: "Kemal Bey", role: "Cilt Bakım Uzmanı", exp: "8 yıl deneyim", gradient: "from-orange-500 to-red-400" },
];

export default function BerberDemoPage() {
  return (
    <DemoShell
      emoji="💈"
      name="Prestij Erkek Kuaförü"
      tagline="EST. 2010"
      nav={[
        { href: "#hizmetler", label: "Hizmetler" },
        { href: "#galeri", label: "Galeri" },
        { href: "#ekibimiz", label: "Ekibimiz" },
        { href: "#iletisim", label: "İletişim" },
      ]}
      ctaLabel="Randevu Al"
      ctaClassName="bg-amber-600 text-white hover:bg-amber-700"
    >
      <section className="relative overflow-hidden py-24 md:py-36 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-transparent to-orange-50/60 dark:from-amber-950/30 dark:to-orange-950/20" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            ⭐ Şehrin En Prestijli Erkek Kuaförü
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
            Tarzınız{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
              Ustanın Elinde
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-light mb-10 max-w-xl mx-auto leading-relaxed">
            15 yılı aşkın deneyim, keskin alçak kesimler ve profesyonel sakal bakımıyla her gün daha iyi hissedeceksiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-amber-600 text-white font-semibold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">
              📞 Hemen Ara
            </a>
            <a href="#hizmetler" className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl border border-border text-foreground-light hover:bg-surface-alt transition-all text-lg font-medium">
              Hizmet Listesi ↓
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
            {[["2.500+", "Mutlu Müşteri"], ["15+", "Yıl Deneyim"], ["4.9★", "Google Puanı"]].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-extrabold text-amber-600 dark:text-amber-400">{v}</div>
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
            <p className="text-muted">Tüm fiyatlar saç yıkama dahildir.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.name} className="bg-surface rounded-2xl border border-border p-5 flex items-center gap-4 hover:border-amber-400 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted mt-0.5">{s.duration}</div>
                </div>
                <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400 shrink-0">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeri" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Çalışmalarımızdan</h2>
            <p className="text-muted">Her kesim bir sanat eseridir.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((label, i) => (
              <div key={label} className={`rounded-2xl bg-gradient-to-br aspect-square flex items-end p-4 overflow-hidden group cursor-pointer hover:shadow-xl transition-all relative ${
                ["from-amber-100 to-orange-200 dark:from-amber-900/50 dark:to-orange-950",
                 "from-orange-100 to-amber-200 dark:from-orange-950 dark:to-amber-950",
                 "from-yellow-100 to-orange-200 dark:from-yellow-950 dark:to-orange-950",
                 "from-red-100 to-orange-200 dark:from-red-950 dark:to-orange-950",
                 "from-amber-200 to-yellow-200 dark:from-amber-950 dark:to-yellow-950",
                 "from-orange-200 to-red-200 dark:from-orange-950 dark:to-red-950"][i]
              }`}>
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-300 bg-white/60 dark:bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ekibimiz" className="py-20 bg-background-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Uzman Ekibimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-surface rounded-3xl border border-border p-6 text-center hover:border-amber-400 hover:shadow-xl transition-all">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${m.gradient} mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg`}>👤</div>
                <div className="font-bold text-lg">{m.name}</div>
                <div className="text-sm text-amber-600 dark:text-amber-400 mt-1">{m.role}</div>
                <div className="text-xs text-muted mt-1">{m.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Randevunuzu Alın</h2>
            <p className="text-amber-100 mb-8 text-lg">Hemen arayın, müsait saat bilgisi alın.</p>
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-amber-50 transition-all shadow-lg">
              📞 {SITE.phone}
            </a>
            <div className="mt-6 text-amber-200 text-sm">Pazartesi – Cumartesi · 09:00 – 21:00</div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center text-muted text-sm">© 2026 Prestij Erkek Kuaförü. Tüm hakları saklıdır.</footer>
    </DemoShell>
  );
}
