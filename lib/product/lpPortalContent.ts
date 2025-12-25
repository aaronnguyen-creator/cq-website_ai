// lib/product/lpPortalContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const lpPortalContent: FeaturePageConfig = {
  slug: "lp-portal",

  hero: {
    eyebrow: "LP Portal",
    title: "Give LPs a single place to stay current",
    highlight: ["single place", "stay current"],
    valueProp:
      "Share updates, key documents, and the latest fund narrative in one controlled portal—tied to each LP’s access and history.",
    primaryCta: { label: "Try LP Portal free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/lp-portal/hero.png",
      alt: "LP portal view with update feed, documents, and permissions",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ, LP communication stays fragmented and hard to govern.",
    subhead:
      "Updates, decks, and follow-ups scatter across emails and links—so LPs miss context and teams lose a clean record.",
    cards: [
      {
        title: "Updates get buried",
        description:
          "LPs can’t find the latest materials or the current narrative.",
      },
      {
        title: "Versions drift",
        description:
          "Different contacts end up with different decks and docs.",
      },
      {
        title: "No single source for LPs",
        description:
          "You keep re-sending links instead of maintaining one controlled destination.",
      },
      {
        title: "Access rules are inconsistent",
        description:
          "It’s hard to keep permissions aligned across every share.",
      },
      {
        title: "History is hard to reconstruct",
        description:
          "Who received what, when, and why isn’t captured cleanly.",
      },
      {
        title: "Post-close comms get messy",
        description:
          "Updates and requests continue, but the workflow isn’t structured.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Create the portal experience",
        description:
          "Set the core materials and the update structure you want LPs to see.",
        media: {
          type: "image",
          src: "/images/product/lp-portal/step-1.png",
          alt: "Portal setup and sections",
        },
      },
      {
        title: "Control access by LP",
        description:
          "Grant portal access based on investor status, stage, or NDA rules.",
        media: {
          type: "image",
          src: "/images/product/lp-portal/step-2.png",
          alt: "Access controls tied to LP record",
        },
      },
      {
        title: "Publish updates and share materials",
        description:
          "Post updates and attach the right documents without re-sending links each time.",
        media: {
          type: "image",
          src: "/images/product/lp-portal/step-3.png",
          alt: "Update composer with document attach",
        },
      },
      {
        title: "Track engagement and history",
        description:
          "Keep a record of what was shared and accessed, tied to the LP timeline.",
        media: {
          type: "image",
          src: "/images/product/lp-portal/step-4.png",
          alt: "Engagement and activity history",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "workflow",
        title: "LP-facing destination",
        description:
          "Give LPs a single place to find updates, materials, and the latest narrative.",
      },
      {
        icon: "shield",
        title: "Controlled access by investor",
        description:
          "Manage who sees what based on stage, NDA status, or permissions.",
      },
      {
        icon: "file",
        title: "Update publishing",
        description:
          "Post updates without rebuilding emails or re-sharing links across threads.",
      },
      {
        icon: "file",
        title: "Materials tied to the Data Room",
        description:
          "Keep portal documents governed under the same control and version set.",
      },
      {
        icon: "search",
        title: "History by LP",
        description:
          "Maintain a clean record of updates sent and materials shared per investor.",
      },
      {
        icon: "chart",
        title: "Engagement visibility",
        description:
          "See which updates and materials were accessed to guide follow-ups.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Gate access through NDA Signing and share diligence materials in the Data Room.",
    ],
    afterTitle: "After this step…",
    after: [
      "Track progression to Commitment and keep post-close communications structured.",
    ],
  },

  socialProof: {
    quote:
      "LPs stopped asking for the latest deck. The portal kept materials current, and our team had a clean history of what was shared.",
    name: "Head of Investor Relations",
    title: "[Fund type]",
    company: "[$AUM]",
  },

  finalCta: {
    title: "Keep LP communication clean and controlled",
    description:
      "Publish updates and share materials from one portal—tied to permissions and investor history.",
    primaryCta: { label: "Try LP Portal free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};
