import { Icon } from "@/components/ui/icon";
import { WalkthroughTabs } from "@/components/walkthrough-tabs";
import styles from "./product-walkthrough.module.css";

function ReceivablesPanel() {
  return (
    <div className={styles.panelContent}>
      <div className={styles.panelHeading}>
        <div>
          <span className={styles.panelEyebrow}>YOUR DAY, AT A GLANCE</span>
          <h3>Let’s get a clear picture.</h3>
        </div>
        <span className={styles.datePill}>
          Today
          <Icon name="clock" width="13" height="13" />
        </span>
      </div>
      <div className={styles.metrics}>
        <div>
          <span>Outstanding</span>
          <strong>
            <small>KES</small> 284,500
          </strong>
          <p>12 open invoices</p>
        </div>
        <div>
          <span>Overdue</span>
          <strong>
            <small>KES</small> 86,500
          </strong>
          <p>
            <span className={styles.amberDot} />3 need a follow-up
          </p>
        </div>
      </div>
      <div className={styles.listHeading}>
        <h4>Your follow-up list</h4>
        <span>BY DUE DATE</span>
      </div>
      <div className={styles.receivablesList}>
        {[
          {
            initials: "KS",
            name: "Karibu Supplies",
            ref: "INV-0024",
            amount: "48,500",
            due: "7 days overdue",
          },
          {
            initials: "JT",
            name: "Jirani Traders",
            ref: "INV-0019",
            amount: "24,000",
            due: "4 days overdue",
          },
          {
            initials: "AW",
            name: "Amani Works",
            ref: "INV-0021",
            amount: "14,000",
            due: "2 days overdue",
          },
        ].map((item) => (
          <div className={styles.receivableRow} key={item.ref}>
            <span className={styles.avatar}>{item.initials}</span>
            <span className={styles.customer}>
              {item.name}
              <small>{item.ref}</small>
            </span>
            <span className={styles.rowAmount}>
              KES {item.amount}
              <small>{item.due}</small>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.contextNote}>
        <Icon name="invoice" width="16" height="16" />
        <p>
          Every balance has a paper trail.
          <span>Open an invoice to see its documents, payments, and follow-up history.</span>
        </p>
      </div>
    </div>
  );
}

function MatchingPanel() {
  return (
    <div className={styles.panelContent}>
      <div className={styles.panelHeading}>
        <div>
          <span className={styles.panelEyebrow}>RECONCILIATION INBOX</span>
          <h3>A payment. A clear suggestion.</h3>
        </div>
        <span className={styles.reviewPill}>For review</span>
      </div>
      <div className={styles.incomingPayment}>
        <div>
          <span className={styles.paymentMark}>
            <Icon name="bank" width="21" height="21" />
          </span>
          <p>
            Payment received<small>M-Pesa · Maua Traders</small>
          </p>
          <span className={styles.paymentTime}>Just now</span>
        </div>
        <strong>
          <small>KES</small> 65,000.00
        </strong>
        <span className={styles.paymentRef}>
          PAYMENT REFERENCE <b>INV-0022</b>
        </span>
      </div>
      <div className={styles.suggestionConnector}>
        <span />
        <Icon name="spark" width="15" height="15" />
        <span />
      </div>
      <div className={styles.suggestedInvoice}>
        <div className={styles.suggestionTop}>
          <span>SUGGESTED INVOICE</span>
          <span>
            <Icon name="check" width="12" height="12" />
            Strong match
          </span>
        </div>
        <div className={styles.suggestionCustomer}>
          <span className={styles.avatar}>MT</span>
          <p>
            Maua Traders<small>Invoice INV-0022</small>
          </p>
          <strong>KES 65,000</strong>
        </div>
        <div className={styles.matchReasons}>
          <span>
            <Icon name="check" width="12" height="12" />
            Same amount
          </span>
          <span>
            <Icon name="check" width="12" height="12" />
            Invoice reference matches
          </span>
        </div>
      </div>
      <div className={styles.contextNote}>
        <Icon name="check" width="16" height="16" />
        <p>
          The reasons are right here.
          <span>Review the suggestion before applying the payment to an invoice.</span>
        </p>
      </div>
    </div>
  );
}

function ReminderPanel() {
  return (
    <div className={styles.panelContent}>
      <div className={styles.panelHeading}>
        <div>
          <span className={styles.panelEyebrow}>CUSTOMER FOLLOW-UP</span>
          <h3>A nudge, with the details right.</h3>
        </div>
        <span className={styles.reviewPill}>Draft</span>
      </div>
      <div className={styles.reminderContext}>
        <span className={styles.avatar}>KS</span>
        <p>
          Karibu Supplies<small>INV-0024 · KES 48,500 outstanding</small>
        </p>
        <span className={styles.overduePill}>7 days overdue</span>
      </div>
      <div className={styles.messageCard}>
        <div className={styles.messageTop}>
          <span>REMINDER PREVIEW</span>
          <span>Email</span>
        </div>
        <p>Hi Jane,</p>
        <p>
          A friendly follow-up on invoice <strong>INV-0024</strong> for <strong>KES 48,500</strong>,
          which is now 7 days overdue.
        </p>
        <p>
          Could you let us know when we can expect payment? If you’ve already paid, please share the
          payment reference so we can update your account.
        </p>
        <p>Thank you for your business.</p>
        <div className={styles.attachedInvoice}>
          <Icon name="invoice" width="16" height="16" />
          <span>
            Invoice INV-0024<small>Invoice details and payment instructions</small>
          </span>
          <Icon name="chevron" width="14" height="14" />
        </div>
      </div>
      <div className={styles.contextNote}>
        <Icon name="clock" width="16" height="16" />
        <p>
          You set the tone and the timing.
          <span>Review, edit, or pause reminders before they go out.</span>
        </p>
      </div>
    </div>
  );
}

export function ProductWalkthrough() {
  return (
    <section
      id="walkthrough"
      aria-labelledby="walkthrough-title"
      className={`page-container ${styles.section}`}
    >
      <WalkthroughTabs
        panels={[
          <ReceivablesPanel key="receivables" />,
          <MatchingPanel key="matching" />,
          <ReminderPanel key="reminders" />,
        ]}
      />
    </section>
  );
}
