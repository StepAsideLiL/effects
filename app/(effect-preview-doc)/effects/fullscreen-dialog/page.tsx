import {
  FullscreenDialog,
  FullscreenDialogContent,
  FullscreenDialogDescription,
  FullscreenDialogHeader,
  FullscreenDialogTitle,
  FullscreenDialogTrigger,
} from "@/components/effects/fullscreen-dialog";
import FullscreenDialogDoc from "@/components/effects/docs/fullscreen-dialog-doc";
import { Doc } from "@/components/uis/docs-ui";

export default function Page() {
  return (
    <main>
      <Doc.componentPreviewContainer>
        <FullscreenDialog>
          <FullscreenDialogTrigger>
            Open Fullscreen Dialog
          </FullscreenDialogTrigger>

          <FullscreenDialogContent>
            <FullscreenDialogHeader className="mx-auto max-w-3xl">
              <FullscreenDialogTitle>
                Are you absolutely sure?
              </FullscreenDialogTitle>
              <FullscreenDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </FullscreenDialogDescription>

              <section className="mx-auto w-96 space-y-3">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus eveniet dolor sit. Ipsum quibusdam atque,
                  sint quidem beatae harum nobis, et cumque in velit, facilis
                  corporis necessitatibus nisi quas vel numquam. Dicta alias
                  doloremque nemo ex, ipsa sequi. Aperiam, placeat? Natus ipsum
                  saepe sunt excepturi enim ad explicabo minus.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus eveniet dolor sit. Ipsum quibusdam atque,
                  sint quidem beatae harum nobis, et cumque in velit, facilis
                  corporis necessitatibus nisi quas vel numquam. Dicta alias
                  doloremque nemo ex, ipsa sequi. Aperiam, placeat? Natus ipsum
                  saepe sunt excepturi enim ad explicabo minus.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus eveniet dolor sit. Ipsum quibusdam atque,
                  sint quidem beatae harum nobis, et cumque in velit, facilis
                  corporis necessitatibus nisi quas vel numquam. Dicta alias
                  doloremque nemo ex, ipsa sequi. Aperiam, placeat? Natus ipsum
                  saepe sunt excepturi enim ad explicabo minus.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus eveniet dolor sit. Ipsum quibusdam atque,
                  sint quidem beatae harum nobis, et cumque in velit, facilis
                  corporis necessitatibus nisi quas vel numquam. Dicta alias
                  doloremque nemo ex, ipsa sequi. Aperiam, placeat? Natus ipsum
                  saepe sunt excepturi enim ad explicabo minus.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus eveniet dolor sit. Ipsum quibusdam atque,
                  sint quidem beatae harum nobis, et cumque in velit, facilis
                  corporis necessitatibus nisi quas vel numquam. Dicta alias
                  doloremque nemo ex, ipsa sequi. Aperiam, placeat? Natus ipsum
                  saepe sunt excepturi enim ad explicabo minus.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus eveniet dolor sit. Ipsum quibusdam atque,
                  sint quidem beatae harum nobis, et cumque in velit, facilis
                  corporis necessitatibus nisi quas vel numquam. Dicta alias
                  doloremque nemo ex, ipsa sequi. Aperiam, placeat? Natus ipsum
                  saepe sunt excepturi enim ad explicabo minus.
                </div>
              </section>
            </FullscreenDialogHeader>
          </FullscreenDialogContent>
        </FullscreenDialog>
      </Doc.componentPreviewContainer>

      <Doc.dialog>
        <FullscreenDialogDoc />
      </Doc.dialog>
    </main>
  );
}
