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

export default async function AnimatedUnderlineDoc() {
  const file = await fs.readFile(
    process.cwd() +
      "/components/effects/animated-underline/animated-underline.tsx",
    "utf8"
  );

  const usageImports = `import { AnimatedUnderline } from "@/components/effects/animated-underline";
import Link from "next/link";`;

  const usageComponents = `<>
  <AnimatedUnderline className="text-lg">
    Animated Underline Default
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" variant={"left"}>
    Animated Underline From Left
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" variant={"leftReverse"}>
    Animated Underline From Left Reverse
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" variant={"right"}>
    Animated Underline From Right
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" variant={"rightReverse"}>
    Animated Underline From Right Reverse
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" variant={"middle"}>
    Animated Underline From Middle
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" variant={"middleReverse"}>
    Animated Underline From Middle Reverse
  </AnimatedUnderline>

  <AnimatedUnderline className="text-lg" asChild>
    <Link href={\`https://github.com/StepAsideLiL/effects\`}>
      Animated Underline Link
    </Link>
  </AnimatedUnderline>
</>`;

  return (
    <DocContain>
      <DocSection>
        <DocTitle>Animated Underline</DocTitle>
        <DocDecscription>Animate underline on hover</DocDecscription>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Required Packages</DocSectionTitle>
        <p>
          Set up a{" "}
          <DocLink href="https://ui.shadcn.com/docs/installation/next">
            Nextjs and Shadcn/ui
          </DocLink>{" "}
          project with CSS color variables
        </p>
        <p>Add install</p>
        <CopyText className="w-full">pnpm add @radix-ui/react-slot</CopyText>
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
          hfit={false}
          className="w-full"
        />
      </DocSection>
    </DocContain>
  );
}
