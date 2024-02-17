import Link from "next/link";
import React from "react";
import { AnimatedUnderline } from "../effects/animated-underline/animated-underline";

export default function Footer() {
  return (
    <footer className="py-10 border-t">
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