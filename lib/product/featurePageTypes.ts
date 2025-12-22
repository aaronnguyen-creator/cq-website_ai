export type CTA = {
  label: string;
  href: string;
};

export type HeroImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HeroContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  image: HeroImage;
};

export type TrustBarContent = {
  id: string;
  title: string;
  logos: string[];
};

export type CustomerProofLogo = {
  name: string;
  src?: string;
};

export type CustomerProofContent = {
  heading: string;
  subheading?: string;
  cta: CTA;
  logos: CustomerProofLogo[];
};

export type ProblemContent = {
  id: string;
  heading: string;
  items: Array<{
    title: string;
    body: string;
  }>;
};

export type SolutionFeature = {
  title: string;
  description: string;
  bullets?: string[];
  image: HeroImage;
};

export type SolutionContent = {
  id: string;
  heading: string;
  subheading: string;
  body: string;
  features: SolutionFeature[];
};

export type ProofPillarsContent = {
  id: string;
  heading: string;
  intro: string;
  pillars: Array<{
    title: string;
    body: string;
  }>;
};

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

export type TestimonialsContent = {
  id: string;
  heading: string;
  items: Testimonial[];
};

export type CTABandContent = {
  id: string;
  heading: string;
  body: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export type OtherProduct = {
  title: string;
  body: string;
  href: string;
};

export type OtherProductsContent = {
  id: string;
  heading: string;
  items: OtherProduct[];
};

export type ResourceLink = {
  title: string;
  href: string;
  description?: string;
  category?: string;
  date?: string;
  readingTime?: string;
  image?: HeroImage;
};

export type ResourcesContent = {
  id: string;
  heading: string;
  items: ResourceLink[];
  useLatestInsights?: boolean;
  count?: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  id: string;
  heading: string;
  items: FAQItem[];
};

export type FinalCTAContent = {
  id: string;
  heading: string;
  body: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export type NavAnchor = {
  id: string;
  label: string;
};

export type FeaturePageConfig = {
  navAnchors: NavAnchor[];
  hero: HeroContent;
  trustBar?: TrustBarContent;
  customerProof?: CustomerProofContent;
  problem: ProblemContent;
  solution: SolutionContent;
  proof: ProofPillarsContent;
  testimonials?: TestimonialsContent;
  ctaBand: CTABandContent;
  otherProducts: OtherProductsContent;
  resources: ResourcesContent;
  faq: FAQContent;
  finalCta: FinalCTAContent;
};
