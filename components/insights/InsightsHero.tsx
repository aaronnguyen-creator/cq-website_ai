import Link from "next/link";
import { Button } from "@/components/ui/button";

export function InsightsHero() {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 md:gap-10 md:px-6 md:py-20">
        <p className="text-sm font-semibold text-muted-foreground">
          Insights library
        </p>
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl font-heading font-semibold tracking-tight md:text-6xl">
            Insights for alternative investment teams
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Practical research on fundraising workflows, investor discovery, AI-assisted diligence, and portfolio collaboration—written for teams that need clarity and proof, not hype.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <Button asChild size="lg">
            <Link href="/request-demo">Request a demo</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#insights-subscribe">Subscribe</a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            Updated weekly
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden />
            Diligence, AI, and workflow playbooks
          </div>
        </div>
      </div>
    </section>
  );
}
