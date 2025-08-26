import View from "./View";

class CtaView extends View {
  _generateMarkup() {
    return `
      <section class="section section--cta">
        <div class="section__content section__content--bottom">
          <div class="section__description">
            <h2 class="text-preset-2 u-text-center-always">
              Ready to cook smarter?
            </h2>
            <p class="u-text-center-always">
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
          </div>
          <a href="#recipes" class="btn btn--s text-preset-5">Browse recipes</a>
        </div>
      </section>`;
  }
}

export default new CtaView();
