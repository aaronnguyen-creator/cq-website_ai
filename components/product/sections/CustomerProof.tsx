import Image from "next/image";
import type { SocialProofConfig } from "@/lib/product/featurePageTypes";

type CustomerProofProps = {
  data: SocialProofConfig;
};

export function CustomerProof({ data }: CustomerProofProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.14),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.10),transparent_55%)]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Social proof
            </p>

            <p className="mt-4 text-pretty text-xl font-heading leading-relaxed md:text-2xl">
              “{data.quote}”
            </p>

            <div className="mt-7 flex items-center gap-4">
              {data.avatarSrc ? (
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-background">
                  <Image
                    src={data.avatarSrc}
                    alt={data.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold">
                  {data.name.slice(0, 1).toUpperCase()}
                </div>
              )}

              <div>
                <p className="text-sm font-semibold">{data.name}</p>
                <p className="text-sm text-muted-foreground">
                  {data.title} • {data.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
