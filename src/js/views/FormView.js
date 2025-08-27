import View from "./View";

class FormView extends View {
  _menus;
  _handler;
  _btns;

  init() {
    this._menus = this._parentEl.querySelectorAll(".form-menu");
    this._btns = this._parentEl.querySelectorAll(".form-button");
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
        ) {
          this._closeMenus();
          this._removeAriaExpanded(); // set aria expanded attribute for all buttons to false
        }
      }
    });

    document.addEventListener("pointerdown", (e) => {
      const btn = e.target.closest(".form-button");
      const menu = e.target.closest(".form-menu");

      if (!menu && !btn) {
        this._closeMenus();
        this._removeAriaExpanded(); // set aria expanded attribute for all buttons to false
      }
    });
  }

  _closeMenus(noCloseMenu = "") {
    this._menus.forEach((menu) => {
      if (noCloseMenu === menu) return;
      menu.classList.remove("form-menu--active");
    });
  }

  _removeAriaExpanded(noAriaRemove = "") {
    this._btns.forEach((btn) => {
      // noAriaRemove -- on which button not to remove aria
      if (noAriaRemove === btn) return;
      btn.setAttribute("aria-expanded", false);
    });
  }

  _toggleMenu(btn) {
    const menuToOpen = this._parentEl.querySelector(
      `#${btn.getAttribute("aria-controls")}`
    );
    this._closeMenus(menuToOpen); // pasing menu which we will not close
    this._removeAriaExpanded(btn); // passing btn on which we not remove aria expanded
    menuToOpen.classList.toggle("form-menu--active");

    // toggle aria-expanded
    btn.setAttribute(
      "aria-expanded",
      'btn.getAttribute("aria-expanded") === "false" ? "true" : "false"'
    );
  }

  _generateMarkup() {}
}

export default new FormView();
