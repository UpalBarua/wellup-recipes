import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Recipe() {
  const params = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchTopRecipes() {
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.id}`
      );
      const data = await response.json();

      if (data) {
        setRecipe(data);
      }
    }

    fetchTopRecipes();
  }, []);

  return <div>{JSON.stringify(recipe)}</div>;
}
