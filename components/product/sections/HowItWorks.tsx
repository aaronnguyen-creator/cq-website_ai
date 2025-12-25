import Image from "next/image";
import type { HowItWorksConfig } from "@/lib/product/featurePageTypes";

type HowItWorksProps = {
  data: HowItWorksConfig;
};

export function HowItWorks({ data }: HowItWorksProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {data.steps.map((step, idx) => (
            <div
              key={step.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground/5 text-sm font-semibold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold md:text-xl">
                  {step.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
