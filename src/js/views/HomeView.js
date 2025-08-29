import View from "./View";
import CtaView from "./CtaView";
import { getImageFolder } from "../helpers";

class HomeView extends View {
  _parentEl = document.querySelector("main.container");

  _generateMarkup() {
    return `
    <section class="section u-section-divider">
        <div class="section__content section__content--bottom">
          <h2 class="text-preset-2">What you'll get</h2>
          <div class="features">
            <div class="features__item">
              <div class="features__icon">
                <img
                  class="features__img"
                  src="${getImageFolder()}/icon-whole-food-recipes.svg"
                  alt="Whole-food recipes"
                />
              </div>
              <div class="features__description">
                <h3 class="text-preset-3">Whole-food recipes</h3>
                <p>Each dish uses everyday, unprocessed ingredients.</p>
              </div>
            </div>
            <div class="features__item">
              <div class="features__icon">
                <img
                  class="features__img"
                  src="${getImageFolder()}/icon-minimum-fuss.svg"
                  alt="Minimum fuss"
                />
              </div>
              <div class="features__description">
                <h3 class="text-preset-3">Minimum fuss</h3>
                <p>
                  All recipes are designed to make eating healthy quick and
                  easy.
                </p>
              </div>
            </div>
            <div class="features__item">
              <div class="features__icon">
                <img
                  class="features__img"
                  src="${getImageFolder()}/icon-search-in-seconds.svg"
                  alt="Search in seconds"
                />
              </div>
              <div class="features__description">
                <h3 class="text-preset-3">Search in seconds</h3>
                <p>
                  Filter by name or ingredient and jump straight to the recipe
                  you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section__content section__content--right">
          <div class="section__description">
            <h2 class="text-preset-2">Built for real life</h2>
            <p>
              Cooking shouldn't be complicated. These recipes come in under
              <span class="text-preset-5 u-underline u-underline--solid"
                >30 minutes</span
              >
              of active time, fit busy schedules, and taste good enough to
              repeat.
            </p>
            <p>
              Whether you're new to the kitchen or just need fresh ideas, we've
              got you covered.
            </p>
          </div>
          <div class="section__image skeleton">
            <picture class="lazy-load">
              <source media="(min-width: 701px)" data-srcset="${getImageFolder()}/image-home-real-life-large.webp">
              <source media="(max-width: 700px)" data-srcset="${getImageFolder()}/image-home-real-life-small.webp">

              <img
                src="${getImageFolder()}/placeholder-image-rectangle.webp"
                alt="Hero image"
                data-src="${getImageFolder()}/image-home-real-life-small.webp"
                class="u-responsive-img"
              />
            </picture>
          </div>
        </div>
      </section> 
      
      ${CtaView.render({ render: false })}`;
  }
}

export default new HomeView();
