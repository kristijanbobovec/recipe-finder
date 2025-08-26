import View from "./View";
import { PAGES } from "../config";

class NavigationView extends View {
  _parentEl = document.querySelector(".nav__list");
  _menuBtn = document.querySelector(".nav__hamburger");

  constructor() {
    super();
    this._addHandlerToggleNavigation();
    this._addHandlerHideNavigation();
  }

  _addHandlerToggleNavigation() {
    // Click on menu icon open navigation
    this._menuBtn.addEventListener("click", () => this.toggleNavigation());
  }

  _addHandlerHideNavigation() {
    window.addEventListener("keydown", (e) => {
      if (!this._parentEl.classList.contains("nav__list--active")) return;
      if (e.code === "Escape") {
        this.toggleNavigation();
      }
    });

    window.addEventListener("pointerdown", (e) => {
      if (!this._parentEl.classList.contains("nav__list--active")) return;
      const navMenu = e.target.closest(".nav__list");
      const navButton = e.target.closest(".nav__hamburger");
      if (!navMenu && !navButton) {
        this.toggleNavigation();
      }
    });

    this._parentEl.addEventListener("click", (e) => {
      if (!this._parentEl.classList.contains("nav__list--active")) return;
      const navLink = e.target.closest(".nav__item");
      if (navLink) {
        this.toggleNavigation();
      }
    });
  }

  toggleNavigation() {
    this._parentEl.classList.toggle("nav__list--active");
    this._menuBtn.setAttribute(
      "aria-expanded",
      this._menuBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  }

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
        this._data.currentPage === page.link ? "nav__link--active" : ""
      }" ${this._data.currentPage === page.link ? 'aria-current="page"' : ""}>${
        page.label
      }</a>
      </li>`
    ).join("");

    return markup;
  }
}

export default new NavigationView();
