import { Icon } from "@/components/ui/icon";

export type FaqItem = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex w-full flex-col gap-6">
      {items.map((item) => (
        <details
          key={item.question}
          open={item.defaultOpen}
          className="group bg-surface-2 rounded-2xl p-6 shadow-[0_22px_24.55px_0_rgb(0_0_0_/_0.1)] lg:p-10"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-h6 text-ink-1 group-open:text-primary-2 lg:text-h4">
              {item.question}
            </span>
            <Icon
              name="plus"
              className="mt-0.5 size-6 group-open:hidden lg:mt-0 lg:size-[30px]"
            />
            <Icon
              name="minus"
              className="mt-0.5 hidden size-6 group-open:block lg:mt-0 lg:size-[30px]"
            />
          </summary>
          <p className="text-body-sm text-ink-2 lg:font-display lg:text-h5 mt-4 pr-12 lg:font-semibold">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
