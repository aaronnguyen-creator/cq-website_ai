import Link from "next/link";
import type { ProductModulesContent } from "@/lib/home/types";

type ProductModulesProps = {
  data: ProductModulesContent;
};

export function ProductModules({ data }: ProductModulesProps) {
  return (
    <section className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Platform
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition duration-200 ease-out hover:-translate-y-1 hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                <span className="text-lg font-heading" aria-hidden>
                  ↗
                </span>
              </div>
              <h3 className="mt-4 text-xl font-heading font-semibold md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary">
                View details
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
