"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./product-walkthrough.module.css";

const steps = [
  {
    title: "See what needs attention.",
    short: "Receivables",
    description:
      "Start with overdue invoices and outstanding balances. Know where to focus before you send the first follow-up.",
    next: "Review a payment match",
  },
  {
    title: "Make sense of money in.",
    short: "Matching",
    description:
      "See which invoice a payment could belong to, with clear reasons for the suggestion. Review it with the context you need.",
    next: "Preview a reminder",
  },
  {
    title: "Follow up with context.",
    short: "Reminders",
    description:
      "Review a friendly reminder with the right invoice and balance already included. Keep the tone personal and the next step clear.",
    next: "Back to the overview",
  },
] as const;

export function WalkthroughTabs({ panels }: { panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index + steps.length - 1) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className={styles.layout}>
      <div className={styles.story}>
        <p className="eyebrow">A LITTLE CLARITY GOES A LONG WAY</p>
        <h2 id="walkthrough-title">
          Open your workspace.
          <br />
          <span className="gradient-text">Know your next move.</span>
        </h2>
        <p className={styles.introduction}>
          A clearer start to the day for the people who keep your business moving.
        </p>
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Explore the CollectKE workspace"
          aria-orientation="vertical"
        >
          {steps.map((step, index) => (
            <button
              key={step.short}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleKey(event, index)}
              className={`${styles.tab} ${active === index ? styles.activeTab : ""}`}
            >
              <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.tabCopy}>
                <span className={styles.tabTitle}>{step.title}</span>
                <span className={styles.shortTitle}>{step.short}</span>
                <span className={styles.tabDescription}>{step.description}</span>
              </span>
              <Icon name="arrow" width="17" height="17" />
            </button>
          ))}
        </div>
      </div>
      <div className={styles.preview}>
        <div className={styles.previewChrome}>
          <span className={styles.windowDots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>YOUR COLLECTKE WORKSPACE</span>
          <span className={styles.previewDot} aria-hidden="true" />
        </div>
        {panels.map((panel, index) => (
          <div
            key={steps[index].short}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            tabIndex={0}
            hidden={active !== index}
            className={styles.panel}
          >
            {panel}
          </div>
        ))}
        <div className={styles.previewFooter}>
          <span>PRODUCT PREVIEW · SAMPLE DATA</span>
          <button type="button" onClick={() => setActive((active + 1) % steps.length)}>
            {steps[active].next}
            <Icon name="arrow" width="15" height="15" />
          </button>
        </div>
      </div>
    </div>
  );
}
