import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">
          <span aria-hidden="true">✳</span> A little inspiration for your table
        </p>
        <h1>
          Good food,
          <br />
          <span>good mood.</span>
        </h1>
        <p className="hero-description">
          Simple, feel-good recipes for whatever you&apos;re craving today.
        </p>
        <a className="hero-link" href="#recipes">
          Find your next bite <span aria-hidden="true">↓</span>
        </a>
        <span className="hero-sparkle hero-sparkle-one" aria-hidden="true">
          ✳
        </span>
        <span className="hero-sparkle hero-sparkle-two" aria-hidden="true">
          ✦
        </span>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The good stuff</p>
            <h2>Recipes to fall for</h2>
          </div>
          <p className="recipe-count">
            <span>{recipes.length}</span> fresh ideas
          </p>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}
