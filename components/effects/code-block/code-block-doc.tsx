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
    "utf8"
  );

  const usage = `import { promises as fs } from "fs";
import CodeBlock from "@/components/effects/code-block";
  
export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/code-block.tsx",
    "utf8"
  );

  return (
    <main>
      <CodeBlock code={file} filename="code-block.tsx" hfit={false} />
    </main>
  );
}`;

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
          project
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
        <CodeBlock
          code={usage}
          filename="page.tsx"
          hfit={false}
          className="w-full"
        />
      </DocSection>
    </DocContain>
  );
}
