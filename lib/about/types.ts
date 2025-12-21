export type CTA = {
  label: string;
  href: string;
};

export type AboutHeroContent = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  backgroundImage?: {
    src: string;
    alt: string;
  };
};

export type NarrativeSectionContent = {
  heading: string;
  description: string[];
  bullets?: string[];
};

export type MissionSlide = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type MissionSliderContent = {
  heading: string;
  description: string;
  slides: MissionSlide[];
};

export type ValueCard = {
  title: string;
  description: string;
};

export type ValuesContent = {
  heading: string;
  description: string;
  values: ValueCard[];
};

export type LeaderHighlightGroup = {
  title: string;
  items: string[];
};

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  image?: {
    src: string;
    alt: string;
  };
  highlights: LeaderHighlightGroup[];
};

export type TeamSectionContent = {
  heading: string;
  description: string;
  featured: TeamMember;
};

export type AboutCtaContent = {
  heading: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
};

export type AboutContent = {
  hero: AboutHeroContent;
  mission: MissionSliderContent;
  vision: NarrativeSectionContent;
  values: ValuesContent;
  team: TeamSectionContent;
  cta: AboutCtaContent;
};
