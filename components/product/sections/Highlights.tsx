import Image from "next/image";

import type { HighlightsContent } from "@/lib/product/featurePageTypes";

type HighlightsProps = {
  data: HighlightsContent;
};

export function Highlights({ data }: HighlightsProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 py-20 text-white"
    >
      {data.heading ? (
        <div className="mb-12 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Highlights
          </p>
          <h2 className="text-4xl font-heading font-semibold">
            {data.heading}
          </h2>
        </div>
      ) : null}
      <div className="space-y-16">
        {data.features.map((feature, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] lg:flex-row ${
                reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Feature #{idx + 1}
                </p>
                <h3 className="text-3xl font-heading">{feature.title}</h3>
                <p className="text-lg text-white/80">{feature.outcome}</p>
                <ul className="mt-4 space-y-2 text-white/70">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={feature.image.width ?? 1200}
                  height={feature.image.height ?? 800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
