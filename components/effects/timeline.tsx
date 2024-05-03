export function Timeline({ ...props }) {
  return <ol className="max-w-3xl space-y-6 border-l-2 pl-10" {...props}></ol>;
}

export function TimelineHeader({ ...props }) {
  return (
    <li
      className="font-bold [counter-increment:effect-step-counter] before:absolute before:-ml-[54px] before:inline-flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border-2 before:border-background before:bg-muted before:font-mono before:[content:counter(effect-step-counter)]"
      {...props}
    ></li>
  );
}

export function TimelineContent({ ...props }) {
  return <div {...props}></div>;
}
