import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ShieldCheck,
  MapPin,
  BadgeCheck,
  Sparkles,
  Bookmark,
  Star,
  Phone,
  ArrowRight,
  Lock,
  CheckCircle2,
  FileCheck,
  Users,
  Wallet,
  Mail,
  Loader2,
  Home,
  Briefcase,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

// Google Form survey (shared across all three roles — the form asks which one).
const SURVEY_URL = "https://forms.gle/babLTMxWtB66mfqSA";
// Web3Forms access key for the email waitlist. Get a free key at https://web3forms.com
// (it emails signups straight to your inbox — no backend needed). Set in web/.env:
//   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
const WAITLIST_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

import abodeIcon from "@/assets/abode-icon.png";
import heroNanny from "@/assets/hero-nanny.jpg";
import cookImg from "@/assets/cook.jpg";
import gatemanImg from "@/assets/gateman.jpg";
import housekeeperImg from "@/assets/housekeeper.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <VerificationSection />
      <Categories />
      <SafetySection />
      <Pricing />
      <Survey />
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={abodeIcon} alt="Abode" className="h-9 w-9 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-primary">Abode</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600">
          <a href="#how" className="hover:text-primary transition-colors">How it works</a>
          <a href="#verification" className="hover:text-primary transition-colors">Verification</a>
          <a href="#safety" className="hover:text-primary transition-colors">Safety</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#survey" className="hover:text-primary transition-colors">Survey</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary-600 transition-colors"
          >
            Join the waitlist
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
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
            Your home.<br />
            <span className="text-warmth">Trusted hands.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
            Abode is the verified way to hire nannies, cooks, housekeepers,
            drivers and gatemen. Every worker is NIN-checked, guarantor-confirmed,
            and every interview visit is on record — for your safety and theirs.
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
          <div className="mt-10 flex items-center gap-6 text-sm text-ink-600">
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

function PhonePreview() {
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
          <span className="w-6 h-6 rounded-full bg-accent text-white grid place-items-center text-[11px] font-bold">3</span>
          <span className="text-[11px] font-semibold">credits</span>
        </div>
      </div>
      {/* search */}
      <div className="px-5">
        <div className="rounded-xl bg-surface-1 border border-border px-3 py-2.5 text-[12px] text-ink-600">
          Search by role or area…
        </div>
      </div>
      {/* chips */}
      <div className="px-5 mt-3 flex gap-2 overflow-hidden">
        {["Nanny", "Housekeeper", "Cook", "Driver"].map((c, i) => (
          <span
            key={c}
            className={`text-[11px] font-semibold rounded-full px-3 py-1.5 whitespace-nowrap ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-surface-1 border border-border text-ink-600"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* worker card locked */}
      <div className="mx-5 mt-4 rounded-2xl bg-surface-1 border border-border overflow-hidden shadow-soft">
        <div className="relative">
          <img
            src={heroNanny}
            alt=""
            className="w-full h-40 object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 left-2 inline-flex items-center gap-1 bg-accent-100 text-accent-foreground rounded-full pl-1 pr-2 py-0.5 text-[10px] font-bold">
            <BadgeCheck className="w-3 h-3 text-accent" fill="currentColor" />
            Verified
          </div>
          <button className="absolute top-2 right-2 bg-surface-1/90 rounded-full p-1.5">
            <Bookmark className="w-3.5 h-3.5 text-ink" />
          </button>
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-bold text-ink">Chidinma O.</p>
            <div className="flex items-center gap-0.5 text-[11px] font-semibold text-ink">
              <Star className="w-3 h-3 fill-accent text-accent" />
              4.8
              <span className="text-ink-600 font-normal">·12</span>
            </div>
          </div>
          <p className="text-[11px] text-ink-600 mt-0.5">Nanny · Lekki Phase 1 · 6 yrs</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-primary">₦60k–₦80k/mo</span>
            <span className="text-[10px] rounded-full bg-primary-100 text-primary px-2 py-0.5 font-semibold">Live-in</span>
          </div>
        </div>
      </div>

      {/* unlock bar */}
      <div className="mx-5 mt-3 rounded-xl bg-primary text-primary-foreground px-3 py-2.5 flex items-center justify-between text-[12px] font-semibold shadow-soft">
        <span className="inline-flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5" />
          Unlock full profile
        </span>
        <span className="inline-flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 text-[11px]">
          1 credit
        </span>
      </div>

      <div className="mt-auto h-14 bg-surface-1 border-t border-border grid grid-cols-5 items-center text-[9px] text-ink-600">
        {["Home", "Saved", "Interviews", "Wallet", "Profile"].map((t, i) => (
          <div key={t} className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-primary font-bold" : ""}`}>
            <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-primary" : "bg-transparent"}`} />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  const items = [
    { icon: BadgeCheck, label: "NIN identity check" },
    { icon: Users, label: "Guarantor confirmed" },
    { icon: FileCheck, label: "Documents reviewed" },
    { icon: MapPin, label: "Every visit logged" },
    { icon: Sparkles, label: "Selfie liveness match" },
  ];
  return (
    <section className="border-y border-border bg-primary-100/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
      n: "01",
      title: "Browse verified profiles for free",
      body:
        "Every worker on Abode has passed identity, guarantor and document checks. Filter by role, area and salary — verified is the default.",
    },
    {
      n: "02",
      title: "Unlock the full report with one credit",
      body:
        "1 credit unlocks the full verification report and contact details for a worker you like. Credits are ₦5,000 each and never expire.",
    },
    {
      n: "03",
      title: "Book the interview in-app",
      body:
        "Pick a time, share the address inside the app. Both parties' locations are logged for accountability — for their safety and yours.",
    },
    {
      n: "04",
      title: "Hire with a placement guarantee",
      body:
        "Rate the interview and confirm the hire. Start a placement and you're covered by our replacement guarantee window.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="How Abode works"
        title="Trust, from browse to hire."
        sub="A calm, four-step path — nothing hidden, nothing pushy. Pay only when you're ready to unlock."
      />
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-soft hover:shadow-lift transition-shadow"
          >
            <div className="flex items-start gap-5">
              <span className="shrink-0 w-12 h-12 rounded-2xl bg-primary-100 text-primary grid place-items-center font-bold">
                {s.n}
              </span>
              <div>
                <h3 className="text-xl font-bold text-ink tracking-tight">{s.title}</h3>
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
    { title: "Identity (NIN) verified", body: "Government NIN matched to legal name and date of birth." },
    { title: "Selfie liveness match", body: "Live selfie confirmed against the NIN photo, dated on record." },
    { title: "Guarantor on record", body: "Guarantor named, contacted and confirmed by our team." },
    { title: "Documents reviewed", body: "Supporting documents checked and stored with review dates." },
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
            Four checks. One <span className="text-accent">amber seal</span>.
          </h2>
          <p className="mt-5 text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
            The amber verified badge is earned, not decorative. Every profile is
            reviewed by a real human on our team before it goes live.
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
              <p className="text-xs uppercase tracking-wider text-ink-600 font-semibold">Verification Report</p>
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
              <span className="font-semibold">Honest by design.</span> Self-reported details
              (like years of experience) are labelled — only checks completed by our team wear the verified tick.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const cats = [
    { title: "Nannies", body: "Warm, background-checked caregivers for children of every age.", img: heroNanny },
    { title: "Housekeepers", body: "Trained, reliable help for daily and weekly home care.", img: housekeeperImg },
    { title: "Cooks", body: "Home cooks who know Nigerian kitchens and family taste.", img: cookImg },
    { title: "Gatemen & Drivers", body: "Professional gatemen and drivers for compound and family life.", img: gatemanImg },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Who you can hire"
        title="Every role in the Nigerian home."
        sub="Launching with nannies in Lekki — expanding across Lagos and the full five categories."
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
            <div className="mt-4 rounded-2xl overflow-hidden border border-border bg-surface aspect-[16/9] relative">
              <div className="absolute inset-0 grain opacity-60" />
              <svg viewBox="0 0 400 220" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDE5D8" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="220" fill="url(#grid)" />
                <path d="M40 180 Q140 60 220 120 T380 40" stroke="#147A5C" strokeWidth="2.5" fill="none" strokeDasharray="4 6" />
                <circle cx="40" cy="180" r="8" fill="#2E6FB0" />
                <circle cx="40" cy="180" r="14" fill="#2E6FB0" opacity="0.2" />
                <circle cx="380" cy="40" r="8" fill="#0B3D2E" />
                <circle cx="380" cy="40" r="14" fill="#0B3D2E" opacity="0.2" />
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
            When you book an interview, the address is shared inside the app and
            both parties' locations are logged. Not surveillance — protection.
            For you, and for the person coming to your home.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Addresses shared only after an interview is accepted",
              "Both parties consent before a visit is logged",
              "48-hour response window with automatic credit refund",
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
    { name: "Starter", credits: 1, price: "₦5,000", note: "Try one unlock", popular: false },
    { name: "Most popular", credits: 5, price: "₦20,000", note: "Save ₦5,000", popular: true },
    { name: "Best value", credits: 10, price: "₦35,000", note: "Save ₦15,000", popular: false },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Simple, fair pricing"
        title="Browse free. Pay only to unlock."
        sub="1 credit unlocks one full verification report and contact details. Credits never expire."
      />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {packs.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-7 border shadow-soft flex flex-col ${
              p.popular
                ? "bg-primary text-primary-foreground border-primary shadow-lift"
                : "bg-surface-1 border-border text-ink"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-accent text-primary rounded-full px-3 py-1 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Most popular
              </span>
            )}
            <p className={`text-sm font-semibold ${p.popular ? "text-accent" : "text-ink-600"}`}>
              {p.name}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">{p.credits}</span>
              <span className={`text-sm font-medium ${p.popular ? "text-primary-foreground/80" : "text-ink-600"}`}>
                credit{p.credits > 1 ? "s" : ""}
              </span>
            </div>
            <p className="mt-1 text-2xl font-bold">{p.price}</p>
            <p className={`mt-1 text-sm ${p.popular ? "text-primary-foreground/70" : "text-ink-600"}`}>
              {p.note}
            </p>
            <ul className={`mt-6 space-y-2.5 text-sm flex-1 ${p.popular ? "text-primary-foreground/90" : "text-ink"}`}>
              <li className="flex gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-accent" : "text-primary-600"}`} />
                Full verification report
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-accent" : "text-primary-600"}`} />
                Direct contact & WhatsApp
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-accent" : "text-primary-600"}`} />
                In-app interview booking
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-accent" : "text-primary-600"}`} />
                48h refund if no response
              </li>
            </ul>
            <a
              href="#waitlist"
              className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                p.popular
                  ? "bg-accent text-primary hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary-600"
              }`}
            >
              Get {p.credits} credit{p.credits > 1 ? "s" : ""}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-ink-600 inline-flex items-center gap-2 w-full justify-center">
        <Wallet className="w-4 h-4" /> Credits never expire · Pay with Paystack
      </p>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "When are you launching on the app on various app stores?",
      a: "We are currently in the validation phase and we are working hard to launch the app as soon as possible. We will keep you updated on the launch date.",
    },
    {
      q: "How does Abode verify workers?",
      a: "Every worker completes an NIN identity check, a live selfie match, a guarantor call by our team, and a document review. A real human on our team signs off before the amber verified badge appears.",
    },
    {
      q: "What if the worker doesn't respond to my interview request?",
      a: "If a worker doesn't accept within 48 hours, your credit is automatically refunded to your wallet. Unlocks are atomic — you never pay for a profile we can't deliver.",
    },
    {
      q: "Is location logging safe? What data is stored?",
      a: "Location logging protects both sides. We record that a visit took place, at what address, and roughly when — never continuous tracking. Both parties consent before an interview is confirmed.",
    },
    {
      q: "Where is Abode available?",
      a: "We're launching in Lekki, Lagos, then expanding across Lagos and the other states like Abuja and other states where applicable. The expansion is subject to the availability of the service in the area and the willingness of the workers to be verified and listed on the platform.",
    },
    {
      q: "How much does it cost to try?",
      a: "Browsing is free. One credit costs ₦5,000 and unlocks one full profile — with savings on 5 and 10-credit packs. Credits never expire. Note this pricing is still in review as we are still in the validation phase",
    }
  ];
  return (
    <section className="bg-primary-100/50">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          eyebrow="Common questions"
          title="What people ask before signing up."
          sub=""
          align="center"
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-surface-1 border border-border p-5 open:shadow-soft transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-semibold text-ink">{f.q}</span>
                <span className="w-8 h-8 rounded-full bg-primary-100 text-primary grid place-items-center text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SURVEY ---------------- */
function Survey() {
  const roles = [
    {
      icon: Home,
      title: "I'm hiring for my home",
      body: "Tell us how you hire help today and what would make you trust an app to do it.",
      tone: "bg-primary-100 text-primary",
    },
    {
      icon: Briefcase,
      title: "I'm looking for work",
      body: "Share how you find jobs now and what verification would mean for you.",
      tone: "bg-warmth-100 text-warmth",
    },
    {
      icon: Users,
      title: "I'm an agent",
      body: "Help us shape how agents add workers and earn on every unlock.",
      tone: "bg-accent-100 text-accent-foreground",
    },
  ];
  return (
    <section id="survey" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Help us build it right"
        title="Take our 3-minute survey."
        sub="We're in validation. Your answers directly shape what we build first — pick the one that sounds like you."
        align="center"
      />
      <div className="mt-14 grid sm:grid-cols-3 gap-5">
        {roles.map((r) => (
          <a
            key={r.title}
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-surface-1 border border-border p-7 shadow-soft hover:shadow-lift hover:border-primary/40 transition-all flex flex-col"
          >
            <span className={`w-12 h-12 rounded-2xl grid place-items-center ${r.tone}`}>
              <r.icon className="w-6 h-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink tracking-tight">{r.title}</h3>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">{r.body}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
              Take the survey
              <ExternalLink className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-ink-600 inline-flex items-center gap-2 w-full justify-center">
        <ClipboardList className="w-4 h-4" /> Anonymous · takes about 3 minutes · shapes our Lekki pilot
      </p>
    </section>
  );
}

/* ---------------- WAITLIST ---------------- */
function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      if (!WAITLIST_ACCESS_KEY) {
        // No key configured yet — don't pretend it was captured.
        throw new Error("waitlist-not-configured");
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WAITLIST_ACCESS_KEY,
          subject: "New Abode waitlist signup",
          from_name: "Abode waitlist",
          email: value,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "submit-failed");
      setStatus("done");
      toast.success("You're on the list! We'll email you when Abode goes live.");
      setEmail("");
    } catch (err) {
      setStatus("idle");
      if (err instanceof Error && err.message === "waitlist-not-configured") {
        toast.error("Waitlist isn't connected yet. Add VITE_WEB3FORMS_ACCESS_KEY to go live.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-[36px] bg-primary text-primary-foreground p-10 lg:p-16 shadow-lift">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-warmth/20 rounded-full blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <h2 className="font-display font-extrabold tracking-tight text-[36px] leading-[1.05] sm:text-5xl lg:text-6xl">
              Everyone verified.<br />
              <span className="text-accent">Everyone protected.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
              Be the first to know when Abode launches in your area. No spam —
              just one email when we're live.
            </p>
          </div>

          {status === "done" ? (
            <div className="rounded-2xl bg-surface p-6 text-ink flex items-center gap-4">
              <span className="w-12 h-12 shrink-0 rounded-full bg-primary-100 grid place-items-center">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </span>
              <div>
                <p className="font-bold text-ink">You're on the list 🎉</p>
                <p className="text-sm text-ink-600 mt-0.5">
                  We'll email you the moment Abode is live in your area.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="relative rounded-2xl bg-surface p-2.5 flex flex-col sm:flex-row gap-2 text-ink shadow-soft"
              onSubmit={onSubmit}
            >
              <div className="flex-1 flex items-center gap-2 px-3">
                <Mail className="w-4 h-4 text-ink-300 shrink-0" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent py-3 outline-none placeholder:text-ink-300 text-ink"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold hover:bg-primary-600 transition-colors disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining…
                  </>
                ) : (
                  <>
                    Join waitlist
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={abodeIcon} alt="Abode" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-bold text-primary">Abode</span>
          </div>
          <p className="mt-3 text-sm text-ink-600 max-w-xs leading-relaxed">
            Your home. Trusted hands. Verified domestic staffing for Nigerian
            families, starting in Lekki, Lagos.
          </p>
        </div>
        <FooterCol
          title="Product"
          links={[
            { label: "How it works", href: "#how" },
            { label: "Verification", href: "#verification" },
            { label: "Safety", href: "#safety" },
            { label: "Pricing", href: "#pricing" },
          ]}
        />
        <FooterCol
          title="Get involved"
          links={[
            { label: "Join the waitlist", href: "#waitlist" },
            { label: "Take the survey", href: SURVEY_URL, external: true },
            { label: "For workers", href: SURVEY_URL, external: true },
            { label: "For agents", href: SURVEY_URL, external: true },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "Email us", href: "mailto:hello@abode.ng" },
            { label: "Call support", href: "tel:+2349153120110" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-600">
          <p>© {new Date().getFullYear()} Abode. Built in Lagos.</p>
          <p className="inline-flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" /> Support: +234 9153120110
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="text-sm font-bold text-ink">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-ink-600">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary px-3 py-1.5 text-xs font-semibold tracking-wide">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display font-extrabold tracking-tight text-primary text-[34px] leading-[1.1] sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-ink-600 text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}
