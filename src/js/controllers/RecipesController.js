import * as Model from "../model";
import RecipesView from "../views/RecipesView";
import RecipesListView from "../views/RecipesListView";
import FormView from "../views/FormView";

const controlForm = function (data) {
  Model.filterRecipes(data);

  RecipesListView.render({ data: Model.state.filter.results });
};

const recipesController = async function () {
  try {
    await Model.getRecipes();
    const [recipes, filterBar] = RecipesView.render({
      toReturn: [".recipes", ".filter-bar"],
    });
    RecipesListView.render({ data: Model.state.recipes, parentEl: recipes });
    FormView.render({ parentEl: filterBar, render: false });

    /* Init all hanlders because this needs to be called after parent element is set.
    Because of setting parent element in render method this needs to be called after render method.
     */
    FormView.init();

    /* Subscribing handler function to FormView to establish communication between model and controller */
    FormView.subscribeFormHandler(controlForm);
  } catch (err) {
    console.log(err);
  }
};

export default recipesController;
