import { EarlyAccess } from "@/components/early-access";
import { ReceivablesPreview } from "@/components/receivables-preview";
import { Icon } from "@/components/ui/icon";

const workflow = ["Quotation", "LPO", "Delivery note", "Invoice", "Payment", "Reconciled"];

export function Hero() {
  return (
    <section className="hero-section page-container" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            MADE FOR KENYAN BUSINESSES
          </p>
          <h1 id="hero-title">
            Know what
            <br />
            you’re owed.
            <br />
            <span className="gradient-text">
              Keep cash
              <br className="desktop-break" /> moving.
            </span>
          </h1>
          <p className="hero-description">
            Invoices, payments, and customer follow-up.
            <br className="hidden lg:block" /> One clear picture of your cash flow.
          </p>
          <div className="hero-actions">
            <EarlyAccess />
            <a href="#workflow" className="button button-text">
              See how it works
              <Icon name="arrow" />
            </a>
          </div>
          <p className="hero-note">
            <span className="note-mark">
              <Icon name="check" width="11" height="11" />
            </span>
            Your business. Every outstanding shilling.
          </p>
        </div>
        <ReceivablesPreview />
      </div>
      <div className="workflow-strip" id="workflow-summary">
        <div className="workflow-intro">
          <span className="eyebrow">FROM FIRST QUOTE TO FINAL RECEIPT</span>
          <p>One connected workflow.</p>
        </div>
        <ol className="workflow-steps" aria-label="Your invoice-to-cash workflow">
          {workflow.map((step, index) => (
            <li key={step}>
              <span className={index === workflow.length - 1 ? "step-complete" : ""}>
                {index === workflow.length - 1 ? (
                  <Icon name="check" width="12" height="12" />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}
              </span>
              {step}
              {index < workflow.length - 1 ? (
                <Icon className="step-arrow" name="chevron" width="13" height="13" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
