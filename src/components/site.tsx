import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowRight,
  Mail,
  Loader2,
  CheckCircle2,
  Home,
  Briefcase,
  Users,
  ClipboardList,
  ExternalLink,
  Phone,
} from "lucide-react";
import abodeIcon from "@/assets/abode-icon.png";

export type SiteRole = "homeowner" | "workers" | "agents";

// Google Form survey (shared across all three roles — the form asks which one).
export const SURVEY_URL = "https://forms.gle/babLTMxWtB66mfqSA";
// Web3Forms access key for the email waitlist. Free key at https://web3forms.com —
// it emails signups straight to your inbox. Set in web/.env:
//   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
const WAITLIST_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

/* ---------------- NAV (role switcher) ---------------- */
const ROLE_TABS: { key: SiteRole; label: string; to: string }[] = [
  { key: "homeowner", label: "For homeowners", to: "/" },
  { key: "workers", label: "For workers", to: "/workers" },
  { key: "agents", label: "For agents", to: "/agents" },
];

export function SiteNav({ active }: { active: SiteRole }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={abodeIcon} alt="Abode" className="h-9 w-9 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-primary">Abode</span>
        </Link>

        {/* segmented role switcher */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-surface-1 border border-border p-1">
          {ROLE_TABS.map((t) => (
            <Link
              key={t.key}
              to={t.to}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                active === t.key
                  ? "bg-primary text-primary-foreground"
                  : "text-ink-600 hover:text-primary"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary-600 transition-colors shrink-0"
        >
          Join the waitlist
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      {/* mobile switcher */}
      <div className="md:hidden border-t border-border">
        <div className="mx-auto max-w-6xl px-5 flex items-center gap-1 py-2 overflow-x-auto">
          {ROLE_TABS.map((t) => (
            <Link
              key={t.key}
              to={t.to}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                active === t.key
                  ? "bg-primary text-primary-foreground"
                  : "text-ink-600 bg-surface-1 border border-border"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------------- SECTION HEADER ---------------- */
export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  onDark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide ${
          onDark ? "bg-white/10 text-primary-foreground" : "bg-primary-100 text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display font-extrabold tracking-tight text-[34px] leading-[1.1] sm:text-5xl ${
          onDark ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-primary-foreground/80" : "text-ink-600"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ---------------- SURVEY ---------------- */
export function Survey() {
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
export function Waitlist({
  role = "homeowner",
  title,
  sub,
}: {
  role?: SiteRole;
  title?: React.ReactNode;
  sub?: string;
}) {
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
      if (!WAITLIST_ACCESS_KEY) throw new Error("waitlist-not-configured");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WAITLIST_ACCESS_KEY,
          subject: `New Abode waitlist signup (${role})`,
          from_name: "Abode waitlist",
          email: value,
          role,
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
              {title ?? (
                <>
                  Everyone verified.<br />
                  <span className="text-accent">Everyone protected.</span>
                </>
              )}
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
              {sub ?? "Be the first to know when Abode launches in your area. No spam — just one email when we're live."}
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

/* ---------------- FAQ (reusable) ---------------- */
export function FAQ({
  items,
  title = "What people ask before signing up.",
  eyebrow = "Common questions",
  sub = "",
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
  sub?: string;
}) {
  return (
    <section id="faq" className="bg-primary-100/50">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 py-24 lg:py-32">
        <SectionHeader eyebrow={eyebrow} title={title} sub={sub} align="center" />
        <div className="mt-12 space-y-3">
          {items.map((f) => (
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

/* ---------------- FOOTER ---------------- */
export function SiteFooter() {
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
          title="For homeowners"
          links={[
            { label: "How it works", href: "/#how" },
            { label: "Verification", href: "/#verification" },
            { label: "Safety", href: "/#safety" },
            { label: "Pricing", href: "/#pricing" },
          ]}
        />
        <FooterCol
          title="Join Abode"
          links={[
            { label: "For workers", href: "/workers" },
            { label: "For agents", href: "/agents" },
            { label: "Join the waitlist", href: "#waitlist" },
            { label: "Take the survey", href: SURVEY_URL, external: true },
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
