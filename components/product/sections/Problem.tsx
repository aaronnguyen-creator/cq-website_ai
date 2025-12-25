"use client";

import * as React from "react";
import type { ProblemConfig } from "@/lib/product/featurePageTypes";

/**
 * Problem Section — "Without CQ..."
 * Clean + finance-grade cards
 * - Animate once on enter viewport (no bounce)
 * - Stagger reveal
 * - Hover: subtle red halo glow (action-needed) + red border
 * - No "Alert" tag chip
 * - Icon: warning list (not "!")
 *
 * NOTE: This component does NOT hardcode content.
 * It renders from `data` (allocatorsContent.ts).
 */
type ProblemProps = {
  data: ProblemConfig;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function WarningListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {/* warning triangle */}
      <path
        d="M12 3.5 2.6 20.5c-.5.9.1 2 1.1 2h16.6c1 0 1.6-1.1 1.1-2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* exclamation in triangle */}
      <path
        d="M12 9v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 16.8h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* list lines to the right */}
      <path
        d="M15.6 10.2h4.2M15.6 13h4.2M15.6 15.8h3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Problem({ data }: ProblemProps) {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [entered, setEntered] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          io.disconnect(); // animate once
        }
      },
      // Trigger when top approaches ~70% viewport (enter threshold)
      { threshold: 0.12, rootMargin: "0px 0px -30% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const eyebrow = data.eyebrow ?? "WITHOUT CQ";
  const title = data.title ?? "Without CQ...";
  // optional: support either `subhead` or keep it empty
  const subhead = (data as any).subhead ?? "";

  // Back-compat: if your current ProblemConfig uses `bullets: string[]`,
  // we render them as 6 cards (first 6 items). If you later add `cards`,
  // it will use that.
  const cards: Array<{ title: string; description: string }> = React.useMemo(() => {
    const anyData = data as any;

    if (Array.isArray(anyData.cards) && anyData.cards.length) {
      return anyData.cards.slice(0, 6);
    }

    // If only bullets exist, map bullets into cards with a generic title.
    // You can replace with `cards` in content for full control.
    if (Array.isArray(anyData.bullets) && anyData.bullets.length) {
      return anyData.bullets.slice(0, 6).map((text: string, i: number) => ({
        title: `Risk ${i + 1}`,
        description: text,
      }));
    }

    return [];
  }, [data]);

  const shouldShow = entered || reducedMotion;

  const ease = "cubic-bezier(0.2, 0.8, 0.2, 1)";
  const dur = 320;

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
      }}
      className="bg-background py-16 text-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Surface */}
        <div className="rounded-3xl border border-border bg-card p-7 md:p-10">
          {/* Header */}
          <div
            style={{
              opacity: shouldShow ? 1 : 0,
              transform: shouldShow ? "translateY(0px)" : "translateY(14px)",
              transition: reducedMotion
                ? undefined
                : `opacity ${dur}ms ${ease}, transform ${dur}ms ${ease}`,
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                {eyebrow}
              </p>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-12 md:items-end">
              <h2 className="text-3xl font-heading font-semibold tracking-tight md:col-span-6 md:text-4xl">
                {title}
              </h2>

              {subhead ? (
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6 md:text-base">
                  {subhead}
                </p>
              ) : null}
            </div>
          </div>

          {/* Subtle divider */}
          <div
            style={{
              opacity: shouldShow ? 1 : 0,
              transform: shouldShow ? "scaleX(1)" : "scaleX(0.92)",
              transformOrigin: "left",
              transition: reducedMotion
                ? undefined
                : `opacity 420ms ${ease} 120ms, transform 420ms ${ease} 120ms`,
            }}
            className="mt-8 h-px w-full bg-border"
          />

          {/* Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.slice(0, 6).map((card, idx) => {
              const delay = 160 + idx * 90;

              return (
                <div
                  key={`${card.title}-${idx}`}
                  style={{
                    opacity: shouldShow ? 1 : 0,
                    transform: shouldShow ? "translateY(0px)" : "translateY(12px)",
                    transition: reducedMotion
                      ? undefined
                      : `opacity ${dur}ms ${ease} ${delay}ms, transform ${dur}ms ${ease} ${delay}ms`,
                  }}
                >
                  <div
                    className={[
                      "group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-6",
                      "shadow-[0_10px_30px_rgba(15,23,42,0.04)]",
                      "transition duration-200 ease-out",
                      // hover: subtle red alert glow (NOT too strong)
                      "hover:border-red-500/30 hover:shadow-[0_18px_55px_rgba(239,68,68,0.14)]",
                      // keyboard focus
                      "focus-within:border-red-500/35 focus-within:ring-2 focus-within:ring-red-500/20 focus-within:ring-offset-2",
                    ].join(" ")}
                  >
                    {/* Red halo glow layer (subtle) */}
                    <div
                      className="pointer-events-none absolute -inset-3 rounded-3xl opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(600px circle at 50% 0%, rgba(239,68,68,0.22), transparent 60%)",
                      }}
                    />

                    {/* Icon badge */}
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition duration-200 group-hover:border-red-500/25 group-hover:bg-red-500 group-hover:text-white">
                      <WarningListIcon className="h-5 w-5" />
                    </div>

                    <h3 className="relative mt-4 text-lg font-heading font-semibold tracking-tight md:text-xl">
                      {card.title}
                    </h3>

                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
