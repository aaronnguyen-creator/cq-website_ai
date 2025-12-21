"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormContent } from "@/lib/contact/types";

type ContactFormProps = {
  data: ContactFormContent;
};

export function ContactForm({ data }: ContactFormProps) {
  const [firmType, setFirmType] = React.useState("");
  const [intent, setIntent] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="First name" id="firstName">
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            required
          />
        </Field>
        <Field label="Last name" id="lastName">
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            required
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Business email" id="businessEmail">
          <Input
            id="businessEmail"
            type="email"
            name="businessEmail"
            autoComplete="email"
            required
          />
        </Field>
        <Field label="Job title" id="jobTitle">
          <Input id="jobTitle" name="jobTitle" autoComplete="organization-title" />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="LinkedIn profile URL" id="linkedInUrl">
          <Input
            id="linkedInUrl"
            name="linkedInUrl"
            type="url"
            placeholder="https://www.linkedin.com/in/you"
          />
        </Field>
        <Field label="Company" id="company">
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            required
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company website" id="companyWebsite">
          <Input
            id="companyWebsite"
            name="companyWebsite"
            type="url"
            placeholder="https://"
          />
        </Field>
        <Field label="Firm type" id="firmType">
          <Select value={firmType} onValueChange={setFirmType}>
            <SelectTrigger id="firmType" aria-label="Firm type">
              <SelectValue placeholder="Select firm type" />
            </SelectTrigger>
            <SelectContent>
              {data.firmTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="firmType" value={firmType} required />
        </Field>
      </div>
      <Field label="What would you like to do" id="intent">
        <Select value={intent} onValueChange={setIntent}>
          <SelectTrigger id="intent" aria-label="What would you like to do">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {data.intents.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="intent" value={intent} required />
      </Field>
      <Field label="How can we help you?" id="message">
        <Textarea
          id="message"
          name="message"
          placeholder="Share context, timelines, or goals."
          required
        />
      </Field>
      <div className="space-y-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {data.submitLabel}
        </Button>
        {data.helperText ? (
          <p className="text-sm text-muted-foreground">{data.helperText}</p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  children: React.ReactNode;
};

function Field({ label, id, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
