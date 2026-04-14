import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { InspectGuard } from "@/components/inspect-guard";
import {
  HomeWebPageJsonLd,
  PersonJsonLd,
  WebsiteJsonLd,
} from "@/components/seo/json-ld";
import { logotext, meta, seoKeywords, socialprofils } from "@/data/portfolio";
import { absoluteUrl, getSiteUrl } from "@/lib/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const sans = DM_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const ogImageUrl = absoluteUrl("/papusahu-pic.jpeg");
const defaultTitle = `${meta.title} — ${logotext} · Liferay & Java`;

function twitterCreator(): string | undefined {
  try {
    const seg = new URL(socialprofils.twitter).pathname.split("/").filter(Boolean).pop();
    if (!seg) return undefined;
    return seg.startsWith("@") ? seg : `@${seg}`;
  } catch {
    return "@codepapu";
  }
}

export const viewport: Viewport = {
  themeColor: "#0f0f10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${logotext}`,
  },
  description: meta.description,
  keywords: [...seoKeywords],
  authors: [{ name: meta.title, url: siteUrl }],
  creator: meta.title,
  publisher: meta.title,
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: logotext,
    title: defaultTitle,
    description: meta.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 1200,
        alt: `${meta.title} — Java full stack & Liferay DXP engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: meta.description,
    creator: twitterCreator(),
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="bg-app-grid min-h-full flex flex-col font-sans text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-zinc-950 focus:shadow-lg"
        >
          Skip to content
        </a>
        <PersonJsonLd />
        <WebsiteJsonLd />
        <HomeWebPageJsonLd />
        <InspectGuard />
        {children}
      </body>
    </html>
  );
}
