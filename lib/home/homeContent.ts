import type { HomeContent } from "./types";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "AI-powered fundraising management",
    title: "Streamline fundraising and maximize opportunities with CQ.",
    description:
      "CQ is an AI-powered fundraising management platform designed to simplify alternative investments.",
    primaryCta: { label: "Join the waitlist", href: "/waitlist" },
    secondaryCta: { label: "Request a demo", href: "/request-demo" },
    proofLabel: "Trusted by investment teams",
    proofLogos: [
      { name: "Allocator Firm", src: "/logo-1.svg" },
      { name: "Family Office", src: "/logo-2.svg" },
      { name: "Endowment", src: "/logo-3.svg" },
      { name: "Institutional", src: "/logo-5.svg" },
    ],
    heroImage: {
      src: "/images/home/Dummy-My-Deal-1.png",
      alt: "CQ platform preview",
    },
  },
  benefitsIntro: {
    title: "Streamline Fundraising and Maximize Opportunities with CQ",
    description:
      "CQ is an AI-powered fundraising management platform designed to simplify alternative investments.",
    items: [
      {
        title: "Simplifies deal workflows for seamless operations.",
        image: { src: "/images/home/benefit-1.svg", alt: "Deal workflows" },
      },
      {
        title: "Uncovers opportunities to maximize returns.",
        image: { src: "/images/home/benefit-2.svg", alt: "Opportunity insights" },
      },
      {
        title: "An all-in-one platform to close deals 10X faster.",
        image: { src: "/images/home/benefit-3.svg", alt: "Closing deals" },
      },
    ],
  },
  products: {
    title: "Explore the CQ platform",
    items: [
      {
        title: "Allocators",
        description: "Centralize mandates and manage allocations with confidence.",
        href: "/product/allocators",
      },
      {
        title: "Data Room",
        description: "Secure data rooms with embedded AI-powered context.",
        href: "/product/data-room",
      },
      {
        title: "Due Diligence",
        description: "Orchestrate diligence workflows and approvals in one place.",
        href: "/product/due-diligence",
      },
      {
        title: "Investor Database",
        description: "Access enriched investor profiles to expand relationships.",
        href: "/product/investor-database",
      },
      {
        title: "Investment Memos",
        description: "Generate structured memos with AI drafting assistants.",
        href: "/product/investment-memos",
      },
      {
        title: "Pitch Deck Sharing",
        description: "Share trackable decks with live analytics.",
        href: "/product/pitch-deck-sharing",
      },
    ],
  },
  outcomes: {
    title: "Achieve Better Outcomes with CQ",
    description:
      "With deep expertise in alternative investments, CQ simplifies every step of your fundraising journey—streamlining deal management, investor connections, and due diligence.",
    cards: [
      {
        title: "Effortless Matchmaking and Fundraising",
        description:
          "Simplify fundraising with AI-powered tools that manage the full deal lifecycle for faster closures.",
        image: { src: "/images/home/outcome-1.svg", alt: "Matchmaking" },
      },
      {
        title: "Enhanced Investor Targeting and Visibility",
        description:
          "Access an enriched database, boost visibility, and connect with the right investors using premium tools.",
        image: { src: "/images/home/outcome-2.svg", alt: "Investor targeting" },
      },
      {
        title: "Smarter, Efficient Workflows",
        description:
          "Streamline due diligence, memos, and admin tasks with AI-assisted tools, focusing on high-impact relationships.",
        image: { src: "/images/home/outcome-3.svg", alt: "Efficient workflows" },
      },
      {
        title: "Centralized Deal Invitations",
        description:
          "Streamline workflows with a single platform for deal invitations, data rooms, and organized collaboration.",
        image: { src: "/images/home/outcome-4.svg", alt: "Deal invitations" },
      },
      {
        title: "AI-Driven Deal Insights",
        description:
          "Use an AI chatbot to analyze documents, uncover insights, and make smarter decisions faster.",
        image: { src: "/images/home/outcome-5.svg", alt: "Deal insights" },
      },
      {
        title: "Customized Mandates & Manager Discovery",
        description:
          "Create tailored mandates and discover managers with a dynamic database aligned with your strategy.",
        image: { src: "/images/home/outcome-6.svg", alt: "Mandate discovery" },
      },
    ],
  },
  testimonials: {
    title: "What teams say about CQ",
    items: [
      {
        quote:
          "CQ connects our investor mandates with a living pipeline and replaces three separate tools with one streamlined process.",
        name: "Jenna Wells",
        title: "Partner",
        company: "Northwind Capital",
        avatar: "/images/home/testimonial-1.svg",
      },
      {
        quote:
          "Our team can spin up diligence workspaces in minutes and invite stakeholders with clear guardrails.",
        name: "Andre Marsh",
        title: "Head of Diligence",
        company: "Atlas Ridge",
        avatar: "/images/home/testimonial-2.svg",
      },
      {
        quote:
          "The AI copilots surface insights from decks and data rooms instantly—saving hours per memo.",
        name: "Claire Bennett",
        title: "Principal",
        company: "Crescent Peak",
        avatar: "/images/home/testimonial-3.svg",
      },
      {
        quote:
          "We finally have a single source of truth for investor updates, deal status, and ask/answer trails.",
        name: "Michael Ortez",
        title: "COO",
        company: "Harbor Grove",
        avatar: "/images/home/testimonial-4.svg",
      },
    ],
  },
  ctaBox: {
    title: "Ready to move faster with CQ?",
    primaryCta: { label: "Join the waitlist", href: "/waitlist" },
    secondaryCta: { label: "Request a demo", href: "/request-demo" },
  },
  resources: {
    title: "Resources",
    source: "insightsNewest",
    count: 3,
  },
};
