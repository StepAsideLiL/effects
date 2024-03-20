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
import { AnimatedUnderline } from "@/components/effects/animated-underline";
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
      icon: <User strokeWidth={1} className="size-10 lg:size-20" />,
    },
    {
      title: "CMS",
      amount: "230",
      icon: <User strokeWidth={1} className="size-10 lg:size-20" />,
    },
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="size-10 lg:size-20" />,
    },
    {
      title: "Clients",
      amount: "140",
      icon: <User strokeWidth={1} className="size-10 lg:size-20" />,
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
      <section className="border-b border-b-primary py-5 lg:py-0">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {bannerCarouselCards.map((item, i) => (
              <CarouselItem
                key={i}
                className="flex w-full items-center divide-x divide-primary"
              >
                <div className="w-full px-20 lg:w-7/12">
                  <div className="flex items-center justify-center gap-5 pb-4 lg:justify-start">
                    <Triangle size={40} className="rotate-90 text-primary/80" />
                    <h3 className="text-center text-lg text-muted-foreground lg:text-left">
                      {item.subtitle}
                    </h3>
                  </div>
                  <h1 className="pb-10 text-center text-4xl font-bold lg:text-left lg:text-7xl">
                    {item.title}
                  </h1>
                  <p className="pb-10 text-center text-muted-foreground lg:text-left">
                    {item.description}
                  </p>
                  <div className="flex justify-center pb-5 lg:justify-start">
                    <AnimatedUnderline>
                      <Link href={item.href} className="text-sm">
                        MORE INFORMATION
                      </Link>
                    </AnimatedUnderline>
                  </div>
                </div>

                <div className="hidden w-5/12 lg:block">
                  <div className="h-[650px] w-full">
                    <Image
                      src={item.imgSrc}
                      alt="Banner Image"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <BannerCarouselNext className="relative bottom-3 left-1/2 -translate-x-1/2 lg:absolute lg:bottom-10 lg:left-[58%]" />
        </Carousel>
      </section>
      {/* Banner ENd */}

      {/* 2nd section */}
      <section className="border-b border-b-primary">
        <div className="container flex flex-col items-center py-20 md:flex-row">
          <div className="w-full space-y-8 px-0 md:px-10">
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
            className="hidden h-32 bg-primary md:block"
          />
          <Separator className="my-10 block bg-primary md:hidden" />

          <div className="relative w-full px-0 md:px-10">
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
      <section className="container space-y-8 py-20">
        <section className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row">
          <div className="w-full space-y-2">
            <div className="flex gap-5">
              <Triangle size={40} className="rotate-90 text-primary/80" />
              <h1 className="text-2xl font-medium lg:text-4xl">OUR SERVICES</h1>
            </div>
            <p className="text-sm text-muted-foreground lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
            <AnimatedUnderline variant={"rightReverse"} asChild>
              <Link href={""} className="text-sm">
                VIEW ALL SERVICES
              </Link>
            </AnimatedUnderline>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-2 lg:grid-cols-3">
          {servicesCard.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <div>{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>

              <CardContent>{item.desciption}</CardContent>

              <CardFooter className="bg-foreground pt-6 text-background">
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
            <span key={i} className="flex items-center gap-3 px-3">
              <span
                className="text-2xl transition hover:text-background lg:text-6xl"
                style={{
                  textShadow:
                    "-1px -1px 0 hsl(var(--primary)), 1px -1px 0 hsl(var(--primary)), -1px 1px 0 hsl(var(--primary)), 1px 1px 0 hsl(var(--primary))",
                }}
              >
                <Link href={item.href}>{item.title}</Link>
              </span>
              <Triangle
                strokeWidth={3}
                className="size-6 rotate-90 text-primary/80 lg:size-12"
              />
            </span>
          ))}
        </Marquee>
      </section>
      {/* 4nd section: Marquee End */}

      {/* Our Projects */}
      <section className="container space-y-8 py-20">
        <section className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row">
          <div className="w-full space-y-2">
            <div className="flex gap-5">
              <Triangle size={40} className="rotate-90 text-primary/80" />
              <h1 className="text-2xl font-medium lg:text-4xl">OUR PROJECTS</h1>
            </div>
            <p className="text-sm text-muted-foreground lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
            <AnimatedUnderline variant={"rightReverse"} asChild>
              <Link href={""} className="text-sm">
                VIEW ALL PROJECTS
              </Link>
            </AnimatedUnderline>
          </div>
        </section>

        <section>
          <section className="grid grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
            <div className="group relative border border-foreground">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={"/images/project-1.jpg"}
                  alt="Banner Image"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/30 opacity-100 transition group-hover:opacity-100 lg:opacity-0">
                <div className="grid h-full place-content-center gap-5">
                  <h1 className="text-3xl font-medium">Content Management</h1>
                  <Link
                    href={""}
                    className="inline-block w-fit rounded-full border border-foreground p-3"
                  >
                    <MoveUp className="rotate-45" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative border border-foreground">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={"/images/project-2.jpg"}
                  alt="Banner Image"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/30 opacity-100 transition group-hover:opacity-100 lg:opacity-0">
                <div className="grid h-full place-content-center gap-5">
                  <h1 className="text-3xl font-medium">Design Backend</h1>
                  <Link
                    href={""}
                    className="inline-block w-fit rounded-full border border-foreground p-3"
                  >
                    <MoveUp className="rotate-45" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-medium uppercase">
                Full Infrastructure
              </h1>
              <p className="pb-4 text-muted-foreground">
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
      <section className="container space-y-8 py-20">
        <h1 className="text-center text-2xl font-semibold lg:text-5xl">
          Our Brand Create The Best Backend For Our Partner. The Supirior CMS &
          Backend Coupled With The Best Design This World Has To Offer For Web &
          Mobile Application
        </h1>

        <p className="text-center text-sm text-muted-foreground lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi
          architecto pariatur perferendis corrupti. Nisi ipsa dolorem autem
          delectus nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Molestias ullam ab eos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti commodi delectus iste voluptas quisquam
          mollitia incidunt hic necessitatibus vitae ipsa.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          {projectInfo.map((item, i) => (
            <div key={i} className="flex items-center justify-between gap-5">
              <div className="rounded-full border border-foreground p-3">
                {item.icon}
              </div>
              <div>
                <h1 className="text-xs font-medium uppercase lg:text-base">
                  {item.title}
                </h1>
                <p className="text-2xl font-medium lg:text-3xl">
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
      <section className="container space-y-8 py-20">
        <section className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row">
          <div className="w-full space-y-2">
            <div className="flex gap-5">
              <Triangle size={40} className="rotate-90 text-primary/80" />
              <h1 className="text-2xl font-medium uppercase lg:text-4xl">
                OUR Awards
              </h1>
            </div>
            <p className="text-sm text-muted-foreground lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
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
      <section className="container space-y-8 py-20">
        <section className="w-full space-y-2">
          <div className="flex gap-5">
            <Triangle size={40} className="rotate-90 text-primary/80" />
            <h1 className="text-2xl font-medium uppercase lg:text-4xl">
              We Create For You
            </h1>
          </div>
          <p className="text-sm text-muted-foreground lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            esse quisquam! Reprehenderit iste mollitia laudantium?
          </p>
        </section>

        <section className="flex w-full flex-col items-start gap-5 md:flex-row">
          <section className="w-full space-y-8">
            <Image
              src="/images/banner-3.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
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
        <section className="mx-auto flex max-w-7xl flex-col gap-10 px-10 py-20 lg:flex-row">
          <section className="w-full space-y-8">
            <h1 className="text-2xl font-medium uppercase lg:text-4xl">
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
              <DialogTrigger className="absolute left-10 top-10 z-30 rounded-full border border-foreground p-10 transition hover:scale-95">
                <Play className="size-20 text-white" />
              </DialogTrigger>
              <DialogContent className="mx-auto w-fit max-w-3xl p-10">
                <VideoPlayer />
              </DialogContent>
            </Dialog>

            <Image
              src={"/images/banner-2.jpg"}
              alt="image"
              width={1000}
              height={1000}
              className="relative aspect-video object-cover lg:absolute"
            />
          </section>
        </section>
      </section>
      {/* Inspiration Video End */}

      {/* Testimonal */}
      <section className="container space-y-9 pb-20 pt-40">
        <div className="flex justify-center gap-5">
          <Triangle size={40} className="rotate-90 text-primary/80" />
          <h1 className="text-2xl font-medium uppercase lg:text-4xl">
            Testimonal
          </h1>
        </div>

        <section className="grid grid-cols-1 gap-3 lg:grid-cols-3">
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

      {/* Get In Touch */}
      <section className="container bg-gradient-to-b from-gray-50 to-gray-500 text-background">
        <section className="flex w-full flex-col items-start justify-between gap-3 p-10 lg:flex-row lg:items-end">
          <section className="max-w-4xl space-y-6">
            <p>Connect With Us</p>
            <h1 className="text-2xl font-bold uppercase lg:text-4xl">
              We Will Create A Solution Just For You and Your Business
            </h1>
          </section>

          <section className="flex-shrink-0">
            <AnimatedUnderline
              variant={"leftReverse"}
              className="after:bg-background"
            >
              <Link href={""} className="text-sm uppercase">
                Get In Touch
              </Link>
            </AnimatedUnderline>
          </section>
        </section>
      </section>
      {/* Get In Touch End */}
    </main>
  );
}
