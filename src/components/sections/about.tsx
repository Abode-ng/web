import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
        <div className="flex w-full flex-col items-start gap-6 lg:w-[543px]">
          <Eyebrow>WHY ABODE EXISTS</Eyebrow>
          <h2 className="font-display text-ink-1 text-h5 font-semibold sm:text-[28px] sm:leading-[34px] sm:font-bold sm:tracking-[-0.025em] lg:text-[50px] lg:leading-[54px]">
            Domestic work deserves better infrastructure.
          </h2>
          <div className="text-body-sm lg:text-body-lg flex flex-col gap-8">
            <p className="text-ink-2">
              Domestic work is one of the most important yet least structured
              parts of everyday life. Millions of households depend on domestic
              workers, while millions of workers depend on this industry for
              their livelihoods. Yet much of the ecosystem still operates on
              informal processes and limited information.
            </p>
            <div className="text-ink-1 flex flex-col">
              <p>Abode is building technology to change that.</p>
              <p>
                We believe trust should not depend solely on word of mouth. It
                should be supported by identity, records, reputation, better
                systems, and transparency.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[560px] w-full overflow-hidden rounded-3xl lg:h-[720px] lg:w-[628px]">
          <Image
            src="/images/about.png"
            alt="An Abode worker and a family at home"
            fill
            sizes="(max-width: 1024px) 100vw, 628px"
            className="object-cover object-[50%_41%]"
          />
        </div>
      </div>
    </Section>
  );
}
