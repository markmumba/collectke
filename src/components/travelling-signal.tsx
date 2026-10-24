"use client";

import { useEffect } from "react";
import { animate, m, useMotionValue, useTransform, type MotionValue } from "motion/react";

function Trail({
  path,
  progress,
  length,
  width,
  opacity,
}: {
  path: string;
  progress: MotionValue<number>;
  length: number;
  width: number;
  opacity: number;
}) {
  const offset = useTransform(progress, (value) => length - value);
  return (
    <m.path
      d={path}
      pathLength={1}
      fill="none"
      stroke="#d5ffe9"
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={`${length} 1`}
      style={{ strokeDashoffset: offset, opacity }}
    />
  );
}

export function TravellingSignal({
  path,
  stopped,
  trailScale = 1,
}: {
  path: string;
  stopped: boolean;
  trailScale?: number;
}) {
  const progress = useMotionValue(0);
  const opacity = useTransform(progress, [0, 0.035, 0.98, 1], [0, 1, 1, 0]);
  useEffect(() => {
    if (stopped || progress.get() >= 1) return;
    const control = animate(progress, 1, { duration: 0.85 * (1 - progress.get()), ease: "linear" });
    return () => control.stop();
  }, [stopped, progress]);
  return (
    <m.g style={{ opacity }} data-workspace-signal="true">
      <Trail path={path} progress={progress} length={0.18 * trailScale} width={2} opacity={0.13} />
      <Trail path={path} progress={progress} length={0.1 * trailScale} width={2} opacity={0.3} />
      <Trail path={path} progress={progress} length={0.045 * trailScale} width={2} opacity={0.65} />
      <Trail path={path} progress={progress} length={0.006 * trailScale} width={4} opacity={1} />
    </m.g>
  );
}
