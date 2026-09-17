/**
 * The GA4 measurement ID is not a secret — it ships in the client bundle and is
 * readable in page source — so it lives here rather than in an env var that
 * would also have to be remembered in Vercel's dashboard, where forgetting it
 * fails silently as "no data". NEXT_PUBLIC_GA_ID still overrides it if a second
 * property is ever needed.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-BQXSSLW5BC";

/**
 * Only the production deployment reports. Preview builds and `next dev` would
 * otherwise mix development traffic into the same property, and GA4 has no way
 * to separate it back out after the fact.
 */
export const analyticsEnabled = process.env.VERCEL_ENV === "production";
