"use client";

import Link from "next/link";
import {
  AnimatedCard,
  AnimatedCardContent,
  AnimatedCardDescription,
  AnimatedCardFooter,
  AnimatedCardHeader,
  AnimatedCardTitle,
} from "../_uis/animated-card";
import { useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";

export default function ProductCard({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: string;
}) {
  const [hover, setHover] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".animated-card",
      { y: hover ? -30 : 0 },
      {
        duration: hover ? 0.3 : 0.3,
        delay: hover
          ? stagger(0.1, { startDelay: 0.1 })
          : stagger(0.4, { startDelay: 0.2, from: "last", ease: "easeIn" }),
      },
    );

    animate(
      ".animated-card-footer",
      { opacity: hover ? 1 : 0 },
      {
        duration: hover ? 0.3 : 0.3,
        delay: hover
          ? stagger(0.1, { startDelay: 0.1 })
          : stagger(0.4, { startDelay: 0.2, from: "last", ease: "easeIn" }),
      },
    );
  }, [animate, hover]);

  return (
    <AnimatedCard
      ref={scope}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="transition-colors duration-300 hover:bg-muted"
    >
      <AnimatedCardHeader>
        <AnimatedCardTitle className="animated-card">{title}</AnimatedCardTitle>
        <AnimatedCardDescription className="animated-card">
          {description}
        </AnimatedCardDescription>
      </AnimatedCardHeader>

      <AnimatedCardContent className="animated-card">
        {content}
      </AnimatedCardContent>

      <AnimatedCardFooter className="animated-card animated-card-footer">
        <Link href="#">Learn More</Link>
      </AnimatedCardFooter>
    </AnimatedCard>
  );
}
