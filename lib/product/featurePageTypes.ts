// lib/product/featurePageTypes.ts

/** Shared */
export type Media = {
  type?: "image" | "video";
  src: string;
  alt?: string;
};

export type CTA = {
  label: string;
  href: string;
};

/** ---------------------------
 *  NEW (CURRENT) PAGE TEMPLATE
 *  --------------------------*/

/** HERO */
export type FeatureHeroConfig = {
  eyebrow?: string;
  title: string;
  highlight?: string[];
  valueProp: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  media: Media;
};

/** PROBLEM ("WITHOUT CQ...") */
export type ProblemCard = {
  title: string;
  description: string;
};

export type ProblemConfig = {
  eyebrow?: string; // "WITHOUT CQ"
  title?: string; // "Without CQ..."
  subhead?: string;
  cards: ProblemCard[];
};

/** HOW IT WORKS */
export type HowItWorksStep = {
  title: string;
  description: string;
  media?: Media;
};

export type HowItWorksConfig = {
  title: string;
  steps: HowItWorksStep[];
};

/** CAPABILITIES */
export type CapabilityIcon =
  | "sparkles"
  | "shield"
  | "workflow"
  | "search"
  | "file"
  | "chart"
  | "mail"
  | "lock"
  | "users"
  | "message"
  | "arrowRight"
  | "check"
  | "warning";

export type Capability = {
  title: string;
  description: string;
  icon?: CapabilityIcon;
};

export type CapabilitiesConfig = {
  title: string;
  items: Capability[];
};

/** WORKFLOW INTEGRATION */
export type WorkflowIntegrationConfig = {
  title: string;
  beforeTitle?: string;
  before: string[];
  afterTitle?: string;
  after: string[];
};

/** SOCIAL PROOF */
export type SocialProofConfig = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarSrc?: string;
};

/** FINAL CTA */
export type FinalCTAConfig = {
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  trustLine?: string;
};

/** ---------------------------
 *  LEGACY SECTION TYPES (COMPAT)
 *  Keep these so existing components compile.
 *  You can delete later after refactors.
 *  --------------------------*/

/** CTA Band (legacy) */
export type CTABandContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  trustLine?: string;
};

/** Highlights (legacy) */
export type HighlightItem = {
  title: string;
  description?: string;
  icon?: CapabilityIcon;
};

export type HighlightsContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: HighlightItem[];
};

/** Solution Intro (legacy) */
export type SolutionIntroContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  bullets?: string[];
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Customer Proof / Logos (legacy) */
export type CustomerLogo = {
  name: string;
  src?: string;
};

export type CustomerProofContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  logos?: CustomerLogo[];
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
  avatarSrc?: string;
};

/** ---------------------------
 *  FINAL PAGE CONFIG
 *  --------------------------*/

export type FeaturePageConfig = {
  slug: string;

  // New template sections
  hero: FeatureHeroConfig;
  problem: ProblemConfig;
  howItWorks: HowItWorksConfig;
  capabilities: CapabilitiesConfig;
  workflowIntegration: WorkflowIntegrationConfig;
  socialProof: SocialProofConfig;
  finalCta: FinalCTAConfig;

  // Legacy sections (optional so old code compiles)
  ctaBand?: CTABandContent;
  highlights?: HighlightsContent;
  solutionIntro?: SolutionIntroContent;
  customerProof?: CustomerProofContent;
};
