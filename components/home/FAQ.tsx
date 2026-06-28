"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/lib/data/site-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" alt>
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel>
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase">SSS</span>
        </SectionLabel>
        <SectionLabel delay={0.1} className="mb-4 pb-2">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Sıkça Sorulan <span className="text-gradient">Sorular</span>
          </h2>
        </SectionLabel>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="card overflow-hidden transition-all duration-300 hover:border-accent/20">
            <button
              type="button"
              className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left font-semibold text-foreground text-sm sm:text-base hover:bg-surface-alt transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              {faq.question}
              <span className="text-accent text-lg sm:text-xl shrink-0 ml-2 sm:ml-4 transition-transform duration-300" style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0)" }}>
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-muted text-xs sm:text-sm leading-relaxed border-t border-border-light pt-3 sm:pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
