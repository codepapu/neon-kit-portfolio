import {
  contactConfig,
  logotext,
  meta,
  seoKeywords,
  socialprofils,
} from "@/data/portfolio";
import { absoluteUrl } from "@/lib/site";

export function PersonJsonLd() {
  const sameAs = [
    socialprofils.github,
    socialprofils.linkedin,
    socialprofils.twitter,
    socialprofils.stackoverflow,
    socialprofils.devto,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.title,
    url: absoluteUrl("/"),
    image: absoluteUrl("/papusahu-pic.jpeg"),
    email: contactConfig.email,
    telephone: contactConfig.phone,
    jobTitle: "Software Engineer",
    description: meta.description,
    knowsAbout: [...seoKeywords],
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: logotext,
    url: absoluteUrl("/"),
    description: meta.description,
    author: {
      "@type": "Person",
      name: meta.title,
      url: absoluteUrl("/"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeWebPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${meta.title} — Portfolio`,
    url: absoluteUrl("/"),
    description: meta.description,
    isPartOf: {
      "@type": "WebSite",
      name: logotext,
      url: absoluteUrl("/"),
    },
    about: {
      "@type": "Person",
      name: meta.title,
      url: absoluteUrl("/"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
