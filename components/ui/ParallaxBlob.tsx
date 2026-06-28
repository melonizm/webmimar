"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function ParallaxBlob({
  children,
  className = "",
  speed = "slow",
}: {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "fast";
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, speed === "slow" ? 80 : 140]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
