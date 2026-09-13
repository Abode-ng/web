import { FaqAccordion, type FaqItem } from "@/components/ui/faq-accordion";
import { Section, SectionHeading } from "@/components/ui/section";

/**
 * Only the first answer is written in the Figma (the other rows are shown collapsed).
 * The remaining answers below are drafts built from copy already on the page — review them.
 */
const FAQS: FaqItem[] = [
  {
    question: "What is Abode?",
    answer:
      "Abode is building technology and infrastructure to make domestic work safer, more trusted, and more professional. We connect households, domestic workers, and recruitment agencies through verified identities, trusted records, better hiring processes, and workforce management.",
    defaultOpen: true,
  },
  {
    question: "Who is Abode for?",
    answer:
      "Abode serves three groups: families hiring domestic workers, domestic workers building experience and reputation, and recruitment agencies managing workers and clients.",
  },
  {
    question: "What is Abode Family?",
    answer:
      "Abode Family is the product for households. It helps you discover, evaluate, and connect with domestic workers using verified identities, relevant experience, and trusted information.",
  },
  {
    question: "What is Abode Agency OS?",
    answer:
      "Abode Agency OS is the system for recruitment agencies. It brings worker management, digital records, verification, recruitment, and client relationships into one organized place.",
  },
  {
    question: "How does Abode build trust?",
    answer:
      "Trust is supported by identity verification, employment history, worker records, reputation, and better communication between everyone involved — not by word of mouth alone.",
  },
  {
    question: "Does Abode replace recruitment agencies?",
    answer:
      "No. Agencies keep the relationship with their workers and clients. Abode gives them the software and the shared verification layer to run that work more professionally.",
  },
  {
    question: "How can I get involved with Abode?",
    answer:
      "Explore Abode Family if you are a household or a worker, or Abode Agency OS if you run an agency. You can also reach the team through the contact links in the footer.",
  },
];

export function Faq() {
  return (
    <Section
      id="faq"
      inner="max-w-[1150px]"
      className="flex flex-col items-center gap-10 lg:gap-16"
    >
      <SectionHeading
        label="FREQUENTLY ASKED QUESTIONS"
        title={<>Questions about Abode?</>}
        description="A few answers to help you understand what we're building and who it's for."
      />
      <FaqAccordion items={FAQS} />
    </Section>
  );
}
