'use client';

import { cn } from "@/lib/utils";
import {
  GLOSSARY_GROUP_ORDER,
  type GlossaryFilter,
} from "@/lib/glossary/types";
import { useGlossary } from "./GlossaryProvider";

export const glossaryFilters: GlossaryFilter[] = [
  "All",
  ...GLOSSARY_GROUP_ORDER,
];

type GlossaryFilterBarProps = {
  filters?: GlossaryFilter[];
};

export function GlossaryFilterBar({
  filters = glossaryFilters,
}: GlossaryFilterBarProps) {
  const { activeFilter, setActiveFilter } = useGlossary();

  return (
    <section
      aria-label="Glossary filter"
      className="bg-background py-4 text-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-x-auto">
          <div className="inline-flex min-w-max gap-2 rounded-full border border-border/70 bg-card/70 p-2 md:min-w-0">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "min-w-[42px] rounded-full border px-3 py-1.5 text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_25px_rgba(15,23,42,0.12)]"
                      : "border-transparent bg-background text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
