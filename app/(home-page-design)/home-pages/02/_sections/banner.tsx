import Balancer from "react-wrap-balancer";

export default function Banner() {
  return (
    <section className="container rounded-b-3xl bg-slate-400/15 py-48">
      <div className="mx-auto max-w-4xl">
        <Balancer className="text-center text-6xl font-bold" as="h1">
          Your BRAND&apos;s New Home Here With Logo
        </Balancer>
      </div>
    </section>
  );
}
