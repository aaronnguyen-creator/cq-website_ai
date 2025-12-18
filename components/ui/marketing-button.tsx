"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black border-transparent shadow-[0_25px_55px_rgba(0,0,0,0.35)] hover:bg-white/90",
        secondary:
          "bg-transparent text-white border-white/30 hover:border-white/60",
      },
      size: {
        md: "px-6 py-3",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
    children: ReactNode;
  };

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
