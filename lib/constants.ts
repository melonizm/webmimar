export const SITE = {
  name: "WebMimar",
  title: "WebMimar | Profesyonel Web Tasarım & Kurumsal Siteler",
  description:
    "WebMimar ile işletmenizi dijital dünyaya taşıyın. Modern, mobil uyumlu ve dönüşüm odaklı profesyonel web siteleri tasarlıyoruz.",
  email: "infowebmimar@gmail.com",
  phone: "0530 992 41 60",
  phoneHref: "+905309924160",
  whatsapp: "905309924160",
  whatsappMessage:
    "Merhaba, web sitesi hakkında bilgi almak istiyorum.",
} as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
