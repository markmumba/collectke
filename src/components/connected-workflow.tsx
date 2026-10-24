import { Icon } from "@/components/ui/icon";
import styles from "./connected-workflow.module.css";

const steps = [
  {
    number: "01",
    title: "Quote",
    reference: "QT-0022",
    description: "Start with the details you’ve agreed with your customer.",
    status: "Accepted",
    icon: "invoice",
  },
  {
    number: "02",
    title: "LPO",
    reference: "LPO-0186",
    description: "Keep the customer’s purchase order with the work it belongs to.",
    status: "Attached",
    icon: "invoice",
  },
  {
    number: "03",
    title: "Deliver",
    reference: "DN-0022",
    description: "Link delivery evidence so the paper trail stays complete.",
    status: "Confirmed",
    icon: "check",
  },
  {
    number: "04",
    title: "Invoice",
    reference: "INV-0022",
    description: "Carry the details forward. Issue and send without retyping.",
    status: "Issued",
    icon: "invoice",
  },
  {
    number: "05",
    title: "Collect",
    reference: "M-PESA PAYMENT",
    description: "Follow up with context and see incoming payments in one place.",
    status: "Received",
    icon: "bank",
  },
  {
    number: "06",
    title: "Reconcile",
    reference: "RECEIPT-0022",
    description: "Match the payment, update the balance, and close the loop.",
    status: "Settled",
    icon: "check",
  },
] as const;

const benefits = [
  {
    number: "01",
    title: "Enter it once.",
    description:
      "Customer and line-item details follow the document chain, saving your team repeat work.",
  },
  {
    number: "02",
    title: "Find the context.",
    description:
      "Documents, balances, and payment history stay connected when a customer has a question.",
  },
  {
    number: "03",
    title: "Know what comes next.",
    description:
      "See where an invoice stands, what’s been paid, and which follow-up needs your attention.",
  },
];

export function ConnectedWorkflow() {
  return (
    <section className={styles.section} id="workflow" aria-labelledby="workflow-title">
      <div className={`page-container ${styles.container}`}>
        <div className={styles.heading}>
          <div>
            <p className={`eyebrow ${styles.eyebrow}`}>THE ENTIRE INVOICE-TO-CASH JOURNEY</p>
            <h2 id="workflow-title">
              One customer.
              <br />
              <span>The whole story.</span>
            </h2>
          </div>
          <p className={styles.introduction}>
            A quotation in one folder. An LPO in a message. A payment in a statement. Bring them
            together, so every invoice has a story your whole team can follow.
          </p>
        </div>
        <figure
          className={styles.journey}
          aria-label="Example of a completed document and payment journey for Maua Traders"
        >
          <div className={styles.recordLabel}>
            <span />
            ONE CONNECTED CUSTOMER RECORD
            <span />
          </div>
          <div className={styles.customerRecord}>
            <span className={styles.customerAvatar}>MT</span>
            <div className={styles.customerIdentity}>
              <p>Maua Traders</p>
              <span>Quotation to receipt · All records linked</span>
            </div>
            <div className={styles.customerBalance}>
              <span>Balance remaining</span>
              <strong>
                <small>KES</small> 0.00
              </strong>
            </div>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li className={styles.step} key={step.number}>
                <div className={styles.stepTop}>
                  <span className={styles.stepIcon}>
                    <Icon name={step.icon} width="19" height="19" />
                  </span>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <span className={styles.reference}>{step.reference}</span>
                <p>{step.description}</p>
                <span className={styles.stepStatus}>
                  <Icon name="check" width="12" height="12" />
                  {step.status}
                </span>
              </li>
            ))}
          </ol>
          <figcaption className={styles.caption}>
            <span className={styles.exampleAmount}>
              One invoice. <strong>KES 65,000 collected.</strong> Every step connected.
            </span>
            <span>ILLUSTRATIVE WORKFLOW · SAMPLE DATA</span>
          </figcaption>
        </figure>
        <div className={styles.benefits}>
          {benefits.map((benefit) => (
            <div key={benefit.number}>
              <span className={styles.benefitNumber}>{benefit.number} /</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
