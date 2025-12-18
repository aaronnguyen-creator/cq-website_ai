import type { CTABandContent } from "@/lib/product/featurePageTypes";
import { Button } from "@/components/ui/marketing-button";

type CTABandProps = {
  data: CTABandContent;
};

export function CTABand({ data }: CTABandProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-5xl px-4 py-20 text-white"
    >
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/20 to-transparent p-8 text-center shadow-[0_50px_120px_rgba(0,0,0,0.45)] sm:p-12">
        <h3 className="text-3xl font-heading font-semibold sm:text-4xl">
          {data.heading}
        </h3>
        <p className="mt-4 text-white/75">{data.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
