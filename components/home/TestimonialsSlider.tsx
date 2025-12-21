"use client";

import { useState } from "react";
import Image from "next/image";
import type { TestimonialsContent } from "@/lib/home/types";

type TestimonialsSliderProps = {
  data: TestimonialsContent;
};

export function TestimonialsSlider({ data }: TestimonialsSliderProps) {
  const items = data?.items ?? [];
  const total = items.length;
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
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-heading font-semibold tracking-tight md:text-4xl">
            {data.title}
          </h2>
        </div>

        {/* Slider */}
        <div
          className="mt-10 overflow-hidden"
          role="region"
          aria-live="polite"
          aria-label="Customer testimonials"
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              width: `${total * 100}%`,
              transform: `translate3d(-${index * (100 / total)}%, 0, 0)`,
            }}
          >
            {items.map((item) => (
              <div
                key={`${item.name}-${item.company}`}
                className="w-full flex-shrink-0"
                style={{ width: `${100 / total}%` }}
              >
                {/* Make the card full-width of the section container */}
                <div className="w-full rounded-[32px] border border-border bg-card p-8 text-left shadow-[0_25px_60px_rgba(15,23,42,0.06)] md:p-10">
                  <p className="text-lg leading-relaxed text-foreground md:text-xl">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex flex-col items-start gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border/60 bg-muted">
                      {item.avatar ? (
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      ) : null}
                    </div>

                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p>
                        {item.title}
                        {item.company ? `, ${item.company}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
            onClick={() => goTo(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <span className="text-sm text-muted-foreground">
            {index + 1} / {total}
          </span>

          <button
            type="button"
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
            onClick={() => goTo(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
