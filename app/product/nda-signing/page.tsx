import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { ndaSigningContent } from "@/lib/product/ndaSigningContent";

export const metadata: Metadata = {
  title: "CQ NDA Signing | Gate access without manual chasing",
  description:
    "Request, track, and store NDAs tied to each LP—then unlock the right data room folders automatically.",
  openGraph: {
    title: "CQ NDA Signing | Gate access without manual chasing",
    description:
      "Request, track, and store NDAs tied to each LP—then unlock the right data room folders automatically.",
    url: "/product/nda-signing",
  },
};

export default function NdaSigningPage() {
  return <FeaturePage config={ndaSigningContent} />;
}
