import { cn } from "@/lib/utils";
import type { NarrativeSectionContent } from "@/lib/about/types";

type NarrativeSectionProps = {
  data: NarrativeSectionContent;
  tone?: "light" | "dark";
};

export function NarrativeSection({
  data,
  tone = "light",
}: NarrativeSectionProps) {
  const isDark = tone === "dark";

  return (
    <section aria-label={data.heading} className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div
          className={cn(
            "rounded-[32px] border p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-12",
            isDark
              ? "border-white/15 bg-[#050608] text-white"
              : "border-border bg-card/80 text-foreground"
          )}
        >
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <div className="space-y-4">
              <h2
                className={cn(
                  "text-3xl font-heading font-semibold tracking-tight md:text-4xl",
                  isDark && "text-white"
                )}
              >
                {data.heading}
              </h2>
            </div>
            <div className="space-y-5">
              {data.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className={cn(
                    "text-base leading-relaxed text-muted-foreground md:text-lg",
                    isDark && "text-white/80"
                  )}
                >
                  {paragraph}
                </p>
              ))}
              {data.bullets?.length ? (
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {data.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={cn(
                        "rounded-2xl border p-4 text-sm leading-relaxed md:text-base",
                        isDark
                          ? "border-white/15 bg-white/5 text-white/85"
                          : "border-border/70 bg-background/80 text-muted-foreground"
                      )}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
