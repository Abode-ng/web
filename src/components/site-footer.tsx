import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";

const COLUMNS = [
  {
    heading: "For Families",
    links: ["Find a Worker", "How it Works", "Pricing", "Safety & Trust"],
  },
  {
    heading: "For Workers",
    links: [
      "Find Opportunities",
      "Build Your Profile",
      "Verification",
      "Worker Resources",
    ],
  },
  {
    heading: "For Agencies",
    links: ["Agency OS", "Manage Workers", "Recruitment", "Client Management"],
  },
  // Commented out until the pages behind them exist. Every link in the footer
  // currently points at #contact, which is tolerable for product nav but not
  // for these two: "Privacy Policy" and "Terms of Service" that scroll you to a
  // CTA band read as broken trust, and they are the links a visitor goes
  // looking for precisely when they want to check something. Restore each row
  // as its destination ships.
  // {
  //   heading: "Company",
  //   links: ["About Abode", "Careers", "Contact", "Resources"],
  // },
  // {
  //   heading: "Legal",
  //   links: ["Privacy Policy", "Terms of Service", "Safety", "Help Centre"],
  // },
];

// Commented out alongside the icon row below: the profiles these point to do
// not exist yet, so all five were links to #contact wearing a Facebook badge.
// const SOCIALS = [
//   { name: "social-facebook", label: "Facebook" },
//   { name: "social-whatsapp", label: "WhatsApp" },
//   { name: "social-linkedin", label: "LinkedIn" },
//   { name: "social-instagram", label: "Instagram" },
//   { name: "social-twitter", label: "X" },
// ];

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

        <div className="flex flex-col gap-14 sm:grid sm:grid-cols-2 lg:flex lg:flex-1 lg:flex-row lg:justify-between lg:gap-10 lg:pl-20">
          {COLUMNS.map((column) => (
            <div
              key={column.heading}
              className="text-surface-2 flex flex-col items-start gap-5"
            >
              <p className="font-display text-h5">{column.heading}</p>
              {column.links.map((link) => (
                <Link
                  key={link}
                  href="#contact"
                  className="text-body transition-opacity hover:opacity-70"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
