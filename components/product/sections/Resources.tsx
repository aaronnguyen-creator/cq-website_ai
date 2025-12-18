import Link from "next/link";

import type { ResourcesContent } from "@/lib/product/featurePageTypes";

type ResourcesProps = {
  data: ResourcesContent;
};

export function Resources({ data }: ResourcesProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-5xl px-4 py-20 text-white"
    >
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_100px_rgba(0,0,0,0.4)]">
        <h2 className="text-3xl font-heading font-semibold">{data.heading}</h2>
        <ul className="mt-6 space-y-4">
          {data.items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-lg transition hover:border-white/40 hover:bg-white/5"
              >
                <span>{item.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
