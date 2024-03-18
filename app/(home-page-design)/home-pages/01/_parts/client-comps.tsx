"use client";

import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Triangle } from "lucide-react";
import Image from "next/image";
import ReactPlayer from "react-player";

const menus = [
  {
    title: "Home",
    href: "/home-pages/01",
  },
  {
    title: "About Us",
    href: "/home-pages/01/about-us",
  },
  {
    title: "Contact Us",
    href: "/home-pages/01/contact-us",
  },
  {
    title: "Blogs",
    href: "/home-pages/01/blogs",
  },
];

export function HeaderMenu() {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center justify-center gap-5")}>
      {menus.map((item, i) => (
        <AnimatedUnderline
          key={i}
          variant={item.href === pathname ? "active" : "default"}
          asChild
        >
          <Link href={``}>{item.title}</Link>
        </AnimatedUnderline>
      ))}
    </nav>
  );
}

export function MobileSideMenu() {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col divide-y-2")}>
      {menus.map((item, i) => (
        <Link
          key={i}
          href={``}
          className={cn(
            "w-full px-2 py-1 text-lg",
            item.href === pathname && "bg-muted",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export function AwardSection() {
  const tabs = [
    {
      id: "1",
      title: "Best Application Award",
      year: "2018",
      image: "/images/trophy-1.jpg",
    },
    {
      id: "2",
      title: "Supirior CMS Award",
      year: "2019",
      image: "/images/trophy-2.jpg",
    },
    {
      id: "3",
      title: "Awesome Design Award",
      year: "2022",
      image: "/images/trophy-3.jpg",
    },
    {
      id: "4",
      title: "Best Application Award",
      year: "2018",
      image: "/images/trophy-1.jpg",
    },
    {
      id: "5",
      title: "Supirior CMS Award",
      year: "2019",
      image: "/images/trophy-2.jpg",
    },
    {
      id: "6",
      title: "Awesome Design Award",
      year: "2022",
      image: "/images/trophy-3.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="border border-foreground">
      <div className="flex items-center gap-10">
        <div className="w-96 p-7 lg:w-[612px] lg:p-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.image : "empty"}
              initial={{ rotate: 45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 45, scale: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative aspect-square"
            >
              <div className="h-full w-full bg-foreground"></div>
              <Image
                src={selectedTab.image}
                alt="Banner Image"
                width={1000}
                height={1000}
                className="absolute inset-0 h-full w-full -rotate-12 object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-1 flex-col justify-center divide-y divide-foreground py-4">
          {tabs.map((item, i) => (
            <div
              key={i}
              className="relative flex cursor-pointer select-none items-center gap-4 px-5 py-3 lg:pl-10"
              onClick={() => setSelectedTab(item)}
              onMouseEnter={() => setSelectedTab(item)}
            >
              <div className="hidden size-10 md:block">
                {item.id === selectedTab.id && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                  >
                    <Triangle size={36} className="rotate-90" />
                  </motion.div>
                )}
              </div>
              <h1 className="hidden flex-1 text-lg md:block lg:text-2xl">
                {item.title}
              </h1>
              <p>{item.year}</p>
              {item.id === selectedTab.id && (
                <motion.div
                  className="absolute -left-px bottom-0 top-0 z-10 h-full w-px bg-background"
                  layoutId="sideline"
                />
              )}
              <div className="absolute -left-px bottom-0 top-0 h-full w-px bg-foreground" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoPlayer() {
  return (
    <ReactPlayer
      playing={true}
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
  );
}
