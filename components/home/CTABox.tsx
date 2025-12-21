import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CTABoxContent } from "@/lib/home/types";

type CTABoxProps = {
  data: CTABoxContent;
};

export function CTABox({ data }: CTABoxProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="w-full rounded-[32px] border border-border bg-card p-10 text-center shadow-[0_25px_60px_rgba(15,23,42,0.06)] md:p-12">
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-foreground md:text-4xl">
            {data.title}
          </h2>
          {data.description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {data.description}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={data.secondaryCta.href}>
                {data.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
