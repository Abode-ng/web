import type { NextConfig } from "next";

/**
 * No apex-to-www redirect here on purpose. Vercel already owns it — the
 * project's Domains settings serve production from www and 308 the apex across.
 * A redirect in code pointing the other way would be an infinite loop.
 */
const nextConfig: NextConfig = {/* config options here */};

export default nextConfig;
