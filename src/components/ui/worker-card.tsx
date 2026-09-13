import Image from "next/image";

import { Icon } from "@/components/ui/icon";
import { StarRow } from "@/components/ui/rating-pill";
import { cn } from "@/lib/utils";

const TAGS = ["4+ Years Experience", "Full-Time"];

type WorkerCardProps = {
  name: string;
  role: string;
  location: string;
  photo: string;
  className?: string;
};

/** Floating worker card used in both hero compositions. */
export function WorkerCard({
  name,
  role,
  location,
  photo,
  className,
}: WorkerCardProps) {
  return (
    <div
      className={cn(
        "bg-surface-2 shadow-float flex w-[355px] flex-col gap-4 rounded-2xl p-6",
        className,
      )}
    >
      <div className="flex items-start gap-6">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="flex w-[98px] flex-col gap-2">
          <div>
            <p className="text-body-lg text-ink-1">{name}</p>
            <p className="text-caption text-ink-2">{role}</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="location" size={16} />
            <p className="text-caption text-ink-1">{location}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <span className="text-body text-ink-1">4.9</span>
        <StarRow gap={8} />
        <span className="text-caption text-ink-2">(128 reviews)</span>
      </div>

      <div className="flex w-full items-center gap-3">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="bg-primary-3 text-caption text-primary-1 rounded-[50px] px-2.5 py-[5px] whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
        <span className="bg-primary-3 text-caption text-primary-1 flex items-center gap-1 rounded-[50px] px-2.5 py-[5px]">
          Verified
          <Icon name="verified-12" size={12} />
        </span>
      </div>
    </div>
  );
}
