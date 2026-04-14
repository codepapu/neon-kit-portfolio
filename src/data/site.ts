import {
  ajdData,
  contactConfig,
  dataabout,
  educationList,
  getData,
  javaFullStackInstituteProgram,
  liferayCertifications,
  liferayCertificationsCatalogUrl,
  liferayLearnCatalogUrl,
  liferayLearnCourses,
  logotext,
  meta,
  projects,
  resumeFileName,
  resumeUrl,
  socialprofils,
  technicalSkills,
  workExperience,
  type LiferayLearnCourse,
} from "./portfolio";

const LIFERAY_PERSONA_ORDER: LiferayLearnCourse["persona"][] = [
  "Architect",
  "Commerce Administrator",
  "Content Manager",
  "Developer",
  "Practitioner",
];

function buildPersonaCountLine(): string {
  const counts = new Map<string, number>();
  for (const c of liferayLearnCourses) {
    counts.set(c.persona, (counts.get(c.persona) ?? 0) + 1);
  }
  const parts = LIFERAY_PERSONA_ORDER.filter((p) => (counts.get(p) ?? 0) > 0).map(
    (p) => `${p}: ${counts.get(p)}`
  );
  return parts.join(" · ");
}

function buildLiferayCoursesBody(): string {
  const total = liferayLearnCourses.length;
  const countLine = buildPersonaCountLine();

  const header = [
    `**Official Liferay Learn catalog:** ${liferayLearnCatalogUrl}`,
    `**${total} courses** — **by track:** ${countLine}.`,
    "Each entry includes **track (persona)**, **level** (Beginner / Intermediate), and the scope description from Liferay Learn.",
    `**Related:** Liferay DXP **certification programs** are in **section 6.0** and at **${liferayCertificationsCatalogUrl}**.`,
    "",
  ].join("\n");

  const segments: string[] = [header];

  for (const persona of LIFERAY_PERSONA_ORDER) {
    const courses = liferayLearnCourses.filter((c) => c.persona === persona);
    if (courses.length === 0) continue;

    segments.push(
      `**${persona}** — ${courses.length} course${courses.length === 1 ? "" : "s"}`,
      ""
    );

    for (const c of courses) {
      segments.push(
        `**${c.title}**`,
        `**Track:** ${c.persona} · **Level:** ${c.level}`,
        c.description,
        ""
      );
    }
  }

  const unknownTrack = liferayLearnCourses.filter(
    (c) => !LIFERAY_PERSONA_ORDER.includes(c.persona)
  );
  if (unknownTrack.length > 0) {
    segments.push(
      "**Additional tracks** (extend persona list in site data if you add new Liferay Learn personas)",
      "",
      ...unknownTrack.flatMap((c) => [
        `**${c.title}**`,
        `**Track:** ${c.persona} · **Level:** ${c.level}`,
        c.description,
        "",
      ])
    );
  }

  return segments.join("\n").trimEnd();
}

const CERT_ROLE_ORDER = [
  "Practitioner",
  "Developer",
  "Content Manager",
  "Frontend Developer",
  "Commerce Administrator",
] as const;

function buildLiferayCertificationsBody(): string {
  const roster = liferayCertifications
    .map((c, i) => `${i + 1}. **${c.title}** (${c.role})`)
    .join("\n");

  const header = [
    `**Official Liferay certifications hub:** ${liferayCertificationsCatalogUrl}`,
    `**${liferayCertifications.length} professional certification programs** — titles, target roles, and descriptions as on learn.liferay.com/education/certifications.`,
    `**Related:** completed Liferay Learn **courses** are in **section 5.0** and at **${liferayLearnCatalogUrl}**.`,
    "",
    "**Program index**",
    roster,
    "",
    "**Program details (by target role)**",
    "",
  ].join("\n");

  const segments: string[] = [header];

  for (const role of CERT_ROLE_ORDER) {
    const certs = liferayCertifications.filter((c) => c.role === role);
    if (certs.length === 0) continue;

    segments.push(
      `**${role}** — ${certs.length} program${certs.length === 1 ? "" : "s"}`,
      ""
    );

    for (const c of certs) {
      segments.push(
        `**${c.title}**`,
        `**Target role / track:** ${c.role}`,
        c.description,
        ""
      );
    }
  }

  const roleSet = new Set<string>(CERT_ROLE_ORDER);
  const otherRoles = liferayCertifications.filter((c) => !roleSet.has(c.role));
  if (otherRoles.length > 0) {
    segments.push(
      "**Additional programs** (extend CERT_ROLE_ORDER in site data if Liferay adds tracks)",
      "",
      ...otherRoles.flatMap((c) => [
        `**${c.title}**`,
        `**Target role / track:** ${c.role}`,
        c.description,
        "",
      ])
    );
  }

  return segments.join("\n").trimEnd();
}

export const site = {
  logotext,
  name: meta.title,
  tagline: meta.description,
  email: contactConfig.email,
  phone: contactConfig.phone,
  portfolio: contactConfig.portfolio,
  social: socialprofils,
  resumeUrl,
  resumeFileName,
};

const ACCENTS = ["red", "orange", "purple", "cyan", "green"] as const;
type Accent = (typeof ACCENTS)[number];
const pickAccent = (i: number): Accent => ACCENTS[i % ACCENTS.length]!;

const aboutBody = `${dataabout.aboutme}

"Clean architecture, better performance, measurable outcomes."

**Focus:** Liferay DXP · Client Extensions · Spring Boot · Tailwind CSS`;

const experienceIntro =
  "Liferay DXP delivery, Client Extensions, and full-stack product work—newest role first.";

const experienceBody = [
  experienceIntro,
  "",
  ...workExperience.map(
    (job) =>
      `**${job.title}**\n${job.company} · ${job.period}\n${job.description.map((d) => `• ${d}`).join("\n")}`
  ),
  "",
  "**Earlier roles**",
  `**${getData.title}**\n${getData.company} · ${getData.date}\n${getData.aboutme}`,
  "",
  `**${ajdData.title}**\n${ajdData.company} · ${ajdData.date}\n${ajdData.aboutme}`,
].join("\n\n");

const educationBody = [
  "**Formal education**",
  ...educationList.map(
    (e) =>
      `**${e.eduTitle}** — ${e.where}\n${e.date} · ${e.percentage}${e.curriculum ? `\n${e.curriculum}` : ""}`
  ),
  "",
  "**Professional training**",
  `**${javaFullStackInstituteProgram.programTitle}** — ${javaFullStackInstituteProgram.institution} (${javaFullStackInstituteProgram.period}) · ${javaFullStackInstituteProgram.outcome}`,
  javaFullStackInstituteProgram.curriculum,
  "",
  "**Liferay Learn (official courses)**",
  `Completed **${liferayLearnCourses.length}** courses on Liferay Learn, by track: ${buildPersonaCountLine()}.`,
  `Browse the full catalog at **${liferayLearnCatalogUrl}**. Every course title, persona, level, and description is listed under **section 5.0 — Liferay Learn courses** on this page.`,
  "",
  "**Liferay certifications (official programs)**",
  `**${liferayCertifications.length}** DXP certification programs from **${liferayCertificationsCatalogUrl}** (Practitioner, Developer, Content Manager, Frontend Developer, Commerce Administrator).`,
  `Full titles, target roles, and descriptions are under **section 6.0 — Liferay certifications** on this page.`,
].join("\n\n");

const projectsIntro =
  "Enterprise and product delivery highlights—government, insurance, municipal, life sciences, and company sites:";

const projectsBody = [
  projectsIntro,
  "",
  ...projects.map((p) => {
    const linkLine = p.link ? `\n**Link:** ${p.link}` : "";
    return `**${p.name}** (${p.type})\n**Period:** ${p.period}\n**Tech:** ${p.tech}\n${p.description}${linkLine}`;
  }),
].join("\n\n");

const skillsIntro =
  "Full stack aligned with Liferay DXP delivery: backend, UI, data, MERN exposure, tooling, and integration patterns.";

const skillsBody = [
  skillsIntro,
  "",
  ...(
    [
      ["Backend", technicalSkills.backend],
    ["Frontend", technicalSkills.frontend],
    ["Databases", technicalSkills.databases],
    ["MERN stack", technicalSkills.mern],
    ["Tools & DevOps", technicalSkills.tools],
      ["Other integrations & patterns", technicalSkills.other],
    ] as const
  ).map(([label, items]) => `**${label}**\n${items.join(" · ")}`),
].join("\n\n");

const liferayCoursesBody = buildLiferayCoursesBody();

const liferayCertsBody = buildLiferayCertificationsBody();

const portfolioSiteUrl = contactConfig.portfolio.startsWith("http")
  ? contactConfig.portfolio
  : `https://${contactConfig.portfolio}`;

const contactBody = `**Email:** ${contactConfig.email}
**Phone:** ${contactConfig.phone}
**WhatsApp:** ${contactConfig.whatsapp}
**Portfolio:** ${portfolioSiteUrl}
**LinkedIn:** ${socialprofils.linkedin} (${contactConfig.linkedin})
**GitHub:** ${socialprofils.github}
**X:** ${socialprofils.twitter}
**Stack Overflow:** ${socialprofils.stackoverflow}
**dev.to:** ${socialprofils.devto}

${contactConfig.description}`;

const whatsappDigits = contactConfig.whatsapp.replace(/\D/g, "");
const whatsappHref =
  whatsappDigits.length > 0 ? `https://wa.me/${whatsappDigits}` : "";

const phoneDigits = contactConfig.phone.replace(/\D/g, "");
const telHref =
  phoneDigits.length > 0 ? `tel:+${phoneDigits}` : "";

export type SectionAccent = Accent;

export type SectionCta = {
  label: string;
  href: string;
  isDownload?: boolean;
  downloadName?: string;
  external?: boolean;
};

export type SplitSectionItem = {
  id: string;
  index: string;
  title: string;
  body: string;
  cta?: SectionCta;
  ctaSecondary?: SectionCta;
  ctaTertiary?: SectionCta;
  accent: SectionAccent;
};

let ai = 0;
const nextAccent = () => pickAccent(ai++);

export const sections: SplitSectionItem[] = [
  {
    id: "about",
    index: "1.0",
    title: dataabout.title,
    body: aboutBody,
    cta: {
      label: "Download CV",
      href: resumeUrl,
      isDownload: true,
      downloadName: resumeFileName,
    },
    accent: nextAccent(),
  },
  {
    id: "skills",
    index: "1.1",
    title: "Skills & expertise",
    body: skillsBody,
    accent: nextAccent(),
  },
  {
    id: "education",
    index: "2.0",
    title: "Education & training",
    body: educationBody,
    accent: nextAccent(),
  },
  {
    id: "experience",
    index: "3.0",
    title: "Experience",
    body: experienceBody,
    cta: {
      label: "Email " + contactConfig.email,
      href: `mailto:${contactConfig.email}`,
    },
    accent: nextAccent(),
  },
  {
    id: "projects",
    index: "4.0",
    title: "Projects",
    body: projectsBody,
    cta: {
      label: "helpthoughts.com",
      href: "https://helpthoughts.com",
      external: true,
    },
    ctaSecondary: {
      label: contactConfig.portfolio,
      href: portfolioSiteUrl,
      external: true,
    },
    accent: nextAccent(),
  },
  {
    id: "courses",
    index: "5.0",
    title: "Liferay Learn courses",
    body: liferayCoursesBody,
    cta: {
      label: "Courses catalog (learn.liferay.com)",
      href: liferayLearnCatalogUrl,
      external: true,
    },
    ctaSecondary: {
      label: "Certifications hub",
      href: liferayCertificationsCatalogUrl,
      external: true,
    },
    accent: nextAccent(),
  },
  {
    id: "certifications",
    index: "6.0",
    title: "Liferay certifications",
    body: liferayCertsBody,
    cta: {
      label: "Certifications hub",
      href: liferayCertificationsCatalogUrl,
      external: true,
    },
    ctaSecondary: {
      label: "Liferay Learn courses",
      href: liferayLearnCatalogUrl,
      external: true,
    },
    accent: nextAccent(),
  },
  {
    id: "contact",
    index: "7.0",
    title: "Contact",
    body: contactBody,
    cta: {
      label: "Send email",
      href: `mailto:${contactConfig.email}`,
    },
    ctaSecondary:
      telHref !== ""
        ? {
            label: "Call " + contactConfig.phone,
            href: telHref,
          }
        : undefined,
    ctaTertiary:
      whatsappHref !== ""
        ? {
            label: "WhatsApp",
            href: whatsappHref,
            external: true,
          }
        : undefined,
    accent: nextAccent(),
  },
];
