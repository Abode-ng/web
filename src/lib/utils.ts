import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The design system's font sizes are named tokens (`text-h2`, `text-body-lg`),
 * which tailwind-merge would otherwise mistake for colours — dropping the size
 * whenever a size and a colour class are merged together. Register them here.
 */
const FONT_SIZES = [
  "display-1",
  "display-2",
  "display-3",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body-lg",
  "body",
  "body-sm",
  "caption",
  "label",
  "nav",
  "button",
  "button-sm",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: FONT_SIZES }],
    },
  },
});

/** Merge conditional class names, resolving conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
