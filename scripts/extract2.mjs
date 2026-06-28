import fs from "fs";
const s = fs.readFileSync("legacy-out/_next/static/chunks/2112e0bfa18b1484.js", "utf8");

const parts = [
  ["hero rest", s.indexOf("hover:scale-105 tr")],
  ["testimonials", s.indexOf("Müşteri Yorumları")],
  ["portfolio", s.indexOf("Yaptığımız Siteler")],
  ["process", s.indexOf("Nasıl")],
  ["pricing card", s.indexOf("En Popüler")],
  ["benefits icon", s.indexOf("Google'da Görünür Olun")],
  ["81548", s.indexOf("81548")],
  ["portfolio data", s.indexOf("industry:\"Berber")],
  ["risks cards", s.indexOf("Web Sitesi Olmayan")],
];

for (const [name, i] of parts) {
  if (i >= 0) {
    console.log("\n\n========== " + name + " ==========");
    console.log(s.substring(i - 100, i + 2500));
  }
}
