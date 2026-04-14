function stripTrailingSlashes(s: string): string {
  return s.replace(/\/+$/, "");
}

/**
 * Public site root (origin, or origin + GitHub Pages repo path).
 * Set `NEXT_PUBLIC_SITE_URL` to the full URL users open (e.g. `https://user.github.io/repo`).
 * If you set only the origin, also set `NEXT_PUBLIC_BASE_PATH` or `NEXT_BASE_PATH` (e.g. `repo`).
 */
export function getSiteUrl(): string {
  const raw = stripTrailingSlashes(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://codepapu.in"
  );
  const bp = (process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.NEXT_BASE_PATH ?? "")
    .replace(/^\/+|\/+$/g, "");
  if (!bp) return raw;
  const suffix = `/${bp}`;
  if (raw.endsWith(suffix)) return raw;
  return `${raw}${suffix}`;
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p =
    path === "" || path === "/"
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`;
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}
