import { glossaryContent } from "./glossaryContent";
import {
  type GlossaryGroup,
  type GlossaryGroupKey,
  type GlossaryTerm,
  GLOSSARY_GROUP_ORDER,
} from "./types";
import { slugifyTerm } from "./slugify";

export function buildGlossaryGroups(
  terms: string[] = glossaryContent.terms,
): GlossaryGroup[] {
  const buckets = GLOSSARY_GROUP_ORDER.reduce<
    Record<GlossaryGroupKey, GlossaryTerm[]>
  >((acc, key) => {
    acc[key] = [];
    return acc;
  }, {} as Record<GlossaryGroupKey, GlossaryTerm[]>);

  terms.forEach((rawTerm) => {
    const term = rawTerm.trim();
    if (!term) return;
    const firstChar = term.charAt(0).toUpperCase();
    const isLetter = /^[A-Z]$/.test(firstChar);
    const group = (isLetter ? firstChar : "#") as GlossaryGroupKey;
    buckets[group].push({
      term,
      slug: slugifyTerm(term),
      group,
    });
  });

  return GLOSSARY_GROUP_ORDER.map((label) => ({
    label,
    terms: [...buckets[label]].sort((a, b) =>
      a.term.localeCompare(b.term, undefined, { sensitivity: "base" }),
    ),
  }));
}

export function getCanonicalGlossaryTerms(
  terms: string[] = glossaryContent.terms,
): GlossaryTerm[] {
  return buildGlossaryGroups(terms)
    .filter((group) => group.terms.length > 0)
    .flatMap((group) => group.terms);
}

export function findGlossaryTermBySlug(
  slug: string,
  terms: string[] = glossaryContent.terms,
) {
  return getCanonicalGlossaryTerms(terms).find(
    (term) => term.slug === slug,
  );
}
