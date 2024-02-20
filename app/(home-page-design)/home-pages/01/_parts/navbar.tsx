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
    <header className="w-full flex justify-between items-center border-b border-b-primary">
      <div className="w-full px-5 flex justify-start items-center">
        <span className="text-2xl font-black font-mono">Logo</span>
      </div>

      <div className="w-full hidden lg:flex justify-center items-center">
        <HeaderMenu />
      </div>

      <div className="w-full flex justify-end items-center">
        <Separator orientation="vertical" className="h-16 bg-primary" />
        <div className="lg:block hidden px-3">
          <Sheet>
            <SheetTrigger>
              <Menu className="stroke-2 hover:stroke-1 transition" />
            </SheetTrigger>

            <InfoSheetContent className="lg:min-w-[512px] overflow-auto">
              <div className="pt-10 space-y-5">
                <h1 className="text-2xl font-medium">About Us</h1>
                <div className="aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images2.imgbox.com/8f/29/ghhMViPG_o.jpg"
                    alt="Company meeting"
                    className="aspect-video"
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

                <div className="grid grid-cols-4 border border-primary divide-x divide-primary">
                  <Link href={""} className="py-5 grid place-content-center">
                    <FacebookIcon />
                  </Link>
                  <Link href={""} className="py-5 grid place-content-center">
                    <InstagramIcon />
                  </Link>
                  <Link href={""} className="py-5 grid place-content-center">
                    <YoutubeIcon />
                  </Link>
                  <Link href={""} className="py-5 grid place-content-center">
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
            </InfoSheetContent>
          </Sheet>
        </div>

        <div className="block lg:hidden px-3">
          <Sheet>
            <SheetTrigger>
              <Menu className="stroke-2 hover:stroke-1 transition" />
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
