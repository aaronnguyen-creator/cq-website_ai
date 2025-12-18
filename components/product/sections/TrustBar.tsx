import type { TrustBarContent } from "@/lib/product/featurePageTypes";

type TrustBarProps = {
  data: TrustBarContent;
};

export function TrustBar({ data }: TrustBarProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 py-12 text-white sm:py-14"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          {data.title}
        </p>
        <div className="mt-6 grid gap-4 text-base font-semibold text-white/80 sm:grid-cols-3 lg:grid-cols-5">
          {data.logos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
