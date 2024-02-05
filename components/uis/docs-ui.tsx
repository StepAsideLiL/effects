import { cn } from "@/lib/utils";
import Link from "next/link";

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

// Title of the sections.
export function DocSectionTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-2xl font-semibold", className)}>{children}</h3>
  );
}

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
