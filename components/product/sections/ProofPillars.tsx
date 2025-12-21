import type { ProofPillarsContent } from "@/lib/product/featurePageTypes";

type ProofPillarsProps = {
  data: ProofPillarsContent;
};

export function ProofPillars({ data }: ProofPillarsProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="rounded-[32px] border border-border bg-card p-8 shadow-[0_40px_120px_rgba(15,23,42,0.12)] sm:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Proof
        </p>
        <h2 className="mt-4 text-4xl font-heading font-semibold tracking-tight">
          {data.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {data.intro}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-background/80 p-6"
            >
              <h3 className="text-xl font-heading font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
