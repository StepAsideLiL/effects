import { Main } from "@/components/uis/main";
import EffectsAndStylesList from "./_parts/effects-styles";

export default function EffectsPage() {
  return (
    <Main>
      <section>
        <h1 className="text-center text-4xl font-medium">Effects And Styles</h1>
      </section>

      <EffectsAndStylesList />
    </Main>
  );
}
