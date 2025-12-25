import type { FeaturePageConfig } from "@/lib/product/featurePageTypes";

import { FeatureHero } from "./FeatureHero";

import { Problem } from "./sections/Problem";
import { HowItWorks } from "./sections/HowItWorks";
import { Highlights } from "./sections/Highlights";
import { SolutionIntro } from "./sections/SolutionIntro";
import { CustomerProof } from "./sections/CustomerProof";
import { FinalCTA } from "./sections/FinalCTA";

type FeaturePageProps = {
  config: FeaturePageConfig;
};

export function FeaturePage({ config }: FeaturePageProps) {
  return (
    <div className="bg-background text-foreground">
      <FeatureHero data={config.hero} />
      <Problem data={config.problem} />
      <HowItWorks data={config.howItWorks} />
      <Highlights data={config.capabilities} />
      <SolutionIntro data={config.workflowIntegration} />
      <CustomerProof data={config.socialProof} />
      <FinalCTA data={config.finalCta} />
    </div>
  );
}
