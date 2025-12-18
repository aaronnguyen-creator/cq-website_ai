import Link from "next/link";

export function InsightCTA() {
  return (
    <section className="bg-[#F7F8FB] py-16 text-[#0B0F14]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9CA3AF]">
          Next Steps
        </p>
        <h2 className="text-3xl font-heading font-semibold">
          Ready to see CQ in your workflow?
        </h2>
        <p className="text-base text-[#4B5563]">
          We&apos;ll tailor a walkthrough to your diligence, sourcing, or LP
          communication needs.
        </p>
        <Link
          href="/book-demo"
          className="rounded-full bg-[#0B0F14] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#0B0F14]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/30"
        >
          Request a demo
        </Link>
      </div>
    </section>
  );
}
