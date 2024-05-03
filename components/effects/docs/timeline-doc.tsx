import { Doc } from "@/components/uis/docs-ui";
import { promises as fs } from "fs";
import CodeBlock from "@/components/effects/code-block";

export default async function TimelineDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/timeline.tsx",
    "utf8",
  );

  const usageImports = `import {
  Timeline,
  TimelineContent,
  TimelineHeader,
} from "@/components/effects/timeline";`;

  const usageComponents = `<Timeline>
  <TimelineHeader>Header 1</TimelineHeader>
  <TimelineContent>This is header 1 content</TimelineContent>
  <TimelineHeader>Header 2</TimelineHeader>
  <TimelineContent>
    <p>This is header 2 content with multiple line</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
      non quas odio ipsa ullam, odit harum facilis magni beatae?
      Voluptatem enim tempora esse accusantium assumenda delectus
      cupiditate distinctio id quos!
    </p>
  </TimelineContent>
</Timeline>`;

  return (
    <Doc.container>
      <Doc.section>
        <Doc.title>Timeline</Doc.title>
        <Doc.description>Ordered Timeline</Doc.description>
      </Doc.section>

      <Doc.section>
        <Doc.sectionTitle>Required</Doc.sectionTitle>
        <Doc.p>
          Initial Setup Form <Doc.link href="/docs">Docs</Doc.link>
        </Doc.p>
      </Doc.section>

      <Doc.section>
        <Doc.sectionTitle>Component</Doc.sectionTitle>
        <CodeBlock
          filename="timeline.tsx"
          code={file}
          hfit={false}
          className="w-full"
        />
      </Doc.section>

      <Doc.section>
        <Doc.sectionTitle>Usage</Doc.sectionTitle>
        <CodeBlock filename="page.tsx" code={usageImports} className="w-full" />
        <CodeBlock
          filename="page.tsx"
          code={usageComponents}
          className="w-full"
        />
      </Doc.section>
    </Doc.container>
  );
}
