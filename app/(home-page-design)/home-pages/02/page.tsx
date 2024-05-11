import Balancer from "react-wrap-balancer";
import {
  AnimatedCard,
  AnimatedCardContent,
  AnimatedCardDescription,
  AnimatedCardFooter,
  AnimatedCardHeader,
  AnimatedCardTitle,
} from "./_uis/animated-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_uis/carousel";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Web Site",
  },
  {
    title: "Plugins",
  },
  {
    title: "Analytics",
  },
  {
    title: "API Service",
  },
  {
    title: "Mobile App",
  },
];

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

export default function Page() {
  return (
    <main>
      {/* Banner */}
      <section className="container rounded-b-3xl bg-slate-400/15 py-48">
        <div className="mx-auto max-w-4xl">
          <Balancer className="text-center text-6xl font-bold" as="h1">
            Your BRAND&apos;s New Home Here With Logo
          </Balancer>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl space-y-24 pt-20">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-4xl font-medium">Our Product</h1>
          <p className="text-center text-muted-foreground">
            Our AD Network Services offer industry-leading solutions to elevate
            your advertising campaigns.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <AnimatedCard>
            <AnimatedCardHeader>
              <AnimatedCardTitle>Social</AnimatedCardTitle>
              <AnimatedCardDescription>Social Media AD</AnimatedCardDescription>
            </AnimatedCardHeader>

            <AnimatedCardContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              distinctio totam consequuntur dignissimos autem modi voluptatum,
              facilis reiciendis quod laboriosam, quaerat sequi maxime
              exercitationem expedita a. Nam illum voluptas unde?
            </AnimatedCardContent>

            <AnimatedCardFooter>
              <Link href="#">Learn More</Link>
            </AnimatedCardFooter>
          </AnimatedCard>

          <AnimatedCard>
            <AnimatedCardHeader>
              <AnimatedCardTitle>Social</AnimatedCardTitle>
              <AnimatedCardDescription>Social Media AD</AnimatedCardDescription>
            </AnimatedCardHeader>

            <AnimatedCardContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              distinctio totam consequuntur dignissimos autem modi voluptatum,
              facilis reiciendis quod laboriosam, quaerat sequi maxime
              exercitationem expedita a. Nam illum voluptas unde?
            </AnimatedCardContent>

            <AnimatedCardFooter>
              <Link href="#">Learn More</Link>
            </AnimatedCardFooter>
          </AnimatedCard>

          <AnimatedCard>
            <AnimatedCardHeader>
              <AnimatedCardTitle>Social</AnimatedCardTitle>
              <AnimatedCardDescription>Social Media AD</AnimatedCardDescription>
            </AnimatedCardHeader>

            <AnimatedCardContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              distinctio totam consequuntur dignissimos autem modi voluptatum,
              facilis reiciendis quod laboriosam, quaerat sequi maxime
              exercitationem expedita a. Nam illum voluptas unde?
            </AnimatedCardContent>

            <AnimatedCardFooter>
              <Link href="#">Learn More</Link>
            </AnimatedCardFooter>
          </AnimatedCard>
        </div>

        <div className="pb-20">
          <Separator className="bg-primary" />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl space-y-24 pb-20">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-4xl font-medium">Our Key Features</h1>
          <p className="text-center text-muted-foreground">
            We bridge the gap between advertisers and publishers with websites
            or apps that can display those ads.
          </p>
        </div>

        <div>
          <Carousel opts={{ loop: true }} className="space-y-6">
            <div className="flex items-center justify-end gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>

            <CarouselContent>
              {features.map((feature, i) => (
                <CarouselItem key={i} className="basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quis sapiente saepe nulla amet sunt odio doloremque,
                      distinctio optio tempore. Voluptatum recusandae
                      repudiandae quia iure voluptas, reiciendis modi quidem nam
                      itaque.
                    </CardContent>

                    <CardFooter className="justify-center border-t p-6">
                      <Link href="#">Learn More</Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <Separator className="bg-primary" />

      {/* Choose us */}
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
                <span className="absolute right-3 top-3 -z-10 select-none text-[280px] font-bold leading-none text-muted">
                  {i + 1}
                </span>
              </CardHeader>

              <CardContent>{list.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-primary" />

      {/* Visions */}
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

      {/* Physics elements */}
      <section></section>

      {/* Trusted by */}
      <section></section>

      {/* Contact */}
      <section></section>
    </main>
  );
}
