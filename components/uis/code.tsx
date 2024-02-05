"use client";

import { CodeBlock, CopyBlock, tomorrowNight } from "react-code-blocks";
import { Separator } from "@/components/ui/separator";

export default function Code({
  code,
  filename = "",
  language = "jsx",
  copy = true,
  lineNumber = true,
}: {
  code: string;
  filename?: string;
  language?: string;
  copy?: boolean;
  lineNumber?: boolean;
}) {
  if (copy) {
    return (
      <section className="font-mono text-sm">
        {filename && (
          <>
            <CodeBlock
              text={"hacked-text.tsx"}
              language={language}
              showLineNumbers={false}
              theme={tomorrowNight}
            />
            <Separator orientation="horizontal" />
          </>
        )}
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={lineNumber}
          startingLineNumber={1}
          theme={tomorrowNight}
          codeBlock
        />
      </section>
    );
  }

  return (
    <section className="font-mono text-sm">
      {filename && (
        <>
          <CodeBlock
            text={"hacked-text.tsx"}
            language={"bash"}
            showLineNumbers={false}
            theme={tomorrowNight}
          />
          <Separator orientation="horizontal" />
        </>
      )}
      <CodeBlock
        text={code}
        language={"jsx"}
        showLineNumbers={lineNumber}
        startingLineNumber={1}
        theme={tomorrowNight}
      />
    </section>
  );
}
