import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import styles from "./page-ending.module.css";
import Link from "next/link";

export function ClosingCta() {
  return (
    <section className={styles.closing} id="early-access" aria-labelledby="closing-title">
      <div className={`page-container ${styles.closingContent}`}>
        <p className={styles.closingEyebrow}>
          <span />
          BUILT AROUND YOUR BUSINESS
        </p>
        <h2 id="closing-title">
          Bring your invoices, payments,
          <br className="hidden md:block" /> and people together.
        </h2>
        <p className={styles.closingDescription}>
          A clearer way from invoice to cash.
          <br />
          Help shape what comes next with CollectKE.
        </p>
        <div className={styles.closingActions}>
          <EarlyAccess className={`button ${styles.lightButton}`} />
          <Link className={styles.exploreLink} href="/#walkthrough">
            Explore the workspace
            <Icon name="arrow" width="17" height="17" />
          </Link>
        </div>
        <p className={styles.availability}>
          <span />
          Early access · Product in development
        </p>
      </div>
    </section>
  );
}
