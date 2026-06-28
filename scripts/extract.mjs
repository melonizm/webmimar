import fs from "fs";

const main = fs.readFileSync("_next/static/chunks/2112e0bfa18b1484.js", "utf8");

const markers = [
  "Web Siteniz",
  "Profesyonel Web",
  "number:\"01\"",
  "Neden Web",
  "Sorunlar",
  "Dijital D",
  "Google'da Görünmezsiniz",
  "Google'da Görünür",
  "Mobil Uyumlu",
  "7/24",
  "Teklif Al",
  "altinemlak",
  "midpoint",
];

for (const m of markers) {
  const i = main.indexOf(m);
  if (i >= 0) {
    console.log("\n=== " + m + " @ " + i + " ===");
    console.log(main.substring(i, Math.min(i + 800, main.length)));
  }
}
