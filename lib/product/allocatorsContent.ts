import type { FeaturePageConfig } from "./featurePageTypes";

export const allocatorsContent: FeaturePageConfig = {
  navAnchors: [
    { id: "overview", label: "Overview" },
    { id: "challenges", label: "Challenges" },
    { id: "solution", label: "Solution" },
    { id: "faq", label: "FAQ" },
  ],
  hero: {
    id: "overview",
    eyebrow: "Allocator workflow platform",
    title: "Run allocator diligence in one workspace.",
    description:
      "CQ centralizes mandates, manager discovery, and diligence collaboration so allocator teams can qualify managers faster with complete visibility.",
    primaryCta: { label: "Request a demo", href: "/request-demo" },
    secondaryCta: { label: "Join waitlist", href: "/waitlist" },
    image: {
      src: "/images/home/Dummy-My-Deal-1.png",
      alt: "CQ workspace preview",
    },
  },
  customerProof: {
    heading: "Powering allocator teams.",
    subheading: "From family offices to pensions.",
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
    heading: "Where allocator workflows stall",
    items: [
      {
        title: "Scattered deal intake",
        body: "Invitations, decks, and manager notes live across inboxes and shared drives, so context gets lost.",
      },
      {
        title: "Limited manager context",
        body: "Comparing managers to mandates requires manual research, side emails, and tribal knowledge.",
      },
      {
        title: "Slow diligence cycles",
        body: "Document review, Q&A, and approvals happen in separate tools, delaying investment committee decisions.",
      },
      {
        title: "No real-time visibility",
        body: "Leaders can't see which managers are progressing or who owns the next step.",
      },
    ],
  },
  solution: {
    id: "solution",
    heading: "Solution",
    subheading: "See how allocator teams stay in sync from intake through diligence.",
    body: "Every step sits in one workspace so mandates, manager discovery, and approvals stay transparent for the entire allocator team.",
    features: [
      {
        title: "Mandate intake and routing",
        description:
          "Capture every inbound manager invitation with owners, tasks, and documents tied to one structured record.",
        bullets: [
          "Consolidate invitations, decks, and threads in one view",
          "Assign owners with due dates and reminders",
          "Maintain an audit trail of comments and files",
        ],
        image: {
          src: "/images/features/allocators/allocators-features-01.png",
          alt: "Centralized manager intake workspace",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "Mandate definitions drive sourcing",
        description:
          "Document allocator criteria once so sourcing stays aligned with strategy, structure, and risk targets.",
        bullets: [
          "Capture strategy, vehicle, geography, and check size",
          "Share mandate cards with IC and operations",
          "Use saved segments to prioritize outreach",
        ],
        image: {
          src: "/images/features/allocators/allocators-features-02.jpg",
          alt: "Mandate definition workflow",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "Allocator-grade manager network",
        description:
          "Filter 95K+ managers down to the few that match your mandate inputs with allocator-friendly data.",
        bullets: [
          "Search by mandate fit, track record, or vehicle",
          "View historical engagement notes and files",
          "Pin and compare managers for review",
        ],
        image: {
          src: "/images/features/allocators/allocators-features-03.jpg",
          alt: "Allocator-grade manager network",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "AI diligence briefs",
        description:
          "Summarize decks, DDQs, and data rooms into structured briefs that highlight risks and follow-ups.",
        bullets: [
          "Generate memos grounded in uploaded materials",
          "Highlight risks, follow-ups, and next steps",
          "Share outputs directly with stakeholders",
        ],
        image: {
          src: "/images/features/allocators/allocators-features-04.jpg",
          alt: "AI-assisted diligence briefs",
          width: 1200,
          height: 800,
        },
      },
      {
        title: "Ask AI across the data room",
        description:
          "Ask natural-language questions across the entire data room and get cited answers.",
        bullets: [
          "Reference DDQs, track records, and attachments in seconds",
          "Cited answers link straight to the source page",
          "Shorten the loop between research and decisions",
        ],
        image: {
          src: "/images/features/allocators/allocators-features-05.jpg",
          alt: "Ask AI across allocator data rooms",
          width: 1200,
          height: 800,
        },
      },
    ],
  },
  proof: {
    id: "proof",
    heading: "Allocator teams rely on CQ",
    intro:
      "CQ combines allocator expertise, a vetted manager network, and grounded AI so you can prioritize the right opportunities with confidence.",
    pillars: [
      {
        title: "Built with allocator operators",
        body: "Workflow patterns reflect decades of LP experience, covering intake, diligence, approvals, and reporting.",
      },
      {
        title: "Structure and control",
        body: "Granular permissions, audit trails, and standardized templates keep every stakeholder aligned.",
      },
      {
        title: "Grounded AI outputs",
        body: "Insights and answers stay tied to your data room, so teams can move faster without sacrificing rigor.",
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
    heading: "Give your allocator team one source of truth.",
    body: "See how CQ standardizes manager intake, diligence, and reporting so nothing slips through inboxes.",
    primaryCta: { label: "Request a demo", href: "/request-demo" },
    secondaryCta: { label: "Join waitlist", href: "/waitlist" },
  },
  otherProducts: {
    id: "other-products",
    heading: "Explore other CQ products",
    items: [
      {
        title: "Investor Database",
        body: "Discover and filter relevant managers at scale.",
        href: "/product/investor-database",
      },
      {
        title: "AI Investment Memo Generator",
        body: "Generate audit-ready memos from your documents in minutes.",
        href: "/product/investment-memos",
      },
      {
        title: "AI-powered Due Diligence",
        body: "Accelerate research with AI insights across deal materials.",
        href: "/product/due-diligence",
      },
      {
        title: "Data Room & Chatbot",
        body: "Share documents with permissions plus Ask AI.",
        href: "/product/data-room",
      },
      {
        title: "Pitch Deck Sharing",
        body: "Share decks with permissions and engagement tracking.",
        href: "/product/pitch-deck-sharing",
      },
    ],
  },
  resources: {
    id: "resources",
    heading: "Resources",
    useLatestInsights: true,
    count: 3,
    items: [],
  },
  faq: {
    id: "faq",
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How does CQ surface relevant managers?",
        answer:
          "Capture mandates with precise criteria and CQ highlights managers that match using proprietary data plus AI filtering.",
      },
      {
        question: "Can we track deal invitations end-to-end?",
        answer:
          "Yes. Intake every opportunity, assign owners, and keep documents, tasks, and notes inside one allocator workspace.",
      },
      {
        question: "How does AI support diligence?",
        answer:
          "Upload materials to the data room, then use AI to summarize decks, generate memos, and ask cited questions across the documents.",
      },
      {
        question: "How secure is my data?",
        answer:
          "CQ encrypts data in transit and at rest, provides granular permissions, and maintains detailed audit trails for every action.",
      },
      {
        question: "What support do CQ customers receive?",
        answer:
          "You get onboarding sessions, allocator playbooks, and a dedicated success partner to keep your team moving.",
      },
    ],
  },
  finalCta: {
    id: "final-cta",
    heading: "Make allocator diligence faster—without losing control.",
    body: "See how CQ centralizes mandates, manager intake, and AI diligence in one finance-grade platform.",
    primaryCta: { label: "Request a demo", href: "/request-demo" },
    secondaryCta: { label: "Join waitlist", href: "/waitlist" },
  },
};
