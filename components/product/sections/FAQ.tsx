import type { FAQContent } from "@/lib/product/featurePageTypes";
import { Accordion } from "@/components/ui/Accordion";

type FAQProps = {
  data: FAQContent;
};

export function FAQ({ data }: FAQProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-4xl px-4 py-20 text-white"
    >
      <div className="mb-8 space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60">
          {data.heading}
        </p>
        <h2 className="text-4xl font-heading font-semibold">Need answers?</h2>
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
