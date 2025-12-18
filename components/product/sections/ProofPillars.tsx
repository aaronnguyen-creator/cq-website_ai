import type { ProofPillarsContent } from "@/lib/product/featurePageTypes";

type ProofPillarsProps = {
  data: ProofPillarsContent;
};

export function ProofPillars({ data }: ProofPillarsProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 py-20 text-white"
    >
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60">
          Proof
        </p>
        <h2 className="mt-4 text-4xl font-heading font-semibold">
          {data.heading}
        </h2>
        <p className="mt-3 text-white/75">{data.intro}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/15 bg-black/30 p-6"
            >
              <h3 className="text-xl font-heading">{pillar.title}</h3>
              <p className="mt-3 text-white/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
