import * as Model from "../model";
import RecipesView from "../views/RecipesView";
import RecipesListView from "../views/RecipesListView";

const recipesController = async function () {
  try {
    await Model.getRecipes();
    const [recipes] = RecipesView.render({ toReturn: [".recipes"] });
    RecipesListView.render({ data: Model.state.recipes, parentEl: recipes });
  } catch (err) {
    console.log(err);
  }
};

export default recipesController;
