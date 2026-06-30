"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
  distance?: number;
};

const INITIAL: Record<string, { x?: number; y?: number }> = {
  left:  { x: -80, y: 0 },
  right: { x: 80,  y: 0 },
  up:    { x: 0,   y: 60 },
  down:  { x: 0,   y: -60 },
};

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -6% 0px" });

  const initial = INITIAL[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ ...initial, opacity: 0 }}
      animate={
        isInView
          ? { x: 0, y: 0, opacity: 1 }
          : { ...initial, opacity: 0 }
      }
      transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}
