import Image from "next/image";
import Link from "next/link";
import type { CustomerProofContent } from "@/lib/product/featurePageTypes";

type CustomerProofProps = {
  data: CustomerProofContent;
};

export function CustomerProof({ data }: CustomerProofProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 text-white sm:py-20">
      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#101520] via-[#080A0F] to-[#050608] p-8 sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-semibold sm:text-4xl">
            {data.heading}
          </h2>
          {data.subheading ? (
            <p className="mt-3 text-base text-white/70 sm:text-lg">
              {data.subheading}
            </p>
          ) : null}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 transition duration-200 ease-out group-hover:blur-sm group-hover:opacity-40 group-focus-within:blur-sm group-focus-within:opacity-40">
          {data.logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  width={180}
                  height={40}
                  alt={logo.name}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 hidden items-center justify-center opacity-0 pointer-events-none transform translate-y-1 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto md:flex">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            {data.cta.label}
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M4 8h8M8 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            {data.cta.label}
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M4 8h8M8 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
