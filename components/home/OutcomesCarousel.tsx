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
    <section className="bg-[#F7F8FB] py-20 text-[#0B0F14]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9CA3AF]">
              Outcomes
            </p>
            <h2 className="mt-2 text-3xl font-heading font-semibold">
              {data.title}
            </h2>
            <p className="mt-3 text-base text-[#4B5563]">
              {data.description}
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              className="rounded-full border border-black/10 bg-white p-3 text-[#0B0F14] transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
              onClick={() => scrollByAmount(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="rounded-full border border-black/10 bg-white p-3 text-[#0B0F14] transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
              onClick={() => scrollByAmount(1)}
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
        >
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="snap-start rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#f3f5f7] to-white">
                {card.image?.src ? (
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full" />
                )}
              </div>
              <h3 className="mt-4 text-xl font-heading font-semibold">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
