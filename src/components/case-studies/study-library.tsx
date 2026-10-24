"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { StoryVisual } from "./story-visual";
import type { Study } from "@/content/case-studies";
import styles from "./case-studies.module.css";

type Summary = Pick<
  Study,
  "slug" | "category" | "title" | "description" | "audience" | "readTime" | "visual" | "example"
>;
const categories = ["All", "Onboarding", "Workflow", "Guide"] as const;

function StoryLink({ study, featured = false }: { study: Summary; featured?: boolean }) {
  return (
    <article className={featured ? styles.featured : styles.teaser}>
      <div className={styles.storyCopy}>
        <div className={styles.cardLabels}>
          <span className={`${styles.tag} ${styles[study.category.toLowerCase()]}`}>
            {study.category}
          </span>
          <span>{study.example ? "Illustrative story" : "Practical guide"}</span>
        </div>
        <h2>
          <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
        </h2>
        {featured ? <p>{study.description}</p> : null}
        <span className={styles.meta}>
          {study.audience} · {study.readTime}
        </span>
        <Link className={styles.readLink} href={`/case-studies/${study.slug}`}>
          Read {study.example ? "the story" : "the guide"}
          <Icon name="arrow" width="14" height="14" />
        </Link>
      </div>
      <StoryVisual variant={study.visual} />
    </article>
  );
}

export function StudyLibrary({ studies }: { studies: Summary[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const term = query.trim().toLocaleLowerCase();
  const filtered = studies.filter(
    (study) =>
      (category === "All" || study.category === category) &&
      (!term ||
        `${study.title} ${study.description} ${study.category} ${study.audience}`
          .toLocaleLowerCase()
          .includes(term)),
  );
  return (
    <>
      <div className={`page-container ${styles.controls}`}>
        <div className={styles.filters} role="group" aria-label="Filter resources by topic">
          {categories.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={category === label}
              onClick={() => setCategory(label)}
            >
              {label === "Guide" ? "Guides" : label}
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <span className={styles.srOnly}>Search stories and guides</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories and guides"
          />
          <svg
            aria-hidden="true"
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>
        </label>
      </div>
      <div className={`page-container ${styles.resultsInfo}`} role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
        {category !== "All" ? ` · ${category === "Guide" ? "Guides" : category}` : ""}
        {term ? ` matching “${query.trim()}”` : ""}
      </div>
      {filtered.length ? (
        <>
          <section
            className={`page-container ${styles.stories}`}
            aria-label="Featured stories and guides"
          >
            <StoryLink study={filtered[0]} featured />
            {filtered.length > 1 ? (
              <div className={styles.teasers}>
                {filtered.slice(1, 3).map((study) => (
                  <StoryLink key={study.slug} study={study} />
                ))}
              </div>
            ) : null}
          </section>
          {filtered.length > 3 ? (
            <section className={styles.libraryBand} aria-labelledby="library-title">
              <div className="page-container">
                <div className={styles.libraryHeading}>
                  <p className="eyebrow">A USEFUL STARTING POINT</p>
                  <h2 id="library-title">Notes for a better first workflow.</h2>
                  <p>
                    Practical reading for onboarding, measuring progress, and deciding what comes
                    next.
                  </p>
                </div>
                <div className={styles.resourceGrid}>
                  {filtered.slice(3).map((study) => (
                    <article key={study.slug}>
                      <div className={styles.cardLabels}>
                        <span className={`${styles.tag} ${styles[study.category.toLowerCase()]}`}>
                          {study.category}
                        </span>
                        <span>{study.readTime}</span>
                      </div>
                      <h3>
                        <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                      </h3>
                      <p>{study.description}</p>
                      <Link className={styles.readLink} href={`/case-studies/${study.slug}`}>
                        Read the guide
                        <Icon name="arrow" width="14" height="14" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className={`page-container ${styles.empty}`} aria-labelledby="empty-title">
          <Icon name="invoice" width="28" height="28" />
          <h2 id="empty-title">No matching stories yet.</h2>
          <p>Try another search or explore all stories and guides.</p>
          <button
            type="button"
            className="button button-outline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Show all resources <Icon name="arrow" />
          </button>
        </section>
      )}
    </>
  );
}
