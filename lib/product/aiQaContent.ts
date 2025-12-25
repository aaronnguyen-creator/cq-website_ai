// lib/product/aiQaContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const aiQaContent: FeaturePageConfig = {
  slug: "ai-qna",

  hero: {
    eyebrow: "AI Q&A",
    title: "24/7 diligence answers, grounded in your docs",
    highlight: ["24/7", "grounded"],
    valueProp:
      "Let LPs and your team ask questions against your Data Room—then share source-linked answers with full context and control.",
    primaryCta: { label: "Try AI Q&A free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/ai-qna/hero.png",
      alt: "AI Q&A chat with citations and permission-aware sharing",
    },
  },

  problem: {
    eyebrow: "WITHOUT CQ",
    title: "Without CQ, diligence Q&A turns into slow, repetitive back-and-forth.",
    subhead:
      "The same questions get answered in different threads, with no source trail—and response time becomes a bottleneck.",
    cards: [
      {
        title: "Repeated questions",
        description:
          "The same “where is this?” comes up across LPs and cycles.",
      },
      {
        title: "Answers aren’t source-linked",
        description:
          "Responses live in email, not tied to the underlying document.",
      },
      {
        title: "Knowledge isn’t reusable",
        description:
          "Q&A doesn’t compound—teams re-explain the same points every raise.",
      },
      {
        title: "Response time stalls momentum",
        description:
          "Delays push meetings out and slow stage progression.",
      },
      {
        title: "Context gets lost",
        description:
          "New team members can’t see what was asked, answered, and accepted.",
      },
      {
        title: "Hard to stay controlled",
        description:
          "Sharing answers can accidentally expose the wrong material or version.",
      },
    ],
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Connect Q&A to your Data Room",
        description:
          "Point AI Q&A at the exact folders and documents you want it to use.",
        media: {
          type: "image",
          src: "/images/product/ai-qna/step-1.png",
          alt: "Select room/folders and scope settings",
        },
      },
      {
        title: "Ask a diligence question",
        description:
          "Get a direct answer with citations back to specific documents and sections.",
        media: {
          type: "image",
          src: "/images/product/ai-qna/step-2.png",
          alt: "Question to answer with cited sources",
        },
      },
      {
        title: "Package the response for sharing",
        description:
          "Share an answer (and its sources) with the right LP—without forwarding raw threads.",
        media: {
          type: "image",
          src: "/images/product/ai-qna/step-3.png",
          alt: "Share to LP with permission-aware view",
        },
      },
      {
        title: "Keep an audit-ready record",
        description:
          "Track what was asked, what was answered, and what sources were referenced.",
        media: {
          type: "image",
          src: "/images/product/ai-qna/step-4.png",
          alt: "Q&A history log tied to LP timeline",
        },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      {
        icon: "file",
        title: "Source-linked answers",
        description:
          "Every response references the underlying documents so teams can verify fast.",
      },
      {
        icon: "shield",
        title: "Scoped access by room and folder",
        description:
          "Limit Q&A to approved materials to keep answers aligned with what’s been shared.",
      },
      {
        icon: "workflow",
        title: "Reusable Q&A history",
        description:
          "Keep prior questions and answers tied to the deal and LP timeline for repeatability.",
      },
      {
        icon: "sparkles",
        title: "Shareable responses",
        description:
          "Send answers in a controlled format—without copy/pasting across email threads.",
      },
      {
        icon: "search",
        title: "Version-aware clarity",
        description:
          "Keep answers aligned to the current document set to reduce version confusion.",
      },
      {
        icon: "shield",
        title: "Permission-aligned delivery",
        description:
          "Ensure LPs only see answers based on materials they’re allowed to access.",
      },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Share materials through Data Room, with the right permissions and NDA gating.",
    ],
    afterTitle: "After this step…",
    after: [
      "Move qualified LPs into NDA Signing, then track Commitment and follow through in LP Portal.",
    ],
  },

  socialProof: {
    quote:
      "AI Q&A cut the back-and-forth during diligence. The citations made answers easy to trust, and our team stayed consistent across LPs.",
    name: "Head of Investor Relations",
    title: "[Fund type]",
    company: "[$AUM]",
  },

  finalCta: {
    title: "Keep diligence moving—even after hours",
    description:
      "Ask questions against your Data Room and share source-linked answers in minutes.",
    primaryCta: { label: "Try AI Q&A free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
  },
};
