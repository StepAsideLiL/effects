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
    <div className="w-10 h-10 flex justify-between items-center gap-1 rotate-45">
      <div className="flex flex-col gap-2 items-end">
        <div className="bg-foreground w-1.5 h-0.5 rounded"></div>
        <div className="bg-foreground w-3.5 h-0.5 rounded"></div>
        <div className="bg-foreground w-1.5 h-0.5 rounded"></div>
      </div>

      <div className="bg-foreground w-0.5 h-full rounded"></div>

      <div>
        <div className="flex flex-col gap-2 items-start">
          <div className="bg-foreground w-1.5 h-0.5 rounded"></div>
          <div className="bg-foreground w-3.5 h-0.5 rounded"></div>
          <div className="bg-foreground w-1.5 h-0.5 rounded"></div>
        </div>
      </div>
    </div>
  );
}
