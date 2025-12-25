// lib/product/coldEmailContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const coldEmailContent: FeaturePageConfig = {
  slug: "cold-email",

  hero: {
    eyebrow: "Cold Email",
    title: "Personalized outreach sequences",
    highlight: ["Personalized outreach"],
    valueProp:
      "Launch mandate-aware emails from your target list—then track replies, next steps, and stage movement in one place.",
    primaryCta: { label: "Try Cold Email free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/cold-email/hero.png",
      alt: "Cold Email sequence builder with personalization and reply tracking",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ, outreach is manual, inconsistent, and hard to track.",
    subhead:
      "Sequences live in inboxes and spreadsheets—so messaging drifts, follow-ups slip, and pipeline hygiene breaks.",
    cards: [
      {
        title: "Personalization doesn’t scale",
        description:
          "Teams default to generic copy because research and writing take too long.",
      },
      {
        title: "Follow-ups slip",
        description:
          "“Next step” tracking lives in spreadsheets and calendar reminders.",
      },
      {
        title: "Messaging drifts",
        description:
          "Different people send different claims, decks, and positioning.",
      },
      {
        title: "No clean stage movement",
        description:
          "Replies don’t reliably update pipeline stages and ownership.",
      },
      {
        title: "Context gets lost",
        description:
          "Fit notes and prior touches aren’t visible when you write.",
      },
      {
        title: "Hard to learn",
        description:
          "Outcomes aren’t tied back to segments, so targeting doesn’t improve.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Start from a ranked target list",
        description:
          "Select a segment from LP Database / AI Matching with owners assigned.",
        media: {
          type: "image",
          src: "/images/product/cold-email/step-1.png",
          alt: "Select target list and assign owners",
        },
      },
      {
        title: "Build a sequence",
        description:
          "Choose a multi-step cadence and define what triggers follow-ups.",
        media: {
          type: "image",
          src: "/images/product/cold-email/step-2.png",
          alt: "Sequence timeline builder",
        },
      },
      {
        title: "Personalize at scale",
        description:
          "Generate LP-specific first drafts using fit signals and notes—then approve before sending.",
        media: {
          type: "image",
          src: "/images/product/cold-email/step-3.png",
          alt: "Personalization panel and approval flow",
        },
      },
      {
        title: "Track replies and move pipeline",
        description:
          "Log touchpoints, set next steps, and move LPs through stages as they engage.",
        media: {
          type: "image",
          src: "/images/product/cold-email/step-4.png",
          alt: "Replies inbox with stage updates and task creation",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "workflow",
        title: "Sequence builder",
        description:
          "Create multi-step cadences with clear timing and ownership.",
      },
      {
        icon: "sparkles",
        title: "Personalization from LP context",
        description:
          "Use fit signals, tags, and notes to tailor messaging without rewriting from scratch.",
      },
      {
        icon: "shield",
        title: "Approval-ready drafts",
        description:
          "Review and edit before sending to keep tone, claims, and positioning consistent.",
      },
      {
        icon: "file",
        title: "Reply and touchpoint tracking",
        description:
          "Keep outreach history tied to the LP record for clean handoffs and continuity.",
      },
      {
        icon: "chart",
        title: "Pipeline stage updates",
        description:
          "Move LPs through stages with clear next steps and accountability.",
      },
      {
        icon: "search",
        title: "Segments and performance by list",
        description:
          "See what works by segment so targeting and messaging improve over time.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Build your universe in LP Database and prioritize in AI Matching.",
    ],
    afterTitle: "After this step…",
    after: [
      "Share materials via Data Room, handle diligence with AI Q&A, then move to NDA Signing and Commitment tracking.",
    ],
  },

  socialProof: {
    quote:
      "We run outreach from one system now. Personalization is faster, follow-ups don’t slip, and the pipeline stays clean.",
    name: "Head of Investor Relations",
    title: "[Fund type]",
    company: "[Fund size/AUM]",
  },

  finalCta: {
    title: "Launch outreach your team can repeat each raise",
    description:
      "Try Cold Email free with full Pro access for 14 days, then keep what you need on Free.",
    primaryCta: { label: "Try Cold Email free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};
