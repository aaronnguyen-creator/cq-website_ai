export type FirmField = {
  label: string;
  value: string;
};

export type FirmSection = {
  heading: string;
  description?: string;
  fields: FirmField[];
};

export type FirmContact = {
  email?: string;
  website?: string;
  linkedin?: string;
};

export type FirmAddress = {
  lines?: string[];
  mapEmbedSrc?: string;
  mapLink?: string;
  note?: string;
};

export type FirmDetail = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  sections: FirmSection[];
  contact?: FirmContact;
  address?: FirmAddress;
};

const firmDetails: Record<string, FirmDetail> = {
  "01-advisors": {
    slug: "01-advisors",
    name: "01 Advisors",
    tagline:
      "Operator-led capital partners focused on Series A and B growth teams.",
    summary: "A directory entry for 01 Advisors in the CapQ firm database.",
    sections: [
      {
        heading: "Overview and management",
        fields: [
          { label: "Establishment year", value: "2018" },
          {
            label: "Mission",
            value:
              "Built on the belief that experienced operators are uniquely equipped to assist hyper-growth companies in achieving their next milestones. Focuses on scaling operations and go-to-market strategies for companies during their Series A and B funding rounds.",
          },
          {
            label: "Values",
            value:
              "Empower founders to learn, adapt, and enhance their execution speed, transforming innovative products into world-class companies.",
          },
          { label: "Investment roles", value: "General Partner (GP)" },
          {
            label: "References or case studies",
            value: "Portfolio companies available for reference.",
          },
          {
            label: "Team experience",
            value:
              "Includes former CEO and CRO/COO of Twitter and CRO of Facebook.",
          },
          {
            label: "Notable achievements",
            value:
              "Successfully scaled companies from $0 to $123 billion in annual revenue and contributed to the creation of $1 trillion in public company market capitalization.",
          },
          {
            label: "Project track record",
            value: "Portfolio includes diverse and innovative companies.",
          },
        ],
      },
    ],
    address: {
      lines: ["Address not available."],
      mapEmbedSrc:
        "https://www.google.com/maps?q=Florida%20Atlantic%20Blvd%2C%20Boca%20Raton%2C%20FL%2033431&output=embed",
      mapLink: "https://maps.app.goo.gl/8VGieBZYu2yfFR3i8",
      note: "Map preview shows CQ’s HQ while we confirm this firm’s address.",
    },
  },
};

export function getFirmDetailBySlug(slug: string) {
  return firmDetails[slug];
}

export const firmDetailSlugs = Object.keys(firmDetails);
