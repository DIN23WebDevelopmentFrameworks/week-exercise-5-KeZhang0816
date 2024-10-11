import React from "react";
import { IRecipe } from "./types";

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe-card">
      <h2>{recipeData.name}</h2>
      <img src={recipeData.image} alt={recipeData.name} />
      <p><strong>Ingredients:</strong> {recipeData.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipeData.instructions.join(" ")}</p>
    </div>
  );
};

export default Recipe;
