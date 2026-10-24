"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { faqTopics, type FaqItem, type FaqTopic } from "@/content/faq";
import styles from "./faq.module.css";

export function FaqExplorer({ items }: { items: FaqItem[] }) {
  const [topic, setTopic] = useState<FaqTopic | "All questions">("All questions");
  const [query, setQuery] = useState("");
  const term = query.trim().toLocaleLowerCase();
  const results = items.filter(
    (item) =>
      (topic === "All questions" || item.topic === topic) &&
      (!term || `${item.question} ${item.answer} ${item.topic}`.toLocaleLowerCase().includes(term)),
  );
  function reset() {
    setQuery("");
    setTopic("All questions");
  }
  return (
    <section
      className={`page-container ${styles.explorer}`}
      aria-label="Explore frequently asked questions"
    >
      <div className={styles.searchBar}>
        <label htmlFor="faq-search">What would you like to know?</label>
        <div className={styles.searchInput}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>
          <input
            id="faq-search"
            type="search"
            placeholder="Try payments, invoices, or early access"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query ? (
            <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
              <Icon name="close" width="16" height="16" />
            </button>
          ) : null}
        </div>
      </div>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className="eyebrow">BROWSE BY TOPIC</p>
          <div className={styles.topics} role="group" aria-label="Filter questions by topic">
            {(["All questions", ...faqTopics] as const).map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={topic === label}
                onClick={() => setTopic(label)}
              >
                <span>{label}</span>
                <span>
                  {label === "All questions"
                    ? items.length
                    : items.filter((item) => item.topic === label).length}
                </span>
              </button>
            ))}
          </div>
          <div className={styles.sidebarNote}>
            <Icon name="spark" />
            <p>Have a specific workflow in mind?</p>
            <Link href="/contact">
              Let’s hear about it <Icon name="arrow" width="15" height="15" />
            </Link>
          </div>
        </aside>
        <div className={styles.answers}>
          <div className={styles.resultsHeading}>
            <h2>{topic}</h2>
            <p role="status" aria-live="polite">
              {results.length} {results.length === 1 ? "answer" : "answers"}
              {term ? " found" : " to explore"}
            </p>
          </div>
          {results.length ? (
            <div key={`${topic}:${term}`}>
              {results.map((item, index) => (
                <details
                  className={styles.question}
                  key={item.question}
                  name="faq-page-answers"
                  open={index === 0}
                >
                  <summary>
                    <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.question}</h3>
                    <span className={styles.plus}>
                      <Icon name="plus" width="18" height="18" />
                    </span>
                  </summary>
                  <div className={styles.answer}>
                    <span>{item.topic}</span>
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <Icon name="invoice" width="28" height="28" />
              <h3>No answers found just yet.</h3>
              <p>Try a different phrase or explore another topic.</p>
              <button type="button" className="button button-outline" onClick={reset}>
                Show all questions <Icon name="arrow" />
              </button>
            </div>
          )}
          {term && results.length ? (
            <button className={styles.reset} type="button" onClick={reset}>
              Clear filters and show all questions <Icon name="arrow" width="15" height="15" />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
