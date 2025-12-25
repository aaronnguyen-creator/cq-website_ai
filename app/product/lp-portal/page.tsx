import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { lpPortalContent } from "@/lib/product/lpPortalContent";

export const metadata: Metadata = {
  title: "CQ LP Portal | One place for LP updates and materials",
  description:
    "Publish updates and share key materials through a controlled LP portal—tied to investor permissions and history.",
  openGraph: {
    title: "CQ LP Portal | One place for LP updates and materials",
    description:
      "Publish updates and share key materials through a controlled LP portal—tied to investor permissions and history.",
    url: "/product/lp-portal",
  },
};

export default function LpPortalPage() {
  return <FeaturePage config={lpPortalContent} />;
}
