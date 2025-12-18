import Link from "next/link";
import { footerSections } from "@/lib/site/footerLinks";

const socials = [
  {
    label: "CQ on Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 2h-2.5C10.57 2 9 3.57 9 6.5V9H6v3h3v10h3V12h3l1-3h-4V6.5c0-.83.17-1.5 1.5-1.5H16V2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "CQ on LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.94 8.34H3.5v12h3.44v-12zM5.24 3.75c-1.1 0-1.99.9-1.99 2 0 1.11.89 2 1.99 2 1.1 0 1.99-.89 1.99-2 0-1.1-.89-2-1.99-2zM20.5 14.04c0-3.37-1.8-4.94-4.19-4.94-1.93 0-2.79 1.06-3.27 1.8v-1.56H9.61s.05 1 .05 12h3.44v-6.7c0-.35.02-.7.13-.95.29-.7.94-1.43 2.04-1.43 1.44 0 2.01 1.08 2.01 2.66v6.42h3.22v-7.3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "CQ on X",
    href: "https://x.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.09 3h3.2l-6.99 7.92L21.5 21h-5.6l-4.38-5.11L6.33 21H3.13l7.5-8.5L2.5 3h5.7l3.91 4.56L17.09 3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050608] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-5">
          <div className="space-y-4">
            <p className="text-2xl font-heading">CQ</p>
            <p className="text-sm text-white/70">
              CQ is an AI-powered investment workflow platform built for
              alternative investment teams—streamlining fundraising, diligence,
              and collaboration.
            </p>
            <div className="space-y-1 text-sm text-white/70">
              <p className="font-semibold text-white">Contact us</p>
              <p>Email: hello@capq.ai</p>
              <p>Hotline: +1 (212) 555-0199</p>
              <p>123 Park Ave, New York, NY 10022</p>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                {section.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} CQ. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="rounded-full border border-white/20 p-2 text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
