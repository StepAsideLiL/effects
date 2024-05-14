"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function PageProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-[0%] bg-foreground"
      style={{ scaleX }}
    />
  );
}
