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
    <section className="mx-auto w-full max-w-6xl px-4 py-16 text-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Library
          </p>
          <h2 className="mt-2 text-3xl font-heading font-semibold">
            All Insights
          </h2>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">Search insights</span>
            <input
              type="search"
              placeholder="Search insights..."
              className="w-full rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </label>
          <label className="sm:w-48">
            <span className="sr-only">Filter by category</span>
            <select
              className="w-full rounded-full border border-white/10 bg-[#050608] px-4 py-2 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
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
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <PostCard key={post.id} post={post} variant="grid" />
        ))}
      </div>
      {canLoadMore ? (
        <div className="mt-10 flex justify-center">
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
    </section>
  );
}
