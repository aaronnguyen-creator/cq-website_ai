import type { Metadata } from "next";

import { AboutHero } from "@/components/site/about/AboutHero";
import { NarrativeSection } from "@/components/site/about/NarrativeSection";
import { TeamSection } from "@/components/site/about/TeamSection";
import { ValuesGrid } from "@/components/site/about/ValuesGrid";
import { AboutCtaBand } from "@/components/site/about/AboutCtaBand";
import { MissionSlider } from "@/components/site/about/MissionSlider";
import { aboutContent } from "@/lib/about/aboutContent";

export const metadata: Metadata = {
  title: "About CQ | Built for institutional fundraising teams",
  description:
    "Understand CQ’s mission, vision, and leadership—designed to centralize fundraising, diligence, and investor intelligence for alternative investment teams.",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <AboutHero data={aboutContent.hero} />
      <MissionSlider data={aboutContent.mission} />
      <NarrativeSection data={aboutContent.vision} tone="dark" />
      <ValuesGrid data={aboutContent.values} />
      <TeamSection data={aboutContent.team} />
      <AboutCtaBand data={aboutContent.cta} />
    </div>
  );
}
