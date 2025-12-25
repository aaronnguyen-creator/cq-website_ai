// lib/product/ndaSigningContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const ndaSigningContent: FeaturePageConfig = {
  slug: "nda-signing",

  hero: {
    eyebrow: "NDA Signing",
    title: "Get NDAs signed, then unlock the right docs",
    highlight: ["NDAs", "unlock"],
    valueProp:
      "Request, track, and store NDAs tied to each LP—so sensitive materials stay gated and diligence stays controlled.",
    primaryCta: { label: "Try NDA Signing free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/nda-signing/hero.png",
      alt: "NDA request flow, status tracking, and gated folder toggle",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ, NDAs slow diligence and create access risk.",
    subhead:
      "Signing happens in email threads—so status is unclear, docs get shared too early, and the record is hard to audit.",
    cards: [
      {
        title: "Manual chasing",
        description:
          "Teams follow up across threads to get signatures back.",
      },
      {
        title: "Status is unclear",
        description:
          "No single view of pending, signed, and expired NDAs by LP.",
      },
      {
        title: "Premature sharing risk",
        description:
          "Sensitive docs get sent before the NDA is executed.",
      },
      {
        title: "Wrong version risk",
        description:
          "Different NDA templates circulate across contacts and cycles.",
      },
      {
        title: "Weak audit trail",
        description:
          "It’s hard to prove who signed what, and when.",
      },
      {
        title: "Poor handoff internally",
        description:
          "Ops, IR, and deal teams can’t see the same NDA state in real time.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Choose the NDA template",
        description:
          "Select the right template for the raise or investor type.",
        media: {
          type: "image",
          src: "/images/product/nda-signing/step-1.png",
          alt: "NDA template selector",
        },
      },
      {
        title: "Send for signature to the right contacts",
        description:
          "Route the NDA to the LP contact(s) tied to the investor record.",
        media: {
          type: "image",
          src: "/images/product/nda-signing/step-2.png",
          alt: "Send flow with contact selection",
        },
      },
      {
        title: "Track status and follow-ups",
        description:
          "See pending vs signed at a glance, with reminders tied to ownership.",
        media: {
          type: "image",
          src: "/images/product/nda-signing/step-3.png",
          alt: "Status tracker and follow-up tasks",
        },
      },
      {
        title: "Gate document access automatically",
        description:
          "Unlock Data Room folders only after the NDA is signed.",
        media: {
          type: "image",
          src: "/images/product/nda-signing/step-4.png",
          alt: "Gated folder rule linked to NDA status",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "file",
        title: "NDA requests tied to LP records",
        description:
          "Keep every request linked to the investor, contacts, and timeline.",
      },
      {
        icon: "search",
        title: "Status tracking in one view",
        description:
          "See pending, signed, and completed NDAs without searching inbox threads.",
      },
      {
        icon: "workflow",
        title: "Template consistency",
        description:
          "Standardize which NDA version is used for a given raise or workflow.",
      },
      {
        icon: "shield",
        title: "Access gating rules",
        description:
          "Control when sensitive folders and files become visible based on signature status.",
      },
      {
        icon: "file",
        title: "Signed NDA storage",
        description:
          "Store executed NDAs alongside the deal record for fast retrieval.",
      },
      {
        icon: "shield",
        title: "Audit-ready history",
        description:
          "Maintain a clear record of who signed, when, and what changed.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Share initial materials through Data Room and run AI Q&A for early diligence questions.",
    ],
    afterTitle: "After this step…",
    after: [
      "Expand access to deeper diligence folders, then move to LP Portal and Commitment tracking.",
    ],
  },

  socialProof: {
    quote:
      "NDA status used to live in email. Now it’s tied to the LP record, and the data room access rules keep us consistent.",
    name: "COO",
    title: "[Fund type]",
    company: "[$AUM]",
  },

  finalCta: {
    title: "Stop gating diligence in email threads",
    description:
      "Send NDAs, track status, and unlock the right materials—without losing control.",
    primaryCta: { label: "Try NDA Signing free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};