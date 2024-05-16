import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const whyChooseUs = [
  {
    title: "We are the Best",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
  },
  {
    title: "Best mobile app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
  },
  {
    title: "Creative animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
  },
  {
    title: "Designed for you",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
  },
  {
    title: "Quick and easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
  },
  {
    title: "New and improved",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
  },
];

export default function ChooseUs() {
  return (
    <section className="mx-auto max-w-6xl space-y-24 py-20">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-4xl font-medium">
          Why Choose Our Service
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {whyChooseUs.map((list, i) => (
          <Card key={i} className="w-full border-none bg-transparent">
            <CardHeader className="relative">
              <CardDescription className="font-medium text-muted-foreground">
                Step {i + 1}
              </CardDescription>
              <CardTitle className="w-2/3 text-4xl">{list.title}</CardTitle>
              <span className="absolute -top-5 right-3 -z-10 select-none text-[280px] font-bold leading-none text-muted">
                {i + 1}
              </span>
            </CardHeader>

            <CardContent>{list.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
