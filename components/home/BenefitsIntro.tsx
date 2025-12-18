import Image from "next/image";
import type { BenefitsIntroContent } from "@/lib/home/types";

type BenefitsIntroProps = {
  data: BenefitsIntroContent;
};

export function BenefitsIntro({ data }: BenefitsIntroProps) {
  return (
    <section className="bg-white py-20 text-[#0B0F14]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9CA3AF]">
            Benefits
          </p>
          <h2 className="mt-3 text-3xl font-heading font-semibold">
            {data.title}
          </h2>
          <p className="mt-3 text-lg text-[#4B5563]">{data.description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#f3f5f7] to-white">
                {item.image?.src ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full" />
                )}
              </div>
              <p className="text-lg font-semibold text-[#0B0F14]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
