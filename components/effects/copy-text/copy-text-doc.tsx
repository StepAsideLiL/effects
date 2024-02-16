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

export default async function CopyTextDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/copy-text/copy-text.tsx",
    "utf8"
  );

  const useage = `import CopyText from "@/components/effects/copy-text";

export default function Page() {
  return (
    <main>
      <CopyText>npx create-next-app@latest</CopyText>
    </main>
  );
}`;

  return (
    <DocContain>
      <DocSection>
        <DocTitle>Copy Text</DocTitle>
        <DocDecscription>Copy the inner text of this component</DocDecscription>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Required Packages</DocSectionTitle>
        <DocLink href="https://ui.shadcn.com/docs/installation/next">
          Nextjs and Shadcn/ui
        </DocLink>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Component</DocSectionTitle>
        <CodeBlock
          code={file}
          filename="copy-text.tsx"
          hfit={false}
          className="w-full"
        />
      </DocSection>

      <DocSection>
        <DocSectionTitle>Usage</DocSectionTitle>
        <CodeBlock code={useage} filename="page.tsx" className="w-full" />
      </DocSection>
    </DocContain>
  );
}
