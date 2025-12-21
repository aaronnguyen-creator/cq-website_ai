import type { FeaturedConfig, Post } from "@/lib/insights/types";
import { InsightsHero } from "./InsightsHero";
import { FeaturedInsights } from "./FeaturedInsights";
import { InsightsGrid } from "./InsightsGrid";
import { SubscribeCTA } from "./SubscribeCTA";

type InsightsPageProps = {
  posts: Post[];
  featured: FeaturedConfig;
};

export function InsightsPage({ posts, featured }: InsightsPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <InsightsHero />

        {/* Hero → Featured → Grid remain the mandated order */}
        <FeaturedInsights posts={posts} featured={featured} />
        <InsightsGrid posts={posts} />
        <SubscribeCTA />
      </main>
    </div>
  );
}
