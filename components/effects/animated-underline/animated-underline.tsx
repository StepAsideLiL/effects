import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const animatedUnderlineVariants = cva(
  "relative after:content-[''] after:absolute after:bottom-0 after:block after:bg-none after:bg-repeat after:bg-scroll after:bg-left-top after:bg-foreground after:h-[0.5px] after:w-0 after:transition-all after:duration-300 after:ease-out after:delay-0",
  {
    variants: {
      variant: {
        default: "after:left-0 after:hover:w-full",
        fromLeft: "after:left-0 after:hover:w-full",
        fromRight: "after:right-0 after:hover:w-full",
        fromMiddle: "after:left-1/2 after:hover:w-full after:hover:left-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
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

// export default function AnimatedUnderline({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:block after:bg-none after:bg-repeat after:bg-scroll after:bg-left-top after:bg-foreground after:h-[0.5px] after:w-0 after:transition-all after:duration-300 after:ease-out after:delay-0 after:hover:w-full">
//       {children}
//     </div>
//   );
// }
