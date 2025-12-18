export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Allocators", href: "/product/allocators" },
      { label: "Data Room", href: "/product/data-room" },
      { label: "Due Diligence", href: "/product/due-diligence" },
      { label: "Investor Database", href: "/product/investor-database" },
      { label: "AI Investment Memos", href: "/product/investment-memos" },
      { label: "Pitch Deck Sharing", href: "/product/pitch-deck-sharing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Glossary", href: "/glossary" },
      { label: "Database", href: "/database" },
      { label: "Help Center", href: "/help" },
      { label: "Brand Assets", href: "/brand" },
      { label: "Product Updates", href: "/updates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Data Processing Agreement", href: "/dpa" },
      { label: "Platform Agreement", href: "/platform-agreement" },
      { label: "California Privacy Notice", href: "/ca-privacy" },
    ],
  },
];
