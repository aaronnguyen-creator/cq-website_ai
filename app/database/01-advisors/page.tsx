import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FirmCtaCard } from "@/components/database/FirmCtaCard";
import { FirmFieldSections } from "@/components/database/FirmFieldSections";
import { FirmSidebar } from "@/components/database/FirmSidebar";
import { getFirmDetailBySlug } from "@/lib/database/firmDetails";

const SLUG = "01-advisors";
const detail = getFirmDetailBySlug(SLUG);

export const metadata: Metadata = detail
  ? {
      title: `${detail.name} | CapQ Database`,
      description: detail.summary,
    }
  : {
      title: "CapQ Database | CQ",
      description: "Firm entry not found.",
    };

export default function DatabaseFirmPage() {
  if (!detail) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <section className="bg-background py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted-foreground">
                /
              </li>
              <li>
                <Link
                  href="/database"
                  className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Database
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted-foreground">
                /
              </li>
              <li className="text-foreground">{detail.name}</li>
            </ol>
          </nav>

          <div className="relative mt-6 overflow-hidden rounded-[32px] border border-border/60 bg-card/80 p-8 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),_transparent_60%)]"
            />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Firm profile
              </p>
              <div className="space-y-2">
                <h1 className="text-4xl font-heading font-semibold tracking-tight md:text-5xl">
                  {detail.name}
                </h1>
                <p className="text-base text-muted-foreground md:text-lg">
                  {detail.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
            <div>
              <FirmFieldSections sections={detail.sections} />
            </div>
            <FirmSidebar
              firmName={detail.name}
              summary={detail.summary}
              address={detail.address}
              contact={detail.contact}
            />
          </div>
        </div>
      </section>

      <section className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FirmCtaCard firmName={detail.name} />
        </div>
      </section>
    </div>
  );
}
