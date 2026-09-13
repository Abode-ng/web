import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";

const CARDS = [
  {
    icon: "database-36",
    inset: true,
    ring: "border-status-4/20",
    titleColor: "text-status-4",
    title: "Know who you're hiring, with confidence.",
    body: "Access relevant information before making a decision.",
  },
  {
    icon: "portfolio",
    ring: "border-primary-2/20",
    titleColor: "text-primary-2",
    title: "Understand their experience",
    body: "See employment history and professional information.",
  },
  {
    icon: "connect-solid",
    size: 48,
    ring: "border-accent-1/20",
    titleColor: "text-accent-1",
    title: "Connect with confidence",
    body: "Move from discovery to interview and hiring in one structured experience.",
  },
];

export function FamilyChallenge() {
  return (
    <Section id="challenge" className="flex flex-col items-center gap-20">
      <SectionHeading
        label="THE CHALLENGE"
        title={<>Hiring help for your home shouldn&rsquo;t feel uncertain.</>}
      />

      <div className="flex w-full flex-col items-stretch justify-between gap-6 lg:flex-row">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className={`flex flex-col items-start gap-9 rounded-2xl border-2 border-solid p-10 lg:h-[320px] lg:w-[411px] ${card.ring}`}
          >
            {card.inset ? (
              /* This glyph sits inset inside its 36px box in the design. */
              <div className="relative size-9 shrink-0 overflow-hidden">
                <div className="absolute inset-x-[12.5%] top-[6.25%] bottom-0">
                  <Icon name={card.icon} className="h-full w-full" />
                </div>
              </div>
            ) : (
              <Icon name={card.icon} size={card.size ?? 36} />
            )}
            <div className="flex w-full flex-col items-start gap-4">
              <h3 className={`font-display text-h4 ${card.titleColor}`}>
                {card.title}
              </h3>
              <p className="text-body text-ink-2">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
