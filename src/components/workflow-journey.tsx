"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
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
import { journeySteps as steps } from "@/content/workflow-journey";
import { motionTokens } from "@/config/motion";
import styles from "./connected-workflow.module.css";

const documents = [
  {
    type: "Quotation",
    detail: "Supply of goods · Agreed quotation",
    field: "Quoted amount",
    value: "KES 65,000",
    note: "The agreed details start here. This quotation stays with the customer’s order.",
  },
  {
    type: "Customer purchase order",
    detail: "Customer LPO · Linked to QT-0022",
    field: "Order value",
    value: "KES 65,000",
    note: "The customer’s purchase order is attached to the same account and quotation.",
  },
  {
    type: "Delivery note",
    detail: "Delivery evidence · Linked to LPO-0186",
    field: "Delivery status",
    value: "Confirmed",
    note: "The delivery record supports the work behind the invoice.",
  },
  {
    type: "Customer invoice",
    detail: "Issued invoice · Linked to DN-0022",
    field: "Invoice amount",
    value: "KES 65,000",
    note: "Issuing this invoice creates a KES 65,000 receivable on the customer account.",
  },
  {
    type: "Payment record",
    detail: "M-Pesa payment · Pending reconciliation",
    field: "Amount received",
    value: "KES 65,000",
    note: "The payment has arrived. The invoice balance stays open until the team confirms the match.",
  },
  {
    type: "Reconciled receipt",
    detail: "Payment matched · Linked to INV-0022",
    field: "Balance remaining",
    value: "KES 0.00",
    note: "The confirmed match settles the invoice and completes the connected record.",
  },
] as const;
const finalPhase = 14;
function duration(phase: number) {
  return phase < 2 ? 800 : phase % 2 === 0 ? 950 : 700;
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function JourneyBalance({
  amount,
  stopped,
  reduced,
}: {
  amount: number;
  stopped: boolean;
  reduced: boolean;
}) {
  const value = useMotionValue(0);
  const formatted = useTransform(value, (n) =>
    Math.round(n).toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  );
  useEffect(() => {
    if (stopped || reduced) return;
    const control = animate(value, amount, { duration: 0.7, ease: motionTokens.ease });
    return () => control.stop();
  }, [amount, stopped, reduced, value]);
  return (
    <m.span>
      {reduced ? amount.toLocaleString("en-KE", { minimumFractionDigits: 2 }) : formatted}
    </m.span>
  );
}

export function WorkflowJourney() {
  const ref = useRef<HTMLElement>(null);
  const diagram = useRef<HTMLDivElement>(null);
  const record = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLLIElement | null)[]>([]);
  const inView = useInView(ref, { amount: 0.08 });
  const entered = useInView(ref, { amount: 0.08, once: true });
  const reduced = !!useReducedMotion();
  const visiblePage = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );
  const [phase, setPhase] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [paths, setPaths] = useState<{
    width: number;
    height: number;
    lines: { d: string; length: number }[];
  }>({ width: 1, height: 1, lines: [] });
  const remaining = useRef(duration(0));
  const panelId = useId();
  const current = reduced ? finalPhase : phase;
  const complete = current === finalPhase;
  const active = Math.max(0, Math.min(5, Math.floor((current - 2) / 2)));
  const completed = complete ? 6 : Math.max(0, Math.floor((current - 1) / 2));
  const focused = selected ?? active;
  const cardReady = current < 2 || complete || visibleCards.includes(active);
  const stopped = selected !== null || !inView || !visiblePage || !cardReady;
  const balance = current >= 9 && current < 13 ? 65000 : 0;
  const transition = {
    duration: reduced ? 0 : motionTokens.duration.reveal,
    ease: motionTokens.ease,
  };

  useEffect(() => {
    const root = diagram.current;
    if (!root || !record.current) return;
    function measure() {
      if (!root || !record.current) return;
      const box = root.getBoundingClientRect();
      const customer = record.current.getBoundingClientRect();
      const x = record.current.offsetLeft + customer.width / 2;
      const y = record.current.offsetTop + customer.height;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const lines = cards.current.map((card) => {
        if (!card) return { d: "", length: 0 };
        const rect = card.getBoundingClientRect();
        const list = card.parentElement!;
        const left = list.offsetLeft + card.offsetLeft;
        const top = list.offsetTop + card.offsetTop;
        const endX = mobile ? left : left + rect.width / 2;
        const endY = mobile ? top + 36 : top;
        const points = mobile
          ? [
              [x, y],
              [x, y + 14],
              [3, y + 14],
              [3, endY],
              [endX, endY],
            ]
          : [
              [x, y],
              [x, y + 35],
              [endX, y + 35],
              [endX, endY],
            ];
        return {
          d: mobile
            ? `M${x} ${y} V${y + 14} H3 V${endY} H${endX}`
            : `M${x} ${y} V${y + 35} H${endX} V${endY}`,
          length: points.reduce(
            (total, point, index) =>
              index === 0
                ? 0
                : total +
                  Math.hypot(point[0] - points[index - 1][0], point[1] - points[index - 1][1]),
            0,
          ),
        };
      });
      setPaths({ width: box.width, height: box.height, lines });
    }
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(record.current);
    cards.current.forEach((card) => card && observer.observe(card));
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        setVisibleCards((previous) => {
          const next = new Set(previous);
          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.journeyIndex);
            if (entry.isIntersecting) next.add(index);
            else next.delete(index);
          });
          return [...next];
        }),
      { threshold: 0.35 },
    );
    cards.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || stopped || phase === finalPhase) return;
    const start = performance.now();
    let fired = false;
    const timeout = window.setTimeout(() => {
      fired = true;
      remaining.current = duration(phase + 1);
      setPhase(phase + 1);
    }, remaining.current);
    return () => {
      clearTimeout(timeout);
      if (!fired) remaining.current = Math.max(0, remaining.current - (performance.now() - start));
    };
  }, [phase, stopped, reduced]);

  return (
    <LazyMotion features={domAnimation} strict>
      <figure
        ref={ref}
        className={styles.journey}
        data-journey-phase={current}
        data-journey-paused={stopped}
        aria-label="Illustrative quotation-to-receipt journey for Maua Traders"
      >
        <div className={styles.controls}>
          <span>
            {selected !== null
              ? `Inspecting ${steps[selected].title}`
              : complete
                ? "Every step connected."
                : !cardReady
                  ? "Scroll to follow the next stage"
                  : current < 2
                    ? "One customer. One connected record."
                    : `${steps[active].title} · ${completed > active ? steps[active].status : "Connecting the record"}`}
          </span>
          {reduced ? <span>Explore each stage below</span> : null}
        </div>
        <div ref={diagram} className={styles.diagram}>
          <svg
            className={styles.connections}
            viewBox={`0 0 ${paths.width} ${paths.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {paths.lines.map((line, index) => (
              <m.path
                key={`base-${index}`}
                d={line.d}
                fill="none"
                stroke="#62978970"
                strokeWidth="1"
                initial={false}
                animate={{ pathLength: entered && current >= 1 ? 1 : 0 }}
                transition={{ duration: reduced ? 0 : 0.7, ease: motionTokens.ease }}
              />
            ))}
            {!reduced &&
            paths.lines[focused]?.d &&
            (selected !== null || (current >= 2 && !complete)) ? (
              <TravellingSignal
                key={selected !== null ? `inspect-${selected}` : `journey-${active}`}
                path={paths.lines[focused].d}
                trailScale={Math.min(1, 180 / paths.lines[focused].length)}
                stopped={selected !== null ? !inView || !visiblePage : stopped}
              />
            ) : null}
          </svg>
          <div className={styles.recordLabel}>
            <span />
            ONE CONNECTED CUSTOMER RECORD
            <span />
          </div>
          <m.div
            ref={record}
            className={styles.customerRecord}
            initial={false}
            animate={{
              opacity: entered ? 1 : 0,
              transform: reduced || entered ? "translateY(0px)" : "translateY(16px)",
            }}
            transition={transition}
          >
            <span className={styles.customerAvatar}>MT</span>
            <div className={styles.customerIdentity}>
              <p>Maua Traders</p>
              <span>
                {complete
                  ? "Quotation to receipt · Every step connected"
                  : "Quotation to receipt · Follow the record"}
              </span>
            </div>
            <div className={styles.customerBalance}>
              <span>Balance remaining</span>
              <strong>
                <small>KES</small>{" "}
                <JourneyBalance amount={balance} stopped={stopped} reduced={reduced} />
              </strong>
            </div>
          </m.div>
          <ol className={styles.steps}>
            {steps.map((step, index) => {
              const done = index < completed;
              const highlighted =
                selected === index || (selected === null && index === active && current >= 2);
              return (
                <m.li
                  ref={(element) => {
                    cards.current[index] = element;
                  }}
                  data-journey-index={index}
                  data-state={
                    done ? "complete" : current >= 2 && index === active ? "active" : "pending"
                  }
                  className={styles.step}
                  key={step.number}
                  initial={false}
                  animate={{
                    opacity: (current >= 2 && index <= active) || selected === index ? 1 : 0.75,
                    transform:
                      !reduced && highlighted && !complete ? "translateY(-5px)" : "translateY(0px)",
                  }}
                  transition={transition}
                >
                  <m.span
                    className={styles.cardGlow}
                    aria-hidden="true"
                    initial={false}
                    animate={{ opacity: highlighted || complete ? 1 : 0 }}
                    transition={transition}
                  />
                  <button
                    className={styles.inspectButton}
                    type="button"
                    aria-label={`Inspect ${step.title} document`}
                    aria-pressed={selected === index}
                    aria-controls={panelId}
                    onClick={(event) => {
                      const deselect = selected === index;
                      setSelected(deselect ? null : index);
                      if (deselect) return;
                      if (window.matchMedia("(max-width: 767px)").matches) {
                        preview.current?.scrollIntoView({
                          behavior: reduced || event.detail === 0 ? "instant" : "smooth",
                          block: "center",
                        });
                      }
                    }}
                  />
                  <div className={styles.stepTop}>
                    <span className={styles.stepIcon}>
                      <Icon name={step.icon} width="19" height="19" />
                    </span>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <span className={styles.reference}>{step.reference}</span>
                  <p>{step.description}</p>
                  <span className={styles.stepStatus}>
                    {done ? (
                      <>
                        <Icon name="check" width="12" height="12" />
                        {step.status}
                      </>
                    ) : current >= 2 && active === index ? (
                      <>
                        <span className={styles.connectingDot} />
                        Connecting
                      </>
                    ) : (
                      "Awaiting this stage"
                    )}
                  </span>
                </m.li>
              );
            })}
          </ol>
        </div>
        <div
          id={panelId}
          ref={preview}
          className={styles.documentPreview}
          role="region"
          aria-labelledby={`${panelId}-title`}
        >
          <div className={styles.documentIcon}>
            <Icon name={steps[focused].icon} width="25" height="25" />
          </div>
          <div className={styles.documentCopy}>
            <span className={styles.documentLabel}>
              ILLUSTRATIVE DOCUMENT · {steps[focused].reference}
            </span>
            <h4 id={`${panelId}-title`}>
              {documents[focused].type}
              <span>Maua Traders</span>
            </h4>
            <p>{documents[focused].detail}</p>
          </div>
          <div className={styles.documentValue}>
            <span>{documents[focused].field}</span>
            <strong>{documents[focused].value}</strong>
          </div>
          <p className={styles.documentNote}>{documents[focused].note}</p>
          {selected !== null ? (
            <button
              className={styles.backToStages}
              type="button"
              onClick={() =>
                cards.current[focused]?.scrollIntoView({ behavior: "instant", block: "center" })
              }
            >
              Back to stages <Icon name="arrow" width="14" height="14" />
            </button>
          ) : null}
        </div>
        <figcaption className={styles.caption}>
          <span className={styles.exampleAmount}>
            {complete ? (
              <>
                One invoice. <strong>KES 65,000 collected.</strong> Every step connected.
              </>
            ) : (
              "Select any stage to inspect its document."
            )}
          </span>
          <span>ILLUSTRATIVE WORKFLOW · SAMPLE DATA</span>
        </figcaption>
      </figure>
    </LazyMotion>
  );
}
