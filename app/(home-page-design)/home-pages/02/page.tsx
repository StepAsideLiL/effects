import Balancer from "react-wrap-balancer";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Input } from "./_uis/input";
import { Textarea } from "./_uis/textarea";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import Banner from "./_sections/banner";
import Products from "./_sections/products";
import Features from "./_sections/features";
import ChooseUs from "./_sections/choose-us";

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
      <Banner />

      {/* Products */}
      <Products />

      {/* Features */}
      <Features />

      <Separator className="bg-primary" />

      {/* Choose us */}
      <ChooseUs />

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
