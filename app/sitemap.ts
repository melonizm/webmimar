import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.webmimar.com.tr";

  // Sitedeki tüm sayfaların listesi
  const routes = [
    "",
    "/portfolyo",
    "/demolar",
    "/fiyatlar",
    "/surec",
    "/sss",
    "/gizlilik-politikasi",
    "/kullanim-sartlari",
    "/mesafeli-satis-sozlesmesi",
    "/iptal-iade-kosullari",
    "/teslimat-kosullari",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/odeme") ? 0.3 : 0.8,
  }));
}
