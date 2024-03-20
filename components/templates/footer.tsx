import Link from "next/link";
import React from "react";
import { AnimatedUnderline } from "@/components/effects/animated-underline";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <p className="text-center">
        Made by{" "}
        <AnimatedUnderline variant={"middleReverse"} asChild>
          <Link href={`https://github.com/StepAsideLiL`} target="_blank">
            Rifat Khan
          </Link>
        </AnimatedUnderline>
      </p>
    </footer>
  );
}
