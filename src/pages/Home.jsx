import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularRecipes from "../components/PopularRecipes";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularRecipes />
      <Newsletter />
    </div>
  );
}
