import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { AboutCtaContent } from "@/lib/about/types";

type AboutCtaBandProps = {
  data: AboutCtaContent;
};

export function AboutCtaBand({ data }: AboutCtaBandProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-[32px] border border-white/15 bg-gradient-to-br from-[#050608] via-[#050608] to-[#0B0F14] px-6 py-10 text-white shadow-[0_35px_80px_rgba(5,6,8,0.65)] md:px-10 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Partner with CQ
              </p>
              <h3 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
                {data.heading}
              </h3>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                {data.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="onDark"
                className="min-w-[180px]"
              >
                <Link href={data.secondaryCta.href}>
                  {data.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
