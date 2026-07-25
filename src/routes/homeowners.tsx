import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  MapPin,
  BadgeCheck,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Users,
  Wallet,
  Plus,
  FilePlus2,
  Inbox,
  CalendarCheck,
  HeartHandshake,
  Gauge,
} from "lucide-react";

import { SiteNav, SiteFooter, Survey, Waitlist, SectionHeader, FAQ } from "@/components/site";
import heroNanny from "@/assets/hero-nanny.jpg";
import cookImg from "@/assets/cook.jpg";
import gatemanImg from "@/assets/gateman.jpg";
import housekeeperImg from "@/assets/housekeeper.jpg";

const HOMEOWNERS_DESCRIPTION =
  "Post what you need and let verified workers come to you. Every worker on Abode is NIN-verified, facially matched and guarantor-confirmed, with a trust score built from real employment history. Every interview visit is on record.";

export const Route = createFileRoute("/homeowners")({
  component: HomeownersPage,
  head: () => ({
    meta: [
      { title: "Abode for homeowners — Your home. Trusted hands." },
      { name: "description", content: HOMEOWNERS_DESCRIPTION },
      { property: "og:title", content: "Abode — Your home. Trusted hands." },
      { property: "og:description", content: HOMEOWNERS_DESCRIPTION },
      { name: "twitter:description", content: HOMEOWNERS_DESCRIPTION },
    ],
  }),
});

function HomeownersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav active="homeowners" />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <VerificationSection />
      <TrustScorePreview />
      <Categories />
      <SafetySection />
      <Pricing />
      <Survey />
      <FAQ items={HOMEOWNER_FAQS} />
      <Waitlist
        role="homeowners"
        title={
          <>
            Everyone verified.
            <br />
            <span className="text-accent">Everyone protected.</span>
          </>
        }
        sub="Be the first to know when Abode launches in your area. No spam — just one email when we're live."
      />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-14 pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary px-3 py-1.5 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            Launching in Lekki, Lagos
          </span>
          <h1 className="mt-6 font-display font-extrabold tracking-tight text-primary text-[44px] leading-[1.05] sm:text-6xl lg:text-[68px] lg:leading-[1.02]">
            Your home.
            <br />
            <span className="text-warmth">Trusted hands.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
            Post what you need — verified nannies, cooks, housekeepers, drivers, gatemen and
            caregivers come to you. Every worker is NIN-checked, facially matched and
            guarantor-confirmed, with a trust score built from real work history.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-[15px] font-semibold hover:bg-primary-600 transition-colors shadow-soft"
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-1 px-5 py-3.5 text-[15px] font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-600">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-accent" />
              <span>NIN verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" />
              <span>Guarantor checked</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-info" />
              <span>Every visit logged</span>
            </div>
          </div>
        </div>

        {/* Phone mock */}
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-warmth-100 via-accent-100 to-primary-100 rounded-[48px] blur-2xl opacity-70" />
          <PhoneFrame>
            <PhonePreview />
          </PhoneFrame>
          <FloatingBadge
            className="absolute -left-4 top-16 sm:-left-10"
            icon={<ShieldCheck className="w-4 h-4" />}
            label="NIN verified"
            tone="primary"
          />
          <FloatingBadge
            className="absolute -right-2 bottom-24 sm:-right-8"
            icon={<MapPin className="w-4 h-4" />}
            label="Visit logged"
            tone="info"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({
  icon,
  label,
  tone,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  tone: "primary" | "info" | "accent";
  className?: string;
}) {
  const styles = {
    primary: "bg-surface-1 text-primary border-primary-100",
    info: "bg-surface-1 text-info border-[#DDEAF6]",
    accent: "bg-accent-100 text-primary border-accent/40",
  }[tone];
  return (
    <div
      className={`${className} inline-flex items-center gap-2 rounded-full border ${styles} px-3.5 py-2 text-xs font-semibold shadow-lift`}
    >
      {icon}
      {label}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[300px] sm:w-[340px] rounded-[44px] bg-[#0B3D2E] p-3 shadow-lift">
      <div className="relative rounded-[34px] overflow-hidden bg-surface aspect-[9/19.5]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0B3D2E] rounded-full z-10" />
        {children}
      </div>
    </div>
  );
}

/** The homeowner's live job post with verified workers applying to it. */
function PhonePreview() {
  const applicants = [
    { name: "Chidinma O.", meta: "6 yrs · Live-in", img: heroNanny, score: 86, rating: "4.8" },
    { name: "Blessing A.", meta: "4 yrs · Live-out", img: housekeeperImg, score: 79, rating: null },
  ];
  return (
    <div className="h-full w-full flex flex-col bg-surface">
      {/* status */}
      <div className="pt-8 pb-3 px-5 flex items-center justify-between text-[11px] font-semibold text-ink">
        <span>9:41</span>
        <span>••• ▲</span>
      </div>
      {/* header */}
      <div className="px-5 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-ink-600">Good morning,</p>
          <p className="text-[15px] font-bold text-ink">Tolu</p>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-accent-100 text-accent-foreground rounded-full pl-1 pr-3 py-1">
          <span className="w-6 h-6 rounded-full bg-accent text-white grid place-items-center text-[10px] font-bold">
            120
          </span>
          <span className="text-[11px] font-semibold">credits</span>
        </div>
      </div>

      {/* the job post */}
      <div className="mx-5 rounded-2xl bg-primary text-primary-foreground p-3.5 shadow-soft">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[13px] font-bold">Nanny for 2 kids</p>
            <p className="text-[10.5px] text-primary-foreground/70 mt-0.5">
              Lekki Phase 1 · Live-in
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-accent text-primary px-2 py-0.5 text-[9.5px] font-bold">
            OPEN
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
          <span className="text-[11px] font-semibold text-accent">₦100k–₦150k/mo</span>
          <span className="text-[10px] text-primary-foreground/70">Posted 2 days ago</span>
        </div>
      </div>

      {/* applicants */}
      <div className="px-5 mt-4 flex items-center justify-between">
        <p className="text-[11.5px] font-bold text-ink">4 verified workers applied</p>
        <span className="text-[10px] font-semibold text-primary-600">Free to review</span>
      </div>

      <div className="mx-5 mt-2 space-y-2">
        {applicants.map((a) => (
          <div
            key={a.name}
            className="rounded-2xl bg-surface-1 border border-border p-2.5 flex items-center gap-2.5 shadow-soft"
          >
            <div className="relative shrink-0">
              <img
                src={a.img}
                alt=""
                loading="lazy"
                className="w-11 h-11 rounded-xl object-cover"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent grid place-items-center border-2 border-surface-1">
                <BadgeCheck className="w-2.5 h-2.5 text-primary" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-ink truncate">{a.name}</p>
              <p className="text-[10px] text-ink-600 mt-0.5">{a.meta}</p>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="inline-flex items-center gap-0.5 rounded-full bg-primary-100 text-primary px-1.5 py-0.5 text-[9px] font-bold">
                  <Gauge className="w-2.5 h-2.5" />
                  {a.score}
                </span>
                {a.rating ? (
                  <span className="inline-flex items-center gap-0.5 text-[9.5px] font-semibold text-ink">
                    <Star className="w-2.5 h-2.5 fill-accent text-accent" />
                    {a.rating}
                  </span>
                ) : (
                  <span className="rounded-full bg-accent-100 text-accent-foreground px-1.5 py-0.5 text-[9px] font-bold">
                    New · Verified
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* recommendation nudge */}
      <div className="mx-5 mt-2.5 rounded-xl bg-accent-100 border border-accent/25 px-3 py-2 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
        <span className="text-[10px] font-semibold text-ink leading-snug">
          12 more verified matches nearby
        </span>
      </div>

      {/* tab bar with raised post button */}
      <div className="mt-auto relative h-14 bg-surface-1 border-t border-border grid grid-cols-5 items-center text-[9px] text-ink-600">
        {["Jobs", "Interviews", "", "Wallet", "Profile"].map((t, i) => (
          <div
            key={t || "post"}
            className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-primary font-bold" : ""}`}
          >
            <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-primary" : "bg-transparent"}`} />
            {t}
          </div>
        ))}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 flex flex-col items-center">
          <span className="w-12 h-12 rounded-full bg-primary grid place-items-center shadow-lift border-4 border-surface-1">
            <Plus className="w-5 h-5 text-primary-foreground" strokeWidth={2.6} />
          </span>
          <span className="mt-0.5 text-[9px] font-bold text-primary">Post</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  const items = [
    { icon: BadgeCheck, label: "NIN identity check" },
    { icon: Sparkles, label: "Facial verification" },
    { icon: Users, label: "Guarantor confirmed" },
    { icon: FileCheck, label: "Employment records" },
    { icon: MapPin, label: "Every visit logged" },
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

/* ---------------- HOW ---------------- */
function HowItWorks() {
  const steps = [
    {
      icon: FilePlus2,
      n: "01",
      title: "Post the job you need filled",
      body: "Role, area, live-in or live-out, salary range, duties and any preferences. Posting costs 50 credits (₦5,000) and puts your job in front of every verified worker who matches.",
    },
    {
      icon: Inbox,
      n: "02",
      title: "Verified workers apply to you",
      body: "No searching, no cold outreach. Workers who fit apply — and reviewing every applicant is completely free, because the worker pays to apply. You can also ask Abode for instant matches.",
    },
    {
      icon: CalendarCheck,
      n: "03",
      title: "Interview with the visit on record",
      body: "Shortlist, chat, then book an interview in-app. Both parties consent and the visit is logged — protection for you and for the person coming to your home.",
    },
    {
      icon: HeartHandshake,
      n: "04",
      title: "Hire, and it becomes real history",
      body: "Confirm the hire and a placement starts, covered by our replacement guarantee window. That placement becomes a permanent, verified record on the worker's profile.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="How Abode works"
        title="Post once. Verified people come to you."
        sub="You never hunt through profiles or pay to see who someone is. Post the job, review who applies for free, and hire with the visit on record."
      />
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-soft hover:shadow-lift transition-shadow"
          >
            <div className="flex items-start gap-5">
              <span className="shrink-0 w-12 h-12 rounded-2xl bg-primary-100 text-primary grid place-items-center">
                <s.icon className="w-6 h-6" />
              </span>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold text-ink tracking-tight">{s.title}</h3>
                </div>
                <p className="mt-2 text-ink-600 leading-relaxed">{s.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- VERIFICATION ---------------- */
function VerificationSection() {
  const checks = [
    {
      title: "Identity (NIN) verified",
      body: "Government NIN matched to legal name and date of birth.",
    },
    {
      title: "Facial verification",
      body: "A live face check confirms a real person and matches them to their NIN identity.",
    },
    {
      title: "Guarantor on record",
      body: "Guarantor named, called and confirmed by a real person on our team.",
    },
    {
      title: "Employment history",
      body: "Every placement made through Abode becomes a permanent, verified record.",
    },
  ];
  return (
    <section id="verification" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-primary-foreground px-3 py-1.5 text-xs font-semibold">
            <BadgeCheck className="w-3.5 h-3.5 text-accent" />
            The Abode Verification Standard
          </span>
          <h2 className="mt-5 font-display font-extrabold tracking-tight text-[36px] leading-[1.1] sm:text-5xl">
            One standard. One <span className="text-accent">amber seal</span>.
          </h2>
          <p className="mt-5 text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
            Abode verifies every worker itself — never the agency that recruited them. That's the
            whole point: one trusted standard, applied the same way to everyone, so the badge always
            means the same thing.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-accent grid place-items-center shadow-lift">
              <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-bold text-accent">Verified by Abode</p>
              <p className="text-sm text-primary-foreground/70">Reviewed by our team on record</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-surface p-6 lg:p-8 text-ink shadow-lift">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-600 font-semibold">
                Verification Report
              </p>
              <p className="text-lg font-bold text-primary mt-0.5">Chidinma O. · Nanny</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent grid place-items-center">
              <BadgeCheck className="w-5 h-5 text-primary" />
            </div>
          </div>
          <ul className="mt-5 space-y-3.5">
            {checks.map((c) => (
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
          <div className="mt-5 rounded-xl bg-accent-100 border border-accent/20 p-3.5 text-sm text-ink flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold">Honest by design.</span> Self-reported details (like
              years of experience) are labelled — only checks completed by our team wear the
              verified tick.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST SCORE (homeowner framing) ---------------- */
function TrustScorePreview() {
  const signals = [
    { label: "Identity", detail: "NIN verified · face verified", value: "Complete" },
    {
      label: "Employment",
      detail: "9 months longest placement · 1 repeat family",
      value: "Strong",
    },
    { label: "Reputation", detail: "12 employer ratings · no complaints", value: "Strong" },
    { label: "Professionalism", detail: "Full profile · guarantor confirmed", value: "Complete" },
  ];
  return (
    <section id="trust-score" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary px-3 py-1.5 text-xs font-semibold">
            <Gauge className="w-3.5 h-3.5" />
            Trust Score
          </span>
          <h2 className="mt-5 font-display font-extrabold tracking-tight text-primary text-[34px] leading-[1.1] sm:text-5xl">
            A score you can actually read.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-lg">
            Every worker carries a trust score built from real signals — identity, employment
            history, employer reviews and professionalism. It's rules-based, not a black-box AI
            number, so you can always see exactly what it's made of and why.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Built from verified facts, not guesses",
              "Every point is explainable and broken down",
              "Grows with completed jobs, length of service and repeat employers",
              "A brand-new verified worker shows “New · Verified”, never a zero",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-lift">
          <div className="flex items-center gap-4 border-b border-border pb-5">
            <img
              src={heroNanny}
              alt=""
              loading="lazy"
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <p className="font-bold text-ink">Chidinma O.</p>
              <p className="text-sm text-ink-600">Nanny · Lekki Phase 1</p>
            </div>
            <div className="text-right">
              <p className="font-display text-4xl font-extrabold text-primary leading-none">86</p>
              <p className="text-[11px] font-semibold text-ink-600 mt-1">Trust Score</p>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {signals.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink">{s.label}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-success">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {s.value}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-ink-600">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const cats = [
    {
      title: "Nannies",
      body: "Warm, background-checked caregivers for children of every age.",
      img: heroNanny,
    },
    {
      title: "Housekeepers",
      body: "Trained, reliable help for daily and weekly home care.",
      img: housekeeperImg,
    },
    {
      title: "Cooks",
      body: "Home cooks who know Nigerian kitchens and family taste.",
      img: cookImg,
    },
    {
      title: "Gatemen & Drivers",
      body: "Professional gatemen and drivers for compound and family life.",
      img: gatemanImg,
    },
  ];
  const more = ["Caregivers", "Gardeners", "Security guards"];
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 pb-24 lg:pb-32">
      <SectionHeader
        eyebrow="Who you can hire"
        title="Every role in the Nigerian home."
        sub="Launching with nannies in Lekki — expanding across Lagos and every household role."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cats.map((c) => (
          <article
            key={c.title}
            className="group rounded-3xl overflow-hidden bg-surface-1 border border-border shadow-soft hover:shadow-lift transition-all"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-accent-100/95 backdrop-blur text-ink rounded-full pl-1.5 pr-2.5 py-1 text-[11px] font-bold">
                <BadgeCheck className="w-3.5 h-3.5 text-accent" fill="currentColor" />
                Verified only
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{c.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        <span className="text-sm text-ink-600">Also on Abode:</span>
        {more.map((m) => (
          <span
            key={m}
            className="inline-flex items-center gap-1.5 rounded-full bg-surface-1 border border-border px-3.5 py-1.5 text-sm font-semibold text-ink"
          >
            <BadgeCheck className="w-3.5 h-3.5 text-accent" />
            {m}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SAFETY ---------------- */
function SafetySection() {
  return (
    <section id="safety" className="bg-warmth-100/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <div className="rounded-3xl bg-surface-1 border border-border p-6 lg:p-7 shadow-lift">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF1F9] text-info px-3 py-1.5 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Interview visit logged
            </div>
            <p className="mt-4 text-ink leading-relaxed">
              Tuesday, 3:00 PM · Chidinma O. · Lekki Phase 1
            </p>
            <div className="mt-4 rounded-2xl overflow-hidden border border-border bg-[#FBF6EE] aspect-[6/5] relative">
              <svg
                viewBox="0 0 360 300"
                className="w-full h-full"
                role="img"
                aria-label="Logged interview route from home to the worker"
              >
                <rect width="360" height="300" fill="#FBF6EE" />
                {/* block / green-space tints */}
                <rect x="205" y="152" width="128" height="96" rx="10" fill="#EAF0E6" />
                <rect x="28" y="28" width="92" height="80" rx="10" fill="#F2EDE1" />
                <rect x="270" y="20" width="70" height="60" rx="10" fill="#F2EDE1" />

                {/* minor roads */}
                <g stroke="#ECE3D4" strokeWidth="3" strokeLinecap="round">
                  <path d="M0 45 H360" />
                  <path d="M0 150 H360" />
                  <path d="M0 255 H360" />
                  <path d="M40 0 V300" />
                  <path d="M175 0 V300" />
                  <path d="M320 0 V300" />
                  <path d="M95 150 L175 205" />
                  <path d="M255 95 L320 45" />
                </g>
                {/* major roads */}
                <g stroke="#E4DAC8" strokeWidth="8" strokeLinecap="round">
                  <path d="M0 95 H360" />
                  <path d="M255 0 V300" />
                  <path d="M95 0 V300" />
                  <path d="M0 205 H360" />
                </g>
                {/* centre-line dashes on the main roads */}
                <g stroke="#FBF6EE" strokeWidth="1.2" strokeDasharray="7 7">
                  <path d="M0 95 H360" />
                  <path d="M255 0 V300" />
                </g>

                {/* street names */}
                <g
                  fill="#B9AE9B"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="9"
                  fontWeight={600}
                >
                  <text x="16" y="90">
                    Fola Osibo
                  </text>
                  <text x="188" y="200">
                    Bisola Durosinmi
                  </text>
                  <text x="248" y="145" transform="rotate(-90 248 145)">
                    Admiralty Way
                  </text>
                </g>

                {/* route: halo + line */}
                <path
                  d="M120 262 L120 207 L176 207 L176 96 L255 96 L255 58"
                  fill="none"
                  stroke="#147A5C"
                  strokeOpacity="0.16"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M120 262 L120 207 L176 207 L176 96 L255 96 L255 58"
                  fill="none"
                  stroke="#147A5C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* worker pin (destination, top) */}
                <circle cx="255" cy="55" r="15" fill="#0B3D2E" opacity="0.18" />
                <circle cx="255" cy="55" r="8" fill="#0B3D2E" stroke="#fff" strokeWidth="2.5" />
                {/* home pin (start, bottom) */}
                <circle cx="120" cy="265" r="15" fill="#2E6FB0" opacity="0.18" />
                <circle cx="120" cy="265" r="8" fill="#2E6FB0" stroke="#fff" strokeWidth="2.5" />

                {/* pin labels */}
                <g fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight={700}>
                  <rect
                    x="146"
                    y="255"
                    width="58"
                    height="20"
                    rx="7"
                    fill="#fff"
                    stroke="#EDE5D8"
                  />
                  <text x="175" y="268.5" textAnchor="middle" fill="#211E1A">
                    Home
                  </text>
                  <rect
                    x="146"
                    y="45"
                    width="100"
                    height="20"
                    rx="7"
                    fill="#fff"
                    stroke="#EDE5D8"
                  />
                  <text x="196" y="58.5" textAnchor="middle" fill="#211E1A">
                    Interview address
                  </text>
                </g>
              </svg>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-ink-600">
                <span className="w-2 h-2 rounded-full bg-info" /> Homeowner
              </div>
              <div className="flex items-center gap-2 text-ink-600">
                <span className="w-2 h-2 rounded-full bg-primary" /> Worker
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-warmth/10 text-warmth px-3 py-1.5 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Safety is mutual
          </span>
          <h2 className="mt-5 font-display font-extrabold tracking-tight text-primary text-[36px] leading-[1.1] sm:text-5xl">
            Every visit is on record.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-lg">
            When you book an interview, the address is shared inside the app and both parties'
            locations are logged. Not surveillance — protection. For you, and for the person coming
            to your home.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Addresses shared only after an interview is accepted",
              "Both parties consent before a visit is logged",
              "Workers' contact details stay protected until they choose to share",
              "Report and support flow reachable from every screen",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const packs = [
    { credits: 10, price: "₦1,000", note: "Try it out", popular: false },
    { credits: 50, price: "₦5,000", note: "Exactly one job post", popular: false },
    { credits: 100, price: "₦10,000", note: "Two posts", popular: true },
    { credits: 250, price: "₦22,000", note: "Save ₦3,000", popular: false },
  ];
  const spend = [
    { label: "Post a job", cost: "50 credits", note: "₦5,000 — any salary range" },
    {
      label: "Instant AI worker recommendations",
      cost: "50 credits",
      note: "₦5,000 — matched to your job",
    },
    { label: "Review every applicant", cost: "Free", note: "The worker paid to apply" },
    { label: "Chat & book interviews", cost: "Free", note: "No per-hire fee, ever" },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Simple, fair pricing"
        title="One wallet. No commission."
        sub="1 credit = ₦100. You pay to post a job — then reviewing, chatting and hiring are free. Credits never expire, and we never take a cut of anyone's salary."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {packs.map((p) => (
          <div
            key={p.credits}
            className={`relative rounded-3xl p-7 border shadow-soft flex flex-col ${
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
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">{p.credits}</span>
              <span
                className={`text-sm font-medium ${p.popular ? "text-primary-foreground/80" : "text-ink-600"}`}
              >
                credits
              </span>
            </div>
            <p className="mt-2 text-2xl font-bold">{p.price}</p>
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
              Get {p.credits} credits
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-soft">
        <p className="text-sm font-bold text-ink">What credits are for</p>
        <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {spend.map((s) => (
            <div
              key={s.label}
              className="flex items-start justify-between gap-4 border-b border-border pb-4"
            >
              <div>
                <p className="font-semibold text-ink">{s.label}</p>
                <p className="text-sm text-ink-600 mt-0.5">{s.note}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                  s.cost === "Free"
                    ? "bg-primary-100 text-primary"
                    : "bg-accent-100 text-accent-foreground"
                }`}
              >
                {s.cost}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-ink-600 inline-flex items-center gap-2 w-full justify-center">
        <Wallet className="w-4 h-4" /> Credits never expire · Pay with Paystack · Pricing still in
        review while we validate
      </p>
    </section>
  );
}

/* ---------------- FAQ DATA (homeowner) ---------------- */
const HOMEOWNER_FAQS = [
  {
    q: "When are you launching on the app stores?",
    a: "We are currently in the validation phase and working hard to launch as soon as possible. Join the waitlist and we'll email you the launch date.",
  },
  {
    q: "How does Abode verify workers?",
    a: "Every worker completes an NIN identity check and a facial verification, plus a guarantor call by our team. Abode runs these checks itself — never the agency that recruited the worker — so the badge means the same thing on every profile. A real person on our team signs off before anyone goes live.",
  },
  {
    q: "Do I have to pay to see a worker's details?",
    a: "No. You pay to post a job — 50 credits (₦5,000). After that, reviewing every applicant, reading their full verification report, chatting and booking interviews are all free, because the worker paid to apply to your job.",
  },
  {
    q: "What if nobody good applies?",
    a: "You can ask Abode for instant recommendations — verified workers matched to your role, area, salary and accommodation — and invite them directly. We also surface matches the moment your job goes live, so you're never starting from an empty screen.",
  },
  {
    q: "What does the trust score actually mean?",
    a: "It's a rules-based score built from four groups of real signals: verified identity, employment history (jobs completed, length of service, repeat employers), reputation (employer ratings and complaint rate) and professionalism (complete profile, verified guarantor, responsiveness). It's explainable — you can see what every part of it comes from, rather than trusting a black-box AI number.",
  },
  {
    q: "Is location logging safe? What data is stored?",
    a: "Location logging protects both sides. We record that a visit took place, at what address, and roughly when — never continuous tracking. Both parties consent before an interview is confirmed, and every internal access to those logs is itself audited.",
  },
  {
    q: "Where is Abode available?",
    a: "We're launching in Lekki, Lagos, then expanding across Lagos and to other states like Abuja where applicable. Expansion depends on demand and on verified workers being available in the area.",
  },
  {
    q: "Do you take a cut of the salary?",
    a: "Never. Abode takes no commission and no per-placement fee. You pay for credits, agencies pay for software, and the worker's salary is entirely between you and them.",
  },
];
