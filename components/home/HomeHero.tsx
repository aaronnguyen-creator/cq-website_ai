"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/lib/home/types";

type HomeHeroProps = {
  data: HeroContent;
};

export function HomeHero({ data }: HomeHeroProps) {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Cursor target (%)
    let targetX = 50;
    let targetY = 32;

    // Smoothed glow position (%)
    let glowX = 50;
    let glowY = 32;

    let rafId: number | null = null;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(Math.max(v, min), max);

    const setGlow = (x: number, y: number) => {
      el.style.setProperty("--gx", `${x}%`);
      el.style.setProperty("--gy", `${y}%`);
    };

    // initial
    setGlow(glowX, glowY);

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = clamp(((e.clientX - rect.left) / rect.width) * 100, 0, 100);
      const y = clamp(((e.clientY - rect.top) / rect.height) * 100, 0, 100);

      targetX = x;
      targetY = y;

      // Reduced motion: snap directly to cursor
      if (prefersReduced) {
        glowX = targetX;
        glowY = targetY;
        setGlow(glowX, glowY);
      }
    };

    const onLeave = () => {
      // Return to default center-ish position
      targetX = 50;
      targetY = 32;
    };

    const animate = () => {
      // IMPORTANT:
      // If you want "slow + smooth", the glow MUST lag slightly behind cursor.
      // A single element cannot be both perfectly centered AND eased (physics constraint).
      // This is the best premium compromise: slow trailing that feels attached.
      const ease = 0.05; // smaller = slower (try 0.035–0.06)

      glowX += (targetX - glowX) * ease;
      glowY += (targetY - glowY) * ease;

      setGlow(glowX, glowY);
      rafId = requestAnimationFrame(animate);
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onLeave);

    if (!prefersReduced) rafId = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-16 text-foreground md:px-6 md:py-24"
    >
      {/* Background (white + grid + single trailing glow) */}
      <div className="pointer-events-none absolute inset-0">
        {/* single trailing glow */}
        <div className="hero-halo absolute inset-0" />

        {/* square grid lines */}
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(15,23,42,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.22)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2v3" />
              <path d="M12 19v3" />
              <path d="M4.93 4.93l2.12 2.12" />
              <path d="M16.95 16.95l2.12 2.12" />
              <path d="M2 12h3" />
              <path d="M19 12h3" />
              <path d="M4.93 19.07l2.12-2.12" />
              <path d="M16.95 7.05l2.12-2.12" />
              <path d="M9 10a3 3 0 0 1 6 0v1a2 2 0 0 0 1 1.73V15a4 4 0 0 1-8 0v-2.27A2 2 0 0 0 9 11z" />
            </svg>
          </span>
          <span>{data.eyebrow}</span>
        </div>

        {/* Title */}
        <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {data.title}
        </h1>

        {/* Short description (max 2 lines) */}
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg line-clamp-2">
          {data.description}
        </p>

        {/* CTA */}
        <div className="mt-2 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-7"
          >
            <Link href={data.secondaryCta.href}>{data.secondaryCta.label}</Link>
          </Button>
        </div>

        {/* Centered hero image */}
        <div className="mt-10 w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_30px_80px_rgba(2,6,23,0.08)]">
            <div className="relative aspect-[16/9] w-full">
              {data.heroImage?.src ? (
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 960px"
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-muted" />
              )}
            </div>
          </div>
        </div>

        {/* Proof bar */}
        <div className="mt-8 w-full max-w-5xl rounded-full border border-border bg-black/100 px-6 py-4 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
            {data.proofLabel}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {data.proofLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={170}
                    height={52}
                    className="h-8 w-auto object-contain opacity-80"
                  />
                ) : (
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single halo glow CSS */}
      <style jsx global>{`
        .hero-halo {
  background: radial-gradient(
    640px 640px at var(--gx, 50%) var(--gy, 32%),
    hsl(var(--primary) / 0.24) 0%,
    hsl(var(--primary) / 0.15) 26%,
    hsl(var(--primary) / 0.08) 46%,
    transparent 68%
  );
  filter: blur(10px);
  will-change: background;
}
      `}</style>
    </section>
  );
}
