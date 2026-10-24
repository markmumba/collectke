import { Icon } from "@/components/ui/icon";
import type { Study } from "@/content/case-studies";
import styles from "./case-studies.module.css";

export function StoryVisual({ variant }: { variant: Study["visual"] }) {
  return (
    <div className={`${styles.visual} ${styles[variant]}`} aria-hidden="true">
      <span className={styles.visualEyebrow}>COLLECTKE / THE WORK, CONNECTED</span>
      {variant === "account" ? (
        <>
          <div className={styles.visualAccount}>
            <div>
              <span>MT</span>
              <p>
                Maua Traders<small>ONE CONNECTED CUSTOMER RECORD</small>
              </p>
            </div>
            <span>
              Outstanding balance<strong>KES 40,000</strong>
            </span>
            <div className={styles.visualRows}>
              <span>
                Supporting documents <Icon name="check" />
              </span>
              <span>
                Payment allocation <Icon name="check" />
              </span>
              <span>
                Next follow-up <Icon name="clock" />
              </span>
            </div>
          </div>
          <span className={styles.visualChip}>
            <Icon name="check" /> A clearer first account
          </span>
        </>
      ) : variant === "payments" ? (
        <>
          <div className={styles.moneyCard}>
            <Icon name="bank" />
            <span>INV-0022 / PART PAYMENT</span>
            <strong>KES 25,000</strong>
            <span>Reviewed against a KES 65,000 invoice</span>
          </div>
          <div className={styles.moneyBalance}>
            <span>Remaining balance</span>
            <strong>KES 40,000</strong>
          </div>
        </>
      ) : (
        <div className={styles.visualStack}>
          {(variant === "documents"
            ? ["Quotation / QT-0022", "LPO / LPO-0186", "Delivery / DN-0022", "Invoice / INV-0022"]
            : variant === "baseline"
              ? [
                  "Choose a task",
                  "Record the starting point",
                  "Repeat the check",
                  "Review the difference",
                ]
              : variant === "review"
                ? [
                    "Check the account",
                    "Hear from the team",
                    "Compare the baseline",
                    "Agree the next step",
                  ]
                : [
                    "Your documents",
                    "Your payment records",
                    "Your follow-up",
                    "One focused workflow",
                  ]
          ).map((label, i) => (
            <div key={label}>
              <span>0{i + 1}</span>
              <p>{label}</p>
              <Icon name="check" />
            </div>
          ))}
        </div>
      )}
      <span className={styles.visualCaption}>
        {variant === "account" || variant === "payments" || variant === "documents"
          ? "ILLUSTRATIVE WORKFLOW · SAMPLE DATA"
          : "A PRACTICAL GUIDE FOR EARLY ACCESS"}
      </span>
    </div>
  );
}
