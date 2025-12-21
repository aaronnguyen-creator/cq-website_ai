import { Button } from "@/components/ui/button";
import type { OfficeInfoContent } from "@/lib/contact/types";

type ContactOfficeSectionProps = {
  data: OfficeInfoContent;
};

export function ContactOfficeSection({ data }: ContactOfficeSectionProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:px-6 lg:grid-cols-2">
        <div className="rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Office
          </p>
          <h2 className="mt-3 text-3xl font-heading font-semibold tracking-tight md:text-4xl">
            Visit or reach our team
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            We operate as Renn Labs, supporting CQ from Boca Raton with hybrid team members across the U.S.
          </p>
          <div className="mt-8 space-y-6 text-sm text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Company
              </p>
              <p className="mt-2 text-base font-semibold">{data.company}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Address
              </p>
              <address className="mt-2 not-italic text-base leading-relaxed text-foreground">
                {data.address}
              </address>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Email
              </p>
              <div className="mt-2 space-y-1 text-base">
                <a
                  href={`mailto:${data.generalEmail}`}
                  className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  General: {data.generalEmail}
                </a>
                <br />
                <a
                  href={`mailto:${data.supportEmail}`}
                  className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Support: {data.supportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-border bg-card/80 p-4 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
          <div className="overflow-hidden rounded-3xl border border-border/60">
            <iframe
              title={`Google Maps for ${data.address}`}
              src={data.mapEmbedSrc}
              className="h-[360px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4">
            <Button asChild variant="secondary" className="w-full justify-center">
              <a
                href={data.mapLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Open location in Google Maps"
              >
                Open in Google Maps
              </a>
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              If the embedded map does not load, use the button above to view the
              full Google Maps experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
