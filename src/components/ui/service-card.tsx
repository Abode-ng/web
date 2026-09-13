import Image from "next/image";

import { StarRow } from "@/components/ui/rating-pill";
import { cn } from "@/lib/utils";

/** Floating service card used in both hero compositions. */
export function ServiceCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-surface-2 shadow-float flex w-[297px] items-center gap-5 rounded-2xl p-5",
        className,
      )}
    >
      <div className="relative h-[120px] w-20 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src="/images/cleaning-service.jpg"
          alt="Standard home cleaning"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="flex h-[120px] w-[157px] flex-col justify-between">
        <div>
          <p className="text-body-lg text-ink-1">Cleaning Service</p>
          <p className="text-caption text-ink-2">Standard home cleaning</p>
        </div>
        <div className="flex items-center gap-2">
          <StarRow gap={4} />
          <span className="text-body text-ink-1">4.9</span>
        </div>
        <span className="bg-primary-1 text-caption text-surface-2 self-start rounded-[60px] px-5 py-[5px]">
          Book now
        </span>
      </div>
    </div>
  );
}
