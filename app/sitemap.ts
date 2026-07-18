import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { bolgeler } from "@/lib/bolge-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.webmimar.com.tr";

  // Sabit sayfalar
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
    "/blog",
  ];

  const staticUrls: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/odeme") ? 0.3 : 0.8,
  }));

  // Blog dinamik sayfaları
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Bölge (Hizmetler) dinamik sayfaları
  const bolgeUrls = bolgeler.map((bolge) => ({
    url: `${baseUrl}/bolge/${bolge.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticUrls, ...blogUrls, ...bolgeUrls];
}
