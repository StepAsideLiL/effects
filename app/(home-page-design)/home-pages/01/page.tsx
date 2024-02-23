import {
  Carousel,
  CarouselContent,
  CarouselItem,
  BannerCarouselNext,
} from "./_parts/ui/carousel";
import Link from "next/link";
import { Globe, Network, TabletSmartphone, Triangle } from "lucide-react";
import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const bannerCarouselCards = [
    {
      title: "Solid Digital Journey",
      subtitle: "Digit Agent",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta quo velit cumque fuga, porro facilis magni neque quam voluptas corporis odio quidem, unde ratione aut ullam numquam vitae eum.",
      href: "",
      imgSrc: "https://images2.imgbox.com/4e/cf/Fg94AaYt_o.jpg",
    },
    {
      title: "Smooth User Experience",
      subtitle: "Supirior Quality",
      description:
        "Et dicta quo velit cumque fuga, porro facilis magni neque quam voluptas corporis odio quidem, Lorem ipsum dolor sit, amet consectetur adipisicing elit. unde ratione aut ullam numquam vitae eum. Voluptatum itaque quod minima iure earum temporibus beatae similique ea veniam accusamus. Doloribus dolorum, ab aspernatur suscipit quis labore nemo accusamus commodi amet?",
      href: "",
      imgSrc: "https://images2.imgbox.com/52/fb/qQEr1HGg_o.jpg",
    },
    {
      title: "Number One Service",
      subtitle: "Latest Tech",
      description:
        "aut ullam numquam vitae eum. eos. Voluptatum itaque quod minima iure earum temporibus beatae similique ea animi repellat, asperiores sapiente facere odio exercitationem tenetur dolor numquam, suscipit et? Saepe sint cumque beatae ab ipsam non accusamus molestiae nobis quas, repellat aut, dolorequam itaque maiores hic sit tempora pariatur, officiis veniam accusamus. Doloribus dolorum, ab aspernatur suscipit quis labore nemo accusamus commodi amet?",
      href: "",
      imgSrc: "https://images2.imgbox.com/83/69/Lwpcunua_o.jpg",
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

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <section className="border-b border-b-primary">
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
                  <h1 className="text-7xl font-bold pb-10 lg:text-left text-center">
                    {item.title}
                  </h1>
                  <p className="text-muted-foreground pb-10 lg:text-left text-center">
                    {item.description}
                  </p>
                  <div className="flex lg:justify-start justify-center pb-5">
                    <AnimatedUnderline>
                      <Link href={item.href}>MORE INFORMATION</Link>
                    </AnimatedUnderline>
                  </div>
                </div>

                <div className="w-5/12 lg:block hidden">
                  <div className="w-full h-[650px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imgSrc}
                      alt="Banner Image"
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

      {/* 2nd section */}
      <section className="border-b border-b-primary">
        <div className="py-20 container flex md:flex-row flex-col items-center">
          <div className="w-full md:px-10 px-0 space-y-8">
            <h1 className="text-3xl font-medium">
              Building High Quality User Experience Is What Drive Us Toward Our
              Goal
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum reprehenderit voluptates, reiciendis cumque pariatur
              laudantium sint beatae tenetur culpa?
            </p>
            <AnimatedUnderline variant={"leftReverse"}>
              <Link href={""}>MORE INFORMATION</Link>
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

      {/* 3rd section: Our Services */}
      <section className="container py-20 space-y-8">
        <section className="w-full flex justify-between items-center">
          <div className="w-full">
            <div className="flex lg:justify-start justify-center items-center gap-5">
              <h1 className="text-4xl font-medium">OUR SERVICES</h1>
              <Triangle size={30} className="rotate-90 text-primary/80" />
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              esse quisquam! Reprehenderit iste mollitia laudantium?
            </p>
          </div>

          <div className="w-full flex justify-end">
            <AnimatedUnderline variant={"rightReverse"} asChild>
              <Link href={""} className="tracking-wide">
                VIEW ALL SERVICES
              </Link>
            </AnimatedUnderline>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-2">
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
                  <Link href={""} className="tracking-wide">
                    MORE DETAILS
                  </Link>
                </AnimatedUnderline>
              </CardFooter>
            </Card>
          ))}
        </section>
      </section>
    </main>
  );
}
