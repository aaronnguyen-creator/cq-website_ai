"use client";

import {
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
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
} from "lucide-react";

import { cn } from "@/lib/utils";
import { navConfig, type NavLink, type ProductMenuItem, type NavCta } from "@/lib/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const linkTriggerClasses =
  "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const dropdownCardClasses =
  "rounded-2xl border border-border bg-muted/40 p-4 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30";

const disabledLinkClasses = "pointer-events-none cursor-not-allowed opacity-60";

type ActiveMenu = "Product" | "Resources" | "Company" | null;

function ProductIcon({ name }: { name: ProductMenuItem["icon"] }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "lpDatabase":
      return <Database className={cls} aria-hidden />;
    case "aiMatching":
      return <Target className={cls} aria-hidden />;
    case "coldEmail":
      return <Mail className={cls} aria-hidden />;
    case "dataRoom":
      return <FolderClosed className={cls} aria-hidden />;
    case "aiQa":
      return <Bot className={cls} aria-hidden />;
    case "nda":
      return <FileSignature className={cls} aria-hidden />;
    case "lpPortal":
      return <Landmark className={cls} aria-hidden />;
    case "commitment":
      return <TrendingUp className={cls} aria-hidden />;
    default:
      return <Database className={cls} aria-hidden />;
  }
}

function DesktopSimpleDropdown({
  title,
  description,
  items,
  isOpen,
}: {
  title: "Resources" | "Company";
  description: string;
  items: NavLink[];
  isOpen: boolean;
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full z-50 w-[520px] pt-2">
      <div className="rounded-[28px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
        <div className="grid gap-6 p-6 md:p-7">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {title}
            </p>
            <p className="text-lg font-heading text-foreground">{description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((it) =>
              it.disabled ? (
                <div
                  key={it.href}
                  className={cn(dropdownCardClasses, disabledLinkClasses)}
                  aria-disabled="true"
                >
                  <span className="text-base font-heading text-foreground">
                    {it.title}
                  </span>
                  {it.description ? (
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {it.description}
                    </span>
                  ) : null}
                </div>
              ) : (
                <Link key={it.href} href={it.href} className={dropdownCardClasses}>
                  <span className="text-base font-heading text-foreground">
                    {it.title}
                  </span>
                  {it.description ? (
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {it.description}
                    </span>
                  ) : null}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopProductMegaMenu({
  isOpen,
  onHoverKeepOpen,
}: {
  isOpen: boolean;
  onHoverKeepOpen: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 pt-2">
      <div
        className="rounded-[32px] border border-border bg-card shadow-[0_25px_60px_rgba(15,23,42,0.06)]"
        onMouseEnter={onHoverKeepOpen}
      >
        <div className="grid gap-8 p-6 md:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {navConfig.product.title}
            </p>
            <p className="text-2xl font-heading text-foreground">
              {navConfig.product.description}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {navConfig.product.columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  {col.title}
                </p>
                <div className="space-y-3">
                  {col.items.map((it) =>
                    it.disabled ? (
                      <div
                        key={it.href}
                        className={cn(
                          "group flex gap-3 rounded-2xl border border-border bg-muted/30 p-4",
                          disabledLinkClasses
                        )}
                        aria-disabled="true"
                      >
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-background">
                          <ProductIcon name={it.icon} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-heading font-semibold text-foreground">
                            {it.title}
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {it.description}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={it.href}
                        href={it.href}
                        className={cn(
                          "group relative flex gap-3 rounded-2xl border border-border bg-muted/30 p-4 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                        )}
                      >
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-background transition group-hover:bg-primary group-hover:text-primary-foreground">
                          <ProductIcon name={it.icon} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-heading font-semibold text-foreground">
                            {it.title}
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {it.description}
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5">
            <div className="flex flex-wrap gap-3">
              {navConfig.product.footerCtas.map((cta) =>
                cta.disabled ? (
                  <Button
                    key={cta.label}
                    variant="secondary"
                    className={cn(disabledLinkClasses)}
                    aria-disabled="true"
                  >
                    {cta.label}
                  </Button>
                ) : (
                  <Button key={cta.label} asChild variant="secondary">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNav({
  ctas,
}: {
  ctas: NavCta[];
}) {
  return (
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
        className="flex w-full flex-col gap-6 border-l border-border bg-background/95 px-4 pb-4 pt-10 text-foreground sm:max-w-sm"
      >
        <div>
          <p className="font-heading text-2xl tracking-tight text-foreground">CQ</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Navigate the platform.
          </p>
        </div>

        <nav className="flex-1 space-y-4 overflow-y-auto pr-1">
          {/* Product accordion */}
          <details className="rounded-2xl border border-border bg-card/60 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-base font-heading text-foreground">
              Product
              <ChevronDown className="h-4 w-4 text-foreground/70" aria-hidden />
            </summary>

            <div className="mt-4 space-y-5">
              {navConfig.product.columns.map((col) => (
                <div key={col.title} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                    {col.title}
                  </p>

                  <div className="space-y-2">
                    {col.items.map((it) =>
                      it.disabled ? (
                        <div
                          key={it.href}
                          className={cn(
                            "flex gap-3 rounded-2xl border border-border bg-background px-4 py-3",
                            disabledLinkClasses
                          )}
                          aria-disabled="true"
                        >
                          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-muted">
                            <ProductIcon name={it.icon} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">{it.title}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{it.description}</div>
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild key={it.href}>
                          <Link
                            href={it.href}
                            className="flex gap-3 rounded-2xl border border-border bg-background px-4 py-3 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                          >
                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-muted">
                              <ProductIcon name={it.icon} />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground">{it.title}</div>
                              <div className="mt-1 text-xs text-muted-foreground">{it.description}</div>
                            </div>
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </div>
                </div>
              ))}

              <div className="grid gap-2">
                {navConfig.product.footerCtas.map((cta) =>
                  cta.disabled ? (
                    <Button
                      key={cta.label}
                      variant="secondary"
                      className={cn("w-full", disabledLinkClasses)}
                      aria-disabled="true"
                    >
                      {cta.label}
                    </Button>
                  ) : (
                    <SheetClose asChild key={cta.label}>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href={cta.href}>{cta.label}</Link>
                      </Button>
                    </SheetClose>
                  )
                )}
              </div>
            </div>
          </details>

          {/* Pricing (simple link) */}
          {navConfig.links.map((l) =>
            l.disabled ? (
              <div
                key={l.href}
                className={cn(
                  "rounded-2xl border border-border bg-card/60 p-4 text-base font-heading text-foreground",
                  disabledLinkClasses
                )}
                aria-disabled="true"
              >
                {l.title}
              </div>
            ) : (
              <SheetClose asChild key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-2xl border border-border bg-card/60 p-4 text-base font-heading text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                >
                  {l.title}
                </Link>
              </SheetClose>
            )
          )}

          {/* Resources / Company accordions */}
          {navConfig.dropdowns.map((dd) => (
            <details
              key={dd.title}
              className="rounded-2xl border border-border bg-card/60 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-heading text-foreground">
                {dd.title}
                <ChevronDown className="h-4 w-4 text-foreground/70" aria-hidden />
              </summary>

              <div className="mt-4 space-y-2">
                {dd.items.map((it) =>
                  it.disabled ? (
                    <div
                      key={it.href}
                      className={cn(
                        "rounded-2xl border border-border bg-background px-4 py-3",
                        disabledLinkClasses
                      )}
                      aria-disabled="true"
                    >
                      <div className="text-sm font-semibold text-foreground">{it.title}</div>
                      {it.description ? (
                        <div className="mt-1 text-xs text-muted-foreground">{it.description}</div>
                      ) : null}
                    </div>
                  ) : (
                    <SheetClose asChild key={it.href}>
                      <Link
                        href={it.href}
                        className="block rounded-2xl border border-border bg-background px-4 py-3 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                      >
                        <div className="text-sm font-semibold text-foreground">{it.title}</div>
                        {it.description ? (
                          <div className="mt-1 text-xs text-muted-foreground">{it.description}</div>
                        ) : null}
                      </Link>
                    </SheetClose>
                  )
                )}
              </div>
            </details>
          ))}
        </nav>

        {/* Sticky CTA at bottom */}
        <div className="sticky bottom-0 bg-background/95 pt-3">
          <div className="space-y-3 border-t border-border/70 pt-4">
            {ctas.map((cta) =>
              cta.disabled ? (
                <Button
                  key={cta.label}
                  variant={cta.variant === "primary" ? "default" : "secondary"}
                  className={cn("w-full", disabledLinkClasses)}
                  aria-disabled="true"
                >
                  {cta.label}
                </Button>
              ) : (
                <SheetClose asChild key={cta.label}>
                  <Button
                    asChild
                    variant={cta.variant === "primary" ? "default" : "secondary"}
                    className="w-full"
                  >
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

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  const resources = navConfig.dropdowns.find((d) => d.title === "Resources");
  const company = navConfig.dropdowns.find((d) => d.title === "Company");

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

        {/* Desktop */}
        <div
          ref={desktopNavRef}
          className="relative hidden flex-1 items-center justify-between gap-6 lg:flex"
          onMouseLeave={handleWrapperLeave}
          onBlurCapture={handleWrapperBlur}
        >
          <nav className="flex flex-1 items-center gap-1" aria-label="Primary navigation">
            {/* Product mega menu */}
            <div className="relative">
              <button
                type="button"
                className={cn(linkTriggerClasses, "flex items-center gap-1")}
                aria-haspopup="true"
                aria-expanded={activeMenu === "Product"}
                onMouseEnter={() => setActiveMenu("Product")}
                onFocus={() => setActiveMenu("Product")}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setActiveMenu(null);
                }}
              >
                Product
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition duration-200",
                    activeMenu === "Product"
                      ? "rotate-180 text-foreground"
                      : "text-foreground/60"
                  )}
                  aria-hidden="true"
                />
              </button>

              <DesktopProductMegaMenu
                isOpen={activeMenu === "Product"}
                onHoverKeepOpen={() => setActiveMenu("Product")}
              />
            </div>

            {/* Pricing */}
            {navConfig.links.map((l) =>
              l.disabled ? (
                <span
                  key={l.href}
                  className={cn(linkTriggerClasses, disabledLinkClasses)}
                  aria-disabled="true"
                >
                  {l.title}
                </span>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={linkTriggerClasses}
                  onMouseEnter={() => setActiveMenu(null)}
                  onFocus={() => setActiveMenu(null)}
                >
                  {l.title}
                </Link>
              )
            )}

            {/* Resources dropdown */}
            {resources ? (
              <div className="relative">
                <button
                  type="button"
                  className={cn(linkTriggerClasses, "flex items-center gap-1")}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === "Resources"}
                  onMouseEnter={() => setActiveMenu("Resources")}
                  onFocus={() => setActiveMenu("Resources")}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setActiveMenu(null);
                  }}
                >
                  Resources
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition duration-200",
                      activeMenu === "Resources"
                        ? "rotate-180 text-foreground"
                        : "text-foreground/60"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <DesktopSimpleDropdown
                  title="Resources"
                  description={resources.description}
                  items={resources.items}
                  isOpen={activeMenu === "Resources"}
                />
              </div>
            ) : null}

            {/* Company dropdown */}
            {company ? (
              <div className="relative">
                <button
                  type="button"
                  className={cn(linkTriggerClasses, "flex items-center gap-1")}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === "Company"}
                  onMouseEnter={() => setActiveMenu("Company")}
                  onFocus={() => setActiveMenu("Company")}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setActiveMenu(null);
                  }}
                >
                  Company
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition duration-200",
                      activeMenu === "Company"
                        ? "rotate-180 text-foreground"
                        : "text-foreground/60"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <DesktopSimpleDropdown
                  title="Company"
                  description={company.description}
                  items={company.items}
                  isOpen={activeMenu === "Company"}
                />
              </div>
            ) : null}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-3">
            {navConfig.ctas.map((cta) =>
              cta.disabled ? (
                <Button
                  key={cta.label}
                  variant={cta.variant === "primary" ? "default" : "secondary"}
                  className={cn("px-6 py-2 text-sm font-semibold", disabledLinkClasses)}
                  aria-disabled="true"
                >
                  {cta.label}
                </Button>
              ) : (
                <Button
                  key={cta.label}
                  asChild
                  variant={cta.variant === "primary" ? "default" : "secondary"}
                  className="px-6 py-2 text-sm font-semibold"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              )
            )}
          </div>
        </div>

        {/* Mobile */}
        <MobileNav ctas={navConfig.ctas} />
      </div>
    </header>
  );
}
