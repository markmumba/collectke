"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { heroDemoSteps, motionTokens } from "@/config/motion";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/ui/icon";

const invoices = [
  {
    initials: "KS",
    name: "Karibu Supplies",
    invoice: "INV-0024",
    amount: 48500,
    status: "Overdue",
    paidAt: 7,
    processingAt: 6,
  },
  {
    initials: "NS",
    name: "Nia Studio",
    invoice: "INV-0023",
    amount: 32000,
    status: "Due today",
    paidAt: 9,
    processingAt: 8,
  },
  {
    initials: "MT",
    name: "Maua Traders",
    invoice: "INV-0022",
    amount: 65000,
    status: "Awaiting payment",
    paidAt: 11,
    processingAt: 10,
  },
] as const;
const lastStep = heroDemoSteps.length - 1;
const confetti = Array.from({ length: 64 }, (_, index) => ({
  x: (index % 2 ? 1 : -1) * (35 + ((index * 37) % 95)),
  origin: 30 + ((index * 17) % 41),
  duration: 2.7 + (index % 7) * 0.11,
  size: 4 + (index % 3),
  y: -65 - ((index * 29) % 95),
  rotation: (index % 2 ? 1 : -1) * (90 + index * 23),
  color: ["#53d643", "#a7ecc0", "#24d6ce", "#f6d78b"][index % 4],
}));

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function DemoSpinner() {
  return <span className="demo-spinner" aria-hidden="true" />;
}

function BalanceNumber({
  amount,
  stopped,
  reduced,
}: {
  amount: number;
  stopped: boolean;
  reduced: boolean;
}) {
  const value = useMotionValue(0);
  const formatted = useTransform(value, (latest) => Math.round(latest).toLocaleString("en-KE"));
  useEffect(() => {
    if (stopped || reduced) return;
    const animation = animate(value, amount, { duration: 0.7, ease: motionTokens.ease });
    return () => animation.stop();
  }, [amount, stopped, reduced, value]);
  return (
    <m.span className="demo-balance-number">
      {reduced ? amount.toLocaleString("en-KE") : formatted}
    </m.span>
  );
}

export function ReceivablesPreview() {
  const stageRef = useRef<HTMLElement>(null);
  const inView = useInView(stageRef, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );
  const [phase, setPhase] = useState(0);
  const remaining = useRef<number>(heroDemoSteps[0].duration);
  const step = reduceMotion ? lastStep : phase;
  const complete = step === lastStep;
  const stopped = !inView || !pageVisible;
  const reduced = !!reduceMotion;
  const total = invoices.reduce(
    (sum, invoice, index) =>
      sum + (step >= index + 3 && step < invoice.paidAt ? invoice.amount : 0),
    0,
  );
  const open = invoices.filter(
    (invoice, index) => step >= index + 3 && step < invoice.paidAt,
  ).length;
  const overdue = step >= 3 && step < 7 ? 48500 : 0;
  const transition = {
    duration: reduced ? 0 : motionTokens.duration.reveal,
    ease: motionTokens.ease,
  };
  const reveal = (visible: boolean, from = "translateY(14px)") => ({
    initial: false as const,
    animate: { opacity: visible ? 1 : 0, transform: reduced || visible ? "translateY(0px)" : from },
    transition,
    "aria-hidden": !visible,
  });

  useEffect(() => {
    if (reduceMotion || stopped || phase === lastStep) return;
    const started = performance.now();
    let fired = false;
    const timeout = window.setTimeout(() => {
      fired = true;
      remaining.current = heroDemoSteps[phase + 1].duration;
      setPhase(phase + 1);
    }, remaining.current);
    return () => {
      window.clearTimeout(timeout);
      if (!fired)
        remaining.current = Math.max(0, remaining.current - (performance.now() - started));
    };
  }, [phase, stopped, reduceMotion]);

  return (
    <LazyMotion features={domAnimation} strict>
      <figure
        ref={stageRef}
        className="product-stage hero-demo"
        id="product-preview"
        data-demo-step={step}
        data-demo-paused={stopped}
        aria-label="Illustrative CollectKE demo: three invoices arrive, payments are reviewed one by one, and KES 145,500 is reconciled."
        style={{ animationPlayState: stopped ? "paused" : "running" }}
      >
        <div className="stage-grid" aria-hidden="true" />
        <div className="stage-topline">
          <span className="flex items-center gap-2">
            <span className="status-dot" /> EVERY SHILLING. ACCOUNTED FOR.
          </span>
          <Icon name="plus" width="14" height="14" />
        </div>
        <div className="demo-intro" aria-hidden={step >= 2}>
          <m.div
            className="demo-arrival-arrow"
            key="arrow"
            initial={reduced ? false : { opacity: 0, transform: "translateY(-90px)" }}
            animate={{
              opacity: step === 0 ? 1 : 0,
              transform: reduced
                ? "none"
                : step === 0 && inView
                  ? "translateY(0px)"
                  : "translateY(-90px)",
            }}
            transition={{ ...transition, duration: reduced ? 0 : 0.7 }}
          >
            <Icon name="arrow" width="25" height="25" />
          </m.div>
          <m.div
            className="demo-incoming-invoice"
            {...reveal(step === 1, "translateY(-18px) scale(0.96)")}
          >
            <span className="demo-document-icon">
              <Icon name="invoice" width="28" height="28" />
            </span>
            <p>
              A new invoice<small>From delivered work to money owed.</small>
            </p>
            <DemoSpinner />
          </m.div>
        </div>
        <m.div className="dashboard" {...reveal(step >= 2, "translateY(24px) scale(0.97)")}>
          <m.div className="dashboard-bar" {...reveal(step >= 2)}>
            <Brand compact />
            <span className="workspace-label">
              Your workspace <Icon name="chevron" width="12" height="12" />
            </span>
          </m.div>
          <div className="dashboard-content">
            <m.div className="dashboard-heading" {...reveal(step >= 2)}>
              <div>
                <p className="dashboard-eyebrow">YOUR BUSINESS, AT A GLANCE</p>
                <h2>Money overview</h2>
              </div>
              <span className="period-label">
                This month <Icon name="chevron" width="12" height="12" />
              </span>
            </m.div>
            <m.div className="balance-grid" {...reveal(step >= 2)}>
              <div>
                <span className="balance-label">Total outstanding</span>
                <p className="balance-total">
                  <span>KES</span>{" "}
                  <BalanceNumber amount={total} stopped={stopped} reduced={reduced} />
                  <span className="balance-decimal">.00</span>
                </p>
                <span className="balance-caption">
                  Across {open} open {open === 1 ? "invoice" : "invoices"}
                </span>
              </div>
              <div className="overdue-balance">
                <span className="balance-label">
                  <span className="amber-dot" />
                  Overdue
                </span>
                <p>KES {overdue.toLocaleString("en-KE")}</p>
                <span className="balance-caption">
                  {overdue ? "1 invoice to follow up" : "No overdue invoices"}
                </span>
              </div>
            </m.div>
            <m.div className="invoice-list-heading" {...reveal(step >= 3)}>
              <h3>Recent invoices</h3>
              <span>
                View all <Icon name="arrow" width="13" height="13" />
              </span>
            </m.div>
            <div className="invoice-list">
              {invoices.map((invoice, index) => {
                const paid = step >= invoice.paidAt;
                const processing = step === invoice.processingAt;
                return (
                  <m.div
                    key={invoice.invoice}
                    className="invoice-row"
                    data-payment-state={paid ? "paid" : processing ? "processing" : "pending"}
                    {...reveal(step >= index + 3, "translateX(22px)")}
                  >
                    <m.span
                      className="demo-match-highlight"
                      aria-hidden="true"
                      initial={false}
                      animate={{ opacity: paid ? 1 : processing ? 0.5 : 0 }}
                      transition={transition}
                    />
                    <span className={`customer-avatar avatar-${paid ? "paid" : "due"}`}>
                      {invoice.initials}
                    </span>
                    <div className="customer-details">
                      <span>{invoice.name}</span>
                      <small>{invoice.invoice}</small>
                    </div>
                    <div className="invoice-amount">
                      <span>KES {invoice.amount.toLocaleString("en-KE")}</span>
                      <span className={`invoice-status status-${paid ? "paid" : "due"}`}>
                        {processing ? (
                          <>
                            <DemoSpinner /> Reviewing payment
                          </>
                        ) : paid ? (
                          <>
                            <m.span
                              initial={reduced ? false : { opacity: 0, transform: "scale(0.9)" }}
                              animate={{ opacity: 1, transform: "scale(1)" }}
                              transition={transition}
                            >
                              <Icon name="check" width="10" height="10" />
                            </m.span>{" "}
                            Paid
                          </>
                        ) : (
                          invoice.status
                        )}
                      </span>
                    </div>
                  </m.div>
                );
              })}
            </div>
            <m.div className="dashboard-footer" {...reveal(step >= 5)}>
              <span className="flex items-center gap-1.5">
                <Icon name="clock" width="12" height="12" />
                {step >= 11
                  ? "Every invoice paid. Records connected."
                  : "Payments reviewed by your team"}
              </span>
              <span className="dashboard-dots">•••</span>
            </m.div>
          </div>
        </m.div>
        <m.div
          className="match-notification demo-reconciliation"
          {...reveal(step >= 12, "translateY(18px)")}
        >
          <span className="match-check">
            {complete ? <Icon name="check" width="23" height="23" /> : <DemoSpinner />}
          </span>
          <div>
            <p>
              {complete ? "Payments reconciled" : "Reconciling payments"}
              <span className="notification-pill">3 INVOICES</span>
            </p>
            <span>
              KES 145,500 <span className="notification-divider">→</span> Every record connected
            </span>
          </div>
          {complete && !reduced ? (
            <div className="demo-confetti" aria-hidden="true">
              {confetti.map((piece, index) => (
                <m.i
                  key={index}
                  style={{
                    background: piece.color,
                    left: `${piece.origin}%`,
                    width: piece.size,
                    height: piece.size + 3,
                  }}
                  initial={{ opacity: 0, transform: "translate(0px, 0px) rotate(0deg)" }}
                  animate={{
                    opacity: [0, 1, 1, 1, 0],
                    transform: [
                      "translate(0px, 0px) rotate(0deg)",
                      `translate(${piece.x}px, ${piece.y}px) rotate(${piece.rotation}deg)`,
                      `translate(${piece.x * 0.85}px, ${piece.y + 18}px) rotate(${piece.rotation + 50}deg)`,
                      `translate(${piece.x * 1.1}px, ${piece.y + 75}px) rotate(${piece.rotation + 140}deg)`,
                      `translate(${piece.x}px, 90px) rotate(${piece.rotation + 230}deg)`,
                    ],
                  }}
                  transition={{
                    duration: piece.duration,
                    delay: (index % 8) * 0.035,
                    times: [0, 0.18, 0.45, 0.72, 1],
                    ease: [motionTokens.ease, "linear", "linear", "linear"],
                  }}
                />
              ))}
            </div>
          ) : null}
        </m.div>
        <div className="demo-playback">
          <span>{heroDemoSteps[step].label}</span>
        </div>
        <div className="stage-bottomline">
          <span>
            INVOICED <span>→</span> COLLECTED <span>→</span> RECONCILED
          </span>
          <span>
            {String(Math.min(step + 1, heroDemoSteps.length)).padStart(2, "0")} /{" "}
            {heroDemoSteps.length}
          </span>
        </div>
        <figcaption className="preview-caption">PRODUCT PREVIEW · SAMPLE DATA</figcaption>
        <span className="demo-sr-only">
          Three sample invoices total KES 145,500. Each payment is reviewed and marked paid, leaving
          zero outstanding. The final row confirms all three payments are reconciled.
        </span>
      </figure>
    </LazyMotion>
  );
}
