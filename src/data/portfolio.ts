export const logotext = "code.papu";

/** Use **term** for bold emphasis in UI (parsed by renderBoldMarkedText). */
export const professionalSummaryRich =
  "Software Engineer with 4+ years of experience specializing in **Liferay DXP (7.3/7.4)**, **Spring Boot**, and **full-stack development**. Proven expertise in building **scalable enterprise applications** using **OSGi modules**, **Headless APIs**, and **React-based Client Extensions**. Successfully delivered end-to-end portal solutions across **UAE Government**, **Insurance**, **Municipal**, **Orthotraining**, and **Orcimed Lifescience** domains. Strong frontend skills with **React** and **Tailwind CSS**, combined with backend proficiency in **Java** and **Spring Boot**. Achieved **40% performance improvement** and **25% reduction in API response time** through optimization and efficient system design.";

/** Short hero hook—full detail lives in About. */
export const heroSummaryRich =
  "I design and ship **Liferay DXP** and **Spring Boot** solutions—**OSGi** modules, **Headless APIs**, and **React-based Client Extensions**—for teams that need portals that scale. **Government**, **insurance**, **municipal**, and **life sciences**: I focus on **performance**, **clean architecture**, and outcomes you can **measure**—not vendor buzzwords.";

export const meta = {
  title: "Papu Sahu",
  description:
    "Software Engineer specializing in Liferay DXP, Spring Boot, and full-stack delivery. Enterprise portals, OSGi, Headless APIs, and React Client Extensions across government and life-science domains.",
};

/** SEO — used in layout metadata */
export const seoKeywords = [
  "Papu Sahu",
  "code.papu",
  "Liferay DXP",
  "Liferay developer",
  "Spring Boot",
  "Java full stack",
  "enterprise portals",
  "OSGi",
  "Client Extensions",
  "Headless API",
  "React",
  "Hyderabad",
  "India",
] as const;

export const introdata = {
  title: "I’m Papu Sahu",
  animated: [
    "Crafting innovative solutions is my passion",
    "Transforming ideas into dynamic Liferay portals",
    "Building robust, scalable applications with Java and Spring Boot",
  ],
  description: heroSummaryRich,
  /** Profile photo: local `/public/...` or full `https://...` (must match `next.config` remotePatterns). */
  yourImgUrl: "/papusahu-pic.jpeg",
  /** Shown if `yourImgUrl` is invalid or the image fails to load (404, network, etc.). */
  profileImageFallback: "/papusahu-pic.jpeg",
};

/** Served from `/public` — hero & About download */
export const resumeUrl = "/Papu_Sahu_CV.docx";
export const resumeFileName = "Papu_Sahu_CV.docx";

export const dataabout = {
  title: "Professional Summary",
  aboutme: professionalSummaryRich,
};

export const getData = {
  title: "Graduate Engineer Trainee",
  company: "Vidyayug Soft Technologies Pvt. Ltd, Hyderabad, India",
  date: "10th March 2022 to 30th June 2023",
  aboutme:
    "Developed and implemented Java applications using Liferay 7.3 GA 6, leveraging agile methodologies, resulting in a 25% reduction in software development time and increased team productivity.",
};

export const ajdData = {
  title: "Associate Java Developer",
  company: "Vidyayug Soft Technologies Pvt. Ltd, Hyderabad, India",
  date: "18th July 2023 to 31th Aug 2024",
  aboutme:
    "Developed server-side components using Spring, Spring Boot, and Liferay, resulting in a 40% improvement in application performance and a 25% reduction in response time.",
};

export type EducationItem = {
  eduTitle: string;
  where: string;
  date: string;
  /** Grade, score, or outcome label (e.g. 71%, Completed). */
  percentage: string;
  /** Optional curriculum / focus areas (shown under the date line on About). */
  curriculum?: string;
};

export const educationList: EducationItem[] = [
  { eduTitle: "10th", where: "Saraswati Sishu Vidya Mandir", date: "2014", percentage: "75%" },
  { eduTitle: "XII (Science)", where: "Arihant Junior College", date: "2016", percentage: "55%" },
  {
    eduTitle: "BCA",
    where: "College of Business Administration, Berhampur University",
    date: "2019",
    percentage: "71%",
  },
];

/** Naresh i Java full-stack program — shown only under Courses, not in About → Education. */
export type JavaInstituteProgram = {
  programTitle: string;
  institution: string;
  period: string;
  outcome: string;
  curriculum: string;
};

export const javaFullStackInstituteProgram: JavaInstituteProgram = {
  programTitle: "Full Stack Developer (Java)",
  institution: "Naresh i Technologies, Hyderabad",
  period: "2019–2022",
  outcome: "Completed",
  curriculum:
    "Core Java & Advanced Java · Servlets · JSP · JDBC · Spring · Hibernate · design patterns · MySQL · HTML · CSS · JavaScript · jQuery",
};

export const technicalSkills = {
  backend: [
    "Java",
    "J2EE",
    "Spring Boot",
    "Spring Core",
    "Spring MVC",
    "Spring Portlet MVC (Liferay)",
    "Spring Security (basic)",
    "REST APIs",
    "Liferay 7.3/7.4",
    "Liferay DXP",
    "OSGi",
    "Liferay Service Builder",
    "Liferay Objects",
    "Spring AI (basic)",
  ],
  frontend: [
    "React",
    "React Router v6",
    "JavaScript",
    "TypeScript (basic)",
    "HTML",
    "CSS",
    "JSP",
    "jQuery",
    "Chart.js",
    "Next.js (basic)",
    "Angular (basic)",
    "Tailwind CSS",
    "Bootstrap",
    "shadcn/ui",
    "Radix UI",
  ],
  databases: ["MySQL", "PostgreSQL", "Oracle 10g–11g"],
  mern: ["MongoDB", "Express.js", "React", "Node.js"],
  tools: [
    "Git",
    "SVN",
    "Maven",
    "Gradle",
    "Docker (basic)",
    "Kubernetes (basic)",
    "Jenkins",
    "Tomcat",
    "Postman",
    "Jira",
    "Log4J",
    "SLF4J",
    "IntelliJ",
    "Eclipse",
    "VS Code",
  ],
  other: [
    "SOAP Web Services",
    "Liferay Client Extensions",
    "Liferay JS Client Extensions",
    "Liferay Headless APIs",
    "Liferay Fragments",
    "Liferay Workflow (Kaleo)",
    "Remote Apps & Custom Elements",
    "Portlet API (JSR-286)",
    "Redis (basic)",
    "Elasticsearch (Liferay Search)",
    "OAuth2 / SSO (basic)",
    "JUnit & Mockito",
    "PWA",
    "SEO",
    "Open Graph",
    "Google Font API",
    "Agile Methodology",
  ],
};

export const projects = [
  {
    name: "Dubai Data Platform (UAE Government)",
    type: "Government Data Platform",
    period: "Enterprise Delivery",
    tech: "Java, Liferay DXP 7.4, React Client Extensions, Headless APIs, OSGi",
    description:
      "Delivered a large-scale Liferay DXP 7.4 portal for a Dubai government data platform. Implemented React-based Client Extensions (Custom Elements and Remote Apps) replacing JSP portlets. Integrated Liferay Headless APIs for content delivery and managed complex role-based access across departments.",
    link: "",
  },
  {
    name: "Insurance Policy Management",
    type: "Insurance Policy Portal",
    period: "Enterprise Delivery",
    tech: "Java, Liferay DXP 7.3, REST APIs, MySQL, JSP, jQuery, Chart.js",
    description:
      "Built a comprehensive insurance policy portal covering issuance, renewal, and claims tracking workflows. Implemented document management, bulk import/export, and role-based dashboard views for agents and policyholders.",
    link: "",
  },
  {
    name: "BMC Housing Subsidy Portal",
    type: "Municipal Citizen Portal",
    period: "Public Sector Delivery",
    tech: "Java, Liferay DXP 7.3, REST APIs, Oracle, JSP, JavaScript",
    description:
      "Built a citizen-facing portal for BMC housing subsidy applications with eligibility checks and approval workflows. Integrated Oracle DB for large-scale citizen data and reduced form processing time, improving user experience.",
    link: "",
  },
  {
    name: "OrthoTraining",
    type: "LMS",
    period: "Apr 2022 - Nov 2023",
    tech: "Java, Liferay DXP 7.3, JSP, JavaScript, jQuery, SOAP Web Services",
    description:
      "Integrated Liferay with external systems for content and subscription management. Developed SOAP web service APIs and integrated with Sakai LMS; customized Role and Permission management. Reduced form processing time by 50%, improving overall user experience.",
    link: "https://www.orthotraining.com/",
  },
  {
    name: "OrciMed - Life Science & CSO",
    type: "Life Science & CSO",
    period: "Dec 2023 - Jul 2024",
    tech: "Java, Liferay DXP 7.3, JSP, JavaScript, jQuery, Chart.js",
    description:
      "Delivered end-to-end Liferay implementation; automated dataTable loading and filtering, improving efficiency by 50%. Built application-level and model-level permissions; implemented XML and non-XML bulk import/export for case reports. Integrated Chart.js for tracking and reporting dashboards.",
    link: "https://orcimedlifesciences.com/",
  },
  {
    name: "HelpThoughts - Company Website",
    type: "Company Website",
    period: "Aug 2024 - Feb 2026",
    tech: "React, React Router v6, Tailwind CSS, shadcn/ui, PWA",
    description:
      "Designed and developed the complete website from scratch. Implemented responsive UI using modern React UI libraries. Added PWA support, SEO optimization, and Open Graph metadata. Improved performance and cross-device compatibility.",
    link: "https://helpthoughts.com",
  },
];

export const workExperience = [
  {
    title: "Software Engineer – Liferay / Full Stack",
    company: "Efficient Brains IT Solutions Pvt Ltd, Hyderabad",
    period: "Mar 2026 – Present",
    description: [
      "Working on Liferay DXP-based enterprise portal projects for clients",
      "Building and deploying React-based Liferay Client Extensions (Remote Apps & Custom Elements)",
      "Developing Liferay Headless API integrations, Object Definitions, and Fragment-based page layouts",
    ],
  },
  {
    title: "Software Engineer – Java / Full Stack",
    company: "Help Thoughts Pvt. Ltd., Hyderabad",
    period: "Aug 2024 – Feb 2026",
    description: [
      "Built full-stack web applications using Java, React, and MySQL",
      "Designed and developed the HelpThoughts company website end-to-end (helpthoughts.com)",
      "Implemented responsive UI with React, Tailwind CSS, shadcn/ui, and PWA support",
      "Built and integrated REST APIs with secure authentication flows",
    ],
  },
  {
    title: "Associate Java Developer",
    company: "Vidyayug Soft Tech., Hyderabad",
    period: "Feb 2022 – Jul 2024",
    description: [
      "Developed enterprise portals for government, insurance, and civic clients using Liferay DXP 7.3/7.4",
      "Built React Client Extensions replacing traditional JSP portlets with modern remote app architecture",
      "Engineered custom OSGi modules, workflows, role & permission management across multiple projects",
      "Improved app performance by 40% and reduced API response time by 25% via query optimization",
    ],
  },
];

export const liferayLearnCatalogUrl = "https://learn.liferay.com/education/courses";

export type LiferayLearnCourse = {
  title: string;
  persona: "Architect" | "Commerce Administrator" | "Content Manager" | "Developer" | "Practitioner";
  level: "Beginner" | "Intermediate";
  /** What this Liferay Learn course covers—aligned with the official track scope (learn.liferay.com). */
  description: string;
};

/** Official Liferay Learn courses completed (titles & metadata as on learn.liferay.com). */
export const liferayLearnCourses: LiferayLearnCourse[] = [
  // Architect
  {
    title: "Foundations of Liferay Client Extensions",
    persona: "Architect",
    level: "Beginner",
    description:
      "Introduces Client Extensions on Liferay DXP: how they replace classic module types for many use cases, project layout, configuration, and deploying backend, frontend, and microservice-style extensions without a full legacy module workspace.",
  },
  {
    title: "Mastering Liferay Backend Client Extensions",
    persona: "Architect",
    level: "Intermediate",
    description:
      "Builds backend Client Extensions—batch jobs, object actions, workflow integrations, and service wrappers—using the official extension model, packaging, and deployment patterns Liferay documents for DXP 7.4+.",
  },
  {
    title: "Mastering Liferay Frontend Client Extensions",
    persona: "Architect",
    level: "Intermediate",
    description:
      "Covers frontend Client Extensions: remote applications, custom elements, IFRAME widgets, and related assets so UIs integrate with Liferay as remote apps instead of in-portlet-only builds.",
  },
  // Commerce Administrator
  {
    title: "Foundations of Liferay Commerce",
    persona: "Commerce Administrator",
    level: "Beginner",
    description:
      "Core Liferay Commerce concepts on DXP: catalogs, channels, basic product/account setup, and how the Commerce admin fits into the rest of the platform.",
  },
  {
    title: "Mastering Commerce Users and Accounts",
    persona: "Commerce Administrator",
    level: "Intermediate",
    description:
      "Account models for B2B/B2C: organizations, account groups, users, addresses, and roles as used for commerce storefronts and ordering.",
  },
  {
    title: "Mastering Inventory Management with Liferay",
    persona: "Commerce Administrator",
    level: "Intermediate",
    description:
      "Warehouses, inventory records, availability, and how stock ties to SKUs and fulfillment in Liferay Commerce.",
  },
  {
    title: "Mastering Order Management with Liferay",
    persona: "Commerce Administrator",
    level: "Intermediate",
    description:
      "Order lifecycles, order types, shipments, payments integration at the admin level, and operational order handling.",
  },
  {
    title: "Mastering Price Management with Liferay",
    persona: "Commerce Administrator",
    level: "Intermediate",
    description:
      "Price lists, tiered pricing, discounts, promotions, and currency/channel considerations for catalogs and cart behavior.",
  },
  {
    title: "Mastering Product Management with Liferay",
    persona: "Commerce Administrator",
    level: "Intermediate",
    description:
      "Product definitions, options, SKUs, linked images and specifications, and catalog maintenance workflows administrators use day to day.",
  },
  {
    title: "Mastering Storefronts with Liferay",
    persona: "Commerce Administrator",
    level: "Intermediate",
    description:
      "Storefront configuration: templates, navigation, cart/checkout exposure, and aligning a customer-facing channel with catalog and account data.",
  },
  // Content Manager
  {
    title: "Foundations of Content Management",
    persona: "Content Manager",
    level: "Beginner",
    description:
      "Authoring basics on Liferay: web content articles, structures, templates, folders, and permissions from a content manager perspective.",
  },
  {
    title: "Mastering Liferay Assets and Content",
    persona: "Content Manager",
    level: "Intermediate",
    description:
      "Asset libraries, documents & media, metadata, collections, and reusing content assets across sites and channels.",
  },
  {
    title: "Mastering Liferay Content Search",
    persona: "Content Manager",
    level: "Intermediate",
    description:
      "How search indexes content, tuning relevance, facets, and search pages so authors and visitors find the right assets.",
  },
  {
    title: "Mastering Liferay Pages and Navigation",
    persona: "Content Manager",
    level: "Beginner",
    description:
      "Page types, content pages, page templates, navigation menus, and friendly URLs for structured site IA.",
  },
  {
    title: "Mastering Liferay Personalized Experiences",
    persona: "Content Manager",
    level: "Intermediate",
    description:
      "Segments, experiences, and targeting so different audiences see tailored page variants and content sets.",
  },
  {
    title: "Mastering Liferay Publishing Tools and the Content Lifecycle",
    persona: "Content Manager",
    level: "Intermediate",
    description:
      "Staging, scheduling, review workflows, and publishing between environments following Liferay’s content lifecycle tools.",
  },
  {
    title: "Mastering Search Engine Optimization with Liferay",
    persona: "Content Manager",
    level: "Intermediate",
    description:
      "SEO-oriented settings: sitemaps, meta tags, structured data considerations, and Liferay features that support crawlable public sites.",
  },
  // Developer
  {
    title: "Building Frontend Applications with JavaScript in Liferay",
    persona: "Developer",
    level: "Intermediate",
    description:
      "JavaScript-based frontends on DXP: ES modules, npm builds, and wiring JS apps to Liferay pages, remote apps, and headless consumption patterns.",
  },
  {
    title: "Foundations of Liferay Frontend Development",
    persona: "Developer",
    level: "Beginner",
    description:
      "Frontend stack on Liferay: themes, Clay/React basics in extensions, and how portlets and modern frontends coexist on 7.4.",
  },
  {
    title: "Foundations of Liferay Headless APIs",
    persona: "Developer",
    level: "Beginner",
    description:
      "Liferay’s headless REST layer: resources, schemas, authentication, and calling documented endpoints from external clients.",
  },
  {
    title: "Foundations of Modern Liferay Application Design",
    persona: "Developer",
    level: "Beginner",
    description:
      "How Liferay expects solutions to split between core DXP, Client Extensions, headless APIs, and decoupled UIs—practical module boundaries for new builds.",
  },
  {
    title: "Mastering Consuming Liferay Headless APIs",
    persona: "Developer",
    level: "Intermediate",
    description:
      "Consuming headless APIs from apps: pagination, filters, related entries, error handling, and aligning fetch-layer code with OpenAPI definitions.",
  },
  {
    title: "Mastering Data Modeling with Liferay Objects",
    persona: "Developer",
    level: "Beginner",
    description:
      "Defining custom Object definitions, fields, relationships, layouts, and exposing Objects through headless endpoints and UI fragments.",
  },
  {
    title: "Mastering Liferay Design Elements",
    persona: "Developer",
    level: "Beginner",
    description:
      "Fragment sets, editable fields, drag-and-drop page pieces, and style books so developers deliver consistent design-system-backed pages.",
  },
  {
    title: "Mastering Liferay Workspaces and Tooling",
    persona: "Developer",
    level: "Intermediate",
    description:
      "Liferay Workspace, Gradle/Blade workflows, deploy targets, and tooling used to build extensions and traditional modules side by side.",
  },
  {
    title: "Mastering Producing Liferay Headless APIs",
    persona: "Developer",
    level: "Intermediate",
    description:
      "Implementing and extending APIs: custom REST builders, object-based endpoints, and publication patterns Liferay supports for producers.",
  },
  // Practitioner
  {
    title: "Building Enterprise Websites with Liferay",
    persona: "Practitioner",
    level: "Beginner",
    description:
      "End-to-end site delivery for practitioners: sites, pages, content, navigation, permissions, and launch tasks for a typical Liferay DXP website.",
  },
  {
    title: "Building Enterprise Websites with Liferay (2024.Q1 Edition)",
    persona: "Practitioner",
    level: "Beginner",
    description:
      "Updated learner path for the same practitioner outcomes as the original course, reflecting DXP changes through the 2024.Q1 product line.",
  },
];

export const liferayCertificationsCatalogUrl =
  "https://learn.liferay.com/education/certifications";

export type LiferayCertification = {
  title: string;
  /** Target role on Liferay Learn (certification track). */
  role: string;
  description: string;
};

/** Official Liferay DXP professional certifications (learn.liferay.com/education/certifications). */
export const liferayCertifications: LiferayCertification[] = [
  {
    title: "Building Enterprise Websites with Liferay Certification",
    role: "Practitioner",
    description:
      "Assesses your ability to build robust, scalable enterprise websites using Liferay DXP.",
  },
  {
    title: "Liferay Application Developer Certification",
    role: "Developer",
    description:
      "Validates expertise in building sophisticated applications on Liferay DXP.",
  },
  {
    title: "Content Manager Certification",
    role: "Content Manager",
    description:
      "Validates proficiency in Liferay DXP’s content suite—authoring, assets, publishing workflows, search, personalization, and the full digital experience lifecycle.",
  },
  {
    title: "Frontend Developer Certification",
    role: "Frontend Developer",
    description:
      "Validates a developer’s expertise in building modern, scalable, high-performance user interfaces and frontends on Liferay DXP.",
  },
  {
    title: "Commerce Administrator Certification",
    role: "Commerce Administrator",
    description:
      "Validates proficiency in Liferay’s commerce suite—including account modeling, catalogs, orders, pricing, and storefront operations.",
  },
];

export const contactConfig = {
  email: "code.papu@gmail.com",
  phone: "(+91) 9438415965",
  /** WhatsApp chat (display + wa.me — digits only, no leading +) */
  whatsapp: "+91 8457058606",
  portfolio: "codepapu.in",
  linkedin: "www.linkedin.com/in/codepapu",
  description:
    "Software Engineer with 4+ years of experience in Liferay DXP, Spring Boot, and full-stack development. Enterprise portals, Client Extensions, and measurable performance gains.",
};

/** Matches vite-react-portfolio `socialprofils`; GitHub was a homepage stub there—profile URL aligns with code.papu handle. */
export const socialprofils = {
  github: "https://github.com/codepapu",
  linkedin: "https://www.linkedin.com/in/codepapu/",
  twitter: "https://x.com/codepapu",
  stackoverflow: "https://stackoverflow.com/users/27236242/codepapu",
  devto: "https://dev.to/codepapu",
};
