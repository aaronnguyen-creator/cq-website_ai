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
    <section className="mx-auto w-full max-w-6xl px-4 py-16 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Highlights
          </p>
          <h2 className="mt-2 text-3xl font-heading font-semibold">Featured</h2>
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <PostCard
          post={primary}
          variant="large"
          className="h-full lg:col-span-7"
        />
        <div className="grid gap-6 lg:col-span-5 lg:grid-rows-2">
          {secondaryPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="small" className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
