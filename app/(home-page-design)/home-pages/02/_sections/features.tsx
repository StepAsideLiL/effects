import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_uis/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FcSmartphoneTablet,
  FcSettings,
  FcGlobe,
  FcAreaChart,
  FcServices,
} from "react-icons/fc";
import { Floating } from "../_uis/floating";

const features = [
  {
    title: "Web Site",
    icon: FcGlobe,
  },
  {
    title: "Plugins",
    icon: FcSettings,
  },
  {
    title: "Analytics",
    icon: FcAreaChart,
  },
  {
    title: "API Service",
    icon: FcServices,
  },
  {
    title: "Mobile App",
    icon: FcSmartphoneTablet,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl space-y-24 pb-20">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-4xl font-medium">Our Key Features</h1>
        <p className="text-center text-muted-foreground">
          We bridge the gap between advertisers and publishers with websites or
          apps that can display those ads.
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

                  <CardContent className="flex flex-col items-center gap-10">
                    <p className="text-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quis sapiente saepe nulla amet sunt odio doloremque,
                      distinctio optio tempore. Voluptatum recusandae
                      repudiandae quia iure voluptas, reiciendis modi quidem nam
                      itaque.
                    </p>
                    <Floating>
                      <feature.icon size={46} />
                    </Floating>
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
  );
}
