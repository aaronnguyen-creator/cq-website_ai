import Link from "next/link";
import type { ProductModulesContent } from "@/lib/home/types";

type ProductModulesProps = {
  data: ProductModulesContent;
};

export function ProductModules({ data }: ProductModulesProps) {
  return (
    <section className="bg-white py-20 text-[#0B0F14]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9CA3AF]">
              Platform
            </p>
            <h2 className="mt-3 text-3xl font-heading font-semibold">
              {data.title}
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F6FB] text-[#0B0F14]">
                <span className="text-lg font-heading">↗</span>
              </div>
              <h3 className="mt-4 text-xl font-heading font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                {item.description}
              </p>
              <span className="mt-auto pt-4 text-sm font-semibold text-[#0B0F14]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
