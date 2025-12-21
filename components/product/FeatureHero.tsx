"use client";

import Image from "next/image";

import type { HeroContent } from "@/lib/product/featurePageTypes";
import { Button } from "@/components/ui/marketing-button";

type FeatureHeroProps = {
  data: HeroContent;
};

export function FeatureHero({ data }: FeatureHeroProps) {
  const heroImage = data.image;

  return (
    <section
      id={data.id}
      className="bg-background px-4 py-16 text-foreground md:px-6 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            {data.eyebrow}
          </p>
          <h1 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>
            {data.secondaryCta ? (
              <Button href={data.secondaryCta.href} variant="secondary">
                {data.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-[32px] border border-border bg-[#050608] p-4 md:p-5">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-border bg-gradient-to-b from-black/20 via-black/60 to-black md:h-[520px]">
              {heroImage?.src ? (
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-black/40 to-black" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
