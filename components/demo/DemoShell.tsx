import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { ReactNode } from "react";

type DemoShellProps = {
  children: ReactNode;
  emoji: string;
  name: string;
  tagline: string;
  nav: { href: string; label: string }[];
  ctaLabel: string;
  ctaClassName?: string;
};

export function DemoShell({
  children,
  emoji,
  name,
  tagline,
  nav,
  ctaLabel,
  ctaClassName = "bg-accent text-white hover:opacity-90",
}: DemoShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16">
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{emoji}</span>
            <div>
              <div className="text-base font-bold leading-tight">{name}</div>
              <div className="text-[10px] text-muted leading-tight tracking-wider">{tagline}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground-light hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="tel:+905424570250"
              className={`hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${ctaClassName}`}
            >
              📞 {ctaLabel}
            </a>
          </div>
        </div>
      </header>

      {children}

      <div className="fixed bottom-0 inset-x-0 bg-accent text-white py-3 px-4 z-50 flex flex-col sm:flex-row items-center justify-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <span className="text-sm font-medium">
          Bu <strong>WebMimar</strong> tarafından tasarlanmış bir şablon sitedir.
        </span>
        <Link
          href="/"
          className="shrink-0 text-xs bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-1.5 rounded-full font-semibold transition-all"
        >
          WebMimar&apos;a Dön →
        </Link>
      </div>
    </main>
  );
}
