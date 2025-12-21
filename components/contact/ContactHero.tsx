import type { ContactHeroContent } from "@/lib/contact/types";

type ContactHeroProps = {
  data: ContactHeroContent;
};

export function ContactHero({ data }: ContactHeroProps) {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="bg-background py-16 text-foreground md:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center md:px-6">
        {data.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            {data.eyebrow}
          </p>
        ) : null}
        <h1
          id="contact-hero-heading"
          className="text-4xl font-heading font-semibold tracking-tight md:text-5xl"
        >
          {data.title}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {data.description}
        </p>
      </div>
    </section>
  );
}
