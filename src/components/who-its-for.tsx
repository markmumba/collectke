import { SharedWorkspace } from "@/components/shared-workspace";
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
