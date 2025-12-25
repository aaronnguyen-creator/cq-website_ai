// lib/product/dataRoomContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const dataRoomContent: FeaturePageConfig = {
  slug: "data-room",

  hero: {
    eyebrow: "Data Room",
    title: "Control who sees what—and prove it",
    highlight: ["Control", "prove it"],
    valueProp:
      "Share fundraising materials with granular permissions, NDA gating, and access history tied to each LP.",
    primaryCta: { label: "Try Data Room free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/data-room/hero.png",
      alt: "Data Room with folders, LP-level permissions, and access activity log",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ, document sharing creates risk and version chaos.",
    subhead:
      "Decks and diligence docs get emailed, duplicated, and forwarded—so control breaks and the access trail disappears.",
    cards: [
      {
        title: "Links get forwarded",
        description:
          "You lose control once materials leave the original thread.",
      },
      {
        title: "Versions drift",
        description:
          "LPs see different decks depending on who sent them.",
      },
      {
        title: "NDA gating is manual",
        description:
          "Teams chase signatures before sharing the right folder.",
      },
      {
        title: "No clean access trail",
        description:
          "It’s hard to prove what was shared, viewed, and when.",
      },
      {
        title: "Permissions don’t scale",
        description:
          "Investor-by-investor access rules are hard to maintain in shared drives.",
      },
      {
        title: "Diligence gets fragmented",
        description:
          "Requests, uploads, and follow-ups scatter across email threads.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Create a fundraising room",
        description:
          "Organize materials by stage (teaser, deck, DDQ, financials, legal).",
        media: {
          type: "image",
          src: "/images/product/data-room/step-1.png",
          alt: "Room setup and folder structure",
        },
      },
      {
        title: "Set LP-level access",
        description:
          "Assign permissions by investor, group, or role—down to folders and files.",
        media: {
          type: "image",
          src: "/images/product/data-room/step-2.png",
          alt: "Permissions panel for LP access settings",
        },
      },
      {
        title: "Gate sensitive folders with an NDA",
        description:
          "Require signed NDAs before revealing specific documents.",
        media: {
          type: "image",
          src: "/images/product/data-room/step-3.png",
          alt: "NDA gating rule applied to sensitive folders",
        },
      },
      {
        title: "Track access and activity",
        description:
          "See who viewed what, and keep an audit-ready record tied to the LP timeline.",
        media: {
          type: "image",
          src: "/images/product/data-room/step-4.png",
          alt: "Access activity log tied to an LP timeline",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "shield",
        title: "Granular permissions",
        description:
          "Control access by LP, team member, or role—down to folders and files.",
      },
      {
        icon: "file",
        title: "NDA-based gating",
        description:
          "Require signed NDAs before granting access to sensitive materials.",
      },
      {
        icon: "chart",
        title: "Access history and audit trail",
        description:
          "Track views and activity with a record tied to the investor timeline.",
      },
      {
        icon: "workflow",
        title: "Version control by design",
        description:
          "Maintain one controlled set of materials so the right deck stays in circulation.",
      },
      {
        icon: "search",
        title: "Structured diligence library",
        description:
          "Keep DDQs, financials, and legal docs organized for fast, consistent review.",
      },
      {
        icon: "shield",
        title: "Investor-specific views",
        description:
          "Tailor what each LP sees without duplicating files.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Move qualified LPs from Cold Email into diligence with the right context and owners.",
    ],
    afterTitle: "After this step…",
    after: [
      "Use AI Q&A to handle document questions, then progress to NDA Signing and Commitment tracking.",
    ],
  },

  socialProof: {
    quote:
      "We finally had control over what each LP saw. The access history reduced back-and-forth and kept diligence clean.",
    name: "Head of Investor Relations",
    title: "[Fund type]",
    company: "[$AUM]",
  },

  finalCta: {
    title: "Share diligence docs without losing control",
    description:
      "Start with full Pro access for 14 days. Keep permissions, access history, and investor context in one system of record.",
    primaryCta: { label: "Try Data Room free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};
