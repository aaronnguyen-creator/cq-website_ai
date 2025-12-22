import type { GlossaryTerm } from "./types";
import { getCanonicalGlossaryTerms } from "./utils";

export function getGlossaryNav(
  slug: string,
  orderedTerms: GlossaryTerm[] = getCanonicalGlossaryTerms(),
) {
  const index = orderedTerms.findIndex((term) => term.slug === slug);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: index > 0 ? orderedTerms[index - 1] : undefined,
    next:
      index < orderedTerms.length - 1 ? orderedTerms[index + 1] : undefined,
  };
}
