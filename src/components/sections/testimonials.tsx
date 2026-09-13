import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";

/** The design specifies one testimonial; the nav control is shown but inert until there are more. */
const TESTIMONIALS = [
  {
    quote:
      "“Finding someone to work in your home requires more than a recommendation. Having relevant information about a worker makes the decision feel much more informed and reassuring.”",
    name: "Amaka O.",
    location: "Lagos",
    audience: "FAMILIES",
    photo: "/images/testimonial-amaka.jpg",
  },
];

export function Testimonials() {
  const [testimonial] = TESTIMONIALS;
  // const single = TESTIMONIALS.length < 2; // used by the commented-out carousel control

  return (
    <Section id="testimonials" className="flex flex-col items-center gap-20">
      <SectionHeading
        label="TRUSTED BY THE PEOPLE WE SERVE"
        title={<>Better experiences start with trust.</>}
        description="From households to workers and agencies, Abode is building a better way for everyone to participate in domestic work."
      />

      <div className="bg-primary-3 flex w-full flex-col items-center overflow-hidden rounded-[44px] p-8 lg:rounded-[44px] lg:p-20">
        <figure className="flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-[72px]">
          <div className="flex w-full items-start gap-6 lg:gap-12">
            <Icon name="quote" size={64} className="hidden lg:block" />
            <Icon name="quote" size={40} className="lg:hidden" />
            <blockquote className="text-body-lg text-ink-1 flex-1">
              {testimonial.quote}
            </blockquote>
          </div>

          <hr className="border-ink-3 w-full max-w-[900px] border-t" />

          <figcaption className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-6">
              <div className="relative size-[72px] shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="font-display flex flex-col gap-0.5">
                  <p className="text-h5 text-ink-1">{testimonial.name}</p>
                  <p className="text-h6 text-ink-2">{testimonial.location}</p>
                </div>
                <Eyebrow tone="families" icon="families">
                  {testimonial.audience}
                </Eyebrow>
              </div>
            </div>

            {/*
              Carousel control from the design — commented out while there is a single
              testimonial. Restore this block (and the `single` flag above) once
              TESTIMONIALS holds more than one entry; cycling will need client state.

              <div className="border-ink-3 flex items-center gap-2 rounded-2xl border border-solid p-2.5">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  disabled={single}
                  className="flex size-12 items-center justify-center disabled:opacity-40"
                >
                  <Icon name="chevron-nav" size={48} className="rotate-90" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  disabled={single}
                  className="flex size-12 items-center justify-center disabled:opacity-40"
                >
                  <Icon name="chevron-nav" size={48} className="-rotate-90" />
                </button>
              </div>
            */}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
