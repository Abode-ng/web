import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";

/** Full-bleed gradient band — the only section that runs edge to edge. */
export function AgencyPartner() {
  return (
    <section
      id="growth"
      className="w-full px-6 py-12 lg:px-[100px] lg:py-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(118.43deg, #0b3d2e 0.4%, #1da37b 122.32%)",
      }}
    >
      <div className="mx-auto flex max-w-[1236px] flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-start gap-10 lg:w-[516px] lg:gap-[84px]">
          <div className="flex w-full flex-col items-start gap-6">
            <div className="bg-surface-1/10 inline-flex items-center justify-center gap-2 rounded-[34px] px-2.5 py-[5px]">
              <span className="bg-surface-2 size-1.5 shrink-0 rounded-full" />
              <span className="text-label text-surface-2 whitespace-nowrap">
                MORE THAN A SYSTEM
              </span>
            </div>
            <h2 className="font-display text-surface-1 text-h3 sm:text-[44px] sm:leading-[50px] sm:font-extrabold sm:tracking-[-0.03em] lg:text-[56px] lg:leading-[60px]">
              A partner in your growth
            </h2>
            <p className="text-body-sm text-surface-2 lg:text-body-lg">
              Abode Agency OS is designed to help you save time, reduce manual
              work, and build stronger relationships - with your workers,
              clients, and your team.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-[407px]">
            <ButtonLink href="#contact" variant="accent" className="w-full">
              Join the Agency Network
            </ButtonLink>
            <ButtonLink
              href="#features"
              variant="outlineLight"
              className="w-full"
            >
              Explore Agency OS
            </ButtonLink>
          </div>
        </div>

        <div className="relative h-[450px] w-full overflow-hidden rounded-3xl lg:h-[680px] lg:w-[640px]">
          <Image
            src="/images/agency-partner.png"
            alt="An Abode agency team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
