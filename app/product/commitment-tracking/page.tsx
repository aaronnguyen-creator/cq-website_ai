import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { commitmentTrackingContent } from "@/lib/product/commitmentTrackingContent";

export const metadata: Metadata = {
  title: "CQ Commitment Tracking | From soft-circle to hard commit",
  description:
    "Track commitments, conditions, owners, and next steps tied to each LP—so forecasting stays credible through close.",
  openGraph: {
    title: "CQ Commitment Tracking | From soft-circle to hard commit",
    description:
      "Track commitments, conditions, owners, and next steps tied to each LP—so forecasting stays credible through close.",
    url: "/product/commitment-tracking",
  },
};

export default function CommitmentTrackingPage() {
  return <FeaturePage config={commitmentTrackingContent} />;
}
