import View from "./View";
import CtaView from "./CtaView";
import { getImage } from "../helpers";

class AboutView extends View {
  _parentEl = document.querySelector("main.container");

  _generateMarkup() {
    return `
        <section class="section u-section-divider">
        <div class="section__content section__content--right">
          <div
            class="section__description u-self-start section__description--small"
          >
            <h2 class="text-preset-2">Why we exist</h2>
          </div>
          <ul class="list">
            <li class="list__item">
              <h3 class="text-preset-4">Cut through the noise.</h3>
              <p>
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </li>
            <li class="list__item">
              <h3 class="text-preset-4">Empower home kitchens.</h3>
              <p>
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </li>
            <li class="list__item">
              <h3 class="text-preset-4">Make healthy look good.</h3>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="section u-section-divider">
        <div class="section__content section__content--right">
          <div
            class="section__description u-self-start section__description--small"
          >
            <h2 class="text-preset-2">Our food philosophy</h2>
          </div>
          <ul class="list">
            <li class="list__item">
              <h3 class="text-preset-4">Whole ingredients first.</h3>
              <p>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </li>
            <li class="list__item">
              <h3 class="text-preset-4">Flavor without compromise.</h3>
              <p>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </li>
            <li class="list__item">
              <h3 class="text-preset-4">Respect for time.</h3>
              <p>
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </li>
            <li class="list__item">
              <h3 class="text-preset-4">Sustainable choices.</h3>
              <p>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="section">
        <div class="section__content section__content--right">
          <div class="section__description section__description--small">
            <h2 class="text-preset-2">Beyond the plate</h2>
            <div class="section__text">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:

              <ul class="u-default-list">
                <li>Encourage family dinners and social cooking.</li>
                <li>
                  Reduce reliance on single-use packaging and delivery waste.
                </li>
                <li>
                  Spark curiosity about seasonal produce and local agriculture.
                </li>
              </ul>
            </div>
          </div>
          <div class="section__image skeleton">
            <picture class="lazy-load">
              <source media="(min-width: 701px)" data-srcset="${getImage(
                "image-about-beyond-the-plate-large.webp"
              )}">
              <source media="(max-width: 700px)" data-srcset="${getImage(
                "image-about-beyond-the-plate-small.webp"
              )}">

              <img
                src="${getImage("placeholder-image-rectangle.webp")}"
                alt="Hero image"
                data-src="${getImage(
                  "image-about-beyond-the-plate-small.webp"
                )}"
                class="u-responsive-img"
              />
            </picture>
          </div>
        </div>
      </section>
      
      ${CtaView.render({ render: false })}`;
  }
}

export default new AboutView();
