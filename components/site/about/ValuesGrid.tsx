import type { ValuesContent } from "@/lib/about/types";

type ValuesGridProps = {
  data: ValuesContent;
};

export function ValuesGrid({ data }: ValuesGridProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-foreground md:text-4xl">
            {data.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {data.description}
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.values.map((value) => (
            <div
              key={value.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.06)] md:p-8"
            >
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
