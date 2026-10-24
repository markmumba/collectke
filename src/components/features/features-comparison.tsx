"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./features.module.css";

const questions = [
  {
    question: "Who still owes us?",
    connected:
      "See customer balances and overdue invoices in one receivables view, with the supporting records a click away.",
    manual:
      "Open the spreadsheet, check which invoices were sent, and confirm whether the latest payments have been entered.",
    outcome: "A clearer starting point.",
  },
  {
    question: "What was that payment for?",
    connected:
      "Review suggested matches using the payment amount, invoice reference, and customer context. Keep uncertain payments in the review queue.",
    manual:
      "Move between a bank statement, M-Pesa receipts, and invoice files to work out which balance should change.",
    outcome: "The reasons come with the match.",
  },
  {
    question: "Who needs a reminder today?",
    connected:
      "Use a follow-up queue and configured reminder rules. Review the message, pause when needed, and stop future reminders after payment.",
    manual:
      "Check due dates by hand and rely on someone remembering which customer was contacted, when, and what they said.",
    outcome: "Consistent follow-up, with control.",
  },
  {
    question: "Where is the proof of delivery?",
    connected:
      "Keep the quotation, LPO, delivery evidence, and issued invoice linked in the same document chain.",
    manual:
      "Search email threads, shared folders, and messages to reconstruct the paperwork behind an invoice.",
    outcome: "A paper trail you can follow.",
  },
  {
    question: "What if they only paid part?",
    connected:
      "Apply the payment to the right invoice and keep the remaining balance visible. Support partial and combined allocations with a review trail.",
    manual:
      "Update the invoice and customer statement separately, then check that the remaining amounts still agree.",
    outcome: "The balance stays in context.",
  },
  {
    question: "Can the next person pick it up?",
    connected:
      "Give owners, finance, and operations a shared customer record, with roles and activity history to support the handover.",
    manual:
      "Ask the person who last handled the account to explain the documents, payments, and next follow-up.",
    outcome: "Context that stays with the account.",
  },
] as const;

export function FeaturesComparison() {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % questions.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index + questions.length - 1) % questions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = questions.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  const current = questions[active];
  return (
    <section
      className={`page-container ${styles.comparisonSection}`}
      id="comparison"
      aria-labelledby="comparison-title"
    >
      <div className={styles.centerHeading}>
        <p className="eyebrow">SAME BUSINESS. A DIFFERENT WAY TO WORK.</p>
        <h2 id="comparison-title">Two ways to manage receivables.</h2>
        <p>
          Pick a question your team already asks.
          <br />
          See what changes when the records live together.
        </p>
      </div>
      <div className={styles.comparisonGrid}>
        <div
          role="tablist"
          aria-label="Compare receivables workflows"
          aria-orientation="vertical"
          className={styles.questionList}
        >
          {questions.map((item, index) => (
            <button
              key={item.question}
              type="button"
              role="tab"
              id={`${id}-question-${index}`}
              aria-selected={active === index}
              aria-controls={`${id}-answer`}
              tabIndex={active === index ? 0 : -1}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => navigate(event, index)}
              className={active === index ? styles.selectedQuestion : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item.question}</span>
              <span className={styles.questionIndicator}>
                {active === index ? <Icon name="check" width="12" height="12" /> : null}
              </span>
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`${id}-answer`}
          aria-labelledby={`${id}-question-${active}`}
          tabIndex={0}
          className={styles.comparisonAnswers}
        >
          <div className={styles.connectedAnswer}>
            <span className={styles.answerEyebrow}>WITH COLLECTKE / PLANNED WORKFLOW</span>
            <h3>Connected from the start.</h3>
            <p>{current.connected}</p>
            <span className={styles.answerVerdict}>
              <Icon name="check" width="13" height="13" />
              {current.outcome}
            </span>
          </div>
          <div className={styles.manualAnswer}>
            <span className={styles.answerEyebrow}>WITH DISCONNECTED RECORDS</span>
            <h3>Your team joins the dots.</h3>
            <p>{current.manual}</p>
          </div>
        </div>
      </div>
      <div className={styles.comparisonFootnote}>
        <span>Six everyday questions. One connected workspace.</span>
        <a href="#capabilities">
          See what’s included
          <Icon name="arrow" width="17" height="17" />
        </a>
      </div>
    </section>
  );
}
