import { Icon } from "@/components/ui/icon";
import styles from "./control-and-clarity.module.css";

const controls = [
  {
    title: "Review the match.",
    description:
      "See why a payment is suggested for an invoice. Keep uncertain matches in review until the details add up.",
    icon: "check",
  },
  {
    title: "Set the follow-up.",
    description:
      "Review reminders, choose the timing, and pause when a customer needs a conversation instead of another message.",
    icon: "clock",
  },
  {
    title: "Keep the history.",
    description:
      "Follow the trail from invoice to payment, with the decisions and supporting records connected to the account.",
    icon: "invoice",
  },
] as const;

const events = [
  {
    title: "Invoice issued",
    description: "KES 48,500 · INV-0024",
    actor: "Finance",
    time: "Day 1",
    icon: "invoice",
  },
  {
    title: "Reminder reviewed and approved",
    description: "Email follow-up · Outstanding balance checked",
    actor: "Finance",
    time: "Day 8",
    icon: "clock",
  },
  {
    title: "Payment match confirmed",
    description: "Amount and invoice reference matched",
    actor: "Finance",
    time: "Day 9",
    icon: "check",
  },
  {
    title: "Receipt created. Balance updated.",
    description: "KES 48,500 received · KES 0 remaining",
    actor: "System",
    time: "Day 9",
    icon: "invoice",
  },
] as const;

export function ControlAndClarity() {
  return (
    <section
      className={`page-container ${styles.section}`}
      id="control"
      aria-labelledby="control-title"
    >
      <div className={styles.frame}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span />
            YOU’RE STILL IN THE LOOP
          </p>
          <h2 id="control-title">
            Automation that helps.
            <br />
            <span>Control that stays yours.</span>
          </h2>
          <p className={styles.introduction}>
            Less manual work should come with more clarity. CollectKE is designed to keep the
            reasons, decisions, and next steps visible to your team.
          </p>
          <div className={styles.controls}>
            {controls.map((control) => (
              <div className={styles.control} key={control.title}>
                <span className={styles.controlIcon}>
                  <Icon name={control.icon} width="18" height="18" />
                </span>
                <div>
                  <h3>{control.title}</h3>
                  <p>{control.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <figure
          className={styles.activity}
          aria-label="Sample activity history for an invoice, showing review decisions and reminders stopping after payment"
        >
          <div className={styles.activityHeader}>
            <div>
              <span className={styles.activityEyebrow}>A CLEAR RECORD OF WHAT HAPPENED</span>
              <h3>Account activity</h3>
            </div>
            <span className={styles.historyIcon}>
              <Icon name="clock" width="20" height="20" />
            </span>
          </div>
          <div className={styles.account}>
            <span className={styles.avatar}>KS</span>
            <p>
              Karibu Supplies<small>Invoice INV-0024</small>
            </p>
            <span className={styles.paidBadge}>
              <Icon name="check" width="11" height="11" />
              Paid
            </span>
          </div>
          <ol className={styles.timeline}>
            {events.map((event, index) => (
              <li className={styles.event} key={event.title}>
                <span
                  className={`${styles.eventIcon} ${index === events.length - 1 ? styles.lastIcon : ""}`}
                >
                  <Icon name={event.icon} width="14" height="14" />
                </span>
                <div className={styles.eventContent}>
                  <div className={styles.eventTitle}>
                    <p>{event.title}</p>
                    <span>{event.time}</span>
                  </div>
                  <p className={styles.eventDescription}>{event.description}</p>
                  <span className={styles.eventActor}>{event.actor}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.stoppedNotice}>
            <span>
              <Icon name="check" width="16" height="16" />
            </span>
            <p>
              Paid means the follow-up stops.
              <small>Future reminders stopped for this invoice.</small>
            </p>
          </div>
          <figcaption>ILLUSTRATIVE ACTIVITY · SAMPLE DATA</figcaption>
        </figure>
      </div>
    </section>
  );
}
