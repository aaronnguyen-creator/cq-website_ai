import type { Metadata } from "next";
import { FeaturePage } from "@/components/product/FeaturePage";
import { aiQaContent } from "@/lib/product/aiQaContent";

export const metadata: Metadata = {
  title: "CQ AI Q&A | 24/7 diligence answers, grounded in your docs",
  description:
    "Ask questions against your Data Room and share source-linked answers with context and control.",
  openGraph: {
    title: "CQ AI Q&A | 24/7 diligence answers, grounded in your docs",
    description:
      "Ask questions against your Data Room and share source-linked answers with context and control.",
    url: "/product/ai-qna",
  },
};

export default function AiQnaPage() {
  return <FeaturePage config={aiQaContent} />;
}
