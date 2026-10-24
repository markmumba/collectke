import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import { WorkflowExplorer } from "@/components/workflow/workflow-explorer";
import styles from "./workflow.module.css";

export const metadata: Metadata = {
  title: "How it works — From first quote to final receipt | CollectKE",
  description:
    "Follow a sample CollectKE workflow: connect sales documents, track what’s due, review incoming payments, and keep the customer balance clear.",
};

const benefits = [
  {
    icon: "invoice",
    title: "The document trail, together.",
    text: "Carry the details from quotation to invoice, with the LPO and delivery evidence close by.",
  },
  {
    icon: "clock",
    title: "The right next step.",
    text: "See what is outstanding, what has been paid, and which customer needs a follow-up.",
  },
  {
    icon: "bank",
    title: "Payment context, in view.",
    text: "Review incoming payment records with the payer, amount, and invoice reference together.",
  },
  {
    icon: "check",
    title: "Your team stays in control.",
    text: "Review suggested allocations and reminder drafts before taking the next step.",
  },
] as const;

function SampleLabel() {
  return <span className={styles.sample}>ILLUSTRATIVE WORKFLOW · SAMPLE DATA</span>;
}

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader activeHref="/how-it-works" />
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="how-title">
          <div className={`page-container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className="eyebrow">HOW COLLECTKE WORKS</p>
              <h1 id="how-title">
                From first quote
                <br />
                to final receipt.
                <br />
                <span className="gradient-text">Keep it connected.</span>
              </h1>
              <p className={styles.description}>
                Bring the documents, payments, and follow-up behind every sale into one workflow.
                Know what’s happened, what’s owed, and what comes next.
              </p>
              <div className={styles.actions}>
                <EarlyAccess />
                <a className="button button-text" href="#the-journey">
                  Follow an invoice <Icon name="arrow" />
                </a>
              </div>
              <p className={styles.note}>Built for Kenyan businesses · Product in development</p>
            </div>
            <figure
              className={styles.heroVisual}
              aria-label="A sample invoice connected to its quotation, LPO, delivery note, payments, and receipt"
            >
              <div className={styles.heroDocument}>
                <div className={styles.miniHeader}>
                  <Icon name="invoice" />
                  <span>THE SALE / INV-0022</span>
                </div>
                <strong>Maua Traders</strong>
                <div className={styles.documentList}>
                  {["Quotation QT-0022", "LPO-0186", "Delivery note DN-0022"].map((label) => (
                    <span key={label}>
                      <Icon name="check" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className={styles.miniAmount}>
                  <span>Invoice total</span>
                  <strong>KES 65,000</strong>
                </div>
              </div>
              <div className={styles.heroConnector} aria-hidden="true">
                <span />
                <Icon name="arrow" />
                <span />
              </div>
              <div className={styles.heroReceipt}>
                <div className={styles.miniHeader}>
                  <Icon name="check" />
                  <span>THE OUTCOME / RECEIPT-0022</span>
                </div>
                <div className={styles.receiptAmount}>
                  <span>
                    Balance remaining<strong>KES 0.00</strong>
                  </span>
                  <span className={styles.paid}>Settled</span>
                </div>
                <p>Documents, allocations, and receipt linked.</p>
              </div>
              <figcaption>
                <SampleLabel />
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className={`page-container ${styles.benefitSection}`}
          aria-label="The work behind getting paid"
        >
          <p className={styles.stripLabel}>BUILT AROUND YOUR EVERYDAY WORK</p>
          <div className={styles.workStrip}>
            {["Quotations", "LPOs", "Delivery notes", "Invoices", "Payments", "Receipts"].map(
              (label) => (
                <span key={label}>{label}</span>
              ),
            )}
          </div>
          <div className={styles.benefits}>
            {benefits.map((item) => (
              <div key={item.title}>
                <span className={styles.benefitIcon}>
                  <Icon name={item.icon} />
                </span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.contextBand} id="prepare" aria-labelledby="prepare-title">
          <div className={`page-container ${styles.split}`}>
            <div className={styles.sectionCopy}>
              <p className="eyebrow">LESS SEARCHING. MORE CONTEXT.</p>
              <h2 id="prepare-title">
                The sale has a story.
                <br />
                <span className="gradient-text">Keep it with the invoice.</span>
              </h2>
              <p>
                An LPO in a message. A delivery note in a folder. The invoice somewhere else. Your
                team should be able to follow the sale without piecing it back together.
              </p>
              <p>
                CollectKE is being built to carry the agreed details forward and keep the supporting
                records connected to the same customer.
              </p>
            </div>
            <figure
              className={styles.paperScene}
              aria-label="Sample invoice INV-0022 for Maua Traders with linked quotation, LPO, and delivery note"
            >
              <div className={styles.paperLinks}>
                <span>
                  <Icon name="check" /> QT-0022
                </span>
                <span>
                  <Icon name="check" /> LPO-0186
                </span>
                <span>
                  <Icon name="check" /> DN-0022
                </span>
              </div>
              <div className={styles.invoicePaper}>
                <div className={styles.paperHeading}>
                  <span>collectke.</span>
                  <span>INVOICE</span>
                </div>
                <div className={styles.invoiceIdentity}>
                  <span>
                    BILL TO<strong>Maua Traders</strong>
                  </span>
                  <span>
                    REFERENCE<strong>INV-0022</strong>
                  </span>
                </div>
                <div className={styles.invoiceItem}>
                  <span>
                    Goods supplied<small>As agreed in QT-0022</small>
                  </span>
                  <strong>KES 65,000</strong>
                </div>
                <div className={styles.paperBalance}>
                  <span>Invoice total</span>
                  <strong>KES 65,000.00</strong>
                </div>
                <p className={styles.paperFoot}>Supporting documents stay with this invoice.</p>
              </div>
              <figcaption>
                <SampleLabel />
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className={`page-container ${styles.controlSection}`}
          id="follow-up"
          aria-labelledby="control-title"
        >
          <div className={styles.controlPanel}>
            <div>
              <p className={styles.lightEyebrow}>CLARITY BEFORE THE NEXT ACTION</p>
              <h2 id="control-title">
                A suggestion helps.
                <br />
                <span>Your team makes the call.</span>
              </h2>
              <p>
                A matching amount is a useful clue. It is not the whole picture. Review the payer,
                reference, and supporting records before confirming an allocation.
              </p>
              <div className={styles.controlFoot}>
                <Icon name="check" />
                <span>Review first. Keep the decision with your team.</span>
              </div>
            </div>
            <div className={styles.controlCards}>
              <div>
                <span>WHEN MONEY COMES IN</span>
                <h3>Review the match.</h3>
                <p>
                  See the suggested invoice and the reasons behind it. Keep unclear payments in the
                  review queue.
                </p>
              </div>
              <div>
                <span>WHEN IT’S TIME TO FOLLOW UP</span>
                <h3>Get the balance right.</h3>
                <p>
                  Check what has already been paid. Review, edit, or pause the reminder before it
                  goes out.
                </p>
              </div>
            </div>
          </div>
        </section>
        <WorkflowExplorer />
        <section
          className={`page-container ${styles.paymentSection}`}
          id="reconcile"
          aria-labelledby="payment-title"
        >
          <div className={styles.paymentHeading}>
            <div>
              <p className="eyebrow">ONE INVOICE. MORE THAN ONE PAYMENT.</p>
              <h2 id="payment-title">
                Every payment moves
                <br />
                <span className="gradient-text">the balance forward.</span>
              </h2>
            </div>
            <p>
              A part payment is progress. Keep each allocation visible, so your team can see the
              amount received and the amount still to collect.
            </p>
          </div>
          <div className={styles.paymentRoute}>
            <div className={styles.routeTop}>
              <span>
                <i /> MAUA TRADERS / INV-0022
              </span>
              <span>ILLUSTRATIVE EXAMPLE</span>
            </div>
            <ol>
              {[
                [
                  "01",
                  "Invoice issued",
                  "KES 65,000",
                  "The agreed sale becomes an invoice with its supporting documents attached.",
                ],
                [
                  "02",
                  "First payment",
                  "KES 25,000",
                  "Review and allocate the payment. KES 40,000 remains outstanding.",
                ],
                [
                  "03",
                  "Final payment",
                  "KES 40,000",
                  "Confirm the second allocation. The invoice balance reaches zero.",
                ],
                [
                  "04",
                  "Receipt connected",
                  "KES 0 left",
                  "Keep the completed payment story with the invoice and customer record.",
                ],
              ].map(([number, title, amount, text]) => (
                <li key={number}>
                  <span className={styles.routeNumber}>{number}</span>
                  <h3>{title}</h3>
                  <strong>{amount}</strong>
                  <p>{text}</p>
                  <Icon name="arrow" />
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.paymentNotes}>
            <p>
              Bank CSV import is the initial approach. M-Pesa connectivity depends on provider
              onboarding. This preview does not move money.
            </p>
            <p>
              Unclear references, part payments, and disputed invoices stay visible for your team to
              review.
            </p>
          </div>
        </section>
        <section className={styles.foundation} aria-labelledby="foundation-title">
          <div className="page-container">
            <div className={styles.sectionCopy}>
              <p className="eyebrow">ONE CONNECTED WORKFLOW</p>
              <h2 id="foundation-title">
                Every step has context.
                <br />
                <span className="gradient-text">Every team can follow it.</span>
              </h2>
              <p>
                From the first document to the final receipt, keep the work around the invoice in
                view.
              </p>
            </div>
            <div className={styles.foundationGrid}>
              {[
                [
                  "invoice",
                  "Connected documents",
                  "Keep quotations, LPOs, delivery evidence, and invoices with the sale they belong to.",
                ],
                [
                  "bank",
                  "Clear payment allocations",
                  "Review payment records, suggested matches, and the balance that remains.",
                ],
                [
                  "clock",
                  "Considered follow-up",
                  "Use the right invoice and outstanding amount. Review wording and pause when a conversation is needed.",
                ],
                [
                  "check",
                  "A shared record",
                  "Help the next teammate understand the documents, payments, and follow-up that came before.",
                ],
              ].map(([icon, title, text]) => (
                <div key={title}>
                  <Icon name={icon as "invoice" | "bank" | "clock" | "check"} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`page-container ${styles.example}`} aria-labelledby="example-title">
          <div className={styles.sectionCopy}>
            <p className="eyebrow">THE COMPLETE PICTURE</p>
            <h2 id="example-title">
              One customer record.
              <br />
              <span className="gradient-text">A story anyone can pick up.</span>
            </h2>
            <p>
              When another teammate takes over, the context should come with the work. See the
              invoice, its payment allocations, and the receipt together.
            </p>
            <Link className="button button-outline" href="/features">
              Explore the workspace features <Icon name="arrow" />
            </Link>
          </div>
          <figure
            className={styles.settlement}
            aria-label="Sample KES 65,000 invoice settled by payments of KES 25,000 and KES 40,000, leaving a zero balance"
          >
            <div className={styles.settlementTop}>
              <Icon name="bank" />
              <span>INV-0022 / PAYMENT ALLOCATIONS</span>
            </div>
            <h3>Every shilling accounted for.</h3>
            <div className={styles.allocation}>
              <span>
                <Icon name="check" /> First payment<small>Reviewed & allocated</small>
              </span>
              <strong>KES 25,000</strong>
            </div>
            <div className={styles.allocation}>
              <span>
                <Icon name="check" /> Final payment<small>Reviewed & allocated</small>
              </span>
              <strong>KES 40,000</strong>
            </div>
            <div className={styles.settledTotal}>
              <span>
                Remaining balance<strong>KES 0.00</strong>
              </span>
              <span className={styles.settledBadge}>
                <Icon name="check" width="14" height="14" /> Settled
              </span>
            </div>
            <div className={styles.receiptLine}>
              <Icon name="invoice" />
              <span>
                RECEIPT-0022<small>Connected to the invoice and customer record</small>
              </span>
            </div>
            <figcaption>
              <SampleLabel />
            </figcaption>
          </figure>
        </section>
        <section className={styles.setupBand} aria-labelledby="setup-title">
          <div className={`page-container ${styles.setup}`}>
            <div>
              <p className={styles.lightEyebrow}>BUILD AROUND THE WAY YOU WORK</p>
              <h2 id="setup-title">
                Start with a workflow.
                <br />
                <span>Shape what comes next.</span>
              </h2>
              <p>
                Tell us how your team handles invoices, payments, and customer follow-up. Early
                access helps us identify a useful starting point together.
              </p>
              <EarlyAccess className="button button-outline" />
            </div>
            <ol>
              {[
                [
                  "01",
                  "Understand your everyday work",
                  "Where records live, how payments arrive, and what gets in the way.",
                ],
                [
                  "02",
                  "Agree on a focused first use case",
                  "Choose a starting point that matters to your team.",
                ],
                [
                  "03",
                  "Discuss fit and availability",
                  "Review what is possible before any onboarding begins.",
                ],
              ].map(([n, t, d]) => (
                <li key={n}>
                  <span>{n}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className={`page-container ${styles.related}`} aria-labelledby="related-title">
          <p className="eyebrow">KEEP EXPLORING</p>
          <h2 id="related-title">
            The work behind getting paid.
            <br />
            <span className="gradient-text">One connected workspace.</span>
          </h2>
          <div>
            {[
              [
                "invoice",
                "Keep the paper trail together.",
                "Explore the documents and records behind each sale.",
                "/features#capabilities",
                "Explore features",
              ],
              [
                "clock",
                "Know the next move.",
                "See overdue balances, a payment suggestion, and a reminder preview.",
                "/#walkthrough",
                "View the walkthrough",
              ],
              [
                "check",
                "Built for the people doing the work.",
                "See how owners, finance, and operations share the picture.",
                "/#who-its-for",
                "Meet the workflow",
              ],
            ].map(([icon, t, d, href, label]) => (
              <Link key={t} href={href}>
                <span className={styles.relatedVisual}>
                  <Icon name={icon as "invoice" | "clock" | "check"} width="38" height="38" />
                  <span>
                    {icon === "invoice"
                      ? "QUOTE → INVOICE"
                      : icon === "clock"
                        ? "BALANCE → NEXT STEP"
                        : "OWNER / FINANCE / OPERATIONS"}
                  </span>
                </span>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className={styles.relatedLink}>
                  {label}
                  <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
