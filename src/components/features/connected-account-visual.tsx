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
import { TravellingSignal } from "@/components/travelling-signal";
import { Icon } from "@/components/ui/icon";
import { motionTokens } from "@/config/motion";
import styles from "./features.module.css";

const moments = [
  {
    title: "One customer account",
    detail: "The documents, payment, and next conversation belong together.",
    status: "Ready to connect",
    duration: 800,
  },
  {
    title: "Documents arrive",
    detail: "Quotation, LPO, delivery note, and invoice records connect to Maua Traders.",
    status: "Connecting documents",
    duration: 1000,
  },
  {
    title: "4 documents linked",
    detail: "The supporting records stay with the customer account.",
    status: "4 documents linked",
    duration: 900,
  },
  {
    title: "The invoice comes in",
    detail: "INV-0022 brings the agreed work into the receivables record.",
    status: "Connecting invoice",
    duration: 1000,
  },
  {
    title: "KES 65,000 outstanding",
    detail: "The issued invoice creates a balance for the team to follow.",
    status: "Invoice issued",
    duration: 1100,
  },
  {
    title: "Follow-up goes out",
    detail: "A reviewed reminder carries the invoice reference and outstanding balance.",
    status: "Sending reviewed reminder",
    duration: 1000,
  },
  {
    title: "Reminder reviewed and sent",
    detail: "A respectful follow-up, with the customer’s account in context.",
    status: "Reminder sent",
    duration: 900,
  },
  {
    title: "Payment comes back in",
    detail: "An M-Pesa payment of KES 65,000 arrives for review.",
    status: "Payment received",
    duration: 1000,
  },
  {
    title: "The team reviews the match",
    detail: "Finance checks the payment against INV-0022 before confirming it.",
    status: "Reviewing payment match",
    duration: 1100,
  },
  {
    title: "Payment matched. Balance cleared.",
    detail: "The confirmed KES 65,000 payment settles the invoice.",
    status: "Payment reconciled",
    duration: 1100,
  },
  {
    title: "The statement goes out",
    detail: "The updated statement carries the invoice and its matched payment.",
    status: "Preparing statement",
    duration: 1000,
  },
  {
    title: "Account up to date",
    detail: "Documents, invoice, payment, and follow-up tell one connected story.",
    status: "Account up to date",
    duration: 900,
  },
  {
    title: "Every detail linked",
    detail: "One customer. Every part of getting paid, connected.",
    status: "Invoice to receipt, connected",
    duration: 0,
  },
] as const;
const nodes = [
  { label: "Documents", start: 1, end: 2, outward: false },
  { label: "Invoices", start: 3, end: 4, outward: false },
  { label: "Payments", start: 7, end: 9, outward: false },
  { label: "Reminders", start: 5, end: 6, outward: true },
  { label: "Statements", start: 10, end: 11, outward: true },
] as const;
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function AccountBalance({
  amount,
  stopped,
  reduced,
}: {
  amount: number;
  stopped: boolean;
  reduced: boolean;
}) {
  const value = useMotionValue(0);
  const text = useTransform(value, (n) =>
    Math.round(n).toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  );
  useEffect(() => {
    if (reduced || stopped) return;
    const control = animate(value, amount, { duration: 0.7, ease: motionTokens.ease });
    return () => control.stop();
  }, [amount, stopped, reduced, value]);
  return (
    <m.span>{reduced ? amount.toLocaleString("en-KE", { minimumFractionDigits: 2 }) : text}</m.span>
  );
}

export function ConnectedAccountVisual() {
  const ref = useRef<HTMLElement>(null);
  const graph = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const entered = useInView(ref, { once: true, amount: 0.25 });
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = !!useReducedMotion();
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );
  const [phase, setPhase] = useState(0);
  const [stopAt, setStopAt] = useState(12);
  const [run, setRun] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [routes, setRoutes] = useState({
    width: 1,
    height: 1,
    paths: [] as { out: string; incoming: string }[],
  });
  const remaining = useRef<number>(moments[0].duration);
  const generation = useRef(0);
  const step = reduced ? (selected === null ? 12 : nodes[selected].end) : phase;
  const finished = step >= stopAt;
  const stopped = !inView || !pageVisible;
  const active = reduced
    ? selected
    : nodes.findIndex((node) => step >= node.start && step <= node.end);
  const activeIndex = active === null || active < 0 ? null : active;
  const amount = step >= 4 && step < 9 ? 65000 : 0;
  const transition = {
    duration: reduced ? 0 : motionTokens.duration.reveal,
    ease: motionTokens.ease,
  };

  useEffect(() => {
    const root = graph.current,
      account = hub.current;
    if (!root || !account) return;
    function measure() {
      if (!root || !account) return;
      const x = account.offsetLeft + account.offsetWidth - 1;
      const y = account.offsetTop;
      const paths = nodeRefs.current.map((node) => {
        if (!node) return { out: "", incoming: "" };
        const parent = node.parentElement!;
        const endX = parent.offsetLeft + node.offsetLeft + 1;
        const endY = parent.offsetTop + node.offsetTop + node.offsetHeight / 2;
        const curve = (endX - x) * 0.55;
        return {
          out: `M${x} ${y} C${x + curve} ${y} ${endX - curve} ${endY} ${endX} ${endY}`,
          incoming: `M${endX} ${endY} C${endX - curve} ${endY} ${x + curve} ${y} ${x} ${y}`,
        };
      });
      setRoutes({ width: root.offsetWidth, height: root.offsetHeight, paths });
    }
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(account);
    nodeRefs.current.forEach((node) => node && observer.observe(node));
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || stopped || phase >= stopAt) return;
    const started = performance.now();
    const revision = generation.current;
    let fired = false;
    const timeout = window.setTimeout(() => {
      fired = true;
      remaining.current = moments[phase + 1].duration;
      setPhase(phase + 1);
    }, remaining.current);
    return () => {
      clearTimeout(timeout);
      if (!fired && revision === generation.current)
        remaining.current = Math.max(0, remaining.current - (performance.now() - started));
    };
  }, [phase, stopAt, stopped, reduced, run]);

  function replayMoment(index: number) {
    generation.current += 1;
    remaining.current = moments[nodes[index].start].duration;
    setPhase(nodes[index].start);
    setStopAt(nodes[index].end);
    setSelected(index);
    setRun((n) => n + 1);
  }
  const pulse = activeIndex === null ? null : routes.paths[activeIndex];

  return (
    <LazyMotion features={domAnimation} strict>
      <figure
        ref={ref}
        className={styles.heroVisual}
        data-features-step={step}
        data-features-paused={stopped || finished}
        aria-label="Illustrative connected account demo: documents and an invoice arrive, a reminder goes out, a KES 65,000 payment is matched, and an updated statement completes the account."
      >
        <div className={styles.visualTop}>
          <span />
          COLLECTKE / ONE CONNECTED WORKSPACE
        </div>
        <div ref={graph} className={styles.accountGraph}>
          <svg
            className={styles.graphLines}
            viewBox={`0 0 ${routes.width} ${routes.height}`}
            aria-hidden="true"
          >
            {routes.paths.map((route, index) => (
              <path key={index} data-feature-route={nodes[index].label} d={route.out} />
            ))}
            {!reduced && pulse && activeIndex !== null ? (
              <TravellingSignal
                key={`${run}-${activeIndex}`}
                path={nodes[activeIndex].outward ? pulse.out : pulse.incoming}
                stopped={stopped}
              />
            ) : null}
          </svg>
          <m.div
            ref={hub}
            className={styles.accountHub}
            initial={false}
            animate={{
              opacity: entered ? 1 : 0,
              transform:
                reduced || entered
                  ? "translateY(-50%) translateX(0px)"
                  : "translateY(-50%) translateX(-12px)",
            }}
            transition={transition}
          >
            <span className={styles.hubLabel}>CUSTOMER ACCOUNT</span>
            <div className={styles.hubIdentity}>
              <span>MT</span>
              <p>
                Maua Traders
                <small>
                  {step >= 11
                    ? "Every detail linked."
                    : step >= 2
                      ? "4 supporting documents linked."
                      : "One connected customer."}
                </small>
              </p>
            </div>
            <div className={styles.hubBalance}>
              <span>Balance remaining</span>
              <strong>
                KES <AccountBalance key={run} amount={amount} stopped={stopped} reduced={reduced} />
              </strong>
            </div>
            <span className={styles.hubState}>
              {step === 8 ? (
                <span
                  className="demo-spinner"
                  style={{ animationPlayState: stopped ? "paused" : "running" }}
                />
              ) : (
                <Icon name={step === 0 ? "clock" : "check"} width="11" height="11" />
              )}
              {moments[step].status}
            </span>
          </m.div>
          <div
            className={styles.graphNodes}
            role="group"
            aria-label="Replay a connected-account feature"
          >
            {nodes.map((node, index) => (
              <m.button
                ref={(element) => {
                  nodeRefs.current[index] = element;
                }}
                type="button"
                key={node.label}
                className={styles.graphNode}
                aria-label={`Replay ${node.label} connection`}
                aria-pressed={activeIndex === index}
                onClick={() => replayMoment(index)}
                initial={false}
                animate={{
                  opacity: entered && (step >= 1 || reduced) ? 1 : 0,
                  transform: reduced || entered ? "translateX(0px)" : "translateX(12px)",
                }}
                transition={{ ...transition, delay: reduced ? 0 : index * motionTokens.stagger }}
              >
                <i />
                {node.label}
              </m.button>
            ))}
          </div>
        </div>
        <div className={styles.momentDetail}>
          <div>
            <p>{moments[step].title}</p>
            <span>{moments[step].detail}</span>
          </div>
        </div>
        <div className={styles.visualBottom}>
          {["Your customers", "Your records", "Your next step"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <figcaption>PRODUCT CONCEPT · SAMPLE DATA</figcaption>
      </figure>
    </LazyMotion>
  );
}
