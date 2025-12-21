import type { FeaturePageConfig } from "@/lib/product/featurePageTypes";
import { FeatureHero } from "./FeatureHero";
import { TrustBar } from "./sections/TrustBar";
import { CustomerProof } from "./sections/CustomerProof";
import { Problem } from "./sections/Problem";
import { SolutionIntro } from "./sections/SolutionIntro";
import { ProofPillars } from "./sections/ProofPillars";
import { Testimonials } from "./sections/Testimonials";
import { CTABand } from "./sections/CTABand";
import { OtherProducts } from "./sections/OtherProducts";
import { Resources } from "./sections/Resources";
import { FAQ } from "./sections/FAQ";

type FeaturePageProps = {
  config: FeaturePageConfig;
};

export function FeaturePage({ config }: FeaturePageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <FeatureHero data={config.hero} />
        {config.trustBar ? <TrustBar data={config.trustBar} /> : null}
        {config.customerProof ? (
          <CustomerProof data={config.customerProof} />
        ) : null}
        <Problem data={config.problem} />
        <SolutionIntro data={config.solution} />
        <ProofPillars data={config.proof} />
        <Testimonials data={config.testimonials} />
        <CTABand data={config.ctaBand} />
        <OtherProducts data={config.otherProducts} />
        <Resources data={config.resources} />
        <FAQ data={config.faq} />
      </main>
    </div>
  );
}
