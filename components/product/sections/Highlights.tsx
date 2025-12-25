import type { CapabilitiesConfig, Capability } from "@/lib/product/featurePageTypes";

function iconFor(cap: Capability["icon"]) {
  // no external libs needed; safe fallback
  switch (cap) {
    case "sparkles":
      return "✦";
    case "shield":
      return "⛨";
    case "workflow":
      return "⟲";
    case "search":
      return "⌕";
    case "file":
      return "⧉";
    case "chart":
      return "▦";
    default:
      return "•";
  }
}

type HighlightsProps = {
  data: CapabilitiesConfig;
};

export function Highlights({ data }: HighlightsProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Key capabilities
        </p>
        <h2 className="mt-3 text-3xl font-heading font-semibold tracking-tight md:text-4xl">
          {data.title}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background shadow-sm transition group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="text-lg" aria-hidden>
                  {iconFor(item.icon)}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-heading font-semibold md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
