import { Brand } from "@/components/brand";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import styles from "./features.module.css";

function ConnectedAccountVisual() {
  return (
    <figure
      className={styles.heroVisual}
      aria-label="A customer account connecting documents, invoices, payments, reminders, and statements"
    >
      <div className={styles.visualTop}>
        <span />
        COLLECTKE / ONE CONNECTED WORKSPACE
      </div>
      <div className={styles.accountGraph} aria-hidden="true">
        <svg className={styles.graphLines} viewBox="0 0 500 360" preserveAspectRatio="none">
          <path d="M200 180C290 180 255 34 350 34M200 180C290 180 255 107 350 107M200 180H350M200 180C290 180 255 253 350 253M200 180C290 180 255 326 350 326" />
        </svg>
        <div className={styles.accountHub}>
          <span className={styles.hubLabel}>CUSTOMER ACCOUNT</span>
          <div className={styles.hubIdentity}>
            <span>MT</span>
            <p>
              Maua Traders<small>Every detail linked.</small>
            </p>
          </div>
          <div className={styles.hubBalance}>
            <span>Balance remaining</span>
            <strong>KES 0.00</strong>
          </div>
          <span className={styles.hubState}>
            <Icon name="check" width="11" height="11" />
            Invoice to receipt, connected
          </span>
        </div>
        <div className={styles.graphNodes}>
          {["Documents", "Invoices", "Payments", "Reminders", "Statements"].map((label) => (
            <span key={label}>
              <i />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.visualBottom}>
        {["Your customers", "Your records", "Your next step"].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <figcaption>PRODUCT CONCEPT · SAMPLE DATA</figcaption>
    </figure>
  );
}

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
