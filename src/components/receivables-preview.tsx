import { Brand } from "@/components/brand";
import { Icon } from "@/components/ui/icon";

const invoices = [
  {
    initials: "KS",
    name: "Karibu Supplies",
    invoice: "INV-0024",
    amount: "48,500",
    status: "Overdue",
    tone: "overdue",
  },
  {
    initials: "NS",
    name: "Nia Studio",
    invoice: "INV-0023",
    amount: "32,000",
    status: "Due today",
    tone: "due",
  },
  {
    initials: "MT",
    name: "Maua Traders",
    invoice: "INV-0022",
    amount: "65,000",
    status: "Paid",
    tone: "paid",
  },
] as const;

export function ReceivablesPreview() {
  return (
    <figure
      className="product-stage"
      id="product-preview"
      aria-label="CollectKE product preview showing sample invoice balances and an M-Pesa payment matched to an invoice"
    >
      <div className="stage-grid" aria-hidden="true" />
      <div className="stage-topline">
        <span className="flex items-center gap-2">
          <span className="status-dot" />
          EVERY SHILLING. ACCOUNTED FOR.
        </span>
        <Icon name="plus" width="14" height="14" />
      </div>
      <div className="dashboard">
        <div className="dashboard-bar">
          <Brand compact />
          <span className="workspace-label">
            Your workspace
            <Icon name="chevron" width="12" height="12" />
          </span>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <p className="dashboard-eyebrow">YOUR BUSINESS, AT A GLANCE</p>
              <h2>Money overview</h2>
            </div>
            <span className="period-label">
              This month
              <Icon name="chevron" width="12" height="12" />
            </span>
          </div>
          <div className="balance-grid">
            <div>
              <span className="balance-label">Total outstanding</span>
              <p className="balance-total">
                <span>KES</span> 284,500<span className="balance-decimal">.00</span>
              </p>
              <span className="balance-caption">Across 12 open invoices</span>
            </div>
            <div className="overdue-balance">
              <span className="balance-label">
                <span className="amber-dot" />
                Overdue
              </span>
              <p>KES 86,500</p>
              <span className="balance-caption">3 invoices to follow up</span>
            </div>
          </div>
          <div className="invoice-list-heading">
            <h3>Recent invoices</h3>
            <span>
              View all <Icon name="arrow" width="13" height="13" />
            </span>
          </div>
          <div className="invoice-list">
            {invoices.map((invoice) => (
              <div key={invoice.invoice} className="invoice-row">
                <span className={`customer-avatar avatar-${invoice.tone}`}>{invoice.initials}</span>
                <div className="customer-details">
                  <span>{invoice.name}</span>
                  <small>{invoice.invoice}</small>
                </div>
                <div className="invoice-amount">
                  <span>KES {invoice.amount}</span>
                  <span className={`invoice-status status-${invoice.tone}`}>{invoice.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="dashboard-footer">
            <span className="flex items-center gap-1.5">
              <Icon name="clock" width="12" height="12" />
              Everything in one place
            </span>
            <span className="dashboard-dots">•••</span>
          </div>
        </div>
      </div>
      <div className="match-notification">
        <span className="match-check">
          <Icon name="check" width="23" height="23" />
        </span>
        <div>
          <p>
            Payment matched<span className="notification-pill">M-PESA</span>
          </p>
          <span>
            KES 65,000 <span className="notification-divider">→</span> INV-0022
          </span>
        </div>
        <span className="notification-time">Just now</span>
      </div>
      <div className="stage-bottomline">
        <span>
          INVOICED <span>→</span> COLLECTED <span>→</span> RECONCILED
        </span>
        <span>01 / 03</span>
      </div>
      <figcaption className="preview-caption">PRODUCT PREVIEW · SAMPLE DATA</figcaption>
    </figure>
  );
}
