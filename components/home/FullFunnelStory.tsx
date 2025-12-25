import Link from "next/link";
import {
  Database,
  Target,
  Mail,
  FolderLock,
  MessageSquareText,
  FileSignature,
  LayoutPanelTop,
  ChartLine,
  ArrowRight,
} from "lucide-react";

type Step = {
  label: string;
  desc: string;
  href: string;
  Icon: React.ElementType;
};

type Phase = {
  title: string;
  blurb: string;
  learnMoreHref: string;
  steps: Step[];
};

const PHASES: Phase[] = [
  {
    title: "Find investors",
    blurb: "150K+ LP profiles with mandate data. Build lists and rank fit before you start outreach.",
    learnMoreHref: "/product/lp-database",
    steps: [
      {
        label: "LP Database",
        desc: "Profiles, mandates, constraints",
        href: "/product/lp-database",
        Icon: Database,
      },
      {
        label: "AI Matching",
        desc: "Score and rank investor fit",
        href: "/product/ai-matching",
        Icon: Target,
      },
    ],
  },
  {
    title: "Reach & engage",
    blurb: "Run personalized outreach, share materials securely, and answer diligence questions with context.",
    learnMoreHref: "/product/cold-email",
    steps: [
      {
        label: "Cold Email",
        desc: "Personalized sequences at scale",
        href: "/product/cold-email",
        Icon: Mail,
      },
      {
        label: "Data Room",
        desc: "Permissions + access history",
        href: "/product/data-room",
        Icon: FolderLock,
      },
      {
        label: "AI Q&A",
        desc: "Source-linked diligence answers",
        href: "/product/ai-qa",
        Icon: MessageSquareText,
      },
    ],
  },
  {
    title: "Close deals",
    blurb: "Gate access with NDAs, keep LPs updated, and track soft-circle → hard commit without spreadsheets.",
    learnMoreHref: "/product/commitment-tracking",
    steps: [
      {
        label: "NDA Signing",
        desc: "Unlock docs after signature",
        href: "/product/nda-signing",
        Icon: FileSignature,
      },
      {
        label: "LP Portal",
        desc: "Updates + materials in one place",
        href: "/product/lp-portal",
        Icon: LayoutPanelTop,
      },
      {
        label: "Commitment Tracking",
        desc: "Soft-circle → hard commit",
        href: "/product/commitment-tracking",
        Icon: ChartLine,
      },
    ],
  },
];

export function FullFunnelStory() {
  return (
    <section className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl font-heading font-semibold tracking-tight md:text-5xl">
            Finally, a complete fundraising workflow.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            No more juggling 5 tools that don’t talk to each other.
          </p>
        </div>

        {/* Container */}
        <div className="relative mt-10 overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
          {/* subtle grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(70% 70% at 50% 20%, black 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative grid gap-6 p-6 md:p-10 lg:grid-cols-3">
            {PHASES.map((phase) => (
              <div key={phase.title} className="flex flex-col rounded-3xl border border-border bg-background/70 p-6">
                {/* Phase header */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                    {phase.title}
                  </p>

                  {/* divider line like your inspiration */}
                  <div className="h-px w-full bg-border" />

                  <p className="text-base leading-relaxed text-muted-foreground">
                    {phase.blurb}
                  </p>

                  <Link
                    href={phase.learnMoreHref}
                    className="
                      inline-flex items-center gap-2 text-sm font-semibold text-primary
                      underline-offset-4 hover:underline
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30
                    "
                  >
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                {/* Steps */}
                <div className="mt-6 space-y-3">
                  {phase.steps.map((step) => (
                    <Link
                      key={step.label}
                      href={step.href}
                      className="
                        group flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4
                        transition duration-300 ease-out
                        hover:-translate-y-[1px] hover:border-foreground/15 hover:bg-card
                        hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30
                      "
                    >
                      {/* icon tile */}
                      <div
                        className="
                          flex h-10 w-10 items-center justify-center rounded-2xl
                          bg-muted text-foreground transition duration-300
                          group-hover:bg-foreground group-hover:text-background
                        "
                        aria-hidden="true"
                      >
                        <step.Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-heading font-semibold text-foreground">
                          {step.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* keeps cards aligned even if phases have different step counts */}
                <div className="mt-6 flex-1" />
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="relative flex flex-col items-center justify-between gap-4 border-t border-border/70 px-6 py-6 md:flex-row md:px-10">
            <p className="text-sm text-muted-foreground">
              See the full workflow end-to-end — targeting → outreach → diligence → close.
            </p>

            <Link
              href="/product"
              className="
                group inline-flex items-center gap-2 rounded-full
                bg-foreground px-6 py-3 text-sm font-semibold text-background
                shadow-[0_18px_45px_rgba(15,23,42,0.18)]
                transition hover:opacity-90
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30
              "
            >
              Explore the Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
