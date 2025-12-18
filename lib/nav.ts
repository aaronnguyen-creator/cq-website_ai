export type NavItem = {
  title: string;
  description: string;
  href: string;
  items?: Array<{
    title: string;
    description: string;
    href: string;
  }>;
};

export type NavCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export const navConfig: {
  links: NavItem[];
  ctas: NavCta[];
} = {
  links: [
    {
      title: "Product",
      description: "Explore tailored solutions for every team.",
      href: "/product",
      items: [
        {
          title: "Allocators",
          description: "Consolidate mandates and streamline allocation reviews.",
          href: "/product/allocators",
        },
        {
          title: "Asset Managers",
          description: "Track fundraising workflows and investor engagement in one place.",
          href: "/product/asset-managers",
        },
        {
          title: "Data Room",
          description: "Securely share diligence-ready materials with investors.",
          href: "/product/data-room",
        },
        {
          title: "Due Diligence",
          description: "Coordinate diligence requests and stakeholders with structured checklists.",
          href: "/product/due-diligence",
        },
        {
          title: "Investor Database",
          description: "Search global LP profiles, mandates, and contact data.",
          href: "/product/investor-database",
        },
        {
          title: "Investment Memo",
          description: "Create consistent memos with collaborative templates.",
          href: "/product/investment-memo",
        },
        {
          title: "Pitch Deck",
          description: "Build interactive decks powered by live data and metrics.",
          href: "/product/pitch-deck",
        },
      ],
    },
    {
      title: "Pricing",
      description: "Select a plan that fits your team and scale.",
      href: "/pricing",
    },
    {
      title: "Resources",
      description: "Guides and data to move faster.",
      href: "/resources",
      items: [
        {
          title: "Insights",
          description: "Research-backed essays on fundraising and capital markets.",
          href: "/insights",
        },
        {
          title: "Glossary",
          description: "Modern investing terms and definitions, curated for teams.",
          href: "/grossary",
        },
        {
          title: "Database",
          description: "Benchmark datasets covering investors, deals, and managers.",
          href: "/database",
        },
        {
          title: "The Fund One Handbook",
          description: "Step-by-step playbook for raising and operating your first fund.",
          href: "/fund-one-handbook",
        },
      ],
    },
    {
      title: "Customers",
      description: "See how leading firms use CapQ to scale.",
      href: "/customers",
    },
    {
      title: "About",
      description: "Learn about our mission, team, and investors.",
      href: "/about",
    },
    {
      title: "Contact",
      description: "Talk with our team about partnerships or support.",
      href: "/contact",
    },
  ],
  ctas: [
    {
      label: "Login",
      href: "/login",
      variant: "secondary",
    },
    {
      label: "Request a demo",
      href: "/request-demo",
      variant: "primary",
    },
  ],
};

export type NavConfig = typeof navConfig;
