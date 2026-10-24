import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/ui/icon";
import { EarlyAccess } from "@/components/early-access";
import styles from "./features.module.css";

const foundations = [
  {
    label: "CONNECTED DOCUMENTS",
    title: "The story behind the invoice.",
    description:
      "From quotation and LPO to delivery evidence and invoice. Keep the records together as work moves forward.",
  },
  {
    label: "CLEAR RECEIVABLES",
    title: "A balance you can explain.",
    description: "Track open amounts, aging, credits, and payments at invoice and customer level.",
  },
  {
    label: "PAYMENT RECONCILIATION",
    title: "Money in, made clearer.",
    description:
      "Review incoming transactions, see suggested matches, and account for partial or combined payments.",
  },
  {
    label: "CUSTOMER FOLLOW-UP",
    title: "The next step, in sight.",
    description:
      "Set reminder rules, review the message, and keep the communication history with the account.",
  },
] as const;

export function FeaturesFoundation() {
  return (
    <section className={styles.foundationSection} aria-labelledby="foundation-title">
      <div className="page-container">
        <div className={styles.foundationHeading}>
          <p className={styles.lightEyebrow}>ONE FOUNDATION. EVERY PART CONNECTED.</p>
          <h2 id="foundation-title">
            One customer record.
            <br />
            <span>Every moving part.</span>
          </h2>
          <p>
            Documents, payments, and follow-up should tell the same story. The workspace is designed
            around a shared account that keeps them connected.
          </p>
        </div>
        <div className={styles.foundationVisual}>
          <figure
            className={styles.rings}
            aria-label="Documents, balances, payments, and follow-up connected around one customer record"
          >
            <div className={styles.outerRing} aria-hidden="true">
              <span>FOLLOW-UP & HISTORY</span>
            </div>
            <div className={styles.middleRing} aria-hidden="true">
              <span>PAYMENTS & MATCHES</span>
            </div>
            <div className={styles.innerRing} aria-hidden="true">
              <span>INVOICES & BALANCES</span>
            </div>
            <div className={styles.coreRing} aria-hidden="true">
              <Brand compact />
              <span>
                ONE CUSTOMER
                <br />
                RECORD
              </span>
            </div>
            <span className={styles.ringDocument} aria-hidden="true">
              <Icon name="invoice" width="18" height="18" />
              Documents
            </span>
            <span className={styles.ringPayment} aria-hidden="true">
              <Icon name="bank" width="18" height="18" />
              Payments
            </span>
            <span className={styles.ringReminder} aria-hidden="true">
              <Icon name="clock" width="18" height="18" />
              Reminders
            </span>
          </figure>
          <div className={styles.foundationCallout}>
            <span className={styles.lightEyebrow}>THE COLLECTKE WORKSPACE</span>
            <h3>
              A clearer account
              <br />
              of every customer.
            </h3>
            <p>
              See the invoice and the documents behind it. See the payment and why it matches. See
              the follow-up and who handled it.
            </p>
            <p>
              The context stays with the account, so your team can move the work forward together.
            </p>
            <span className={styles.foundationNote}>
              <Icon name="check" width="14" height="14" />
              Designed for clarity, with your team in control.
            </span>
          </div>
        </div>
        <div className={styles.foundationCards}>
          {foundations.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    number: "01",
    icon: "invoice",
    title: "Quote-to-invoice documents",
    description:
      "Carry customer and line-item details from quotation to invoice. Attach LPOs and delivery notes so every receivable has supporting records.",
    detail: "Quotations · LPOs · Delivery notes · Invoices",
  },
  {
    number: "02",
    icon: "bank",
    title: "Payment matching & allocations",
    description:
      "Bring in M-Pesa transactions and CSV bank statements. Review suggested matches, split payments across invoices, and track remaining balances.",
    detail: "Partial payments · Combined payments · Review queue",
  },
  {
    number: "03",
    icon: "clock",
    title: "Respectful reminder controls",
    description:
      "Configure follow-up rules and review messages before they go out. Pause when needed, and stop future reminders once a payment clears the invoice.",
    detail: "Review · Approve · Pause · Track delivery",
  },
  {
    number: "04",
    icon: "invoice",
    title: "Aging, statements & receipts",
    description:
      "See what’s current and overdue. Keep customer statements, payment receipts, and exports connected to the same invoice balances.",
    detail: "Receivables aging · Statements · Receipts · Exports",
  },
  {
    number: "05",
    icon: "check",
    title: "Roles & activity history",
    description:
      "Give owners, finance, sales, and viewers access suited to their work. Keep decisions and adjustments visible in the account’s activity history.",
    detail: "Scoped roles · Review decisions · Recorded changes",
  },
  {
    number: "06",
    icon: "invoice",
    title: "Structured, tax-ready records",
    description:
      "Keep invoice numbers, tax details, and issued document snapshots organized. The eTIMS integration route is still under review; automated submission is not yet available.",
    detail: "Tax-ready records · Integration under review",
  },
] as const;

export function FeatureDetails() {
  return (
    <section
      className={styles.detailsSection}
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="page-container">
        <div className={styles.detailsHeading}>
          <div>
            <p className="eyebrow">WHAT WE’RE BUILDING</p>
            <h2 id="capabilities-title">
              The details matter.
              <br />
              <span className="gradient-text">Keep them connected.</span>
            </h2>
          </div>
          <p>
            The first release is focused on the everyday work of getting invoices paid. Here’s the
            scope we’re building toward with early-access businesses.
          </p>
        </div>
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((item) => (
            <article key={item.number}>
              <div className={styles.capabilityTop}>
                <span>
                  <Icon name={item.icon} width="21" height="21" />
                </span>
                <span>{item.number} /</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.capabilityDetail}>{item.detail}</span>
            </article>
          ))}
        </div>
        <p className={styles.scopeNote}>
          <Icon name="plus" width="13" height="13" />
          M-Pesa, messaging, and tax integrations depend on provider setup and approvals. Supported
          capabilities will be confirmed during onboarding.
        </p>
      </div>
    </section>
  );
}

export function EarlyAccessSetup() {
  return (
    <section className={`page-container ${styles.setupSection}`} aria-labelledby="setup-title">
      <div className={styles.setupPanel}>
        <div>
          <p className={styles.lightEyebrow}>START WITH THE WAY YOU WORK</p>
          <h2 id="setup-title">
            A better workflow starts
            <br />
            with your business.
          </h2>
          <p>
            Early access is a chance to shape CollectKE around real invoices, payment references,
            and follow-up routines. We’ll confirm the available capabilities and setup before you
            get started.
          </p>
          <div className={styles.setupActions}>
            <EarlyAccess />
            <Link href="/#walkthrough">
              Explore the workspace
              <Icon name="arrow" width="17" height="17" />
            </Link>
          </div>
        </div>
        <div className={styles.setupChecklist}>
          <span>THE EARLY-ACCESS CONVERSATION</span>
          {[
            {
              title: "Understand your workflow",
              copy: "Your documents, payment channels, and follow-up process.",
            },
            {
              title: "Agree on the first use case",
              copy: "Start with the receivables work that matters most to your team.",
            },
            {
              title: "Confirm the setup together",
              copy: "Review what’s available, what’s needed, and how to get started.",
            },
          ].map((item, index) => (
            <div key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>
                {item.title}
                <small>{item.copy}</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
