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
    <section className="bg-white px-4 py-20 text-center text-[#0B0F14]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#6B7280]">
          {data.eyebrow}
        </p>
        <h1 className="text-4xl font-heading font-semibold leading-tight sm:text-5xl">
          {data.title}
        </h1>
        <p className="max-w-3xl text-lg text-[#4B5563]">{data.description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="h-12 px-8 text-base">
            <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            className="h-12 px-8 text-base bg-black text-white hover:bg-black/90"
          >
            <Link href={data.secondaryCta.href}>
              {data.secondaryCta.label}
            </Link>
          </Button>
        </div>
        <div className="mt-8 w-full max-w-6xl rounded-[32px] border border-black/10 bg-[#050608] p-4">
          <div className="relative h-[480px] w-full overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-b from-[#111827] to-[#030712]">
            {data.heroImage?.src ? (
              <Image
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[#232a3d] to-[#0b1120]" />
            )}
          </div>
        </div>
        <div className="mt-6 w-full rounded-3xl border border-black/10 bg-[#050608] p-5 text-white shadow-[0_20px_50px_rgba(5,6,8,0.25)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B7280]">
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
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
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
