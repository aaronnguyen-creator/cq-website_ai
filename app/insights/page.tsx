import type { Metadata } from "next";
import { InsightsPage } from "@/components/insights/InsightsPage";
import { insightsPosts, featuredInsights } from "@/lib/insights/data";

export const metadata: Metadata = {
  title: "Insights | CQ",
  description:
    "Insights on alternative investing, diligence, and AI-powered investment workflows.",
};

export default function Insights() {
  return <InsightsPage posts={insightsPosts} featured={featuredInsights} />;
}
