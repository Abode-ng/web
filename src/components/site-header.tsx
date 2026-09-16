import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";

export type NavItem = { label: string; href: string };

const DEFAULT_LINKS_START: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Vision & Mission", href: "/#solution" },
];

const DEFAULT_LINKS_END: NavItem[] = [
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

const DEFAULT_PRODUCTS: NavItem[] = [
  { label: "Abode Family", href: "/family" },
  { label: "Abode Agency OS", href: "/#abode-agency-os" },
];

function NavLink({ label, href }: NavItem) {
  return (
    <Link
      href={href}
      className="font-display text-nav text-ink-1 hover:text-primary-2 whitespace-nowrap transition-colors"
    >
      {label}
    </Link>
  );
}

type SiteHeaderProps = {
  /** Links shown before the Products disclosure. */
  linksStart?: NavItem[];
  /** Links shown after it. */
  linksEnd?: NavItem[];
  /** Pass null for headers without the Products disclosure. */
  products?: NavItem[] | null;
  cta?: NavItem;
};

export function SiteHeader({
  linksStart = DEFAULT_LINKS_START,
  linksEnd = DEFAULT_LINKS_END,
  products = DEFAULT_PRODUCTS,
  cta = { label: "Explore Abode Family", href: "/family" },
}: SiteHeaderProps) {
  return (
    <header className="bg-surface-2 sticky top-0 z-50 py-4">
      <div className="mx-auto flex h-10 w-[300px] items-center justify-between lg:h-[68px] lg:w-full lg:max-w-[1440px] lg:px-20">
        <Link href="/" aria-label="Abode home" className="shrink-0">
          <Image
            src="/brand/abode-logo.png"
            alt="Abode"
            width={796}
            height={562}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {linksStart.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}

          {products && (
            /* Products disclosure — opens on hover and on keyboard focus. */
            <div className="group relative h-11">
              <button
                type="button"
                aria-haspopup="true"
                className="bg-surface-2 font-display text-nav text-ink-1 flex h-11 items-center gap-1 rounded-lg px-2.5"
              >
                Products
                <Icon
                  name="chevron-down"
                  size={24}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="bg-surface-1 invisible absolute top-11 left-0 flex w-[138px] flex-col rounded-lg opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {products.map((product) => (
                  <Link
                    key={product.label}
                    href={product.href}
                    className="text-caption text-ink-1 hover:text-primary-2 flex items-center p-2.5 whitespace-nowrap"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {linksEnd.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </nav>

        {/* Mobile disclosure — not in the Figma (desktop-only design), added so the nav is reachable on small screens. */}
        <details className="group relative lg:hidden">
          <summary
            className="text-ink-1 list-none [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <Icon name="menu" size={20} />
          </summary>
          <div className="bg-surface-1 absolute right-0 z-50 mt-2 flex w-56 flex-col gap-1 rounded-2xl p-4">
            {[...linksStart, ...(products ?? []), ...linksEnd].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-nav text-ink-1 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>

        <ButtonLink href={cta.href} className="hidden lg:inline-flex">
          {cta.label}
        </ButtonLink>
      </div>
    </header>
  );
}
