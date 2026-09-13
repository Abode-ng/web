import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function FamilyKnowMore() {
  return (
    <Section id="trust" inner="max-w-[1150px]">
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-6 lg:w-[506px]">
          <Eyebrow>KNOW WHO YOU&rsquo;RE HIRING</Eyebrow>
          <h2 className="font-display text-ink-1 text-[28px] leading-[34px] font-bold tracking-[-0.025em] sm:text-[38px] sm:leading-[44px] lg:text-[50px] lg:leading-[54px]">
            Know more before you hire.
          </h2>
          <p className="text-body-lg text-ink-2">
            Get a clearer picture of who you&rsquo;re hiring with verified
            details about their experience, skills, and work history.
          </p>
        </div>

        <div className="bg-primary-1 relative h-[420px] w-full overflow-hidden rounded-3xl lg:h-[600px] lg:w-[500px]">
          {/* The phone runs past the bottom of the panel, as composed. */}
          <div className="absolute top-[85px] left-1/2 h-[805px] w-[280px] -translate-x-1/2 overflow-hidden lg:w-[360px]">
            <Image
              src="/images/family-app-mockup.png"
              alt="The Abode Family app showing a verified worker profile"
              fill
              sizes="360px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
