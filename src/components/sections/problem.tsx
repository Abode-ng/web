import { Eyebrow, type EyebrowTone } from "@/components/ui/eyebrow";
import { Section, SectionHeading } from "@/components/ui/section";

const PROBLEMS: {
  tone: EyebrowTone;
  icon: string;
  label: string;
  rule: string;
  title: string;
  body: string;
}[] = [
  {
    tone: "families",
    icon: "families",
    label: "FAMILIES",
    rule: "border-primary-1",
    title: "Who can I trust?",
    body: "Finding trustworthy workers is difficult due to limited history, safety concerns, and unreliable information.",
  },
  {
    tone: "workers",
    icon: "workers",
    label: "DOMESTIC WORKERS",
    rule: "border-terracotta-1",
    title: "How do I prove my experience?",
    body: "Workers struggle to prove their experience, build a lasting reputation, and access better opportunities.",
  },
  {
    tone: "agencies",
    icon: "agencies",
    label: "RECRUITMENT AGENCIES",
    rule: "border-accent-1",
    title: "How do I manage it all?",
    body: "Agencies rely on paper records and spreadsheets, making worker and client management slow and fragmented.",
  },
];

export function Problem() {
  return (
    <Section
      id="problem"
      className="flex flex-col items-center gap-10 lg:gap-20"
    >
      <SectionHeading
        label="THE PROBLEM"
        title={
          <>
            Domestic work is essential.
            <br className="hidden lg:inline" /> Trust shouldn&rsquo;t be
            informal.
          </>
        }
      />

      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center">
        {PROBLEMS.map((problem) => (
          <article
            key={problem.label}
            className="border-ink-3/30 flex flex-1 flex-col gap-12 rounded-3xl border-2 border-solid py-10 lg:py-[50px]"
          >
            <div
              className={`flex w-full flex-col items-start gap-6 border-l-2 border-solid px-8 lg:px-[50px] ${problem.rule}`}
            >
              <Eyebrow tone={problem.tone} icon={problem.icon}>
                {problem.label}
              </Eyebrow>
              <h3 className="font-display text-h5 text-ink-1 lg:text-h4">
                {problem.title}
              </h3>
            </div>
            <div className="w-full px-8 lg:px-[50px]">
              <p className="text-body-sm text-ink-2 lg:text-body-lg">
                {problem.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
