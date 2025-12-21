import type { FeaturedConfig, Post } from "@/lib/insights/types";
import { PostCard } from "./PostCard";

type FeaturedInsightsProps = {
  posts: Post[];
  featured: FeaturedConfig;
};

export function FeaturedInsights({ posts, featured }: FeaturedInsightsProps) {
  const primary = posts.find((post) => post.id === featured.primaryId);
  const secondaryPosts = featured.secondaryIds
    .map((id) => posts.find((post) => post.id === id))
    .filter((post): post is Post => Boolean(post));

  if (!primary || secondaryPosts.length < 2) {
    return null;
  }

  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:gap-10 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground">
              Featured research
            </p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
              Highlights from the library
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A rotating set of briefs on diligence, investor discovery, and AI-assisted workflows. Each post includes templates, proof points, and next steps.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-12">
          <PostCard
            post={primary}
            variant="large"
            className="h-full lg:col-span-7"
          />
          <div className="grid gap-6 md:gap-8 lg:col-span-5 lg:grid-rows-2">
            {secondaryPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                variant="small"
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
