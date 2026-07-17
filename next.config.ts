import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // NOT: PayTR API route'ları için output: "export" kaldırıldı.
  // Canlı ortamda Node.js destekleyen bir platform (Vercel, VPS vb.) gereklidir.
  outputFileTracingRoot: path.join(process.cwd()),
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
