"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-border bg-muted/60 p-4 text-foreground shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
          >
            <button
              id={`${item.id}-trigger`}
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-2 py-1 text-left text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
              onClick={() => setActiveId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "ml-4 transition-transform",
                  isOpen ? "rotate-45" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`${item.id}-content`}
              role="region"
              aria-labelledby={`${item.id}-trigger`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden text-sm text-muted-foreground">
                <p className="pt-3 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
