import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { coldEmailContent } from "@/lib/product/coldEmailContent";

export const metadata: Metadata = {
  title: "CQ Cold Email | Personalized outreach sequences",
  description:
    "Launch mandate-aware outreach sequences from your target list, then track replies, next steps, and stage movement in one place.",
  openGraph: {
    title: "CQ Cold Email | Personalized outreach sequences",
    description:
      "Launch mandate-aware outreach sequences from your target list, then track replies, next steps, and stage movement in one place.",
    url: "/product/cold-email",
  },
};

export default function ColdEmailPage() {
  return <FeaturePage config={coldEmailContent} />;
}