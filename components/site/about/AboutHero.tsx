import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { AboutHeroContent } from "@/lib/about/types";

const accentCards = [
  {
    title: "Allocator brief ready",
    caption: "Every LP touchpoint in context.",
    badge: "AB",
  },
  {
    title: "Precision diligence",
    caption: "Structured answers, no inbox hunt.",
    badge: "DD",
  },
  {
    title: "Investor intelligence",
    caption: "Live mandates and sentiment.",
    badge: "IQ",
  },
  {
    title: "Execution guardrails",
    caption: "Tasks, owners, and approvals.",
    badge: "OS",
  },
];

const accentPositions = [
  "left-[-32px] top-4",
  "right-[-28px] top-12",
  "left-[-16px] bottom-12",
  "right-[-40px] bottom-4",
];

type AboutHeroProps = {
  data: AboutHeroContent;
};

export function AboutHero({ data }: AboutHeroProps) {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate overflow-hidden bg-background py-20 text-foreground md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--foreground)/0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_hsl(var(--primary)/0.1)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <div className="space-y-4">
          <h1
            id="about-hero-heading"
            className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            {data.title}
          </h1>
          {data.subtitle ? (
            <p className="text-lg font-heading text-muted-foreground">
              {data.subtitle}
            </p>
          ) : null}
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {data.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="min-w-[170px]">
            <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="min-w-[170px]"
          >
            <Link href={data.secondaryCta.href}>
              {data.secondaryCta.label}
            </Link>
          </Button>
        </div>

        <div className="mt-6 w-full max-w-3xl">
          <div className="relative mx-auto">
            <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card/80 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
              <div className="pointer-events-none absolute inset-x-20 top-6 hidden h-32 rounded-full bg-primary/25 blur-3xl lg:block" />
              <div className="pointer-events-none absolute inset-y-6 left-6 hidden w-32 rounded-full bg-muted/60 blur-3xl lg:block" />
              <div className="pointer-events-none absolute inset-y-6 right-6 hidden w-32 rounded-full bg-primary/15 blur-3xl lg:block" />
              <div className="relative flex h-[360px] flex-col items-center justify-center gap-6 rounded-[32px] border border-border/50 bg-gradient-to-b from-background to-card/60 p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:h-[420px]">
                <span className="rounded-full border border-border/70 bg-background/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  Clarity layer
                </span>
                <p className="max-w-sm text-2xl font-heading font-semibold leading-tight text-foreground md:text-3xl">
                  One command center for allocators and managers.
                </p>
                <div className="grid w-full gap-4 text-left md:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      Visibility
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Track mandates, heat, and ownership in one surface.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      Governance
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Built-in guardrails keep diligence accountable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                {accentCards.map((card, index) => (
                  <div
                    key={card.title}
                    aria-hidden="true"
                    className={`absolute ${accentPositions[index] ?? ""} w-48 rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-background`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-heading font-semibold text-foreground">
                        {card.badge}
                      </span>
                      <p className="text-sm font-semibold text-foreground">
                        {card.title}
                      </p>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {card.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4 overflow-x-auto lg:hidden">
              {accentCards.map((card) => (
                <div
                  key={card.title}
                  aria-label={card.title}
                  className="min-w-[200px] rounded-2xl border border-border/80 bg-background/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-200 ease-out hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-heading font-semibold text-foreground">
                      {card.badge}
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      {card.title}
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {card.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
