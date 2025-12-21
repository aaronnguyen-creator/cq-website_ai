import type {
  ContactFormContent,
  ProofMetric,
} from "@/lib/contact/types";

import { ContactForm } from "./ContactForm";

type ContactMainSectionProps = {
  metrics: ProofMetric[];
  form: ContactFormContent;
};

export function ContactMainSection({
  metrics,
  form,
}: ContactMainSectionProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06)] sm:p-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Proof by numbers
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              Typical outcomes teams report
            </h2>
            <p className="text-base text-muted-foreground">
              Benchmarks collected from investment teams that run their full
              outreach, diligence, and reporting motions inside CQ.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-background/80 p-5"
              >
                <p className="text-3xl font-heading font-semibold text-foreground md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Outcomes are directional and represent typical team-reported
            improvements—not audited performance commitments.
          </p>
        </div>
        <div className="rounded-[32px] border border-border bg-card p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground">
              {form.description}
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight">
              {form.title}
            </h2>
          </div>
          <div className="mt-8">
            <ContactForm data={form} />
          </div>
        </div>
      </div>
    </section>
  );
}
