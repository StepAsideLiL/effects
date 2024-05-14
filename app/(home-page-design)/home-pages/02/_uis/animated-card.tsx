"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { MotionProps, motion } from "framer-motion";

const AnimatedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("overflow-hidden rounded-3xl bg-transparent", className)}
    {...props}
  />
));
AnimatedCard.displayName = "AnimatedCard";

const AnimatedCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 pt-20", className)}
    {...props}
  />
));
AnimatedCardHeader.displayName = "AnimatedCardHeader";

const AnimatedCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & MotionProps
>(({ className, ...props }, ref) => (
  <motion.h3
    ref={ref}
    className={cn(
      "pb-10 text-center text-3xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
AnimatedCardTitle.displayName = "AnimatedCardTitle";

const AnimatedCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & MotionProps
>(({ className, ...props }, ref) => (
  <motion.p
    ref={ref}
    className={cn(
      "text-center text-xl font-medium text-secondary-foreground/80",
      className,
    )}
    {...props}
  />
));
AnimatedCardDescription.displayName = "AnimatedCardDescription";

const AnimatedCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "p-6 pt-0 text-center text-sm text-muted-foreground",
      className,
    )}
    {...props}
  />
));
AnimatedCardContent.displayName = "AnimatedCardContent";

const AnimatedCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("flex items-center justify-center p-6 pt-0", className)}
    {...props}
  />
));
AnimatedCardFooter.displayName = "AnimatedCardFooter";

export {
  AnimatedCard,
  AnimatedCardHeader,
  AnimatedCardFooter,
  AnimatedCardTitle,
  AnimatedCardDescription,
  AnimatedCardContent,
};
