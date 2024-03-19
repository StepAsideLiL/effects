import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";
import Link from "next/link";

// Fullscreen popup dialog box
import { DocDialog } from "@/components/uis/client-components";

// Container for the component preview section.
export function ComponentContain({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}

// Link to  Move to docum.
export function MoveToDocLink() {
  return (
    <Link
      href={"#doc"}
      className="absolute bottom-10 left-10 flex items-center gap-2"
    >
      Go to Doc <MoveDown size={"16"} />
    </Link>
  );
}

// Container for the document section.
export function DocContain({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("container mx-auto max-w-3xl space-y-10 py-10", className)}
    >
      {children}
    </section>
  );
}

// Section in the documents.
export function DocSection({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("space-y-2", className)}>{children}</section>;
}

// Name of the Effects.
export function DocTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-4xl font-semibold", className)} id="doc">
      {children}
    </h1>
  );
}

// Description of the Effects.
export function DocDecscription({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <h3 className={cn("text-muted-foreground", className)}>{children}</h3>;
}

// Title of the sections.
export function DocSectionTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn("text-2xl font-medium", className)}>{children}</h2>;
}

// Section div in the documents.
export function DocDiv({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

// Section paragraph in the documents.
export function DocP({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <p className={cn(className)}>{children}</p>;
}

// Link style in the documents.
export function DocLink({
  children,
  className,
  href = "",
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link href={href} className={cn("underline", className)} target="_blank">
      {children}
    </Link>
  );
}

export const Doc = {
  componentPreviewContainer: ComponentContain,
  container: DocContain,
  section: DocSection,
  title: DocTitle,
  description: DocDecscription,
  sectionTitle: DocSectionTitle,
  link: DocLink,
  div: DocDiv,
  p: DocP,
  dialog: DocDialog,
};
