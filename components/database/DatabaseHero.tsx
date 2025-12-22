type DatabaseHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  totalCount: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");

export function DatabaseHero({
  eyebrow,
  title,
  description,
  totalCount,
}: DatabaseHeroProps) {
  return (
    <section
      aria-labelledby="database-hero-heading"
      className="bg-background py-16 text-foreground md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card/70 p-8 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.15),_transparent_55%)]"
          />
          <div className="relative space-y-6">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            <div className="space-y-4">
              <h1
                id="database-hero-heading"
                className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl"
              >
                {title}
              </h1>
              <p className="max-w-3xl text-base font-sans leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Browse {numberFormatter.format(totalCount)}{" "}
              {totalCount === 1 ? "firm" : "firms"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
