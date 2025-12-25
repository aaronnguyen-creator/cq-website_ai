"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { OutcomesContent } from "@/lib/home/types";
import { cn } from "@/lib/utils";

type OutcomesCarouselProps = {
  data: OutcomesContent;
};

export function OutcomesCarousel({ data }: OutcomesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = data.cards ?? [];

  const scrollByAmount = (direction: number) => {
    const node = scrollRef.current;
    if (!node) return;

    const card = node.querySelector<HTMLElement>("[data-card='true']");
    const step = card ? card.offsetWidth + 24 : node.clientWidth * 0.8; // 24 = gap-6

    node.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  // Track active slide (for dots + better UX)
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const onScroll = () => {
      const children = Array.from(
        node.querySelectorAll<HTMLElement>("[data-card='true']")
      );
      if (!children.length) return;

      const left = node.scrollLeft;
      let bestIdx = 0;
      let bestDist = Infinity;

      children.forEach((el, idx) => {
        const dist = Math.abs(el.offsetLeft - left);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIndex(bestIdx);
    };

    onScroll();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, [cards.length]);

  const showNav = cards.length > 1;

  const eyebrow = useMemo(() => "SPEED & SIMPLICITY", []);

  return (
    <section className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {eyebrow}
            </p>

            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h2>

            {data.description ? (
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {data.description}
              </p>
            ) : null}

            {/* Optional inline CTA (remove if you don’t want it) */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              >
                Start free trial <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Desktop arrows */}
          {showNav ? (
            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                className="rounded-full border border-border bg-background p-3 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                onClick={() => scrollByAmount(-1)}
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                className="rounded-full border border-border bg-background p-3 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                onClick={() => scrollByAmount(1)}
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          ) : null}
        </div>

        {/* Slider */}
        <div className="mt-10">
          <div
            ref={scrollRef}
            tabIndex={0}
            aria-label="Outcomes slider"
            className={cn(
              "flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6",
              "scrollbar-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
            )}
          >
            {cards.map((card) => (
              <article
                key={card.title}
                data-card="true"
                className={cn(
                  "relative min-w-[280px] snap-start overflow-hidden rounded-3xl border border-border bg-card",
                  "shadow-[0_18px_45px_rgba(15,23,42,0.06)]",
                  "sm:min-w-[360px] lg:min-w-[420px]"
                )}
              >
                {/* Top “wireframe” vibe: dashed frame + clean spacing */}
                <div className="pointer-events-none absolute inset-4 rounded-2xl border border-border/60 [border-style:dashed]" />

                <div className="relative p-6 sm:p-8">
                  {/* Visual block */}
                  <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/40 aspect-[16/9]">
                    {card.image?.src ? (
                      <Image
                        src={card.image.src}
                        alt={card.image.alt ?? card.title}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 520px"
                        className="object-contain"
                        priority={false}
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>

                  {/* Copy */}
                  <h3 className="mt-5 text-xl font-heading font-semibold md:text-2xl">
                    {card.title}
                  </h3>
                  {card.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {card.description}
                    </p>
                  ) : null}

                  {/* Micro hint row (optional) */}
                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      Step {cards.findIndex((c) => c.title === card.title) + 1} of{" "}
                      {cards.length}
                    </span>
                    <span className="font-semibold text-foreground/70">
                      Swipe →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          {showNav ? (
            <div className="mt-2 flex items-center justify-center gap-2">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-2 w-2 rounded-full border border-border transition",
                    idx === activeIndex ? "bg-foreground" : "bg-background"
                  )}
                  onClick={() => {
                    const node = scrollRef.current;
                    if (!node) return;
                    const el = node.querySelectorAll<HTMLElement>(
                      "[data-card='true']"
                    )[idx];
                    if (!el) return;
                    node.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
