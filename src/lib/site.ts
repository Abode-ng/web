/**
 * The site's absolute base URL. Canonical tags, share previews, sitemap.xml and
 * robots.txt all resolve against it, so they must agree on one origin.
 *
 * `www` is the canonical host, not the apex. Vercel serves production from
 * www.abodetechnology.com and 308s the apex across to it, and www stays a
 * sibling of the planned `app.` and `agency.` subdomains rather than their
 * parent — so a cookie set here is not sent to all of them. Three hosts reach
 * this site (apex, www, getabode.vercel.app); naming the real one here is what
 * keeps the other two from being indexed as duplicate sites. Set
 * NEXT_PUBLIC_SITE_URL in `.env.local` when you need local absolute URLs.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.abodetechnology.com";
