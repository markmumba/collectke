"use client";

import { useState } from "react";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import { pricingPlans, annualPrice, formatKes } from "@/config/pricing";
import styles from "./pricing.module.css";

export function PricingPlans() {
  const [annual, setAnnual] = useState(false);
  return (
    <section
      className={`page-container ${styles.plansSection}`}
      aria-label="Proposed CollectKE plans"
    >
      <div className={styles.billing}>
        <div role="group" aria-label="Billing period">
          <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>
            Monthly
          </button>
          <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>
            Yearly <span>2 months off</span>
          </button>
        </div>
        <p>Per business. In Kenya shillings.</p>
      </div>
      <div className={styles.cards}>
        {pricingPlans.map((plan) => (
          <article
            className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
            key={plan.id}
          >
            <div className={styles.cardTop}>
              <span>{plan.name}</span>
              {plan.featured ? (
                <small>FOR GROWING TEAMS</small>
              ) : (
                <small>0{pricingPlans.indexOf(plan) + 1}</small>
              )}
            </div>
            <p className={styles.description}>{plan.description}</p>
            <div className={styles.price} aria-live="polite">
              <span>KSh</span>{" "}
              <strong>{formatKes(annual ? annualPrice(plan.monthly) : plan.monthly)}</strong>
              <span>/{annual ? "year" : "month"}</span>
            </div>
            <p className={styles.billed}>
              {annual
                ? `KSh ${formatKes(annualPrice(plan.monthly) / 12)}/month equivalent · billed yearly`
                : "Billed monthly at launch"}
            </p>
            <EarlyAccess
              className={`button ${plan.featured ? "button-primary" : "button-outline"}`}
            />
            <p className={styles.included}>
              {plan.id === "starter" ? "THE EVERYDAY ESSENTIALS" : "MORE ROOM. MORE SUPPORT."}
            </p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" width="15" height="15" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className={styles.priceNote}>
        Proposed launch pricing. All listed capabilities are planned. Prices exclude applicable
        taxes; final inclusions and charges will be confirmed before signup. No payment is taken for
        early access.
      </p>
    </section>
  );
}
