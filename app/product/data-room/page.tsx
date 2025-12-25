import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { dataRoomContent } from "@/lib/product/dataRoomContent";

export const metadata: Metadata = {
  title: "CQ Data Room | Control who sees what—and prove it",
  description:
    "Share fundraising materials with granular permissions, NDA gating, and access history tied to each LP.",
  openGraph: {
    title: "CQ Data Room | Control who sees what—and prove it",
    description:
      "Share fundraising materials with granular permissions, NDA gating, and access history tied to each LP.",
    url: "/product/data-room",
  },
};

export default function DataRoomPage() {
  return <FeaturePage config={dataRoomContent} />;
}