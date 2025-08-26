export default class View {
  _data;

  render(options = {}) {
    /* Deconstruct options */
    const data = options.data ?? {};
    const render = options.render ?? true;
    const hero = options.hero ?? false;
    const toReturn = options.toReturn ?? [];
    const parentEl = options.parentEl ?? "";

    // Set data
    this._data = data;

    // Load markup
    const markup = this._generateMarkup();
    if (!render) return markup;

    // If hero
    if (hero) this._updateHeroClass();

    // If parent
    if (parentEl) this._parentEl = parentEl;

    // Clear old markup
    this._clear();

    // Add new markup
    this._parentEl.insertAdjacentHTML("afterbegin", markup);

    // Return if needed new parent elements.
    if (toReturn.length > 0) {
      const parentElements = [];
      toReturn.forEach((el) => {
        parentElements.push(document.querySelector(el));
      });
      return parentElements;
    }
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = newDOM.querySelectorAll("[data-updatable]");
    const oldElements = this._parentEl.querySelectorAll("[data-updatable]");

    newElements.forEach((el, i) => {
      if (el.isEqualNode(oldElements[i])) return;
      oldElements[i].textContent = el.textContent;

      Array.from(el.attributes).forEach((attr) => {
        oldElements[i].setAttribute(attr.name, attr.value);
      });
    });
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }
}
