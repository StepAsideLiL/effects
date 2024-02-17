"use client";

import { cn } from "@/lib/utils";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export default function CopyText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      className={cn(
        "font-mono flex justify-between items-center w-[512px] max-w-full p-5 border rounded",
        className
      )}
    >
      <p>{children}</p>

      <button onClick={() => copyToClipboard()}>
        {copied ? <CopyCheck size={"16"} /> : <Copy size={"16"} />}
      </button>
    </div>
  );
}
