"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { create } from "zustand";

type StoreViewElement = {
  index: number;
  value: string;
  setIndex: (value: number) => void;
  setValue: (value: string) => void;
};

export const useStoreViewElement = create<StoreViewElement>((set) => ({
  index: 1,
  value: "",
  setIndex: (v) => set(() => ({ index: v })),
  setValue: (v) => set(() => ({ value: v })),
}));

export function InViewElement({
  children,
  className,
  key,
  value,
  defaultValue,
}: {
  children?: React.ReactNode;
  className?: string;
  key?: number;
  value?: string;
  defaultValue?: string | number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [setIndex, setValue] = useStoreViewElement((s) => [
    s.setIndex,
    s.setValue,
  ]);

  useEffect(() => {
    if (isInView) {
      if (value) {
        setValue(value);
      }
      if (key) {
        setIndex(key);
      }
    }
  }, [isInView, key, setIndex, setValue, value]);

  return (
    <div ref={ref} className={cn("flex h-screen items-center", className)}>
      {children}
    </div>
  );
}

export function ShowInViewElement({ className }: { className?: string }) {
  const [index, value] = useStoreViewElement((s) => [s.index, s.value]);

  console.log("index => ", index);
  console.log("value => ", value);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={value}
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 400, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={cn("absolute aspect-square w-96 bg-red-700", className)}
      >
        <Image
          key={value}
          src={value}
          alt="Image"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
}
