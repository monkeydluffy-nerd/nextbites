import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="recipe-detail-page">
      <Link className="back-link" href="/#recipes">
        <span aria-hidden="true">←</span> All recipes
      </Link>
      <Suspense
        fallback={<p className="recipe-loading">Loading recipe details...</p>}
      >
        <RecipeDetails params={params} />
      </Suspense>
    </main>
  );
}

async function RecipeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="recipe-detail">
      <div
        className={`recipe-art recipe-art-${recipe.id} detail-art`}
        aria-hidden="true"
      >
        <span className="detail-emoji">{recipe.emoji}</span>
      </div>
      <header className="detail-copy">
        <p className="recipe-cuisine">{recipe.cuisine}</p>
        <h1>{recipe.title}</h1>
        <p className="detail-description">{recipe.description}</p>
        <div className="detail-meta">
          <span>{recipe.minutes} min</span>
          <span>{recipe.difficulty}</span>
          <span>
            <span aria-hidden="true">★</span> {recipe.rating}
          </span>
        </div>
      </header>
      <div className="detail-sections">
        <section>
          <p className="eyebrow">What you need</p>
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={`${recipe.id}-${ingredient}`}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">Let&apos;s get cooking</p>
          <h2>Method</h2>
          <ol className="steps-list">
            {recipe.steps.map((step) => (
              <li key={`${recipe.id}-${step}`}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
