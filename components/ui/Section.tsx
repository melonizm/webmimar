import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  alt?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({ id, alt, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${alt ? "bg-background-alt" : "bg-background"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
