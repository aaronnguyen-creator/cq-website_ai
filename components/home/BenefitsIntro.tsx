import Image from "next/image";
import type { BenefitsIntroContent } from "@/lib/home/types";

type BenefitsIntroProps = {
  data: BenefitsIntroContent;
};

export function BenefitsIntro({ data }: BenefitsIntroProps) {
  return (
    <section className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Benefits
          </p>
          <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
            {data.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {data.description}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_25px_60px_rgba(15,23,42,0.06)] md:p-8"
            >
              <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-border/60 bg-muted">
                {item.image?.src ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-contain p-6"
                  />
                ) : (
                  <div className="h-full w-full" />
                )}
              </div>
              <p className="text-base font-semibold leading-relaxed text-foreground md:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
