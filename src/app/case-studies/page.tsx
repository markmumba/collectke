import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { StudyLibrary } from "@/components/case-studies/study-library";
import { studies } from "@/content/case-studies";
import styles from "@/components/case-studies/case-studies.module.css";

export const metadata: Metadata = {
  title: "Case studies & onboarding notes | CollectKE",
  description:
    "Explore illustrative CollectKE onboarding stories, practical workflow guides, and ways to measure progress from invoice to cash.",
};
export default function CaseStudiesPage() {
  const summaries = studies.map(
    ({ slug, category, title, description, audience, readTime, visual, example }) => ({
      slug,
      category,
      title,
      description,
      audience,
      readTime,
      visual,
      example,
    }),
  );
  return (
    <>
      <SiteHeader activeHref="/case-studies" />
      <main id="main-content" className={styles.page}>
        <div className={`page-container ${styles.intro}`}>
          <p className="eyebrow">CASE STUDIES & ONBOARDING NOTES</p>
          <h1>Better work starts here.</h1>
          <p>Starting a new workflow. Bringing a team on board. Understanding what changed.</p>
          <span>
            Explore example onboarding stories and practical guides. Verified customer results will
            follow as pilots are completed.
          </span>
        </div>
        <StudyLibrary studies={summaries} />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
