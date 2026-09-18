"use client";

import { useState } from "react";
import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/section";

/**
 * Each portrait is a 500px square anchored to the bottom of a pill-shaped frame.
 * On hover the pill widens into a card and a panel slides up over the lower part
 * of the photo — the photo itself does not move or rescale.
 *
 * Touch devices have no hover, so tapping a card toggles the same panel. That is
 * the only reason this is a client component.
 */
const TEAM = [
  {
    name: "Gboyega Temiloluwa",
    href: "https://temiloluwa-gboyega-profile.vercel.app/",
    role: "Technical Co-founder & CEO",
    bio: "Leads the company's overall vision, strategy, and product development. Responsible for key business and technical decisions, overseeing product development, and ensuring the team remains focused on solving the right problems.",
    src: "/images/team-1.png",
    ratio: "1 / 1",
  },
  {
    name: "Agboola Nathaniel",
    role: "Co-founder, Growth & Marketing Lead",
    bio: "Leads Abode's growth strategy and market presence. Responsible for shaping the brand, driving customer acquisition, building strategic partnerships, and developing marketing initiatives that expand Abode's reach and connect the product with the right families, workers, and agencies.",
    src: "/images/team-2.png",
    ratio: "375 / 500",
  },
  {
    name: "Onifade David",
    role: "Operations & Communication Lead",
    bio: "Keeps the team aligned on priorities and deliverables, tracks what each person is working on, and drives internal momentum. Leads Abode's external voice: pitching at conferences and competitions, and managing client engagement.",
    src: "/images/team-3.png",
    ratio: "1 / 1",
  },
  {
    name: "Alika David",
    href: "https://dribbble.com/davidalika",
    role: "Product Design Lead",
    bio: "Leads Abode's product design and user experience. Responsible for translating user needs and business goals into intuitive digital experiences, overseeing the design system, and ensuring the product remains clear, consistent, and aligned with Abode's vision.",
    src: "/images/team-4.png",
    ratio: "1 / 1",
  },
];

export function Team() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      id="team"
      inner="max-w-[1104px]"
      className="flex flex-col items-center gap-10 lg:gap-20"
    >
      <SectionHeading
        label="OUR PEOPLE"
        title={<>The people building Abode.</>}
      />

      <div className="flex w-full snap-x snap-mandatory items-stretch gap-12 overflow-x-auto pb-2 lg:h-[560px] lg:snap-none lg:overflow-visible lg:pb-0">
        {TEAM.map((member, index) => (
          <article
            key={member.name}
            role="button"
            tabIndex={0}
            aria-expanded={openIndex === index}
            aria-label={`${member.name}, ${member.role}`}
            data-open={openIndex === index ? "" : undefined}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }
            }}
            className="group bg-primary-3 relative h-[560px] w-[240px] shrink-0 cursor-pointer snap-center overflow-hidden rounded-[1000px] transition-all duration-500 ease-out outline-none data-open:rounded-3xl lg:h-full lg:w-auto lg:flex-1 lg:hover:flex-[1.8] lg:hover:rounded-3xl lg:focus-visible:flex-[1.8] lg:focus-visible:rounded-3xl"
          >
            {/* The photo keeps its size and position in both states. */}
            <div
              className="absolute bottom-0 left-1/2 aspect-[var(--ratio)] h-[89.28%] -translate-x-1/2"
              style={{ "--ratio": member.ratio } as React.CSSProperties}
            >
              <Image
                src={member.src}
                alt={member.name}
                fill
                sizes="(max-width: 1024px) 240px, 500px"
                className="object-cover"
              />
            </div>

            {/* Slides up over the bottom of the photo: hover on desktop, tap on touch. */}
            <div className="bg-primary-3 absolute inset-x-0 bottom-0 translate-y-full px-5 pt-4 pb-6 text-center transition-transform duration-500 ease-out group-data-open:translate-y-0 lg:group-hover:translate-y-0 lg:group-focus-visible:translate-y-0">
              <h3 className="font-display text-h5 text-primary-1">
                {member.href ? (
                  /*
                   * The card itself is the toggle, so the link has to stop the
                   * click bubbling — otherwise opening a profile also collapses
                   * the panel it was clicked from.
                   */
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="underline-offset-4 hover:underline"
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
              </h3>
              <p className="font-display text-h6 text-ink-1 mt-0.5">
                {member.role}
              </p>
              <p className="text-body-sm text-ink-2 mt-2">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
