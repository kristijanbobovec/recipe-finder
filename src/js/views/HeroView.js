import View from "./View";

class HeroView extends View {
  _parentEl = document.querySelector(".hero");

  _updateHeroClass() {
    this._parentEl.classList.remove(...this._parentEl.classList);
    this._parentEl.classList.add(`hero`);
    this._parentEl.classList.add(`hero--${this._data.currentPage}`);
  }

  _generateMarkup() {
    return this._getHero(this._data.currentPage);
  }

  _getHero(page) {
    switch (page) {
      case "home":
      case "":
        return `
        <div class="container">
            <div class="hero__content">
            <div class="hero__header">
                <h1 class="text-preset-1 u-text-center" id="hero-title">
                <span class="u-underline">Healthy</span> meals, zero fuss
                </h1>
                <p class="u-max-chars-40 u-text-center">
                Discover eight quick, whole-food recipes that you can cook
                tonight—no processed junk, no guesswork.
                </p>
            </div>
            <a href="#recipes" class="btn btn--m text-preset-5">Start exploring</a>
            <div class="hero__image skeleton">
              <picture class="lazy-load">
                <source media="(min-width: 701px)" data-srcset="./src/assets/images/image-home-hero-large.webp">
                <source media="(max-width: 700px)" data-srcset="./src/assets/images/image-home-hero-small.webp">

                <img
                  src="./src/assets/images/placeholder-image-rectangle.webp"
                  alt="Hero image"
                  data-src="./src/assets/images/image-home-hero-small.webp"
                  class="u-responsive-img"
                />
              </picture>
            </div>
            </div>
        </div>
        `;
      case "about":
        return `
        <div class="container">
          <div class="hero__content">
            <div class="hero__main">
              <div class="badge text-preset-5">Our mission</div>
              <h1 class="text-preset-2" id="hero-title">
                Help more people cook nourishing meals, more often.
              </h1>
              <div class="hero__text">
                <p>
                  Healthy Recipe Finder was created to prove that healthy eating
                  can be convenient, affordable, and genuinely delicious.
                </p>
                <p>
                  We showcase quick, whole-food dishes that anyone can master—no
                  fancy equipment, no ultra-processed shortcuts—just honest
                  ingredients and straightforward steps.
                </p>
              </div>
            </div>
            <div class="hero__image skeleton">
              <picture class="lazy-load">
                <source media="(min-width: 701px)" data-srcset="./src/assets/images/image-about-our-mission-large.webp">
                <source media="(max-width: 700px)" data-srcset="./src/assets/images/image-about-our-mission-small.webp">

                <img
                  src="./src/assets/images/placeholder-image-rectangle.webp"
                  alt="Hero image"
                  data-src="./src/assets/images/image-about-our-mission-small.webp"
                  class="u-responsive-img"
                />
              </picture>
            </div>
          </div>
        </div>
        `;
      case "recipes":
        return `<div class="container">
          <div class="hero__content">
            <div class="hero__main">
              <h1 class="text-preset-2 u-text-center" id="hero-title">
                Explore our simple, healthy recipes
              </h1>
              <p class="u-max-chars-60 u-text-center">
                Discover eight quick, whole-food dishes that fit real-life
                schedules and taste amazing. Use the search bar to find a recipe
                by name or ingredient, or simply scroll the list and let
                something delicious catch your eye.
              </p>
            </div>
          </div>
        </div>`;
      default:
        return "";
    }
  }
}

export default new HeroView();
