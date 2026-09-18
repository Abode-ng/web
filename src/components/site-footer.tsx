import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";

type FooterLink = { label: string; href: string };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "For Families",
    links: [
      { label: "Find a Worker", href: "/family#categories" },
      { label: "How it Works", href: "/family#how-it-works" },
      { label: "Pricing", href: "/family#pricing" },
      { label: "Safety & Trust", href: "/family#trust" },
    ],
  },
  // "For Workers" removed: there is no worker page, and none of its four rows
  // had a section to land on anywhere on the site.
  {
    heading: "For Agencies",
    links: [
      { label: "Agency OS", href: "/agency" },
      // The last three are all tool cards inside the same grid, so they share
      // an anchor rather than pretending to separate destinations.
      { label: "Manage Workers", href: "/agency#platform" },
      { label: "Recruitment", href: "/agency#platform" },
      { label: "Client Management", href: "/agency#platform" },
    ],
  },
  // Commented out until the pages behind them exist. "Privacy Policy" and
  // "Terms of Service" that scroll you to a CTA band read as broken trust, and
  // they are the links a visitor goes looking for precisely when they want to
  // check something. Restore each row as its destination ships.
  // {
  //   heading: "Company",
  //   links: [{ label: "About Abode", href: "/#about" }],
  // },
  // {
  //   heading: "Legal",
  //   links: [{ label: "Privacy Policy", href: "/privacy" }],
  // },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary-1 mt-16 w-full lg:mt-[100px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-14 px-10 py-[50px] lg:flex-row lg:items-start lg:gap-12 lg:px-20">
        <div className="flex flex-col items-start gap-10 lg:gap-[68px]">
          <div className="flex flex-col items-start justify-center gap-6">
            <Image
              src="/brand/abode-logo-light.png"
              alt="Abode"
              width={796}
              height={562}
              className="h-[66px] w-auto"
            />
            <p className="text-body-sm text-surface-2 lg:max-w-[236px]">
              Abode connects families, domestic workers, and agencies through a
              more trusted and transparent ecosystem.
            </p>
            {/* Social icons hidden until the profiles exist — see SOCIALS above.
            <div className="flex w-full items-center justify-between lg:w-[236px]">
              {SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  href="#contact"
                  aria-label={social.label}
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon name={social.name} size={24} />
                </Link>
              ))}
            </div>
            */}
          </div>

          <div className="flex items-center gap-2">
            <Icon name="copyright" size={16} />
            <p className="text-caption text-surface-2">
              2026 Abode Technologies Ltd
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-14 sm:grid sm:grid-cols-2 lg:flex lg:flex-1 lg:flex-row lg:justify-end lg:gap-28 lg:pl-20">
          {COLUMNS.map((column) => (
            <div
              key={column.heading}
              className="text-surface-2 flex flex-col items-start gap-5"
            >
              <p className="font-display text-h5">{column.heading}</p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
