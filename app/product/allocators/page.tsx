import type { Metadata } from "next";

import { FeaturePage } from "@/components/product/FeaturePage";
import { allocatorsContent } from "@/lib/product/allocatorsContent";

export const metadata: Metadata = {
  title:
    "CQ for Allocators | Run Diligence in One Workspace",
  description:
    "Centralize mandates, manager intake, and AI diligence in CQ so allocator teams can qualify managers faster with full visibility.",
  openGraph: {
    title:
      "CQ for Allocators | Run Diligence in One Workspace",
    description:
      "Centralize mandates, manager intake, and AI diligence in CQ so allocator teams can qualify managers faster with full visibility.",
    url: "/product/allocators",
  },
};

export default function AllocatorsPage() {
  return <FeaturePage config={allocatorsContent} />;
}
