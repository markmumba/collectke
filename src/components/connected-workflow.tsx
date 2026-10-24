import { WorkflowJourney } from "@/components/workflow-journey";
import styles from "./connected-workflow.module.css";

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
        <WorkflowJourney />
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
