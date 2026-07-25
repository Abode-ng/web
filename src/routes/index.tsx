import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Home,
  Briefcase,
  Building2,
  Gauge,
  Layers,
  Fingerprint,
  History,
  Repeat,
  Star,
  MessageSquareX,
  NotebookPen,
  ArrowUpRight,
} from "lucide-react";

import { SiteNav, SiteFooter, Survey, Waitlist, SectionHeader, FAQ } from "@/components/site";

const PLATFORM_DESCRIPTION =
  "Abode is the trust infrastructure for Nigeria's domestic workforce — verified identity, portable reputation and real employment records, powering a hiring marketplace for homeowners and AgencyOS, the software recruitment agencies run on.";

export const Route = createFileRoute("/")({
  component: PlatformPage,
  head: () => ({
    meta: [
      { title: "Abode — Trust infrastructure for Nigerian homes, workers & agencies" },
      { name: "description", content: PLATFORM_DESCRIPTION },
      { property: "og:title", content: "Abode — The trust layer for Nigeria's domestic workforce" },
      { property: "og:description", content: PLATFORM_DESCRIPTION },
      { name: "twitter:description", content: PLATFORM_DESCRIPTION },
    ],
  }),
});

function PlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav active="platform" />
      <Hero />
      <TrustStrip />
      <TheShift />
      <ThreeGroups />
      <TwoProducts />
      <TrustLayer />
      <TrustScore />
      <PortableReputation />
      <Vision />
      <Survey />
      <FAQ items={PLATFORM_FAQS} title="Questions about the platform." />
      <Waitlist
        role="platform"
        title={
          <>
            Verified identity.
            <br />
            <span className="text-accent">Portable reputation.</span>
          </>
        }
        sub="Abode is in validation. Join the waitlist and we'll tell you the moment your side of the platform opens."
      />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary px-3 py-1.5 text-xs font-semibold tracking-wide">
            <Layers className="w-3.5 h-3.5" />
            Two products. One trust layer.
          </span>
          <h1 className="mt-6 font-display font-extrabold tracking-tight text-primary text-[40px] leading-[1.06] sm:text-[56px] lg:text-[64px] lg:leading-[1.04]">
            The trust infrastructure for Nigerian homes,{" "}
            <span className="text-warmth">workers &amp; recruitment agencies.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
            Nigeria's domestic workforce runs on WhatsApp groups, word of mouth and paper files — so
            nobody can prove who anyone is. Abode builds the layer underneath it: verified identity,
            portable reputation and real employment records, powering a hiring marketplace for
            families and the software agencies run their whole operation on.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-[15px] font-semibold hover:bg-primary-600 transition-colors shadow-soft"
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/agencies"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-1 px-5 py-3.5 text-[15px] font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
            >
              Explore AgencyOS
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <StackDiagram />
      </div>
    </section>
  );
}

/** The infrastructure story as a stack: audiences → products → trust layer. */
function StackDiagram() {
  const audiences = [
    { icon: Home, label: "Homeowners", tone: "text-primary bg-primary-100" },
    { icon: Briefcase, label: "Workers", tone: "text-warmth bg-warmth-100" },
    { icon: Building2, label: "Agencies", tone: "text-accent-foreground bg-accent-100" },
  ];
  return (
    <div className="mt-16 lg:mt-20">
      {/* audiences */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {audiences.map((a) => (
          <div
            key={a.label}
            className="rounded-2xl bg-surface-1 border border-border px-3 py-4 sm:px-5 shadow-soft flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center"
          >
            <span className={`w-9 h-9 shrink-0 rounded-xl grid place-items-center ${a.tone}`}>
              <a.icon className="w-4.5 h-4.5" />
            </span>
            <span className="text-[13px] sm:text-[15px] font-bold text-ink">{a.label}</span>
          </div>
        ))}
      </div>

      <Connector />

      {/* products */}
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
        <div className="rounded-2xl border border-primary/25 bg-primary-100/70 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-600">Product 01</p>
          <p className="mt-1.5 text-xl font-extrabold text-primary">Marketplace</p>
          <p className="mt-1 text-[13px] text-ink-600">Homeowners hire · workers get work</p>
        </div>
        <div className="rounded-2xl border border-accent/40 bg-accent-100/70 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-foreground/70">
            Product 02
          </p>
          <p className="mt-1.5 text-xl font-extrabold text-primary">AgencyOS</p>
          <p className="mt-1 text-[13px] text-ink-600">The software agencies run on</p>
        </div>
      </div>

      <Connector />

      {/* trust layer */}
      <div className="rounded-3xl bg-primary text-primary-foreground p-7 lg:p-9 shadow-lift">
        <div className="flex items-center justify-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-accent" />
          <p className="font-display text-lg sm:text-xl font-extrabold tracking-tight">
            The Abode trust layer
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: Fingerprint, label: "Verified identity" },
            { icon: Star, label: "Portable reputation" },
            { icon: History, label: "Employment records" },
            { icon: Gauge, label: "Trusted matching" },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-xl bg-white/10 px-3 py-3.5 flex flex-col items-center gap-2 text-center"
            >
              <f.icon className="w-4.5 h-4.5 text-accent" />
              <span className="text-[12.5px] font-semibold leading-snug">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-3" aria-hidden="true">
      <div className="w-px h-8 bg-gradient-to-b from-border to-primary/30" />
    </div>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  const items = [
    { icon: BadgeCheck, label: "NIN identity check" },
    { icon: Sparkles, label: "Facial verification" },
    { icon: Users, label: "Guarantor confirmed" },
    { icon: History, label: "Employment history" },
    { icon: Gauge, label: "Explainable trust score" },
  ];
  return (
    <section className="border-y border-border bg-primary-100/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon className="w-4 h-4" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- THE SHIFT ---------------- */
function TheShift() {
  const rows = [
    {
      icon: MessageSquareX,
      before:
        "Families hire from WhatsApp groups and referrals, with no way to check who anyone really is.",
      after:
        "Post a job and verified people apply — identity checked, guarantor confirmed, history on record.",
    },
    {
      icon: Briefcase,
      before:
        "Workers start from zero at every new job. A good reputation dies with the last employer.",
      after:
        "One verified profile that travels — employment history and reviews follow the worker for life.",
    },
    {
      icon: NotebookPen,
      before: "Agencies run on notebooks, Excel sheets, paper files and WhatsApp backlogs.",
      after:
        "AgencyOS digitises the whole operation — workers, jobs, placements, records and analytics.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Why this needs to exist"
        title="An entire workforce with no way to prove itself."
        sub="Millions of Nigerians work in homes. Almost none of them can show a verified identity, an employment record or a reputation they own. That's the gap Abode closes."
      />
      <div className="mt-14 space-y-4">
        {rows.map((r) => (
          <div
            key={r.before}
            className="rounded-3xl bg-surface-1 border border-border p-6 lg:p-7 shadow-soft grid lg:grid-cols-[auto_1fr_auto_1fr] gap-5 lg:gap-7 items-center"
          >
            <span className="w-12 h-12 shrink-0 rounded-2xl bg-muted text-ink-600 grid place-items-center">
              <r.icon className="w-6 h-6" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-ink-300">Today</p>
              <p className="mt-1.5 text-ink-600 leading-relaxed">{r.before}</p>
            </div>
            <span className="hidden lg:grid w-9 h-9 shrink-0 rounded-full bg-primary-100 text-primary place-items-center">
              <ArrowRight className="w-4 h-4" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary-600">
                With Abode
              </p>
              <p className="mt-1.5 text-ink leading-relaxed font-medium">{r.after}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- THREE GROUPS ---------------- */
function ThreeGroups() {
  const groups = [
    {
      icon: Home,
      kicker: "B2C",
      title: "Homeowners",
      body: "Post the role you need filled and review verified workers who apply — identity, employment history, employer reviews and trust score all in one place.",
      points: [
        "Post a job, workers come to you",
        "Free to review every applicant",
        "Interviews logged for safety",
      ],
      to: "/homeowners",
      cta: "For homeowners",
      tone: "bg-primary-100 text-primary",
    },
    {
      icon: Briefcase,
      kicker: "B2C",
      title: "Independent workers",
      body: "Join directly and build a portable professional identity. Verify once, and your reputation, records and reviews follow you for the rest of your career.",
      points: ["Free verification", "A reputation you own", "Work found by matching, not luck"],
      to: "/workers",
      cta: "For workers",
      tone: "bg-warmth-100 text-warmth",
    },
    {
      icon: Building2,
      kicker: "B2B SaaS",
      title: "Recruitment agencies",
      body: "Subscribe to AgencyOS and run your whole agency on software — onboard workers, receive jobs, assign candidates, track placements and prove your track record.",
      points: [
        "Digital workforce management",
        "Job distribution & tracking",
        "No commission, ever",
      ],
      to: "/agencies",
      cta: "For agencies",
      tone: "bg-accent-100 text-accent-foreground",
    },
  ];
  return (
    <section id="who" className="bg-warmth-100/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          eyebrow="Three sides, one platform"
          title="Built for everyone in the chain."
          sub="Homeowners, workers and the agencies that connect them — each with their own product surface, all standing on the same verified foundation."
          align="center"
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <Link
              key={g.title}
              to={g.to}
              className="group rounded-3xl bg-surface-1 border border-border p-7 shadow-soft hover:shadow-lift hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className={`w-12 h-12 rounded-2xl grid place-items-center ${g.tone}`}>
                  <g.icon className="w-6 h-6" />
                </span>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-600">
                  {g.kicker}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink tracking-tight">{g.title}</h3>
              <p className="mt-2 text-ink-600 leading-relaxed">{g.body}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                {g.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TWO PRODUCTS ---------------- */
function TwoProducts() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Two products"
        title="One trust layer. Two businesses."
        sub="The marketplace earns per transaction. AgencyOS earns predictable monthly subscription revenue. Both are powered by the same verified data — and each one makes the other stronger."
      />
      <div className="mt-14 grid lg:grid-cols-2 gap-5">
        {/* Marketplace */}
        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-9 shadow-soft flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
            Product 01 · B2C
          </span>
          <h3 className="mt-2 font-display text-3xl font-extrabold text-primary tracking-tight">
            Marketplace
          </h3>
          <p className="mt-3 text-ink-600 leading-relaxed">
            Homeowners post jobs; verified workers apply or get recommended. A credit wallet powers
            it — ₦100 per credit, one balance, nothing expires.
          </p>
          <div className="mt-6 space-y-3">
            {[
              ["Post a job", "50 credits"],
              ["Instant AI recommendations", "50 credits"],
              ["Worker applies to a job", "By salary level"],
              ["Reviewing applicants & hiring", "Free"],
            ].map(([label, cost]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-border pb-3"
              >
                <span className="text-sm text-ink">{label}</span>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                    cost === "Free"
                      ? "bg-primary-100 text-primary"
                      : "bg-accent-100 text-accent-foreground"
                  }`}
                >
                  {cost}
                </span>
              </div>
            ))}
          </div>
          <Link
            to="/homeowners"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-[15px] font-semibold hover:bg-primary-600 transition-colors"
          >
            See the marketplace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* AgencyOS */}
        <div className="rounded-3xl bg-primary text-primary-foreground p-7 lg:p-9 shadow-lift flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Product 02 · B2B SaaS
          </span>
          <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">AgencyOS</h3>
          <p className="mt-3 text-primary-foreground/80 leading-relaxed">
            The operating system for recruitment agencies — worker database, onboarding, job
            distribution, placements, employment records and analytics. Flat monthly software
            pricing, no commission.
          </p>
          <div className="mt-6 space-y-3">
            {[
              ["Starter", "Up to 30 workers", "₦20,000/mo"],
              ["Growth", "Up to 150 workers", "₦50,000/mo"],
              ["Professional", "Up to 500 workers", "₦100,000/mo"],
            ].map(([plan, cap, price]) => (
              <div
                key={plan}
                className="flex items-center justify-between gap-4 rounded-xl bg-white/10 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-bold">{plan}</p>
                  <p className="text-[12px] text-primary-foreground/70">{cap}</p>
                </div>
                <span className="shrink-0 text-sm font-bold text-accent">{price}</span>
              </div>
            ))}
          </div>
          <Link
            to="/agencies"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-primary px-5 py-3.5 text-[15px] font-semibold hover:bg-accent/90 transition-colors"
          >
            Explore AgencyOS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST LAYER ---------------- */
function TrustLayer() {
  return (
    <section id="trust-layer" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          onDark
          eyebrow="The trust layer"
          title={
            <>
              Agencies recruit.
              <br />
              <span className="text-accent">Abode verifies.</span>
            </>
          }
          sub="This is the single most important rule on the platform. Agencies find and manage workers — but they never verify them. Verification is centralised with Abode so the standard can't drift."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-7 lg:p-8">
            <p className="text-sm font-bold text-accent uppercase tracking-wider">
              If agencies verified
            </p>
            <ul className="mt-5 space-y-3.5">
              {[
                "Trust would vary from agency to agency",
                "Standards would differ across the platform",
                "An agency could approve a worker who isn't real",
                "The badge would stop meaning anything",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-primary-foreground/75">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-warmth shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-surface text-ink p-7 lg:p-8 shadow-lift">
            <p className="text-sm font-bold text-primary-600 uppercase tracking-wider">
              How Abode does it
            </p>
            <ul className="mt-5 space-y-4">
              {[
                {
                  title: "NIN identity verification",
                  body: "Run by Abode through a licensed identity provider, stored masked.",
                },
                {
                  title: "Facial verification",
                  body: "A live face check proves a real person and matches them to their NIN identity.",
                },
                {
                  title: "Guarantor call",
                  body: "A real person on our team calls the guarantor and records the outcome.",
                },
                {
                  title: "Human sign-off",
                  body: "No profile goes live without review by our team. Rejections carry a reason.",
                },
              ].map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-primary-100 grid place-items-center">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{c.title}</p>
                    <p className="text-sm text-ink-600 leading-relaxed">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 inline-flex items-start gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <ShieldCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <span>
            Only identity, guarantor, documents and platform placements are marked “verified”.
            Self-reported details are always labelled as such — never dressed up with a tick.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST SCORE ---------------- */
function TrustScore() {
  const groups = [
    {
      icon: Fingerprint,
      title: "Identity",
      body: "NIN verified. Face verified. The foundation everything else sits on.",
    },
    {
      icon: History,
      title: "Employment",
      body: "Jobs completed, length of each placement, and repeat employment with the same family.",
    },
    {
      icon: Star,
      title: "Reputation",
      body: "Employer ratings, positive reviews and complaint rate over time.",
    },
    {
      icon: BadgeCheck,
      title: "Professionalism",
      body: "A complete profile, responsive communication and a confirmed guarantor.",
    },
  ];
  return (
    <section id="trust-score" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Trust Score"
        title="Explainable, not a black box."
        sub="We deliberately started with a rules-based score rather than an AI number. Every point comes from a signal you can name — so workers know how to grow it, and families know exactly what they're reading."
        align="center"
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft"
          >
            <span className="w-12 h-12 rounded-2xl bg-primary-100 text-primary grid place-items-center">
              <g.icon className="w-6 h-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink tracking-tight">{g.title}</h3>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed">{g.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-accent-100 border border-accent/25 p-5 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-accent mt-0.5 shrink-0" />
        <p className="text-sm text-ink leading-relaxed">
          <span className="font-semibold">A new worker is never punished for being new.</span> A
          freshly verified worker with no history shows as “New · Verified” — never a zero score or
          an empty star rating.
        </p>
      </div>
    </section>
  );
}

/* ---------------- PORTABLE REPUTATION ---------------- */
function PortableReputation() {
  return (
    <section className="bg-warmth-100/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-warmth/10 text-warmth px-3 py-1.5 text-xs font-semibold">
            <Repeat className="w-3.5 h-3.5" />
            Worker ownership
          </span>
          <h2 className="mt-5 font-display font-extrabold tracking-tight text-primary text-[34px] leading-[1.1] sm:text-5xl">
            The worker owns the record.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-lg">
            Agencies manage workers operationally — that's real and useful. But identity, trust
            history, employment records and reputation stay attached to the worker's own Abode
            profile. Change employer, change agency, and your professional history comes with you.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Identity and verification belong to the worker",
              "Employment history is a permanent timeline, not an agency's file",
              "Employer reviews and trust score follow the person",
              "Leaving an agency doesn't reset a career",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-lift">
          <p className="text-xs font-bold uppercase tracking-wider text-ink-600">
            Employment timeline
          </p>
          <p className="mt-1 font-bold text-ink">Chidinma O. · Nanny</p>
          <div className="mt-6 relative pl-7">
            <div className="absolute left-[7px] top-1.5 bottom-1.5 w-px bg-border" />
            {[
              {
                period: "2026 — present",
                place: "Adeyemi family · Lekki Phase 1",
                note: "Live-in nanny · ongoing",
                live: true,
              },
              {
                period: "2024 — 2026",
                place: "Okonkwo family · Ikoyi",
                note: "22 months · ★ 5.0 · rehired once",
              },
              { period: "2023 — 2024", place: "Bello family · Lekki", note: "11 months · ★ 4.5" },
              {
                period: "2023",
                place: "Verified on Abode",
                note: "NIN · face · guarantor confirmed",
                seal: true,
              },
            ].map((e) => (
              <div key={e.period} className="relative pb-6 last:pb-0">
                <span
                  className={`absolute -left-7 top-1 w-4 h-4 rounded-full border-2 border-surface-1 grid place-items-center ${
                    e.seal ? "bg-accent" : e.live ? "bg-success" : "bg-primary"
                  }`}
                >
                  {e.seal && <BadgeCheck className="w-2.5 h-2.5 text-primary" />}
                </span>
                <p className="text-[11px] font-bold uppercase tracking-wider text-ink-300">
                  {e.period}
                </p>
                <p className="mt-0.5 font-semibold text-ink text-[15px]">{e.place}</p>
                <p className="text-[13px] text-ink-600">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VISION ---------------- */
function Vision() {
  const sectors = [
    "Domestic workers",
    "Security personnel",
    "Drivers",
    "Caregivers",
    "Hospitality workers",
    "Artisans",
    "Skilled trades",
  ];
  return (
    <section id="vision" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Where this goes"
        title="Infrastructure, not a single app."
        sub="Domestic work is where we start, because it's where the trust gap hurts families and workers most. But verified identity, portable reputation, employment records and trusted matching are what every informal sector in Nigeria is missing."
        align="center"
      />
      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {sectors.map((s, i) => (
          <span
            key={s}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border ${
              i === 0
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-surface-1 text-ink-600 border-border"
            }`}
          >
            {i === 0 ? (
              <>
                <BadgeCheck className="w-4 h-4 text-accent" />
                {s} · live first
              </>
            ) : (
              s
            )}
          </span>
        ))}
      </div>
      <p className="mt-10 text-center text-ink-600 max-w-2xl mx-auto leading-relaxed">
        The underlying platform never changes. That's what makes Abode a foundation for the labour
        market rather than one more hiring app.
      </p>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const PLATFORM_FAQS = [
  {
    q: "So is Abode an app, or software for agencies?",
    a: "Both — and they're deliberately connected. The marketplace is where homeowners post jobs and workers get hired. AgencyOS is subscription software recruitment agencies use to run their operation. Both sit on the same trust layer: the same verified identities, the same employment records, the same trust score.",
  },
  {
    q: "Why don't you let agencies verify their own workers?",
    a: "Because trust would immediately fragment. Different agencies would apply different standards, and some could approve workers who aren't real. Agencies recruit and manage; Abode verifies. One standard, applied identically to everyone, is the whole product.",
  },
  {
    q: "If an agency onboards a worker, who owns that worker's profile?",
    a: "The worker. Agencies manage workers operationally — assigning them to jobs, tracking placements — but identity, trust history, employment records and reputation are attached to the worker's own Abode profile and travel with them if they change agency or employer.",
  },
  {
    q: "Many domestic workers don't have smartphones. How does that work?",
    a: "Two ways. Agencies can onboard a worker on the agency's own device while the worker is physically present, and agencies receive job opportunities on their workers' behalf and submit candidates. Workers who do use smartphones can join directly and apply themselves.",
  },
  {
    q: "How does Abode make money?",
    a: "Two engines. The marketplace runs on credits (₦100 each): homeowners spend credits to post jobs and get instant recommendations, and workers spend credits to apply. AgencyOS is a flat monthly subscription from ₦20,000. We take no commission and no per-placement fee from anyone.",
  },
  {
    q: "Is the trust score AI?",
    a: "Not initially, and that's on purpose. It's rules-based, built from named signals — verified identity, employment history, employer reputation and professionalism — so it's explainable to both sides. A score nobody can interpret isn't trust.",
  },
  {
    q: "When does it launch?",
    a: "We're in validation now, starting with nannies in Lekki Phase 1, Lagos. Join the waitlist or take the survey — the answers genuinely shape what we build first.",
  },
];
