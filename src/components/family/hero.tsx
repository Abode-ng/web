import Image from "next/image";

import { FamilyHeroCompositionMobile } from "@/components/family/hero-mobile";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { ServiceCard } from "@/components/ui/service-card";
import { WorkerCard } from "@/components/ui/worker-card";
import { cn } from "@/lib/utils";

const TRUST_POINTS = [
  {
    icon: "verified-36",
    title: "Identity verified",
    body: "ID & background checks completed",
  },
  {
    icon: "briefcase",
    title: "Employment History",
    body: "Previous work experience & reference",
  },
  {
    icon: "trust-36",
    title: "Trusted & Rated",
    body: "Rated by families like yours",
  },
];

function TrustStack({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-[400px] flex-col gap-3", className)}>
      {TRUST_POINTS.map((point) => (
        <div
          key={point.title}
          className="bg-surface-2 shadow-float w-full rounded-2xl p-6"
        >
          <div className="flex w-full items-center gap-4">
            <Icon name={point.icon} size={36} />
            <div className="flex flex-1 flex-col justify-center gap-1">
              <p className="font-display text-h5 text-ink-1">{point.title}</p>
              <p className="text-body text-ink-2">{point.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroPhoto({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[780/440] w-full overflow-hidden rounded-3xl",
        className,
      )}
    >
      {/* The photo runs taller than its frame and is anchored to the top, as composed. */}
      <div className="absolute top-0 left-0 h-[155.2%] w-full">
        <Image
          src="/images/family-hero.png"
          alt="A family at home with an Abode worker"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 780px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function FamilyHero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 lg:px-20">
      <div className="mx-auto flex max-w-[790px] flex-col items-center gap-6 pt-12 text-center lg:gap-12">
        <Eyebrow tone="families" icon="families">
          FOR HOUSEHOLDS
        </Eyebrow>

        <div className="flex w-full flex-col gap-4 lg:gap-6">
          <h1 className="font-display text-primary-1 text-[34px] leading-[40px] font-extrabold tracking-[-0.035em] sm:text-[50px] sm:leading-[54px] lg:text-[68px] lg:leading-[72px]">
            A better way to find{" "}
            <span className="text-accent-1">trusted domestic workers.</span>
          </h1>
          <p className="text-body-sm text-ink-2 lg:text-body-lg">
            Discover domestic workers with verified identities, relevant
            experience, and information that helps you make more informed hiring
            decisions.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
          <ButtonLink href="#pricing" className="w-full sm:w-auto">
            Find a Worker
          </ButtonLink>
          <ButtonLink
            href="#how-it-works"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            How It Works
          </ButtonLink>
        </div>
      </div>

      {/* Desktop composition — positions match the design exactly. */}
      <div className="relative mx-auto mt-12 hidden h-[699px] w-[1280px] lg:block">
        <HeroPhoto className="absolute top-20 left-[250px] h-[440px] w-[780px]" />
        <ServiceCard className="absolute top-0 left-[983px]" />
        <WorkerCard
          name="Mary E."
          role="Nanny"
          location="Lagos, Nigeria"
          photo="/images/worker-mary.jpg"
          className="absolute top-[130px] left-0"
        />
        <TrustStack className="absolute top-[357px] left-[835px]" />
      </div>

      {/* The 390px design has its own composition. */}
      <FamilyHeroCompositionMobile className="mt-12 lg:hidden" />
    </section>
  );
}
