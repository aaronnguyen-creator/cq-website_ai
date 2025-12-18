import type { Metadata } from "next";

import { FeaturePage } from "@/components/product/FeaturePage";
import { allocatorsContent } from "@/lib/product/allocatorsContent";

export const metadata: Metadata = {
  title:
    "CQ for Allocators | Investor Software for Diligence & Manager Discovery",
  description:
    "Streamline deal tracking, manager discovery, and due diligence with CQ—AI-powered insights, a 95K+ manager network, and secure collaboration.",
  openGraph: {
    title:
      "CQ for Allocators | Investor Software for Diligence & Manager Discovery",
    description:
      "Streamline deal tracking, manager discovery, and due diligence with CQ—AI-powered insights, a 95K+ manager network, and secure collaboration.",
    url: "/product/allocators",
  },
};

export default function AllocatorsPage() {
  return <FeaturePage config={allocatorsContent} />;
}
