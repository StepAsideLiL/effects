import { Doc } from "@/components/uis/docs-ui";
import { promises as fs } from "fs";
import CodeBlock from "@/components/effects/code-block";

export default async function FullscreenDialogDoc() {
  const file = await fs.readFile(
    process.cwd() + "/components/effects/fullscreen-dialog.tsx",
    "utf8",
  );

  const usageImports = `import {
  FullscreenDialog,
  FullscreenDialogContent,
  FullscreenDialogDescription,
  FullscreenDialogHeader,
  FullscreenDialogTitle,
  FullscreenDialogTrigger,
} from "@/components/effects/fullscreen-dialog";`;

  const usageComponents = `<FullscreenDialog>
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
</FullscreenDialog>`;

  return (
    <Doc.container>
      <Doc.section>
        <Doc.title>Fullscreen Dialog</Doc.title>
        <Doc.description>A dialog box pops up from the bottom</Doc.description>
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
          filename="fullscreen-dialog.tsx"
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
          hfit={false}
          className="w-full"
        />
      </Doc.section>
    </Doc.container>
  );
}
