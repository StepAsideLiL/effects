import Balancer from "react-wrap-balancer";
import { Input } from "../_uis/input";
import { Textarea } from "../_uis/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section>
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-end gap-10 py-32">
        <div className="w-full space-y-5 pb-20">
          <Balancer className="text-4xl font-semibold" as={"h1"}>
            We are also Approachable 👋
          </Balancer>
          <p>
            Ready to collaborate? Reach out to info@approachable.com for
            inquiries and partnerships.
          </p>
        </div>

        <div className="w-full rounded-3xl p-20 shadow-2xl shadow-muted/30">
          <form className="space-y-10">
            <div className="flex w-full items-center gap-5">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
            </div>

            <div className="flex w-full items-center gap-5">
              <Input placeholder="Type of Tech" />
              <Input placeholder="Your Budget" />
            </div>

            <Textarea placeholder="Write Your Message" />

            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
