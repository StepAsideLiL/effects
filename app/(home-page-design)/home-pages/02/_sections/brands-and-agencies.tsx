import Marquee from "react-fast-marquee";

const companies = [
  "SkyCode Inc.",
  "Evergreen Tech Solutions",
  "AstraNova Robotics",
  "Tranquil Bay Studios",
  "Zephyr Delivery Network",
  "Luminary Labs",
  "Mythos Design Collective",
  "Nexus Bioengineering",
  "Chrono Mechanics",
  "Wanderlust Travel Co.",
];

export default function BrandsAndAgencies() {
  return (
    <section className="space-y-10 py-20">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-medium">
          Top Brands & Agencies
        </h1>
      </div>

      <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/6 before:bg-gradient-to-r before:from-background before:to-foreground/0 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/6 after:bg-gradient-to-r after:from-foreground/0 after:to-background after:content-['']">
        <Marquee pauseOnClick autoFill>
          {companies.map((company, i) => (
            <div
              key={i}
              className="mx-20 flex size-56 select-none items-center justify-center overflow-hidden rounded-full bg-muted p-5 text-center text-2xl font-medium"
            >
              {company}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
