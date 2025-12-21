import Image from "next/image";

import type { LogoSectionContent } from "@/lib/contact/types";

type ContactLogosSectionProps = {
  data: LogoSectionContent;
};

export function ContactLogosSection({ data }: ContactLogosSectionProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-[40px] border border-white/10 bg-[#050608] p-8 text-white shadow-[0_50px_120px_rgba(5,6,8,0.35)] md:p-14">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            {data.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                {data.eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h2>
            {data.description ? (
              <p className="text-base text-white/70 md:text-lg">
                {data.description}
              </p>
            ) : null}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-28 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 px-4 py-3"
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={40}
                    className="h-10 w-auto object-contain opacity-90"
                  />
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
