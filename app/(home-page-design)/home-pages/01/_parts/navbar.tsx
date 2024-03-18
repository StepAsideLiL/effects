import { Separator } from "@/components/ui/separator";
import { Mail, Menu, Phone } from "lucide-react";
import { HeaderMenu, MobileSideMenu } from "./client-comps";
import {
  Sheet,
  InfoSheetContent,
  SheetTrigger,
  MobileSheetContent,
} from "./ui/sheet";
import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/uis/svg-icons";

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between border-b border-b-primary">
      <div className="flex w-full items-center justify-start px-5">
        <span className="font-mono text-2xl font-black">Logo</span>
      </div>

      <div className="hidden w-full items-center justify-center lg:flex">
        <HeaderMenu />
      </div>

      <div className="flex w-full items-center justify-end">
        <Separator orientation="vertical" className="h-16 bg-primary" />
        <div className="hidden px-3 lg:block">
          <Sheet>
            <SheetTrigger>
              <Menu className="stroke-2 transition hover:stroke-1" />
            </SheetTrigger>

            <InfoSheetContent className="overflow-auto lg:min-w-[512px]">
              <div className="space-y-5 pt-10">
                <h1 className="text-2xl font-medium">About Us</h1>
                <div className="aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images2.imgbox.com/8f/29/ghhMViPG_o.jpg"
                    alt="Company meeting"
                    className="aspect-video grayscale"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam voluptate praesentium voluptatem nisi excepturi
                  pariatur quis accusamus! Quos, adipisci iusto?
                </p>
                <AnimatedUnderline asChild>
                  <Link href={""}>Know More</Link>
                </AnimatedUnderline>

                <Separator className="bg-primary" />

                <h1 className="text-2xl font-medium">Contact Us</h1>

                <div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} /> +880 1234567891
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={16} /> example@mail.com
                  </div>
                </div>

                <div className="grid grid-cols-4 divide-x divide-primary border border-primary">
                  <Link href={""} className="grid place-content-center py-5">
                    <FacebookIcon />
                  </Link>
                  <Link href={""} className="grid place-content-center py-5">
                    <InstagramIcon />
                  </Link>
                  <Link href={""} className="grid place-content-center py-5">
                    <YoutubeIcon />
                  </Link>
                  <Link href={""} className="grid place-content-center py-5">
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
            </InfoSheetContent>
          </Sheet>
        </div>

        <div className="block px-3 lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="stroke-2 transition hover:stroke-1" />
            </SheetTrigger>

            <MobileSheetContent className="w-full overflow-auto">
              <div className="h-5"></div>
              <MobileSideMenu />
            </MobileSheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
