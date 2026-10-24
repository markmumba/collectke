import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EarlyAccess } from "@/components/early-access";
import { ContactEnquiry } from "@/components/contact/contact-enquiry";
import { Icon } from "@/components/ui/icon";
import styles from "@/components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Contact us — Start a conversation | CollectKE",
  description:
    "Request CollectKE early access, talk about your invoice-to-cash workflow, explore onboarding guides, or send a general enquiry.",
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader activeHref="/contact" />
      <main id="main-content" className={styles.page}>
        <div className="page-container">
          <header className={styles.heading}>
            <p className="eyebrow">CONTACT COLLECTKE</p>
            <h1>
              Start a conversation.
              <br />
              <span className="gradient-text">Find a clearer way forward.</span>
            </h1>
            <p>Whether you’re exploring early access or have a question, start here.</p>
          </header>
          <div className={styles.cards}>
            <section className={`${styles.card} ${styles.early}`} aria-labelledby="early-title">
              <span className={styles.icon}>
                <Icon name="spark" width="23" height="23" />
              </span>
              <h2 id="early-title">Help shape what comes next.</h2>
              <p>
                Interested in CollectKE for your business? Request early access and tell us a little
                about your team.
              </p>
              <div className={styles.action}>
                <EarlyAccess className="button button-outline" />
              </div>
              <span className={styles.development}>Early access · Product in development</span>
            </section>
            <section
              className={`${styles.card} ${styles.workflow}`}
              aria-labelledby="workflow-contact-title"
            >
              <span className={styles.icon}>
                <Icon name="invoice" width="23" height="23" />
              </span>
              <h2 id="workflow-contact-title">Let’s talk about your workflow.</h2>
              <p>
                Share how you handle invoices, incoming payments, and customer follow-up. Tell us
                where the work slows down.
              </p>
              <div className={styles.action}>
                <ContactEnquiry topic="workflow" label="Discuss your workflow" />
              </div>
            </section>
            <section
              className={`${styles.card} ${styles.guides}`}
              aria-labelledby="guides-contact-title"
            >
              <span className={styles.icon}>
                <Icon name="invoice" width="23" height="23" />
              </span>
              <h2 id="guides-contact-title">Find a useful starting point.</h2>
              <p>
                Explore onboarding notes, example business workflows, and practical guides to
                reviewing progress with your team.
              </p>
              <div className={styles.action}>
                <Link className="button button-outline" href="/case-studies">
                  Explore the guides
                  <Icon name="arrow" width="16" height="16" />
                </Link>
              </div>
            </section>
            <section
              className={`${styles.card} ${styles.general}`}
              aria-labelledby="general-contact-title"
            >
              <span className={styles.icon}>
                <Icon name="plus" width="23" height="23" />
              </span>
              <h2 id="general-contact-title">Something else on your mind?</h2>
              <p>
                Have a question about CollectKE, an idea to share, or a potential collaboration?
                Start a conversation with us.
              </p>
              <div className={styles.action}>
                <ContactEnquiry topic="general" label="Send an enquiry" />
              </div>
            </section>
          </div>
          <div className={styles.bottomNote}>
            <span className="kenya-mark" aria-hidden="true" />
            <p>Built around Kenyan businesses.</p>
            <Link href="/faq">
              Read common questions
              <Icon name="arrow" width="14" height="14" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
