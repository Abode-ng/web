/**
 * GA4 measurement ID, from the environment because this repository is public.
 * The ID is not a secret — it ships in the page source, and NEXT_PUBLIC_ means
 * it is inlined into the client bundle either way — but keeping it out of the
 * repo stops a fork's deployment reporting into our property, which GA4 gives
 * no way to filter out after the fact.
 *
 * Set it in Vercel's project settings, not just `.env.local`.
 */
const measurementId = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Only the production deployment reports: preview builds and `next dev` would
 * otherwise mix development traffic into the same property. Missing IDs are
 * treated as "off" so a build without the variable renders no tag at all rather
 * than an unconfigured one.
 */
export const analytics =
  process.env.VERCEL_ENV === "production" && measurementId
    ? { gaId: measurementId }
    : null;
