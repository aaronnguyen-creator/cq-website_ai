import { Button } from "@/components/ui/button";

export function SubscribeCTA() {
  return (
    <section id="insights-subscribe" className="bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-card/90 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">
                Stay updated
              </p>
              <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
                Subscribe to CQ insights
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Weekly breakdowns on fundraising workflows, diligence playbooks, and AI-assisted processes—written for teams that need clarity and proof.
              </p>
            </div>
            <form className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <label className="sr-only" htmlFor="insights-email">
                Email address
              </label>
              <input
                id="insights-email"
                type="email"
                required
                placeholder="Enter your work email"
                className="w-full rounded-full border border-border bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 sm:max-w-sm"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-muted-foreground">
              We send one roundup per week. You can unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
