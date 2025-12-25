"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { navConfig, type NavLink, type NavCta, type ProductMenuItem, type ProductMenuColumn, type NavConfig } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

type DesktopLinkProps = {
  item: NavLink;
  onSimpleHover?: () => void;
  isDark?: boolean;
};

const DesktopDropdown = ({ item, isDark }: DesktopLinkProps) => {
  if (!item.items?.length) return null;
  const isResources = item.title === "Resources";
  const spotlightArticle = {
    title: "Defining Your Investment Thesis",
    description:
      "The “Bankable Thesis” Framework (Why you? Why now? Why this strategy?)",
    href: "/resources/insights/defining-your-investment-thesis",
    thumbnail: "/capq-logo.svg",
  };

  return (
    <NavigationMenuItem value={item.title}>
      <NavigationMenuTrigger
        className={cn(
          "rounded-xl border border-transparent bg-transparent px-3 py-1.5 text-[12px] font-medium uppercase tracking-wide transition focus-visible:outline-none",
          isDark
            ? "text-white/80 hover:text-white hover:border-white/25 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_12px_rgba(0,0,0,0.3)] focus-visible:ring-white/40 data-[state=open]:border-white/30 data-[state=open]:bg-white/10 data-[state=open]:text-white"
            : "text-foreground/80 hover:text-foreground hover:border-black/5 hover:bg-[#f5f5f5] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_12px_rgba(0,0,0,0.08)] focus-visible:ring-black/10 data-[state=open]:border-black/5 data-[state=open]:bg-[#f5f5f5] data-[state=open]:text-foreground"
        )}
      >
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="z-50 mt-4 border-none bg-transparent shadow-none">
        <div
          className={cn(
            "w-[min(1100px,95vw)] min-h-[320px] rounded-3xl border shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur",
            isDark
              ? "border-white/10 bg-[#1d1d23] text-white"
              : "border-black/10 bg-white text-black"
          )}
        >
          {isResources ? (
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.7fr_1fr]">
              <div className="space-y-6">
                <div>
                  <p
                    className={cn(
                      "font-heading text-lg",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    {item.title}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      isDark ? "text-white/70" : "text-foreground/70"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.items.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className={cn(
                        "group rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2",
                        isDark
                          ? "border-white/5 hover:border-white/40 hover:bg-white/10 focus-visible:ring-white/30"
                          : "border-black/5 hover:border-black/10 hover:bg-black/5 focus-visible:ring-black/20"
                      )}
                    >
                      <p
                        className={cn(
                          "font-heading text-base transition",
                          isDark ? "text-white" : "text-black"
                        )}
                      >
                        {resource.title}
                      </p>
                      <p
                        className={cn(
                          "mt-1 text-sm line-clamp-2",
                          isDark ? "text-white/70" : "text-muted-foreground"
                        )}
                      >
                        {resource.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href={spotlightArticle.href}
                className={cn(
                  "flex h-full flex-col justify-between rounded-2xl border p-6 transition focus-visible:outline-none focus-visible:ring-2",
                  isDark
                    ? "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 focus-visible:ring-white/30"
                    : "border-black/10 bg-muted/20 hover:border-black/20 hover:bg-white focus-visible:ring-black/30"
                )}
              >
                <div className="flex gap-6">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-300">
                    <Image
                      src={spotlightArticle.thumbnail}
                      alt={spotlightArticle.title}
                      width={96}
                      height={96}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <p
                      className={cn(
                        "font-heading text-[16px]",
                        isDark ? "text-white" : "text-black"
                      )}
                    >
                      {spotlightArticle.title}
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-[12px] line-clamp-2",
                        isDark ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {spotlightArticle.description}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "mt-6 text-sm font-medium",
                    isDark ? "text-white" : "text-primary"
                  )}
                >
                  Read article →
                </span>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 p-8">
              <div>
                <p
                  className={cn(
                    "font-heading text-lg",
                    isDark ? "text-white" : "text-black"
                  )}
                >
                  {item.title}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    isDark ? "text-white/70" : "text-foreground/70"
                  )}
                >
                  {item.description}
                </p>
              </div>
              <div className="grid grid-cols-2 items-start gap-x-10 gap-y-8 text-left md:grid-cols-3 lg:grid-cols-4">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className={cn(
                      "group flex w-[220px] flex-col space-y-2 rounded-xl p-6 text-sm focus-visible:outline-none focus-visible:ring-2",
                      isDark
                        ? "text-white focus-visible:ring-white/30"
                        : "text-black focus-visible:ring-black/40"
                    )}
                  >
                    <span
                      className={cn(
                        "font-heading text-base transition",
                        isDark ? "text-white" : "text-black"
                      )}
                    >
                      {subItem.title}
                    </span>
                    <span
                      className={cn(
                        "line-clamp-2 text-sm transition",
                        isDark
                          ? "text-white/70 group-hover:text-white"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {subItem.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const DesktopLink = ({ item, onSimpleHover, isDark }: DesktopLinkProps) => {
  if (item.items?.length) {
    return <DesktopDropdown item={item} isDark={isDark} />;
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(
          "rounded-xl border border-transparent bg-transparent px-3 py-1.5 text-[12px] font-medium uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2",
          isDark
            ? "text-white/80 hover:text-white hover:border-white/25 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_12px_rgba(0,0,0,0.3)] focus-visible:ring-white/30"
            : "text-foreground/80 hover:text-foreground hover:border-black/5 hover:bg-[#f5f5f5] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_12px_rgba(0,0,0,0.08)] focus-visible:ring-ring"
        )}
      >
        <Link
          href={item.href}
          onPointerEnter={onSimpleHover}
          onFocus={onSimpleHover}
          className="inline-flex h-full items-center justify-center"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNav = ({
  links,
  ctas,
}: {
  links: NavLink[];
  ctas: NavCta[];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-6 bg-background/95 pb-10 pt-12 text-foreground sm:max-w-sm"
      >
        <div className="px-1">
          <p className="font-heading text-2xl">CapQ</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Navigate through CapQ&apos;s platform.
          </p>
        </div>
        <nav className="flex-1 space-y-6 overflow-y-auto px-1">
          {links.map((link) => (
            <div key={link.title} className="space-y-3">
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className="block text-lg font-heading"
                >
                  {link.title}
                </Link>
              </SheetClose>
              <p className="text-sm text-muted-foreground">{link.description}</p>
              {link.items?.length ? (
                <div className="space-y-3 border-l border-border/70 pl-4">
                  {link.items.map((subItem) => (
                    <SheetClose asChild key={subItem.title}>
                      <Link
                        href={subItem.href}
                        className="block rounded-xl border border-border/70 px-4 py-3 text-sm text-foreground/80 transition hover:bg-accent hover:text-accent-foreground"
                      >
                        <span className="font-semibold">{subItem.title}</span>
                        <span className="mt-1 block text-muted-foreground">
                          {subItem.description}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="space-y-3 px-1">
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
};

export function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | undefined>();
  const pathname = usePathname();
  const isDarkNav =
    pathname?.startsWith("/product/") || pathname === "/insights";

  const { links, ctas } = navConfig;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/60 backdrop-blur",
        isDarkNav ? "bg-[#050608]/95" : "bg-background/90"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {!logoError ? (
            <Image
              src="/capq-logo.svg"
              alt="CapQ"
              width={64}
              height={64}
              priority
              onError={() => setLogoError(true)}
              className="h-16 w-16 object-contain"
            />
          ) : (
            <span
              className={cn(
                "font-heading text-2xl tracking-tight",
                isDarkNav ? "text-white" : ""
              )}
            >
              CapQ
            </span>
          )}
        </Link>

        <NavigationMenu
          value={activeDropdown}
          onValueChange={setActiveDropdown}
          className="hidden flex-1 justify-center lg:flex"
        >
          <NavigationMenuList className="flex items-center gap-1">
            {links.map((item) => (
              <DesktopLink
                key={item.title}
                item={item}
                isDark={isDarkNav}
                onSimpleHover={() => setActiveDropdown(undefined)}
              />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          {ctas.map((cta) => (
            <Button
              key={cta.label}
              asChild
              variant={cta.variant === "primary" ? "default" : "secondary"}
              className={cn(
                "min-w-[140px]",
                cta.variant === "primary"
                  ? "shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  : "px-8 py-3 text-base",
                !isDarkNav &&
                  cta.label.toLowerCase().includes("login") &&
                  "bg-black text-white hover:bg-black/90 border-transparent"
              )}
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>

        <MobileNav links={links} ctas={ctas} />
      </div>
    </header>
  );
}
