import Image from "next/image";
import Link from "next/link";
import { navConfig } from "@/lib/nav";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

const variantStyles = {
  light: {
    wrapper: "bg-white text-[#0B0F14] border-black/10",
    link: "text-[#1A2230]/80 hover:text-[#0B0F14]",
    button:
      "bg-[#0B0F14] text-white hover:bg-[#0B0F14]/90 focus-visible:ring-[#0B0F14]/30",
  },
  dark: {
    wrapper: "bg-[#050608]/95 text-white border-white/10",
    link: "text-white/80 hover:text-white",
    button:
      "bg-white text-[#050608] hover:bg-white/90 focus-visible:ring-white/40",
  },
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const styles = variantStyles[variant];
  const navLinks = navConfig.links.map((link) => ({
    label: link.title,
    href: link.href,
  }));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur",
        styles.wrapper
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/capq-logo.svg"
            alt="CQ"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-heading tracking-tight">CQ</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium uppercase tracking-[0.2em] lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full px-2 py-1",
                styles.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book-demo"
          className={cn(
            "rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            styles.button
          )}
        >
          Book a demo
        </Link>
      </div>
    </header>
  );
}
