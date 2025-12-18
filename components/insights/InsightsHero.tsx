import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/Tag";

export function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0C10] via-[#050608] to-transparent">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
          Insights
        </p>
        <h1 className="mt-4 text-4xl font-heading font-semibold text-white sm:text-5xl">
          Insights for investment teams.
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          Practical research on diligence, manager discovery, portfolio
          workflows, and AI—written for allocators, GPs, and analysts.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/subscribe">Subscribe</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/request-demo">Book a demo</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
          <Tag className="bg-transparent">Updated weekly</Tag>
          <Tag className="bg-transparent">Diligence</Tag>
          <Tag className="bg-transparent">AI workflows</Tag>
        </div>
      </div>
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
