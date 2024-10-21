import React from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { TfiTimer } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";

export default function PopularRecipes() {
  const { recipes } = useFetchRecipes(9);

  return (
    <section className="pt-20 pb-10 container mx-auto px-2">
      <h2 className="text-4xl font-extrabold tracking-tight pb-10">
        Popular Recipes.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recipes.map((recipe) => {
          return (
            <div className="bg-base-200 border border-base-300 rounded shadow-sm">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded p-2"
              />
              <div className="px-4 py-3">
                <h4 className="text-xl font-bold pb-4">{recipe.name}</h4>
                <div className="space-y-2">
                  <span className="flex items-center gap-x-2 font-medium">
                    <TfiTimer /> Cook Time: {recipe.cookTimeMinutes}
                  </span>
                  <span className="flex items-center gap-x-2 font-medium">
                    <GoPeople />
                    Servings: {recipe.servings}
                  </span>
                  <span className="flex items-center gap-x-2 font-medium">
                    <HiOutlineFlag />
                    Cuisine: {recipe.cuisine}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center pt-10">
        <a href="#" className="btn btn-outline">
          View More
        </a>
      </div>
    </section>
  );
}
