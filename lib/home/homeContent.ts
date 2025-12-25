// lib/home/homeContent.ts
import type { HomeContent } from "./types";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "AI-POWERED FUNDRAISING OS",
    title: "Run fundraising in one system of record",
    description:
      "CQ centralizes your investor pipeline, diligence, and closes in structured workflows. Keep every task, document, and decision tied to the right LP.",
    primaryCta: { label: "Start free trial", href: "/contact" },
    secondaryCta: { label: "Request a demo", href: "/contact" },

    proofLabel: "Trusted by emerging managers raising their first funds",
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
        image: {
          src: "/images/features/ai-summary.png",
          alt: "AI summary",
        },
      },
    ],
  },

  products: {
    title: "Fundraising workflows, built for investment teams",
    items: [
      {
        title: "Investor targeting",
        description:
          "BBuild a mandate-fit LP list by strategy, check size, and geography.",
        href: "/product/lp-database",
      },
      {
        title: "Outreach & Pipeline",
        description:
          "Run outbound and track motion by stage without spreadsheet drift. ",
        href: "/product/data-room",
      },
      {
        title: "Diligence & intelligence",
        description:
          "Turn materials into structured takeaways and IC-ready drafts.",
        href: "/product/due-diligence",
      },
      {
        title: "Document management",
        description:
          "Manage permissions, NDAs, and access history in one place.",
        href: "/product/investor-database",
      },
      {
        title: "IC & Approvals",
        description:
          "Track decisions, approvals, and follow-ups without losing context.",
        href: "/product/investment-memos",
      },
      {
        title: "Closing & LP reporting",
        description: "Track soft-circled vs hard commits through close.",
        href: "/product/pitch-deck-sharing",
      },
    ],
  },

  // ✅ UPDATED: Outcomes now uses the “Speed & Simplicity” content for your slider
  outcomes: {
    title: "2 hours to your first LP email. Not 2 months.",
    description:
      "Upload your deck, get ranked LP matches, and launch outreach—without stitching together five tools.",
    cards: [
      {
        title: "Upload deck",
        description:
          "Drop your pitch + materials once. CQ keeps them organized and ready for diligence.",
        image: {
          src: "/images/home/speed-upload-deck.png",
          alt: "Upload deck in CQ",
        },
      },
      {
        title: "CQ finds 50 matching LPs",
        description:
          "Match by mandate fit, check size, and constraints—so targeting starts ranked, not guessed.",
        image: {
          src: "/images/home/speed-matching-lps.png",
          alt: "Ranked LP matches in CQ",
        },
      },
      {
        title: "Send first emails",
        description:
          "Launch personalized outreach from your list, track replies, and keep next steps tied to each LP.",
        image: {
          src: "/images/home/speed-send-emails.png",
          alt: "Cold email sequences and reply tracking in CQ",
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
    title: "Ready to find your LPs?",
    description:
      "See how CQ brings investor targeting, diligence, and reporting into one finance-grade workspace.",
    primaryCta: { label: "Start free trial", href: "/contact" },
    secondaryCta: { label: "Talk to us", href: "/contact" },
  },

  resources: {
    title: "Latest insights",
    source: "insightsNewest",
    count: 3,
  },
};
