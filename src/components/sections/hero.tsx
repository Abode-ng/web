import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { RatingPill } from "@/components/ui/rating-pill";
import { HeroCompositionMobile } from "@/components/sections/hero-mobile";
import { ServiceCard } from "@/components/ui/service-card";
import { WorkerCard } from "@/components/ui/worker-card";
import { cn } from "@/lib/utils";

function StatCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-surface-1 shadow-float flex w-[303px] flex-col gap-4 rounded-2xl p-6",
        className,
      )}
    >
      <p className="text-label text-ink-2">UP TO</p>
      <p className="font-display text-h1 text-ink-1">20X</p>
      <p className="text-body text-ink-2">
        better domestic workers with verified information.
      </p>
    </div>
  );
}

function VerifiedCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-surface-2 shadow-float flex w-[282px] flex-col gap-4 rounded-2xl p-6",
        className,
      )}
    >
      <div className="flex w-full items-center gap-4">
        <Icon name="verified-24" size={24} />
        <p className="text-body-lg text-ink-1">Identity verified</p>
      </div>
      <hr className="border-ink-3 w-[230px] border-t" />
      <div className="flex w-full items-center gap-4">
        <Icon name="verified-24" size={24} />
        <p className="text-body-lg text-ink-1">Background checked</p>
      </div>
    </div>
  );
}

function HeroPhoto({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[846/440] w-full overflow-hidden rounded-3xl",
        className,
      )}
    >
      {/* The photo is placed oversized inside its frame, matching the crop in the design. */}
      <Image
        src="/images/hero-family.png"
        alt="An Abode worker with a family at home in Lagos"
        fill
        priority
        sizes="(max-width: 1280px) 100vw, 846px"
        className="scale-[1.098] object-cover object-[50%_38%]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 lg:px-20">
      <div className="flex flex-col items-center gap-6 pt-12 text-center lg:gap-12">
        <div className="flex items-center justify-center gap-3">
          <RatingPill
            score="4.9"
            className="lg:[&_span]:text-caption [&_span]:text-[10px] [&_span]:tracking-[0.08em]"
          />
          <p className="text-ink-2 lg:text-label text-[10px] leading-4 font-semibold tracking-[0.08em]">
            Trusted by families, workers, &amp; agencies
          </p>
        </div>

        <div className="flex w-full max-w-[705px] flex-col gap-4 lg:gap-6">
          <h1 className="font-display text-primary-1 text-h3 font-extrabold sm:text-[50px] sm:leading-[54px] sm:tracking-[-0.035em] lg:text-[68px] lg:leading-[72px]">
            Building a more trusted future for{" "}
            <span className="text-accent-1">domestic work.</span>
          </h1>
          <p className="text-body-sm text-ink-2 lg:text-body-lg">
            Abode is building the infrastructure that helps households, domestic
            workers, and recruitment agencies work with greater trust, safety,
            and professionalism.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
          <ButtonLink href="/family" className="w-full sm:w-auto">
            Explore Abode Family
          </ButtonLink>
          <ButtonLink
            href="#products"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Our Products
          </ButtonLink>
        </div>
      </div>

      {/* Desktop composition — cards float over the photo exactly as positioned in the design. */}
      <div className="relative mx-auto mt-12 hidden h-[594px] w-[1280px] lg:block">
        <HeroPhoto className="absolute top-20 left-[217px] h-[440px] w-[846px]" />
        <ServiceCard className="absolute top-0 left-[983px]" />
        <WorkerCard
          name="Edward T."
          role="Plumber"
          location="Lagos, Nigeria"
          photo="/images/worker-edward.jpg"
          className="absolute top-[130px] left-0"
        />
        <StatCard className="absolute top-[368px] left-[931px]" />
        <VerifiedCard className="absolute top-[450px] left-[43px]" />
      </div>

      {/* The 390px design has its own composition, not a stacked desktop one. */}
      <HeroCompositionMobile className="mt-12 lg:hidden" />
    </section>
  );
}
