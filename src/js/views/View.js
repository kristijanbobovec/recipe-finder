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

    // If parent
    if (parentEl) this._parentEl = parentEl;

    // Render error if there is an error
    if (Array.isArray(this._data) && this._data.length === 0) {
      return this.renderError();
    }

    // Load markup
    const markup = this._generateMarkup();
    if (!render) return markup;

    // If hero
    if (hero) this._updateHeroClass();

    // Clear old markup
    this._clear();

    // Add new markup
    this._parentEl.insertAdjacentHTML("afterbegin", markup);

    // Lazy-loading images
    this._lazyLoadImages();

    // Return if needed new parent elements.
    if (toReturn.length > 0) {
      const parentElements = [];
      toReturn.forEach((el) => {
        parentElements.push(document.querySelector(el));
      });
      return parentElements;
    }
  }

  renderMessage(message = this._message) {
    this._clear();
    const markup = `
    <div class="message">
      <svg class="message__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
        <p class="message__text">${message}</p>
    </div>`;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(error = this._error) {
    this._clear();
    const markup = `
    <div class="message message--error">
        <svg
          class="message__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <p class="message__text">${error}</p>
    </div>`;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
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

  _loadImage(entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        const picture = entry.target;

        picture.querySelectorAll("source").forEach((source) => {
          source.srcset = source.dataset.srcset;
        });

        const image = picture.querySelector("img");

        // Set fallback src
        image.src = image.dataset.src;

        image.addEventListener(
          "load",
          () => {
            picture.classList.remove("lazy-load");
          },
          { once: true }
        );

        observer.unobserve(image);
      }
    });
  }

  _lazyLoadImages() {
    const imagesToLoad = this._parentEl.querySelectorAll(".lazy-load");

    const lazyLoadObserver = new IntersectionObserver(this._loadImage, {});

    // Observe all images
    imagesToLoad.forEach((img) => lazyLoadObserver.observe(img));
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }
}
