import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

/** Page gutter is 80px at 1440; `inner` matches the content width of each Figma section. */
export function Section({
  id,
  inner = "max-w-[1280px]",
  className,
  children,
}: {
  id?: string;
  inner?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1440px] px-6 lg:px-20">
      <div className={cn("mx-auto w-full", inner, className)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  inner = "max-w-[810px]",
  className,
}: {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  inner?: string;
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4 lg:gap-6",
        inner,
        centered ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Eyebrow>{label}</Eyebrow>
      <h2 className="font-display text-ink-1 text-h5 font-semibold sm:text-[28px] sm:leading-[34px] sm:font-bold sm:tracking-[-0.025em] lg:text-[50px] lg:leading-[54px]">
        {title}
      </h2>
      {description && (
        <p className="text-body-sm text-ink-2 lg:text-body-lg">{description}</p>
      )}
    </div>
  );
}
