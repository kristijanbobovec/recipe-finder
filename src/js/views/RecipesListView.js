import View from "./View";
import { getImage } from "../helpers";

class RecipesListView extends View {
  _error = "No recipes found.";

  _generateMarkup() {
    return this._generateRecipeItems();
  }

  _generateRecipeItems() {
    const recipes = this._data;
    return recipes
      .map(
        (recipe) =>
          `
        <article class="recipes__item">
            <header class="recipes__header">
              <div class="recipes__img skeleton">
                <picture class="lazy-load">
                  <source data-srcset="${getImage(
                    recipe.image.small.split("/")[3]
                  )}">

                  <img
                    src="${getImage()}placeholder-image-rectangle.webp"
                    alt="Hero image"
                    data-src="${getImage(recipe.image.small.split("/")[3])}"
                    class="u-responsive-img"
                  />
                </picture>
              </div>
              <div class="recipes__info">
                <div class="recipes__description">
                  <h2 class="text-preset-5">${recipe.title}</h2>
                  <p class="text-preset-9">
                    ${recipe.overview}
                  </p>
                </div>
                <div class="recipes__details">
                  <div class="recipes__detail">
                    <svg class="recipes__icon">
                      <use href="#icon-servings"></use>
                    </svg>
                    <span class="text-preset-9">Servings: ${
                      recipe.servings
                    }</span>
                  </div>
                  <div class="recipes__detail">
                    <svg class="recipes__icon">
                      <use href="#icon-prep-time"></use>
                    </svg>
                    <span class="text-preset-9">Prep: ${recipe.prepMinutes} ${
            recipe.prepMinutes > 1 ? "mins" : "min"
          }</span>
                  </div>
                  <div class="recipes__detail">
                    <svg class="recipes__icon">
                      <use href="#icon-cook-time"></use>
                    </svg>
                    <span class="text-preset-9">Cook: ${recipe.cookMinutes} ${
            recipe.cookMinutes > 1 ? "mins" : "min"
          }</span>
                  </div>
                </div>
              </div>
            </header>
            <a href="#recipe/${
              recipe.id
            }" class="btn btn--xl text-preset-8">View Recipe</a>
        </article>`
      )
      .join("");
  }
}

export default new RecipesListView();
