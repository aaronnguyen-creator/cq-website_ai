export type CTA = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  proofLabel: string;
  proofLogos: Array<{ name: string; src?: string }>;
  heroImage: { src: string; alt: string };
};

export type BenefitsIntroContent = {
  title: string;
  description: string;
  items: Array<{
    title: string;
    image: { src: string; alt: string };
  }>;
};

export type ProductModule = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

export type ProductModulesContent = {
  title: string;
  items: ProductModule[];
};

export type OutcomeCard = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export type OutcomesContent = {
  title: string;
  description: string;
  cards: OutcomeCard[];
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
};

export type TestimonialsContent = {
  title: string;
  items: Testimonial[];
};

export type CTABoxContent = {
  title: string;
  description?: string;
  primaryCta: CTA;
  secondaryCta: CTA;
};

export type ResourcesContent = {
  title: string;
  source: "insightsNewest";
  count: number;
};

export type HomeContent = {
  hero: HeroContent;
  benefitsIntro: BenefitsIntroContent;
  products: ProductModulesContent;
  outcomes: OutcomesContent;
  testimonials: TestimonialsContent;
  ctaBox: CTABoxContent;
  resources: ResourcesContent;
};
