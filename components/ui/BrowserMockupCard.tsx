import Link from "next/link";
import type { ReactNode } from "react";

export type MockupProject = {
  title: string;
  industry: string;
  description: string;
  placeholder: { bg: string; accent: string; letter: string };
  link?: string;
  externalUrl?: string;
};

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-surface-alt/50 border-b border-border/50 backdrop-blur-md relative z-10 transition-colors group-hover:bg-surface-alt/80">
      <div className="flex items-center gap-1 sm:gap-1.5">
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F57] group-hover:brightness-110 transition-all shadow-sm" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FEBC2E] group-hover:brightness-110 transition-all shadow-sm" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28C840] group-hover:brightness-110 transition-all shadow-sm" />
      </div>
      <div className="flex-1 mx-2 sm:mx-3">
        <div className="h-5 sm:h-6 bg-surface/80 rounded-md ring-1 ring-border/50 flex items-center px-2 sm:px-3 opacity-80 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted shrink-0">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-[9px] sm:text-[10px] text-muted ml-1.5 sm:ml-2 font-mono truncate">{url}</span>
        </div>
      </div>
    </div>
  );
}

function CardInner({ project }: { project: MockupProject }) {
  const url = project.externalUrl
    ? project.externalUrl.replace("https://", "").replace(/\/$/, "")
    : `www.${project.title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")}.com`;

  return (
    <>
      <div className="relative border-b border-border/50 overflow-hidden">
        <BrowserChrome url={url} />
        <div
          className="h-40 sm:h-48 md:h-56 relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105 flex items-center justify-center"
          style={{ backgroundColor: project.placeholder.bg }}
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold" style={{ color: project.placeholder.accent }}>
            {project.placeholder.letter}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <div className="text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-wider mb-1.5 sm:mb-2">{project.industry}</div>
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted text-xs sm:text-sm leading-relaxed flex-1">{project.description}</p>
        <span className="text-xs sm:text-sm font-semibold text-accent mt-3 sm:mt-4 inline-flex items-center gap-1">
          {project.link ? "Demoyu İncele" : "Siteyi Gör"} →
        </span>
      </div>
    </>
  );
}

export function BrowserMockupCard({ project }: { project: MockupProject }) {
  const className =
    "flex flex-col h-full group bg-surface rounded-3xl border border-border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,125,221,0.08)] hover:-translate-y-2 hover:border-accent";

  if (project.link) {
    return (
      <Link href={project.link} className={className}>
        <CardInner project={project} />
      </Link>
    );
  }

  return (
    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
      <CardInner project={project} />
    </a>
  );
}
