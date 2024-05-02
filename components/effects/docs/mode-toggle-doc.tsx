import { Doc } from "@/components/uis/docs-ui";
import { promises as fs } from "fs";
import React from "react";
import CodeBlock from "@/components/effects/code-block";

export default async function ModeToggleDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/mode-toggle.tsx",
    "utf8",
  );

  const usageImports = `import { ModeToggle } from "@/components/effects/mode-toggle";`;

  const usageComponents = `<ModeToggle />`;

  return (
    <Doc.container>
      <Doc.section>
        <Doc.title>Mode Toggle</Doc.title>
        <Doc.description>Toggle between dark and light mode</Doc.description>
      </Doc.section>

      <Doc.section>
        <Doc.sectionTitle>Required</Doc.sectionTitle>
        <Doc.p>
          Initial Setup Form <Doc.link href="/docs">Docs</Doc.link>
        </Doc.p>
        <Doc.p>
          Follow the dark mode setup from{" "}
          <Doc.link href="https://ui.shadcn.com/docs/dark-mode/next">
            here
          </Doc.link>
        </Doc.p>
      </Doc.section>

      <Doc.section>
        <Doc.sectionTitle>Component</Doc.sectionTitle>
        <CodeBlock
          filename="mode-toggle.tsx"
          code={file}
          hfit={false}
          className="w-full"
        />
      </Doc.section>

      <Doc.section>
        <Doc.sectionTitle>Usage</Doc.sectionTitle>
        <CodeBlock
          filename="header.tsx"
          code={usageImports}
          className="w-full"
        />
        <CodeBlock
          filename="header.tsx"
          code={usageComponents}
          className="w-full"
        />
      </Doc.section>
    </Doc.container>
  );
}
