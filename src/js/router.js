/*
 *
 *   Router
 *
 */

import aboutController from "./controllers/AboutController";
import homeController from "./controllers/HomeController";
import recipesController from "./controllers/RecipesController";
import recipeController from "./controllers/RecipeController";

class Router {
  _routes = {
    "": homeController,
    about: aboutController,
    recipes: recipesController,
    recipe: recipeController,
  };

  _hash;
  _controller;
  _recipeID;

  handleRoute() {
    this._hash = window.location.hash.split("/")[0].slice(1);
    this._controller = this._routes[this._hash] || this._routes[""];

    const recipeIDRaw = Number.parseInt(window.location.hash.split("/")[1]);
    this._recipeID = Number.isFinite(recipeIDRaw) ? recipeIDRaw : -1;

    if (this._hash === "recipe") this._controller(this._recipeID);
    else this._controller();

    return this._routes[this._hash] ? this._hash : "";
  }

  subscribeHandlerRoute(handler) {
    window.addEventListener("hashchange", function (e) {
      handler(e);
    });
  }
}

export default new Router();
