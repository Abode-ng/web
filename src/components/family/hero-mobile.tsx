import Image from "next/image";

import {
  MobileServiceCard,
  MobileWorkerCard,
} from "@/components/sections/hero-mobile";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/** Single trust card — the mobile design replaces the desktop three-card stack with this. */
function IdentityCard() {
  return (
    <div className="bg-surface-2 shadow-float absolute top-[86px] left-[199px] w-[143px] rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <Icon name="verified-24" size={16} />
        <div className="flex w-[79px] flex-col gap-1">
          <p className="text-ink-1 text-[10px] leading-[14px]">
            Identity verified
          </p>
          <p className="text-ink-2 text-[8px] leading-[10px]">
            ID &amp; background checks completed
          </p>
        </div>
      </div>
    </div>
  );
}

/** 342 x 470 composition, positioned as in the 390px Abode Family design. */
export function FamilyHeroCompositionMobile({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative mx-auto h-[470px] w-[342px]", className)}>
      {/* The photo sits under the cards. */}
      <div className="absolute top-[130px] left-8 h-[240px] w-[280px] overflow-hidden rounded-3xl">
        <div className="absolute top-0 left-1/2 h-[312px] w-[356px] -translate-x-1/2">
          <Image
            src="/images/family-hero.png"
            alt="A family at home with an Abode worker"
            fill
            priority
            sizes="356px"
            className="object-cover"
          />
        </div>
      </div>

      <MobileWorkerCard
        name="Mary E."
        role="Maths Tutor"
        photo="/images/worker-mary.jpg"
        className="top-0 left-0"
      />
      <IdentityCard />
      <MobileServiceCard className="top-[326px] left-0" />
    </div>
  );
}
