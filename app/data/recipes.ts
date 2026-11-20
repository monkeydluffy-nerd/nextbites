export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
  category: string;
  emoji: string;
  difficulty: "Easy" | "Medium";
  rating: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "lemon-pasta",
    title: "Lemon Garden Pasta",
    cuisine: "Italian",
    minutes: 25,
    description:
      "Silky lemon sauce, fresh herbs, and a little parmesan make this a weeknight favorite.",
    category: "Comfort food",
    emoji: "🍋",
    difficulty: "Easy",
    rating: "4.9",
    ingredients: [
      "12 oz rigatoni or linguine",
      "2 tbsp olive oil",
      "2 garlic cloves, minced",
      "1 lemon, zested and juiced",
      "1/2 cup finely grated parmesan",
      "1/4 cup reserved pasta water",
      "2 tbsp chopped parsley",
      "Salt and black pepper",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Cook the pasta until just al dente, then reserve 1/4 cup of pasta water before draining.",
      "Warm the olive oil in a skillet over medium heat. Add the garlic and cook for about 30 seconds, just until fragrant.",
      "Stir in the lemon zest, lemon juice, parmesan, and reserved pasta water until a light sauce forms.",
      "Add the drained pasta and toss until every piece is coated. Finish with parsley, salt, and black pepper.",
    ],
  },
  {
    id: "miso-salmon",
    title: "Sticky Miso Salmon",
    cuisine: "Japanese",
    minutes: 30,
    description:
      "A sweet-savory miso glaze meets flaky salmon and a bowl of fluffy rice.",
    category: "High protein",
    emoji: "🍣",
    difficulty: "Medium",
    rating: "4.8",
    ingredients: [
      "2 salmon fillets",
      "2 tbsp white miso paste",
      "1 tbsp honey",
      "1 tbsp soy sauce",
      "1 tsp rice vinegar",
      "1 tsp sesame oil",
      "2 cups cooked rice",
      "Sliced green onion and sesame seeds",
    ],
    steps: [
      "Heat the oven to 425 F and line a small baking tray with parchment.",
      "Whisk the miso, honey, soy sauce, rice vinegar, and sesame oil into a smooth glaze.",
      "Brush the glaze over the salmon and bake for 10 to 12 minutes, until the fish flakes easily.",
      "Serve over warm rice and finish with sliced green onion and sesame seeds.",
    ],
  },
  {
    id: "crispy-tacos",
    title: "Crispy Cauliflower Tacos",
    cuisine: "Mexican",
    minutes: 35,
    description:
      "Smoky roasted cauliflower, crunchy slaw, and creamy lime crema in warm tortillas.",
    category: "Plant based",
    emoji: "🌮",
    difficulty: "Easy",
    rating: "4.9",
    ingredients: [
      "1 medium cauliflower, cut into florets",
      "1 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/2 tsp ground cumin",
      "8 small corn tortillas",
      "1 cup shredded red cabbage",
      "1/3 cup lime crema",
      "Fresh cilantro and lime wedges",
    ],
    steps: [
      "Heat the oven to 425 F. Toss the cauliflower with olive oil, smoked paprika, cumin, and a pinch of salt.",
      "Spread the cauliflower on a baking tray and roast for 22 to 25 minutes, turning once, until browned and tender.",
      "Warm the tortillas in a dry skillet and divide the roasted cauliflower and shredded cabbage between them.",
      "Drizzle with lime crema and serve with cilantro and lime wedges.",
    ],
  },
  {
    id: "tomato-soup",
    title: "Roasted Tomato Soup",
    cuisine: "Mediterranean",
    minutes: 40,
    description:
      "Slow-roasted tomatoes and garlic blended into a cozy soup with crusty bread.",
    category: "Comfort food",
    emoji: "🍅",
    difficulty: "Easy",
    rating: "4.7",
    ingredients: [
      "2 lb ripe tomatoes, halved",
      "1 small yellow onion, roughly chopped",
      "4 garlic cloves, peeled",
      "2 tbsp olive oil",
      "2 cups vegetable stock",
      "1/4 cup cream",
      "Fresh basil leaves",
      "Salt and black pepper",
    ],
    steps: [
      "Heat the oven to 400 F. Arrange the tomatoes, onion, and garlic on a baking tray and drizzle with olive oil.",
      "Season with salt and pepper, then roast for 30 minutes until soft and lightly caramelized.",
      "Transfer the roasted vegetables and their juices to a pot. Add the stock and simmer for 5 minutes.",
      "Blend until smooth, stir in the cream, and serve warm with fresh basil.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
