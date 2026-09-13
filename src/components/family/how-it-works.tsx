import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";

const STEPS = [
  {
    icon: "discover",
    step: "Step 1",
    title: "Discover",
    body: "Find workers based on the help your household needs.",
    width: "lg:w-[247px]",
  },
  {
    icon: "map-pin-review",
    step: "Step 2",
    title: "Review",
    body: "Explore profiles, experience, verification and relevant trust information.",
    width: "lg:w-[293px]",
  },
  {
    icon: "connect",
    step: "Step 3",
    title: "Connect",
    body: "Move forward with conversations and interviews.",
    width: "lg:w-[250px]",
    inset: true,
  },
  {
    icon: "briefcase-24",
    step: "Step 4",
    title: "Hire",
    body: "Make a more informed hiring decision with the information you need.",
    width: "lg:w-[284px]",
  },
];

export function FamilyHowItWorks() {
  return (
    <Section id="how-it-works" className="flex flex-col items-center gap-20">
      <SectionHeading
        label="HOW IT WORKS"
        title={<>From discovery to hiring, made simpler.</>}
      />

      <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
        {STEPS.map((step) => (
          <div
            key={step.step}
            className={`flex flex-col items-center gap-12 ${step.width}`}
          >
            <div className="bg-surface-2 flex size-12 items-center justify-center rounded-full shadow-[0_12px_24px_0_rgb(0_0_0_/_0.15)]">
              {step.inset ? (
                <div className="relative size-6 overflow-hidden">
                  <div className="absolute inset-[8.33%]">
                    <Icon name={step.icon} className="h-full w-full" />
                  </div>
                </div>
              ) : (
                <Icon name={step.icon} size={24} />
              )}
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <div className="bg-surface-2 flex items-center justify-center rounded-[48px] px-5 py-2.5 shadow-[0_12px_24px_0_rgb(0_0_0_/_0.15)]">
                <p className="text-body text-ink-2 text-center whitespace-nowrap">
                  {step.step}
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <h3 className="font-display text-h4 text-ink-1">
                  {step.title}
                </h3>
                <p className="text-body text-ink-2">{step.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
