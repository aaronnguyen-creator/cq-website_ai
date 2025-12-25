import type { WorkflowIntegrationConfig } from "@/lib/product/featurePageTypes";

type SolutionIntroProps = {
  data: WorkflowIntegrationConfig;
};

export function SolutionIntro({ data }: SolutionIntroProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-card p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Integration with workflow
          </p>
          <h2 className="mt-3 text-3xl font-heading font-semibold tracking-tight md:text-4xl">
            {data.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-heading font-semibold">
                {data.beforeTitle ?? "Before this step…"}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
                {data.before.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-heading font-semibold">
                {data.afterTitle ?? "After CQ…"}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
                {data.after.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
