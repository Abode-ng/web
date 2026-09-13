import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Pillar = { label: string; icon: string; ring: string; center?: boolean };

const PILLARS: Record<string, Pillar> = {
  identity: {
    label: "Identity verification",
    icon: "verified-24",
    ring: "border-primary-2 bg-primary-2/5",
  },
  records: {
    label: "Worker records",
    icon: "database",
    ring: "border-status-4 bg-status-4/5",
  },
  history: {
    label: "Employment history",
    icon: "work-history",
    ring: "border-accent-3 bg-accent-3/5",
    /* The middle tile centres its contents in the design. */
    center: true,
  },
  trust: {
    label: "Trust and reputation",
    icon: "trust",
    ring: "border-terracotta-1 bg-terracotta-1/5",
  },
  comms: {
    label: "Better communication",
    icon: "communication",
    ring: "border-accent-1 bg-accent-1/5",
  },
};

/** Mobile stacks them in this order. */
const MOBILE_ORDER = [
  PILLARS.identity,
  PILLARS.records,
  PILLARS.history,
  PILLARS.comms,
  PILLARS.trust,
];

/** Five pillars staggered across a 3x3 grid; the empty cells are left blank. */
const ROWS: (Pillar | null)[][] = [
  [PILLARS.identity, null, PILLARS.records],
  [null, PILLARS.history, null],
  [PILLARS.trust, null, PILLARS.comms],
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-[15px] rounded-3xl border border-solid px-[30px] py-5 lg:w-[360px] lg:p-[30px]",
        pillar.center && "justify-center",
        pillar.ring,
      )}
    >
      {pillar.icon === "database" ? (
        /* This glyph sits inset inside its 24px box in the design. */
        <div className="relative size-6 shrink-0 overflow-hidden">
          <div className="absolute inset-x-[12.5%] top-[6.25%] bottom-0">
            <Icon name="database" className="h-full w-full" />
          </div>
        </div>
      ) : (
        <Icon name={pillar.icon} size={24} />
      )}
      <p className="font-display text-h6 text-ink-1 lg:text-h5 whitespace-nowrap">
        {pillar.label}
      </p>
    </div>
  );
}

export function Solution() {
  return (
    <Section
      id="solution"
      inner="max-w-[1150px]"
      className="flex flex-col items-center gap-10 lg:gap-20"
    >
      <SectionHeading
        label="THE SOLUTION"
        title={<>Trust shouldn&rsquo;t depend on word of mouth.</>}
        description="Abode is building the infrastructure that allows households, domestic workers and recruitment agencies to interact with greater confidence."
      />

      {/* Staggered layout at desktop widths. */}
      <div className="hidden w-full flex-col gap-9 lg:flex">
        {ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex w-full items-center justify-between"
          >
            {row.map((cell, cellIndex) =>
              cell ? (
                <PillarCard key={cell.label} pillar={cell} />
              ) : (
                <div
                  key={`empty-${rowIndex}-${cellIndex}`}
                  className="w-[360px]"
                  aria-hidden
                />
              ),
            )}
          </div>
        ))}
      </div>

      {/* Below lg the pillars stack. */}
      <div className="flex w-full flex-col gap-4 lg:hidden">
        {MOBILE_ORDER.map((pillar) => (
          <PillarCard key={pillar.label} pillar={pillar} />
        ))}
      </div>
    </Section>
  );
}
