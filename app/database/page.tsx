import type { Metadata } from "next";
import Link from "next/link";

import { DatabaseHero } from "@/components/database/DatabaseHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { databaseHeroContent } from "@/lib/database/content";
import { buildFirmGroups, firmCount } from "@/lib/database/firms";

export const metadata: Metadata = {
  title: "CapQ Firm Database | CQ",
  description:
    "Browse the CapQ firm database to scan allocators, managers, and partners in one structured directory.",
};

type DatabasePageProps = {
  searchParams?: {
    q?: string;
  };
};

export default function DatabasePage({ searchParams }: DatabasePageProps) {
  const queryParam = typeof searchParams?.q === "string" ? searchParams.q : "";
  const normalizedQuery = queryParam.trim().toLowerCase();
  const groups = buildFirmGroups();
  const firmDetailPath = "/database/01-advisors";

  const filteredGroups = normalizedQuery
    ? groups
        .map((group) => ({
          ...group,
          firms: group.firms.filter((firm) =>
            firm.name.toLowerCase().includes(normalizedQuery),
          ),
        }))
        .filter((group) => group.firms.length > 0)
    : groups;

  const resultCount = filteredGroups.reduce(
    (total, group) => total + group.firms.length,
    0,
  );

  return (
    <div className="bg-background text-foreground">
      <DatabaseHero
        eyebrow={databaseHeroContent.eyebrow}
        title={databaseHeroContent.title}
        description={databaseHeroContent.description}
        totalCount={firmCount}
      />
      <section className="bg-background pb-16 text-foreground md:pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Firms
              </p>
              <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
                Full directory
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Alphabetized listing without filters keeps scanning fast across devices.
              </p>
              <p className="text-sm text-muted-foreground">
                {normalizedQuery
                  ? `Showing ${resultCount} ${
                      resultCount === 1 ? "firm" : "firms"
                    } for “${queryParam}”.`
                  : `Showing all ${firmCount} firms.`}
              </p>
            </div>
            <form
              role="search"
              className="w-full md:max-w-sm"
              action="/database"
              method="get"
            >
              <label className="sr-only" htmlFor="firm-search">
                Search firms
              </label>
              <div className="flex gap-3">
                <Input
                  id="firm-search"
                  name="q"
                  type="search"
                  placeholder="Search firms"
                  defaultValue={queryParam}
                />
                <Button type="submit" size="lg" variant="secondary">
                  Search
                </Button>
              </div>
            </form>
          </div>
          {resultCount ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredGroups.map((group) => (
                <div key={group.key} className="rounded-2xl border border-border/80 bg-card/80 p-4 md:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                    {group.key}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {group.firms.map((firm) => (
                      <li key={firm.slug}>
                        <Link
                          href={firmDetailPath}
                          className="flex items-center justify-between rounded-xl px-2 py-2 text-base font-medium text-foreground transition duration-200 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <span>{firm.name}</span>
                          <span
                            aria-hidden="true"
                            className="text-sm text-muted-foreground"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border/70 bg-card/40 p-8 text-center text-sm text-muted-foreground md:p-12">
              No firms match your search yet. Adjust the term or{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary underline-offset-4 transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                contact us
              </Link>{" "}
              for full access.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
