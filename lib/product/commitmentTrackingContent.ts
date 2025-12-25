// lib/product/commitmentTrackingContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const commitmentTrackingContent: FeaturePageConfig = {
  slug: "commitment-tracking",

  hero: {
    eyebrow: "Commitment Tracking",
    title: "Track soft-circled vs hard commits in one place",
    highlight: ["soft-circled", "hard commits"],
    valueProp:
      "Keep every commitment, condition, and next step tied to the LP record—so your team can forecast close and execute without spreadsheet drift.",
    primaryCta: { label: "Try Commitment Tracking free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/commitment-tracking/hero.png",
      alt: "Commitments table with status, conditions, and next steps",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ, close tracking lives in spreadsheets—and slips.",
    subhead:
      "Commitments, conditions, and timelines get tracked manually, so forecasting is noisy and ownership breaks at the finish line.",
    cards: [
      {
        title: "Soft vs hard is unclear",
        description:
          "Teams can’t quickly separate signals from signed commitments.",
      },
      {
        title: "Conditions get lost",
        description:
          "Side letters, docs, and approvals aren’t tracked consistently by LP.",
      },
      {
        title: "Forecasting is noisy",
        description:
          "Close projections rely on stale rows and subjective updates.",
      },
      {
        title: "Ownership breaks late",
        description:
          "It’s unclear who is driving the next step for each allocator.",
      },
      {
        title: "Timeline slips",
        description:
          "Final asks and follow-ups fall through without structured reminders.",
      },
      {
        title: "History is hard to audit",
        description:
          "Post-close, it’s hard to reconstruct what was agreed and when.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Set the commitment stages",
        description:
          "Define statuses like soft-circled, conditional, verbal, docs out, hard commit.",
        media: {
          type: "image",
          src: "/images/product/commitment-tracking/step-1.png",
          alt: "Stage and status settings",
        },
      },
      {
        title: "Log commitment details by LP",
        description:
          "Capture amount, probability, conditions, and target close date tied to the LP record.",
        media: {
          type: "image",
          src: "/images/product/commitment-tracking/step-2.png",
          alt: "Commitment detail drawer",
        },
      },
      {
        title: "Track conditions and next steps",
        description:
          "Assign owners, create tasks, and keep a running checklist through close.",
        media: {
          type: "image",
          src: "/images/product/commitment-tracking/step-3.png",
          alt: "Conditions and tasks with owners",
        },
      },
      {
        title: "Close and lock the record",
        description:
          "Mark closes, maintain the timeline, and keep supporting docs linked for reporting.",
        media: {
          type: "image",
          src: "/images/product/commitment-tracking/step-4.png",
          alt: "Close status with linked materials",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "workflow",
        title: "Commitment stages and status",
        description:
          "Track soft-circled, conditional, and hard commits with consistent definitions.",
      },
      {
        icon: "chart",
        title: "Commitment details by LP",
        description:
          "Store amount, confidence, close date, and notes tied to the investor record.",
      },
      {
        icon: "file",
        title: "Conditions and requirements",
        description:
          "Track side-letter terms, documentation, and approvals without losing context.",
      },
      {
        icon: "shield",
        title: "Ownership and next steps",
        description:
          "Assign owners and tasks so close work doesn’t stall late in the cycle.",
      },
      {
        icon: "chart",
        title: "Close forecasting view",
        description:
          "Roll up commitments by stage to forecast likely close outcomes.",
      },
      {
        icon: "shield",
        title: "Audit-ready history",
        description:
          "Maintain a clean timeline of updates, changes, and close status by LP.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Run diligence through Data Room and AI Q&A, then gate access via NDA Signing.",
    ],
    afterTitle: "After this step…",
    after: [
      "Use LP Portal for post-close updates and keep reporting tied to investor history.",
    ],
  },

  socialProof: {
    quote:
      "We stopped arguing over the spreadsheet. Commitment Tracking made soft-circled vs hard commits clear, and close execution became predictable.",
    name: "Managing Partner",
    title: "[Fund type]",
    company: "[$AUM]",
  },

  finalCta: {
    title: "Close with clear ownership and clean numbers",
    description:
      "Track commitments, conditions, and next steps from one system of record—so forecasting stays credible through close.",
    primaryCta: { label: "Try Commitment Tracking free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};
