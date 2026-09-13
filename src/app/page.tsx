import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { ProductEcosystem } from "@/components/sections/product";
import { Solution } from "@/components/sections/solution";
import { Team } from "@/components/sections/team";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col gap-20 lg:gap-[100px]">
        <Hero />
        <Problem />
        <Solution />
        <ProductEcosystem />
        <About />
        <Team />
        <FinalCta
          label="BUILD WITH ABODE"
          title="Help us build a more trusted future for domestic work."
          primary={{ label: "Explore Abode Family", href: "/family" }}
          secondary={{ label: "Our Products", href: "#products" }}
        />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
