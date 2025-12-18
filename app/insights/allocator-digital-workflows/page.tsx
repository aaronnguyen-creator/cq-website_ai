import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightHero } from "@/components/insights/InsightHero";
import { InsightBody } from "@/components/insights/InsightBody";
import { InsightSidebar } from "@/components/insights/InsightSidebar";
import { InsightCTA } from "@/components/insights/InsightCTA";
import { RelatedPosts } from "@/components/insights/RelatedPosts";
import { insightsPosts } from "@/lib/insights/data";
import type {
  ContentBlock,
  Post,
  ProcessedContentBlock,
} from "@/lib/insights/types";

type HeadingItem = { id: string; text: string; level: "h2" | "h3" };
const POST_SLUG = "allocator-digital-workflows";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const createProcessedBlocks = (
  blocks: ContentBlock[]
): ProcessedContentBlock[] => {
  const counts = new Map<string, number>();
  return blocks.map((block) => {
    if (block.type === "h2" || block.type === "h3") {
      const base = slugify(block.text);
      const count = counts.get(base) ?? 0;
      counts.set(base, count + 1);
      const id = count ? `${base}-${count}` : base;
      return { ...block, id };
    }
    return block;
  });
};

const buildTocItems = (processed: ProcessedContentBlock[]) =>
  processed
    .filter(
      (block): block is { type: "h2" | "h3"; text: string; id: string } =>
        (block.type === "h2" || block.type === "h3") && typeof block.id === "string"
    )
    .map<HeadingItem>((block) => ({
      id: block.id,
      text: block.text,
      level: block.type,
    }));

const getPostBySlug = (slug: string): Post | undefined =>
  insightsPosts.find((post) => post.slug === slug);

const postForMetadata = getPostBySlug(POST_SLUG);

export const metadata: Metadata = postForMetadata
  ? {
      title: `${postForMetadata.title} | CQ`,
      description: postForMetadata.excerpt,
    }
  : {
      title: "Insight not found | CQ",
    };

export default function InsightDetailPage() {
  const post = getPostBySlug(POST_SLUG);

  if (!post) {
    notFound();
  }

  const processedBlocks = createProcessedBlocks(post.contentBlocks);
  const tocItems = buildTocItems(processedBlocks);

  return (
    <div className="min-h-screen bg-white text-[#0B0F14]">
      <main>
        <InsightHero post={post} />
        <section className="bg-white py-16">
          <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-4 lg:grid-cols-[2fr_1fr]">
            <InsightBody blocks={processedBlocks} />
            <InsightSidebar tocItems={tocItems} />
          </div>
        </section>
        <InsightCTA />
        <RelatedPosts posts={insightsPosts} currentPost={post} />
      </main>
    </div>
  );
}
