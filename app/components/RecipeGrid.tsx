"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matchingRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );

  return (
    <>
      <div className="recipe-search">
        <label htmlFor="recipe-search-input">Search by recipe or cuisine</label>
        <div className="search-input-wrap">
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            id="recipe-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try pasta or Italian"
            aria-describedby="recipe-search-results"
          />
          {query && (
            <button
              className="clear-search"
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear recipe search"
            >
              ×
            </button>
          )}
        </div>
        <p
          className="search-result-count"
          id="recipe-search-results"
          aria-live="polite"
        >
          {matchingRecipes.length}{" "}
          {matchingRecipes.length === 1 ? "recipe" : "recipes"}
        </p>
      </div>

      {matchingRecipes.length > 0 ? (
        <div className="recipe-grid">
          {matchingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="no-recipes" role="status">
          No recipes match &quot;{query.trim()}&quot;. Try a different title or
          cuisine.
        </p>
      )}
    </>
  );
}
