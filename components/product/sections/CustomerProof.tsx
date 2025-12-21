import Image from "next/image";
import Link from "next/link";

import type { CustomerProofContent } from "@/lib/product/featurePageTypes";

type CustomerProofProps = {
  data: CustomerProofContent;
};

export function CustomerProof({ data }: CustomerProofProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="rounded-[32px] border border-border/40 bg-foreground p-8 text-background shadow-[0_50px_120px_rgba(15,23,42,0.35)] sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-semibold sm:text-4xl">
            {data.heading}
          </h2>
          {data.subheading ? (
            <p className="mt-3 text-base text-background/80 sm:text-lg">
              {data.subheading}
            </p>
          ) : null}
        </div>
        <div className="mt-10">
          <div className="group relative isolate rounded-[28px] border border-border/30 bg-gradient-to-b from-background/15 via-transparent to-background/15 p-4 sm:p-6">
            <div className="relative z-10 grid grid-cols-2 gap-4 transition duration-200 ease-out sm:grid-cols-3 sm:gap-5 md:grid-cols-4 group-hover:blur-sm group-hover:opacity-40 group-focus-within:blur-sm group-focus-within:opacity-40">
              {data.logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-20 items-center justify-center rounded-2xl border border-background/10 bg-background/5 px-4"
                >
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      width={180}
                      height={40}
                      alt={logo.name}
                      className="h-10 w-auto object-contain opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-background/80">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition duration-200 ease-out md:flex pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <Link
                href={data.cta.href}
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/90 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_20px_55px_rgba(15,23,42,0.35)] transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
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
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-[0_20px_55px_rgba(15,23,42,0.35)] transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
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
