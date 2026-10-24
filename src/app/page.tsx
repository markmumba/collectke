import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { ProductPillars } from "@/components/product-pillars";
import { ConnectedWorkflow } from "@/components/connected-workflow";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { WhoItsFor } from "@/components/who-its-for";
import { ControlAndClarity } from "@/components/control-and-clarity";
import { Faq } from "@/components/faq";
import { ClosingCta } from "@/components/closing-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProductPillars />
        <ConnectedWorkflow />
        <ProductWalkthrough />
        <WhoItsFor />
        <ControlAndClarity />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
