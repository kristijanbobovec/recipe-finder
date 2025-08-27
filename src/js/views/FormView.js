import View from "./View";

class FormView extends View {
  _menus;
  _handler;

  init() {
    this._menus = this._parentEl.querySelectorAll(".form-menu");
    this._addHandlerToggleDropdown();
    this._addHandlerCloseDropdown();
    this._addClearHandler();
    this._addChangeHandler();
  }

  subscribeFormHandler(handler) {
    this._handler = handler;
  }

  _sendDataToController() {
    const formData = new FormData(this._parentEl);
    const data = Object.fromEntries(formData);
    this._handler(data);
  }

  _addChangeHandler() {
    // Prevent default submit all is working with change.
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._parentEl.addEventListener("change", (e) => {
      e.preventDefault();

      // Get form data and set that to RecipesController
      console.log("krac");
      this._sendDataToController();
    });
  }

  _addClearHandler() {
    document.addEventListener("click", (e) => {
      const clearBtn = e.target.closest(".form-menu__clear");
      if (!clearBtn) return;

      e.preventDefault();

      const inputs = clearBtn
        .closest(".form-menu")
        .querySelectorAll(".form-menu__input");

      inputs.forEach((input) => (input.checked = false));

      // Get form data and set that to RecipesController
      this._sendDataToController();
    });
  }

  _addHandlerToggleDropdown() {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".form-button");
      if (btn) this._toggleMenu(btn);
    });
  }

  _addHandlerCloseDropdown() {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        if (
          [...this._menus].some((menu) =>
            menu.classList.contains("form-menu--active")
          )
        )
          this._closeMenus();
      }
    });

    document.addEventListener("pointerdown", (e) => {
      const btn = e.target.closest(".form-button");
      const menu = e.target.closest(".form-menu");

      if (!menu && !btn) {
        this._closeMenus();
      }
    });
  }

  _closeMenus(noCloseMenu = "") {
    this._menus.forEach((menu) => {
      if (noCloseMenu === menu) return;
      menu.classList.remove("form-menu--active");
    });
  }

  _toggleMenu(btn = "") {
    if (!btn) return;
    const menuToOpen = this._parentEl.querySelector(
      `#${btn.getAttribute("aria-controls")}`
    );
    this._closeMenus(menuToOpen);
    menuToOpen.classList.toggle("form-menu--active");
  }

  _generateMarkup() {}
}

export default new FormView();
