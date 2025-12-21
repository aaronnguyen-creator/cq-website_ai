"use client";

import { useState } from "react";
import Image from "next/image";

import type { MissionSliderContent } from "@/lib/about/types";

type MissionSliderProps = {
  data: MissionSliderContent;
};

export function MissionSlider({ data }: MissionSliderProps) {
  const slides = data.slides ?? [];
  const total = slides.length;
  const [index, setIndex] = useState(0);

  if (!total) return null;

  const goTo = (direction: number) => {
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  return (
    <section className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Mission
          </p>
          <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
            {data.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {data.description}
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden"
          role="region"
          aria-label="CQ mission initiatives"
          aria-live="polite"
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              width: `${total * 100}%`,
              transform: `translate3d(-${index * (100 / total)}%, 0, 0)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="w-full flex-shrink-0"
                style={{ width: `${100 / total}%` }}
              >
                <article className="rounded-[32px] border border-border bg-card/80 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-[32px] border-b border-border/70 bg-muted md:h-80">
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 960px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6 md:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      Mission focus
                    </p>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">
                      {slide.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {slide.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              onClick={() => goTo(-1)}
              aria-label="Previous mission card"
            >
              ←
            </button>
            <button
              type="button"
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              onClick={() => goTo(1)}
              aria-label="Next mission card"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
