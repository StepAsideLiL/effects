import CopyText from "@/components/effects/copy-text";
import { Doc } from "@/components/uis/docs-ui";
import React from "react";

export default function Page() {
  return (
    <main className="container min-h-screen space-y-4 py-4">
      <Doc.container>
        <Doc.section>
          <Doc.title>Document</Doc.title>
          <Doc.description>
            Simple and reusable React components for building common and stylish
            UI, designed for Next.js, built on top of Shadcn/ui.
          </Doc.description>
        </Doc.section>

        <Doc.section>
          <Doc.sectionTitle>Get started</Doc.sectionTitle>
          <Doc.p>
            Install Nextjs and Shadcn/ui. Follow the official{" "}
            <Doc.link href="https://ui.shadcn.com/docs/installation/next">
              Shadcn installation guide for Nextjs
            </Doc.link>
            .
          </Doc.p>
          <Doc.p>
            If you have not added any shadcn components download following
            package:
          </Doc.p>
          <CopyText className="w-full">pnpm add @radix-ui/react-slot</CopyText>
        </Doc.section>
      </Doc.container>
    </main>
  );
}
