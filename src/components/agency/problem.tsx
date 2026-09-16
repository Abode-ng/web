import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";

const PROBLEMS = [
  {
    icon: "spreadsheet",
    title: "Spreadsheets",
    titleColor: "text-primary-2",
    body: "Important worker information becomes difficult to manage.",
  },
  {
    icon: "fragmented",
    title: "Fragmented systems",
    titleColor: "text-terracotta-1",
    body: "Recruitment and client information live in different places.",
  },
  {
    icon: "database-36",
    inset: true,
    title: "Paper records",
    titleColor: "text-status-4",
    body: "Information scattered across notebooks and files.",
  },
  {
    icon: "style-guide",
    size: 48,
    title: "Manual processes",
    titleColor: "text-accent-1",
    body: "Too much time goes into administration.",
  },
];

export function AgencyProblem() {
  return (
    <Section id="problem" className="flex flex-col items-center gap-10 lg:gap-20">
      <SectionHeading
        label="THE PROBLEM"
        title={<>Your agency has outgrown spreadsheets.</>}
      />

      <div className="flex w-full flex-col items-stretch justify-between gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row">
        {PROBLEMS.map((item) => (
          <article
            key={item.title}
            className="border-ink-3/30 flex flex-col items-start gap-6 rounded-2xl border-2 border-solid p-10 lg:gap-9 lg:w-[300px]"
          >
            {item.inset ? (
              /* This glyph sits inset inside its 36px box in the design. */
              <div className="relative size-6 shrink-0 overflow-hidden lg:size-9">
                <div className="absolute inset-x-[12.5%] top-[6.25%] bottom-0">
                  <Icon name={item.icon} className="h-full w-full" />
                </div>
              </div>
            ) : (
              <Icon
                name={item.icon}
                className={item.size ? "size-9 lg:size-12" : "size-6 lg:size-9"}
              />
            )}
            <div className="flex w-full flex-col items-start gap-4">
              <h3 className={`font-display text-h5 lg:text-h4 ${item.titleColor}`}>
                {item.title}
              </h3>
              <p className="text-body-sm text-ink-2 lg:text-body">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
