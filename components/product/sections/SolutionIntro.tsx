import type { SolutionContent } from "@/lib/product/featurePageTypes";

type SolutionIntroProps = {
  data: SolutionContent;
};

export function SolutionIntro({ data }: SolutionIntroProps) {
  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-5xl px-4 py-16 text-center text-white sm:py-20"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
        {data.heading}
      </p>
      <h2 className="mt-4 text-3xl font-heading font-semibold sm:text-4xl">
        {data.subheading}
      </h2>
      <p className="mt-4 text-white/70">{data.body}</p>
    </section>
  );
}
