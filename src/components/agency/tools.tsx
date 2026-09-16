import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";

/**
 * The Figma reuses several Abode Family descriptions here — they talk about
 * households rather than agencies. These are rewritten for the agency audience;
 * the titles are as designed.
 */
const TOOLS = [
  {
    icon: "discover",
    title: "Worker Management",
    body: "Keep profiles, documents and records for every worker in one place.",
    width: "lg:w-[247px]",
  },
  {
    icon: "briefcase-24",
    title: "Recruitment and Hiring",
    body: "Match workers to client requests and track every hire through to placement.",
    width: "lg:w-[293px]",
  },
  {
    icon: "connect",
    inset: "inset-[8.33%]",
    title: "Client Management",
    body: "Keep household relationships, requests and placement history organised.",
    width: "lg:w-[250px]",
  },
  {
    icon: "database",
    inset: "inset-x-[12.5%] top-[6.25%] bottom-0",
    title: "Digital Records",
    body: "Replace notebooks and scattered spreadsheets with records you can search.",
    width: "lg:w-[247px]",
  },
  {
    icon: "trust",
    title: "Verification",
    body: "Identity and background checks run centrally, so every worker is verified the same way.",
    width: "lg:w-[284px]",
  },
  {
    icon: "map-pin-review",
    title: "Workforce Visibility",
    body: "See who is placed, who is available, and what needs your attention.",
    width: "lg:w-[250px]",
  },
];

export function AgencyTools() {
  return (
    <Section
      id="platform"
      inner="max-w-[1070px]"
      className="flex flex-col items-center gap-10 lg:gap-20"
    >
      <SectionHeading
        label="BUILT FOR AGENCIES"
        title={<>Tools that simplify your work</>}
        description="From recruitment to client management, Abode Agency OS helps you to stay organized, work faster, and deliver better outcomes."
        inner="max-w-[614px]"
      />

      <div className="flex w-full flex-col gap-10 lg:gap-[60px]">
        {[TOOLS.slice(0, 3), TOOLS.slice(3)].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex w-full flex-col items-center justify-between gap-10 sm:flex-row sm:items-start"
          >
            {row.map((tool) => (
              <div
                key={tool.title}
                className={`flex flex-col items-center gap-6 ${tool.width}`}
              >
                <div className="bg-surface-2 flex size-12 items-center justify-center rounded-full shadow-[0_12px_24px_0_rgb(0_0_0_/_0.15)]">
                  {tool.inset ? (
                    <div className="relative size-6 overflow-hidden">
                      <div className={`absolute ${tool.inset}`}>
                        <Icon name={tool.icon} className="h-full w-full" />
                      </div>
                    </div>
                  ) : (
                    <Icon name={tool.icon} size={24} />
                  )}
                </div>
                <div className="flex w-full flex-col items-center gap-4 text-center">
                  <h3 className="font-display text-h5 text-ink-1 lg:text-h4">
                    {tool.title}
                  </h3>
                  <p className="text-body-sm text-ink-2 lg:text-body">
                    {tool.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
