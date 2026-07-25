import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  BadgeCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  CalendarCheck,
  Star,
  HeartHandshake,
  ScanFace,
  IdCard,
  PhoneCall,
  Gauge,
  History,
  Building2,
  Smartphone,
  Wallet,
  Inbox,
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
import workerImg from "@/assets/housekeeper.jpg";

const WORKERS_DESCRIPTION =
  "Are you a nanny, cook, housekeeper, driver, gateman or caregiver? Get verified free on Abode and build a professional identity you own — verified NIN, employment history, employer reviews and a trust score that follows you for life.";

export const Route = createFileRoute("/workers")({
  component: WorkersPage,
  head: () => ({
    meta: [
      { title: "Abode for workers — Get verified. Get hired." },
      { name: "description", content: WORKERS_DESCRIPTION },
      { property: "og:title", content: "Abode — Get verified. Get hired." },
      { property: "og:description", content: WORKERS_DESCRIPTION },
      { name: "twitter:description", content: WORKERS_DESCRIPTION },
    ],
  }),
});

function WorkersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav active="workers" />
      <Hero />
      <Benefits />
      <HowItWorks />
      <TwoWaysToJoin />
      <TrustScoreSection />
      <ApplyingSection />
      <SafetyForWorkers />
      <Survey />
      <FAQ items={WORKER_FAQS} title="Questions workers ask." />
      <Waitlist
        role="workers"
        title={
          <>
            Verified once.
            <br />
            <span className="text-accent">Hired again and again.</span>
          </>
        }
        sub="Join the waitlist and we'll tell you the moment worker sign-ups open in your area. Verification is free."
      />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-warmth-100 text-warmth px-3 py-1.5 text-xs font-semibold tracking-wide">
            <HeartHandshake className="w-3.5 h-3.5" />
            Free to join · Lekki, Lagos
          </span>
          <h1 className="mt-6 font-display font-extrabold tracking-tight text-primary text-[42px] leading-[1.05] sm:text-6xl lg:text-[64px] lg:leading-[1.03]">
            Get verified.
            <br />
            <span className="text-warmth">Get hired.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
            Abode gives you something Nigerian domestic work has never had: a professional identity
            you own. Verify once — your identity, guarantor, employment history and reviews travel
            with you, job after job, for the rest of your career.
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
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-1 px-5 py-3.5 text-[15px] font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
            >
              Take the worker survey
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-600">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-accent" /> Free verification
            </span>
            <span className="inline-flex items-center gap-2">
              <Inbox className="w-5 h-5 text-primary-600" /> Jobs matched to you
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-5 h-5 text-info" /> Safe, logged visits
            </span>
          </div>
        </div>
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-6 -z-10 bg-warmth-100 rounded-[48px] blur-2xl opacity-70" />
          <div className="rounded-[32px] overflow-hidden border border-border shadow-lift max-w-sm">
            <img
              src={workerImg}
              alt="A verified worker"
              className="w-full h-[440px] object-cover"
            />
          </div>
          <div className="absolute -left-4 sm:-left-8 top-10 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-surface-1 px-3.5 py-2 text-xs font-semibold text-primary shadow-lift">
            <BadgeCheck className="w-4 h-4 text-accent" />
            Verified badge
          </div>
          <div className="absolute -right-2 sm:-right-6 bottom-16 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-100 px-3.5 py-2 text-xs font-semibold text-primary shadow-lift">
            <Gauge className="w-4 h-4 text-accent" />
            Trust score 86
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: BadgeCheck,
      title: "Verified workers stand out",
      body: "The amber badge tells families you're identity-checked, face-verified and guarantor-confirmed. You skip the suspicion and get straight to the interview.",
    },
    {
      icon: History,
      title: "A record that proves itself",
      body: "Every placement becomes a permanent entry in your employment history — real, verifiable proof of the work you've done and how long you stayed.",
    },
    {
      icon: Star,
      title: "A reputation you own",
      body: "Your identity, reviews and trust score are attached to your profile, not to an employer or an agency. Change jobs and it all comes with you.",
    },
    {
      icon: Inbox,
      title: "Work comes to you",
      body: "Families post jobs and Abode matches them to you by role, area, salary and whether you want live-in. No more starting from zero every time.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Why workers choose Abode"
        title="Built to get you trusted work."
        sub="Being verified once opens doors again and again — and your good name finally stays with you."
      />
      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft"
          >
            <span className="w-12 h-12 rounded-2xl bg-primary-100 text-primary grid place-items-center">
              <it.icon className="w-6 h-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-ink tracking-tight">{it.title}</h3>
            <p className="mt-2 text-ink-600 leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      n: "01",
      title: "Start your profile",
      body: "Sign up with your phone number, or claim the profile an agency started for you. No CV needed, and nothing to pay.",
    },
    {
      icon: IdCard,
      n: "02",
      title: "Verify your NIN",
      body: "Enter your National Identity Number for an identity check. It's stored masked and kept safe — we never show it to anyone.",
    },
    {
      icon: ScanFace,
      n: "03",
      title: "Do a face check",
      body: "A quick live face check proves you're a real person and matches you to your NIN identity. This is what stops anyone impersonating you.",
    },
    {
      icon: PhoneCall,
      n: "04",
      title: "Add a guarantor",
      body: "Give us someone who vouches for you. A real person on our team calls them, then your profile goes live.",
    },
  ];
  return (
    <section id="how" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          onDark
          eyebrow="Getting verified"
          title={
            <>
              Four simple steps to <span className="text-accent">verified</span>.
            </>
          }
          sub="It's free, and most workers finish in one sitting. Our team reviews every profile within 1–3 days."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-surface p-6 text-ink shadow-lift">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-2xl bg-primary-100 text-primary grid place-items-center">
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
          <ShieldCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <span>
            Only identity, guarantor, documents and placements are marked “verified” — your
            self-reported details are always labelled honestly, never faked into a tick.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TWO WAYS TO JOIN ---------------- */
function TwoWaysToJoin() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Two ways in"
        title="You don't need a smartphone to be on Abode."
        sub="Join directly if you have a phone you can use — or let a registered agency onboard you on their device while you're there with them."
      />
      <div className="mt-14 grid lg:grid-cols-2 gap-5">
        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-soft">
          <span className="w-12 h-12 rounded-2xl bg-primary-100 text-primary grid place-items-center">
            <Smartphone className="w-6 h-6" />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary-600">
            Option 01
          </p>
          <h3 className="mt-1 text-xl font-bold text-ink tracking-tight">Join Abode directly</h3>
          <p className="mt-2 text-ink-600 leading-relaxed">
            Sign up with your phone number, get verified, and browse jobs matched to you. You apply
            yourself and manage your own interview requests.
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              "Your own account, in your own hands",
              "See every matching job as it's posted",
              "Accept or decline interviews yourself",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-soft">
          <span className="w-12 h-12 rounded-2xl bg-accent-100 text-accent-foreground grid place-items-center">
            <Building2 className="w-6 h-6" />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-accent-foreground/70">
            Option 02
          </p>
          <h3 className="mt-1 text-xl font-bold text-ink tracking-tight">
            Through a registered agency
          </h3>
          <p className="mt-2 text-ink-600 leading-relaxed">
            An agency invites you by phone, and you complete verification on their device while
            you're with them. They put you forward for jobs — but the profile is still yours.
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              "No smartphone needed",
              "The agency represents you for jobs",
              "Your identity, history and score stay yours",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-primary-100/70 border border-primary/20 p-5 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <p className="text-sm text-ink leading-relaxed">
          <span className="font-semibold">Either way, Abode verifies you — not the agency.</span> We
          run the NIN check, face check and guarantor call ourselves, so no agency can approve or
          block your verification, and no agency can take your record away from you.{" "}
          <Link to="/agencies" className="font-semibold text-primary hover:text-primary-600">
            How agencies work →
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ---------------- TRUST SCORE ---------------- */
function TrustScoreSection() {
  const grow = [
    {
      icon: IdCard,
      title: "Get fully verified",
      body: "NIN verified, face verified and a confirmed guarantor — the foundation of your score.",
    },
    {
      icon: History,
      title: "Complete jobs and stay",
      body: "Finishing placements and staying longer both count. Being rehired by the same family counts most.",
    },
    {
      icon: Star,
      title: "Earn good reviews",
      body: "Employer ratings and positive reviews lift your score; complaints bring it down.",
    },
    {
      icon: UserCheck,
      title: "Be complete and responsive",
      body: "A full profile and replying to requests quickly show families you're professional.",
    },
  ];
  return (
    <section id="trust-score" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          onDark
          eyebrow="Trust Score"
          title={
            <>
              Your score is <span className="text-accent">yours to grow</span>.
            </>
          }
          sub="Abode gives every worker a trust score built from real signals — and because it's rules-based, not a secret AI number, you can always see exactly how to raise it."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {grow.map((g) => (
            <div key={g.title} className="rounded-3xl bg-surface p-6 text-ink shadow-lift">
              <span className="w-11 h-11 rounded-2xl bg-primary-100 text-primary grid place-items-center">
                <g.icon className="w-5 h-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink tracking-tight">{g.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 inline-flex items-start gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <Gauge className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <span>
            <span className="font-semibold">Brand new? You're not penalised.</span> A newly verified
            worker with no history shows as “New · Verified” — never a zero score or an empty star
            rating.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPLYING ---------------- */
function ApplyingSection() {
  const tiers = [
    ["Up to ₦60,000", "2 credits", "₦200"],
    ["₦60,000 – ₦100,000", "3 credits", "₦300"],
    ["₦100,000 – ₦150,000", "5 credits", "₦500"],
    ["₦150,000 – ₦250,000", "8 credits", "₦800"],
    ["Above ₦250,000", "12 credits", "₦1,200"],
  ];
  return (
    <section id="applying" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-foreground px-3 py-1.5 text-xs font-semibold">
            <Wallet className="w-3.5 h-3.5" />
            Applying to jobs
          </span>
          <h2 className="mt-5 font-display font-extrabold tracking-tight text-primary text-[34px] leading-[1.1] sm:text-5xl">
            Free to join. Small cost to apply.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-lg">
            Getting verified and having a profile costs nothing, ever. When you find a job you want,
            you spend a few credits to apply — and because you paid, the family reviews your
            application for free and takes it seriously.
          </p>
          <ul className="mt-7 space-y-3.5">
            {[
              { icon: BadgeCheck, t: "Verification and your profile are always free" },
              { icon: Wallet, t: "1 credit = ₦100 · buy 10 credits for ₦1,000" },
              {
                icon: CalendarCheck,
                t: "If you applied, accepting an interview costs nothing extra",
              },
              {
                icon: ShieldCheck,
                t: "Every job was paid for by a real family — no fake listings, no time wasted",
              },
            ].map((r) => (
              <li key={r.t} className="flex items-start gap-3 text-ink">
                <r.icon className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                {r.t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface-1 border border-border p-7 lg:p-8 shadow-lift">
          <p className="text-xs font-bold uppercase tracking-wider text-ink-600">
            What it costs to apply
          </p>
          <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
            The cost depends on the salary the family is offering — better-paying jobs cost a little
            more to apply for.
          </p>
          <div className="mt-6 space-y-2.5">
            {tiers.map(([range, credits, naira]) => (
              <div
                key={range}
                className="flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
              >
                <span className="text-sm font-medium text-ink">{range}</span>
                <span className="shrink-0 text-right">
                  <span className="block text-sm font-bold text-primary">{credits}</span>
                  <span className="block text-[11px] text-ink-600">{naira}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-primary-100/70 border border-primary/20 p-3.5 text-sm text-ink flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold">Why it costs anything.</span> Families pay ₦5,000 to
              post a job, so every listing you see is real and funded. Credits are spent when you
              apply — so pick the jobs that genuinely fit you, and your application lands in a short
              list a family actually reads.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyForWorkers() {
  return (
    <section id="safety" className="bg-warmth-100/50 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF1F9] text-info px-3 py-1.5 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Your safety, first
            </span>
            <h2 className="mt-5 font-display font-extrabold tracking-tight text-primary text-[34px] leading-[1.1] sm:text-5xl">
              Every visit is on record — for you.
            </h2>
            <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-lg">
              You should never have to meet a stranger blind. On Abode, the address is only shared
              after you accept, both sides are on record, and support is one tap away.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "You choose which interviews to accept — decline anything that doesn't fit",
                "Full address revealed only after you accept",
                "Your phone number stays private until you choose to share it",
                "Every visit is logged for both parties",
                "Report and get help from any screen",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-surface-1 border border-border p-8 lg:p-10 shadow-lift">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-primary-100 grid place-items-center">
                <BadgeCheck className="w-6 h-6 text-primary" />
              </span>
              <div>
                <p className="font-bold text-ink">You're verified &amp; live</p>
                <p className="text-sm text-ink-600">Matching jobs will come to you</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 border-t border-border pt-6">
              {[
                "Identity (NIN) verified",
                "Face check confirmed",
                "Guarantor confirmed",
                "Profile complete",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl bg-primary-100/70 px-4 py-3">
              <span className="text-sm font-semibold text-ink">Trust Score</span>
              <span className="font-display text-2xl font-extrabold text-primary leading-none">
                86
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WORKER_FAQS = [
  {
    q: "Does it cost anything to join and get verified?",
    a: "No. Creating your profile, your NIN check, your face check and your guarantor call are all completely free. The only thing you ever pay for is applying to a job — a few credits, depending on the salary being offered.",
  },
  {
    q: "Why do I have to pay to apply?",
    a: "Because it keeps applications serious on both sides. Since you paid to apply, the family reviews your application for free and actually looks at it — you're not one of 200 random messages. And because the family paid ₦5,000 to post the job, you know every listing is real. Credits start at ₦100 each and applications cost 2–12 credits depending on the salary offered, so choose the jobs that genuinely fit you.",
  },
  {
    q: "What do I need to get verified?",
    a: "Your NIN, a quick live face check, and a guarantor (their name and phone). Our team calls your guarantor, then you go live. Most people finish in one sitting, and we review every profile within 1–3 days.",
  },
  {
    q: "I don't have a smartphone. Can I still join?",
    a: "Yes. A registered agency can invite you and you complete verification on their device while you're there with them. The agency then puts you forward for jobs on your behalf — you don't need to use an app to get work.",
  },
  {
    q: "An agency added me. Is my profile theirs?",
    a: "No — the profile is yours. The agency manages you operationally and submits you for jobs, but your verified identity, employment history, employer reviews and trust score are attached to your own Abode profile. If you leave that agency, all of it goes with you.",
  },
  {
    q: "Will homeowners see my address or phone before I accept?",
    a: "No. Your contact details stay protected. Families reach you through the app, and the interview address is only shared with you after you accept a request.",
  },
  {
    q: "How do I get work on Abode?",
    a: "Families post jobs, and Abode matches them to you by role, area, salary expectation and whether you want live-in or live-out. You'll see matching jobs and can apply to the ones you want — and families can also invite you directly if you fit what they posted.",
  },
  {
    q: "What is the trust score and how do I raise it?",
    a: "It's a score built from four things you control: verified identity, employment history (jobs completed, how long you stayed, being rehired), reputation (employer ratings and complaints) and professionalism (complete profile, confirmed guarantor, replying quickly). It's rules-based, so nothing about it is hidden from you. If you're brand new, you show as “New · Verified” — never a zero.",
  },
  {
    q: "What if I don't want more work right now?",
    a: "Switch yourself to “Not available” any time and you stop being matched to new jobs. Turn it back on whenever you're ready for more requests.",
  },
];
