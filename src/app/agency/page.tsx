import type { Metadata } from "next";

import { AgencyFeatures } from "@/components/agency/features";
import { AgencyHero } from "@/components/agency/hero";
import { AgencyPartner } from "@/components/agency/partner";
import { AgencyProblem } from "@/components/agency/problem";
import { AgencyTools } from "@/components/agency/tools";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const TITLE =
  "Abode Agency OS — The operating system for modern domestic worker agencies";
const DESCRIPTION =
  "Manage your workers, records, verification, recruitment, and client relationships from one connected platform.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/agency" },
  openGraph: {
    type: "website",
    siteName: "Abode",
    title: TITLE,
    description: DESCRIPTION,
    url: "/agency",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const NAV_START = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#platform" },
];

const NAV_END = [
  { label: "For Agencies", href: "#growth" },
  { label: "FAQs", href: "/#faq" },
];

export default function AgencyOsPage() {
  return (
    <>
      <SiteHeader
        linksStart={NAV_START}
        linksEnd={NAV_END}
        products={null}
        cta={{ label: "Join the Agency Network", href: "#contact" }}
      />
      <main className="flex flex-col gap-20 lg:gap-[120px]">
        <AgencyHero />
        <AgencyProblem />
        <AgencyTools />
        <AgencyPartner />
        <AgencyFeatures />
        <FinalCta
          label="GET STARTED TODAY"
          title="Ready to take your agency to the next level?"
          description="Join Abode Agency OS and get the tools you need to hire, manage, and grow."
          primary={{ label: "Join the Agency Network", href: "#contact" }}
          secondary={{ label: "Explore Agency OS", href: "#features" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
