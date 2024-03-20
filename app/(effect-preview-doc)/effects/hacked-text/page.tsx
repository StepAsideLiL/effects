import HackedTextDoc from "@/components/effects/docs/hacked-text-doc";
import HackedText from "@/components/effects/hacked-text";
import { Doc } from "@/components/uis/docs-ui";

export default function HackedTextPage() {
  return (
    <main>
      <Doc.componentPreviewContainer>
        <HackedText className="text-5xl md:text-9xl">Hacked Text</HackedText>
      </Doc.componentPreviewContainer>

      <Doc.dialog>
        <HackedTextDoc />
      </Doc.dialog>
    </main>
  );
}
