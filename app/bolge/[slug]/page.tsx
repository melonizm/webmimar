import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { bolgeler } from "@/lib/bolge-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dinamik SEO Meta Etiketleri Oluşturma
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const bolge = bolgeler.find((b) => b.slug === resolvedParams.slug);
  
  if (!bolge) {
    return {
      title: "Sayfa Bulunamadı | WebMimar",
    };
  }

  return {
    title: `${bolge.name} Web Tasarım ve Kurumsal Web Sitesi | WebMimar`,
    description: `${bolge.name} ve çevresindeki işletmeler için profesyonel web tasarım, e-ticaret siteleri ve SEO hizmetleri sunuyoruz. Hemen teklif alın!`,
    keywords: [`${bolge.name} web tasarım`, `${bolge.name} kurumsal web sitesi`, `${bolge.name} e-ticaret`, `${bolge.name} seo ajansı`, "web tasarım ajansı"],
    openGraph: {
      title: `${bolge.name} Web Tasarım Hizmetleri | WebMimar`,
      description: `${bolge.name} bölgesinde modern ve SEO uyumlu web tasarım hizmetleri.`,
      url: `https://www.webmimar.com.tr/bolge/${bolge.slug}`,
      type: "website",
    },
  };
}

// Tüm bölge slug'larını Next.js build aşamasında algılaması için
export function generateStaticParams() {
  return bolgeler.map((bolge) => ({
    slug: bolge.slug,
  }));
}

export default async function BolgePage({ params }: Props) {
  const resolvedParams = await params;
  const bolge = bolgeler.find((b) => b.slug === resolvedParams.slug);

  if (!bolge) {
    notFound();
  }

  const features = [
    "Modern ve Mobil Uyumlu Tasarım",
    "Google SEO Altyapısı",
    "Hızlı ve Güvenilir Sunucular",
    "E-Ticaret ve Sanal Pos",
    "Kurumsal Kimlik ve Logo",
    "7/24 Teknik Destek",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{bolge.name} Bölgesine Özel Hizmetler</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-primary">{bolge.name}</span> Web Tasarım ve<br /> Dijital Çözümler
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {bolge.name} ve çevresindeki işletmenizi dijital dünyada bir adım öne taşıyoruz. 
            Modern web siteleri, e-ticaret altyapıları ve kurumsal SEO stratejileriyle 
            rakiplerinizin önüne geçin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#fiyatlar" 
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              Hizmetlerimizi İnceleyin
            </Link>
            <a 
              href="https://wa.me/905309924160" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-card px-8 text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-all"
            >
              WhatsApp'tan Ulaşın
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Neden <span className="text-primary">WebMimar</span>'ı Seçmelisiniz?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {bolge.name} bölgesinde faaliyet gösteren firmanız için sadece bir web sitesi yapmıyoruz, 
              aynı zamanda sizi daha fazla müşteriye ulaştıracak dijital bir strateji kuruyoruz. 
              Sektörünüze özel analizler yaparak, arama motorlarında üst sıralarda çıkmanızı 
              sağlayacak altyapılar inşa ediyoruz.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <Link 
                href="/portfolyo"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Referanslarımızı İnceleyin <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt={`${bolge.name} Web Tasarım`}
              className="relative rounded-2xl border border-border shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 border-t border-border bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {bolge.name}'de İşinizi Büyütmeye Hazır Mısınız?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Hemen bizimle iletişime geçin, size özel web tasarım ve dijital pazarlama 
            çözümlerimizle {bolge.city} pazarında rakiplerinizin önüne geçmenizi sağlayalım.
          </p>
          <a 
            href="https://wa.me/905309924160" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Ücretsiz Teklif Alın
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
