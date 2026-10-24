import Link from "next/link";
import { featuredQuestions } from "@/content/faq";
import { Icon } from "@/components/ui/icon";
import styles from "./page-ending.module.css";

const questions = featuredQuestions;

export function Faq() {
  return (
    <section className={`page-container ${styles.faqSection}`} id="faq" aria-labelledby="faq-title">
      <div className={styles.faqIntro}>
        <p className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p>
        <h2 id="faq-title">
          Good questions.
          <br />
          <span className="gradient-text">Clear answers.</span>
        </h2>
        <p>
          Here’s where CollectKE fits, what’s planned, and what early access means for your
          business.
        </p>
        <Link className={styles.faqLink} href="/faq">
          Explore all questions
          <Icon name="arrow" width="17" height="17" />
        </Link>
      </div>
      <div className={styles.questions}>
        {questions.map((item, index) => (
          <details
            className={styles.question}
            key={item.question}
            name="collectke-faq"
            open={index === 0}
          >
            <summary>
              <span className={styles.questionNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.question}</h3>
              <span className={styles.faqPlus}>
                <Icon name="plus" width="18" height="18" />
              </span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
