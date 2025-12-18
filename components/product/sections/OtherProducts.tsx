import Link from "next/link";

import type { OtherProductsContent } from "@/lib/product/featurePageTypes";

type OtherProductsProps = {
  data: OtherProductsContent;
};

export function OtherProducts({ data }: OtherProductsProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 py-20 text-white"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60">
          Products
        </p>
        <h2 className="text-4xl font-heading font-semibold">{data.heading}</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((product) => (
          <Link
            key={product.title}
            href={product.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40"
          >
            <h3 className="text-xl font-heading">{product.title}</h3>
            <p className="mt-3 text-white/70">{product.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
