"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/lib/home/types";

type HomeHeroProps = {
  data: HeroContent;
};

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="bg-background px-4 py-16 text-center text-foreground md:px-6 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h1 className="text-4xl font-heading font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {data.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {data.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={data.secondaryCta.href}>
              {data.secondaryCta.label}
            </Link>
          </Button>
        </div>
        <div className="mt-10 w-full rounded-[32px] border border-white/15 bg-[#050608] p-4 md:p-5">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-black/20 via-black/60 to-black md:h-[520px]">
            {data.heroImage?.src ? (
              <Image
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 960px"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-black/40 to-black" />
            )}
          </div>
        </div>
        <div className="mt-8 w-full rounded-3xl border border-white/10 bg-[#050608] p-5 text-white shadow-[0_25px_60px_rgba(5,6,8,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            {data.proofLabel}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6">
            {data.proofLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={60}
                    className="h-10 w-auto object-contain opacity-80"
                  />
                ) : (
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
