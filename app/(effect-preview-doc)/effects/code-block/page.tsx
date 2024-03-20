import { Doc } from "@/components/uis/docs-ui";
import { promises as fs } from "fs";
import CodeBlock from "@/components/effects/code-block";
import CodeBlockDoc from "@/components/effects/docs/code-block-doc";

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/code-block.tsx",
    "utf8",
  );

  return (
    <main>
      <Doc.componentPreviewContainer>
        <CodeBlock code={file} filename="code-block.tsx" hfit={false} />
      </Doc.componentPreviewContainer>

      <Doc.dialog>
        <CodeBlockDoc />
      </Doc.dialog>
    </main>
  );
}
