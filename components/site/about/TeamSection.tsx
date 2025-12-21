import Image from "next/image";

import type { TeamSectionContent } from "@/lib/about/types";

type TeamSectionProps = {
  data: TeamSectionContent;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function TeamSection({ data }: TeamSectionProps) {
  const member = data.featured;
  const initials = getInitials(member.name);

  return (
    <section aria-labelledby="about-team-heading" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl space-y-4">
          <h2
            id="about-team-heading"
            className="text-3xl font-heading font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {data.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {data.description}
          </p>
        </div>
        <div className="mt-10 rounded-[32px] border border-border bg-card/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-10">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col gap-6 lg:max-w-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-border/70 bg-muted">
                  {member.image?.src ? (
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-foreground/90 text-3xl font-heading text-background">
                      {initials || "EF"}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-2xl font-heading font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="text-base text-muted-foreground">
                    {member.title}
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {member.bio}
              </p>
            </div>
            <div className="flex-1 space-y-6">
              {member.highlights.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border/70 bg-background/80 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
