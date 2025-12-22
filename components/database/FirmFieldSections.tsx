import type { FirmSection } from "@/lib/database/firmDetails";

type FirmFieldSectionsProps = {
  sections: FirmSection[];
};

export function FirmFieldSections({ sections }: FirmFieldSectionsProps) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section
          key={section.heading}
          className="rounded-[28px] border border-border bg-card/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.04)] md:p-8"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {section.heading}
            </p>
            {section.description ? (
              <p className="text-base text-muted-foreground">{section.description}</p>
            ) : null}
          </div>
          <dl className="mt-6 space-y-6">
            {section.fields.map((field) => (
              <div key={field.label} className="border-b border-border/60 pb-4 last:border-none last:pb-0">
                <dt className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {field.label}
                </dt>
                <dd className="mt-2 text-base font-sans leading-relaxed text-foreground md:text-lg">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
