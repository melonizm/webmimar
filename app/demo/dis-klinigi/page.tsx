import { DemoShell } from "@/components/demo/DemoShell";
import { SITE } from "@/lib/constants";

const treatments = [
  { icon: "🦷", name: "İmplant Tedavisi", desc: "Eksik dişleriniz için en kalıcı ve estetik çözüm.", price: "₺8.000'den", popular: true },
  { icon: "😁", name: "Ortodonti", desc: "Şeffaf plak veya metal tel ile diş düzeltme.", price: "₺12.000'den", popular: false },
  { icon: "✨", name: "Zirkonyum Kaplama", desc: "Doğal görünümlü, sağlam porselen kaplama.", price: "₺3.500/diş", popular: true },
  { icon: "🌟", name: "Diş Beyazlatma", desc: "Profesyonel ofis tipi beyazlatma sistemi.", price: "₺2.500'den", popular: false },
  { icon: "🔬", name: "Kanal Tedavisi", desc: "Ağrısız ve hızlı, aynı gün tamamlama.", price: "₺3.000'den", popular: false },
  { icon: "😊", name: "Gülüş Tasarımı", desc: "Estetik ve fonksiyonel gülüş yenileme.", price: "₺15.000'den", popular: true },
];

const doctors = [
  { name: "Dr. Ayşe Kaya", role: "Ortodonti Uzmanı", school: "İstanbul Üniversitesi", exp: "12 yıl", gradient: "from-sky-400 to-blue-500" },
  { name: "Dr. Murat Çelik", role: "İmplant Uzmanı", school: "Hacettepe Üniversitesi", exp: "10 yıl", gradient: "from-blue-400 to-indigo-500" },
  { name: "Dr. Elif Şahin", role: "Estetik Diş Hekimi", school: "Ege Üniversitesi", exp: "8 yıl", gradient: "from-indigo-400 to-sky-500" },
];

const tech = ["Dijital Röntgen", "3D Tarama", "Lazer Tedavi", "CAD/CAM"];

export default function DisKlinigiDemoPage() {
  return (
    <DemoShell
      emoji="🦷"
      name="İnci Diş Kliniği"
      tagline="UZMAN AĞIZ & DİŞ SAĞLIĞI"
      nav={[
        { href: "#tedaviler", label: "Tedaviler" },
        { href: "#hekimler", label: "Hekimler" },
        { href: "#teknoloji", label: "Teknoloji" },
        { href: "#iletisim", label: "İletişim" },
      ]}
      ctaLabel="Randevu Al"
      ctaClassName="bg-sky-600 text-white hover:bg-sky-700"
    >
      <section className="relative overflow-hidden py-24 md:py-36 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-transparent to-blue-50/60 dark:from-sky-950/30 dark:to-blue-950/20" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            🏥 Dijital X-Ray & 3D Tarama Teknolojisi
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
            Sağlıklı Gülüşler,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-400">
              Özgüvenli Hayatlar
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-light mb-10 max-w-xl mx-auto leading-relaxed">
            Günümüz teknolojisi ve uzman kadromuzla ağız diş sağlığınız için en iyisini sunuyoruz.
          </p>
          <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-sky-600 text-white font-semibold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20">
            📞 Ücretsiz Muayene Randevusu
          </a>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
            {[["3.000+", "Mutlu Hasta"], ["15+", "Yıl Tecrübe"], ["3", "Uzman Hekim"]].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-extrabold text-sky-600 dark:text-sky-400">{v}</div>
                <div className="text-xs text-muted mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tedaviler" className="py-20 bg-background-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Tedavilerimiz</h2>
            <p className="text-muted">İlk muayene ve konsültasyon ücretsizdir.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.map((t) => (
              <div key={t.name} className={`bg-surface rounded-2xl border p-6 hover:shadow-xl transition-all relative ${t.popular ? "border-sky-400 shadow-sky-100 dark:shadow-sky-950" : "border-border hover:border-sky-300"}`}>
                {t.popular && <span className="absolute -top-2.5 left-5 text-xs bg-sky-500 text-white px-3 py-0.5 rounded-full font-bold">Popüler</span>}
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-lg mb-2">{t.name}</h3>
                <p className="text-foreground-light text-sm leading-relaxed mb-4">{t.desc}</p>
                <div className="text-sky-600 dark:text-sky-400 font-bold text-sm">{t.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hekimler" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Uzman Hekimlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="bg-surface rounded-3xl border border-border p-6 text-center hover:border-sky-400 hover:shadow-xl transition-all">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${d.gradient} mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg`}>🧑‍⚕️</div>
                <div className="font-bold text-lg">{d.name}</div>
                <div className="text-sm text-sky-600 dark:text-sky-400 mt-1">{d.role}</div>
                <div className="text-xs text-muted mt-1">{d.school} · {d.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teknoloji" className="py-20 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14">Kullandığımız Teknolojiler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tech.map((t, i) => (
              <div key={t} className="bg-surface rounded-2xl border border-border p-5 text-center hover:border-sky-400 transition-all">
                <div className="text-3xl mb-3">{["📡", "🔭", "💡", "🖥️"][i]}</div>
                <div className="text-sm font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ücretsiz Muayene</h2>
            <p className="text-sky-100 mb-8 text-lg">İlk görüşme tamamen ücretsiz! Hemen arayın.</p>
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 bg-white text-sky-700 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-sky-50 transition-all shadow-lg">
              📞 {SITE.phone}
            </a>
            <div className="mt-6 text-sky-200 text-sm">Pazartesi – Cumartesi · 09:00 – 19:00</div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center text-muted text-sm">© 2026 İnci Diş Kliniği. Sağlık Bakanlığı Ruhsatlı.</footer>
    </DemoShell>
  );
}
