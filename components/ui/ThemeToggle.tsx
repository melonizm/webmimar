"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-border">
        <div className="w-5 h-5 bg-muted rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-border hover:border-accent transition-colors"
      aria-label="Tema değiştir"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
