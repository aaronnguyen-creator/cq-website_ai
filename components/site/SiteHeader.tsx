"use client";

import { useRef, useState, type FocusEvent, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavCta, NavItem } from "@/lib/nav";
import { navConfig } from "@/lib/nav";
import { cn } from "@/lib/utils";

const linkTriggerClasses =
  "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const dropdownCardClasses =
  "rounded-2xl border border-border bg-muted/40 p-4 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30";

const MobileNav = ({ links, ctas }: { links: NavItem[]; ctas: NavCta[] }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="secondary"
        size="icon"
        className="lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      aria-label="Navigation menu"
      className="flex w-full flex-col gap-6 border-l border-border bg-background/95 px-4 pb-10 pt-12 text-foreground sm:max-w-sm"
    >
      <div>
        <p className="font-heading text-2xl tracking-tight text-foreground">
          CQ
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Navigate the CQ platform.
        </p>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex-1 space-y-6 overflow-y-auto"
      >
        {links.map((link) => (
          <div key={link.title} className="space-y-3">
            {link.disabled ? (
              <span
                className="block text-base font-heading text-muted-foreground"
                aria-disabled="true"
              >
                {link.title}
              </span>
            ) : (
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className="block text-base font-heading text-foreground"
                >
                  {link.title}
                </Link>
              </SheetClose>
            )}
            <p className="text-sm text-muted-foreground">
              {link.description}
            </p>
            {link.items?.length ? (
              <div className="space-y-3 border-l border-border/70 pl-4">
                {link.items.map((sub) => (
                  <SheetClose asChild key={sub.href}>
                    <Link
                      href={sub.href}
                      className="block rounded-2xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground transition hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                    >
                      <span className="font-semibold">{sub.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {sub.description}
                      </span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
      <div className="space-y-3">
        {ctas.map((cta) => (
          <SheetClose asChild key={cta.label}>
            <Button
              asChild
              variant={cta.variant === "primary" ? "default" : "secondary"}
              className="w-full"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </SheetClose>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

export function SiteHeader() {
  const { links, ctas } = navConfig;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  const activeItem = links.find(
    (link) => link.title === activeMenu && link.items?.length
  );

  const handleWrapperBlur = (event: FocusEvent<HTMLDivElement>) => {
    const next = event.relatedTarget;
    if (!(next instanceof Node) || !desktopNavRef.current?.contains(next)) {
      setActiveMenu(null);
    }
  };

  const handleWrapperLeave = (event: MouseEvent<HTMLDivElement>) => {
    const next = event.relatedTarget;
    if (!(next instanceof Node) || !desktopNavRef.current?.contains(next)) {
      setActiveMenu(null);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 text-foreground backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center" aria-label="CQ home">
          <Image
            src="/capq-logo.svg"
            alt="CQ"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </Link>

        <div
          ref={desktopNavRef}
          className="relative hidden flex-1 items-center justify-between gap-6 lg:flex"
          onMouseLeave={handleWrapperLeave}
          onBlurCapture={handleWrapperBlur}
        >
          <nav
            className="flex flex-1 items-center gap-1"
            aria-label="Primary navigation"
          >
            {links.map((item) => {
              if (item.items?.length) {
                const isActive = activeMenu === item.title;
                return (
                  <div key={item.title} className="relative">
                    <button
                      type="button"
                      className={cn(linkTriggerClasses, "flex items-center gap-1")}
                      aria-haspopup="true"
                      aria-expanded={isActive}
                      onMouseEnter={() => setActiveMenu(item.title)}
                      onFocus={() => setActiveMenu(item.title)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") {
                          setActiveMenu(null);
                        }
                      }}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition duration-200",
                          isActive ? "rotate-180 text-foreground" : "text-foreground/60"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                );
              }
              if (item.disabled) {
                return (
                  <span
                    key={item.title}
                    className={cn(
                      linkTriggerClasses,
                      "cursor-not-allowed text-muted-foreground"
                    )}
                    aria-disabled="true"
                  >
                    {item.title}
                  </span>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={linkTriggerClasses}
                  onMouseEnter={() => setActiveMenu(null)}
                  onFocus={() => setActiveMenu(null)}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                asChild
                variant={cta.variant === "primary" ? "default" : "secondary"}
                className={cn(
                  "px-6 py-2 text-sm font-semibold",
                  cta.variant === "primary" && "min-w-[160px]"
                )}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>

          {activeItem ? (
            <div className="absolute left-0 right-0 top-full z-50">
              <div className="pt-2">
                <div
                  className="rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]"
                  onMouseEnter={() => setActiveMenu(activeItem.title)}
                >
                  <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[320px_1fr]">
                    <div className="space-y-3 self-start">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        {activeItem.title}
                      </p>
                      <p className="text-2xl font-heading text-foreground">
                        {activeItem.description}
                      </p>
                    </div>
                    <div className="min-h-0 max-h-[60vh] overflow-auto pr-2">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {activeItem.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={dropdownCardClasses}
                          >
                            <span className="text-base font-heading text-foreground">
                              {subItem.title}
                            </span>
                            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                              {subItem.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <MobileNav links={links} ctas={ctas} />
      </div>
    </header>
  );
}
