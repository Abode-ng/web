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

export default function sitemap(): MetadataRoute.Sitemap {
  // The pages are statically prerendered, so "last modified" is the build time.
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
