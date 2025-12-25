// lib/product/featurePageTypes.ts

export type Media = {
  type?: "image" | "video";
  src: string;
  alt?: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type FeatureHeroConfig = {
  eyebrow?: string; // small label pill e.g. "Fundraising Workflow"
  title: string; // feature name
  highlight?: string[]; // words/phrases to highlight in title
  valueProp: string; // one-line value prop
  primaryCta: CTA; // "Try Free"
  secondaryCta?: CTA; // "See Full Platform"
  media: Media; // screenshot/video
};

export type ProblemCard = {
  title: string;
  description: string;
};

export type ProblemConfig = {
  eyebrow?: string;
  title?: string;
  subhead?: string;
  cards: ProblemCard[]; // now 6
};



export type HowItWorksStep = {
  title: string;
  description: string;
  media?: Media; // UI screenshot per step
};

export type HowItWorksConfig = {
  title: string;
  steps: HowItWorksStep[]; // 3-4 steps
};

export type Capability = {
  title: string;
  description: string;
  icon?: "filter" | "sparkles" | "shield" | "workflow" | "search" | "file" | "chart"; // simple enum for now
};

export type CapabilitiesConfig = {
  title: string;
  items: Capability[]; // 4-6
};

export type WorkflowIntegrationConfig = {
  title: string;
  beforeTitle?: string; // "Before this step..."
  before: string[];
  afterTitle?: string; // "After this step..."
  after: string[];
};

export type SocialProofConfig = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarSrc?: string;
};

export type FinalCTAConfig = {
  title: string; // "Try Allocators Free"
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export type FeaturePageConfig = {
  slug: string;
  hero: FeatureHeroConfig;
  problem: ProblemConfig;
  howItWorks: HowItWorksConfig;
  capabilities: CapabilitiesConfig;
  workflowIntegration: WorkflowIntegrationConfig;
  socialProof: SocialProofConfig;
  finalCta: FinalCTAConfig;
};