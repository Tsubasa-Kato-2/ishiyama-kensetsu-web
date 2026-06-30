"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ページ遷移カーテン：左から覆って右へ開く */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-primary pointer-events-none origin-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />
      {/* ページコンテンツ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        {children}
      </motion.div>
    </>
  );
}
