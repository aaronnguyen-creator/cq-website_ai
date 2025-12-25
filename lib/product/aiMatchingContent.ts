// lib/product/aiMatchingContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const aiMatchingContent: FeaturePageConfig = {
  slug: "ai-matching",

  hero: {
    eyebrow: "AI Matching",
    title: "Start outreach with ranked fit—not guesswork",
    highlight: ["ranked fit"],
    valueProp:
      "Rank LPs by mandate fit with explainable scoring—so your team knows who to email first and why.",
    primaryCta: { label: "Try AI Matching free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/ai-matching/hero.png",
      alt: "AI Matching in CQ",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ...",
    subhead:
      "Targeting is manual and inconsistent—so outreach starts blind and doesn’t improve over time.",
    cards: [
      {
        title: "Fit lives in heads",
        description:
          "Prioritization depends on one person’s memory of mandates and history.",
      },
      {
        title: "No ranking signal",
        description:
          "Lists aren’t ordered by probability of fit—so outreach starts blind.",
      },
      {
        title: "Criteria isn’t consistent",
        description:
          "Strategy, check size, and geography get applied differently across the team.",
      },
      {
        title: "Weak “why now”",
        description:
          "You can’t quickly articulate why an LP fits this fund and this raise.",
      },
      {
        title: "Over-emailing happens",
        description:
          "Teams spend cycles on LPs that will never clear mandate filters.",
      },
      {
        title: "Hard to iterate",
        description:
          "Lessons from outreach don’t feed back into the targeting model.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Define your fund profile",
        description:
          "Set strategy, geography, check size, sector exposure, and constraints.",
        media: {
          type: "image",
          src: "/images/product/ai-matching/step-1.png",
          alt: "Fund profile builder",
        },
      },
      {
        title: "Generate match scores",
        description:
          "AI ranks LPs against your profile and surfaces top candidates first.",
        media: {
          type: "image",
          src: "/images/product/ai-matching/step-2.png",
          alt: "Scored LP list with ranking",
        },
      },
      {
        title: "Review the “why”",
        description:
          "See what drove the score (mandate alignment, ticket fit, exposure). Keep it explainable for internal review.",
        media: {
          type: "image",
          src: "/images/product/ai-matching/step-3.png",
          alt: "Why this match panel",
        },
      },
      {
        title: "Save and hand off to outreach",
        description:
          "Turn top matches into segments with owners and next steps.",
        media: {
          type: "image",
          src: "/images/product/ai-matching/step-4.png",
          alt: "Save segment and push to outreach",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "sparkles",
        title: "Explainable match scoring",
        description: "Rank LPs by fit and show what drove the score.",
      },
      {
        icon: "workflow",
        title: "Custom fund criteria",
        description:
          "Apply your strategy, check size, geography, and constraints consistently.",
      },
      {
        icon: "file",
        title: "Shortlists and segments",
        description:
          "Save top matches into lists your team can run outreach against.",
      },
      {
        icon: "chart",
        title: "Fit notes and feedback loop",
        description:
          "Capture outcomes and refine targeting based on what worked.",
      },
      {
        icon: "search",
        title: "Filter + rank controls",
        description:
          "Combine hard filters with scoring to keep the list actionable.",
      },
      {
        icon: "shield",
        title: "Handoff to outreach",
        description:
          "Move ranked LPs into pipeline with owners and next steps.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Build an initial target universe in LP Database (and capture fit constraints).",
    ],
    afterTitle: "After this step…",
    after: [
      "Launch sequences in Cold Email, track responses, and push interested LPs into Data Room.",
    ],
  },

  socialProof: {
    quote:
      "We stopped debating who to email first. AI Matching gave us a ranked list with clear rationale, and outreach became a repeatable motion.",
    name: "Managing Partner",
    title: "[Fund type]",
    company: "[Fund size/AUM]",
  },

  finalCta: {
    title: "Start outreach with ranked fit—not guesswork",
    description:
      "Try AI Matching free with full Pro access for 14 days, then keep what you need on Free.",
    primaryCta: { label: "Try AI Matching free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};
