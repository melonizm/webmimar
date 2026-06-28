import { DM_Sans, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { FloatingWhatsApp } from "@/components/ui/WhatsAppCTA";
import { SITE } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "web tasarım",
    "kurumsal web sitesi",
    "e-ticaret sitesi",
    "seo optimizasyonu",
    "web ajansı",
    "webmimar",
  ],
  openGraph: {
    title: "WebMimar | Profesyonel Web Tasarım",
    description: "Modern, mobil uyumlu ve SEO dostu profesyonel web siteleri tasarlıyoruz.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("webmimar-theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} min-h-screen antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
