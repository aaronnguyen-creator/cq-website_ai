'use client';

import Link from "next/link";

import { useGlossary } from "./GlossaryProvider";

export function GlossaryList() {
  const { filteredGroups, totalCount, activeFilter } = useGlossary();
  const hasResults = totalCount > 0;

  return (
    <section
      aria-live="polite"
      className="bg-background py-10 text-foreground md:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Glossary entries
            </p>
            <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
              {activeFilter === "All"
                ? "Alphabetical listing"
                : `Terms that start with “${activeFilter}”`}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {totalCount} {totalCount === 1 ? "term" : "terms"}
          </p>
        </div>

        {hasResults ? (
          <div className="flex flex-col gap-6 md:gap-10">
            {filteredGroups.map((group) => (
              <div key={group.label} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  {group.label}
                </p>
                <div className="rounded-2xl border border-border/80 bg-card/80 p-4 md:p-6">
                  <ul className="flex flex-col divide-y divide-border/60">
                    {group.terms.map((term) => {
                      return (
                        <li key={term.slug}>
                          <Link
                            href="/glossary/2-and-20-fee-structure"
                            className="flex items-center justify-between gap-3 rounded-xl px-2 py-3 text-base font-medium transition duration-200 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <span>{term.term}</span>
                            <span
                              aria-hidden="true"
                              className="text-sm text-muted-foreground"
                            >
                              &rarr;
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border/70 bg-card/40 p-6 text-sm text-muted-foreground md:p-8">
            No terms available for the selected filter yet.
          </div>
        )}
      </div>
    </section>
  );
}
