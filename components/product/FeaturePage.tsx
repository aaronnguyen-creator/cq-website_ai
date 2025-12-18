import type { FeaturePageConfig } from "@/lib/product/featurePageTypes";
import { FeatureHero } from "./FeatureHero";
import { TrustBar } from "./sections/TrustBar";
import { CustomerProof } from "./sections/CustomerProof";
import { Problem } from "./sections/Problem";
import { SolutionIntro } from "./sections/SolutionIntro";
import { Highlights } from "./sections/Highlights";
import { ProofPillars } from "./sections/ProofPillars";
import { Testimonials } from "./sections/Testimonials";
import { CTABand } from "./sections/CTABand";
import { OtherProducts } from "./sections/OtherProducts";
import { Resources } from "./sections/Resources";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";

type FeaturePageProps = {
  config: FeaturePageConfig;
};

export function FeaturePage({ config }: FeaturePageProps) {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <main>
        <FeatureHero data={config.hero} />
        <TrustBar data={config.trustBar} />
        {config.customerProof ? (
          <CustomerProof data={config.customerProof} />
        ) : null}
        <Problem data={config.problem} />
        <SolutionIntro data={config.solution} />
        <Highlights data={config.highlights} />
        <ProofPillars data={config.proof} />
        <Testimonials data={config.testimonials} />
        <CTABand data={config.ctaBand} />
        <OtherProducts data={config.otherProducts} />
        <Resources data={config.resources} />
        <FAQ data={config.faq} />
        <FinalCTA data={config.finalCta} />
      </main>
    </div>
  );
}
