import Balancer from "react-wrap-balancer";
import GlowingBlurBackground from "../_uis/glowing-blur-background";

export default function Banner() {
  return (
    <section className="container relative overflow-hidden rounded-b-3xl py-48 drop-shadow">
      <GlowingBlurBackground />

      <div className="mx-auto max-w-4xl">
        <Balancer className="text-center text-6xl font-bold" as="h1">
          Your BRAND&apos;s New Home Here With Logo
        </Balancer>
      </div>
    </section>
  );
}
