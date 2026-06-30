"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  const words = text.split(/(\s+)/);

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={
            isInView
              ? { y: 0, opacity: 1 }
              : { y: "110%", opacity: 0 }
          }
          transition={{
            duration: 0.55,
            delay: delay + Math.floor(i / 2) * 0.07,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
