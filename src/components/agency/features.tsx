import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";

const FEATURES = [
  {
    icon: "profile",
    title: "Worker Profiles",
    body: "View verified profiles, skills, experience, and history.",
  },
  {
    icon: "pipeline",
    title: "Recruitment Pipeline",
    body: "Track every stage from application to placement.",
  },
  {
    icon: "door",
    title: "Client Portal",
    body: "Share updates, manage requests, and stay connected.",
  },
  {
    icon: "report",
    title: "Reports & Analytics",
    body: "Make data-driven decisions with real-time insights",
  },
  {
    icon: "bell",
    title: "Notifications",
    body: "Stay informed on key updates and actions",
  },
  {
    icon: "security",
    title: "Security & Compliance",
    body: "Your data is protected with industry-standard security.",
  },
];

export function AgencyFeatures() {
  return (
    <Section id="features" className="flex flex-col items-center gap-10 lg:gap-20">
      <SectionHeading
        label="PRODUCT FEATURES"
        title={<>Everything you need, all in one platform</>}
        description="Powerful features, simple workflows, and real support - built for modern recruitment agencies."
        inner="max-w-[633px]"
      />

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="border-ink-3/30 flex flex-col items-start gap-6 rounded-2xl border-2 border-solid p-10 lg:gap-9"
          >
            <Icon name={feature.icon} className="size-6 lg:size-9" />
            <div className="flex w-full flex-col items-start gap-4">
              <h3 className="font-display text-h5 text-primary-2 lg:text-h4">
                {feature.title}
              </h3>
              <p className="text-body-sm text-ink-2 lg:text-body">
                {feature.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
