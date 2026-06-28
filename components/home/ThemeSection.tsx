"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function ThemeSection() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : true;

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background-alt border-y border-border-light">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-muted text-xs sm:text-sm mb-4 sm:mb-5">Sayfa görünümünü tercihinize göre ayarlayın</p>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-border bg-surface text-foreground font-semibold text-sm sm:text-base shadow-sm hover:border-accent hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            aria-label="Tema değiştir"
          >
            {isDark ? (
              <>
                <SunIcon />
                <span className="hidden sm:inline">Açık Temaya Geç</span>
                <span className="sm:hidden">Açık Tema</span>
              </>
            ) : (
              <>
                <MoonIcon />
                <span className="hidden sm:inline">Koyu Temaya Geç</span>
                <span className="sm:hidden">Koyu Tema</span>
              </>
            )}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
