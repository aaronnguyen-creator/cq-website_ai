"use client";

import { useCallback, useRef, useState } from "react";

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

type FirmCtaCardProps = {
  firmName: string;
};

export function FirmCtaCard({ firmName }: FirmCtaCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDialogOpen(false);
    (event.target as HTMLFormElement).reset();
    showToast("Request submitted. We’ll follow up shortly.");
  }

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-border bg-card/90 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),_transparent_70%)]"
      />
      <div className="relative space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Next steps
        </p>
        <div className="space-y-2">
          <h2 className="text-3xl font-heading font-semibold tracking-tight md:text-4xl">
            Request more insight on {firmName}
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Share your diligence focus and we’ll route the complete company profile, memos, and investor-ready materials.
          </p>
        </div>
        <Button size="lg" className="w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
          View full company profile
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request the full profile</DialogTitle>
            <DialogDescription>
              Provide a few details so we can send the latest {firmName} information to your team.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="First name" id="cta-first-name">
                <Input id="cta-first-name" name="firstName" required autoComplete="given-name" />
              </Field>
              <Field label="Last name" id="cta-last-name">
                <Input id="cta-last-name" name="lastName" required autoComplete="family-name" />
              </Field>
            </div>
            <Field label="Email" id="cta-email">
              <Input id="cta-email" name="email" type="email" required autoComplete="email" />
            </Field>
            <Field label="Phone number (optional)" id="cta-phone">
              <Input id="cta-phone" name="phone" type="tel" autoComplete="tel" />
            </Field>
            <Field label="Company name" id="cta-company">
              <Input id="cta-company" name="company" required autoComplete="organization" />
            </Field>
            <Field label="Firm you’re interested in" id="cta-firm">
              <Input id="cta-firm" name="firm" value={firmName} readOnly />
            </Field>
            <Field label="What would you like to know about this firm?" id="cta-notes">
              <Textarea
                id="cta-notes"
                name="notes"
                required
                minLength={10}
                placeholder="Share diligence needs, timelines, or stakeholders."
              />
            </Field>
            <DialogFooter>
              <Button type="submit" className="w-full justify-center sm:w-auto">
                Submit request
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
    </div>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
