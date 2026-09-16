import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AgencyHero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 lg:px-20">
      <div className="mx-auto flex max-w-[790px] flex-col items-center gap-6 pt-12 text-center lg:gap-12">
        <Eyebrow tone="agencies" icon="agencies" className="bg-surface-1">
          FOR RECRUITMENT AGENCIES
        </Eyebrow>

        <div className="flex w-full flex-col gap-4 lg:gap-6">
          <h1 className="font-display text-primary-1 text-h3 font-extrabold sm:text-[50px] sm:leading-[54px] sm:tracking-[-0.035em] lg:text-[68px] lg:leading-[72px]">
            The operating system for modern{" "}
            <span className="text-accent-1">domestic worker agencies.</span>
          </h1>
          <p className="text-body-sm text-ink-2 lg:text-body-lg">
            Manage your workers, records, verification, recruitment, and client
            relationships from one connected platform.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
          <ButtonLink href="#contact" className="w-full sm:w-auto">
            Join the Agency Network
          </ButtonLink>
          <ButtonLink
            href="#platform"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Explore Agency OS
          </ButtonLink>
        </div>
      </div>

      <div className="shadow-card relative mx-auto mt-12 aspect-[1280/910] w-full overflow-hidden rounded-3xl lg:mt-[120px] lg:rounded-[36px]">
        <Image
          src="/images/agency-dashboard.png"
          alt="The Abode Agency OS dashboard"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1280px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
