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
      className="mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Testimonials
        </p>
        <h2 className="text-4xl font-heading font-semibold tracking-tight">
          {data.heading}
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.items.map((item) => (
          <figure
            key={item.quote}
            className="rounded-3xl border border-border bg-card p-6 text-left shadow-[0_25px_80px_rgba(15,23,42,0.1)]"
          >
            <blockquote className="text-lg leading-relaxed text-foreground">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">
              {item.author}
              {item.role ? ` • ${item.role}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
