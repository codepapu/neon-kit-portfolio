"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import type { SectionAccent, SplitSectionItem } from "@/data/site";
import { renderBoldMarkedText } from "@/utils/rich-text";
import { Container } from "./Container";

const accentMap: Record<
  SectionAccent,
  { circle: string; glow: string; label: string; bar: string }
> = {
  red: {
    circle: "bg-[#ff3355]",
    glow: "from-[#ff3355]/45",
    label: "text-[#ff6b82]",
    bar: "bg-[#ff3355]",
  },
  orange: {
    circle: "bg-[#ff8a00]",
    glow: "from-[#ff8a00]/40",
    label: "text-[#ffb04a]",
    bar: "bg-[#ff8a00]",
  },
  purple: {
    circle: "bg-[#a855f7]",
    glow: "from-[#a855f7]/40",
    label: "text-[#d8b4fe]",
    bar: "bg-[#a855f7]",
  },
  cyan: {
    circle: "bg-[#22d3ee]",
    glow: "from-[#22d3ee]/35",
    label: "text-[#a5f3fc]",
    bar: "bg-[#22d3ee]",
  },
  green: {
    circle: "bg-[#34d399]",
    glow: "from-[#34d399]/35",
    label: "text-[#a7f3d0]",
    bar: "bg-[#34d399]",
  },
};

function SectionCta({ cta }: { cta: NonNullable<SplitSectionItem["cta"]> }) {
  const className =
    "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:border-white/20 hover:bg-white/[0.09] sm:px-6";

  if (cta.isDownload) {
    return (
      <a
        href={cta.href}
        download={cta.downloadName}
        className={className}
      >
        {cta.label}
      </a>
    );
  }

  if (cta.external || cta.href.startsWith("http")) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {cta.label}
      </a>
    );
  }

  if (cta.href.startsWith("mailto:")) {
    return (
      <a href={cta.href} className={className}>
        {cta.label}
      </a>
    );
  }

  if (cta.href.startsWith("tel:")) {
    return (
      <a href={cta.href} className={className}>
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

const denseBodyIds = new Set([
  "experience",
  "projects",
  "skills",
  "education",
  "courses",
  "certifications",
]);

export function SplitSection({ item }: { item: SplitSectionItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const a = accentMap[item.accent];
  const bodyTextClass = denseBodyIds.has(item.id)
    ? "text-[13px] leading-[1.8] sm:text-sm sm:leading-[1.75]"
    : "text-[15px] leading-[1.75] sm:text-base sm:leading-[1.72]";

  return (
    <section
      id={item.id}
      ref={ref}
      className="relative scroll-mt-[5rem] border-t border-white/[0.05] py-14 sm:scroll-mt-[5.5rem] sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute bottom-8 left-0 right-0">
        <Container className="text-center text-[10px] font-semibold uppercase tracking-[0.45em] text-zinc-700 sm:text-left">
          cp
        </Container>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-950/60 p-6 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04] backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-9">
              <span
                className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full ${a.bar} sm:w-1`}
                aria-hidden
              />
              <div className="pl-5 sm:pl-7">
                <p
                  className={`text-xs font-semibold tracking-[0.28em] sm:text-sm ${a.label}`}
                >
                  {item.index}
                </p>
                <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.5rem]">
                  {item.title}
                </h2>
                <div
                  className={`mt-6 max-h-none whitespace-pre-line text-zinc-400 ${bodyTextClass}`}
                >
                  {renderBoldMarkedText(item.body)}
                </div>
                {item.cta || item.ctaSecondary || item.ctaTertiary ? (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.cta ? <SectionCta cta={item.cta} /> : null}
                    {item.ctaSecondary ? (
                      <SectionCta cta={item.ctaSecondary} />
                    ) : null}
                    {item.ctaTertiary ? (
                      <SectionCta cta={item.ctaTertiary} />
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>

          <div className="relative flex min-h-[200px] items-center justify-center lg:col-span-5 lg:min-h-[min(360px,50vh)] lg:justify-end">
            <div
              className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${a.glow} via-transparent to-transparent opacity-70 blur-3xl sm:opacity-80`}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square w-[min(220px,72vw)] max-w-[280px] sm:w-[min(260px,55vw)] sm:max-w-[300px] lg:w-full lg:max-w-[min(100%,320px)]"
            >
              <div
                className={`absolute inset-0 rounded-full ${a.circle} shadow-[0_0_80px_-10px_rgba(0,0,0,0.6)]`}
              />
              <div className="absolute inset-[12%] rounded-full bg-black/40 backdrop-blur-[2px]" />
              <div className="absolute inset-[26%] rounded-full border border-white/15 bg-gradient-to-br from-white/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
