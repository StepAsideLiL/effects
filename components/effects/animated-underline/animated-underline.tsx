import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const animatedUnderlineVariants = cva(
  "w-fit relative after:content-[''] after:absolute after:bottom-0 after:block after:bg-none after:bg-repeat after:bg-scroll after:bg-left-top after:bg-foreground after:h-[0.5px] after:transition-all after:duration-300 after:ease-out after:delay-0",
  {
    variants: {
      variant: {
        default: "after:w-0 after:left-0 after:hover:w-full",
        left: "after:w-0 after:left-0 after:hover:w-full",
        right: "after:w-0 after:right-0 after:hover:w-full",
        middle:
          "after:w-0 after:left-1/2 after:hover:w-full after:hover:left-0",
        active: "after:w-full",
        leftReverse: "after:w-full after:left-0 after:hover:w-0",
        rightReverse: "after:w-full after:right-0 after:hover:w-0",
        middleReverse:
          "after:w-full after:left-0 after:hover:w-0 after:hover:left-1/2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface AnimatedUnderlineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animatedUnderlineVariants> {
  asChild?: boolean;
}

const AnimatedUnderline = React.forwardRef<
  HTMLDivElement,
  AnimatedUnderlineProps
>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(animatedUnderlineVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
AnimatedUnderline.displayName = "AnimatedUnderline";

export { AnimatedUnderline, animatedUnderlineVariants };
