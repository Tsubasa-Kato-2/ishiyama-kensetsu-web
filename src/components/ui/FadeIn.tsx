"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

const HIDDEN: Record<string, { x?: number; y?: number }> = {
  up:    { y: 28, x: 0 },
  left:  { x: -28, y: 0 },
  right: { x: 28, y: 0 },
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -6% 0px" });

  const hidden = HIDDEN[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ ...hidden, opacity: 0 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : { ...hidden, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}
