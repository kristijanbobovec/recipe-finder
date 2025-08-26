import View from "./View";
import { SOCIAL_MEDIA_LINKS } from "../config";

class FooterView extends View {
  _parentEl = document.querySelector(".footer");

  _generateMarkup() {
    return `
      <div class="container">
        <p class="footer__text">Made with ❤️ and 🥑</p>
        <nav class="footer-nav" aria-label="Social network links">
          <ul class="footer-nav__list">
          ${this._generateLinks()}
          </ul>
        </nav>
      </div>
    `;
  }

  _generateLinks() {
    const markup = SOCIAL_MEDIA_LINKS.map(
      (media) => `
            <li class="footer-nav__item">
              <a href="${media.link}" class="footer-nav__link">
                <img
                  src="${media.icon()}"
                  alt="Follow us on ${media.name}"
                />
              </a>
            </li>`
    ).join("");
    return markup;
  }
}

export default new FooterView();
