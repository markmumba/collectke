import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { Icon } from "@/components/ui/icon";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { pricingPlans, pricingComparison } from "@/config/pricing";
import styles from "@/components/pricing/pricing.module.css";

export const metadata: Metadata = {
  title: "Pricing — CollectKE",
  description:
    "Explore proposed CollectKE plans from KSh 1,500 per month. Invoice records, payment reconciliation, and customer follow-up for Kenyan businesses.",
};
const questions = [
  [
    "Can I subscribe today?",
    "CollectKE is in development. These are proposed launch packages for feedback, rather than plans available to buy today. Requesting early access starts a conversation; it does not create a paid account or guarantee availability.",
  ],
  [
    "How do invoice and reminder limits work?",
    "Invoice limits refer to new invoices created or imported in a month. Existing invoices and outstanding balances would remain in your records when a new month starts. Email allowances count individual reminder emails sent. Monthly allowances reset each month, including on annual plans; unused allowances do not roll over. These proposed limits will be confirmed before onboarding.",
  ],
  [
    "What happens if we need more capacity?",
    "We propose notifying you before a limit is reached and agreeing an upgrade or a larger package with you. There are no proposed automatic overage charges. If you need more than 10 users, 2,000 new invoices, or 5,000 reminder emails a month, contact us to discuss your workflow.",
  ],
  [
    "Are SMS, WhatsApp, and payment provider charges included?",
    "The email allowances shown are included in the proposed subscription. SMS and WhatsApp are not included; availability and usage charges depend on provider setup and approvals. M-Pesa records are subject to onboarding. Any provider or payment charges would be disclosed separately before activation.",
  ],
  [
    "What does annual billing mean?",
    "The proposed annual price is ten times the monthly price, paid once for twelve months of access. That saves the equivalent of two monthly payments, or approximately 16.7%. The same monthly usage limits apply. We will confirm renewal, cancellation, and refund terms before accepting any subscription payment.",
  ],
  [
    "Does the price include eTIMS or accounting integrations?",
    "Automated eTIMS submission, direct bank syncing, and direct accounting integrations are not included in these proposed packages. Their scope and availability are still being evaluated. CollectKE focuses on invoice-to-cash workflows alongside your accounting process.",
  ],
] as const;

export default function PricingPage() {
  return (
    <>
      <SiteHeader activeHref="/pricing" />
      <main id="main-content">
        <section className={`page-container ${styles.hero}`} aria-labelledby="pricing-title">
          <p className="eyebrow">PRICING THAT GROWS WITH YOUR WORK</p>
          <h1 id="pricing-title">
            A clearer picture.
            <br />
            <span className="gradient-text">A plan that fits.</span>
          </h1>
          <p>
            From your first organised customer account to a busy finance team. Choose the room and
            support your business needs.
          </p>
          <span className={styles.pilot}>
            <span /> PROPOSED LAUNCH PLANS · EARLY ACCESS
          </span>
        </section>
        <PricingPlans />
        <section
          className={`page-container ${styles.foundation}`}
          aria-label="Included in every proposed plan"
        >
          {[
            {
              icon: "invoice",
              title: "The whole document story",
              text: "Connect the agreement, delivery, invoice, and payment record.",
            },
            {
              icon: "bank",
              title: "Your balances, in context",
              text: "Track allocations, partial payments, and the amount still owed.",
            },
            {
              icon: "check",
              title: "Your records stay useful",
              text: "Customer statements and data exports in every proposed plan.",
            },
          ].map((item) => (
            <div key={item.title}>
              <Icon name={item.icon as "invoice" | "bank" | "check"} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </section>
        <section className={styles.comparisonBand} aria-labelledby="compare-title">
          <div className="page-container">
            <div className={styles.heading}>
              <p className="eyebrow">THE DETAILS, SIDE BY SIDE</p>
              <h2 id="compare-title">Find your starting point.</h2>
              <p>All features below describe the proposed product at launch.</p>
            </div>
            <p className={styles.scrollHint}>Scroll across to compare plans on smaller screens.</p>
            <div
              className={styles.tableScroll}
              role="region"
              aria-label="Compare proposed plan features"
              tabIndex={0}
            >
              <table>
                <caption className={styles.srOnly}>
                  Proposed CollectKE plan comparison. All capabilities are planned.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Your workspace</th>
                    {pricingPlans.map((plan) => (
                      <th scope="col" key={plan.id}>
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((group) => (
                    <Fragment key={group.group}>
                      <tr className={styles.group}>
                        <th colSpan={4} scope="colgroup">
                          {group.group}
                        </th>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.label}>
                          <th scope="row">{row.label}</th>
                          {row.values.map((value, index) => (
                            <td key={index}>
                              {value === "—" ? <span aria-label="Not included">—</span> : value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.footnote}>
              ¹ M-Pesa record ingestion requires provider onboarding. Direct bank sync, eTIMS
              submission, SMS, and WhatsApp are not bundled into these proposals.
            </p>
          </div>
        </section>
        <section className={`page-container ${styles.larger}`} aria-labelledby="larger-title">
          <div>
            <p className="eyebrow">A DIFFERENT SCALE OF WORK?</p>
            <h2 id="larger-title">Let’s build the right starting point.</h2>
            <p>
              More users, a larger invoice book, or a complex import? Tell us about the workflow
              before choosing a plan.
            </p>
          </div>
          <Link className="button button-outline" href="/contact">
            Talk about your needs <Icon name="arrow" />
          </Link>
        </section>
        <section className={`page-container ${styles.faq}`} aria-labelledby="pricing-faq-title">
          <div>
            <p className="eyebrow">BEFORE YOU CHOOSE</p>
            <h2 id="pricing-faq-title">
              The practical
              <br />
              <span className="gradient-text">questions.</span>
            </h2>
            <Link href="/faq">
              Explore all questions <Icon name="arrow" width="16" height="16" />
            </Link>
          </div>
          <div>
            {questions.map(([question, answer]) => (
              <details key={question} name="pricing-questions">
                <summary>
                  <h3>{question}</h3>
                  <Icon name="plus" width="17" height="17" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
