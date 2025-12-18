import type { TestimonialsContent } from "@/lib/product/featurePageTypes";

type TestimonialsProps = {
  data?: TestimonialsContent;
};

export function Testimonials({ data }: TestimonialsProps) {
  if (!data || data.items.length === 0) {
    return null;
  }

  return (
    <section
      id={data.id}
      className="mx-auto w-full max-w-6xl px-4 py-20 text-white"
    >
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60">
          Testimonials
        </p>
        <h2 className="text-4xl font-heading font-semibold">{data.heading}</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.items.map((item) => (
          <figure
            key={item.quote}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
          >
            <blockquote className="text-lg text-white/90">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm uppercase tracking-wide text-white/60">
              {item.author} {item.role ? `• ${item.role}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
