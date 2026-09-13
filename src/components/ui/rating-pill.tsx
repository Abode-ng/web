import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/** Amber star + score. Amber is reserved for ratings, verification and credits. */
export function RatingPill({
  score,
  className,
}: {
  score: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface-1 inline-flex items-center justify-center gap-2 rounded-[34px] px-2.5 py-[5px]",
        className,
      )}
    >
      <Icon name="star" size={16} />
      <span className="text-label text-ink-1">{score}</span>
    </div>
  );
}

/** Star row used on worker and service cards. */
export function StarRow({
  gap = 4,
  className,
}: {
  gap?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center", className)}
      style={{ gap }}
      aria-label="Rated 4.9 out of 5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={16} />
      ))}
    </div>
  );
}
