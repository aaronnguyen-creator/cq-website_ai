import { HomeHero } from "@/components/home/HomeHero";
import { ProductModules } from "@/components/home/ProductModules";
import { OutcomesCarousel } from "@/components/home/OutcomesCarousel";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { CTABox } from "@/components/home/CTABox";
import { ResourcesHighlight } from "@/components/home/ResourcesHighlight";
import { homeContent } from "@/lib/home/homeContent";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <HomeHero data={homeContent.hero} />
        <ProductModules data={homeContent.products} />
        <OutcomesCarousel data={homeContent.outcomes} />
        <TestimonialsSlider data={homeContent.testimonials} />
        <CTABox data={homeContent.ctaBox} />
        <ResourcesHighlight data={homeContent.resources} />
      </main>
    </div>
  );
}
