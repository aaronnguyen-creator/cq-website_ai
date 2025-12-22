import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { GlossarySidebarHighlight } from "@/lib/glossary/types";
import { cn } from "@/lib/utils";

type GlossarySidebarProps = {
  terms: GlossarySidebarHighlight[];
  currentSlug?: string;
};

export function GlossarySidebar({
  terms,
  currentSlug,
}: GlossarySidebarProps) {
  return (
    <aside className="self-stretch">
      <div className="rounded-2xl border border-border bg-card/80 p-5 md:p-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Highlighted terms
          </p>
          <p className="text-lg font-heading font-semibold text-foreground">
            Keep exploring the glossary
          </p>
        </div>
        <ul className="mt-4 flex flex-col divide-y divide-border/70">
          {terms.map((term) => {
            const isActive = term.slug === currentSlug;
            return (
              <li key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className={cn(
                    "flex flex-col gap-1 rounded-xl px-2 py-3 transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted",
                    isActive && "bg-muted/70",
                  )}
                >
                  <span className="text-sm font-medium text-foreground">
                    {term.term}
                  </span>
                  {term.hint ? (
                    <span className="text-xs text-muted-foreground">
                      {term.hint}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-6">
          <Button asChild variant="secondary" className="w-full justify-center">
            <Link href="/request-demo">Request a demo</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
