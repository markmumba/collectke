import { Icon } from "@/components/ui/icon";
import styles from "./who-its-for.module.css";

const roles = [
  {
    number: "01",
    label: "FOR OWNERS",
    title: "See the money. Make the call.",
    description:
      "Get a clear view of outstanding invoices and overdue balances. Know where to focus without waiting for a month-end update.",
    detail: "Your cash position, without the chasing.",
    icon: "bank",
  },
  {
    number: "02",
    label: "FOR FINANCE TEAMS",
    title: "Less detective work. More clarity.",
    description:
      "Review payment matches, keep customer statements in order, and follow up with the full account history in front of you.",
    detail: "The details you need, already connected.",
    icon: "check",
  },
  {
    number: "03",
    label: "FOR OPERATIONS",
    title: "Keep the work and paperwork together.",
    description:
      "Move from quotation and LPO to delivery note and invoice. Keep the supporting documents linked as work moves between teams.",
    detail: "A smoother handover from delivered to invoiced.",
    icon: "invoice",
  },
] as const;

function SharedWorkspace() {
  return (
    <figure
      className={styles.workspaceVisual}
      aria-label="Illustration of owners, finance, and operations sharing a connected customer account"
    >
      <div className={styles.visualContent} aria-hidden="true">
        <div className={styles.visualEyebrow}>
          <span />A SHARED VIEW OF THE WORK
        </div>
        <div className={styles.roleNodes}>
          {[
            { label: "Owner", initials: "OW" },
            { label: "Finance", initials: "FN" },
            { label: "Operations", initials: "OP" },
          ].map((role) => (
            <div className={styles.roleNode} key={role.label}>
              <span>{role.initials}</span>
              <p>{role.label}</p>
            </div>
          ))}
        </div>
        <div className={styles.connector}>
          <span />
        </div>
        <div className={styles.accountCard}>
          <div className={styles.accountBar}>
            <span>
              <Icon name="invoice" width="15" height="15" />
              Customer account
            </span>
            <span className={styles.linkedBadge}>
              <Icon name="check" width="10" height="10" />
              Connected
            </span>
          </div>
          <div className={styles.accountBody}>
            <div className={styles.accountCustomer}>
              <span className={styles.customerAvatar}>MT</span>
              <div>
                <p>Maua Traders</p>
                <span>Every detail, in one place.</span>
              </div>
            </div>
            <div className={styles.accountRow}>
              <span>Supporting documents</span>
              <span>
                <Icon name="check" width="12" height="12" />4 linked
              </span>
            </div>
            <div className={styles.accountRow}>
              <span>Invoice</span>
              <span>INV-0022</span>
            </div>
            <div className={styles.accountRow}>
              <span>Payment</span>
              <span>
                <Icon name="check" width="12" height="12" />
                Matched
              </span>
            </div>
            <div className={styles.accountSummary}>
              <span className={styles.summaryDot} />
              <p>Same account. Same clear picture.</p>
            </div>
          </div>
        </div>
        <div className={styles.sharedNote}>
          <Icon name="plus" width="13" height="13" />
          <span>Fewer gaps between people and paperwork.</span>
        </div>
      </div>
      <figcaption>ILLUSTRATIVE WORKSPACE · SAMPLE DATA</figcaption>
    </figure>
  );
}

export function WhoItsFor() {
  return (
    <section className={styles.section} id="who-its-for" aria-labelledby="audience-title">
      <div className="page-container">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">FOR THE PEOPLE BEHIND THE BUSINESS</p>
            <h2 id="audience-title">
              Different roles.
              <br />
              <span className="gradient-text">One shared picture.</span>
            </h2>
          </div>
          <p className={styles.introduction}>
            Getting paid is a team effort. Give the people doing the work a connected view of what’s
            happened and what needs to happen next.
          </p>
        </div>
        <div className={styles.content}>
          <SharedWorkspace />
          <div className={styles.roles}>
            {roles.map((role) => (
              <article className={styles.role} key={role.number}>
                <div className={styles.roleIcon}>
                  <Icon name={role.icon} width="22" height="22" />
                </div>
                <div className={styles.roleCopy}>
                  <p className={styles.roleLabel}>
                    {role.label}
                    <span>{role.number} /</span>
                  </p>
                  <h3>{role.title}</h3>
                  <p className={styles.description}>{role.description}</p>
                  <p className={styles.roleDetail}>{role.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.businessStrip}>
          <div>
            <span className={styles.businessMark}>
              <Icon name="bank" width="18" height="18" />
            </span>
            <p>Built for real business days.</p>
          </div>
          <ul aria-label="Business types CollectKE is designed for">
            <li>Suppliers &amp; distributors</li>
            <li>Contractors</li>
            <li>Service businesses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
