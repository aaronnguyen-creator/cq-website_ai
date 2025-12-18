import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CTABoxContent } from "@/lib/home/types";

type CTABoxProps = {
  data: CTABoxContent;
};

export function CTABox({ data }: CTABoxProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="rounded-[32px] border border-black/10 bg-[#F7F8FB] p-10 text-center shadow-[0_25px_60px_rgba(15,23,42,0.05)]">
          <h2 className="text-3xl font-heading font-semibold text-[#0B0F14]">
            {data.title}
          </h2>
          {data.description ? (
            <p className="mt-3 text-base text-[#4B5563]">{data.description}</p>
          ) : null}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="px-8 py-3 text-base">
              <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              className="px-8 py-3 text-base bg-black text-white hover:bg-black/90"
            >
              <Link href={data.secondaryCta.href}>
                {data.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
