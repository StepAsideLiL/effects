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

                  <CardContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis sapiente saepe nulla amet sunt odio doloremque,
                    distinctio optio tempore. Voluptatum recusandae repudiandae
                    quia iure voluptas, reiciendis modi quidem nam itaque.
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
