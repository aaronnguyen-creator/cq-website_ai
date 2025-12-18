import type { ProblemContent } from "@/lib/product/featurePageTypes";

type ProblemProps = {
  data: ProblemContent;
};

export function Problem({ data }: ProblemProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 py-16 text-white sm:py-20"
    >
      <div className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Challenges
          </p>
          <h2 className="text-3xl font-heading font-semibold sm:text-4xl">
            {data.heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-xl font-heading">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
