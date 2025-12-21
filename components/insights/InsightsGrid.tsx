"use client";

import { useState } from "react";
import type { Post } from "@/lib/insights/types";
import { PostCard } from "./PostCard";
import { Button } from "@/components/ui/button";

type InsightsGridProps = {
  posts: Post[];
};

export function InsightsGrid({ posts }: InsightsGridProps) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const batchSize = 9;
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const visiblePosts = sorted.slice(0, visibleCount);
  const canLoadMore = visibleCount < sorted.length;

  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:gap-12 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground">
              Library
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              All insights
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Browse the full archive—sorted by publish date so your team can jump straight into the most recent analyses.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <label className="flex-1">
              <span className="sr-only">Search insights</span>
              <input
                type="search"
                placeholder="Search insights"
                className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              />
            </label>
            <label className="md:w-48">
              <span className="sr-only">Filter by category</span>
              <select
                className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                defaultValue="all"
              >
                <option value="all">All categories</option>
                <option value="diligence">Diligence</option>
                <option value="ai">AI workflows</option>
                <option value="strategy">Strategy</option>
              </select>
            </label>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} variant="grid" />
          ))}
        </div>
        {canLoadMore ? (
          <div className="flex justify-center">
            <Button
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + batchSize, sorted.length)
                )
              }
            >
              Load more articles
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
