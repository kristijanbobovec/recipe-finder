import View from "./View";
import { getImageFolder } from "../helpers";

class RecipeView extends View {
  _parentEl = document.querySelector("main.container");

  _generateMarkup() {
    return `
        <section class="section section--padding-sm u-section-divider">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol class="breadcrumb__list">
            <li class="breadcrumb__item">
              <a href="#recipes" class="breadcrumb__link text-preset-7">Recipes</a>
            </li>
            <li class="breadcrumb__item">
              <span
                class="breadcrumb__link breadcrumb__link--active text-preset-7"
                >${this._data.title}</span
              >
            </li>
          </ol>
        </nav>
        <div class="recipe" aria-labelledby="recipe-title">
          <div class="recipe__img skeleton">
            <picture class="lazy-load">
              <source media="(min-width: 701px)" data-srcset="${getImageFolder()}/${
      this._data.image.large.split("/")[3]
    }">
              <source media="(max-width: 700px)" data-srcset="${getImageFolder()}/${
      this._data.image.small.split("/")[3]
    }">

              <img
                src="${getImageFolder()}/placeholder-image-rectangle.webp"
                alt="Hero image"
                data-src="${getImageFolder()}/${
      this._data.image.small.split("/")[3]
    }"
                class="u-responsive-img"
              />
            </picture>
          </div>
          <div class="recipe__info">
            <h1 class="text-preset-2" id="recipe-title">
              ${this._data.title}
            </h1>
            <p>
              ${this._data.overview}
            </p>
            <div class="recipes__details">
              <div class="recipes__detail">
                <svg class="recipes__icon">
                  <use href="#icon-servings"></use>
                </svg>
                <span class="text-preset-9">Servings: ${
                  this._data.servings
                }</span>
              </div>
              <div class="recipes__detail">
                <svg class="recipes__icon">
                  <use href="#icon-prep-time"></use>
                </svg>
                <span class="text-preset-9">Prep: ${this._data.prepMinutes} ${
      this._data.prepMinutes > 1 ? "mins" : "min"
    }</span>
              </div>
              <div class="recipes__detail">
                <svg class="recipes__icon">
                  <use href="#icon-cook-time"></use>
                </svg>
                <span class="text-preset-9">Cook: ${this._data.prepMinutes} ${
      this._data.prepMinutes > 1 ? "mins" : "min"
    }</span>
              </div>
            </div>
            <div class="recipe__ingredients">
              <h2 class="text-preset-4">Ingredients</h2>
              <ul class="list list--sm">
                ${this._generateIngredients()}
            </div>
            <div class="recipe__instructions">
              <h2 class="text-preset-4">Instructions:</h2>
              <ol class="list list--sm">
                ${this._generateInstructions()}
              </ol>
            </div>
          </div>
        </div>
      </section>

        <section class="section section--padding-sm">
            <h2 class="text-preset-3">More recipes</h2>
            <div class="recipes"> </div>
        </section>
    `;
  }

  _generateIngredients() {
    return this._data.ingredients
      .map((ing) => this._generateListItem(ing))
      .join("");
  }
  _generateInstructions() {
    return this._data.instructions
      .map((instructions) => this._generateListItem(instructions))
      .join("");
  }

  _generateListItem(data) {
    return `<li class="list__item">
              <span>
                ${data}
              </span>
            </li>`;
  }
}

export default new RecipeView();
