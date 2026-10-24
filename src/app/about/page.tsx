import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { EarlyAccess } from "@/components/early-access";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/ui/icon";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About CollectKE — A clearer way from invoice to cash",
  description:
    "Why we’re building CollectKE: a connected invoice-to-cash workspace for Kenyan businesses, bringing documents, payments, and customer follow-up into one clearer picture.",
  openGraph: {
    title: "About CollectKE — Good work deserves a clearer way to get paid.",
    description:
      "Built around the people, records, and conversations behind getting paid in Kenyan businesses.",
    type: "website",
    locale: "en_KE",
  },
};

const principles = [
  {
    number: "01",
    icon: "invoice",
    title: "Keep the context with the work.",
    description:
      "A balance means more when you can see the invoice, supporting documents, and payment history behind it. The next person should have somewhere useful to begin.",
  },
  {
    number: "02",
    icon: "check",
    title: "Make the next step understandable.",
    description:
      "Show the reasons behind a suggestion. Keep payment review and customer follow-up clear enough for the person making the decision.",
  },
  {
    number: "03",
    icon: "clock",
    title: "Respect the customer relationship.",
    description:
      "Following up is a conversation between businesses. Give the team room to check the details, choose the wording, and pause when a discussion is needed.",
  },
  {
    number: "04",
    icon: "bank",
    title: "Start with everyday business.",
    description:
      "Build around the documents, payment records, and responsibilities that already exist. Begin with a focused workflow, then learn what actually helps.",
  },
] as const;

function ConnectedWorkVisual() {
  return (
    <figure
      className={styles.visual}
      aria-label="Concept illustration connecting sales documents, payment records, and customer conversations through CollectKE"
    >
      <div className={styles.visualTop}>
        <span />
        THE WORK BEHIND GETTING PAID
      </div>
      <div className={styles.recordGraph}>
        <div className={styles.inputNodes}>
          {[
            {
              icon: "invoice",
              title: "The agreed work",
              detail: "Quotations / LPOs / Delivery notes",
            },
            {
              icon: "bank",
              title: "The money coming in",
              detail: "Payments / Allocations / Balances",
            },
            {
              icon: "clock",
              title: "The next conversation",
              detail: "Follow-up / Statements / Receipts",
            },
          ].map((item) => (
            <div key={item.title}>
              <Icon name={item.icon as "invoice" | "bank" | "clock"} />
              <p>
                {item.title}
                <small>{item.detail}</small>
              </p>
              <span />
            </div>
          ))}
        </div>
        <div className={styles.graphLines} aria-hidden="true">
          <svg viewBox="0 0 180 280" preserveAspectRatio="none">
            <path d="M0 45C110 45 70 140 180 140M0 140H180M0 235C110 235 70 140 180 140" />
          </svg>
        </div>
        <div className={styles.brandHub}>
          <Brand />
          <span>ONE CONNECTED PICTURE</span>
          <div>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <figcaption>
        <span>Less piecing it together.</span>
        <strong>More knowing what comes next.</strong>
      </figcaption>
      <span className={styles.visualNote}>CONCEPT ILLUSTRATION</span>
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader activeHref="/about" />
      <main id="main-content">
        <section className={`page-container ${styles.hero}`} aria-labelledby="about-title">
          <p className="eyebrow">ABOUT COLLECTKE</p>
          <h1 id="about-title">
            Good work deserves
            <br />
            <span className="gradient-text">a clearer way to get paid.</span>
          </h1>
          <p>
            We’re building a workspace for the people who turn delivered work into collected cash.
            One place to connect the documents, payments, and conversations behind every invoice.
          </p>
          <div className={styles.heroActions}>
            <a className="button button-outline" href="#our-purpose">
              Why we’re building <Icon name="arrow" />
            </a>
            <span>
              <span className="kenya-mark" aria-hidden="true" /> Kenya-first. Business-focused.
            </span>
          </div>
          <ConnectedWorkVisual />
        </section>
        <section
          className={`page-container ${styles.story}`}
          id="our-purpose"
          aria-labelledby="purpose-title"
        >
          <div>
            <p className="eyebrow">THE WORK DOESN’T END AT THE INVOICE</p>
            <h2 id="purpose-title">
              There’s a whole story
              <br />
              <span className="gradient-text">between a sale and its payment.</span>
            </h2>
          </div>
          <div className={styles.storyCopy}>
            <p>
              The quotation records the agreement. The LPO confirms the order. The delivery note
              supports the work. The invoice asks for payment. Then someone needs to make sense of
              what came in and what is still owed.
            </p>
            <p>
              When those details live in different places, the people doing the work have to connect
              them again before they can move forward.
            </p>
            <p>
              CollectKE starts with that gap. We want to bring the context around getting paid into
              one customer record, so owners, finance, and operations can work from a clearer
              picture.
            </p>
            <Link href="/how-it-works">
              Follow the invoice-to-cash journey <Icon name="arrow" width="16" height="16" />
            </Link>
          </div>
        </section>
        <section className={styles.missionBand} aria-labelledby="mission-title">
          <div className={`page-container ${styles.mission}`}>
            <p className={styles.lightEyebrow}>OUR PURPOSE</p>
            <h2 id="mission-title">
              Help businesses spend
              <br />
              less time piecing it together.
              <br />
              <span>More time moving forward.</span>
            </h2>
            <div className={styles.missionBottom}>
              <p>
                A clearer account of what’s happened.
                <br />A more useful starting point for what comes next.
              </p>
              <span>CLARITY / CONTEXT / CONTROL</span>
            </div>
          </div>
        </section>
        <section
          className={`page-container ${styles.principles}`}
          aria-labelledby="principles-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">WHAT GUIDES THE WORK</p>
              <h2 id="principles-title">
                Useful from the start.
                <br />
                <span className="gradient-text">Clear at every step.</span>
              </h2>
            </div>
            <p>
              These are the ideas guiding the workspace we’re building and the choices we want to
              make with the businesses using it.
            </p>
          </div>
          <div className={styles.principleGrid}>
            {principles.map((item) => (
              <article key={item.number}>
                <div className={styles.principleTop}>
                  <span>
                    <Icon name={item.icon} />
                  </span>
                  <small>{item.number} /</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.localBand} aria-labelledby="local-title">
          <div className={`page-container ${styles.local}`}>
            <div>
              <p className="eyebrow">BUILT AROUND KENYAN BUSINESS DAYS</p>
              <h2 id="local-title">
                The paperwork is familiar.
                <br />
                <span className="gradient-text">The picture should be clearer.</span>
              </h2>
              <p>
                We’re starting with Kenyan businesses that sell on invoice: suppliers, contractors,
                and service businesses where getting paid involves documents, payment records, and a
                customer conversation.
              </p>
              <p>
                The aim is a workflow that fits the work your team already recognises, from the LPO
                and delivery note to a bank statement and the balance that remains.
              </p>
              <Link className="button button-outline" href="/who-its-for">
                Meet the people behind the work <Icon name="arrow" />
              </Link>
            </div>
            <div className={styles.localVisual}>
              <div className={styles.localLabel}>
                <span className="kenya-mark" aria-hidden="true" /> THE EVERYDAY DETAILS
              </div>
              <div className={styles.localRecords}>
                {[
                  ["01", "The agreement", "Quotation / Customer LPO"],
                  ["02", "The evidence", "Delivery note / Invoice"],
                  ["03", "The payment record", "Bank CSV / Payment reference"],
                  ["04", "The next step", "Balance / Customer follow-up"],
                ].map(([n, title, detail]) => (
                  <div key={n}>
                    <span>{n}</span>
                    <p>
                      {title}
                      <small>{detail}</small>
                    </p>
                    <Icon name="check" />
                  </div>
                ))}
              </div>
              <p>
                Designed to keep the context together.
                <br />
                <span>Product in development.</span>
              </p>
            </div>
          </div>
        </section>
        <section className={`page-container ${styles.build}`} aria-labelledby="build-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">BUILDING FROM A FOCUSED START</p>
              <h2 id="build-title">
                Listen closely.
                <br />
                <span className="gradient-text">Make the next step useful.</span>
              </h2>
            </div>
            <p>
              Early access is a chance to understand the real work, test a focused starting point,
              and learn with the people doing it.
            </p>
          </div>
          <ol>
            {[
              [
                "01",
                "Start with your workflow.",
                "Understand who handles the documents, how payment records arrive, and where the handover gets stuck.",
              ],
              [
                "02",
                "Choose one useful problem.",
                "Agree on a focused first workflow, the records it needs, and what a useful outcome would look like.",
              ],
              [
                "03",
                "Review what changed.",
                "Compare against the starting point. Keep the feedback, remaining friction, and measured results in view.",
              ],
            ].map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
          <Link className={styles.readLink} href="/case-studies">
            Explore onboarding stories and guides <Icon name="arrow" width="16" height="16" />
          </Link>
        </section>
        <section
          className={`page-container ${styles.invitation}`}
          aria-labelledby="invitation-title"
        >
          <div className={styles.invitationPanel}>
            <div>
              <p className="eyebrow">THE NEXT CHAPTER IS STILL BEING WRITTEN</p>
              <h2 id="invitation-title">
                Bring your everyday work
                <br />
                <span className="gradient-text">into the conversation.</span>
              </h2>
              <p>
                CollectKE is in development. If your team works through invoices, payment records,
                and customer follow-up, we’d like to understand where a clearer workflow could help.
              </p>
              <div className={styles.invitationActions}>
                <EarlyAccess />
                <Link className="button button-outline" href="/contact">
                  Talk to us <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className={styles.statusCard}>
              <span className={styles.status}>
                <i /> PRODUCT IN DEVELOPMENT
              </span>
              <Brand />
              <p>
                Built around your records.
                <br />
                Shaped by your experience.
              </p>
              <div>
                <span>Our starting point</span>
                <strong>One useful workflow.</strong>
              </div>
            </div>
          </div>
        </section>
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
