import { LockKeyhole, Search } from "lucide-react";

export default function BrowserMockup({
  url,
  children,
  ...props
}: {
  url?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded border" {...props}>
      <div className="flex w-full justify-between border-b p-2">
        <div className="flex w-full items-center gap-2">
          <div className="size-3 rounded-full bg-[#FF605C]" />
          <div className="size-3 rounded-full bg-[#FFBD44]" />
          <div className="size-3 rounded-full bg-[#00CA4E]" />
        </div>

        <div className="flex w-full items-center gap-2 rounded border px-2 py-1 text-muted-foreground">
          {url ? (
            <>
              <LockKeyhole size={16} /> {url}
            </>
          ) : (
            <>
              <Search size={16} /> Search or enter web address
            </>
          )}
        </div>

        <div className="w-full" />
      </div>

      <div className="p-2">{children}</div>
    </div>
  );
}
