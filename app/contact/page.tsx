import type { Metadata } from "next";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLogosSection } from "@/components/contact/ContactLogosSection";
import { ContactMainSection } from "@/components/contact/ContactMainSection";
import { ContactOfficeSection } from "@/components/contact/ContactOfficeSection";
import { contactContent } from "@/lib/contact/contactContent";

export const metadata: Metadata = {
  title: "Contact CQ | Request a Demo or Pricing Details",
  description:
    "Reach the CQ team to book a demo, understand pricing, or explore implementation for your investment workflows.",
  openGraph: {
    title: "Contact CQ | Request a Demo or Pricing Details",
    description:
      "Reach the CQ team to book a demo, understand pricing, or explore implementation for your investment workflows.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <ContactHero data={contactContent.hero} />
      <ContactMainSection
        metrics={contactContent.metrics}
        form={contactContent.form}
      />
      <ContactLogosSection data={contactContent.logos} />
      <ContactOfficeSection data={contactContent.office} />
    </div>
  );
}
