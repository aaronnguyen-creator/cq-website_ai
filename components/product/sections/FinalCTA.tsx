import type { FinalCTAContent } from "@/lib/product/featurePageTypes";
import { Button } from "@/components/ui/marketing-button";

type FinalCTAProps = {
  data: FinalCTAContent;
};

export function FinalCTA({ data }: FinalCTAProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-4xl px-4 md:px-6 py-16 text-center sm:py-24"
    >
      <h2 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
        {data.heading}
      </h2>
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
    </section>
  );
}
