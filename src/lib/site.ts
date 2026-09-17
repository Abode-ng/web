/**
 * The site's absolute base URL. Share previews, the sitemap and robots.txt all
 * need real absolute URLs, so they must agree on one origin.
 *
 * Set `NEXT_PUBLIC_SITE_URL` to the custom domain once it is live. Until then
 * Vercel's own production URL is used, which keeps preview deployments honest
 * without pointing crawlers at a domain that does not resolve yet.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
