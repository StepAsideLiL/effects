import ModeToggleDoc from "@/components/effects/docs/mode-toggle-doc";
import { ModeToggle } from "@/components/effects/mode-toggle";
import { Doc } from "@/components/uis/docs-ui";

export default function Page() {
  return (
    <main>
      <Doc.componentPreviewContainer>
        <ModeToggle />
      </Doc.componentPreviewContainer>

      <Doc.dialog>
        <ModeToggleDoc />
      </Doc.dialog>
    </main>
  );
}
