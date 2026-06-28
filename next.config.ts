import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(process.cwd()),
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
