"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { SolutionContent } from "@/lib/product/featurePageTypes";
import { cn } from "@/lib/utils";

type SolutionIntroProps = {
  data: SolutionContent;
};

export function SolutionIntro({ data }: SolutionIntroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);
  const features = data.features ?? [];

  useEffect(() => {
    if (features.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.15 }
    );

    featureRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [features.length]);

  const activeFeature = features[activeIndex] ?? features[0];
  const progress =
    features.length > 0
      ? ((activeIndex + 1) / features.length) * 100
      : 100;

  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {data.heading}
        </p>
        <h2 className="mt-4 text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
          {data.subheading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {data.body}
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-10 lg:mt-16 lg:flex-row">
        <div className="order-1 lg:order-1 lg:w-5/12">
          <div className="relative pl-6">
            <span
              className="absolute left-0 top-0 h-full w-px bg-border"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 top-0 w-px bg-primary transition-all duration-300 ease-out"
              style={{ height: `${progress}%` }}
              aria-hidden="true"
            />
            <div className="space-y-6">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                const detailId = `${data.id}-feature-${index}`;
                return (
                  <div
                    key={feature.title}
                    ref={(node) => {
                      featureRefs.current[index] = node;
                    }}
                    data-index={index}
                    role="button"
                    tabIndex={0}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "relative rounded-2xl border p-6 text-left transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
                      isActive
                        ? "border-primary bg-primary/5 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
                        : "border-border bg-card/80 hover:border-primary/40"
                    )}
                    aria-expanded={isActive}
                    aria-controls={detailId}
                    aria-current={isActive ? "true" : "false"}
                  >
                    <span
                      className={cn(
                        "absolute -left-9 top-7 h-3 w-3 rounded-full border",
                        isActive
                          ? "border-primary bg-primary"
                          : "border-border bg-background"
                      )}
                      aria-hidden="true"
                    />
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl font-heading font-semibold sm:text-2xl">
                      {feature.title}
                    </h3>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-200 ease-out",
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                      id={detailId}
                      aria-hidden={!isActive}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>
                        {feature.bullets && feature.bullets.length > 0 ? (
                          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            {feature.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2">
                                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/60" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="order-0 lg:order-2 lg:w-7/12">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_35px_100px_rgba(15,23,42,0.12)]">
              {activeFeature ? (
                <Image
                  key={activeFeature.image.src}
                  src={activeFeature.image.src}
                  alt={activeFeature.image.alt}
                  width={activeFeature.image.width ?? 1200}
                  height={activeFeature.image.height ?? 800}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
