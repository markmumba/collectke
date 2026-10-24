"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { TravellingSignal } from "@/components/travelling-signal";
import { Icon } from "@/components/ui/icon";
import { motionTokens } from "@/config/motion";
import styles from "./who-its-for.module.css";

const phases = [
  { text: "One account for the whole team", duration: 900 },
  { text: "Operations connects the paperwork", duration: 900 },
  { text: "Quotation and LPO linked", duration: 850 },
  { text: "Delivery and invoice linked", duration: 1000 },
  { text: "Finance reviews the payment", duration: 1400 },
  { text: "Payment matched to INV-0022", duration: 1200 },
  { text: "The owner sees the updated account", duration: 1100 },
  { text: "KES 65,000 collected. Zero remaining.", duration: 1300 },
  { text: "Same account. Same clear picture.", duration: 0 },
] as const;
const roles = [
  { label: "Owner", initials: "OW", start: 6, end: 7 },
  { label: "Finance", initials: "FN", start: 4, end: 5 },
  { label: "Operations", initials: "OP", start: 1, end: 3 },
] as const;
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

export function SharedWorkspace() {
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const roleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [connections, setConnections] = useState({ width: 1, height: 1, paths: [] as string[] });
  const inView = useInView(ref, { amount: 0.45 });
  const entered = useInView(ref, { amount: 0.25, once: true });
  const reduced = !!useReducedMotion();
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );
  const [phase, setPhase] = useState(0);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [stopAt, setStopAt] = useState(8);
  const [run, setRun] = useState(0);
  const generation = useRef(0);
  const remaining = useRef<number>(phases[0].duration);
  const step = reduced ? 8 : phase;
  const complete = step === 8;
  const finished = step >= stopAt;
  const stopped = !inView || !pageVisible;
  const active = reduced
    ? selectedRole
    : step >= 6 && step < 8
      ? 0
      : step >= 4 && step < 6
        ? 1
        : step >= 1 && step < 4
          ? 2
          : null;
  const docs = step >= 3 ? 4 : step >= 2 ? 2 : 0;
  const transition = {
    duration: reduced ? 0 : motionTokens.duration.reveal,
    ease: motionTokens.ease,
  };

  useEffect(() => {
    const root = contentRef.current;
    const account = accountRef.current;
    if (!root || !account) return;
    // Layout offsets ignore the entrance transforms, keeping endpoints on the card edge.
    function position(element: HTMLElement) {
      let x = 0,
        y = 0;
      let current: HTMLElement | null = element;
      while (current && current !== root) {
        x += current.offsetLeft;
        y += current.offsetTop;
        current = current.offsetParent as HTMLElement | null;
      }
      return { x, y };
    }
    function measure() {
      if (!root || !account) return;
      const card = position(account);
      const endX = card.x + account.offsetWidth / 2;
      const endY = card.y + 1;
      const paths = roleRefs.current.map((role) => {
        if (!role) return "";
        const node = position(role);
        const x = node.x + role.offsetWidth / 2;
        const y = node.y + role.offsetHeight;
        const junction = y + 24;
        if (Math.abs(x - endX) < 1) return `M${x} ${y} V${endY}`;
        const direction = endX > x ? 1 : -1;
        return `M${x} ${y} V${junction - 5} Q${x} ${junction} ${x + direction * 5} ${junction} H${endX - direction * 5} Q${endX} ${junction} ${endX} ${junction + 5} V${endY}`;
      });
      setConnections({ width: root.offsetWidth, height: root.offsetHeight, paths });
    }
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(account);
    roleRefs.current.forEach((role) => role && observer.observe(role));
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || stopped || phase >= stopAt) return;
    const start = performance.now();
    const currentGeneration = generation.current;
    let fired = false;
    const timeout = window.setTimeout(() => {
      fired = true;
      remaining.current = phases[phase + 1].duration;
      setPhase(phase + 1);
    }, remaining.current);
    return () => {
      clearTimeout(timeout);
      if (!fired && currentGeneration === generation.current)
        remaining.current = Math.max(0, remaining.current - (performance.now() - start));
    };
  }, [phase, stopAt, stopped, reduced, run]);

  function replayRole(index: number) {
    generation.current += 1;
    setSelectedRole(index);
    const role = roles[index];
    remaining.current = phases[role.start].duration;
    setPhase(role.start);
    setStopAt(role.end);
    setRun((n) => n + 1);
  }
  function spinner() {
    return (
      <span
        className="demo-spinner"
        style={{ animationPlayState: stopped ? "paused" : "running" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <figure
        ref={ref}
        className={styles.workspaceVisual}
        data-workspace-step={step}
        data-workspace-paused={stopped || finished}
        aria-label="Illustrative shared account: Operations links four documents, Finance matches a KES 65,000 payment, and the Owner sees zero remaining."
      >
        <div ref={contentRef} className={styles.visualContent}>
          <svg
            className={styles.roleSignal}
            viewBox={`0 0 ${connections.width} ${connections.height}`}
            aria-hidden="true"
          >
            {connections.paths.map((path, index) => (
              <path
                key={index}
                data-role-route={roles[index].label}
                d={path}
                fill="none"
                stroke="#91bca860"
                strokeWidth="1"
              />
            ))}
            {active !== null && !reduced && connections.paths[active] ? (
              <TravellingSignal
                key={`${run}-${active}`}
                path={connections.paths[active]}
                stopped={stopped}
              />
            ) : null}
          </svg>
          <div className={styles.visualEyebrow}>
            <span />A SHARED VIEW OF THE WORK
          </div>
          <div className={styles.roleNodes} role="group" aria-label="Replay a role’s contribution">
            {roles.map((role, index) => (
              <m.button
                type="button"
                ref={(element) => {
                  roleRefs.current[index] = element;
                }}
                key={role.label}
                className={styles.roleNode}
                aria-label={`Replay ${role.label} contribution`}
                aria-pressed={active === index}
                onClick={() => replayRole(index)}
                initial={false}
                animate={{
                  opacity: entered ? 1 : 0,
                  transform: reduced || entered ? "translateY(0px)" : "translateY(-12px)",
                }}
                transition={{ ...transition, delay: reduced ? 0 : index * motionTokens.stagger }}
              >
                <m.i
                  className={styles.roleGlow}
                  aria-hidden="true"
                  initial={false}
                  animate={{ opacity: active === index || (complete && active === null) ? 1 : 0 }}
                  transition={transition}
                />
                <span>{role.initials}</span>
                <p>{role.label}</p>
              </m.button>
            ))}
          </div>
          <div className={styles.connector} aria-hidden="true" />
          <m.div
            ref={accountRef}
            className={styles.accountCard}
            initial={false}
            animate={{
              opacity: entered ? 1 : 0,
              transform: reduced || entered ? "translateY(0px)" : "translateY(16px)",
            }}
            transition={{ ...transition, delay: reduced ? 0 : 0.18 }}
          >
            <div className={styles.accountBar}>
              <span>
                <Icon name="invoice" width="15" height="15" />
                Customer account
              </span>
              <span className={styles.linkedBadge}>
                {complete || step >= 7 ? <Icon name="check" width="10" height="10" /> : null}
                {complete || step >= 7 ? "Connected" : "Connecting"}
              </span>
            </div>
            <div className={styles.accountBody}>
              <div className={styles.accountCustomer}>
                <span className={styles.customerAvatar}>MT</span>
                <div>
                  <p>Maua Traders</p>
                  <span>
                    {step >= 7
                      ? "Every detail, in one place."
                      : "One account. Shared across your team."}
                  </span>
                </div>
              </div>
              <div className={styles.accountRow}>
                <m.i
                  className={styles.rowGlow}
                  aria-hidden="true"
                  initial={false}
                  animate={{ opacity: active === 2 ? 1 : 0 }}
                  transition={transition}
                />
                <span>Supporting documents</span>
                <span>
                  {docs === 4 ? (
                    <Icon name="check" width="12" height="12" />
                  ) : step === 1 || step === 2 ? (
                    spinner()
                  ) : null}
                  <m.span
                    key={`${run}-${docs}`}
                    initial={reduced ? false : { opacity: 0, transform: "translateY(4px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={transition}
                  >
                    {docs} linked
                  </m.span>
                </span>
              </div>
              <div className={styles.accountRow}>
                <m.i
                  className={styles.rowGlow}
                  aria-hidden="true"
                  initial={false}
                  animate={{ opacity: step === 3 ? 1 : 0 }}
                  transition={transition}
                />
                <span>Invoice</span>
                <span>{step >= 3 ? "INV-0022" : "Awaiting documents"}</span>
              </div>
              <div className={styles.accountRow}>
                <m.i
                  className={styles.rowGlow}
                  aria-hidden="true"
                  initial={false}
                  animate={{ opacity: active === 1 ? 1 : 0 }}
                  transition={transition}
                />
                <span>Payment</span>
                <span>
                  {step === 4 ? (
                    spinner()
                  ) : step >= 5 ? (
                    <Icon name="check" width="12" height="12" />
                  ) : null}
                  {step >= 5 ? "Matched" : step === 4 ? "Reviewing match" : "Awaiting payment"}
                </span>
              </div>
              <div className={styles.accountSummary}>
                <m.i
                  className={styles.summaryGlow}
                  aria-hidden="true"
                  initial={false}
                  animate={{ opacity: active === 0 || (complete && active === null) ? 1 : 0 }}
                  transition={transition}
                />
                <span className={styles.summaryDot} />
                <p>
                  {step >= 7
                    ? "KES 65,000 collected · KES 0 remaining"
                    : step >= 5
                      ? "Payment matched. Account updated."
                      : step >= 3
                        ? "Documents ready for payment review."
                        : "The account comes together, step by step."}
                </p>
              </div>
            </div>
          </m.div>
          <div className={styles.workspacePlayback}>
            <span>
              {reduced && selectedRole !== null
                ? `${roles[selectedRole].label} · ${phases[roles[selectedRole].end].text}`
                : phases[step].text}
            </span>
          </div>
        </div>
        <figcaption>ILLUSTRATIVE WORKSPACE · SAMPLE DATA</figcaption>
      </figure>
    </LazyMotion>
  );
}
