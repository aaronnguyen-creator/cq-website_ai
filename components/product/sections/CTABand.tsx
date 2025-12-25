import Link from "next/link";
import type { FinalCTAConfig } from "@/lib/product/featurePageTypes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTABandProps = {
  data: FinalCTAConfig;
  className?: string;
};

export function CTABand({ data, className }: CTABandProps) {
  return (
    <section className={cn("bg-background py-16 text-foreground md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
          <div className="relative p-6 md:p-10">
            {/* subtle glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(900px circle at 20% 0%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(900px circle at 80% 40%, rgba(99,102,241,0.14), transparent 55%)",
              }}
            />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  Get started
                </p>
                <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
                  {data.title}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button asChild size="lg">
                  <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
                </Button>

                {data.secondaryCta ? (
                  <Button asChild size="lg" variant="secondary">
                    <Link href={data.secondaryCta.href}>
                      {data.secondaryCta.label}
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
