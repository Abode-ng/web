import Image from "next/image";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/** The mobile hero cards are drawn at their own smaller scale, not shrunk desktop ones. */

export function Stars({ size = 10, gap = 2 }: { size?: number; gap?: number }) {
  return (
    <div
      className="flex items-center"
      style={{ gap }}
      aria-label="Rated 4.9 out of 5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </div>
  );
}

type MobileWorkerCardProps = {
  name?: string;
  role?: string;
  photo?: string;
  className?: string;
};

export function MobileWorkerCard({
  name = "Edward T.",
  role = "Driver",
  photo = "/images/worker-edward.jpg",
  className,
}: MobileWorkerCardProps) {
  return (
    <div
      className={cn(
        "bg-surface-2 shadow-card absolute flex w-[183px] flex-col gap-4 overflow-hidden rounded-2xl p-4",
        className,
      )}
    >
      <div className="flex w-full items-center gap-2">
        <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <div className="flex w-[69px] flex-col gap-1">
          <div>
            <p className="text-body-sm text-ink-1">{name}</p>
            <p className="text-ink-2 text-[10px] leading-normal">{role}</p>
          </div>
          <div className="flex w-full items-center gap-1">
            <Icon name="location" size={10} />
            <p className="text-ink-1 flex-1 text-[8px] leading-normal">
              Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <span className="text-caption text-ink-1">4.9</span>
        <Stars />
        <span className="text-ink-2 text-[10px] leading-normal">
          (128 reviews)
        </span>
      </div>

      {/* The design hides the Verified tag at this size. */}
      <div className="flex items-center gap-1">
        {["4+ Years Experience", "Full-Time"].map((tag) => (
          <span
            key={tag}
            className="bg-primary-3 text-primary-1 rounded-[50px] px-2.5 py-[5px] text-[8px] leading-[10px] whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function VerifiedCard() {
  return (
    <div className="bg-surface-2 shadow-float absolute top-[44px] left-[223px] flex w-[119px] flex-col gap-2 rounded-2xl p-4">
      <div className="flex w-full items-center gap-4">
        <Icon name="verified-24" size={16} />
        <p className="text-ink-1 flex-1 text-[10px] leading-normal">
          Identity verified
        </p>
      </div>
      <hr className="border-ink-3 w-full border-t" />
      <div className="flex w-full items-center gap-4">
        <Icon name="check-badge" className="h-[14px] w-[14.667px]" />
        <p className="text-ink-1 flex-1 text-[10px] leading-normal">
          Background checked
        </p>
      </div>
    </div>
  );
}

function StatCard() {
  return (
    <div className="bg-surface-1 shadow-float absolute top-[284px] left-[232px] flex w-[110px] flex-col gap-1 rounded-2xl p-6">
      <p className="text-label text-ink-2">UP TO</p>
      <p className="font-display text-h4 text-ink-1">20X</p>
      <p className="text-ink-2 text-[8px] leading-normal">
        better domestic workers with verified information.
      </p>
    </div>
  );
}

export function MobileServiceCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-surface-2 shadow-float absolute flex items-center gap-5 rounded-2xl p-4",
        className,
      )}
    >
      <div className="relative h-[112px] w-20 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src="/images/cleaning-service.jpg"
          alt="Standard home cleaning"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="flex h-[112px] w-[83px] flex-col justify-between gap-2">
        <div>
          <p className="text-ink-1 text-[14px] leading-normal">
            Cleaning Service
          </p>
          <p className="text-ink-2 text-[10px] leading-normal">
            Standard home cleaning
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Stars />
          <span className="text-caption text-ink-1">4.9</span>
        </div>
        <span className="bg-primary-1 text-surface-2 self-start rounded-[60px] px-2.5 py-1 text-[10px] leading-normal">
          Book now
        </span>
      </div>
    </div>
  );
}

/** 342 x 463 composition, positioned exactly as in the 390px design. */
export function HeroCompositionMobile({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto h-[463px] w-[342px]", className)}>
      {/* The photo sits under the cards, as in the design. */}
      <div className="absolute top-[115px] left-8 h-[240px] w-[280px] overflow-hidden rounded-3xl">
        <div className="aspect-[886/776] w-full">
          <Image
            src="/images/hero-family.png"
            alt="An Abode worker with a family at home in Lagos"
            width={280}
            height={245}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <MobileWorkerCard className="top-0 left-0" />
      <VerifiedCard />
      <StatCard />
      <MobileServiceCard className="top-[319px] left-0" />
    </div>
  );
}
