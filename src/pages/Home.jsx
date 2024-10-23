import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularRecipes from "../components/PopularRecipes";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularRecipes />
      <Newsletter />
    </div>
  );
}
