import type { NextConfig } from "next";

import { siteUrl } from "./src/lib/site";

const { origin, host } = new URL(siteUrl);

const nextConfig: NextConfig = {
  /**
   * `www` and the apex domain both serve the site, which search engines read as
   * two sites with identical content — the ranking for a page gets split
   * between them. The canonical tags already name the apex; this makes it real
   * for visitors and crawlers too.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${host}` }],
        destination: `${origin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
