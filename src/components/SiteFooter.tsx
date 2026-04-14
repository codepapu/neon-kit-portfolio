import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "./Container";

const phoneHref = (() => {
  const d = site.phone.replace(/\D/g, "");
  return d ? `tel:+${d}` : "";
})();

const FOOTER_LINKS = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "X", href: site.social.twitter },
  { label: "Stack Overflow", href: site.social.stackoverflow },
  { label: "dev.to", href: site.social.devto },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#080809]/95 py-14 backdrop-blur-sm sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <Container>
        <div className="grid w-full gap-10 md:grid-cols-2 md:items-end md:gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="min-w-0 space-y-4">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {site.logotext}
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-zinc-500">
            {site.tagline}
          </p>
          <div className="flex flex-col gap-1 text-sm text-zinc-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
            <span className="font-medium text-zinc-400">{site.name}</span>
            <span className="hidden text-zinc-700 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={`mailto:${site.email}`}
              className="break-all text-zinc-500 transition hover:text-zinc-300"
            >
              {site.email}
            </a>
            <span className="hidden text-zinc-700 sm:inline" aria-hidden>
              ·
            </span>
            {phoneHref ? (
              <a
                href={phoneHref}
                className="text-zinc-500 transition hover:text-zinc-300"
              >
                {site.phone}
              </a>
            ) : (
              <span className="text-zinc-500">{site.phone}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav
            className="flex w-full flex-wrap gap-2 md:justify-end"
            aria-label="Social"
          >
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white sm:text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-zinc-600 md:text-right">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
        </div>
      </Container>
    </footer>
  );
}
