import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow, type EyebrowTone } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Product = {
  id: string;
  theme: "light" | "dark";
  tone: EyebrowTone;
  icon: string;
  label: string;
  title: string;
  blurb: string;
  features: { title: string; body: string }[];
  cta: string;
  /** Where the card's CTA goes. */
  ctaHref: string;
};

const PRODUCTS: Product[] = [
  {
    id: "abode-family",
    theme: "light",
    tone: "families",
    icon: "families",
    label: "FAMILIES",
    title: "Abode Family",
    blurb:
      "Discover, evaluate, and connect with domestic workers using verified identities, relevant experience, and trusted information.",
    features: [
      {
        title: "Verified worker profiles",
        body: "See relevant verified information before making a hiring decision.",
      },
      {
        title: "Identity verification",
        body: "Reduce uncertainty by checking a worker's identity.",
      },
      {
        title: "Employment history",
        body: "Understand previous experience and employment records.",
      },
      {
        title: "Trust & reputation",
        body: "Use relevant information and feedback to make better-informed decisions.",
      },
    ],
    cta: "Explore Abode Family",
    ctaHref: "/family",
  },
  {
    id: "abode-agency-os",
    theme: "dark",
    tone: "agencies",
    icon: "agencies-light",
    label: "RECRUITMENT AGENCIES",
    title: "Abode Agency OS",
    blurb:
      "Manage workers, records, verification, recruitment, and client relationships from one organized system.",
    features: [
      {
        title: "Worker management",
        body: "Manage profiles, documents, records, and worker information.",
      },
      {
        title: "Digital records",
        body: "Move away from fragmented spreadsheets, notebooks, and disconnected records.",
      },
      {
        title: "Recruitment management",
        body: "Create a more structured process for matching workers with opportunities.",
      },
      {
        title: "Client management",
        body: "Keep household relationships and recruitment activity organised.",
      },
    ],
    cta: "Explore Abode Agency OS",
    ctaHref: "#abode-agency-os",
  },
];

function ProductCard({ product }: { product: Product }) {
  const dark = product.theme === "dark";

  return (
    <article
      id={product.id}
      className={cn(
        "flex flex-1 flex-col justify-between gap-6 rounded-3xl p-9 lg:gap-10 lg:rounded-[36px] lg:p-[50px]",
        dark ? "bg-primary-1" : "bg-surface-1",
      )}
    >
      <header className="flex w-full flex-col items-start gap-5">
        {dark ? (
          <div className="bg-accent-2/20 inline-flex items-center justify-center gap-2 rounded-[34px] px-2.5 py-[5px]">
            <Icon name={product.icon} size={16} />
            <span className="text-label text-accent-2 whitespace-nowrap">
              {product.label}
            </span>
          </div>
        ) : (
          <Eyebrow tone={product.tone} icon={product.icon}>
            {product.label}
          </Eyebrow>
        )}
        <h3
          className={cn(
            "font-display text-h3 lg:text-h2",
            dark ? "text-surface-1" : "text-primary-1",
          )}
        >
          {product.title}
        </h3>
        <p
          className={cn(
            "text-body-sm lg:text-body-lg",
            dark ? "text-surface-2" : "text-ink-2",
          )}
        >
          {product.blurb}
        </p>
      </header>

      <div className="flex w-full flex-col">
        {product.features.map((feature, index) => (
          <div
            key={feature.title}
            className={cn(
              "flex w-full items-center justify-between gap-9 py-5",
              index < product.features.length - 1 &&
                "border-ink-3 border-b border-solid",
            )}
          >
            <div className="flex w-[350px] max-w-full flex-col items-start gap-2">
              <p
                className={cn(
                  "font-display text-h6 lg:text-h5",
                  dark ? "text-surface-2" : "text-ink-1",
                )}
              >
                {feature.title}
              </p>
              <p
                className={cn(
                  "text-body-sm lg:text-body-lg",
                  dark ? "text-surface-2" : "text-ink-2",
                )}
              >
                {feature.body}
              </p>
            </div>
            <Icon
              name={dark ? "check-circle-light" : "check-circle"}
              size={24}
            />
          </div>
        ))}
      </div>

      <ButtonLink
        href={product.ctaHref}
        variant={dark ? "light" : "primary"}
        className="w-full"
      >
        {product.cta}
      </ButtonLink>
    </article>
  );
}

export function ProductEcosystem() {
  return (
    <Section
      id="products"
      inner="max-w-[1100px]"
      className="flex flex-col items-center gap-10 lg:gap-20"
    >
      <SectionHeading
        label="THE ABODE ECOSYSTEM"
        title={<>One infrastructure. Two connected products.</>}
      />
      <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:gap-[62px]">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
