import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "accent" | "outlineLight";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-primary-1 text-surface-2 hover:bg-primary-2",
  secondary: "border-ink-3 text-ink-1 hover:border-ink-2 border-2 border-solid",
  light: "bg-surface-1 text-ink-1 hover:bg-accent-2",
  accent: "bg-accent-1 text-primary-1 hover:bg-accent-2",
  outlineLight:
    "border-surface-2 text-surface-2 hover:bg-surface-2/10 border-2 border-solid",
};

/** The arrow glyph is exported per background, so it keeps its designed colour. */
const ARROWS: Record<Variant, string> = {
  primary: "arrow-up-right",
  secondary: "arrow-up-right-dark",
  light: "arrow-up-right-dark",
  accent: "arrow-up-right-dark",
  outlineLight: "arrow-up-right",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Primary and light buttons carry the arrow glyph by default. */
  withArrow?: boolean;
  /** Overrides the arrow size, e.g. "size-4 lg:size-6". */
  arrowClassName?: string;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow,
  arrowClassName,
  className,
}: ButtonLinkProps) {
  const showArrow =
    withArrow ?? !["secondary", "outlineLight"].includes(variant);

  return (
    <Link
      href={href}
      className={cn(
        "font-display text-button inline-flex h-[68px] items-center justify-center gap-2 rounded-[48px] px-10 py-5 whitespace-nowrap transition-colors",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
      {showArrow &&
        (arrowClassName ? (
          <Icon name={ARROWS[variant]} className={arrowClassName} />
        ) : (
          <Icon name={ARROWS[variant]} size={24} />
        ))}
    </Link>
  );
}
