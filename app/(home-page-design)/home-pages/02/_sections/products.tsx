import Link from "next/link";
import {
  AnimatedCard,
  AnimatedCardContent,
  AnimatedCardDescription,
  AnimatedCardFooter,
  AnimatedCardHeader,
  AnimatedCardTitle,
} from "../_uis/animated-card";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    title: "Social",
    description: "Social Media AD",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit distinctio totam consequuntur dignissimos autem modi voluptatum, facilis reiciendis quod laboriosam, quaerat sequi maxime exercitationem expedita a. Nam illum voluptas unde?",
  },
  {
    title: "Design",
    description: "Web site and App Design",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit distinctio totam consequuntur dignissimos autem modi voluptatum, facilis reiciendis quod laboriosam, quaerat sequi maxime exercitationem expedita a. Nam illum voluptas unde?",
  },
  {
    title: "Development",
    description: "Web site and App Development",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit distinctio totam consequuntur dignissimos autem modi voluptatum, facilis reiciendis quod laboriosam, quaerat sequi maxime exercitationem expedita a. Nam illum voluptas unde?",
  },
];

export default function Products() {
  return (
    <section className="mx-auto max-w-6xl space-y-24 pt-20">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-4xl font-medium">Our Product</h1>
        <p className="text-center text-muted-foreground">
          Our AD Network Services offer industry-leading solutions to elevate
          your advertising campaigns.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product, i) => (
          <AnimatedCard key={i}>
            <AnimatedCardHeader>
              <AnimatedCardTitle>{product.title}</AnimatedCardTitle>
              <AnimatedCardDescription>
                {product.description}
              </AnimatedCardDescription>
            </AnimatedCardHeader>

            <AnimatedCardContent>{product.content}</AnimatedCardContent>

            <AnimatedCardFooter>
              <Link href="#">Learn More</Link>
            </AnimatedCardFooter>
          </AnimatedCard>
        ))}
      </div>

      <div className="pb-20">
        <Separator className="bg-primary" />
      </div>
    </section>
  );
}
