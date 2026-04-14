"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  introdata,
  resumeFileName,
  resumeUrl,
  technicalSkills,
} from "@/data/portfolio";
import { site } from "@/data/site";
import { renderBoldMarkedText } from "@/utils/rich-text";
import { Container } from "./Container";
import { MockCard } from "./MockCard";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#courses", label: "Courses" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
] as const;

export function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const [triedProfileFallback, setTriedProfileFallback] = useState(false);
  const [imgSrc, setImgSrc] = useState(introdata.yourImgUrl);
  const [menuOpen, setMenuOpen] = useState(false);

  const heroSkillLine = [
    technicalSkills.backend[0],
    technicalSkills.backend[2],
    technicalSkills.backend[8],
    technicalSkills.frontend[0],
  ].join(" · ");

  const onProfileImageError = () => {
    if (
      !triedProfileFallback &&
      introdata.profileImageFallback !== introdata.yourImgUrl
    ) {
      setTriedProfileFallback(true);
      setImgSrc(introdata.profileImageFallback);
      return;
    }
    setImgOk(false);
  };

  return (
    <section
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden border-b border-white/[0.06]"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-24 top-16 h-[min(420px,90vw)] w-[min(420px,90vw)] rounded-full bg-[#ff3355]/30 blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute -right-8 bottom-24 h-[min(360px,80vw)] w-[min(360px,80vw)] rounded-full bg-[#7c3aed]/25 blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute right-1/3 top-1/3 h-[280px] w-[280px] rounded-full bg-[#22d3ee]/20 blur-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
        />
      </div>

      <Container
        as="header"
        className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.06] py-4 sm:py-5"
      >
        <Link
          href="/"
          className="shrink-0 text-xs font-semibold tracking-[0.2em] text-zinc-400 transition hover:text-white sm:text-sm"
        >
          {site.logotext}
        </Link>

        <nav
          className="scrollbar-hide hidden flex-1 flex-wrap items-center justify-end gap-x-1 gap-y-1.5 text-xs text-zinc-400 sm:gap-x-2 sm:text-sm lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-2.5 py-1.5 transition hover:bg-white/[0.06] hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/[0.08] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-20 w-full overflow-hidden lg:hidden"
          >
            <Container>
              <nav
                className="mb-4 flex flex-col gap-0.5 rounded-2xl border border-white/[0.08] bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-md"
                aria-label="Mobile primary"
              >
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div className="min-w-0 max-w-xl lg:col-span-7 lg:max-w-none">
          <motion.p
            className="text-xs font-medium tracking-[0.35em] text-zinc-500 sm:text-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            0.0 — Cover
          </motion.p>
          <motion.h1
            className="mt-4 text-balance font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {introdata.title}
            <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              {heroSkillLine}
            </span>
          </motion.h1>
          <motion.ul
            className="mt-5 max-w-xl list-inside list-disc space-y-1.5 text-sm leading-relaxed text-zinc-500"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {introdata.animated.map((line) => (
              <li key={line} className="pl-0.5">
                {line}
              </li>
            ))}
          </motion.ul>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {renderBoldMarkedText(introdata.description, "font-semibold text-zinc-200")}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-stretch gap-3 sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <Link
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:bg-zinc-200"
            >
              View projects
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <FileDown className="h-4 w-4 shrink-0" aria-hidden />
              CV
            </a>
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              Email
            </Link>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {[
              ["GitHub", site.social.github],
              ["LinkedIn", site.social.linkedin],
              ["X", site.social.twitter],
              ["Stack Overflow", site.social.stackoverflow],
              ["dev.to", site.social.devto],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md justify-self-center lg:col-span-5 lg:flex lg:justify-end lg:pl-4">
          <motion.div
            className="pointer-events-none absolute -right-4 top-0 h-[min(72vw,420px)] w-[min(72vw,420px)] rounded-full border border-white/[0.06] bg-gradient-to-br from-white/[0.07] to-transparent sm:right-0 lg:right-0"
            initial={{ opacity: 0, rotate: -6 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm space-y-6 lg:mx-0 lg:w-full lg:max-w-[min(100%,380px)]"
          >
            {imgOk ? (
              <div className="relative z-[2] mx-auto aspect-[4/5] w-[92%] max-w-sm overflow-hidden rounded-3xl border border-white/[0.1] bg-zinc-900/80 shadow-2xl shadow-black/50 ring-1 ring-white/[0.04]">
                <Image
                  key={imgSrc}
                  src={imgSrc}
                  alt={`${site.name} — profile`}
                  fill
                  className="object-cover object-[center_72%]"
                  sizes="(max-width: 1024px) 92vw, 400px"
                  priority
                  onError={onProfileImageError}
                />
              </div>
            ) : null}
            <MockCard
              className={`relative z-[2] mx-auto w-[92%] ${imgOk ? "rotate-[-2deg]" : "rotate-[-3deg]"} shadow-2xl shadow-black/40`}
            />
            {imgOk ? null : (
              <MockCard
                tone="muted"
                className="absolute -right-2 bottom-[-12%] z-[1] w-[72%] rotate-[6deg] opacity-95"
              />
            )}
            {imgOk ? (
              <MockCard
                tone="muted"
                className="absolute -right-2 bottom-[-12%] z-[1] w-[56%] rotate-[8deg] opacity-90"
              />
            ) : null}
          </motion.div>
        </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
