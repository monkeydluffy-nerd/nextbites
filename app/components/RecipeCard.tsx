import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className={`recipe-art recipe-art-${recipe.id}`} aria-hidden="true">
        <span className="recipe-emoji">{recipe.emoji}</span>
        <span className="recipe-category">{recipe.category}</span>
        <span className="recipe-rating">
          <span aria-hidden="true">★</span> {recipe.rating}
        </span>
      </div>
      <div className="recipe-content">
        <p className="recipe-cuisine">{recipe.cuisine}</p>
        <h2>{recipe.title}</h2>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span>
            <span aria-hidden="true">◷</span> {recipe.minutes} min
          </span>
          <span className="meta-divider" aria-hidden="true">
            ·
          </span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
