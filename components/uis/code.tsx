"use client";

import { CodeBlock, CopyBlock, tomorrowNight } from "react-code-blocks";

export default function Code({
  code,
  copy = true,
  lineNumber = true,
}: {
  code: string;
  copy?: boolean;
  lineNumber?: boolean;
}) {
  if (copy) {
    return (
      <CopyBlock
        text={code}
        language={"jsx"}
        showLineNumbers={lineNumber}
        startingLineNumber={1}
        theme={tomorrowNight}
        codeBlock
      />
    );
  }

  return (
    <CodeBlock
      text={code}
      language={"jsx"}
      showLineNumbers={lineNumber}
      startingLineNumber={1}
      theme={tomorrowNight}
    />
  );
}
