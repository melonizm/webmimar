import fs from "fs";

const s = fs.readFileSync("legacy-out/_next/static/chunks/2112e0bfa18b1484.js", "utf8");

const markers = [
  "Web Sitesi Olmadan",
  "Dikkat",
  "id:\"risks\"",
  "id:\"testimonials\"",
  "BrowserMockup",
  "mockup",
  "grid-cols",
  "Marquee",
  "BlurText",
  "SectionLabel",
  "25393",
  "76376",
  "13421",
  "Stars",
  "embla",
  "swiper",
  "translate-x",
  "hero",
  "min-h-screen",
  "before:absolute",
  "radial",
  "dot",
  "pattern",
];

for (const m of markers) {
  const i = s.indexOf(m);
  if (i >= 0) {
    console.log("\n=== " + m + " ===");
    console.log(s.substring(Math.max(0, i - 50), i + 400));
  }
}
