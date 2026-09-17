/**
 * The site's absolute base URL. Canonical tags, share previews, sitemap.xml and
 * robots.txt all resolve against it, so they must agree on one origin.
 *
 * The apex is the canonical host: Vercel serves production from
 * abodetechnology.com and 308s www across to it. Keep this in step with the
 * project's Domains settings — naming the host that redirects would point every
 * canonical tag and sitemap entry at a redirect. Three hosts reach this site
 * (apex, www, getabode.vercel.app); naming the real one here is what keeps the
 * other two from being indexed as duplicate sites. Set NEXT_PUBLIC_SITE_URL in
 * `.env.local` when you need local absolute URLs.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abodetechnology.com";
