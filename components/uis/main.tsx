import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const mainVarients = cva("min-h-screen py-4 space-y-4", {
  variants: {
    variant: {
      default: "container",
      md: "py-4 max-w-5xl mx-auto container space-y-4",
      center: "flex justify-center items-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface MainProps
  extends React.BaseHTMLAttributes<HTMLBaseElement>,
    VariantProps<typeof mainVarients> {}

export const Main: React.FC<MainProps> = ({ className, variant, ...props }) => {
  return (
    <main className={cn(mainVarients({ variant, className }))} {...props} />
  );
};
