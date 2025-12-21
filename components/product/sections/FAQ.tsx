import type { FAQContent } from "@/lib/product/featurePageTypes";
import { Accordion } from "@/components/ui/Accordion";

type FAQProps = {
  data: FAQContent;
};

export function FAQ({ data }: FAQProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 text-foreground sm:py-24"
    >
      <div className="mb-8 space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          {data.heading}
        </p>
        <h2 className="text-4xl font-heading font-semibold tracking-tight">
          Need answers?
        </h2>
      </div>
      <Accordion
        items={data.items.map((item, index) => ({
          id: `${data.id}-${index}`,
          question: item.question,
          answer: item.answer,
        }))}
      />
    </section>
  );
}
