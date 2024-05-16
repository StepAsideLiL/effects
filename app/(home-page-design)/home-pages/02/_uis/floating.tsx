"use client";

import * as React from "react";
import { MotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Floating = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, ...props }, ref) => {
  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      ref={ref}
      className={cn("w-fit", className)}
      {...props}
    />
  );
});
Floating.displayName = "Floating";

export { Floating };
