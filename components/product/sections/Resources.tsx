import Image from "next/image";
import Link from "next/link";

import type { ResourcesContent } from "@/lib/product/featurePageTypes";
import { cn } from "@/lib/utils";
import { insightsPosts } from "@/lib/insights/data";

type ResourcesProps = {
  data: ResourcesContent;
};

function formatDate(dateInput?: string) {
  if (!dateInput) return null;
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateInput));
  } catch {
    return dateInput;
  }
}

export function Resources({ data }: ResourcesProps) {
  const shouldUseInsights = data.useLatestInsights;

  const resolvedItems = shouldUseInsights
    ? [...insightsPosts]
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, data.count ?? 3)
        .map((post) => ({
          title: post.title,
          description: post.excerpt,
          category: post.category,
          readingTime: post.readingTime,
          date: post.date,
          href: `/insights/${post.slug}`,
          image: post.image,
        }))
    : data.items ?? [];

  return (
    <section id={data.id} className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Resources
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              {data.heading}
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resolvedItems.map((item) => {
            const meta = [item.category, item.readingTime]
              .filter(Boolean)
              .join(" • ");
            const dateLabel = formatDate(item.date);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground transition duration-200 ease-out hover:border-primary/40 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,64,243,0.15),_transparent)]" />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  {meta ? (
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {meta}
                    </span>
                  ) : null}
                  <h3 className="text-xl font-heading font-semibold leading-snug">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                  <div className="mt-auto flex items-center justify-between pt-3 text-sm text-muted-foreground">
                    <span>{dateLabel ?? "Resource"}</span>
                    <span className="inline-flex items-center gap-2 text-primary">
                      Read
                      <svg
                        aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4 8h8M8 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
