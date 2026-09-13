import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Pack = {
  credits: string;
  badge: string;
  price: string;
  blurb: string;
  cta: string;
  includes: string[];
  featured?: boolean;
};

const PACKS: Pack[] = [
  {
    credits: "10 credits",
    badge: "STARTER",
    price: "₦1,000",
    blurb: "Good for trying Abode",
    cta: "Get 10 Credits",
    includes: [
      "Credits for future use",
      "No expiry",
      "Use credits to post jobs",
    ],
  },
  {
    credits: "50 credits",
    badge: "MOST POPULAR",
    price: "₦5,000",
    blurb: "Enough for one job post",
    cta: "Get 50 Credits",
    includes: [
      "Post 1 job",
      "Review applicants for free",
      "Chat & interview for free",
    ],
    featured: true,
  },
  {
    credits: "100 credits",
    badge: "VALUE",
    price: "₦10,000",
    blurb: "For households hiring more often",
    cta: "Get 100 Credits",
    includes: [
      "Post up to 2 jobs",
      "Chat & interview for free",
      "No hiring commission",
    ],
  },
];

function PackCard({ pack }: { pack: Pack }) {
  const dark = pack.featured;

  return (
    <article
      className={cn(
        "flex flex-col items-center gap-9 rounded-3xl p-10 shadow-[0_12px_24px_0_rgb(0_0_0_/_0.15)] lg:w-[411px]",
        dark ? "bg-primary-1" : "bg-surface-2",
      )}
    >
      <header className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full flex-col-reverse items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p
            className={cn(
              "font-display text-h5",
              dark ? "text-surface-2" : "text-ink-2",
            )}
          >
            {pack.credits}
          </p>
          <div
            className={cn(
              "flex items-center justify-center rounded-xl px-4 py-3",
              dark ? "bg-accent-2/10" : "bg-ink-3/30",
            )}
          >
            <p
              className={cn(
                "font-display text-h5 text-center whitespace-nowrap",
                dark ? "text-accent-2" : "text-ink-2",
              )}
            >
              {pack.badge}
            </p>
          </div>
        </div>
        <p
          className={cn(
            "font-display text-h2",
            dark ? "text-surface-1" : "text-ink-1",
          )}
        >
          {pack.price}
        </p>
        <p
          className={cn("text-body-lg", dark ? "text-surface-2" : "text-ink-2")}
        >
          {pack.blurb}
        </p>
      </header>

      <ButtonLink
        href="#pricing"
        variant={dark ? "light" : "primary"}
        className="w-full"
      >
        {pack.cta}
      </ButtonLink>

      <hr className="border-ink-3 w-full border-t" />

      <div className="flex w-full flex-col items-start gap-6">
        <p
          className={cn("text-body-lg", dark ? "text-surface-1" : "text-ink-2")}
        >
          What&rsquo;s included:
        </p>
        <div className="flex w-full flex-col gap-3">
          {pack.includes.map((item) => (
            <div
              key={item}
              className="flex w-full items-center justify-between gap-4"
            >
              <p
                className={cn(
                  "text-body-lg flex-1",
                  dark ? "text-surface-2" : "text-ink-1",
                )}
              >
                {item}
              </p>
              <Icon
                name={dark ? "check-circle-light" : "check-circle"}
                size={24}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function FamilyPricing() {
  return (
    <Section id="pricing" className="flex flex-col items-center gap-20">
      <SectionHeading
        label="SIMPLE, FAIR PRICING"
        title={<>Pay for what you need, Nothing more.</>}
        description="Post a job with credits, review verified applicants, chat, and hire without commission or hidden placement fees."
        inner="max-w-[676px]"
      />

      <div className="flex w-full flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-0">
        {PACKS.map((pack) => (
          <PackCard key={pack.credits} pack={pack} />
        ))}
      </div>
    </Section>
  );
}
