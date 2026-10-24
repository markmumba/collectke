"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./workflow-explorer.module.css";

const steps = [
  {
    title: "Connect the sale",
    label: "Documents",
    description:
      "Start with the customer, the quotation, and the agreed work. Keep the LPO and delivery evidence with the invoice they support.",
    checks: [
      "Carry customer and line-item details forward",
      "Keep the document trail in one place",
    ],
    reference: "QT-0022 → LPO-0186 → DN-0022",
    status: "Ready to invoice",
  },
  {
    title: "Set the terms",
    label: "Invoice",
    description:
      "Give the invoice a clear reference, amount, and due date. Your team can see what is owed and when it should arrive.",
    checks: ["Track the outstanding balance", "Give every follow-up the right context"],
    reference: "INV-0022 / KES 65,000",
    status: "Awaiting payment",
  },
  {
    title: "Review money in",
    label: "Payments",
    description:
      "Bring payment records into the workspace and review suggested matches. Check the payer, amount, and reference before applying an allocation.",
    checks: ["See the reasons behind a suggested match", "Keep uncertain payments in review"],
    reference: "KES 25,000 + KES 40,000",
    status: "Review & allocate",
  },
  {
    title: "Close the loop",
    label: "Receipt",
    description:
      "Apply the confirmed payments, update the balance, and keep the receipt connected. The next teammate can see the same complete story.",
    checks: [
      "Keep part payments and balances visible",
      "Connect the receipt to the customer record",
    ],
    reference: "RECEIPT-0022 / KES 0 remaining",
    status: "Settled",
  },
];

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + steps.length - 1) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <section
      className={`page-container ${styles.section}`}
      id="the-journey"
      aria-labelledby="journey-title"
    >
      <div className={styles.heading}>
        <p className="eyebrow">THE JOURNEY, STEP BY STEP</p>
        <h2 id="journey-title">
          Connect the sale once.
          <br />
          <span className="gradient-text">Keep every step connected.</span>
        </h2>
        <p>Follow one invoice from the first document to the final receipt.</p>
      </div>
      <div className={styles.cards} role="tablist" aria-label="Invoice-to-cash stages">
        {steps.map((step, i) => (
          <button
            key={step.label}
            type="button"
            role="tab"
            id={`journey-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`journey-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={active === i ? styles.active : undefined}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            onClick={() => setActive(i)}
            onKeyDown={(event) => onKey(event, i)}
          >
            <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.cardTitle}>{step.title}</span>
            <span className={styles.cardLabel}>{step.label}</span>
            <span className={styles.cardArrow}>
              <Icon name="arrow" />
            </span>
          </button>
        ))}
      </div>
      {steps.map((step, i) => (
        <div
          key={step.label}
          role="tabpanel"
          id={`journey-panel-${i}`}
          aria-labelledby={`journey-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className={styles.panel}
        >
          <div>
            <span className={styles.panelLabel}>
              0{i + 1} / {step.label.toUpperCase()}
            </span>
            <h3>{step.title}.</h3>
            <p>{step.description}</p>
            <ul>
              {step.checks.map((check) => (
                <li key={check}>
                  <Icon name="check" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.record}>
            <span>MAUA TRADERS / ONE CUSTOMER RECORD</span>
            <Icon name={i === 2 ? "bank" : i === 3 ? "check" : "invoice"} width="30" height="30" />
            <strong>{step.reference}</strong>
            <span className={styles.status}>{step.status}</span>
            <small>ILLUSTRATIVE WORKFLOW · SAMPLE DATA</small>
          </div>
        </div>
      ))}
      <div className={styles.progress} aria-hidden="true">
        {steps.map((step, i) => (
          <span key={step.label} className={i <= active ? styles.complete : undefined} />
        ))}
      </div>
      <p className={styles.note}>
        Planned product workflow. Your team reviews payment allocations before balances change.
      </p>
    </section>
  );
}
