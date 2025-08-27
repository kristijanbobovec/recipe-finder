/*
 *
 *   Router
 *
 */

import aboutController from "./controllers/AboutController";
import homeController from "./controllers/HomeController";
import recipesController from "./controllers/RecipesController";

class Router {
  _routes = {
    "": homeController,
    about: aboutController,
    recipes: recipesController,
  };

  _hash;
  _controller;

  handleRoute() {
    this._hash = window.location.hash.split("?")[0].slice(1);
    this._controller = this._routes[this._hash] || this._routes[""];
    this._controller();

    return this._routes[this._hash] ? this._hash : "";
  }

  subscribeHandlerRoute(handler) {
    window.addEventListener("hashchange", function (e) {
      handler(e);
    });
  }
}

export default new Router();
