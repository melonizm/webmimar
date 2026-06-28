import type { MockupProject } from "@/components/ui/BrowserMockupCard";

export const pricingPlans = [
  {
    name: "Giriş Paketi",
    subtitle: "Dijital Kartvizit & Lokal Güç",
    oldPrice: "15.000",
    price: "12.000",
    renewalPrice: "4.000",
    tagline: "İnternette hızlıca yer almak ve yerel müşterilere ulaşmak isteyen küçük esnaflar için idealdir.",
    popular: false,
    features: [
      "Tek sayfa (Landing Page) dönüşüm odaklı tasarım",
      "Hizmetler, galeri, iletişim bölümü",
      "Akıllı WhatsApp/Arama yönlendirme butonları",
      "Google Maps entegrasyonu",
      "Temel harita optimizasyonu",
      "1 yıl domain + hosting",
    ],
  },
  {
    name: "Standart Paket",
    subtitle: "Kurumsal Büyüme & Prestij",
    oldPrice: "30.000",
    price: "25.000",
    renewalPrice: "5.000",
    tagline: "Hizmetlerini detaylı sergilemek ve internetten kurumsal teklif toplamak isteyen firmalar içindir.",
    popular: true,
    features: [
      "Çoklu sayfa mimarisi (Ana Sayfa, Kurumsal, Hizmetler, Blog, İletişim)",
      "Gelişmiş dinamik teklif/başvuru formu",
      "Temel SEO altyapısı",
      "Hafifletilmiş temel logo/sosyal medya şablon desteği",
      "Google Analytics kurulumu",
      "1 yıl domain + hosting",
    ],
  },
  {
    name: "Profesyonel Paket",
    subtitle: "E-Ticaret & Satış Otomasyonu",
    oldPrice: "45.000",
    price: "35.000",
    renewalPrice: "7.500",
    tagline: "İnternetten doğrudan ürün satmak ve tüm satış operasyonunu dijitale taşımak isteyen markalar içindir.",
    popular: false,
    features: [
      "WooCommerce altyapısı",
      "Sanal POS (Iyzico/PayTR vb.) entegrasyonu",
      "Varyasyonlu ürün/stok yönetimi",
      "Otomatik kargo takip mail sistemi",
      "Akıllı çapraz satış algoritmaları",
      "Gelişmiş SEO altyapısı",
    ],
  },
  {
    name: "Premium Paket",
    subtitle: "Terzi Usulü Özel Projeler",
    oldPrice: "Teklif",
    price: "Proje Bazlı",
    renewalPrice: "Proje Bazlı",
    tagline: "Belirli bir şablona sığmayan, tamamen sıfırdan tasarım ve özel entegrasyonlar isteyen işletmeler içindir.",
    popular: false,
    features: [
      "Tamamen müşteri ihtiyaç analizine göre belirlenir",
      "Gelişmiş API entegrasyonları (ERP, Muhasebe, CRM)",
      "Özel veritabanı mimarileri",
      "Sınırsız dil seçeneği",
      "Markaya özel sıfırdan arayüz kodlaması",
      "Üyelik sistemleri, pazaryeri yapıları",
    ],
  },
];

export const benefits = [
  {
    title: "Google'da Görünür Olun",
    description: "SEO uyumlu web siteniz ile Google arama sonuçlarında üst sıralarda yer alın.",
  },
  {
    title: "Daha Fazla Müşteri Kazanın",
    description: "Profesyonel web siteniz ile potansiyel müşterilerinize ulaşın ve dönüştürün.",
  },
  {
    title: "7/24 Açık Dijital Vitrin",
    description: "Web siteniz 7 gün 24 saat çalışarak müşterilerinize hizmet verir.",
  },
  {
    title: "Profesyonel Marka İmajı",
    description: "Güçlü bir online varlık ile markanızı profesyonel şekilde temsil edin.",
  },
  {
    title: "Mobil Uyumlu Tasarım",
    description: "Tüm cihazlarda mükemmel görünen responsive web sitesi tasarımı.",
  },
  {
    title: "Hızlı Yüklenen Site",
    description: "Optimize edilmiş performans ile saniyeler içinde yüklenen web sitesi.",
  },
];

export const risks = [
  {
    title: "Google'da Görünmezsiniz",
    description: "Web sitesi olmadan potansiyel müşterileriniz sizi Google'da bulamaz.",
  },
  {
    title: "Müşteriler Güven Duymaz",
    description: "Online varlığı olmayan işletmelere müşterilerin güvensizlik hissetmesi kaçınılmazdır.",
  },
  {
    title: "Rakipleriniz Sizi Geçer",
    description: "Web sitesi olan rakipleriniz dijital alanda sizden önde olacaktır.",
  },
  {
    title: "Dijital Dünyada Var Olamazsınız",
    description: "Modern müşteriler bir işletmeyi online aramadan ziyaret etmez.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "İletişime Geçin",
    description: "WhatsApp veya telefon ile bize ulaşın. İhtiyaçlarınızı dinleyelim.",
  },
  {
    number: "02",
    title: "Tasarımı Seçin",
    description: "Sektörünüze ve zevkinize uygun tasarım önerilerini birlikte değerlendirelim.",
  },
  {
    number: "03",
    title: "Siteyi Hazırlayalım",
    description: "Uzman ekibimiz web sitenizi özenle kodlayıp tasarlasın.",
  },
  {
    number: "04",
    title: "Yayına Alalım",
    description: "Sitenizi yayına alıp Google'da görünür hale getirelim.",
  },
];

export const faqs = [
  {
    question: "Web sitesi ne kadar sürede hazırlanır?",
    answer:
      "Projenin kapsamına göre 5-15 iş günü arasında teslim edilir. Starter paketler genellikle 5-7 iş gününde, Premium paketler 10-15 iş gününde tamamlanır.",
  },
  {
    question: "Domain ve hosting dahil mi?",
    answer:
      "Evet, tüm paketlerimizde ilk yıl domain ve hosting fiyata dahildir. İkinci yıl yenileme bedeli önceden müşteriye bildirilir.",
  },
  {
    question: "Siteyi sonradan güncelleyebilir miyiz?",
    answer:
      "Elbette! İçerik güncellemeleri için kolay kullanımlı bir yönetim paneli sunuyoruz. Ayrıca teknik destek kapsamında revizyon hakları da mevcuttur.",
  },
  {
    question: "SEO çalışması var mı?",
    answer:
      "Tüm paketlerimizde temel SEO optimizasyonu dahildir. Business ve Premium paketlerde gelişmiş SEO yapısı, sayfa hızı optimizasyonu ve Google arama konsoluna kayıt gibi ek hizmetler sunulmaktadır.",
  },
  {
    question: "Mobil uyumlu mu?",
    answer:
      "Kesinlikle! Tüm web sitelerimiz %100 mobil uyumlu (responsive) olarak tasarlanır. Telefon, tablet ve masaüstü cihazlarda mükemmel görüntülenir.",
  },
  {
    question: "Hangi sektörlere hizmet veriyorsunuz?",
    answer:
      "Her sektöre özel web sitesi tasarlıyoruz. Restoran, kafe, berber, diş kliniği, oto servis, emlak ofisi, hukuk bürosu, güzellik salonu ve daha birçok sektöre hizmet veriyoruz.",
  },
  {
    question: "Mevcut bir sitem var, yenileyebilir misiniz?",
    answer:
      "Tabii ki. Mevcut sitenizi analiz ederek modern tasarım standartlarına uygun şekilde yeniden tasarlayabilir, içerik göçü yapabilir ve SEO'yu koruyarak geçiş sağlayabiliriz.",
  },
];

export const testimonials = [
  { name: "Ahmet Yılmaz", role: "Berber Salonu Sahibi", stars: 5, text: "WebMimar ile yaptırdığımız site sayesinde online randevu alabiliyoruz. Müşteri sayımız %40 arttı!" },
  { name: "Fatma Demir", role: "Restoran İşletmecisi", stars: 5, text: "Google'da üst sıralara çıktık. Artık yeni müşteriler bizi internet üzerinden buluyor." },
  { name: "Mehmet Kaya", role: "Diş Hekimi", stars: 5, text: "Kliniğimiz için profesyonel bir site lazımdı. WebMimar tam istediğimiz gibi hazırladı." },
  { name: "Ayşe Çelik", role: "Emlak Danışmanı", stars: 4, text: "İlan yönetim sistemi çok pratik. Müşterilerimiz sitemiz üzerinden kolayca ilan inceleyebiliyor." },
  { name: "Ali Özkan", role: "Oto Servis Sahibi", stars: 5, text: "Randevu formu sayesinde daha organize çalışmaya başladık. Güven artırdı." },
  { name: "Zeynep Arslan", role: "Güzellik Salonu Sahibi", stars: 5, text: "Sitemizi gören herkes çok beğeniyor. WhatsApp entegrasyonu sayesinde hemen randevu alabiliyorlar." },
  { name: "Hasan Koç", role: "Avukat", stars: 5, text: "Profesyonel görünümlü bir site ile müvekkillerimize güven veriyoruz. Çok memnunuz." },
  { name: "Elif Yıldız", role: "Kafe İşletmecisi", stars: 5, text: "Menümüzü online paylaşabiliyoruz. Sosyal medyadan gelen müşteri sayısı ikiye katlandı." },
];

export const demoProjects: MockupProject[] = [
  { title: "Berber & Kuaför", industry: "Demo Şablon", description: "Randevu sistemi, hizmet galerisi ve fiyat listesi ile modern barber sitesi.", link: "/demo/berber", placeholder: { bg: "#FFFBEB", accent: "#D97706", letter: "B" } },
  { title: "Restoran & Kafe", industry: "Demo Şablon", description: "Online menü, sipariş sistemi ve rezervasyon formu ile restoran sitesi.", link: "/demo/restoran", placeholder: { bg: "#FEF2F2", accent: "#EF4444", letter: "R" } },
  { title: "Diş Kliniği", industry: "Demo Şablon", description: "Online randevu, tedavi bilgileri ve doktor profilleri ile klinik sitesi.", link: "/demo/dis-klinigi", placeholder: { bg: "#F0F9FF", accent: "#0284C7", letter: "D" } },
  { title: "Oto Servis", industry: "Demo Şablon", description: "Hizmet listesi, randevu formu ve müşteri yorumları ile oto servis sitesi.", link: "/demo/oto-servis", placeholder: { bg: "#F8FAFC", accent: "#475569", letter: "O" } },
  { title: "Emlak Ofisi", industry: "Demo Şablon", description: "İlan yönetimi, detaylı filtreleme ve mülk sayfaları ile emlak sitesi.", link: "/demo/emlak", placeholder: { bg: "#ECFDF5", accent: "#059669", letter: "E" } },
];

export const externalProjects: MockupProject[] = [
  { title: "Güzellik Salonu", industry: "Güzellik & Bakım", description: "Online randevu, galeri ve fiyat listesi ile modern güzellik salonu sitesi.", externalUrl: "https://www.melissalounge.com/", placeholder: { bg: "#FDF2F8", accent: "#EC4899", letter: "G" } },
  { title: "Restoran", industry: "Yeme & İçme", description: "Online menü, rezervasyon formu ve görsel galeri ile restoran web sitesi.", externalUrl: "https://www.midpoint.com.tr/", placeholder: { bg: "#FFF7ED", accent: "#F97316", letter: "R" } },
  { title: "Diş Kliniği", industry: "Sağlık", description: "Online randevu, tedavi bilgileri ve doktor tanıtımı ile klinik sitesi.", externalUrl: "https://www.dentavrasya.com/", placeholder: { bg: "#F0F9FF", accent: "#0EA5E9", letter: "D" } },
  { title: "Oto Servis", industry: "Otomotiv", description: "Hizmet listesi, randevu sistemi ve müşteri yorumları ile oto servis sitesi.", externalUrl: "https://demirhanservis.com.tr/", placeholder: { bg: "#FAFAFA", accent: "#64748B", letter: "O" } },
  { title: "Hukuk Bürosu", industry: "Hukuk", description: "Hizmet detayları, ekip tanıtımı ve iletişim formu ile profesyonel hukuk sitesi.", externalUrl: "https://www.ozgunlaw.com/", placeholder: { bg: "#EEF2FF", accent: "#6366F1", letter: "H" } },
  { title: "Emlak Ofisi", industry: "Gayrimenkul", description: "İlan yönetimi, filtreleme ve detaylı mülk sayfaları ile emlak sitesi.", externalUrl: "https://www.altinemlak.com.tr/", placeholder: { bg: "#ECFDF5", accent: "#10B981", letter: "E" } },
];
