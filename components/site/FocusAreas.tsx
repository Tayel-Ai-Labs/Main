"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { focusAreas } from "@/content/site";

export function FocusAreas() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="focus" className="scroll-mt-24 py-20 md:py-24">
      <Container>
        <p className="text-overline text-ink-muted">Research</p>
        <h2 className="mt-3 text-h2 text-ink">Our Core Focus Areas</h2>

        <div className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {focusAreas.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-start"
                >
                  <span className="text-h6 text-ink">{item.q}</span>
                  <span className="shrink-0 text-ink-muted">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-body-lg text-ink-soft">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
