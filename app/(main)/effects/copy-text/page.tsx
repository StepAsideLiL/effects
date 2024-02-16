import { Separator } from "@/components/ui/separator";
import { ComponentContain, MoveToDocLink } from "@/components/uis/docs-ui";
import CopyText from "@/components/effects/copy-text/copy-text";
import CopyTextDoc from "@/components/effects/copy-text/copy-text-doc";

export default async function Page() {
  return (
    <main>
      <ComponentContain>
        <CopyText>npx create-next-app@latest</CopyText>

        <MoveToDocLink />
      </ComponentContain>

      <Separator orientation="horizontal" />

      <CopyTextDoc />
    </main>
  );
}
