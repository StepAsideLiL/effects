import { cn } from "@/lib/utils";

const tags = [
  {
    title: "API",
    textColor: "text-white",
    bgColor: "bg-gray-900",
  },
  {
    title: "Mobile App",
    textColor: "text-gray-700",
    bgColor: "bg-white",
  },
  {
    title: "Website",
    textColor: "text-red-500",
    bgColor: "bg-gray-100",
  },
  {
    title: "Web App",
    textColor: "text-teal-700",
    bgColor: "bg-gray-200",
  },
  {
    title: "Backend",
    textColor: "text-green-600",
    bgColor: "bg-gray-300",
  },
  {
    title: "Design",
    textColor: "text-green-600",
    bgColor: "bg-black",
  },
  {
    title: "Coding",
    textColor: "text-blue-800",
    bgColor: "bg-yellow-200",
  },
  {
    title: "Framework",
    textColor: "text-black",
    bgColor: "bg-white",
  },
  {
    title: "Library",
    textColor: "text-gray-800",
    bgColor: "bg-white",
  },
  {
    title: "Documentation",
    textColor: "text-pink-600",
    bgColor: "bg-blue-200",
  },
];

export default function FallingElement() {
  return (
    <section>
      {tags.map((tag, i) => (
        <span
          key={i}
          className={cn(
            "inline-block min-w-20 rounded-full bg-muted px-3 py-2 text-center font-semibold",
            tag.textColor,
            tag.bgColor,
          )}
        >
          {tag.title}
        </span>
      ))}
    </section>
  );
}
