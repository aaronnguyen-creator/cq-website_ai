"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { HeroContent } from "@/lib/product/featurePageTypes";
import { Button } from "@/components/ui/marketing-button";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

type FeatureHeroProps = {
  data: HeroContent;
};

export function FeatureHero({ data }: FeatureHeroProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [imageFallback, setImageFallback] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      const target = imageRef.current;
      if (target) {
        target.style.height = "100vh";
        target.style.transform = "translateY(0px) scale(1)";
        target.style.borderRadius = "16px";
      }
      return;
    }

    const wrapper = wrapperRef.current;
    const target = imageRef.current;
    if (!wrapper || !target) return;

    let rafId: number | null = null;

    const clamp = (value: number, min = 0, max = 1) =>
      Math.min(Math.max(value, min), max);

    const update = () => {
      if (!wrapper || !target) return;
      const start = wrapper.offsetTop;
      const height = wrapper.offsetHeight;
      const end = start + height - window.innerHeight;
      const progress =
        end - start <= 0
          ? 1
          : clamp((window.scrollY - start) / (end - start));

      const heightValue = 55 + 45 * progress;
      const translateY = 24 * (1 - progress);
      const scale = 1.05 - 0.05 * progress;
      const radius = 24 - 8 * progress;

      target.style.height = `${heightValue}vh`;
      target.style.transform = `translateY(${translateY}px) scale(${scale})`;
      target.style.borderRadius = `${radius}px`;
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id={data.id}
      ref={wrapperRef}
      className="relative z-0 h-[160vh] bg-gradient-to-b from-[#050608] via-[#050608] to-[#09090f]"
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-between gap-10 px-4 pb-12 pt-24 sm:px-6 lg:px-12">
        <div className="mx-auto w-full max-w-6xl space-y-6 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            {data.eyebrow}
          </p>
          <h1 className="text-4xl font-heading font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="max-w-3xl text-lg text-white/80">{data.description}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>
            {data.secondaryCta ? (
              <Button
                href={data.secondaryCta.href}
                variant="secondary"
              >
                {data.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <div
          ref={imageRef}
          className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.5)] transition-[height,transform,border-radius] duration-500 ease-out"
          style={{ height: "55vh" }}
        >
          {imageFallback ? (
            <div className="h-full w-full bg-gradient-to-br from-[#101828] via-[#111111] to-[#050505] p-10">
              <div className="h-full w-full rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent)]" />
            </div>
          ) : (
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width ?? 1600}
              height={data.image.height ?? 900}
              className="h-full w-full object-cover"
              priority
              onError={() => setImageFallback(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
