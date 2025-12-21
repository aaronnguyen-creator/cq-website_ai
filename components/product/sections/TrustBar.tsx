import type { TrustBarContent } from "@/lib/product/featurePageTypes";

type TrustBarProps = {
  data: TrustBarContent;
};

export function TrustBar({ data }: TrustBarProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="rounded-3xl border border-border bg-muted/60 p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.07)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {data.title}
        </p>
        <div className="mt-8 grid gap-4 text-sm font-semibold text-muted-foreground sm:grid-cols-3 lg:grid-cols-5">
          {data.logos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-border/70 bg-background px-4 py-3"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
