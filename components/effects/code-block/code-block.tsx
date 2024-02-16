"use client";

import "highlight.js/styles/base16/twilight.css";
import hljs from "highlight.js";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Copy, CopyCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CodeBlock({
  code,
  filename = "",
  hfit = true,
}: {
  code: string;
  filename?: string;
  hfit?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="w-[512px] border rounded">
      <div className="flex justify-between p-2">
        <code>{filename}</code>

        <button onClick={() => copyToClipboard()}>
          {copied ? <CopyCheck size={"16"} /> : <Copy size={"16"} />}
        </button>
      </div>

      <Separator />

      <pre className="rounded">
        <ScrollArea className={cn("h-96 rounded", hfit && "max-h-96 h-fit")}>
          <code className="language-tsx">{code}</code>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </pre>
    </div>
  );
}
