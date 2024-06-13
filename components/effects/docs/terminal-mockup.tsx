"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

type TerminalMockupContextType = {
  showLineNumber: boolean;
  setShowLineNumber: React.Dispatch<React.SetStateAction<boolean>>;
};

const TerminalMockupContext = createContext<TerminalMockupContextType | null>(
  null,
);
function useTerminalMockupState() {
  const context = useContext(TerminalMockupContext);

  if (!context) {
    throw new Error(
      "useTerminalMockupState must be used within a TerminalMockup",
    );
  }

  return context;
}

export function TerminalMockup({
  terminalTitle,
  lineNumber = false,
  children,
  ...props
}: {
  terminalTitle?: string;
  lineNumber?: boolean;
  children?: React.ReactNode;
}) {
  const [showLineNumber, setShowLineNumber] = useState(lineNumber);

  const value = {
    showLineNumber,
    setShowLineNumber,
  };

  return (
    <TerminalMockupContext.Provider value={value}>
      <div className="w-96 rounded border" {...props}>
        <div className="flex w-full items-center gap-2 border-b p-2">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF605C]" />
            <div className="size-3 rounded-full bg-[#FFBD44]" />
            <div className="size-3 rounded-full bg-[#00CA4E]" />
          </div>

          {terminalTitle && (
            <div className="text-muted-foreground">{terminalTitle}</div>
          )}
        </div>

        <div className="p-2">{children}</div>
      </div>
    </TerminalMockupContext.Provider>
  );
}

export function TerminalCommands({ ...props }) {
  const { showLineNumber } = useTerminalMockupState();

  return (
    <pre
      className={cn(
        showLineNumber
          ? "ml-6 flex items-center [counter-increment:effect-terminal-counter] before:absolute before:-ml-6 before:[content:counter(effect-terminal-counter)]"
          : "",
      )}
      {...props}
    />
  );
}
