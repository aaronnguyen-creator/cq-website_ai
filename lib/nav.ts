// lib/nav.ts

export type NavLink = {
  title: string;
  description?: string;
  href: string;
  disabled?: boolean;
};

export type ProductMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: "lpDatabase" | "aiMatching" | "coldEmail" | "dataRoom" | "aiQa" | "nda" | "lpPortal" | "commitment";
  disabled?: boolean;
};

export type ProductMenuColumn = {
  title: string;
  items: ProductMenuItem[];
};

export type NavCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  disabled?: boolean;
};

export type NavConfig = {
  product: {
    title: string;
    description: string;
    columns: ProductMenuColumn[];
    footerCtas: Array<{
      label: string;
      href: string;
      disabled?: boolean;
    }>;
  };
  links: NavLink[]; // Pricing only (top-level)
  dropdowns: Array<{
    title: "Resources" | "Company";
    description: string;
    items: NavLink[];
  }>;
  ctas: NavCta[]; // desktop CTA group
};

export const navConfig: NavConfig = {
  product: {
    title: "Product",
    description: "Everything you need to run fundraising end-to-end.",
    columns: [
      {
        title: "Find Investors",
        items: [
          {
            icon: "lpDatabase",
            title: "LP Database",
            description: "150K+ investor profiles & mandates",
            href: "/product/lp-database",
          },
          {
            icon: "aiMatching",
            title: "AI Matching",
            description: "Score & rank investor fit",
            href: "/product/ai-matching",
          },
        ],
      },
      {
        title: "Reach & Engage",
        items: [
          {
            icon: "coldEmail",
            title: "Cold Email",
            description: "Personalized outreach sequences",
            href: "/product/cold-email",
          },
          {
            icon: "dataRoom",
            title: "Data Room",
            description: "Secure document sharing",
            href: "/product/data-room",
          },
          {
            icon: "aiQa",
            title: "AI Q&A",
            description: "24/7 investor question handling",
            href: "/product/ai-qa",
          },
        ],
      },
      {
        title: "Close Deals",
        items: [
          {
            icon: "nda",
            title: "NDA Signing",
            description: "Gate access without manual chasing",
            href: "/product/nda-signing",
          },
          {
            icon: "lpPortal",
            title: "LP Portal",
            description: "Branded investor experience",
            href: "/product/lp-portal",
          },
          {
            icon: "commitment",
            title: "Commitment Tracking",
            description: "From soft-circle to hard commit",
            href: "/product/commitment-tracking",
          },
        ],
      },
    ],
    footerCtas: [
      { label: "See Full Platform →", href: "/product" },
      { label: "Watch 2-Min Demo →", href: "/contact" },
    ],
  },

  links: [
    { title: "Pricing", href: "/pricing" },
  ],

  dropdowns: [
    {
      title: "Resources",
      description: "Guides and data to move faster.",
      items: [
        { title: "Insights", href: "/insights", description: "Research-backed essays." },
        { title: "Guides", href: "/guides", description: "Playbooks and how-tos.", disabled: true },
        { title: "Glossary", href: "/glossary", description: "Definitions curated for teams." },
        { title: "Database", href: "/database", description: "Firm + investor directories." },
        { title: "Help Center", href: "/help", description: "Docs and support.", disabled: true },
      ],
    },
    {
      title: "Company",
      description: "Who we are and what we’re building.",
      items: [
        { title: "About us", href: "/about", description: "Mission + team." },
        { title: "News", href: "/news", description: "Updates and announcements.", disabled: true },
        { title: "Contact", href: "/contact", description: "Talk to our team." },
      ],
    },
  ],

  ctas: [
    {
      label: "Start Free Trial",
      href: "/contact",
      variant: "primary",
    },
  ],
};