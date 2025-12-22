export type GlossaryHeroContent = {
  eyebrow?: string;
  title: string;
  description: string;
};

export type GlossaryContent = {
  hero: GlossaryHeroContent;
  terms: string[];
};

export const GLOSSARY_GROUP_ORDER = [
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

export type GlossaryGroupKey = (typeof GLOSSARY_GROUP_ORDER)[number];
export type GlossaryFilter = "All" | GlossaryGroupKey;

export type GlossaryTerm = {
  term: string;
  slug: string;
  group: GlossaryGroupKey;
};

export type GlossaryGroup = {
  label: GlossaryGroupKey;
  terms: GlossaryTerm[];
};

export type GlossarySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GlossaryFaq = {
  question: string;
  answer: string[];
};

export type GlossaryDetail = {
  title: string;
  intro?: string;
  sections: GlossarySection[];
  faqs?: GlossaryFaq[];
  conclusion?: {
    heading: string;
    paragraphs: string[];
  };
};

export type GlossarySidebarHighlight = {
  term: string;
  slug: string;
  hint?: string;
};
