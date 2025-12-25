"use client";

import { useEffect, useRef, useState, type FocusEvent, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Database,
  Target,
  Mail,
  FolderClosed,
  Bot,
  FileSignature,
  Landmark,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navConfig, type NavLink, type ProductMenuItem } from "@/lib/nav";

const linkTriggerClasses =
  "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const dropdownCardClasses =
  "rounded-2xl border border-border bg-muted/40 p-4 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30";

const disabledLinkClasses = "pointer-events-none cursor-not-allowed opacity-60";

function ProductIcon({ name }: { name: ProductMenuItem["icon"] }) {
  const cls = "h-4 w-4";
  switch (name) {
    case "lpDatabase":
      return <Database className={cls} />;
    case "aiMatching":
      return <Target className={cls} />;
    case "coldEmail":
      return <Mail className={cls} />;
    case "dataRoom":
      return <FolderClosed className={cls} />;
    case "aiQa":
      return <Bot className={cls} />;
    case "nda":
      return <FileSignature className={cls} />;
    case "lpPortal":
      return <Landmark className={cls} />;
    case "commitment":
      return <TrendingUp className={cls} />;
    default:
      return <ArrowRight className={cls} />;
  }
}

/**
 * MOBILE NAV (Full-screen overlay + accordions + CTA fixed bottom)
 */
function MobileNav() {
  const { product, links, dropdowns, ctas } = navConfig;
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Open navigation menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        aria-label="Navigation menu"
        className="flex h-dvh w-full flex-col border-l border-border bg-background/95 px-4 pb-6 pt-10 text-foreground sm:max-w-md"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="CQ home">
            <Image
              src="/capq-logo.svg"
              alt="CQ"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <p className="font-heading text-lg tracking-tight">CQ</p>
              <p className="text-xs text-muted-foreground">Finance-grade fundraising OS</p>
            </div>
          </Link>
        </div>

        <nav className="mt-8 flex-1 space-y-4 overflow-y-auto pb-28" aria-label="Mobile navigation">
          {/* Product accordion */}
          <div className="rounded-2xl border border-border bg-card/60">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-4 text-left"
              onClick={() => setOpen(open === "product" ? null : "product")}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground">Product</span>
              <ChevronDown
                className={cn("h-5 w-5 text-foreground/70 transition", open === "product" && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {open === "product" ? (
              <div className="space-y-4 border-t border-border px-4 pb-4 pt-4">
                {product.columns.map((col) => (
                  <div key={col.title} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      {col.title}
                    </p>
                    <div className="space-y-2">
                      {col.items.map((item) =>
                        item.disabled ? (
                          <div
                            key={item.href}
                            className={cn(
                              "rounded-2xl border border-border bg-background px-4 py-3",
                              disabledLinkClasses
                            )}
                            aria-disabled="true"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                                <ProductIcon name={item.icon} />
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-2xl border border-border bg-background px-4 py-3 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                            >
                              <div className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                                  <ProductIcon name={item.icon} />
                                </span>
                                <div>
                                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                  <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                        )
                      )}
                    </div>
                  </div>
                ))}

                <div className="grid gap-2 pt-2 sm:grid-cols-2">
                  {product.footerCtas.map((cta) => (
                    <SheetClose asChild key={cta.href}>
                      <Link
                        href={cta.href}
                        className="inline-flex items-center justify-center rounded-2xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/70"
                      >
                        {cta.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Pricing */}
          <div className="rounded-2xl border border-border bg-card/60">
            <div className="px-4 py-4">
              {links.map((l) =>
                l.disabled ? (
                  <span key={l.href} className={cn("text-sm font-semibold uppercase tracking-[0.32em]", disabledLinkClasses)}>
                    {l.title}
                  </span>
                ) : (
                  <SheetClose asChild key={l.href}>
                    <Link href={l.href} className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground">
                      {l.title}
                    </Link>
                  </SheetClose>
                )
              )}
            </div>
          </div>

          {/* Resources accordion */}
          {dropdowns.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card/60">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-4 text-left"
                onClick={() => setOpen(open === group.title ? null : group.title)}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground">{group.title}</span>
                <ChevronDown
                  className={cn("h-5 w-5 text-foreground/70 transition", open === group.title && "rotate-180")}
                  aria-hidden="true"
                />
              </button>

              {open === group.title ? (
                <div className="space-y-2 border-t border-border px-4 pb-4 pt-4">
                  {group.items.map((item: NavLink) =>
                    item.disabled ? (
                      <div
                        key={item.href}
                        className={cn("rounded-2xl border border-border bg-background px-4 py-3", disabledLinkClasses)}
                        aria-disabled="true"
                      >
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        {item.description ? (
                          <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                        ) : null}
                      </div>
                    ) : (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-2xl border border-border bg-background px-4 py-3 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                        >
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          {item.description ? (
                            <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                          ) : null}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        {/* Fixed bottom CTA */}
        <div className="pointer-events-none fixed bottom-0 right-0 w-full sm:max-w-md">
          <div className="pointer-events-auto border-t border-border bg-background/95 px-4 py-4 backdrop-blur">
            {ctas.map((cta) =>
              cta.disabled ? (
                <Button
                  key={cta.label}
                  className={cn("w-full", disabledLinkClasses)}
                  aria-disabled="true"
                >
                  {cta.label}
                </Button>
              ) : (
                <SheetClose asChild key={cta.label}>
                  <Button asChild className="w-full">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </SheetClose>
              )
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/**
 * DESKTOP HEADER (Sticky + Product mega-menu + simple dropdowns)
 */
export function SiteHeader() {
  const { product, links, dropdowns, ctas } = navConfig;

  const [activeMenu, setActiveMenu] = useState<"product" | "resources" | "company" | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const openMenu = (menu: typeof activeMenu) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 80);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const handleWrapperBlur = (event: FocusEvent<HTMLDivElement>) => {
    const next = event.relatedTarget;
    if (!(next instanceof Node) || !desktopNavRef.current?.contains(next)) {
      setActiveMenu(null);
    }
  };

  const handleWrapperLeave = (event: MouseEvent<HTMLDivElement>) => {
    const next = event.relatedTarget;
    if (!(next instanceof Node) || !desktopNavRef.current?.contains(next)) {
      scheduleClose();
    }
  };

  const resourcesGroup = dropdowns.find((d) => d.title === "Resources");
  const companyGroup = dropdowns.find((d) => d.title === "Company");

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
          <nav className="flex flex-1 items-center gap-1" aria-label="Primary navigation">
            {/* Product (mega-menu) */}
            <div className="relative">
              <button
                type="button"
                className={cn(linkTriggerClasses, "flex items-center gap-1")}
                aria-haspopup="true"
                aria-expanded={activeMenu === "product"}
                onMouseEnter={() => openMenu("product")}
                onFocus={() => openMenu("product")}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActiveMenu(null);
                }}
              >
                Product
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition duration-200",
                    activeMenu === "product" ? "rotate-180 text-foreground" : "text-foreground/60"
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Pricing */}
            {links.map((item) =>
              item.disabled ? (
                <span key={item.href} className={cn(linkTriggerClasses, disabledLinkClasses)} aria-disabled="true">
                  {item.title}
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkTriggerClasses}
                  onMouseEnter={() => setActiveMenu(null)}
                  onFocus={() => setActiveMenu(null)}
                >
                  {item.title}
                </Link>
              )
            )}

            {/* Resources dropdown */}
            <div className="relative">
              <button
                type="button"
                className={cn(linkTriggerClasses, "flex items-center gap-1")}
                aria-haspopup="true"
                aria-expanded={activeMenu === "resources"}
                onMouseEnter={() => openMenu("resources")}
                onFocus={() => openMenu("resources")}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActiveMenu(null);
                }}
              >
                Resources
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition duration-200",
                    activeMenu === "resources" ? "rotate-180 text-foreground" : "text-foreground/60"
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Company dropdown */}
            <div className="relative">
              <button
                type="button"
                className={cn(linkTriggerClasses, "flex items-center gap-1")}
                aria-haspopup="true"
                aria-expanded={activeMenu === "company"}
                onMouseEnter={() => openMenu("company")}
                onFocus={() => openMenu("company")}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActiveMenu(null);
                }}
              >
                Company
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition duration-200",
                    activeMenu === "company" ? "rotate-180 text-foreground" : "text-foreground/60"
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>

          {/* CTA (high contrast) */}
          <div className="flex items-center gap-3">
            {ctas.map((cta) =>
              cta.disabled ? (
                <Button
                  key={cta.label}
                  className={cn("min-w-[180px] px-6 py-2 text-sm font-semibold", disabledLinkClasses)}
                  aria-disabled="true"
                >
                  {cta.label}
                </Button>
              ) : (
                <Button
                  key={cta.label}
                  asChild
                  className="min-w-[180px] px-6 py-2 text-sm font-semibold shadow-[0_18px_45px_rgba(59,130,246,0.25)]"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              )
            )}
          </div>

          {/* MENUS */}
          {activeMenu === "product" ? (
            <div
              className="absolute left-0 right-0 top-full z-50"
              onMouseEnter={() => openMenu("product")}
              onMouseLeave={scheduleClose}
            >
              <div className="pt-2">
                <div className="rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-8">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                          PRODUCT
                        </p>
                        <p className="text-2xl font-heading text-foreground">{product.description}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-3">
                      {product.columns.map((col) => (
                        <div key={col.title} className="space-y-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                            {col.title}
                          </p>

                          <div className="space-y-3">
                            {col.items.map((item) =>
                              item.disabled ? (
                                <div
                                  key={item.href}
                                  className={cn(
                                    "rounded-2xl border border-border bg-muted/30 p-4",
                                    disabledLinkClasses
                                  )}
                                  aria-disabled="true"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-border bg-background text-foreground">
                                      <ProductIcon name={item.icon} />
                                    </span>
                                    <div>
                                      <p className="text-base font-heading text-foreground">{item.title}</p>
                                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group rounded-2xl border border-border bg-muted/30 p-4 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition group-hover:bg-foreground group-hover:text-background">
                                      <ProductIcon name={item.icon} />
                                    </span>
                                    <div>
                                      <p className="text-base font-heading text-foreground">{item.title}</p>
                                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
                      <div className="flex items-center gap-3">
                        {product.footerCtas.map((cta) => (
                          <Link
                            key={cta.href}
                            href={cta.href}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
                            onClick={() => setActiveMenu(null)}
                          >
                            {cta.label}
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {activeMenu === "resources" && resourcesGroup ? (
            <div
              className="absolute left-0 right-0 top-full z-50"
              onMouseEnter={() => openMenu("resources")}
              onMouseLeave={scheduleClose}
            >
              <div className="pt-2">
                <div className="rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
                  <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[320px_1fr]">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        RESOURCES
                      </p>
                      <p className="text-2xl font-heading text-foreground">{resourcesGroup.description}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {resourcesGroup.items.map((sub) =>
                        sub.disabled ? (
                          <div
                            key={sub.href}
                            className={cn(dropdownCardClasses, disabledLinkClasses)}
                            aria-disabled="true"
                          >
                            <span className="text-base font-heading text-foreground">{sub.title}</span>
                            {sub.description ? (
                              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                                {sub.description}
                              </span>
                            ) : null}
                          </div>
                        ) : (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={dropdownCardClasses}
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="text-base font-heading text-foreground">{sub.title}</span>
                            {sub.description ? (
                              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                                {sub.description}
                              </span>
                            ) : null}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {activeMenu === "company" && companyGroup ? (
            <div
              className="absolute left-0 right-0 top-full z-50"
              onMouseEnter={() => openMenu("company")}
              onMouseLeave={scheduleClose}
            >
              <div className="pt-2">
                <div className="rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
                  <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[320px_1fr]">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        COMPANY
                      </p>
                      <p className="text-2xl font-heading text-foreground">{companyGroup.description}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {companyGroup.items.map((sub) =>
                        sub.disabled ? (
                          <div
                            key={sub.href}
                            className={cn(dropdownCardClasses, disabledLinkClasses)}
                            aria-disabled="true"
                          >
                            <span className="text-base font-heading text-foreground">{sub.title}</span>
                            {sub.description ? (
                              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                                {sub.description}
                              </span>
                            ) : null}
                          </div>
                        ) : (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={dropdownCardClasses}
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="text-base font-heading text-foreground">{sub.title}</span>
                            {sub.description ? (
                              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                                {sub.description}
                              </span>
                            ) : null}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
