import { getJSON } from "./helpers";

export const state = {
  currentPage: "",
  recipes: [],
  filter: {
    query: {},
    results: [],
  },
};

export const updateCurrentPage = function (newPage) {
  state.currentPage = newPage || "home";
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
