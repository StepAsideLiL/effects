"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function HackedText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const [content, setContent] = useState(children);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function handleMouseOver() {
    let iterations = 0;

    const interval = setInterval(() => {
      setContent(
        children
          .split("")
          .map((_, i) => {
            if (i < iterations) {
              return children[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= children.length) {
        clearInterval(interval);
      }

      iterations = iterations + 1 / 3;
    }, 20);
  }

  return (
    <div className={cn("font-mono", className)} onMouseOver={handleMouseOver}>
      {content}
    </div>
  );
}
