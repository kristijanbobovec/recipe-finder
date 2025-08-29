import View from "./View";

class LoaderView extends View {
  _loader = document.querySelector(".loader");

  toggleLoader() {
    this._loader.classList.toggle("loader--active");
  }
}

export default new LoaderView();
