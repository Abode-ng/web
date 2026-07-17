import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Wallet,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  UserPlus,
  Repeat,
  ShieldCheck,
  Banknote,
} from "lucide-react";
import { SiteNav, SiteFooter, Survey, Waitlist, SectionHeader, FAQ, SURVEY_URL } from "@/components/site";

const AGENTS_DESCRIPTION =
  "Connect domestic workers to families and earn 30–40% of every unlock on their profile — for life, not a one-time fee. Abode handles verification; you get paid to your bank every month.";

export const Route = createFileRoute("/agents")({
  component: AgentsPage,
  head: () => ({
    meta: [
      { title: "Abode for agents — Add workers. Earn for life." },
      { name: "description", content: AGENTS_DESCRIPTION },
      { property: "og:title", content: "Abode — Add workers. Earn for life." },
      { property: "og:description", content: AGENTS_DESCRIPTION },
      { name: "twitter:description", content: AGENTS_DESCRIPTION },
    ],
  }),
});

const AGENT_FAQS = [
  {
    q: "How much do I earn, and for how long?",
    a: "You earn 30–40% of every unlock on workers you added — for life, not a one-time finder's fee. As long as they're on Abode, you keep earning each time they're unlocked.",
  },
  {
    q: "When and how do I get paid?",
    a: "Earnings accrue per unlock in your dashboard and are paid to your bank account on the 1st of every month.",
  },
  {
    q: "Do I have to verify the workers myself?",
    a: "No. You just add their name, phone and role. Our team runs the NIN check, selfie match, guarantor call and document review before they go live.",
  },
  {
    q: "What if a worker I added signs up on their own later?",
    a: "The referral is matched by phone number and locked to you once they claim their profile — it can't be reassigned to anyone else.",
  },
  {
    q: "How long do workers have to claim their invite?",
    a: "Unclaimed invites expire after 14 days. After that the pre-created profile is removed and you can re-invite them.",
  },
  {
    q: "Do I need to be verified to add workers?",
    a: "Yes. Agents complete a quick NIN check first — it protects the families and workers you connect, and earns you the Verified Agent badge.",
  },
];

function AgentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav active="agents" />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Survey />
      <FAQ items={AGENT_FAQS} title="Questions agents ask." />
      <Waitlist
        role="agents"
        title={
          <>
            Build your roster.<br />
            <span className="text-accent">Earn on it for life.</span>
          </>
        }
        sub="Join the waitlist and we'll invite you the moment agent accounts open. Get in early and start adding workers."
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
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-foreground px-3 py-1.5 text-xs font-semibold tracking-wide">
            <TrendingUp className="w-3.5 h-3.5" />
            Earn 30–40% on every unlock
          </span>
          <h1 className="mt-6 font-display font-extrabold tracking-tight text-primary text-[42px] leading-[1.05] sm:text-6xl lg:text-[64px] lg:leading-[1.03]">
            Add workers.<br />
            <span className="text-warmth">Earn for life.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
            If you connect domestic workers to families, Abode turns that into
            steady income. Add a worker once — and earn a share of every single
            unlock on their profile, for as long as they're on the platform.
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
              Take the agent survey
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-600">
            <span className="inline-flex items-center gap-2"><Repeat className="w-5 h-5 text-primary-600" /> Earn for life</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-accent" /> We verify them</span>
            <span className="inline-flex items-center gap-2"><Banknote className="w-5 h-5 text-info" /> Monthly payouts</span>
          </div>
        </div>

        {/* earnings mock */}
        <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 bg-accent-100 rounded-[48px] blur-2xl opacity-70" />
          <div className="rounded-[28px] bg-primary text-primary-foreground p-6 shadow-lift">
            <p className="text-sm text-primary-foreground/70">Earnings this month</p>
            <p className="mt-1 text-4xl font-extrabold text-accent">₦18,500</p>
            <p className="text-xs text-primary-foreground/60">You earn 30–40% on every unlock — for life.</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[["2", "live"], ["1", "pending"], ["1", "unclaimed"]].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-white/10 py-3">
                  <p className="text-lg font-extrabold">{n}</p>
                  <p className="text-[11px] text-primary-foreground/70">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {[["Chidinma O.", "+₦1,750"], ["Emeka U.", "+₦1,500"]].map(([name, amt]) => (
                <div key={name} className="flex items-center gap-3 rounded-xl bg-surface p-3 text-ink">
                  <span className="w-8 h-8 rounded-full bg-primary-100 grid place-items-center">
                    <TrendingUp className="w-4 h-4 text-success" />
                  </span>
                  <span className="flex-1 text-[13px]">
                    <span className="font-semibold">{name}</span> was unlocked
                  </span>
                  <span className="text-[13px] font-bold text-success">{amt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: TrendingUp, title: "Earn 30–40% per unlock", body: "Every time a homeowner unlocks a worker you added, you earn a share of the credit — automatically." },
    { icon: Repeat, title: "For life, not just once", body: "It's not a one-off finder's fee. You keep earning on every future unlock of that worker, for as long as they're on Abode." },
    { icon: ShieldCheck, title: "We handle verification", body: "You add the worker; our team runs the NIN, selfie, guarantor and document checks. No paperwork on your side." },
    { icon: Wallet, title: "Clean monthly payouts", body: "Track earnings per worker in your dashboard and get paid to your bank on the 1st of every month." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Why agents partner with Abode"
        title="Turn your network into income."
        sub="You already know good workers. Abode makes connecting them to families something you earn from — transparently, and for life."
      />
      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft">
            <span className="w-12 h-12 rounded-2xl bg-accent-100 text-accent-foreground grid place-items-center">
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
    { icon: BadgeCheck, n: "01", title: "Get verified as an agent", body: "Sign up and complete a quick NIN check. Agents are verified before adding workers — it protects everyone." },
    { icon: UserPlus, n: "02", title: "Add your workers", body: "Add each worker's name, phone and role. We send them an invite to claim their profile." },
    { icon: ShieldCheck, n: "03", title: "They claim & get verified", body: "The worker confirms their details and completes selfie, NIN and guarantor checks. Then they go live." },
    { icon: Wallet, n: "04", title: "Earn on every unlock", body: "Each unlock of your workers accrues your share. Withdraw to your bank every month." },
  ];
  return (
    <section id="how" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          onDark
          eyebrow="How it works for agents"
          title={<>From roster to <span className="text-accent">recurring income</span>.</>}
          sub="Four steps to start earning. The permanent referral link between you and your worker can never be reassigned."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
        <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <Users className="w-4 h-4 text-accent" />
          Unclaimed invites expire after 14 days — but once a worker claims, your referral is locked to you permanently.
        </div>
      </div>
    </section>
  );
}
