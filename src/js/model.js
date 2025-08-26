import { getJSON } from "./helpers";

export const state = {
  currentPage: "",
  recipes: [],
};

export const updateCurrentPage = function (newPage) {
  state.currentPage = newPage || "home";
};

export const getRecipes = async function () {
  try {
    const recipes = await getJSON("/data.json");
    state.recipes = recipes;
  } catch (err) {
    throw err;
  }
};
