import type { ProblemContent } from "@/lib/product/featurePageTypes";

type ProblemProps = {
  data: ProblemContent;
};

export function Problem({ data }: ProblemProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Challenges
          </p>
          <h2 className="text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
            {data.heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-8"
            >
              <h3 className="text-xl font-heading text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
