import { ScrollArea } from "@/components/ui/scroll-area";
import Code from "@/components/uis/code";
import { promises as fs } from "fs";

export default async function HackedTextDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/hacked-text/hacked-text.tsx",
    "utf8"
  );

  return (
    <section className="container max-w-3xl mx-auto py-10">
      <h3 className="text-2xl font-semibold">Code</h3>
      <ScrollArea className="h-80">
        <Code code={file} filename="hacked-text.tsx" />
      </ScrollArea>
    </section>
  );
}
