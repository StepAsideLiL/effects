"use client";

import { CopyBlock, tomorrowNight } from "react-code-blocks";

export default function Code({ file }: { file: string }) {
  return (
    <CopyBlock
      text={file}
      language={"jsx"}
      showLineNumbers={true}
      startingLineNumber={1}
      theme={tomorrowNight}
      codeBlock
    />
  );
}
