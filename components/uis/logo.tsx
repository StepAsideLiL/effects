import Link from "next/link";

export default function Logo({
  variant,
}: {
  variant?: "" | "default" | "link";
}) {
  if (variant === "link") {
    return (
      <Link href={"/"}>
        <Icon />
      </Link>
    );
  }

  return <Icon />;
}

function Icon() {
  return (
    <div className="flex h-10 w-10 rotate-45 items-center justify-between gap-1">
      <div className="flex flex-col items-end gap-2">
        <div className="h-0.5 w-1.5 rounded bg-foreground"></div>
        <div className="h-0.5 w-3.5 rounded bg-foreground"></div>
        <div className="h-0.5 w-1.5 rounded bg-foreground"></div>
      </div>

      <div className="h-full w-0.5 rounded bg-foreground"></div>

      <div>
        <div className="flex flex-col items-start gap-2">
          <div className="h-0.5 w-1.5 rounded bg-foreground"></div>
          <div className="h-0.5 w-3.5 rounded bg-foreground"></div>
          <div className="h-0.5 w-1.5 rounded bg-foreground"></div>
        </div>
      </div>
    </div>
  );
}
