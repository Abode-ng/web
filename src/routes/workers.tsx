import { createFileRoute } from "@tanstack/react-router";
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
  Camera,
  IdCard,
  PhoneCall,
} from "lucide-react";
import { SiteNav, SiteFooter, Survey, Waitlist, SectionHeader, SURVEY_URL } from "@/components/site";
import workerImg from "@/assets/housekeeper.jpg";

export const Route = createFileRoute("/workers")({
  component: WorkersPage,
});

function WorkersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav active="workers" />
      <Hero />
      <Benefits />
      <HowItWorks />
      <SafetyForWorkers />
      <Survey />
      <Waitlist
        role="workers"
        title={
          <>
            Verified once.<br />
            <span className="text-accent">Hired again and again.</span>
          </>
        }
        sub="Join the waitlist and we'll tell you the moment worker sign-ups open in your area. It's free to join."
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
            Get verified.<br />
            <span className="text-warmth">Get hired.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
            Abode helps trusted nannies, cooks, housekeepers, drivers and gatemen
            get real work. Verify once — your identity, guarantor and reputation
            travel with you, so families choose you with confidence.
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
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-600">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-accent" /> Free verification</span>
            <span className="inline-flex items-center gap-2"><CalendarCheck className="w-5 h-5 text-primary-600" /> Interviews come to you</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-5 h-5 text-info" /> Safe, logged visits</span>
          </div>
        </div>
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-6 -z-10 bg-warmth-100 rounded-[48px] blur-2xl opacity-70" />
          <div className="rounded-[32px] overflow-hidden border border-border shadow-lift max-w-sm">
            <img src={workerImg} alt="A verified worker" className="w-full h-[440px] object-cover" />
          </div>
          <div className="absolute -left-4 sm:-left-8 top-10 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-surface-1 px-3.5 py-2 text-xs font-semibold text-primary shadow-lift">
            <BadgeCheck className="w-4 h-4 text-accent" />
            Verified badge
          </div>
          <div className="absolute -right-2 sm:-right-6 bottom-16 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-100 px-3.5 py-2 text-xs font-semibold text-primary shadow-lift">
            <Star className="w-4 h-4 text-accent fill-accent" />
            ★ 4.8 · portable
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: BadgeCheck, title: "Verified workers stand out", body: "The amber badge tells families you're identity-checked and guarantor-confirmed. You skip the suspicion and get straight to the interview." },
    { icon: CalendarCheck, title: "Interviews come to you", body: "Verified homeowners send interview requests in-app. You see the role, area and offer, and accept only what works for you." },
    { icon: Star, title: "A reputation that travels", body: "Every confirmed placement and rating becomes a credential on your profile — proof you carry to your next job, forever." },
    { icon: MapPin, title: "Safe, logged visits", body: "Addresses are only shared after you accept, and every visit is on record — for your safety, not surveillance." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
      <SectionHeader
        eyebrow="Why workers choose Abode"
        title="Built to get you trusted work."
        sub="Being verified once opens doors again and again — and your good name stays with you."
      />
      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl bg-surface-1 border border-border p-7 shadow-soft">
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
    { icon: UserCheck, n: "01", title: "Claim or create your profile", body: "Sign up with your phone, or claim the profile an agent started for you. No CV, no fees." },
    { icon: Camera, n: "02", title: "Take a live selfie", body: "A quick liveness check confirms it's really you — and becomes your public photo. This stops anyone impersonating you." },
    { icon: IdCard, n: "03", title: "Verify your NIN", body: "Enter your National Identity Number for an instant identity check. Stored masked and safe." },
    { icon: PhoneCall, n: "04", title: "Add a guarantor", body: "Give us someone who vouches for you. Our team calls them within 2 days, and you go live." },
  ];
  return (
    <section id="how" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader
          onDark
          eyebrow="Getting verified"
          title={<>Four simple steps to <span className="text-accent">verified</span>.</>}
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
        <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <ShieldCheck className="w-4 h-4 text-accent" />
          Only identity, guarantor, documents and placements are marked “verified” — your self-reported details are always labelled honestly.
        </div>
      </div>
    </section>
  );
}

function SafetyForWorkers() {
  return (
    <section id="safety" className="mx-auto max-w-6xl px-5 lg:px-8 py-24 lg:py-32">
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
            You should never have to meet a stranger blind. On Abode, the address
            is only shared after you accept, both sides are on record, and support
            is one tap away.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "You choose which interviews to accept — decline anything that doesn't fit",
              "Full address revealed only after you accept",
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
        <div className="rounded-3xl bg-warmth-100/60 border border-border p-8 lg:p-10">
          <div className="rounded-2xl bg-surface-1 border border-border p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-primary-100 grid place-items-center">
                <BadgeCheck className="w-6 h-6 text-primary" />
              </span>
              <div>
                <p className="font-bold text-ink">You're verified & live</p>
                <p className="text-sm text-ink-600">Homeowners can find you in search</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {["Identity (NIN) verified", "Selfie match confirmed", "Guarantor confirmed"].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
