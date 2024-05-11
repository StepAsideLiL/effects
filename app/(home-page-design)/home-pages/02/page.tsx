import Balancer from "react-wrap-balancer";
import {
  AnimatedCard,
  AnimatedCardContent,
  AnimatedCardDescription,
  AnimatedCardFooter,
  AnimatedCardHeader,
  AnimatedCardTitle,
} from "./_parts/animated-card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main className="container">
      {/* Banner */}
      <section className="rounded-b-3xl bg-slate-400/15 py-48">
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
      <section></section>

      {/* Choose us */}
      <section></section>

      {/* Visions */}
      <section></section>

      {/* Physics elements */}
      <section></section>

      {/* Trusted by */}
      <section></section>

      {/* Contact */}
      <section></section>
    </main>
  );
}
