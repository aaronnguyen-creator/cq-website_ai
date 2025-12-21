import type { ContactContent } from "./types";

export const contactContent: ContactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Contact CQ",
    description:
      "Connect with our team to walk through CQ’s fundraising workspace, pricing, and implementation timelines.",
  },
  metrics: [
    {
      value: "↑ 30%",
      label: "Faster investor response cycles",
      description: "Typical outcome after moving outreach and follow-ups into one pipeline.",
    },
    {
      value: "↓ 3x",
      label: "Lower diligence coordination effort",
      description: "Seen by teams that share intake, notes, and files inside CQ.",
    },
    {
      value: "↑ 10%",
      label: "Higher mandate conversion rate",
      description: "Attributed to better mandate tracking and faster approvals.",
    },
    {
      value: "↑ 2x",
      label: "More actionable investor insights",
      description: "Measured by teams using CQ for allocator research and context.",
    },
  ],
  form: {
    title: "Tell us about your team",
    description:
      "Share a few details so we can connect you with the right CQ specialist.",
    firmTypes: [
      "Asset Management Firm",
      "Endowment/Foundation",
      "Family Office",
      "Hedge Fund",
      "Insurance Company",
      "Investment Bank",
      "Pension Fund",
      "Private Equity Firm",
      "Startup",
      "Venture Capital Firm",
      "Other",
    ],
    intents: ["Book a demo", "Ask about pricing"],
    submitLabel: "Request a demo",
    helperText: "We respond within one business day.",
  },
  logos: {
    eyebrow: "Trusted by modern investment teams",
    title: "Proven with institutional workflows",
    description:
      "Allocator, GP, and advisor teams rely on CQ to centralize mandates and investor intelligence.",
    logos: [
      { name: "Allocator Firm", src: "/logo-1.svg" },
      { name: "Family Office", src: "/logo-2.svg" },
      { name: "Endowment", src: "/logo-3.svg" },
      { name: "Institutional", src: "/logo-5.svg" },
    ],
  },
  office: {
    company: "Renn Labs",
    address: "Florida Atlantic Blvd, Boca Raton, FL 33431, United States",
    generalEmail: "info@capq.ai",
    supportEmail: "support@capq.ai",
    mapLink: "https://maps.app.goo.gl/8VGieBZYu2yfFR3i8",
    mapEmbedSrc:
      "https://www.google.com/maps?q=Florida%20Atlantic%20Blvd%2C%20Boca%20Raton%2C%20FL%2033431&output=embed",
  },
};
