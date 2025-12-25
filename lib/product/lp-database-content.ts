// lib/product/allocatorsContent.ts
import type { FeaturePageConfig } from "./featurePageTypes";

export const allocatorsContent: FeaturePageConfig = {
  slug: "lp-database",

  hero: {
    eyebrow: "LP Database",
    title: "Your LP list, structured",
    highlight: ["LP list"],
    valueProp: "Find mandate-fit LPs and build a target list your team can execute.",
    primaryCta: { label: "Try LP Database free", href: "/contact" },
    secondaryCta: { label: "See full platform", href: "/product" },
    media: {
      type: "image",
      src: "/images/product/allocators/hero.png",
      alt: "Allocator workflow in CQ",
    },
  },

  problem: {
  eyebrow: "WITHOUT CQ",
  title: "Without CQ...",
  subhead:
    "Fundraising and diligence live across inboxes, spreadsheets, and disconnected tools—slowing execution and increasing risk.",
  cards: [
    { title: "Lists go stale", description: "LP data lives in spreadsheets that don’t stay current across raises." },
    { title: "Fit is hard to prove", description: "Mandate notes and “why this LP” context get lost in personal docs and threads." },
    { title: "Segmentation breaks", description: "Fund I vs Fund II targeting, check size bands, and geo splits require manual rebuilds." },
    { title: "Outreach hits the wrong LPs", description: "Teams waste cycles emailing allocators who will never be a mandate fit." },
    { title: "Ownership isn’t clear", description: "Relationship history, warm paths, and who owns follow-ups aren’t tracked consistently." },
    { title: "No clean handoff", description: "Targets don’t flow cleanly into outreach and pipeline—so execution slows before it starts." },
  ],
},

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Define your ICP filters",
        description: "Set mandate, strategy, geography, check size, and investor type.",
        media: { type: "image", src: "/images/product/allocators/step-1.png", alt: "Collect" },
      },
      {
        title: "Review profiles and capture fit notes",
        description: "Log why an LP is a fit, what to avoid, and who owns the relationship.",
        media: { type: "image", src: "/images/product/allocators/step-2.png", alt: "AI extract" },
      },
      {
        title: "Build and save target lists",
        description: "Create segments for Fund I vs Fund II, region splits, or ticket ranges.",
        media: { type: "image", src: "/images/product/allocators/step-3.png", alt: "Audit" },
      },
      {
        title: "Hand off to outreach",
        description: "Push targets into your pipeline with owners and next steps.",
        media: { type: "image", src: "/images/product/allocators/step-4.png", alt: "Report" },
      },
    ],
  },

  capabilities: {
    title: "Key capabilities",
    items: [
      { icon: "search", title: "Mandate-fit filtering", description: "Filter LPs by strategy, geography, investor type, and check size to match your fund’s mandate." },
      { icon: "sparkles", title: "Structured LP profiles", description: "Capture fit signals, constraints, notes, and relationship context in a consistent profile format." },
      { icon: "workflow", title: "Tags and segmentation", description: "Tag LPs and build segments for prioritization and repeatable targeting across raises." },
      { icon: "file", title: "Ownership and activity history", description: "Track who owns the relationship and keep touchpoints tied to the LP record." },
      { icon: "shield", title: "Saved target lists", description: "Save lists for Fund I vs Fund II, regions, or ticket bands—ready to reuse and refine." },
      { icon: "shield", title: "Handoff to outreach", description: "Move targets into outreach with owners and next steps, without reformatting spreadsheets." },
    ],
  },

  workflowIntegration: {
    title: "Integration with your workflow",
    beforeTitle: "Before this step…",
    before: [
      "Managers send materials via email → lost context.",
      "Diligence notes live in separate docs → no single truth.",
      "Approvals happen in Slack → no compliance trail.",
    ],
    afterTitle: "After this step…",
    after: [
      "All manager data sits in one structured record.",
      "Diligence Q&A + tasks are centralized and accountable.",
      "Approvals and outputs are exportable + audit-friendly.",
    ],
  },

  socialProof: {
    quote:
      "We stopped rebuilding target lists every quarter. The LP Database keeps fit notes and segmentation clean, so outreach stays focused.",
    name: "Jenna Wells",
    title: "Partner",
    company: "Northwind Capital",
    avatarSrc: "/images/home/testimonial-1.svg",
  },

  finalCta: {
    title: "Build your target list today.",
    description: "Centralize LP profiles, segmentation, and ownership in one place.",
    primaryCta: { label: "Try Free", href: "/contact" },
    secondaryCta: { label: "See Full Platform", href: "/product" },
  },
};
