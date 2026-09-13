/* eslint-disable @next/next/no-img-element -- icons are static local SVGs; next/image cannot optimize SVG */
import { cn } from "@/lib/utils";

type IconProps = {
  /** File name in /public/icons, without the .svg extension. */
  name: string;
  /** Designed size in px. Omit to let the parent box size the glyph. */
  size?: number;
  className?: string;
};

/** Renders an SVG exported from Figma at its designed size. */
export function Icon({ name, size, className }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      style={size ? { width: size, height: size } : undefined}
      className={cn("shrink-0", className)}
    />
  );
}
