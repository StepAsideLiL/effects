import { Doc } from "@/components/uis/docs-ui";
import CopyText from "@/components/effects/copy-text";
import CopyTextDoc from "@/components/effects/docs/copy-text-doc";

export default async function Page() {
  return (
    <main>
      <Doc.componentPreviewContainer>
        <CopyText>npx create-next-app@latest</CopyText>
      </Doc.componentPreviewContainer>

      <Doc.dialog>
        <CopyTextDoc />
      </Doc.dialog>
    </main>
  );
}
