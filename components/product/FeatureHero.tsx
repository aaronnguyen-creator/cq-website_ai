import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { FeatureHeroConfig } from "@/lib/product/featurePageTypes";

type FeatureHeroProps = {
  data: FeatureHeroConfig;
};

function renderHighlightedTitle(title: string, highlight?: string[]) {
  if (!highlight?.length) return title;

  // Simple highlight: wrap exact phrases
  // (case-sensitive; keep it simple + predictable)
  let parts: (string | { h: string })[] = [title];

  highlight.forEach((phrase) => {
    const next: (string | { h: string })[] = [];
    parts.forEach((p) => {
      if (typeof p !== "string") return next.push(p);
      const split = p.split(phrase);
      if (split.length === 1) return next.push(p);

      split.forEach((chunk, idx) => {
        if (chunk) next.push(chunk);
        if (idx < split.length - 1) next.push({ h: phrase });
      });
    });
    parts = next;
  });

  return parts.map((p, idx) =>
    typeof p === "string" ? (
      <span key={idx}>{p}</span>
    ) : (
      <span
        key={idx}
        className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent"
      >
        {p.h}
      </span>
    )
  );
}

export function FeatureHero({ data }: FeatureHeroProps) {
  const isVideo = data.media?.type === "video";

  return (
    <section className="relative overflow-hidden bg-background">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      {/* soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {data.eyebrow ? (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/5">
                ✦
              </span>
              <span className="uppercase tracking-[0.25em]">{data.eyebrow}</span>
            </div>
          ) : null}

          <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl">
            {renderHighlightedTitle(data.title, data.highlight)}
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-lg">
            {data.valueProp}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
            </Button>

            {data.secondaryCta ? (
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href={data.secondaryCta.href}>{data.secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.16),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.12),transparent_55%)]" />

            <div className="relative aspect-[16/9] w-full">
              {isVideo ? (
                <video
                  className="h-full w-full object-cover"
                  src={data.media.src}
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              ) : (
                <Image
                  src={data.media.src}
                  alt={data.media.alt ?? data.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 960px"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
