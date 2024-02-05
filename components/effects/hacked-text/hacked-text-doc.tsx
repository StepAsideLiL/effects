import { ScrollArea } from "@/components/ui/scroll-area";
import Code from "@/components/uis/code";
import {
  DocContain,
  DocDecscription,
  DocLink,
  DocSection,
  DocSectionTitle,
  DocTitle,
} from "@/components/uis/docs-ui";
import { promises as fs } from "fs";

export default async function HackedTextDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/hacked-text/hacked-text.tsx",
    "utf8"
  );

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
        <DocLink href="https://ui.shadcn.com/docs/installation/next">
          Nextjs and Shadcn/ui
        </DocLink>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Code</DocSectionTitle>
        <ScrollArea className="h-80">
          <Code code={file} filename="hacked-text.tsx" />
        </ScrollArea>
      </DocSection>

      <DocSection>
        <DocSectionTitle>Inspired From</DocSectionTitle>
        <DocLink href="https://youtu.be/W5oawMJaXbU?si=QrGQQkp-_mVBtn9a">
          Hyperplexed Video
        </DocLink>
      </DocSection>
    </DocContain>
  );
}
