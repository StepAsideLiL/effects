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
import { cn } from "@/lib/utils";
import { Input } from "./_uis/input";
import { Textarea } from "./_uis/textarea";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";

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

const companies = [
  "SkyCode Inc.",
  "Evergreen Tech Solutions",
  "AstraNova Robotics",
  "Tranquil Bay Studios",
  "Zephyr Delivery Network",
  "Luminary Labs",
  "Mythos Design Collective",
  "Nexus Bioengineering",
  "Chrono Mechanics",
  "Wanderlust Travel Co.",
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

      <Separator className="bg-primary" />

      {/* Throwable Physics elements */}
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

      {/* Top Brands & Agencies */}
      <section className="space-y-10 py-20">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-medium">
            Top Brands & Agencies
          </h1>
        </div>

        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/6 before:bg-gradient-to-r before:from-background before:to-foreground/0 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/6 after:bg-gradient-to-r after:from-foreground/0 after:to-background after:content-['']">
          <Marquee pauseOnClick autoFill>
            {companies.map((company, i) => (
              <div
                key={i}
                className="mx-20 flex size-56 select-none items-center justify-center overflow-hidden rounded-full bg-muted text-center text-2xl font-medium"
              >
                {company}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl items-end gap-10 py-32">
          <div className="w-full space-y-5 pb-20">
            <Balancer className="text-4xl font-semibold" as={"h1"}>
              We are also Approachable 👋
            </Balancer>
            <p>
              Ready to collaborate? Reach out to info@approachable.com for
              inquiries and partnerships.
            </p>
          </div>

          <div className="w-full rounded-3xl p-20 shadow-2xl shadow-muted/30">
            <form className="space-y-10">
              <div className="flex w-full items-center gap-5">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>

              <div className="flex w-full items-center gap-5">
                <Input placeholder="Type of Tech" />
                <Input placeholder="Your Budget" />
              </div>

              <Textarea placeholder="Write Your Message" />

              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
