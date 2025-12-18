"use client";

import { useState } from "react";
import Link from "next/link";

type TocItem = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

type InsightSidebarProps = {
  tocItems: TocItem[];
};

export function InsightSidebar({ tocItems }: InsightSidebarProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <nav
        className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
        aria-label="Table of contents"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9CA3AF]">
          In this article
        </p>
        <ul className="mt-6 space-y-2 text-sm text-[#111827]">
          {tocItems.map((item) => (
            <li key={item.id} className={item.level === "h3" ? "pl-4" : ""}>
              <a
                href={`#${item.id}`}
                className="inline-flex rounded-full px-2 py-1 text-left text-sm text-[#1F2933]/90 transition hover:text-[#0B0F14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0D2B27] via-[#081817] to-[#050608] p-6 text-white shadow-[0_30px_60px_rgba(4,6,8,0.4)] sm:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Stay informed
          </p>
          <h3 className="text-2xl font-heading font-semibold">
            Get the Latest Insights
          </h3>
          <p className="text-sm text-white/70">
            Subscribe to receive new research, workflows, and platform updates.
          </p>
        </div>
        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="space-y-1.5">
            <label
              htmlFor="first-name"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              First name*
            </label>
            <input
              id="first-name"
              name="firstName"
              required
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Jordan"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="last-name"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Last name*
            </label>
            <input
              id="last-name"
              name="lastName"
              required
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Lee"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="insights-email"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Email*
            </label>
            <input
              id="insights-email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-white/20 bg-white px-4 py-2 text-sm text-[#0B0F14] placeholder:text-[#5C6679] focus:border-[#0B0F14]/30 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="you@firm.com"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="company"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Company name*
            </label>
            <input
              id="company"
              name="company"
              required
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Atlas Capital"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0B0F14] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Subscribe
          </button>
          <p className="text-xs text-white/60">
            By subscribing you agree to our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            . Unsubscribe anytime.
          </p>
          {submitted ? (
            <p className="text-sm font-medium text-emerald-200">
              Thanks for subscribing—check your inbox for a confirmation.
            </p>
          ) : null}
        </form>
      </div>
    </aside>
  );
}
