import type { Post } from "@/lib/insights/types";
import { PostCard } from "./PostCard";

type RelatedPostsProps = {
  posts: Post[];
  currentPost: Post;
};

export function RelatedPosts({ posts, currentPost }: RelatedPostsProps) {
  const sameCategory = posts
    .filter(
      (post) =>
        post.slug !== currentPost.slug && post.category === currentPost.category
    )
    .slice(0, 3);

  const fallback = posts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        !sameCategory.find((item) => item.id === post.id)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const related = [...sameCategory, ...fallback].slice(0, 3);

  if (!related.length) {
    return null;
  }

  return (
    <section className="bg-white py-16 text-[#0B0F14]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">
              Keep exploring
            </p>
            <h2 className="mt-2 text-3xl font-heading font-semibold">
              Related Insights
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <PostCard key={post.id} post={post} variant="grid" tone="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
