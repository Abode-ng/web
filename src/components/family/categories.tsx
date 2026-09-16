import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/section";

const CATEGORIES = [
  {
    title: "Nannies",
    body: "Caring, dependable support for your children, with verified information.",
    photo: "/images/category-nannies.jpg",
    position: "object-center",
  },
  {
    title: "Housekeepers",
    body: "Reliable help for keeping your home clean, organised, and comfortable.",
    photo: "/images/category-housekeepers.jpg",
    position: "object-center",
  },
  {
    title: "Cooks",
    body: "Skilled home cooks who understand family meals and Nigerian kitchens.",
    photo: "/images/category-cooks.jpg",
    position: "object-center",
  },
  {
    title: "Drivers",
    body: "Professional drivers for everyday family transportation and household needs.",
    photo: "/images/category-drivers.png",
    /* The design shifts this crop right of centre. */
    position: "object-[56%_50%]",
  },
];

export function FamilyCategories() {
  return (
    <Section id="categories" className="flex flex-col items-center gap-20">
      <SectionHeading
        label="WHO YOU CAN HIRE"
        title={<>Find the right help for your home.</>}
        description="From childcare to home care, discover verified professionals with the experience and skills your household needs."
        inner="max-w-[676px]"
      />

      <div className="flex w-full flex-col items-center gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-0">
        {CATEGORIES.map((category) => (
          <article
            key={category.title}
            className="relative h-[504px] w-full max-w-[300px] overflow-hidden rounded-3xl shadow-[0_12px_24px_0_rgb(0_0_0_/_0.15)] sm:max-w-none lg:w-[300px]"
          >
            <Image
              src={category.photo}
              alt={category.title}
              fill
              sizes="(max-width: 1024px) 50vw, 300px"
              className={`object-cover ${category.position}`}
            />
            <div className="bg-surface-2 absolute bottom-0 left-0 flex w-full flex-col gap-1 p-[30px]">
              <h3 className="font-display text-h5 text-primary-2">
                {category.title}
              </h3>
              <p className="text-caption text-ink-2">{category.body}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-body-sm text-ink-2 lg:text-body-lg text-center">
        Gatemen, security, gardeners and many more — verified the same way.
      </p>
    </Section>
  );
}
