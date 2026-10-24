"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { motionTokens } from "@/config/motion";
import styles from "./card-swap.module.css";

const HOLD_MS = 3400;
const SWAP_S = 1.1;

// Resting poses. The back card peeks out up and to the right, like a second sheet on a desk.
const front = { x: "0%", y: "0%", rotate: 0, scale: 1, opacity: 1 };
const back = { x: "7%", y: "-6%", rotate: 5, scale: 0.93, opacity: 0.92 };

// The rising card swings out left, the sinking card out right.
const rise = {
  x: ["7%", "-34%", "0%"],
  y: ["-6%", "4%", "0%"],
  rotate: [5, -7, 0],
  scale: [0.93, 0.97, 1],
  opacity: [0.92, 1, 1],
};
const sink = {
  x: ["0%", "38%", "7%"],
  y: ["0%", "8%", "-6%"],
  rotate: [0, 9, 5],
  scale: [1, 0.97, 0.93],
  opacity: [1, 1, 0.92],
};

const WIDEST = 0.45;
const transition = { duration: SWAP_S, ease: motionTokens.ease, times: [0, WIDEST, 1] };

/**
 * A pair of cards that take turns on top. The front card slides out to the side, tucks
 * behind, and the back card rises forward to take its place. Pauses off-screen, on hover
 * or focus, and stays still for reduced motion.
 */
export function CardSwap({ cards }: { cards: [ReactNode, ReactNode] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = useReducedMotion();
  const [top, setTop] = useState(0);
  // Stacking order trails `top`: it flips at the widest point, when the cards are apart.
  const [layered, setLayered] = useState(0);
  const [held, setHeld] = useState(false);
  const [swaps, setSwaps] = useState(0);

  const running = inView && !held && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => {
      setTop((t) => 1 - t);
      setSwaps((n) => n + 1);
    }, HOLD_MS);
    return () => window.clearTimeout(id);
  }, [running, top]);

  useEffect(() => {
    if (layered === top) return;
    const id = window.setTimeout(() => setLayered(top), SWAP_S * WIDEST * 1000);
    return () => window.clearTimeout(id);
  }, [layered, top]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        ref={ref}
        className={styles.stack}
        onPointerEnter={() => setHeld(true)}
        onPointerLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={() => setHeld(false)}
      >
        {cards.map((card, i) => {
          const isTop = i === top;
          // First paint, and reduced motion, settle straight into the resting pose.
          const settled = swaps === 0 || reduced;
          const animate = settled ? (isTop ? front : back) : isTop ? rise : sink;

          return (
            <m.div
              key={i}
              className={styles.card}
              initial={false}
              animate={animate}
              transition={transition}
              style={{ zIndex: i === layered ? 2 : 1 }}
              aria-hidden={!isTop}
              inert={!isTop}
            >
              {card}
            </m.div>
          );
        })}
      </div>
    </LazyMotion>
  );
}
