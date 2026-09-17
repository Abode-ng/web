/**
 * The site's absolute base URL. Canonical tags, share previews, sitemap.xml and
 * robots.txt all resolve against it, so they must agree on one origin.
 *
 * The production domain is the default rather than a fallback to the deployment
 * URL: a preview build should point its canonical tags at production, which is
 * what stops Google indexing a preview as a duplicate of the real site. Set
 * NEXT_PUBLIC_SITE_URL in `.env.local` when you need local absolute URLs.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abodetechnology.com";
