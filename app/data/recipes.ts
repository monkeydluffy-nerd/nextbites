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
  },
];
