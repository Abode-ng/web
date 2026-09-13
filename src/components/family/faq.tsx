import { FaqAccordion, type FaqItem } from "@/components/ui/faq-accordion";
import { Section, SectionHeading } from "@/components/ui/section";

/**
 * The Figma shows all seven rows collapsed, so no answers are specified.
 * These are drafts built from copy already on the page — review them.
 */
const FAQS: FaqItem[] = [
  {
    question: "How does Abode Family work?",
    answer:
      "Discover workers based on the help your household needs, review their profiles, experience and verification, connect for conversations and interviews, then make a more informed hiring decision.",
    defaultOpen: true,
  },
  {
    question: "How does Abode verify workers?",
    answer:
      "Workers complete identity and background checks, and their employment history and references are recorded, so you see verified details rather than claims.",
  },
  {
    question: "What information can I see about a worker?",
    answer:
      "Verified identity, previous work experience and references, professional information, and ratings from families like yours.",
  },
  {
    question: "Do I have to pay to review workers?",
    answer:
      "No. Credits are used to post a job. Reviewing applicants, chatting and interviewing are free.",
  },
  {
    question: "What happens if I don't get suitable applicants?",
    answer:
      "Your credits do not expire, so you can post again when you are ready.",
  },
  {
    question: "Is my home address shared with workers?",
    answer:
      "Your address is not part of a job post. You choose what to share as a conversation progresses.",
  },
  {
    question: "Does Abode take a commission when I hire someone?",
    answer:
      "No. You pay for credits only — there is no hiring commission and no hidden placement fee.",
  },
];

export function FamilyFaq() {
  return (
    <Section
      id="faq"
      inner="max-w-[1150px]"
      className="flex flex-col items-center gap-16"
    >
      <SectionHeading
        label="COMMON QUESTIONS"
        title={<>Questions? We have answers.</>}
        description="Everything you need to know about finding and hiring trusted domestic workers with Abode."
        inner="max-w-[676px]"
      />
      <FaqAccordion items={FAQS} />
    </Section>
  );
}
