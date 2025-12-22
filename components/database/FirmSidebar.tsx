"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";

import type { FirmAddress, FirmContact } from "@/lib/database/firmDetails";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FirmSidebarProps = {
  firmName: string;
  summary: string;
  address?: FirmAddress;
  contact?: FirmContact;
};

export function FirmSidebar({
  firmName,
  summary,
  address,
  contact,
}: FirmSidebarProps) {
  const [query, setQuery] = useState("");
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  }, []);

  function handleSuggestSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSuggestOpen(false);
    (event.target as HTMLFormElement).reset();
    showToast("Thanks—request received.");
  }

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Search firms
          </p>
          <div>
            <Label htmlFor="firm-search-input" className="sr-only">
              Search the database
            </Label>
            <Input
              id="firm-search-input"
              placeholder="Search the database..."
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-3xl border border-border bg-card/80 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          About this firm
        </p>
        <p className="text-base text-muted-foreground">{summary}</p>
      </div>

      <div className="space-y-4 rounded-3xl border border-border bg-card/80 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Legal, compliance & contact
          </p>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-1 text-base text-foreground">
                {contact?.email ?? "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                LinkedIn
              </dt>
              <dd className="mt-1 text-base text-foreground">
                {contact?.linkedin ? (
                  <Link
                    href={contact.linkedin}
                    className="underline underline-offset-4 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    View profile
                  </Link>
                ) : (
                  "—"
                )}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Website
              </dt>
              <dd className="mt-1 text-base text-foreground">
                {contact?.website ? (
                  <Link
                    href={contact.website}
                    className="underline underline-offset-4 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    Visit website
                  </Link>
                ) : (
                  "—"
                )}
              </dd>
            </div>
          </dl>
        </div>
        <Button
          variant="secondary"
          className="w-full justify-center"
          onClick={() => setIsSuggestOpen(true)}
        >
          Suggest an edit
        </Button>
      </div>

      <div className="space-y-4 rounded-3xl border border-border bg-card/80 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Address & map
          </p>
          {address?.lines?.length ? (
            <address className="not-italic text-base text-foreground">
              {address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          ) : (
            <p className="text-base text-muted-foreground">Address not available.</p>
          )}
          {address?.note ? (
            <p className="text-xs text-muted-foreground">{address.note}</p>
          ) : null}
        </div>
        {address?.mapEmbedSrc ? (
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <iframe
              title={`Map preview for ${firmName}`}
              src={address.mapEmbedSrc}
              className="h-48 w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : null}
        {address?.mapLink ? (
          <Button asChild variant="secondary" className="w-full justify-center">
            <a href={address.mapLink} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </Button>
        ) : null}
      </div>

      <Dialog open={isSuggestOpen} onOpenChange={setIsSuggestOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Suggest an edit</DialogTitle>
            <DialogDescription>
              Flag updates or corrections for {firmName}. Our team reviews every submission.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSuggestSubmit}>
            <div className="space-y-2">
              <Label htmlFor="suggest-name">Name (optional)</Label>
              <Input id="suggest-name" name="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="suggest-email">Email</Label>
              <Input id="suggest-email" name="email" type="email" required placeholder="you@firm.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="suggest-message">Suggested change</Label>
              <Textarea
                id="suggest-message"
                name="message"
                minLength={10}
                required
                placeholder="Share the context, correction, or update we should review."
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full justify-center sm:w-auto">
                Send update
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {toastMessage ? (
        <div
          className="fixed bottom-4 right-4 z-50 rounded-2xl border border-border bg-background/95 px-5 py-3 text-sm text-foreground shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
          role="status"
          aria-live="polite"
        >
          {toastMessage}
        </div>
      ) : null}
    </aside>
  );
}
