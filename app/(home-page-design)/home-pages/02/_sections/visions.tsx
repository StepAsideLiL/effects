import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const ourVisions = [
  {
    title: "Bringing creativity and innovation to your brand",
    bagde: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
    image: "/images/creativity-01.jpg",
  },
  {
    title: "Growing ideas into reality",
    bagde: "Our Vision",
    description:
      "Lorem ipsum remque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
    image: "/images/banner-1.jpg",
  },
  {
    title: "Providing you with the greatest tech team",
    bagde: "Our Commitment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente saepe nulla amet sunt odio doloremque, distinctio optio tempore. Voluptatum recusandae repudiandae quia iure voluptas, reiciendis modi quidem nam itaque.",
    image: "/images/team-01.jpg",
  },
];

export default function Visions() {
  return (
    <section className="py-20">
      <div className="min-h-screen w-full">
        {ourVisions.map((list, i) => (
          <div key={i} className="flex min-h-screen w-full items-center">
            <div className="w-full">
              <Image
                src={list.image}
                alt="Image"
                width={1000}
                height={1000}
                className="min-h-screen object-cover"
              />
            </div>

            <div className="flex w-full flex-col">
              <div className="mx-auto max-w-lg">
                <Badge variant={"secondary"} className="w-fit">
                  {list.bagde}
                </Badge>
                <Balancer
                  className="mb-8 mt-2 text-4xl font-semibold"
                  as={"h1"}
                >
                  {list.title}
                </Balancer>
                <p>{list.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
