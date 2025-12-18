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

  const slideWidth = 100 / total;
  const trackWidth = `${total * 100}%`;

  return (
    <section className="bg-white py-20 text-[#0B0F14]">
      <div className="mx-auto w-full max-w-5xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9CA3AF]">
          Testimonials
        </p>

        <h2 className="mt-3 text-3xl font-heading font-semibold">
          {data.title}
        </h2>

        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              // ✅ move by one slide width (percent of TRACK), not 100%
              transform: `translate3d(-${index * slideWidth}%, 0, 0)`,
              width: trackWidth,
            }}
          >
            {items.map((item) => (
              <div
                key={`${item.name}-${item.company}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${slideWidth}%` }} // each slide is 100/total % of track
              >
                <div className="mx-auto max-w-3xl rounded-[32px] border border-black/10 bg-[#F7F8FB] p-8 shadow-[0_25px_60px_rgba(15,23,42,0.05)]">
                  <p className="text-lg text-[#0F172A]">“{item.quote}”</p>

                  <div className="mt-6 flex flex-col items-center gap-3 text-sm text-[#4B5563] sm:flex-row sm:justify-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/10 bg-gradient-to-br from-[#f4f6fb] to-white">
                      {item.avatar ? (
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-base font-semibold text-[#0B0F14]">
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

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
            onClick={() => goTo(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <span className="text-sm text-[#6B7280]">
            {index + 1} / {total}
          </span>

          <button
            type="button"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
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
