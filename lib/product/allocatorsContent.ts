import type { FeaturePageConfig } from "./featurePageTypes";

export const allocatorsContent: FeaturePageConfig = {
  navAnchors: [
    { id: "overview", label: "Overview" },
    { id: "challenges", label: "Challenges" },
    { id: "highlights", label: "Highlights" },
    { id: "faq", label: "FAQ" },
  ],
  hero: {
    id: "overview",
    eyebrow: "Investment Management Software",
    title: "Your Gateway to Tailored Investment Opportunities",
    description:
      "CQ equips investors and allocators with an all-in-one platform to streamline workflows, uncover tailored opportunities, and make data-driven decisions faster—combining AI-powered insights, an extensive manager network, and real-time market intelligence.",
    primaryCta: { label: "Join Our Waitlist", href: "/waitlist" },
    secondaryCta: { label: "Book a Demo", href: "/request-demo" },
    image: {
      src: "/images/allocators/hero.png",
      alt: "CQ Allocators workspace",
      width: 1600,
      height: 1000,
    },
  },
  trustBar: {
    id: "trust",
    title:
      "Used by investment professionals with experience from these world-class institutions",
    logos: [
      "Endowment",
      "Foundation",
      "Family Office",
      "Consultant",
      "Pension",
    ],
  },
  customerProof: {
    heading: "Powering investment teams.",
    subheading: "From emerging funds to established institutions.",
    cta: { label: "Meet our customers", href: "/customers" },
    logos: [
      { name: "Logo 1", src: "/logo-1.svg" },
      { name: "Logo 2", src: "/logo-2.svg" },
      { name: "Logo 3", src: "/logo-3.svg" },
      { name: "Logo 5", src: "/logo-5.svg" },
    ],
  },
  problem: {
    id: "challenges",
    heading: "The challenges investors face",
    items: [
      {
        title: "Fragmented Deal Tracking",
        body: "Keeping up with multiple deal invitations and updates can be time-consuming and disorganized.",
      },
      {
        title: "Limited Manager Insights",
        body: "Identifying managers that align with your mandates often requires significant manual effort.",
      },
      {
        title: "Slow Due Diligence",
        body: "Gathering and analyzing data for comprehensive assessments can stall decision-making.",
      },
      {
        title: "Information Overload",
        body: "Sifting through excessive materials without clear priorities delays actionable decisions.",
      },
    ],
  },
  solution: {
    id: "solution",
    heading: "How Can CQ Help?",
    subheading: "Maximize Returns with Smarter Tools",
    body: "CQ equips investors with an all-in-one platform to streamline workflows, uncover tailored opportunities, and make data-driven decisions faster.",
  },
  highlights: {
    id: "highlights",
    heading: "Platform highlights",
    features: [
      {
        title: "Centralized Opportunity Management",
        outcome: "Manage deal invitations, documents, and collaboration in one place.",
        bullets: [
          "Track deal invitations in a single hub",
          "Organize documents in a secure data room",
          "Collaborate with advanced investment analytics",
        ],
        image: {
          src: "/images/allocators/feature-1.png",
          alt: "Centralized opportunity management",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "Tailored Mandates",
        outcome: "Define criteria and connect with managers aligned to your strategy.",
        bullets: [
          "Set precise investment criteria",
          "Surface opportunities that match mandates",
          "Reduce manual sourcing effort",
        ],
        image: {
          src: "/images/allocators/feature-2.png",
          alt: "Tailored mandates",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "Extensive Manager Network",
        outcome: "Find relevant managers faster with deep filtering.",
        bullets: [
          "Access a database of 95K+ asset managers",
          "Use advanced filters to narrow matches",
          "Pinpoint opportunities tailored to mandates",
        ],
        image: {
          src: "/images/allocators/feature-3.png",
          alt: "Manager network",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "AI-Powered Due Diligence",
        outcome: "Accelerate research with instant, in-depth insights.",
        bullets: [
          "AI chatbot trained in alternative markets",
          "Instant answers from imported knowledge base",
          "Reduce decision-making delays",
        ],
        image: {
          src: "/images/allocators/feature-4.png",
          alt: "AI due diligence",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "Ask AI in the Data Room",
        outcome: "Extract actionable insights directly from shared documents.",
        bullets: [
          "Ask questions across deal materials",
          "Get instant, grounded answers",
          "Save time and make data-driven decisions",
        ],
        image: {
          src: "/images/allocators/feature-5.png",
          alt: "Ask AI in the data room",
          width: 1200,
          height: 800,
        },
      },
    ],
  },
  proof: {
    id: "proof",
    heading: "Profitable Investors Rely on CQ",
    intro:
      "CQ combines decades of industry expertise, tailored tools for accelerated growth, and advanced AI to help investors identify high-potential opportunities and maximize returns.",
    pillars: [
      {
        title: "Built on Decades of Expertise",
        body: "Created by industry veterans with deep knowledge of alternative investments—tailored to investor needs.",
      },
      {
        title: "Tailored to Accelerate Your Growth",
        body: "From deal tracking to due diligence, CQ helps you identify opportunities faster and align them with your preferences.",
      },
      {
        title: "AI-Powered Precision for Greater Returns",
        body: "Actionable insights that surface opportunities aligned to your strategy—helping you stay ahead in competitive markets.",
      },
    ],
  },
  testimonials: {
    id: "testimonials",
    heading: "What leaders are saying",
    items: [],
  },
  ctaBand: {
    id: "cta-mid",
    heading: "Seize profitable opportunities quickly.",
    body: "Discover smarter, faster ways to connect with opportunities. Contact us today to elevate your investment process.",
    primaryCta: { label: "Join Our Waitlist", href: "/waitlist" },
    secondaryCta: { label: "Book a Demo", href: "/request-demo" },
  },
  otherProducts: {
    id: "other-products",
    heading: "Explore other CQ products",
    items: [
      {
        title: "Investor Database",
        body: "Discover and filter relevant investors/managers at scale.",
        href: "/product/investor-database",
      },
      {
        title: "AI Investment Memo Generator",
        body: "Generate structured memos from your documents in minutes.",
        href: "/product/investment-memos",
      },
      {
        title: "AI-powered Due Diligence",
        body: "Accelerate research with AI insights across deal materials.",
        href: "/product/due-diligence",
      },
      {
        title: "Data Room & Chatbot",
        body: "Secure document sharing with Ask AI on top.",
        href: "/product/data-room",
      },
      {
        title: "Pitch Deck Sharing",
        body: "Share decks with tracking and controlled access.",
        href: "/product/pitch-deck-sharing",
      },
    ],
  },
  resources: {
    id: "resources",
    heading: "Resources",
    items: [
      {
        title: "Allocator diligence workflow (guide)",
        href: "/resources/allocator-workflow",
      },
      {
        title: "How to define mandates for manager discovery",
        href: "/resources/define-mandates",
      },
      {
        title: "Security & auditability overview",
        href: "/resources/security-overview",
      },
    ],
  },
  faq: {
    id: "faq",
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How does CQ help me find relevant opportunities?",
        answer:
          "Define mandates with precise criteria and CQ surfaces managers that match your objectives using proprietary data and AI-driven insights.",
      },
      {
        question: "Can I track my deal invitations in CQ?",
        answer:
          "Yes. Consolidate deal invitations, documents, and collaboration threads inside a single, secure workspace.",
      },
      {
        question: "How does the due diligence process work on CQ?",
        answer:
          "Upload materials to the data room, invite stakeholders, and use Ask AI to interrogate documents for grounded answers.",
      },
      {
        question: "How secure is my data?",
        answer:
          "CQ encrypts data in transit and at rest, provides granular permissions, and maintains detailed audit trails for every action.",
      },
      {
        question: "What type of support does CQ offer for Allocators?",
        answer:
          "You receive onboarding support, best-practice playbooks, and dedicated success resources to ensure your team gets value quickly.",
      },
    ],
  },
  finalCta: {
    id: "final-cta",
    heading: "Make allocator diligence faster—without losing control.",
    body: "See how CQ centralizes opportunities, accelerates diligence, and supports better investment decisions.",
    primaryCta: { label: "Join Our Waitlist", href: "/waitlist" },
    secondaryCta: { label: "Book a Demo", href: "/request-demo" },
  },
};
