import type { Metadata } from "next";

import { GlossaryHero } from "@/components/glossary/GlossaryHero";
import { GlossaryFilterBar } from "@/components/glossary/GlossaryFilterBar";
import { GlossaryList } from "@/components/glossary/GlossaryList";
import { GlossaryProvider } from "@/components/glossary/GlossaryProvider";
import { glossaryContent } from "@/lib/glossary/glossaryContent";

export const metadata: Metadata = {
  title: "Glossary | Alternative investment terms by CQ",
  description:
    "Browse CQ’s glossary of alternative investment terms to align your team on definitions across fundraising, diligence, and investor workflows.",
};

export default function GlossaryPage() {
  return (
    <div className="bg-background text-foreground">
      <GlossaryHero data={glossaryContent.hero} />
      <GlossaryProvider terms={glossaryContent.terms}>
        <GlossaryFilterBar />
        <GlossaryList />
      </GlossaryProvider>
    </div>
  );
}
