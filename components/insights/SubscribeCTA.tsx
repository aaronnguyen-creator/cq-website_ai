import { Button } from "@/components/ui/button";

export function SubscribeCTA() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 text-white">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 via-transparent to-white/5 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
          Stay updated
        </p>
        <h2 className="mt-4 text-3xl font-heading font-semibold sm:text-4xl">
          Subscribe to new insights
        </h2>
        <p className="mt-4 text-base text-white/70 sm:text-lg">
          Weekly breakdowns on diligence, mandates, and AI workflows delivered
          straight to your inbox.
        </p>
        <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <label className="sr-only" htmlFor="insights-email">
            Email address
          </label>
          <input
            id="insights-email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-full border border-white/15 bg-black/20 px-5 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 sm:max-w-sm"
          />
          <Button type="submit" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
        <p className="mt-4 text-xs text-white/50">
          By subscribing you agree to receive CQ updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
