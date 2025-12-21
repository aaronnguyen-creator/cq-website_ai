import Link from "next/link";

import type { OtherProductsContent } from "@/lib/product/featurePageTypes";

type OtherProductsProps = {
  data: OtherProductsContent;
};

export function OtherProducts({ data }: OtherProductsProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Products
        </p>
        <h2 className="text-4xl font-heading font-semibold tracking-tight">
          {data.heading}
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((product) => (
          <Link
            key={product.title}
            href={product.href}
            className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <h3 className="text-xl font-heading font-semibold">
              {product.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {product.body}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
