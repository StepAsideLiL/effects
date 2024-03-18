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

export default async function HackedTextDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/hacked-text/hacked-text.tsx",
    "utf8",
  );

  const usageImports = `import HackedText from "@/components/effects/hacked-text";`;

  const usageComponents = `<HackedText className="text-9xl">Hacked Text</HackedText>`;

  return (
    <DocContain>
      <DocSection>
        <DocTitle>Hacked Text</DocTitle>
        <DocDecscription>
          On mouseover, the text is randomized, and it returns to the initial
          text one letter at a time.
        </DocDecscription>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Required</DocSectionTitle>
        <p>
          Set up a{" "}
          <DocLink href="https://ui.shadcn.com/docs/installation/next">
            Nextjs and Shadcn/ui
          </DocLink>{" "}
          project CSS color variables
        </p>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Component</DocSectionTitle>
        <CodeBlock
          code={file}
          filename="hacked-text.tsx"
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
      </DocSection>
    </DocContain>
  );
}
