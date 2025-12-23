import type { AboutContent } from "./types";

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "About CQ",
    title: "The clarity layer for fundraising teams.",
    description:
      "Centralize investor intelligence, diligence workflows, and approvals in one finance-grade operating system so every mandate moves forward decisively.",
    primaryCta: {
      label: "Request a demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Contact us",
      href: "/contact",
    },
  },
  mission: {
    heading: "Mission",
    description:
      "Give alternative investment teams a single operating system that connects investor intelligence, diligence workflows, and execution guardrails.",
    slides: [
      {
        title: "One command center",
        description:
          "Unify targeting, diligence tasks, and allocator communications so every mandate stays audit-ready.",
        image: {
          src: "/images/features/structure-pipeline.png",
          alt: "Command center workflow illustration",
        },
      },
      {
        title: "Decision-ready context",
        description:
          "Surface AI copilots, investor history, and approvals directly inside the workspace for faster calls.",
        image: {
          src: "/images/features/deal-context.png",
          alt: "Decision context visualization",
        },
      },
      {
        title: "Trusted collaboration",
        description:
          "Keep allocators, GPs, and operating partners aligned with structured updates and governance.",
        image: {
          src: "/images/features/ai-summary.png",
          alt: "Collaboration framework illustration",
        },
      },
    ],
  },
  vision: {
    heading: "Vision",
    description: [
      "Make alternative investment fundraising as efficient, transparent, and data-driven as the best operating systems in modern finance.",
    ],
    bullets: [
      "Deliver live visibility from outreach through diligence and close.",
      "Turn complex materials into trusted, auditable summaries with AI copilots.",
      "Build a workspace LPs rely on for governance and partnership.",
    ],
  },
  values: {
    heading: "Values",
    description:
      "The standards we uphold when building CQ and serving investment teams.",
    values: [
      {
        title: "Trust",
        description:
          "Earn confidence through accuracy, transparency, and a security-first posture.",
      },
      {
        title: "Clarity",
        description:
          "Explain complex workflows in crisp, structured language and layouts.",
      },
      {
        title: "Precision",
        description:
          "Ground every promise in data, proof, and measurable business outcomes.",
      },
      {
        title: "Efficiency",
        description:
          "Ship tools and guardrails that reduce manual work for high-performing teams.",
      },
      {
        title: "Partnership",
        description:
          "Build for long-term collaboration with customers, investors, and communities.",
      },
    ],
  },
  team: {
    heading: "Our team",
    description:
      "CQ is led by operators who have built, diligenced, and invested in finance-grade platforms across the alternatives ecosystem.",
    featured: {
      name: "Erik Ford",
      title: "Founder & CEO",
      bio: "Erik Ford pairs decades of capital markets leadership with builder discipline—scaling companies, stewarding investor capital, and mentoring the next generation of operators.",
      image: {
        src: "/images/about/erik-ford.jpg",
        alt: "Portrait of Erik Ford",
      }, // Replace with approved headshot when available.
      highlights: [
        {
          title: "Company Builder - Multiple Successful Outcomes of $250m+",
          items: [
            "Kaizen Platform – Chief Operating Officer (IPO – $500M+ peak market cap)",
            "Boost Media – VP Business Development (Acquired by AdLabs)",
            "Triad Retail Media – Director of Analytics (Acquired by WPP for $300M+)",
          ],
        },
        {
          title: "Investor - $1B+ in Investment Experience",
          items: [
            "Renn Global – Founder/CEO – $350M+ invested with $15B Japanese JV partner",
            "Old Greenwich Capital – Executive Director – $.5B in annual M&A",
            "Raymond James – Ops Mgr – Top 10 US firm (Welch Financial) – $129M AUM",
            "Wells Fargo Securities – Analyst – Harvard grad top wealth team – $86M AUM",
          ],
        },
        {
          title: "Community Builder",
          items: [
            "Milken Institute – Young Leaders Circle",
            "Sr Advisor – Concordia",
            "Financial Literacy for Kids Foundation – Former Chairman & co-founder",
            "Mentor to Student Entrepreneurship at Stanford (ASES) program",
          ],
        },
      ],
    },
  },
  cta: {
    heading: "See CQ in action",
    description:
      "Give your fundraising and diligence teams a shared operating system with AI copilots, investor intelligence, and governance built in.",
    primaryCta: {
      label: "Request a demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Contact us",
      href: "/contact",
    },
  },
};
