import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.webmimar.com.tr";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/odeme/",
        "/api/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
