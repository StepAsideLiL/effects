"use client";

import { Badge } from "@/components/ui/badge";
import Balancer from "react-wrap-balancer";
import InViewElement, { ShowInViewElement } from "../_uis/in-view-element";

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
        <div className="flex w-full items-start">
          <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
            <ShowInViewElement />
          </div>

          <div className="w-full">
            {ourVisions.map((list, i) => (
              <InViewElement
                key={i}
                value={list.image}
                defaultValue={ourVisions[0].image}
              >
                <div className="mx-auto flex max-w-lg flex-col">
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
              </InViewElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
