import { ConnectedAccountVisual } from "./connected-account-visual";
import { Brand } from "@/components/brand";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import styles from "./features.module.css";

export function FeaturesHero() {
  return (
    <section className={styles.hero} aria-labelledby="features-title">
      <div className={`page-container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">THE COLLECTKE WORKSPACE</p>
          <h1 id="features-title">
            An invoice is a start.
            <br />
            <span className="gradient-text">
              Connect what
              <br />
              happens next.
            </span>
          </h1>
          <p className={styles.heroDescription}>
            The documents behind the sale. The payment that comes in. The follow-up that moves it
            forward. Bring every part of getting paid into one connected workspace.
          </p>
          <div className={styles.heroActions}>
            <EarlyAccess />
            <a className="button button-outline" href="#capabilities">
              Explore the features
              <Icon name="arrow" width="17" height="17" />
            </a>
          </div>
          <p className={styles.developmentNote}>
            Built for Kenyan businesses · Product in development
          </p>
        </div>
        <ConnectedAccountVisual />
      </div>
    </section>
  );
}

export function ConnectedOverview() {
  return (
    <section
      className={`page-container ${styles.overviewSection}`}
      aria-labelledby="overview-title"
    >
      <div className={styles.overviewPanel}>
        <div>
          <p className={styles.lightEyebrow}>THE WORK AROUND THE INVOICE</p>
          <h2 id="overview-title">
            The invoice is one part.
            <br />
            <span>Getting paid is the whole job.</span>
          </h2>
          <p className={styles.overviewDescription}>
            When the LPO is in a message, the invoice is in a folder, and the payment is in a
            statement, your team has to connect the dots. CollectKE is being built to keep that
            context together from the start.
          </p>
        </div>
        <div className={styles.stackVisual} aria-hidden="true">
          <div className={styles.stackTop}>
            {["Quotations", "LPOs & delivery notes", "Invoices"].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <span className={styles.stackConnector} />
          <div className={styles.stackBrand}>
            <Brand compact />
          </div>
          <span className={styles.stackConnector} />
          <div className={styles.stackBottom}>
            {["Payment matches", "Customer follow-up", "Clear balances"].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
