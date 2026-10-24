import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { FeaturesHero, ConnectedOverview } from "@/components/features/features-overview";
import { FeaturesComparison } from "@/components/features/features-comparison";
import {
  FeaturesFoundation,
  FeatureDetails,
  EarlyAccessSetup,
} from "@/components/features/features-capabilities";

export const metadata: Metadata = {
  title: "Features — One connected invoice-to-cash workspace | CollectKE",
  description:
    "Explore the CollectKE features being built for Kenyan businesses: connected documents, receivables, payment matching, reminders, statements, and team controls.",
  openGraph: {
    title: "CollectKE features — Every part of getting paid, connected.",
    description:
      "From quotation to receipt. Explore a clearer invoice-to-cash workflow for Kenyan businesses.",
    type: "website",
    locale: "en_KE",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader activeHref="/features" />
      <main id="main-content">
        <FeaturesHero />
        <ConnectedOverview />
        <FeaturesComparison />
        <FeaturesFoundation />
        <FeatureDetails />
        <EarlyAccessSetup />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
