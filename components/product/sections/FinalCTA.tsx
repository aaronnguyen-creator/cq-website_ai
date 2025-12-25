import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { FinalCTAConfig } from "@/lib/product/featurePageTypes";

type FinalCTAProps = {
  data: FinalCTAConfig;
};

export function FinalCTA({ data }: FinalCTAProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:p-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
                {data.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {data.description}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
        </div>
      </div>
    </section>
  );
}
