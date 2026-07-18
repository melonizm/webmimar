export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kurumsal-web-sitesi-neden-onemli",
    title: "İşletmeler İçin Kurumsal Web Sitesi Neden Önemlidir?",
    excerpt: "Dijital çağda var olmanın ilk kuralı profesyonel bir web sitesine sahip olmaktır. Kurumsal kimliğinizi nasıl dijitale taşıyacağınızı öğrenin.",
    content: `
      <h2>Dijital Vitrininizin Gücü</h2>
      <p>Günümüzde bir müşteri, hizmet veya ürün satın almadan önce ilk olarak internette araştırma yapıyor. Eğer işletmenizin profesyonel bir web sitesi yoksa, potansiyel müşterileriniz sizi bulamaz ve doğrudan rakiplerinize yönelir.</p>
      
      <h3>1. Güven Verir</h3>
      <p>Kurumsal e-posta adresleri (ornek@sirketiniz.com) ve modern tasarımlı bir web sitesi, müşterilerinize işinizi ne kadar ciddiye aldığınızı gösterir. Amatör veya hiç var olmayan bir dijital kimlik, markanızın güvenilirliğini zedeler.</p>
      
      <h3>2. 7/24 Açık Bir Şube</h3>
      <p>Dükkanınız veya ofisiniz kapandığında bile web siteniz çalışmaya devam eder. Müşterileriniz gecenin bir yarısı bile hizmetlerinizi inceleyebilir, iletişim formundan size ulaşabilir veya ürünlerinizi satın alabilir.</p>
      
      <h3>3. Rakiplerin Önüne Geçin</h3>
      <p>Arama motorlarında (Google) bulunabilir olmak, sektörünüzdeki rekabette öne çıkmanızı sağlar. Doğru SEO (Arama Motoru Optimizasyonu) ile hazırlanmış bir web sitesi, sizi arayan müşterilerin doğrudan size ulaşmasını sağlar.</p>
    `,
    date: "18 Temmuz 2026",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    slug: "web-sitesi-yaptirirken-nelere-dikkat-edilmeli",
    title: "Web Sitesi Yaptırırken Nelere Dikkat Edilmeli?",
    excerpt: "Yeni bir web sitesi projesine başlarken paranızı ve zamanınızı boşa harcamamak için dikkat etmeniz gereken altın kurallar.",
    content: `
      <h2>Doğru Ajansı veya Freelancer'ı Seçmek</h2>
      <p>Web sitesi yaptırmak, işletmeniz için kritik bir yatırımdır. Yanlış kararlar hem bütçenizi hem de marka imajınızı olumsuz etkileyebilir.</p>

      <h3>Mobil Uyumluluk (Responsive Tasarım)</h3>
      <p>Ziyaretçilerinizin %70'inden fazlası web sitenize cep telefonlarından girecek. Eğer siteniz telefonda bozuk görünüyorsa, kullanıcılar anında sitenizi terk edecektir. Mutlaka "Mobile-First" (Önce Mobil) yaklaşımıyla tasarlanmış bir site talep edin.</p>

      <h3>Hız Her Şeydir</h3>
      <p>Google'ın araştırmalarına göre, 3 saniyeden geç açılan sitelerde ziyaretçilerin %53'ü sayfayı kapatıyor. Sitenizin teknik altyapısının (Next.js, React gibi modern teknolojiler) hızlı ve optimize edilmiş olması şarttır.</p>

      <h3>SEO Altyapısı</h3>
      <p>Sadece güzel görünen değil, aynı zamanda Google tarafından "okunabilen" bir siteye ihtiyacınız var. Meta etiketler, doğru başlık hiyerarşisi (H1, H2) ve sitemap.xml gibi özelliklerin projeye dahil olduğundan emin olun.</p>
    `,
    date: "15 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    slug: "e-ticaret-sitesi-kurma-maliyeti",
    title: "2026 E-Ticaret Sitesi Kurma Maliyetleri ve Aşamaları",
    excerpt: "Online satışa başlamak istiyorsanız, bir e-ticaret sitesinin size ne kadara mal olacağını ve süreçleri tüm şeffaflığıyla açıklıyoruz.",
    content: `
      <h2>E-Ticaret'e Adım Atmak</h2>
      <p>Kendi sanal mağazanızı açmak heyecan vericidir ancak maliyetleri doğru hesaplamak projenin sağlığı için çok önemlidir.</p>

      <h3>Sabit Giderler (Yıllık)</h3>
      <ul>
        <li><strong>Alan Adı (Domain):</strong> Yıllık ortalama 300 - 500 TL arası.</li>
        <li><strong>Hosting / Sunucu:</strong> Performansa bağlı olarak yıllık 2.000 TL - 10.000 TL arası.</li>
        <li><strong>SSL Sertifikası:</strong> Genellikle hosting ile ücretsiz verilir, ancak özel sertifikalar yıllık 1.000 TL civarındadır.</li>
      </ul>

      <h3>Tasarım ve Yazılım Giderleri</h3>
      <p>Eğer hazır paketler (Shopify, Ticimax vb.) yerine tamamen size ait, komisyonsuz ve özel tasarımlı bir e-ticaret altyapısı kurdurmak istiyorsanız, ortalama 25.000 TL ile 100.000 TL arasında bir bütçe ayırmanız gerekir.</p>

      <h3>Sanal POS Entegrasyonu</h3>
      <p>PayTR, İyzico gibi firmalarla anlaştığınızda genellikle kurulum ücreti ödemezsiniz, sadece işlem başına %1.5 ile %3 arasında komisyon kesilir.</p>
    `,
    date: "10 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "4",
    slug: "seo-nedir-nasil-yapilir",
    title: "SEO Nedir? Yeni Başlayanlar İçin Google'da Yükselme Rehberi",
    excerpt: "Arama motoru optimizasyonunun (SEO) temelleri ve web sitenizi Google'da nasıl ilk sayfaya taşıyabileceğiniz hakkında pratik bilgiler.",
    content: `
      <h2>Arama Motorlarının Dilini Anlamak</h2>
      <p>SEO (Search Engine Optimization), sitenizin arama motorları tarafından daha iyi anlaşılmasını ve kullanıcı arattığında en üst sıralarda çıkmasını sağlayan teknik ve stratejik işlemler bütünüdür.</p>

      <h3>İçerik Kraldır</h3>
      <p>Kullanıcıların sorularına en doğru ve detaylı cevabı veren içerikler her zaman kazanır. Kısa ve kopya içerikler yerine, kendi tecrübelerinizi aktardığınız özgün yazılar paylaşın.</p>

      <h3>Sayfa Hızı (Core Web Vitals)</h3>
      <p>Google artık yavaş siteleri üst sıralarda göstermiyor. Özellikle mobil cihazlarda sayfanızın açılış hızı SEO puanınızın çok büyük bir kısmını oluşturur.</p>

      <h3>Düzenli Güncelleme</h3>
      <p>Web sitenizi yaptırıp bir kenara bırakmayın. Sitenize düzenli olarak blog yazıları eklemek, güncellemeler yapmak Google botlarının sitenizi daha sık ziyaret etmesini sağlar.</p>
    `,
    date: "5 Temmuz 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "5",
    slug: "hazir-site-mi-ozel-yazilim-mi",
    title: "Hazır Web Sitesi mi Yoksa Özel Yazılım mı?",
    excerpt: "WordPress, Wix gibi hazır şablonlar kullanmak ile tamamen özel kodlanmış bir web sitesine sahip olmak arasındaki farklar nelerdir?",
    content: `
      <h2>Hangisi Size Uygun?</h2>
      <p>Web sitesi projesine başlarken en büyük ikilem: Ucuz ve hızlı olan hazır şablonlar mı, yoksa daha maliyetli ama tamamen esnek olan özel yazılım mı?</p>

      <h3>Hazır Şablonların Dezavantajları</h3>
      <p>Hazır sistemler (Wix, ucuz WordPress temaları) başta cazip görünse de, kodları şişkindir ve sitenizin çok yavaş çalışmasına neden olur. Ayrıca tasarım konusunda şablonun dışına çıkmak neredeyse imkansızdır.</p>

      <h3>Özel Yazılımın Gücü (Next.js & React)</h3>
      <p>WebMimar olarak bizim de tercih ettiğimiz React ve Next.js gibi teknolojilerle sıfırdan yazılan siteler; ışık hızında çalışır, Google tarafından çok sevilir ve işletmeniz büyüdükçe istediğiniz her türlü yeni özelliği eklemeye olanak tanır.</p>
    `,
    date: "1 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  }
];
