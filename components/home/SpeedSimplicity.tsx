import Link from "next/link";
import { ArrowRight, Upload, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SpeedStep = {
  title: string;
  description: string;
  icon: "upload" | "sparkles" | "send";
};

type SpeedSimplicityProps = {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
  steps?: SpeedStep[];
  cta?: { label: string; href: string };
};

const ICONS: Record<SpeedStep["icon"], React.ElementType> = {
  upload: Upload,
  sparkles: Sparkles,
  send: Send,
};

export function SpeedSimplicity({
  eyebrow = "Speed & Simplicity",
  headline = "2 hours to your first LP email. Not 2 months.",
  subhead = "Start from your deck, generate a mandate-fit target list, then launch outreach—without stitching together five tools.",
  steps = [
    {
      title: "Upload your deck",
      description: "Bring your narrative + constraints into CQ.",
      icon: "upload",
    },
    {
      title: "CQ finds matching LPs",
      description: "Ranked fit + explainable rationale.",
      icon: "sparkles",
    },
    {
      title: "Send first emails",
      description: "Personalized outreach with owners + tracking.",
      icon: "send",
    },
  ],
  cta = { label: "Start Free Trial", href: "/contact" },
}: SpeedSimplicityProps) {
  return (
    <section className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            {eyebrow}
          </p>

          <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-5xl">
            {headline}
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subhead}
          </p>
        </div>

        {/* Main card */}
        <div className="relative mt-10 overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
          {/* Blueprint frame */}
          <div className="pointer-events-none absolute inset-4 rounded-[26px] border border-border/70 [border-style:dashed]" />

          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(70% 70% at 40% 30%, black 0%, transparent 70%)",
            }}
          />

          <div className="relative px-6 py-10 md:px-10 md:py-12">
            {/* “terminal-ish” emphasis line */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/40" />
              From deck → outreach
            </div>

            {/* Steps strip */}
            <div className="mt-8">
              <div className="grid gap-4 md:grid-cols-3">
                {steps.map((step, idx) => {
                  const Icon = ICONS[step.icon];

                  return (
                    <div key={step.title} className="relative">
                      {/* connector (desktop only) */}
                      {idx !== 0 ? (
                        <div className="pointer-events-none absolute -left-3 top-7 hidden h-px w-6 bg-border md:block" />
                      ) : null}

                      <div
                        className={cn(
                          "group relative h-full rounded-2xl border border-border bg-background/70 p-5",
                          "transition duration-300 ease-out",
                          "hover:-translate-y-[1px] hover:border-foreground/15 hover:bg-background",
                          "hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]",
                          "focus-within:ring-2 focus-within:ring-ring/30"
                        )}
                      >
                        {/* hover glow */}
                        <div
                          className="
                            pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300
                            group-hover:opacity-100
                            bg-[radial-gradient(520px_circle_at_20%_0%,rgba(59,130,246,0.14),transparent_55%)]
                          "
                          aria-hidden="true"
                        />

                        <div className="relative flex items-start gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-foreground transition duration-300 group-hover:bg-foreground group-hover:text-background">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>

                          <div className="min-w-0">
                            <p className="font-heading text-base font-semibold text-foreground">
                              {step.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* micro “time” line */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                  Typical setup: under 10 minutes
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                  Audit-ready activity history
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                  No spreadsheet handoffs
                </span>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-6 md:flex-row md:items-center">
              <p className="text-sm text-muted-foreground">
                Build momentum in a single workflow—targeting → outreach → diligence → close.
              </p>

              <Button asChild size="lg" className="rounded-full px-6">
                <Link href={cta.href} className="inline-flex items-center gap-2">
                  {cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
