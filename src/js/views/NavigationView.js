import View from "./View";
import { PAGES } from "../config";

class NavigationView extends View {
  _parentEl = document.querySelector(".nav__list");

  _generateMarkup() {
    return `
        ${this._generateLinks()}

        <li class="nav__item nav__item-button">
            <a href="#recipes" class="nav__link-button btn btn--xs text-preset-5">Browse recipes</a>
        </li>
    `;
  }

  _generateLinks() {
    const markup = PAGES.map(
      (page) => `
      <li class="nav__item">
        <a href="#${page.link}" data-updatable class="nav__link text-preset-7 ${
        this._data.currentPage == page.link ? "nav__link--active" : ""
      }" ${this._data.currentPage == page.link ? 'aria-current="page"' : ""}>${
        page.label
      }</a>
      </li>`
    ).join("");

    return markup;
  }
}

export default new NavigationView();
