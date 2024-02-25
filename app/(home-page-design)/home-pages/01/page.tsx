import {
  Carousel,
  CarouselContent,
  CarouselItem,
  BannerCarouselNext,
} from "./_parts/ui/carousel";
import Link from "next/link";
import {
  Globe,
  MoveUp,
  Network,
  TabletSmartphone,
  Triangle,
  User,
} from "lucide-react";
import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { AwardSection } from "./_parts/client-comps";
import Image from "next/image";

export default function Page() {
  const bannerCarouselCards = [
    {
      title: "Solid Digital Journey",
      subtitle: "Digit Agent",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta quo velit cumque fuga, porro facilis magni neque quam voluptas corporis odio quidem, unde ratione aut ullam numquam vitae eum.",
      href: "",
      imgSrc: "/images/banner-1.jpg",
    },
    {
      title: "Smooth User Experience",
      subtitle: "Supirior Quality",
      description:
        "Et dicta quo velit cumque fuga, porro facilis magni neque quam voluptas corporis odio quidem, Lorem ipsum dolor sit, amet consectetur adipisicing elit. unde ratione aut ullam numquam vitae eum. Voluptatum itaque quod minima iure earum temporibus beatae similique ea veniam accusamus. Doloribus dolorum, ab aspernatur suscipit quis labore nemo accusamus commodi amet?",
      href: "",
      imgSrc: "/images/banner-2.jpg",
    },
    {
      title: "Number One Service",
      subtitle: "Latest Tech",
      description:
        "aut ullam numquam vitae eum. eos. Voluptatum itaque quod minima iure earum temporibus beatae similique ea animi repellat, asperiores sapiente facere odio exercitationem tenetur dolor numquam, suscipit et? Saepeis labore nemo accusamus commodi amet?",
      href: "",
      imgSrc: "/images/banner-3.jpg",
    },
  ];

  const servicesCard = [
    {
      title: "Website",
      icon: <Globe className="size-16" />,
      desciption:
        "ea animi repellat, asperiores sapiente facere odio exercitationem tenetur dolor numquam, suscipit et? Saepe sint cumque beatae ab ipsam non accusamus molestiae nobis quas, repellat aut, dolorequam itaque maiores hic sit tempora pariatur.",
      href: "",
    },
    {
      title: "Mobile App",
      icon: <TabletSmartphone className="size-16" />,
      desciption:
        "ea animi repellat, asperiores sapiente facere odio exercitationem tenetur dolor numquam, suscipit et? Saepe sint cumque beatae ab ipsam non accusamus molestiae nobis quas, repellat aut, dolorequam itaque maiores hic sit tempora pariatur.",
      href: "",
    },
    {
      title: "Backend",
      icon: <Network className="size-16" />,
      desciption:
        "ea animi repellat, asperiores sapiente facere odio exercitationem tenetur dolor numquam, suscipit et? Saepe sint cumque beatae ab ipsam non accusamus molestiae nobis quas, repellat aut, dolorequam itaque maiores hic sit tempora pariatur.",
      href: "",
    },
  ];

  const projectInfo = [
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="size-20" />,
    },
    {
      title: "CMS",
      amount: "230",
      icon: <User strokeWidth={1} className="size-20" />,
    },
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="size-20" />,
    },
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="size-20" />,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <section className="border-b border-b-primary lg:py-0 py-5">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {bannerCarouselCards.map((item, i) => (
              <CarouselItem
                key={i}
                className="w-full flex items-center divide-x divide-primary"
              >
                <div className="lg:w-7/12 w-full px-20">
                  <div className="flex lg:justify-start justify-center items-center gap-5 pb-4">
                    <Triangle size={30} className="rotate-90 text-primary/80" />
                    <h3 className="text-muted-foreground text-lg lg:text-left text-center">
                      {item.subtitle}
                    </h3>
                  </div>
                  <h1 className="lg:text-7xl text-4xl font-bold pb-10 lg:text-left text-center">
                    {item.title}
                  </h1>
                  <p className="text-muted-foreground pb-10 lg:text-left text-center">
                    {item.description}
                  </p>
                  <div className="flex lg:justify-start justify-center pb-5">
                    <AnimatedUnderline>
                      <Link href={item.href} className="text-sm">
                        MORE INFORMATION
                      </Link>
                    </AnimatedUnderline>
                  </div>
                </div>

                <div className="w-5/12 lg:block hidden">
                  <div className="w-full h-[650px]">
                    <Image
                      src={item.imgSrc}
                      alt="Banner Image"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <BannerCarouselNext className="lg:absolute relative lg:left-[58%] -translate-x-1/2 left-1/2 lg:bottom-10 bottom-3" />
        </Carousel>
      </section>
      {/* Banner ENd */}

      {/* 2nd section */}
      <section className="border-b border-b-primary">
        <div className="py-20 container flex md:flex-row flex-col items-center">
          <div className="w-full md:px-10 px-0 space-y-8">
            <h1 className="text-3xl font-semibold uppercase">
              Building High Quality User Experience Is What Drive Us Toward Our
              Goal
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum reprehenderit voluptates, reiciendis cumque pariatur
              laudantium sint beatae tenetur culpa?
            </p>
            <AnimatedUnderline variant={"leftReverse"}>
              <Link href={""} className="text-sm">
                MORE INFORMATION
              </Link>
            </AnimatedUnderline>
          </div>

          <Separator
            orientation="vertical"
            className="h-32 bg-primary md:block hidden"
          />
          <Separator className="my-10 bg-primary block md:hidden" />

          <div className="w-full relative md:px-10 px-0">
            <p className="sticky top-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              iure sunt obcaecati iusto voluptates esse suscipit. Iusto non id
              ad voluptatibus quidem. Vero eum minima voluptatibus quam deleniti
              nobis architecto.
            </p>
          </div>
        </div>
      </section>
      {/* 2nd section End */}

      {/* 3rd section: Our Services */}
      <section className="container py-20 space-y-8">
        <section className="w-full flex lg:flex-row flex-col justify-between items-center gap-3">
          <div className="w-full space-y-2">
            <div className="flex gap-5">
              <Triangle size={30} className="rotate-90 text-primary/80" />
              <h1 className="lg:text-4xl text-2xl font-medium">OUR SERVICES</h1>
            </div>
            <p className="text-muted-foreground lg:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="w-full flex lg:justify-end justify-start">
            <AnimatedUnderline variant={"rightReverse"} asChild>
              <Link href={""} className="text-sm">
                VIEW ALL SERVICES
              </Link>
            </AnimatedUnderline>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          {servicesCard.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <div>{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>

              <CardContent>{item.desciption}</CardContent>

              <CardFooter className="text-background bg-foreground pt-6">
                <AnimatedUnderline
                  variant={"leftReverse"}
                  asChild
                  className="after:bg-background"
                >
                  <Link href={""} className="text-sm">
                    MORE DETAILS
                  </Link>
                </AnimatedUnderline>
              </CardFooter>
            </Card>
          ))}
        </section>
      </section>
      {/* 3rd section: Our Services End */}

      {/* 4nd section: Marquee */}
      <section className="border-y border-y-primary py-5">
        <Marquee
          direction="right"
          autoFill
          pauseOnHover
          className="overflow-hidden"
        >
          {servicesCard.map((item, i) => (
            <span key={i} className="px-3 flex items-center gap-3">
              <span
                className="lg:text-6xl text-2xl hover:text-background transition"
                style={{
                  textShadow:
                    "-1px -1px 0 hsl(var(--primary)), 1px -1px 0 hsl(var(--primary)), -1px 1px 0 hsl(var(--primary)), 1px 1px 0 hsl(var(--primary))",
                }}
              >
                <Link href={item.href}>{item.title}</Link>
              </span>
              <Triangle
                strokeWidth={3}
                className="lg:size-12 size-6 rotate-90 text-primary/80"
              />
            </span>
          ))}
        </Marquee>
      </section>
      {/* 4nd section: Marquee End */}

      {/* Our Projects */}
      <section className="container py-20 space-y-8">
        <section className="w-full flex lg:flex-row flex-col justify-between items-center gap-3">
          <div className="w-full space-y-2">
            <div className="flex gap-5">
              <Triangle size={30} className="rotate-90 text-primary/80" />
              <h1 className="lg:text-4xl text-2xl font-medium">OUR PROJECTS</h1>
            </div>
            <p className="text-muted-foreground lg:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="w-full flex lg:justify-end justify-start">
            <AnimatedUnderline variant={"rightReverse"} asChild>
              <Link href={""} className="text-sm">
                VIEW ALL PROJECTS
              </Link>
            </AnimatedUnderline>
          </div>
        </section>

        <section>
          <section className="grid lg:grid-cols-3 grid-cols-1 place-items-center gap-3">
            <div className="relative group border border-foreground">
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images2.imgbox.com/dd/22/rVig2QJp_o.jpg"
                  alt="image"
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="bg-secondary/30 absolute inset-0 lg:opacity-0 opacity-100 group-hover:opacity-100 transition">
                <div className="h-full grid place-content-center gap-5">
                  <h1 className="text-3xl font-medium">Content Management</h1>
                  <Link
                    href={""}
                    className="w-fit p-3 inline-block border border-foreground rounded-full"
                  >
                    <MoveUp className="rotate-45" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group border border-foreground">
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images2.imgbox.com/d5/3d/QwBQ9gfN_o.jpg"
                  alt="image"
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="bg-secondary/30 absolute inset-0 lg:opacity-0 opacity-100 group-hover:opacity-100 transition">
                <div className="h-full grid place-content-center gap-5">
                  <h1 className="text-3xl font-medium">Design Backend</h1>
                  <Link
                    href={""}
                    className="w-fit p-3 inline-block border border-foreground rounded-full"
                  >
                    <MoveUp className="rotate-45" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="uppercase text-3xl font-medium">
                Full Infrastructure
              </h1>
              <p className="text-muted-foreground pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                quaerat.
              </p>
              <AnimatedUnderline variant={"leftReverse"} asChild>
                <Link href={""} className="inline-block">
                  KNOW MORE
                </Link>
              </AnimatedUnderline>
            </div>
          </section>
        </section>
      </section>
      {/* Our Projects End */}

      {/* Branding Section */}
      <section className="container py-20 space-y-8">
        <h1 className="lg:text-5xl text-2xl font-semibold text-center">
          Our Brand Create The Best Backend For Our Partner. The Supirior CMS &
          Backend Coupled With The Best Design This World Has To Offer For Web &
          Mobile Application
        </h1>

        <p className="lg:text-base text-sm text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi
          architecto pariatur perferendis corrupti. Nisi ipsa dolorem autem
          delectus nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Molestias ullam ab eos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti commodi delectus iste voluptas quisquam
          mollitia incidunt hic necessitatibus vitae ipsa.
        </p>

        <div className="flex flex-wrap justify-between items-center gap-3">
          {projectInfo.map((item, i) => (
            <div key={i} className="flex justify-between items-center gap-5">
              <div className="p-3 border border-foreground rounded-full">
                {item.icon}
              </div>
              <div>
                <h1 className="font-medium uppercase">{item.title}</h1>
                <p className="text-3xl font-medium">{item.amount}+</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size={"lg"} asChild>
            <Link href={""} className="uppercase">
              Explore More
            </Link>
          </Button>
        </div>
      </section>
      {/* Branding Section End */}

      {/* Awards Section */}
      <section className="container py-20 space-y-8">
        <section className="w-full flex lg:flex-row flex-col justify-between items-center gap-3">
          <div className="w-full space-y-2">
            <div className="flex gap-5">
              <Triangle size={30} className="rotate-90 text-primary/80" />
              <h1 className="lg:text-4xl text-2xl font-medium uppercase">
                OUR Awards
              </h1>
            </div>
            <p className="text-muted-foreground lg:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="w-full flex lg:justify-end justify-start">
            <AnimatedUnderline variant={"rightReverse"} asChild>
              <Link href={""} className="text-sm">
                VIEW ALL AWARDS
              </Link>
            </AnimatedUnderline>
          </div>
        </section>

        <AwardSection />
      </section>
      {/* Awards Section End */}

      {/* Create Section */}
      <section className="container py-20 space-y-8">
        <section className="w-full space-y-2">
          <div className="flex gap-5">
            <Triangle size={30} className="rotate-90 text-primary/80" />
            <h1 className="lg:text-4xl text-2xl font-medium uppercase">
              We Create For You
            </h1>
          </div>
          <p className="text-muted-foreground lg:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            esse quisquam! Reprehenderit iste mollitia laudantium?
          </p>
        </section>

        <section>
          <section></section>

          <section></section>
        </section>
      </section>
      {/* Create Section End */}
    </main>
  );
}
