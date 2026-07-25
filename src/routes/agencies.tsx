import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Database,
  UserPlus,
  Send,
  ClipboardList,
  LineChart,
  Star,
  ShieldCheck,
  Smartphone,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
  Gauge,
  History,
  Search,
  Briefcase,
  XCircle,
} from "lucide-react";
import {
  SiteNav,
  SiteFooter,
  Survey,
  Waitlist,
  SectionHeader,
  FAQ,
  SURVEY_URL,
} from "@/components/site";

const AGENCIES_DESCRIPTION =
  "AgencyOS is Abode's software for Nigerian recruitment agencies — worker database, digital onboarding, job distribution, placement tracking, employment records and analytics. Flat monthly pricing from ₦20,000. No commission, no per-placement fees.";

export const Route = createFileRoute("/agencies")({
  component: AgenciesPage,
  head: () => ({
    meta: [
      { title: "AgencyOS — Run your recruitment agency on software" },
      { name: "description", content: AGENCIES_DESCRIPTION },
      { property: "og:title", content: "AgencyOS by Abode — Run your agency on software" },
      { property: "og:description", content: AGENCIES_DESCRIPTION },
      { name: "twitter:description", content: AGENCIES_DESCRIPTION },
    ],
  }),
});

function AgenciesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav active="agencies" />
      <Hero />
      <Positioning />
      <Features />
      <HowItWorks />
      <WhyAbodeVerifies />
      <WorkerOwnership />
      <Pricing />
      <Survey />
      <FAQ items={AGENCY_FAQS} title="Questions agencies ask." />
      <Waitlist
        role="agencies"
        title={
          <>
            Your agency, digitised.
            <br />
            <span className="text-accent">Starting with the pilot.</span>
          </>
        }
        sub="We're onboarding a small group of Lagos agencies onto AgencyOS first. Join the waitlist to be one of them."
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
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-foreground px-3 py-1.5 text-xs font-semibold tracking-wide">
              <Building2 className="w-3.5 h-3.5" />
              AgencyOS · B2B software
            </span>
            <h1 className="mt-6 font-display font-extrabold tracking-tight text-primary text-[42px] leading-[1.05] sm:text-6xl lg:text-[62px] lg:leading-[1.03]">
              Run your agency on
              <br />
              <span className="text-warmth">software, not notebooks.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
              AgencyOS replaces the notebooks, Excel sheets, paper files and endless WhatsApp
              threads with one system — your entire worker database, onboarding, job flow,
              placements and records in a single dashboard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-[15px] font-semibold hover:bg-primary-600 transition-colors shadow-soft"
              >
                Join the AgencyOS waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-1 px-5 py-3.5 text-[15px] font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
              >
                See pricing
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-600">
              <span className="inline-flex items-center gap-2">
                <XCircle className="w-5 h-5 text-warmth" /> No commission
              </span>
              <span className="inline-flex items-center gap-2">
                <XCircle className="w-5 h-5 text-warmth" /> No per-placement fees
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" /> We verify your workers
              </span>
            </div>
          </div>

          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const workers = [
    { name: "Chidinma O.", role: "Nanny", status: "Verified", score: 86, tone: "success" },
    { name: "Emeka U.", role: "Driver", status: "Verified", score: 74, tone: "success" },
    { name: "Blessing A.", role: "Housekeeper", status: "Pending", score: null, tone: "warning" },
    { name: "Ifeanyi K.", role: "Gateman", status: "Invited", score: null, tone: "muted" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-accent-100 via-primary-100 to-warmth-100 rounded-[48px] blur-2xl opacity-70" />
      <div className="rounded-2xl overflow-hidden border border-border bg-surface-1 shadow-lift">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-300" />
          <div className="ml-3 flex-1 rounded-md bg-surface-1 border border-border px-3 py-1 text-[10.5px] text-ink-600">
            agencyos.abode.ng/workers
          </div>
        </div>

        <div className="p-5">
          {/* agency identity */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary grid place-items-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-[13px] font-bold text-ink truncate">Grace Domestic Services</p>
                <BadgeCheck className="w-3.5 h-3.5 text-accent shrink-0" />
              </div>
              <p className="text-[11px] text-ink-600">CAC verified · Lagos · 4 yrs active</p>
            </div>
          </div>

          {/* stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["48", "Workers"],
              ["31", "Placed"],
              ["6", "Open jobs"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-primary-100/70 px-3 py-2.5">
                <p className="font-display text-xl font-extrabold text-primary leading-none">{n}</p>
                <p className="text-[10.5px] text-ink-600 mt-1">{l}</p>
              </div>
            ))}
          </div>

          {/* search row */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 rounded-lg border border-border px-2.5 py-2">
              <Search className="w-3.5 h-3.5 text-ink-300" />
              <span className="text-[11px] text-ink-600">Search workers…</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg bg-primary text-primary-foreground px-2.5 py-2 text-[11px] font-semibold">
              <UserPlus className="w-3.5 h-3.5" />
              Invite
            </span>
          </div>

          {/* worker rows */}
          <div className="mt-3 space-y-1.5">
            {workers.map((w) => {
              const chip =
                w.tone === "success"
                  ? "bg-primary-100 text-primary"
                  : w.tone === "warning"
                    ? "bg-accent-100 text-accent-foreground"
                    : "bg-muted text-ink-600";
              return (
                <div
                  key={w.name}
                  className="flex items-center gap-2.5 rounded-lg border border-border px-2.5 py-2"
                >
                  <span className="w-7 h-7 rounded-full bg-muted grid place-items-center text-[10px] font-bold text-ink-600 shrink-0">
                    {w.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11.5px] font-semibold text-ink truncate">{w.name}</p>
                    <p className="text-[10px] text-ink-600">{w.role}</p>
                  </div>
                  {w.score && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-primary shrink-0">
                      <Gauge className="w-3 h-3" />
                      {w.score}
                    </span>
                  )}
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[9.5px] font-bold ${chip}`}
                  >
                    {w.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* job opportunity */}
          <div className="mt-3 rounded-xl bg-primary text-primary-foreground p-3">
            <div className="flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-accent shrink-0" />
              <p className="text-[11px] font-bold">New job for your workers</p>
            </div>
            <p className="mt-1 text-[10.5px] text-primary-foreground/75">
              Nanny · Lekki Phase 1 · ₦100k–₦150k · live-in
            </p>
            <div className="mt-2.5 flex gap-1.5">
              <span className="rounded-md bg-accent text-primary px-2.5 py-1 text-[10px] font-bold">
                Assign worker
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-semibold">
                View details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- POSITIONING ---------------- */
function Positioning() {
  return (
    <section className="border-y border-border bg-primary-100/60">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20 text-center">
        <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
          What AgencyOS is
        </p>
        <p className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-[1.2] tracking-tight">
          “Shopify for recruitment agencies.”
        </p>
        <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-2xl mx-auto">
          You already do the hard part — finding, vetting and placing good people. AgencyOS gives
          that work a real system underneath it, so your agency can grow without drowning in paper.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const modules = [
    {
      icon: Database,
      title: "Worker database",
      body: "Every worker in one place. Search, filter by role, status or availability, and manage records without digging through files.",
    },
    {
      icon: UserPlus,
      title: "Worker onboarding",
      body: "Invite a worker with just their name and phone. Track verification progress and complete onboarding on your own device if they don't have a smartphone.",
    },
    {
      icon: Users,
      title: "Workforce management",
      body: "Activate or suspend workers, update profiles and manage availability as your roster changes day to day.",
    },
    {
      icon: Send,
      title: "Job distribution",
      body: "Receive homeowner jobs matched to your workers, decide who to put forward, and submit candidates in a couple of taps.",
    },
    {
      icon: ClipboardList,
      title: "Application tracking",
      body: "See exactly where every submission stands — assigned, interview scheduled, shortlisted or completed.",
    },
    {
      icon: Briefcase,
      title: "Placement management",
      body: "Track live placements, keep placement records and see your full placement history at a glance.",
    },
    {
      icon: History,
      title: "Employment records",
      body: "Every placement becomes part of a permanent employment timeline — real, verifiable proof of work.",
    },
    {
      icon: LineChart,
      title: "Analytics dashboard",
      body: "Workers onboarded, placements made, successful hires, worker activity and growth over time.",
    },
    {
      icon: Star,
      title: "Agency reputation",
      body: "A public agency profile with your verification badge, ratings, reviews, years active and successful placements.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Inside AgencyOS"
        title="Your whole operation, in one dashboard."
        sub="Nine modules covering everything an agency actually does — from the first invite to a placement record that lasts."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m) => (
          <div
            key={m.title}
            className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft"
          >
            <span className="w-12 h-12 rounded-2xl bg-accent-100 text-accent-foreground grid place-items-center">
              <m.icon className="w-6 h-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink tracking-tight">{m.title}</h3>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed">{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      icon: BadgeCheck,
      n: "01",
      title: "Get your agency verified",
      body: "Create an account and we verify your CAC registration, business identity, and the owner's NIN. Only verified agencies become visible on the platform.",
    },
    {
      icon: Smartphone,
      n: "02",
      title: "Invite your workers",
      body: "Enter just first name, last name and phone number. We send an SMS with a secure onboarding link — and if the worker has no smartphone, they can complete it on your device while they're with you.",
    },
    {
      icon: ShieldCheck,
      n: "03",
      title: "Abode verifies them",
      body: "We run the NIN check, facial verification and identity check, then capture guarantor details, skills and experience. You never have to verify anyone yourself.",
    },
    {
      icon: Send,
      n: "04",
      title: "Receive jobs and assign workers",
      body: "When a homeowner posts a matching job, the opportunity comes to you. Choose which of your workers fits and submit them as candidates.",
    },
    {
      icon: ClipboardList,
      n: "05",
      title: "Track it to placement",
      body: "Follow every submission through interview and shortlist to a confirmed placement — all recorded, all visible.",
    },
    {
      icon: LineChart,
      n: "06",
      title: "Grow on your numbers",
      body: "Watch your placements, hire rate and reputation build up into a public track record that wins you more business.",
    },
  ];
  return (
    <section id="how" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          onDark
          eyebrow="How it works"
          title={
            <>
              From first invite to <span className="text-accent">proven track record</span>.
            </>
          }
          sub="Six steps. You recruit and manage; we handle identity, verification and the records."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-surface p-6 text-ink shadow-lift">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-2xl bg-accent-100 text-accent-foreground grid place-items-center">
                  <s.icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-bold text-ink-300">{s.n}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 inline-flex items-start gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <Smartphone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <span>
            Built for how the work really happens — many domestic workers don't own smartphones, so
            AgencyOS lets you onboard and represent them digitally.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ABODE VERIFIES ---------------- */
function WhyAbodeVerifies() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary px-3 py-1.5 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            One standard for everyone
          </span>
          <h2 className="mt-5 font-display font-extrabold tracking-tight text-primary text-[34px] leading-[1.1] sm:text-5xl">
            You recruit. We verify.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-lg">
            Abode runs identity verification itself, through a licensed provider — never the agency.
            That's not a lack of trust in you; it's what makes your workers' badges worth something
            to families.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "One consistent standard across every agency on the platform",
              "Families trust the badge, so your candidates get taken seriously",
              "No verification paperwork or liability on your side",
              "Nobody can undercut you by approving workers who aren't real",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-lift">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center text-center">
            <div>
              <span className="w-12 h-12 mx-auto rounded-2xl bg-accent-100 text-accent-foreground grid place-items-center">
                <Building2 className="w-6 h-6" />
              </span>
              <p className="mt-3 font-bold text-ink text-[15px]">Your agency</p>
              <p className="text-[13px] text-ink-600 mt-1">Recruits & manages</p>
            </div>
            <ArrowRight className="w-5 h-5 text-ink-300" />
            <div>
              <span className="w-12 h-12 mx-auto rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                <ShieldCheck className="w-6 h-6" />
              </span>
              <p className="mt-3 font-bold text-ink text-[15px]">Abode</p>
              <p className="text-[13px] text-ink-600 mt-1">Verifies identity</p>
            </div>
          </div>

          <div className="mt-7 border-t border-border pt-6 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-600">
              What Abode runs on every worker
            </p>
            {[
              "NIN verification through a licensed identity provider",
              "Facial verification against their NIN identity",
              "Guarantor captured and called by our team",
              "Human sign-off before the profile goes live",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-primary-100 grid place-items-center">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </span>
                <span className="text-sm text-ink leading-relaxed">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-accent-100 border border-accent/20 p-3.5 text-sm text-ink flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold">Verified agencies only.</span> Your CAC, business
              identity and owner NIN are checked too — so families know the agency behind the worker
              is real.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORKER OWNERSHIP ---------------- */
function WorkerOwnership() {
  return (
    <section className="bg-warmth-100/50 border-y border-border">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          eyebrow="Being straight with you"
          title="Workers own their record. You own the relationship."
          sub="We'd rather say this plainly up front than have you discover it later."
          align="center"
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft">
            <span className="w-11 h-11 rounded-2xl bg-accent-100 text-accent-foreground grid place-items-center">
              <Building2 className="w-5 h-5" />
            </span>
            <p className="mt-5 font-bold text-ink">What belongs to your agency</p>
            <ul className="mt-4 space-y-2.5">
              {[
                "The operational relationship with the worker",
                "Which jobs you put them forward for",
                "Your placement history and agency reputation",
                "Your analytics and growth record",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft">
            <span className="w-11 h-11 rounded-2xl bg-primary-100 text-primary grid place-items-center">
              <Briefcase className="w-5 h-5" />
            </span>
            <p className="mt-5 font-bold text-ink">What belongs to the worker</p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Their verified identity",
                "Their trust history and trust score",
                "Their employment history and reviews",
                "Their profile, if they move on",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-ink-600 leading-relaxed max-w-2xl mx-auto">
          A worker whose reputation is portable is a worker who takes the platform seriously — and
          that's exactly the kind of candidate that makes your agency look good.{" "}
          <Link to="/workers" className="font-semibold text-primary hover:text-primary-600">
            See the worker side →
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      cap: "Up to 30 workers",
      price: "₦20,000",
      note: "For small agencies getting organised",
      popular: false,
    },
    {
      name: "Growth",
      cap: "Up to 150 workers",
      price: "₦50,000",
      note: "For established agencies scaling up",
      popular: true,
    },
    {
      name: "Professional",
      cap: "Up to 500 workers",
      price: "₦100,000",
      note: "For large, multi-role operations",
      popular: false,
    },
  ];
  const included = [
    "Full worker database & search",
    "Unlimited worker onboarding invites",
    "Abode-run verification on every worker",
    "Job distribution & candidate submission",
    "Application & placement tracking",
    "Permanent employment records",
    "Analytics dashboard",
    "Public verified agency profile",
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Pricing"
        title="You pay for software. That's it."
        sub="No commission on placements. No per-placement fees. No cut of anyone's salary. A flat monthly subscription based on how many workers you manage."
      />
      <div className="mt-14 grid lg:grid-cols-3 gap-5">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-7 lg:p-8 border shadow-soft flex flex-col ${
              p.popular
                ? "bg-primary text-primary-foreground border-primary shadow-lift"
                : "bg-surface-1 border-border text-ink"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-accent text-primary rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                Most popular
              </span>
            )}
            <p className={`text-sm font-bold ${p.popular ? "text-accent" : "text-ink-600"}`}>
              {p.name}
            </p>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-extrabold tracking-tight">{p.price}</span>
              <span
                className={`text-sm font-medium ${p.popular ? "text-primary-foreground/70" : "text-ink-600"}`}
              >
                /month
              </span>
            </div>
            <p
              className={`mt-2 text-sm font-semibold ${p.popular ? "text-primary-foreground/90" : "text-ink"}`}
            >
              {p.cap}
            </p>
            <p
              className={`mt-1 text-sm ${p.popular ? "text-primary-foreground/70" : "text-ink-600"}`}
            >
              {p.note}
            </p>
            <a
              href="#waitlist"
              className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                p.popular
                  ? "bg-accent text-primary hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary-600"
              }`}
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-soft">
        <p className="text-sm font-bold text-ink">Every plan includes</p>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
          {included.map((t) => (
            <div key={t} className="flex items-start gap-2.5 text-sm text-ink">
              <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-ink-600 inline-flex items-center gap-2 w-full justify-center">
        <FileText className="w-4 h-4" /> Pricing is proposed and still in review while we validate
        with pilot agencies ·{" "}
        <a
          href={SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:text-primary-600"
        >
          tell us what's fair
        </a>
      </p>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const AGENCY_FAQS = [
  {
    q: "What does AgencyOS actually replace?",
    a: "The notebooks, Excel sheets, paper worker files and WhatsApp threads you currently run your agency on. Your worker database, onboarding, job pipeline, applications, placements, employment records and analytics all live in one dashboard instead.",
  },
  {
    q: "Do I have to verify workers myself?",
    a: "No, and you're not allowed to. You enter a worker's first name, last name and phone number; we send them a secure onboarding link and run the NIN check, facial verification and guarantor call ourselves. Verification is centralised with Abode so the standard is identical for every agency.",
  },
  {
    q: "Most of my workers don't have smartphones. Does this still work?",
    a: "Yes — this is designed for exactly that. The worker can complete onboarding on your device while they're physically with you. And when a matching job is posted, the opportunity comes to you: you decide which worker to assign and submit them as a candidate, so they never need to use an app to get work.",
  },
  {
    q: "I was expecting to earn a commission per placement. What changed?",
    a: "We moved away from commission entirely. Instead of taking a cut of your placements, AgencyOS is flat monthly software you pay for — from ₦20,000. You keep 100% of whatever you charge your clients, and your costs are predictable instead of scaling with your success.",
  },
  {
    q: "What happens if a worker leaves my agency?",
    a: "Your placement history, reputation and analytics stay with you. The worker's identity, trust score, employment history and reviews stay attached to their own Abode profile and travel with them. We're upfront about this because it's what makes workers trust the platform enough to build a real record on it.",
  },
  {
    q: "What do you need to verify my agency?",
    a: "Your CAC registration, business identity, and the agency owner's NIN. Only verified agencies are visible to homeowners — it protects both the families and the workers you place.",
  },
  {
    q: "Is there a free trial?",
    a: "We're finalising trial terms with our pilot agencies now. Join the waitlist and take the survey — early agencies help set the pricing and get onboarded first.",
  },
];
