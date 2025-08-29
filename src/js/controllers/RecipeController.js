import * as Model from "../model";
import RecipeView from "../views/RecipeView";
import RecipesListView from "../views/RecipesListView";
import { FEATURED_RECIPES } from "../config";

const recipeController = async function (recipeID) {
  try {
    await Model.getRecipe(recipeID);

    const [recipes] = RecipeView.render({
      data: Model.state.currentRecipe.recipe,
      toReturn: [".recipes"],
    });

    // Generate random recipes
    await Model.getFeaturedRecipes(FEATURED_RECIPES);

    // Render random recipes
    RecipesListView.render({
      data: Model.state.featuredRecipes,
      parentEl: recipes,
    });
  } catch (err) {
    console.log(err);
  }
};

export default recipeController;
