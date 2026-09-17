import type { NextConfig } from "next";

/**
 * No www-to-apex redirect here on purpose. Vercel already owns it — the
 * project's Domains settings serve production from the apex and 308 www across.
 * A redirect in code pointing the other way would be an infinite loop.
 */
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
