import {
  DocContain,
  DocDecscription,
  DocLink,
  DocSection,
  DocSectionTitle,
  DocTitle,
} from "@/components/uis/docs-ui";
import { promises as fs } from "fs";
import CodeBlock from "@/components/effects/code-block/code-block";
import CopyText from "@/components/effects/copy-text/copy-text";

export default async function CodeBlockDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/code-block/code-block.tsx",
    "utf8",
  );

  const usageImports = `import { promises as fs } from "fs";
import CodeBlock from "@/components/effects/code-block`;

  const usageComponents = `<CodeBlock code={file} filename="code-block.tsx" hfit={false} />`;

  return (
    <DocContain>
      <DocSection>
        <DocTitle>Code Block</DocTitle>
        <DocDecscription>A simple Code Block</DocDecscription>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Required Packages</DocSectionTitle>
        <p>
          Set up a{" "}
          <DocLink href="https://ui.shadcn.com/docs/installation/next">
            Nextjs and Shadcn/ui
          </DocLink>{" "}
          project CSS color variables
        </p>
        <p>Add install</p>
        <CopyText className="w-full">
          pnpm add highlight.js && pnpm dlx shadcn-ui@latest add scroll-area
          separator
        </CopyText>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Component</DocSectionTitle>
        <CodeBlock
          code={file}
          filename="code-block.tsx"
          hfit={false}
          className="w-full"
        />
      </DocSection>

      <DocSection>
        <DocSectionTitle>Usage</DocSectionTitle>
        <CodeBlock code={usageImports} filename="page.tsx" className="w-full" />
        <CodeBlock
          code={usageComponents}
          filename="page.tsx"
          className="w-full"
        />
        <p>
          If the height of the code content is greater than <Code>h-96</Code>{" "}
          set <Code>hfit</Code> as <Code>false</Code>
        </p>
      </DocSection>
    </DocContain>
  );
}

function Code({ children }: { children: string }) {
  return <code className="rounded bg-muted px-1 py-0.5">{children}</code>;
}
