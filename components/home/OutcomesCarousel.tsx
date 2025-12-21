"use client";

import { useRef } from "react";
import Image from "next/image";
import type { OutcomesContent } from "@/lib/home/types";

type OutcomesCarouselProps = {
  data: OutcomesContent;
};

export function OutcomesCarousel({ data }: OutcomesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: number) => {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollBy({
      left: direction * node.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-muted py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Outcomes
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {data.description}
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              className="rounded-full border border-border bg-background p-3 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll outcomes left"
            >
              ←
            </button>
            <button
              type="button"
              className="rounded-full border border-border bg-background p-3 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll outcomes right"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Outcome cards"
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="min-w-[280px] snap-start rounded-2xl border border-border bg-card p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] sm:min-w-[320px] lg:min-w-[360px]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-border/60 bg-muted">
                {card.image?.src ? (
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-contain p-6"
                  />
                ) : (
                  <div className="h-full w-full" />
                )}
              </div>
              <h3 className="mt-4 text-xl font-heading font-semibold">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
