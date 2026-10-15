import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Models } from "@/components/site/Models";
import { Clients } from "@/components/site/Clients";
import { FocusAreas } from "@/components/site/FocusAreas";
import { WhoWeAre } from "@/components/site/WhoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Models />
      <Clients />
      <FocusAreas />
      <WhoWeAre />
    </>
  );
}
