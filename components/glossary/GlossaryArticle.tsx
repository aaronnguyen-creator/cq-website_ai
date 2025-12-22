import type { GlossaryDetail, GlossaryTerm } from "@/lib/glossary/types";

import { GlossaryPrevNext } from "./GlossaryPrevNext";

type GlossaryArticleProps = {
  detail: GlossaryDetail;
  previous?: GlossaryTerm;
  next?: GlossaryTerm;
};

export function GlossaryArticle({
  detail,
  previous,
  next,
}: GlossaryArticleProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-4 border-b border-border/60 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Glossary term
        </p>
        <h1 className="text-4xl font-heading font-semibold tracking-tight md:text-6xl">
          {detail.title}
        </h1>
        {detail.intro ? (
          <p className="text-base font-sans leading-relaxed text-muted-foreground md:text-lg">
            {detail.intro}
          </p>
        ) : null}
      </header>

      {detail.sections.length ? (
        <div className="space-y-10">
          {detail.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base font-sans leading-relaxed text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-2 pl-6 text-base text-muted-foreground md:text-lg">
                  {section.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}

      {detail.faqs?.length ? (
        <section className="space-y-5">
          <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
            Common questions about {detail.title}
          </h2>
          <div className="space-y-4">
            {detail.faqs.map((faq) => (
              <div
                key={faq.question}
                className="space-y-2 rounded-2xl border border-border/80 bg-card/70 p-5 md:p-6"
              >
                <h3 className="text-lg font-heading font-semibold md:text-xl">
                  {faq.question}
                </h3>
                {faq.answer.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base font-sans leading-relaxed text-muted-foreground md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {detail.conclusion ? (
        <section className="space-y-3 rounded-2xl border border-border/80 bg-card/80 p-5 md:p-6">
          <h2 className="text-2xl font-heading font-semibold md:text-3xl">
            {detail.conclusion.heading}
          </h2>
          {detail.conclusion.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base font-sans leading-relaxed text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ) : null}

      <GlossaryPrevNext previous={previous} next={next} />
    </article>
  );
}
