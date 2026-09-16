import type { Metadata } from "next";

import { FamilyCategories } from "@/components/family/categories";
import { FamilyChallenge } from "@/components/family/challenge";
import { FamilyFaq } from "@/components/family/faq";
import { FamilyHero } from "@/components/family/hero";
import { FamilyHowItWorks } from "@/components/family/how-it-works";
import { FamilyKnowMore } from "@/components/family/know-more";
import { FamilyPricing } from "@/components/family/pricing";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const TITLE = "Abode Family — A better way to find trusted domestic workers";
const DESCRIPTION =
  "Discover domestic workers with verified identities, relevant experience, and information that helps you make more informed hiring decisions.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/family" },
  openGraph: {
    type: "website",
    siteName: "Abode",
    title: TITLE,
    description: DESCRIPTION,
    url: "/family",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const NAV_START = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Find a Worker", href: "#categories" },
  { label: "Trust & Verification", href: "#trust" },
];

const NAV_END = [
  { label: "For Families", href: "/family" },
  { label: "FAQs", href: "#faq" },
];

export default function AbodeFamilyPage() {
  return (
    <>
      <SiteHeader
        linksStart={NAV_START}
        linksEnd={NAV_END}
        products={null}
        cta={{ label: "Get Started", href: "#pricing" }}
      />
      <main className="flex flex-col gap-20 lg:gap-[120px]">
        <FamilyHero />
        <FamilyChallenge />
        <FamilyHowItWorks />
        <FamilyKnowMore />
        <FamilyCategories />
        <FamilyPricing />
        <FamilyFaq />
        <FinalCta
          label="READY TO FIND THE RIGHT FIT?"
          title="Find someone you can trust."
          description="Discover verified domestic workers and make your next hire with greater confidence."
          primary={{ label: "Find a Worker", href: "#pricing" }}
          secondary={{ label: "Get Started", href: "#pricing" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
