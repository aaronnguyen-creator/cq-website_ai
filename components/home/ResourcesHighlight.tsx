import type { ResourcesContent } from "@/lib/home/types";
import { PostCard } from "@/components/insights/PostCard";
import { insightsPosts } from "@/lib/insights/data";

type ResourcesHighlightProps = {
  data: ResourcesContent;
};

export function ResourcesHighlight({ data }: ResourcesHighlightProps) {
  const posts = [...insightsPosts]
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, data.count);

  return (
    <section className="bg-white py-20 text-[#0B0F14]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9CA3AF]">
              Latest
            </p>
            <h2 className="mt-2 text-3xl font-heading font-semibold">
              {data.title}
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} tone="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
