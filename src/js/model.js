import { getJSON } from "./helpers";

export const state = {
  currentPage: "",
  recipes: [],
  featuredRecipes: [],
  currentRecipe: {
    id: -1,
    recipe: {},
  },
  filter: {
    query: {},
    results: [],
  },
};

export const updateCurrentPage = function (newPage) {
  state.currentPage = newPage || "home";
};

export const getFeaturedRecipes = async function (n) {
  if (n > state.recipes.length - 1)
    throw new Error("Error loading featured recipes.");

  const availableRecipes = state.recipes.filter(
    (recipe) => recipe.id !== state.currentRecipe.id
  );

  for (let i = availableRecipes.length - 1; i > 0; i--) {
    const j = Math.trunc(Math.random() * (i + 1));
    [availableRecipes[i], availableRecipes[j]] = [
      availableRecipes[j],
      availableRecipes[i],
    ];
  }

  state.featuredRecipes = availableRecipes.slice(0, n);
};

export const getRecipe = async function (newRecipe) {
  try {
    state.currentRecipe.id = newRecipe;
    if (state.recipes.length <= 0) await getRecipes();

    const recipe = state.recipes.find(
      (recipe) => recipe.id === state.currentRecipe.id
    );

    if (state.currentRecipe.id === -1 || !recipe)
      throw new Error("Recipe not found.");

    state.currentRecipe.recipe = recipe;
  } catch (err) {
    throw err;
  }
};

export const filterRecipes = function (data) {
  // Update query
  state.filter.query = data;

  const {
    "cook-time": cookTimeRaw,
    "prep-time": prepTimeRaw,
    recipe: queryRaw,
  } = state.filter.query;

  const cookTime = +cookTimeRaw;
  const prepTime = +prepTimeRaw;
  const query = queryRaw
    .trim()
    .split(/\s+/)
    .map((word) => word.toLowerCase())
    .join(" ");

  // Results
  let recipes = state.recipes;

  if (Number.isFinite(cookTime)) {
    recipes = recipes.filter((recipe) => +recipe.cookMinutes <= cookTime);
  }

  if (Number.isFinite(prepTime)) {
    recipes = recipes.filter((recipe) => +recipe.prepMinutes <= prepTime);
  }

  if (query) {
    recipes = recipes.filter(
      (recipe) =>
        recipe.title
          .split(" ")
          .map((word) => word.toLowerCase())
          .join(" ")
          .includes(query) ||
        recipe.ingredients.some((ing) => ing.includes(query))
    );
  }

  // Update state
  state.filter.results = recipes;
};

export const getRecipes = async function () {
  try {
    const recipes = await getJSON("/data.json");
    state.recipes = recipes;
  } catch (err) {
    throw err;
  }
};
