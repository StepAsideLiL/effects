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
  Play,
  TabletSmartphone,
  Triangle,
  User,
} from "lucide-react";
import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./_parts/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./_parts/ui/dialog";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { AwardSection, VideoPlayer } from "./_parts/client-comps";
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
      icon: <User strokeWidth={1} className="lg:size-20 size-10" />,
    },
    {
      title: "CMS",
      amount: "230",
      icon: <User strokeWidth={1} className="lg:size-20 size-10" />,
    },
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="lg:size-20 size-10" />,
    },
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="lg:size-20 size-10" />,
    },
  ];

  const testimonals = [
    {
      name: "Ropa Rich",
      job: "Entrepreneur",
      body: "Our experience with the backend service was exceptional. It streamlined our operations, offering seamless data management and robust functionality. Highly recommended for any business seeking efficiency and reliability in their backend infrastructure.",
    },
    {
      name: "Pochita Woff",
      job: "Project Manager",
      body: "Our collaboration with the web design team surpassed all expectations. Their innovative approach and attention to detail resulted in a visually stunning and user-friendly website. A testament to their expertise and dedication to crafting exceptional digital experiences.",
    },
    {
      name: "Denji Kun",
      job: "Web Developer",
      body: "The CMS solution provided unparalleled ease of content management, empowering our team to effortlessly update and maintain our website. Its intuitive interface and customizable features tailored perfectly to our needs, making content creation a breeze. A game-changer for streamlining our online presence.",
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
                    <Triangle size={40} className="rotate-90 text-primary/80" />
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
              <Triangle size={40} className="rotate-90 text-primary/80" />
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
              <Triangle size={40} className="rotate-90 text-primary/80" />
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
                <Image
                  src={"/images/project-1.jpg"}
                  alt="Banner Image"
                  width={1000}
                  height={1000}
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
                <Image
                  src={"/images/project-2.jpg"}
                  alt="Banner Image"
                  width={1000}
                  height={1000}
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
                <h1 className="font-medium uppercase lg:text-base text-xs">
                  {item.title}
                </h1>
                <p className="lg:text-3xl text-2xl font-medium">
                  {item.amount}+
                </p>
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
              <Triangle size={40} className="rotate-90 text-primary/80" />
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
            <Triangle size={40} className="rotate-90 text-primary/80" />
            <h1 className="lg:text-4xl text-2xl font-medium uppercase">
              We Create For You
            </h1>
          </div>
          <p className="text-muted-foreground lg:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            esse quisquam! Reprehenderit iste mollitia laudantium?
          </p>
        </section>

        <section className="w-full flex md:flex-row flex-col items-start gap-5">
          <section className="w-full space-y-8">
            <Image
              src="/images/banner-3.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <AnimatedUnderline variant={"leftReverse"}>
              <Link href={""} className="text-sm uppercase">
                Get In Touch
              </Link>
            </AnimatedUnderline>
          </section>

          <section className="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-5"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Creative Design</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus iusto nisi ducimus! Voluptatum placeat minima ea
                  eligendi eius rerum neque.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>For The Business</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem ipsa modi fuga accusamus harum voluptatum, officiis
                  ipsum quae, dolorum velit vitae ducimus dignissimos. Illum,
                  esse odit?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Supreme Backend</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae impedit aspernatur, quod voluptatum ipsum quidem
                  quas facilis quisquam!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>World Class CMS</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  reiciendis expedita asperiores necessitatibus nobis autem,
                  assumenda eveniet vel distinctio accusantium aliquam illo
                  quaerat rem! Vitae ducimus neque cum optio!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </section>
      </section>
      {/* Create Section End */}

      {/* Inspiration Video */}
      <section className="border-y border-y-foreground">
        <section className="px-10 max-w-7xl mx-auto py-20 flex lg:flex-row flex-col gap-10">
          <section className="w-full space-y-8">
            <h1 className="lg:text-4xl text-2xl font-medium uppercase">
              Watching This Well Make Video Will clear All Your Worries
            </h1>
            <AnimatedUnderline variant={"leftReverse"}>
              <Link href={""} className="text-sm uppercase">
                Get In Touch
              </Link>
            </AnimatedUnderline>
          </section>

          <section className="relative w-full">
            <Dialog>
              <DialogTrigger className="absolute z-30 top-10 left-10 border border-foreground p-10 rounded-full hover:scale-95 transition">
                <Play className="size-20 text-white" />
              </DialogTrigger>
              <DialogContent className="p-10 max-w-3xl w-fit mx-auto">
                <VideoPlayer />
              </DialogContent>
            </Dialog>

            <Image
              src={"/images/banner-2.jpg"}
              alt="image"
              width={1000}
              height={1000}
              className="lg:absolute relative aspect-video object-cover"
            />
          </section>
        </section>
      </section>
      {/* Inspiration Video End */}

      {/* Testimonal */}
      <section className="container pt-40 pb-20 space-y-9">
        <div className="flex gap-5 justify-center">
          <Triangle size={40} className="rotate-90 text-primary/80" />
          <h1 className="lg:text-4xl text-2xl font-medium uppercase">
            Testimonal
          </h1>
        </div>

        <section className="grid grid-cols-3 gap-3">
          {testimonals.map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-6 first-letter:text-2xl first-letter:font-bold">
                {item.body}
              </CardContent>

              <CardHeader className="pt-0 text-right">
                <CardTitle className="text-base">{item.name}</CardTitle>
                <CardDescription>{item.job}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </section>
      {/* Testimonal End */}
    </main>
  );
}
