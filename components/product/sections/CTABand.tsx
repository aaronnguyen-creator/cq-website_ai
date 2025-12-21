import type { CTABandContent } from "@/lib/product/featurePageTypes";
import { Button } from "@/components/ui/marketing-button";

type CTABandProps = {
  data: CTABandContent;
};

export function CTABand({ data }: CTABandProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="rounded-[32px] border border-border bg-gradient-to-r from-primary/10 via-transparent to-transparent p-8 text-center shadow-[0_50px_120px_rgba(15,23,42,0.15)] sm:p-12">
        <h3 className="text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
          {data.heading}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {data.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>
          {data.secondaryCta ? (
            <Button href={data.secondaryCta.href} variant="secondary">
              {data.secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
