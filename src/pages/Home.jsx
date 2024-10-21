import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularRecipes from "../components/PopularRecipes";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularRecipes />
    </div>
  );
}
