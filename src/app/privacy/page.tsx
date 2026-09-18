import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "What abodetechnology.com collects when you visit, why, and what you can ask us to do about it.";

/**
 * Written against what the site actually does today, which is very little: it
 * has no accounts, no forms and no payments, and loads exactly one third party.
 * Anything that changes — a contact form, a signup, a second analytics tool —
 * changes this page too.
 */
export const metadata: Metadata = {
  title: { absolute: `${TITLE} — Abode` },
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    siteName: "Abode",
    title: `${TITLE} — Abode`,
    description: DESCRIPTION,
    url: "/privacy",
    locale: "en_NG",
  },
};

/** The date shown to readers, and the one to bump whenever this page changes. */
const LAST_UPDATED = "18 September 2026";

const PRIVACY_EMAIL = "privacy@abodetechnology.com";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-h3 text-ink-1 mt-14 first:mt-0">
      {children}
    </h2>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="text-body text-ink-2 mt-4">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="bg-accent-1 mt-2.5 size-1.5 shrink-0 rounded-full" />
          <span className="text-body text-ink-2">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* The default nav is right here: its links are all root-absolute. */}
      <SiteHeader />

      <main className="mt-10 mb-20 lg:mt-16 lg:mb-[100px]">
        <Section inner="max-w-[760px]">
          <h1 className="font-display text-h1 text-ink-1">Privacy Policy</h1>
          <p className="text-body-sm text-ink-2 mt-3">
            Last updated {LAST_UPDATED}
          </p>

          <div className="mt-12">
            <Heading>The short version</Heading>
            <Text>
              This website does not ask you for anything. There is no account to
              create, no form to fill in and nothing to pay for. We measure how
              people find and move around the site using Google Analytics, and
              our host keeps standard server logs. That is the whole of it.
            </Text>

            <Heading>Who we are</Heading>
            <Text>
              Abode Technologies Ltd is the data controller for this website. If
              you want to ask us anything in this policy, or exercise any of the
              rights below, write to{" "}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="text-ink-1 underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              >
                {PRIVACY_EMAIL}
              </a>
              .
            </Text>

            <Heading>What this policy covers</Heading>
            <Text>
              It covers this website, abodetechnology.com, and nothing else. The
              Abode platform for households, domestic workers and agencies has
              not launched. When it does, it will handle far more personal data
              than this site does, and it will have its own policy. Nothing here
              describes or promises anything about that.
            </Text>

            <Heading>What we collect</Heading>
            <Text>
              <strong className="text-ink-1 font-semibold">
                Analytics, through Google Analytics 4.
              </strong>{" "}
              When you visit, this records which pages you open, which site or
              search sent you, roughly where you are (city level, worked out
              from your IP address and then discarded — Google does not store
              the IP address itself in Analytics), and what device, browser and
              screen size you are using. It cannot see your name, and we cannot
              use it to work out who you are.
            </Text>
            <Text>
              <strong className="text-ink-1 font-semibold">
                Server logs, through our host, Vercel.
              </strong>{" "}
              Like every web host, Vercel records the requests it serves,
              including your IP address, the page you asked for and your browser
              version. These exist to keep the site running and to deal with
              abuse, and they are kept for a short period.
            </Text>

            <Heading>What we do not collect</Heading>
            <Bullets
              items={[
                "Your name, email address or phone number. There is no form on this site that asks for them.",
                "Payment or financial details of any kind.",
                "Any worker, household or agency records — the platform that will handle those has not launched.",
                "Advertising or social media trackers. There is no Meta pixel, no ad network and no retargeting on this site.",
                "Anything through the fonts. They are served from our own domain, so your browser never contacts Google to fetch them.",
              ]}
            />

            <Heading>Cookies</Heading>
            <Text>
              Google Analytics sets two cookies in your browser. Both are
              first-party, meaning they are set on our domain rather than by
              anyone else, and neither is used for advertising.
            </Text>
            {/*
             * The second cookie's name is GA4's measurement ID with the "G-"
             * dropped, so it changes if the property ever does. It is stated
             * literally because that is what a reader sees in their own browser
             * — and unlike the ID in the config, a cookie name in prose cannot
             * make a fork report into our property.
             */}
            <Bullets
              items={[
                <>
                  <span className="text-ink-1 font-medium">_ga</span> —
                  distinguishes one visitor from another so a returning visit is
                  not counted as a new person. Expires after two years.
                </>,
                <>
                  <span className="text-ink-1 font-medium">_ga_BQXSSLW5BC</span>{" "}
                  — keeps track of a single visit, so that reading three pages
                  in a row counts as one session. Expires after two years.
                </>,
              ]}
            />
            <Text>
              You can refuse them without losing anything: nothing on this site
              depends on cookies to work. Every browser can block or delete
              cookies in its settings, and Google publishes a browser add-on
              that turns Analytics off across every site that uses it. If your
              browser sends a Global Privacy Control or Do Not Track signal, we
              do not override it.
            </Text>

            <Heading>Why we are allowed to do this</Heading>
            <Text>
              Under the Nigeria Data Protection Act 2023, we rely on our
              legitimate interest in understanding whether the site works and
              whether anyone is reading it. We think this is a fair thing to do
              because the data is limited, it is not used to identify anyone, it
              is never sold, and you can opt out at any time. If you would
              rather we did not, the paragraph above tells you how to stop it.
            </Text>

            <Heading>Who else sees it</Heading>
            <Text>
              Two companies, both acting on our instructions: Google, which
              provides the analytics, and Vercel, which hosts the site. Both
              operate outside Nigeria, so the information described above is
              processed abroad, under the contractual protections those
              companies offer their customers. We do not sell your data, and we
              do not share it with anyone for their own purposes.
            </Text>

            <Heading>How long we keep it</Heading>
            <Text>
              Analytics records are deleted automatically after fourteen months.
              Server logs are kept for a short operational period by our host
              and then discarded.
            </Text>

            <Heading>Your rights</Heading>
            <Text>
              The Nigeria Data Protection Act gives you the right to ask what we
              hold about you, to have it corrected or deleted, to object to what
              we are doing with it, and to ask for a copy. Write to{" "}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="text-ink-1 underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              >
                {PRIVACY_EMAIL}
              </a>{" "}
              and we will answer within thirty days.
            </Text>
            <Text>
              One honest caveat: because we never learn who you are, we usually
              cannot find &ldquo;your&rdquo; analytics record on request. The
              reliable way to remove yourself is to clear the cookies above,
              which we would rather tell you plainly than pretend otherwise.
            </Text>
            <Text>
              If you think we have handled your data badly, you can complain to
              the Nigeria Data Protection Commission.
            </Text>

            <Heading>Children</Heading>
            <Text>
              This site is meant for adults making decisions about domestic
              work, and is not directed at children. We do not knowingly collect
              anything about them.
            </Text>

            <Heading>Changes</Heading>
            <Text>
              If we add anything that collects more than this page describes — a
              contact form, a signup, a second analytics tool — we will update
              this policy and change the date at the top before it goes live.
            </Text>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
