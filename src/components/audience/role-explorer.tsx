"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./role-explorer.module.css";

const roles = [
  {
    label: "Owners",
    title: "See where the money stands.",
    description:
      "Start with the outstanding balance and the invoices that need attention. Get the context for your next decision without asking someone to rebuild the picture.",
    checks: ["See outstanding and overdue amounts", "Find the customer behind each balance"],
    heading: "YOUR RECEIVABLES, AT A GLANCE",
    metric: "KES 284,500",
    sub: "Outstanding across 12 sample invoices",
    rows: [
      ["Overdue", "KES 86,500"],
      ["Needs follow-up", "3 invoices"],
      ["Customer records", "Connected"],
    ],
  },
  {
    label: "Finance",
    title: "Work from a clearer account.",
    description:
      "Review incoming payments, suggested matches, and what is still owed. Keep the invoice and payment history together before following up with the customer.",
    checks: ["Review the reasons behind a payment match", "Follow up using the remaining balance"],
    heading: "PAYMENT REVIEW / INV-0022",
    metric: "KES 25,000",
    sub: "Sample payment awaiting allocation review",
    rows: [
      ["Invoice total", "KES 65,000"],
      ["Remaining after allocation", "KES 40,000"],
      ["Next step", "Review match"],
    ],
  },
  {
    label: "Operations",
    title: "Give the next person the context.",
    description:
      "Keep the quotation, LPO, and delivery evidence connected to the sale. Hand the work to finance with its supporting records close by.",
    checks: ["Carry agreed details into the invoice", "Keep delivery evidence with the sale"],
    heading: "THE DOCUMENT TRAIL / MAUA TRADERS",
    metric: "One linked sale",
    sub: "Sample records supporting invoice INV-0022",
    rows: [
      ["Quotation QT-0022", "Accepted"],
      ["Customer LPO-0186", "Attached"],
      ["Delivery note DN-0022", "Linked"],
    ],
  },
];

export function RoleExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKey(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (i + 1) % roles.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (i + roles.length - 1) % roles.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = roles.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }
  return (
    <section className={styles.band} id="your-role" aria-labelledby="roles-title">
      <div className="page-container">
        <div className={styles.heading}>
          <p className="eyebrow">DIFFERENT RESPONSIBILITIES. THE SAME RECORD.</p>
          <h2 id="roles-title">
            Find your role.
            <br />
            <span className="gradient-text">See your part of the picture.</span>
          </h2>
          <p>Explore the planned workspace through the work you do every day.</p>
        </div>
        <div className={styles.tabs} role="tablist" aria-label="Explore by team role">
          {roles.map((role, i) => (
            <button
              key={role.label}
              type="button"
              role="tab"
              id={`role-tab-${i}`}
              aria-controls={`role-panel-${i}`}
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span>0{i + 1}</span>
              <strong>{role.label}</strong>
              <Icon name="arrow" />
            </button>
          ))}
        </div>
        {roles.map((role, i) => (
          <div
            key={role.label}
            id={`role-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`role-tab-${i}`}
            hidden={active !== i}
            tabIndex={0}
            className={styles.panel}
          >
            <div className={styles.copy}>
              <span>FOR {role.label.toUpperCase()}</span>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <ul>
                {role.checks.map((check) => (
                  <li key={check}>
                    <Icon name="check" />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.preview}>
              <span>{role.heading}</span>
              <strong>{role.metric}</strong>
              <p>{role.sub}</p>
              <div>
                {role.rows.map(([label, value]) => (
                  <div className={styles.row} key={label}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <small>PRODUCT CONCEPT · SAMPLE DATA</small>
            </div>
          </div>
        ))}
        <div className={styles.progress} aria-hidden="true">
          {roles.map((r, i) => (
            <span key={r.label} className={active === i ? styles.selected : undefined} />
          ))}
        </div>
        <p className={styles.foot}>
          Roles describe everyday responsibilities. Product permissions and availability will be
          confirmed during onboarding.
        </p>
      </div>
    </section>
  );
}
