import React, { useState, useEffect } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { IRecipe } from "./types";

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("https://dummyjson.com/recipes/tags");
      const data = await response.json();
      setTags(data);
    };
    fetchTags();
  }, []);

  const handleTagClick = async (tagName: string) => {
    setSelectedTag(tagName);
    const response = await fetch(`https://dummyjson.com/recipes/tag/${tagName}`);
    const data = await response.json();
    setRecipes(data.recipes);
  };

  const handleBack = () => {
    setSelectedTag(null);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <>
          <button onClick={handleBack}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagClick} />
      )}
    </div>
  );
};

export default App;
