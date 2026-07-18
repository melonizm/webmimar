import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const quickLinks = [
  { href: "/#benefits", label: "Avantajlar" },
  { href: "/portfolyo", label: "Portfolyo" },
  { href: "/demolar", label: "Demolar" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/surec", label: "Süreç" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "SSS" },
];

const services = [
  { href: "/fiyatlar", label: "Kurumsal Web Sitesi" },
  { href: "/fiyatlar", label: "E-ticaret Sitesi" },
  { href: "/bolge/kocaeli", label: "Kocaeli Web Tasarım" },
  { href: "/bolge/istanbul", label: "İstanbul Web Tasarım" },
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
            <div className="space-y-3 text-sm text-foreground-light">
              <p className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span className="leading-relaxed">
                  KOCAELİ/GEBZE YAVUZ SELİM MAHALLESİ<br />
                  ANKARA CADDESİ NO 138 DAİRE 2
                </span>
              </p>
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
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Hizmetler</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href + service.label}>
                  <Link href={service.href} className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">© {new Date().getFullYear()} WebMimar. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
            <Link href="/mesafeli-satis-sozlesmesi" className="text-xs text-muted hover:text-foreground transition-colors">
              Mesafeli Satış Sözleşmesi
            </Link>
            <Link href="/gizlilik-politikasi" className="text-xs text-muted hover:text-foreground transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="text-xs text-muted hover:text-foreground transition-colors">
              Kullanım Şartları
            </Link>
            <Link href="/iptal-iade-kosullari" className="text-xs text-muted hover:text-foreground transition-colors">
              İptal / İade Koşulları
            </Link>
            <Link href="/teslimat-kosullari" className="text-xs text-muted hover:text-foreground transition-colors">
              Teslimat Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
