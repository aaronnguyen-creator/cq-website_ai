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
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
          >
            <button
              className="flex w-full items-center justify-between text-left text-base font-semibold"
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
              <div className="overflow-hidden text-sm text-white/70">
                <p className="pt-3">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
