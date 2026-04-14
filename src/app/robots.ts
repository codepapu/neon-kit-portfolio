import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

const aiScraperAgents = [
  "GPTBot",
  "ChatGPT-User",
  "CCBot",
  "anthropic-ai",
  "Claude-Web",
  "ClaudeBot",
  "Bytespider",
  "cohere-ai",
  "Diffbot",
  "omgili",
  "OAI-SearchBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiScraperAgents.map((userAgent) => ({
        userAgent,
        disallow: ["/"] as string[],
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
