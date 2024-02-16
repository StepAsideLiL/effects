import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";
import Link from "next/link";

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
        "min-h-screen relative flex flex-col items-center justify-center",
        className
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
      className="absolute left-10 bottom-10 flex items-center gap-2"
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
      className={cn("container max-w-3xl mx-auto py-10 space-y-10", className)}
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
