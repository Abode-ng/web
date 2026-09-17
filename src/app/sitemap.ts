import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * Every route on the site. There are only three, all static, so listing them by
 * hand is clearer than crawling the app directory — but a new `page.tsx` needs
 * a line here or crawlers will only find it by following links.
 *
 * `changeFrequency` and `priority` are hints that Google ignores outright; they
 * are kept because Bing and others still read them.
 */
const ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/family", changeFrequency: "monthly", priority: 0.9 },
  { path: "/agency", changeFrequency: "monthly", priority: 0.9 },
];

/**
 * `new URL("/", origin)` keeps a trailing slash, but Next renders the home
 * page's canonical tag as the bare origin. The two are equivalent per RFC 3986,
 * but matching them keeps one spelling of the home page in Search Console.
 */
function absolute(path: string): string {
  const url = new URL(path, siteUrl);
  return url.pathname === "/" ? url.origin : url.toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  // The pages are statically prerendered, so "last modified" is the build time.
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: absolute(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
