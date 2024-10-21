import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Hero() {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    async function fetchTopRecipes() {
      const response = await fetch("https://dummyjson.com/recipes?limit=5");
      const data = await response.json();

      if (data) {
        setTopRecipes(data.recipes);
      }
    }

    fetchTopRecipes();
  }, []);

  return (
    <div className="carousel w-full">
      {topRecipes?.map((recipe) => {
        return (
          <div
            id={"slide" + recipe.id}
            className="carousel-item relative w-full"
          >
            <img
              src={recipe.image}
              className="w-full h-[35rem] object-center object-cover"
            />
            <div className="absolute bg-black/50 text-white inset-0 flex items-center justify-center -mt-[18rem] md:-mt-0 flex-col">
              <span className="flex items-center gap-2 text-xl pb-6">
                <HiTrendingUp className="size-8" />
                85% would make this again.
              </span>
              <h1 className="lg:text-6xl text-3xl md:text-5xl font-extrabold tracking-tight pb-4">
                {recipe.name}
              </h1>
              <p className="text-center max-w-[60ch] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                non quaerat perferendis voluptatum suscipit nemo quidem!
                Voluptas perferendis saepe minus error illo facere vero.
                Adipisci error minima amet dignissimos delectus.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={"#slide" + (recipe.id - 1)}
                className="btn btn-circle btn-sm"
              >
                ❮
              </a>
              <a
                href={"#slide" + (recipe.id + 1)}
                className="btn btn-circle btn-sm"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
