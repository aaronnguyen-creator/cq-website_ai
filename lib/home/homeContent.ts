import type { HomeContent } from "./types";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "AI-powered fundraising workspace",
    title: "Run fundraising with clarity.",
    description:
      "CQ centralizes investor discovery, diligence, and collaboration so alternative investment teams can move from outreach to close with less friction.",
    primaryCta: { label: "Request a demo", href: "/contact" },
    secondaryCta: { label: "Join the waitlist", href: "/contact" },
    proofLabel: "Trusted by alternative investment teams",
    proofLogos: [
      { name: "Allocator Firm", src: "/logo-1.svg" },
      { name: "Family Office", src: "/logo-2.svg" },
      { name: "Endowment", src: "/logo-3.svg" },
      { name: "Institutional", src: "/logo-5.svg" },
    ],
    heroImage: {
      src: "/images/home/CQ_platform.png",
      alt: "CQ fundraising workspace preview",
    },
  },
  benefitsIntro: {
    title: "Bring every fundraising motion into one system",
    description:
      "Give your team a shared workflow for investor targeting, diligence, and reporting—with audit-ready context at each step.",
    items: [
      {
        title: "Structured pipelines keep mandates, tasks, and approvals aligned.",
        image: {
          src: "/images/features/structure-pipeline.png",
          alt: "Structured fundraising workflow",
        },
      },
      {
        title: "Investor intelligence surfaces context before every conversation.",
        image: {
          src: "/images/features/deal-context.png",
          alt: "Investor intelligence view",
        },
      },
      {
        title: "AI summaries cut time spent on memos, notes, and diligence recaps.",
        image: { src: "/images/features/ai-summary.png", alt: "AI summary" },
      },
    ],
  },
  products: {
    title: "Explore the CQ platform",
    items: [
      {
        title: "Allocators",
        description:
          "Map LP mandates, assign owners, and keep outreach accountable.",
        href: "/product/allocators",
      },
      {
        title: "Data Room",
        description:
          "Share diligence files with permissions, analytics, and audit logs.",
        href: "/product/data-room",
      },
      {
        title: "Due Diligence",
        description:
          "Capture Q&A, comments, and approvals without leaving the workspace.",
        href: "/product/due-diligence",
      },
      {
        title: "Investor Database",
        description:
          "Search investors by mandate, strategy, geography, and check size.",
        href: "/product/investor-database",
      },
      {
        title: "Investment Memos",
        description:
          "Draft structured memos with AI and keep them linked to the data room.",
        href: "/product/investment-memos",
      },
      {
        title: "Pitch Deck Sharing",
        description: "Distribute trackable decks and get alerts when LPs engage.",
        href: "/product/pitch-deck-sharing",
      },
    ],
  },
  outcomes: {
    title: "Outcomes investment teams can count on",
    description:
      "CQ unifies investor intelligence, workflows, and collaboration so you see the full fundraising lifecycle in one system.",
    cards: [
      {
        title: "Structured deal visibility",
        description: "View mandates, tasks, and blockers at a glance.",
        image: {
          src: "/images/home/Structured_deal_visibility.png",
          alt: "Structured deal visibility",
        },
      },
      {
        title: "Sharper investor targeting",
        description:
          "Filter allocators by mandate fit, geography, and relationship history.",
        image: {
          src: "/images/home/Sharper investor targeting.png",
          alt: "Investor targeting tools",
        },
      },
      {
        title: "AI-assisted diligence",
        description:
          "Turn decks and data rooms into instant answers, summaries, and memos.",
        image: {
          src: "/images/home/AI-assisted diligence.png",
          alt: "AI diligence assistant",
        },
      },
      {
        title: "Secure collaboration",
        description:
          "Invite LPs with guardrails, audit logs, and message history in one place.",
        image: {
          src: "/images/home/Secure_collaboration.png",
          alt: "Secure collaboration",
        },
      },
      {
        title: "Faster memo creation",
        description:
          "Generate first drafts instantly and edit with your team's commentary.",
        image: { src: "/images/home/Faster_memo_creation.png", alt: "Memo creation" },
      },
      {
        title: "Audit-ready history",
        description: "Retain updates, files, and approvals for every mandate.",
        image: {
          src: "/images/home/Audit_ready.png",
          alt: "Audit-ready history",
        },
      },
    ],
  },
  testimonials: {
    title: "What teams say about CQ",
    items: [
      {
        quote:
          "CQ replaced our spreadsheets, CRM, and data room vendor with one pipeline our partners trust.",
        name: "Jenna Wells",
        title: "Partner",
        company: "Northwind Capital",
        avatar: "/images/home/testimonial-1.svg",
      },
      {
        quote:
          "We launch diligence rooms in minutes and keep every answer, approval, and comment traceable.",
        name: "Andre Marsh",
        title: "Head of Diligence",
        company: "Atlas Ridge",
        avatar: "/images/home/testimonial-2.svg",
      },
      {
        quote:
          "The AI copilots turn decks into clean memos so our associates focus on analysis, not busy work.",
        name: "Claire Bennett",
        title: "Principal",
        company: "Crescent Peak",
        avatar: "/images/home/testimonial-3.svg",
      },
      {
        quote:
          "CQ gives us a single source of truth for investor updates, deal status, and response trails.",
        name: "Michael Ortez",
        title: "COO",
        company: "Harbor Grove",
        avatar: "/images/home/testimonial-4.svg",
      },
    ],
  },
  ctaBox: {
    title: "Ready to run fundraising with clarity?",
    description:
      "See how CQ brings investor targeting, diligence, and reporting into one finance-grade workspace.",
    primaryCta: { label: "Request a demo", href: "/contact" },
    secondaryCta: { label: "Join the waitlist", href: "/contact" },
  },
  resources: {
    title: "Latest insights",
    source: "insightsNewest",
    count: 3,
  },
};
