import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import { FaqExplorer } from "@/components/faq/faq-explorer";
import { faqItems } from "@/content/faq";
import styles from "@/components/faq/faq.module.css";

export const metadata: Metadata = {
  title: "Frequently asked questions — CollectKE",
  description:
    "Clear answers about CollectKE’s planned invoice-to-cash workflow, payment reconciliation, customer reminders, and early access for Kenyan businesses.",
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader activeHref="/faq" />
      <main id="main-content">
        <section className={`page-container ${styles.hero}`} aria-labelledby="faq-page-title">
          <p className="eyebrow">A LITTLE CLARITY GOES A LONG WAY</p>
          <h1 id="faq-page-title">
            Good questions.
            <br />
            <span className="gradient-text">Clear answers.</span>
          </h1>
          <p>
            Get to know the workspace we’re building, how it fits your business, and what comes
            next.
          </p>
          <span className={styles.status}>
            <span /> In development. Built with your questions in mind.
          </span>
        </section>
        <FaqExplorer items={faqItems} />
        <section
          className={`page-container ${styles.contact}`}
          aria-labelledby="more-questions-title"
        >
          <div className={styles.contactInner}>
            <div>
              <p className={styles.lightEyebrow}>LET’S TALK ABOUT YOUR WORKFLOW</p>
              <h2 id="more-questions-title">
                Your question might be
                <br />
                <span>our next useful conversation.</span>
              </h2>
              <p>
                Tell us how your team handles invoices, payments, and follow-up. We’d like to
                understand where it gets difficult.
              </p>
            </div>
            <div className={styles.actions}>
              <Link className="button button-primary" href="/contact">
                Ask us a question <Icon name="arrow" />
              </Link>
              <EarlyAccess className="button button-outline" />
              <small>
                Start with a conversation.
                <br />
                No subscription or payment commitment.
              </small>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
