import type { ProductModulesContent } from "@/lib/home/types";
import { FullFunnelStory } from "@/components/home/FullFunnelStory";

type ProductModulesProps = {
  data: ProductModulesContent;
};

/**
 * Kept the SAME component name: ProductModules
 * You can keep your existing imports/usages.
 * This now renders the "Full-Funnel Story" section.
 *
 * We accept `data` to avoid breaking your page, but this section uses
 * the full-funnel workflow spec instead of grid cards.
 */
export function ProductModules({ data }: ProductModulesProps) {
  // `data` intentionally unused for now (kept for compatibility).
  void data;

  return <FullFunnelStory />;
}