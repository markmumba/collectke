import { Icon } from "@/components/ui/icon";
import styles from "./product-pillars.module.css";

function InvoiceVisual() {
  return (
    <div className={`${styles.visual} ${styles.invoiceVisual}`}>
      <span className={styles.visualLabel}>A CLEAR PAPER TRAIL</span>
      <div className={styles.sourceDocument}>
        <Icon name="invoice" width="16" height="16" />
        <span>
          Quotation <strong>QT-0024</strong>
        </span>
        <span className={styles.documentCheck}>
          <Icon name="check" width="13" height="13" />
        </span>
      </div>
      <div className={styles.documentConnector} />
      <div className={styles.invoiceDocument}>
        <div className={styles.documentTop}>
          <span className={styles.documentIcon}>
            <Icon name="invoice" width="18" height="18" />
          </span>
          <span className={styles.documentRef}>INVOICE / INV-0024</span>
        </div>
        <p className={styles.businessName}>Karibu Supplies</p>
        <div className={styles.documentAmount}>
          <span>Amount due</span>
          <strong>
            <small>KES</small> 48,500.00
          </strong>
        </div>
        <div className={styles.documentBottom}>
          <span>
            LPO attached <Icon name="check" width="11" height="11" />
          </span>
          <span className={styles.dueBadge}>Due in 7 days</span>
        </div>
      </div>
    </div>
  );
}

function ReminderVisual() {
  return (
    <div className={`${styles.visual} ${styles.reminderVisual}`}>
      <span className={styles.visualLabel}>THE RIGHT NUDGE. THE RIGHT TIME.</span>
      <div className={styles.reminderWindow}>
        <div className={styles.reminderHeader}>
          <span className={styles.contactAvatar}>KS</span>
          <span>
            Karibu Supplies<small>Invoice follow-up</small>
          </span>
          <Icon name="clock" width="17" height="17" />
        </div>
        <div className={styles.messageBubble}>
          <p>
            Hi Jane, a friendly reminder that invoice INV-0024 for <strong>KES 48,500</strong> is
            due tomorrow.
          </p>
          <p>You can view your invoice using the link below. Thank you!</p>
          <span className={styles.invoiceLink}>
            <Icon name="invoice" width="13" height="13" /> View invoice{" "}
            <Icon name="arrow" width="13" height="13" />
          </span>
        </div>
        <div className={styles.approvalRow}>
          <span className={styles.approvalDot} />
          Ready for your review
          <Icon name="check" width="13" height="13" />
        </div>
      </div>
    </div>
  );
}

function PaymentVisual() {
  return (
    <div className={`${styles.visual} ${styles.paymentVisual}`}>
      <span className={styles.visualLabel}>MONEY IN. MYSTERY OUT.</span>
      <div className={styles.paymentReceipt}>
        <div className={styles.receiptHeading}>
          <span className={styles.paymentIcon}>
            <Icon name="bank" width="18" height="18" />
          </span>
          <span>
            Payment received<small>M-Pesa · Maua Traders</small>
          </span>
        </div>
        <strong className={styles.receiptAmount}>
          <small>KES</small> 65,000.00
        </strong>
        <div className={styles.receiptReference}>
          <span>Reference</span>
          <span>INV-0022</span>
        </div>
      </div>
      <div className={styles.matchConnector}>
        <span />
        <Icon name="check" width="14" height="14" />
        <span />
      </div>
      <div className={styles.matchedInvoice}>
        <span className={styles.matchedIcon}>
          <Icon name="invoice" width="17" height="17" />
        </span>
        <span>
          Invoice INV-0022<small>Amount + reference match</small>
        </span>
        <span className={styles.matchedBadge}>
          Matched
          <Icon name="check" width="11" height="11" />
        </span>
      </div>
    </div>
  );
}

const pillars = [
  {
    number: "01",
    label: "INVOICE",
    title: "Every invoice.\nOne clear picture.",
    description:
      "Keep quotations, LPOs, delivery notes, and invoices connected. Know what’s due without piecing it together from spreadsheets.",
    detail: "From quotation to receivable",
    Visual: InvoiceVisual,
  },
  {
    number: "02",
    label: "FOLLOW UP",
    title: "A friendly nudge.\nOne less thing to remember.",
    description:
      "Keep follow-ups consistent with reminders you can review, approve, or pause. Stay on top of payments while keeping customer relationships in mind.",
    detail: "Consistent follow-up, on your terms",
    Visual: ReminderVisual,
  },
  {
    number: "03",
    label: "RECONCILE",
    title: "A payment comes in.\nThe pieces fall into place.",
    description:
      "Bring M-Pesa receipts and bank statement imports together. Review suggested matches and see exactly what’s paid and what’s still outstanding.",
    detail: "Clear matches. Clear balances.",
    Visual: PaymentVisual,
  },
] as const;

export function ProductPillars() {
  return (
    <section
      className={`page-container ${styles.section}`}
      id="product"
      aria-labelledby="product-title"
    >
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">LESS ADMIN. MORE VISIBILITY.</p>
          <h2 id="product-title">
            Less chasing.
            <br />
            <span className="gradient-text">More cash moving.</span>
          </h2>
        </div>
        <p className={styles.introduction}>
          From the invoice you send to the payment you receive. Bring the everyday work of getting
          paid into one connected workspace.
        </p>
      </div>
      <div className={styles.cards}>
        {pillars.map(({ number, label, title, description, detail, Visual }) => (
          <article className={styles.card} key={number}>
            <div aria-hidden="true">
              <Visual />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardEyebrow}>
                <span>{number}</span>
                {label}
              </div>
              <h3>
                {title.split("\n").map((line, index) => (
                  <span key={line}>
                    {index ? <br /> : null}
                    {line}
                  </span>
                ))}
              </h3>
              <p className={styles.description}>{description}</p>
              <p className={styles.cardDetail}>
                <Icon name="check" width="14" height="14" />
                {detail}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.sectionFootnote}>
        <span className={styles.footnoteMark}>
          <Icon name="plus" width="12" height="12" />
        </span>
        <p>Built around your workflow. Designed to keep you in control.</p>
        <span className={styles.previewNote}>ILLUSTRATIVE PRODUCT PREVIEWS</span>
      </div>
    </section>
  );
}
