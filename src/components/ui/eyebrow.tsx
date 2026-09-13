import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type EyebrowTone = "brand" | "families" | "workers" | "agencies";

const TONES: Record<EyebrowTone, string> = {
  brand: "bg-primary-2/10 text-primary-2",
  families: "bg-primary-3 text-primary-1",
  workers: "bg-terracotta-2 text-terracotta-1",
  agencies: "bg-accent-2 text-accent-1",
};

/** Small label pill above a heading, or the audience tag on a card. */
export function Eyebrow({
  children,
  tone = "brand",
  icon,
  className,
}: {
  children: React.ReactNode;
  tone?: EyebrowTone;
  /** Icon file name; omit for the brand pill, which uses a dot. */
  icon?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[34px] px-2.5 py-[5px]",
        TONES[tone],
        className,
      )}
    >
      {icon ? (
        <Icon name={icon} size={16} />
      ) : (
        <span className="bg-primary-2 size-1.5 shrink-0 rounded-full" />
      )}
      <span className="text-label whitespace-nowrap">{children}</span>
    </div>
  );
}
