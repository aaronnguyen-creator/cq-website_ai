import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GlossaryArticle } from "@/components/glossary/GlossaryArticle";
import { GlossaryDetailLayout } from "@/components/glossary/GlossaryDetailLayout";
import { GlossarySidebar } from "@/components/glossary/GlossarySidebar";
import {
  glossaryDetails,
  highlightedGlossaryTerms,
} from "@/lib/glossary/glossaryDetails";
import { getGlossaryNav } from "@/lib/glossary/getGlossaryNav";
import { glossaryContent } from "@/lib/glossary/glossaryContent";
import type { GlossaryDetail } from "@/lib/glossary/types";
import {
  findGlossaryTermBySlug,
  getCanonicalGlossaryTerms,
} from "@/lib/glossary/utils";

type GlossaryDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getCanonicalGlossaryTerms(glossaryContent.terms).map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({
  params,
}: GlossaryDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const term = findGlossaryTermBySlug(slug, glossaryContent.terms);

  if (!term) {
    return {
      title: "Glossary | CQ",
    };
  }

  const detail = glossaryDetails[term.slug];
  const description =
    detail?.intro ??
    detail?.sections?.[0]?.paragraphs?.[0] ??
    "Definition coming soon for this CQ glossary entry. Check back for the latest update.";

  return {
    title: `${term.term} | CQ Glossary`,
    description,
  };
}

export default function GlossaryDetailPage({
  params,
}: GlossaryDetailPageProps) {
  const { slug } = params;
  const orderedTerms = getCanonicalGlossaryTerms(glossaryContent.terms);
  const term = orderedTerms.find((item) => item.slug === slug);

  if (!term) {
    notFound();
  }

  const detail: GlossaryDetail =
    glossaryDetails[term.slug] ?? {
      title: term.term,
      intro: "Definition coming soon.",
      sections: [],
    };

  const { previous, next } = getGlossaryNav(term.slug, orderedTerms);

  return (
    <GlossaryDetailLayout
      article={<GlossaryArticle detail={detail} previous={previous} next={next} />}
      sidebar={
        <GlossarySidebar
          terms={highlightedGlossaryTerms}
          currentSlug={term.slug}
        />
      }
    />
  );
}
