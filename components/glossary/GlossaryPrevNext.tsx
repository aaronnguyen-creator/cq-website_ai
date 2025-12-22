import Link from "next/link";

import type { GlossaryTerm } from "@/lib/glossary/types";
import { cn } from "@/lib/utils";

type GlossaryPrevNextProps = {
  previous?: GlossaryTerm;
  next?: GlossaryTerm;
};

export function GlossaryPrevNext({
  previous,
  next,
}: GlossaryPrevNextProps) {
  return (
    <div className="mt-12 border-t border-border/60 pt-8">
      <div className="grid gap-4 md:grid-cols-2">
        <GlossaryNavCard direction="previous" term={previous} />
        <GlossaryNavCard direction="next" term={next} />
      </div>
    </div>
  );
}

type GlossaryNavCardProps = {
  direction: "previous" | "next";
  term?: GlossaryTerm;
};

function GlossaryNavCard({ direction, term }: GlossaryNavCardProps) {
  const isPrevious = direction === "previous";
  const isDisabled = !term;
  const label = isPrevious ? "Previous" : "Next";
  const arrow = isPrevious ? "←" : "→";
  const content = (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {isPrevious ? `${arrow} ${label}` : `${label} ${arrow}`}
      </span>
      <span className="text-lg font-heading font-semibold text-foreground">
        {term?.term ?? "None"}
      </span>
    </div>
  );

  if (isDisabled) {
    return (
      <div className="rounded-2xl border border-dashed border-border/70 bg-card/40 p-4 text-muted-foreground">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/glossary/${term.slug}`}
      className={cn(
        "rounded-2xl border border-border/80 bg-card/70 p-4 transition duration-200 ease-out hover:border-primary/50 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isPrevious ? "text-left" : "text-left md:text-right",
      )}
      aria-label={`${label} term: ${term.term}`}
    >
      {content}
    </Link>
  );
}
