import View from "./View";
import RecipesListView from "./RecipesListView";

class RecipesView extends View {
  _parentEl = document.querySelector("main.container");

  _generateMarkup() {
    return `
      <section class="section section--bottom-padding">
        <form action="" class="filter-bar">
          <div class="filter-bar__filters">
            <div class="filter-bar__group">
              <button
                class="form-button text-preset-7"
                type="button"
                aria-expanded="false"
                aria-controls="form-menu--1"
              >
                Max Prep Time
                <svg class="form-button__icon">
                  <use href="#icon-chevron-down"></use>
                </svg>
              </button>

              <ul class="form-menu" id="form-menu--1">
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="prep-time"
                      class="form-menu__input"
                      value="0"
                    />0 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="prep-time"
                      class="form-menu__input"
                      value="5"
                    />5 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="prep-time"
                      class="form-menu__input"
                      value="10"
                    />10 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <button type="button" class="text-preset-9 form-menu__clear">Clear</button>
                </li>
              </ul>
            </div>

            <div class="filter-bar__group">
              <button
                class="form-button text-preset-7"
                type="button"
                aria-expanded="false"
                aria-controls="form-menu--2"
              >
                Max Cook Time
                <svg class="form-button__icon">
                  <use href="#icon-chevron-down"></use>
                </svg>
              </button>

              <ul class="form-menu" id="form-menu--2">
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="cook-time"
                      class="form-menu__input"
                      value="0"
                    />0 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="cook-time"
                      class="form-menu__input"
                      value="5"
                    />5 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="cook-time"
                      class="form-menu__input"
                      value="10"
                    />10 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="cook-time"
                      class="form-menu__input"
                      value="15"
                    />15 minutes</label
                  >
                </li>
                <li class="form-menu__item">
                  <label class="form-menu__label text-preset-7"
                    ><input
                      type="radio"
                      name="cook-time"
                      class="form-menu__input"
                      value="20"
                    />20 minutes</label
                  >
                </li>

                <li class="form-menu__item">
                  <button type="button" class="text-preset-9 form-menu__clear">Clear</button>
                </li>
              </ul>
            </div>
          </div>

          <div class="form-search text-preset-7">
            <label for="recipe" class="form-search__label"></label>
            <button
              class="form-search__submit"
              type="submit"
              aria-label="Search recipes"
            >
              <svg class="form-search__icon">
                <use href="#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              name="recipe"
              id="recipe"
              class="form-search__input"
              placeholder="Search by name or ingredient..."
              aria-label="Search recipes by name or ingredient"
            />
          </div>
        </form>

        <div class="recipes">
        </div>
      </section>  
    `;
  }
}

export default new RecipesView();
