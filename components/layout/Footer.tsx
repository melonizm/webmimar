import Image from "next/image";
import { SITE } from "@/lib/constants";

const quickLinks = [
  { href: "#benefits", label: "Avantajlar" },
  { href: "#portfolio", label: "Portfolyo" },
  { href: "#demos", label: "Demolar" },
  { href: "#pricing", label: "Fiyatlar" },
  { href: "#process", label: "Süreç" },
  { href: "#faq", label: "SSS" },
];

const services = [
  "Kurumsal Web Sitesi",
  "E-ticaret Sitesi",
  "SEO Optimizasyonu",
  "Mobil Uygulama",
];

export function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="WebMimar Logo" width={36} height={36} className="w-9 h-9" />
              <span className="font-heading text-2xl font-extrabold text-gradient">WebMimar</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              İşletmelerin dijital dünyada büyümesini sağlayan profesyonel web sitesi tasarım ajansı.
            </p>
            <div className="space-y-2 text-sm text-foreground-light">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-accent transition-colors">
                  {SITE.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp ile yazın
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Hizmetler</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} WebMimar. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
