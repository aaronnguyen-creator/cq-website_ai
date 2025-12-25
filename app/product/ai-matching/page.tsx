import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { aiMatchingContent } from "@/lib/product/aiMatchingContent";

export const metadata: Metadata = {
  title: "AI Matching | Find the right LPs faster",
  description:
    "Match your fund to LP mandates with AI—faster targeting, cleaner outreach, and a tighter pipeline.",
  openGraph: {
    title: "AI Matching | Find the right LPs faster",
    description:
      "Match your fund to LP mandates with AI—faster targeting, cleaner outreach, and a tighter pipeline.",
    url: "/product/ai-matching",
  },
};

export default function AiMatchingPage() {
  return <FeaturePage config={aiMatchingContent} />;
}