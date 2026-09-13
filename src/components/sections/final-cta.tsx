import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import type { NavItem } from "@/components/site-header";

type FinalCtaProps = {
  label: string;
  title: string;
  description?: string;
  primary: NavItem;
  secondary: NavItem;
};

export function FinalCta({
  label,
  title,
  description,
  primary,
  secondary,
}: FinalCtaProps) {
  return (
    <Section id="contact">
      <div className="bg-primary-1 relative overflow-hidden rounded-3xl px-[38px] py-10 lg:rounded-[48px] lg:px-20 lg:py-20">
        {/* Texture plate: rotated and knocked back to 4%, exactly as composed in the design. */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 flex h-[1280px] w-[1918px] -translate-x-1/2 -translate-y-1/2 items-center justify-center mix-blend-screen"
          aria-hidden
        >
          <div className="rotate-90">
            <div className="relative h-[1918px] w-[1280px] opacity-[0.04]">
              <Image
                src="/images/cta-texture.jpg"
                alt=""
                fill
                sizes="1280px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[780px] flex-col items-center gap-6 lg:gap-6">
          <div className="bg-surface-1/10 inline-flex items-center justify-center gap-2 rounded-[34px] px-2.5 py-[5px]">
            <span className="bg-surface-2 size-1.5 shrink-0 rounded-full" />
            <span className="text-label text-surface-2 whitespace-nowrap">
              {label}
            </span>
          </div>
          <h2 className="font-display text-surface-1 text-h3 text-center sm:text-[44px] sm:leading-[50px] sm:font-extrabold sm:tracking-[-0.03em] lg:text-[56px] lg:leading-[60px]">
            {title}
          </h2>
          {description && (
            <p className="text-body-lg text-surface-2 text-center">
              {description}
            </p>
          )}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:mt-14 lg:w-[600px]">
            <ButtonLink
              href={primary.href}
              variant="accent"
              arrowClassName="size-4 lg:size-6"
              className="text-button-sm lg:text-button h-10 w-full sm:flex-1 lg:h-[68px]"
            >
              {primary.label}
            </ButtonLink>
            <ButtonLink
              href={secondary.href}
              variant="outlineLight"
              className="text-button-sm lg:text-button h-11 w-full sm:flex-1 lg:h-[68px]"
            >
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
